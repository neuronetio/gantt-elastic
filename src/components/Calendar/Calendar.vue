<!--
/**
 * @fileoverview Calendar component
 * @license MIT
 * @author Rafal Pospiech <neuronet.io@gmail.com>
 * @package GanttElastic
 */
-->
<template>
  <g class="gantt-elastic__calendar-wrapper" :style="root.style('calendar-wrapper')">
    <foreignObject :x="getX" :y="getY" :width="getWidth" :height="root.state.calendar.height">
      <div class="gantt-elastic__calendar" :style="root.style('calendar')" xmlns="http://www.w3.org/1999/xhtml"></div>
    </foreignObject>
    <calendar-row
      class="gantt-elastic__calendar-row--month"
      v-for="month in months"
      :key="month.key"
      :item="month"
      which="month"
    ></calendar-row>
    <calendar-row
      class="gantt-elastic__calendar-row--day"
      v-for="day in days"
      :key="day.key"
      :item="day"
      which="day"
      v-if="root.isInsideViewPort(day.x,day.width)"
    ></calendar-row>
    <calendar-row
      class="gantt-elastic__calendar-row--hour"
      v-for="hour in hours"
      :key="hour.key"
      :item="hour"
      which="hour"
      v-if="root.isInsideViewPort(hour.x,hour.width)"
    ></calendar-row>
  </g>
</template>

<script>
import dayjs from "dayjs";
import CalendarRow from "./CalendarRow.vue";
export default {
  components: {
    CalendarRow
  },
  inject: ["root"],
  data () {
    return {
      hours: [],
      days: [],
      months: []
    };
  },
  created () {
    this.root.$on("scope-change", this.regenerate);
    this.root.$on("times-timeZoom-change", this.regenerate);
    this.regenerate();
  },
  methods: {
    howManyHoursFit (dayIndex) {
      const additionalSpace = this.root.style('calendar-row')["stroke-width"] + 2;
      let fullCellWidth = this.root.state.times.steps[dayIndex].width.px;
      let formatNames = Object.keys(this.root.state.calendar.hour.format);
      for (let hours = 24; hours > 1; hours = Math.ceil(hours / 2)) {
        for (let formatName of formatNames) {
          if ((this.root.state.calendar.hour.maxWidths[formatName] + additionalSpace) * hours <= fullCellWidth && hours > 1) {
            return {
              count: hours,
              type: formatName
            };
          }
        }
      }
      return {
        count: 0,
        type: ""
      };
    },
    howManyDaysFit () {
      const additionalSpace = this.root.style('calendar-row')["stroke-width"] + 2;
      let fullWidth = this.root.state.width;
      let formatNames = Object.keys(this.root.state.calendar.day.format);
      for (let days = this.root.state.times.steps.length; days > 1; days = Math.ceil(days / 2)) {
        for (let formatName of formatNames) {
          if (
            (this.root.state.calendar.day.maxWidths[formatName] + additionalSpace) * days <= fullWidth && days > 1) {
            return {
              count: days,
              type: formatName
            };
          }
        }
      }
      return {
        count: 0,
        type: ""
      };
    },
    howManyMonthsFit () {
      const additionalSpace = this.root.style('calendar-row')["stroke-width"] + 2;
      let fullWidth = this.root.state.width;
      let formatNames = Object.keys(this.root.state.calendar.month.format);
      let currentMonth = dayjs(this.root.state.times.firstDate);
      let previousMonth = currentMonth.clone();
      const lastTime = this.root.state.times.lastTime;
      let monthsCount = 1;
      while (currentMonth.valueOf() <= lastTime) {
        currentMonth = currentMonth.add(1, "day");
        if (previousMonth.month() != currentMonth.month()) {
          monthsCount++;
        }
        previousMonth = currentMonth.clone();
      }
      for (let months = monthsCount; months > 1; months = Math.ceil(months / 2)) {
        for (let formatName of formatNames) {
          if ((this.root.state.calendar.month.maxWidths[formatName] + additionalSpace) * months <= fullWidth && months > 1) {
            return {
              count: months,
              type: formatName
            };
          }
        }
      }
      return {
        count: 1,
        type: formatNames[0]
      };
    },
    hourTextStyle () {
      return ("font-family:" + this.root.state.calendar.hour.fontFamily + ";font-size:" + this.root.state.calendar.hour.fontSize);
    },
    dayTextStyle () {
      return ("font-family:" + this.root.state.calendar.day.fontFamily + ";font-size:" + this.root.state.calendar.day.fontSize);
    },
    generateHours () {
      let hours = [];
      for (let dayIndex = 0, len = this.root.state.times.steps.length; dayIndex < len; dayIndex++) {
        const hoursCount = this.howManyHoursFit(dayIndex);
        const hourStep = 24 / hoursCount.count;
        const hourWidthPx = this.root.state.times.steps[dayIndex].width.px / hoursCount.count;
        for (let i = 0, len = hoursCount.count; i < len; i++) {
          const date = dayjs(this.root.state.times.steps[dayIndex].date)
            .add(i * hourStep, "hour");
          hours.push({
            key: this.root.state.times.steps[dayIndex].date.valueOf() + "h" + i,
            x: this.root.style('calendar-row')["stroke-width"] / 2 + this.root.state.times.steps[dayIndex].offset.px + hourWidthPx * i,
            y: this.root.style('calendar-row')["stroke-width"] / 2 + this.root.state.calendar.day.height + this.root.state.calendar.month.height,
            width: hourWidthPx,
            height: this.root.state.calendar.hour.height,
            label: this.root.state.calendar.hour.format[hoursCount.type](date)
          });
        }
      }
      return (this.hours = hours);
    },
    generateDays () {
      let days = [];
      const daysCount = this.howManyDaysFit();
      const dayStep = Math.ceil(this.root.state.times.steps.length / daysCount.count);
      for (let dayIndex = 0, len = this.root.state.times.steps.length; dayIndex < len; dayIndex += dayStep) {
        let dayWidthPx = 0;
        // day could be shorter (daylight saving time) so join widths and divide
        for (let currentStep = 0; currentStep < dayStep; currentStep++) {
          if (typeof this.root.state.times.steps[dayIndex + currentStep] !== "undefined") {
            dayWidthPx += this.root.state.times.steps[dayIndex + currentStep].width.px;
          }
        }
        const date = dayjs(this.root.state.times.steps[dayIndex].date);
        days.push({
          key: this.root.state.times.steps[dayIndex].date.valueOf() + "d",
          x: this.root.style('calendar-row')["stroke-width"] / 2 + this.root.state.times.steps[dayIndex].offset.px,
          y: this.root.style('calendar-row')["stroke-width"] / 2 + this.root.state.calendar.month.height,
          width: dayWidthPx,
          height: this.root.state.calendar.day.height,
          label: this.root.state.calendar.day.format[daysCount.type](date)
        });
      }
      return (this.days = days);
    },
    generateMonths () {
      let months = [];
      const monthsCount = this.howManyMonthsFit();
      let formatNames = Object.keys(this.root.state.calendar.month.format);
      let currentDate = dayjs(this.root.state.times.firstDate);
      for (let monthIndex = 0; monthIndex < monthsCount.count; monthIndex++) {
        let monthWidth = 0;
        let monthOffset = Number.MAX_SAFE_INTEGER;
        let finalDate = dayjs(currentDate)
          .add(1, "month")
          .startOf("month");
        if (finalDate.valueOf() > this.root.state.times.lastDate.valueOf()) {
          finalDate = dayjs(this.root.state.times.lastDate);
        }
        // we must find first and last step to get the offsets / widths
        for (let step = 0, len = this.root.state.times.steps.length; step < len; step++) {
          let currentStep = this.root.state.times.steps[step];
          if (currentStep.date.valueOf() >= currentDate.valueOf() && currentStep.date.valueOf() < finalDate.valueOf()) {
            monthWidth += currentStep.width.px;
            if (currentStep.offset.px < monthOffset) {
              monthOffset = currentStep.offset.px;
            }
          }
        }
        let label = "";
        for (let formatName of formatNames) {
          if (this.root.state.calendar.month.maxWidths[formatName] + 2 <= monthWidth) {
            label = this.root.state.calendar.month.format[formatName](currentDate);
          }
        }
        months.push({
          key: monthIndex + "m",
          x: this.root.style('calendar-row')["stroke-width"] / 2 + monthOffset,
          y: this.root.style('calendar-row')["stroke-width"] / 2,
          width: monthWidth,
          height: this.root.state.calendar.month.height,
          label: label
        });
        currentDate = currentDate.add(1, "month")
          .startOf("month");
        if (currentDate.valueOf() > this.root.state.times.lastDate.valueOf()) {
          currentDate = dayjs(this.root.state.times.lastDate);
        }
      }
      return (this.months = months);
    },
    regenerate () {
      this.$nextTick(() => {
        this.generateHours();
        this.generateDays();
        this.generateMonths();
      });
    }
  },
  computed: {
    getX () {
      return this.root.style('calendar-row')["stroke-width"] / 2;
    },
    getY () {
      return this.root.style('calendar-row')["stroke-width"] / 2;
    },
    getWidth () {
      let width = this.root.state.width - this.root.style('calendar-row')["stroke-width"];
      return width;
    },
    monthsStyle () {
      return this.root.mergeDeep({}, this.root.state.calendar.styles.row, this.root.state.calendar.month.style);
    },
    daysStyle () {
      return this.root.mergeDeep({}, this.root.state.calendar.styles.row, this.root.state.calendar.day.style);
    },
    hoursStyle () {
      return this.root.mergeDeep({}, this.root.state.calendar.styles.row, this.root.state.calendar.hour.style);
    }
  }
};
</script>
