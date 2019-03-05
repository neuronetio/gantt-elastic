<!--
/**
 * @fileoverview Calendar component
 * @license MIT
 * @author Rafal Pospiech <neuronet.io@gmail.com>
 * @package GanttElastic
 */
-->
<template>
  <div
    class="gantt-elastic__calendar-wrapper"
    :style="root.style('calendar-wrapper',{'margin-bottom':$store.state.GanttElastic.options.calendar.gap+'px'})"
  >
    <div class="gantt-elastic__calendar" :style="root.style('calendar',{width:getWidth+'px'})">
      <calendar-row
        :items="$store.state.GanttElastic.options.calendar.months"
        which="month"
        v-if="$store.state.GanttElastic.options.calendar.month.display"
      ></calendar-row>
      <calendar-row
        :items="$store.state.GanttElastic.options.calendar.days"
        which="day"
        v-if="$store.state.GanttElastic.options.calendar.day.display"
      ></calendar-row>
      <calendar-row
        :items="$store.state.GanttElastic.options.calendar.hours"
        which="hour"
        v-if="$store.state.GanttElastic.options.calendar.hour.display"
      ></calendar-row>
    </div>
  </div>
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
    return {};
  },

  /**
   * Created
   */
  created () {
    this.root.$on("scope-change", this.regenerate);
    this.root.$on("times-timeZoom-change", this.regenerate);
    this.root.$on("tasks-changed", this.regenerate);
    this.root.$on("options-changed", this.regenerate);
  },

  /**
   * Mounted
   */
  mounted () {
    this.regenerate();
  },

  methods: {
    /**
     * How many hours will fit?
     *
     * @returns {object}
     */
    howManyHoursFit (dayIndex) {
      const stroke = parseFloat(this.root.style('calendar-row-rect')['border-width']);
      const additionalSpace = stroke * 2 + 2;
      let fullCellWidth = this.$store.state.GanttElastic.options.times.steps[dayIndex].width.px;
      let formatNames = Object.keys(this.$store.state.GanttElastic.options.calendar.hour.format);
      for (let hours = 24; hours > 1; hours = Math.ceil(hours / 2)) {
        for (let formatName of formatNames) {
          if ((this.$store.state.GanttElastic.options.calendar.hour.maxWidths[formatName] + additionalSpace) * hours <= fullCellWidth && hours > 1) {
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

    /**
     * How many days will fit?
     *
     * @returns {object}
     */
    howManyDaysFit () {
      const stroke = parseFloat(this.root.style('calendar-row-rect')['border-width']);
      const additionalSpace = stroke * 2 + 2;
      let fullWidth = this.$store.state.GanttElastic.options.width;
      let formatNames = Object.keys(this.$store.state.GanttElastic.options.calendar.day.format);
      for (let days = this.$store.state.GanttElastic.options.times.steps.length; days > 1; days = Math.ceil(days / 2)) {
        for (let formatName of formatNames) {
          if (
            (this.$store.state.GanttElastic.options.calendar.day.maxWidths[formatName] + additionalSpace) * days <= fullWidth && days > 1) {
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

    /**
     * How many months will fit?
     *
     * @returns {object}
     */
    howManyMonthsFit () {
      const stroke = parseFloat(this.root.style('calendar-row-rect')['border-width']);
      const additionalSpace = stroke * 2 + 2;
      let fullWidth = this.$store.state.GanttElastic.options.width;
      let formatNames = Object.keys(this.$store.state.GanttElastic.options.calendar.month.format);
      let currentMonth = dayjs(this.$store.state.GanttElastic.options.times.firstTime);
      let previousMonth = currentMonth.clone();
      const lastTime = this.$store.state.GanttElastic.options.times.lastTime;
      let monthsCount = 1;
      while (currentMonth.valueOf() <= lastTime) {
        currentMonth = currentMonth.add(1, "day");
        if (previousMonth.month() !== currentMonth.month()) {
          monthsCount++;
        }
        previousMonth = currentMonth.clone();
      }
      for (let months = monthsCount; months > 1; months = Math.ceil(months / 2)) {
        for (let formatName of formatNames) {
          if ((this.$store.state.GanttElastic.options.calendar.month.maxWidths[formatName] + additionalSpace) * months <= fullWidth && months > 1) {
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

    /**
     * Get hour text style
     *
     * @returns {string}
     */
    hourTextStyle () {
      return ("font-family:" + this.$store.state.GanttElastic.options.calendar.hour.fontFamily + ";font-size:" + this.$store.state.GanttElastic.options.calendar.hour.fontSize);
    },

    /**
     * Get text style
     *
     * @returns {string}
     */
    dayTextStyle () {
      return ("font-family:" + this.$store.state.GanttElastic.options.calendar.day.fontFamily + ";font-size:" + this.$store.state.GanttElastic.options.calendar.day.fontSize);
    },

    /**
     * Generate hours
     *
     * @returns {array}
     */
    generateHours () {
      let hours = [];
      if (!this.$store.state.GanttElastic.options.calendar.hour.display) {
        return this.$store.commit(this.root.updateOptionsMut, { calendar: { hours: [] } });
      }
      for (let hourIndex = 0, len = this.$store.state.GanttElastic.options.times.steps.length; hourIndex < len; hourIndex++) {
        const hoursCount = this.howManyHoursFit(hourIndex);
        if (hoursCount.count === 0) {
          return this.$store.commit(this.root.updateOptionsMut, { calendar: { hours } });
        }
        const hourStep = 24 / hoursCount.count;
        const hourWidthPx = this.$store.state.GanttElastic.options.times.steps[hourIndex].width.px / hoursCount.count;
        for (let i = 0, len = hoursCount.count; i < len; i++) {
          const date = dayjs(this.$store.state.GanttElastic.options.times.steps[hourIndex].time).add(i * hourStep, "hour");
          let textWidth = 0;
          if (typeof this.$store.state.GanttElastic.options.calendar.hour.widths[hourIndex] !== 'undefined') {
            textWidth = this.$store.state.GanttElastic.options.calendar.hour.widths[hourIndex][hoursCount.type];
          }
          let x = this.$store.state.GanttElastic.options.times.steps[hourIndex].offset.px + hourWidthPx * i;
          hours.push({
            index: hourIndex,
            key: this.$store.state.GanttElastic.options.times.steps[hourIndex].time + "h" + i,
            x,
            y: this.$store.state.GanttElastic.options.calendar.day.height + this.$store.state.GanttElastic.options.calendar.month.height,
            width: hourWidthPx,
            textWidth,
            height: this.$store.state.GanttElastic.options.calendar.hour.height,
            label: this.$store.state.GanttElastic.options.calendar.hour.format[hoursCount.type](date),
            type: hoursCount.type
          });
        }
      }
      return this.$store.commit(this.root.updateOptionsMut, { calendar: { hours } });
    },

    /**
     * Generate days
     *
     * @returns {array}
     */
    generateDays () {
      let days = [];
      if (!this.$store.state.GanttElastic.options.calendar.day.display) {
        return this.$store.commit(this.root.updateOptionsMut, { calendar: { days: [] } });
      }
      const daysCount = this.howManyDaysFit();
      if (daysCount.count === 0) {
        return this.$store.commit(this.root.updateOptionsMut, { calendar: { days } });
      }
      const dayStep = Math.ceil(this.$store.state.GanttElastic.options.times.steps.length / daysCount.count);
      for (let dayIndex = 0, len = this.$store.state.GanttElastic.options.times.steps.length; dayIndex < len; dayIndex += dayStep) {
        let dayWidthPx = 0;
        // day could be shorter (daylight saving time) so join widths and divide
        for (let currentStep = 0; currentStep < dayStep; currentStep++) {
          if (typeof this.$store.state.GanttElastic.options.times.steps[dayIndex + currentStep] !== "undefined") {
            dayWidthPx += this.$store.state.GanttElastic.options.times.steps[dayIndex + currentStep].width.px;
          }
        }
        const date = dayjs(this.$store.state.GanttElastic.options.times.steps[dayIndex].time);
        let textWidth = 0;
        if (typeof this.$store.state.GanttElastic.options.calendar.day.widths[dayIndex] !== 'undefined') {
          textWidth = this.$store.state.GanttElastic.options.calendar.day.widths[dayIndex][daysCount.type];
        }
        let x = this.$store.state.GanttElastic.options.times.steps[dayIndex].offset.px;
        days.push({
          index: dayIndex,
          key: this.$store.state.GanttElastic.options.times.steps[dayIndex].time + "d",
          x,
          y: this.$store.state.GanttElastic.options.calendar.month.height,
          width: dayWidthPx,
          textWidth,
          height: this.$store.state.GanttElastic.options.calendar.day.height,
          label: this.$store.state.GanttElastic.options.calendar.day.format[daysCount.type](date),
          type: daysCount.type
        });
      }
      return this.$store.commit(this.root.updateOptionsMut, { calendar: { days } });
    },

    /**
     * Generate months
     *
     * @returns {array}
     */
    generateMonths () {
      let months = [];
      if (!this.$store.state.GanttElastic.options.calendar.month.display) {
        return this.$store.commit(this.root.updateOptionsMut, { calendar: { months: [] } });
      }
      const monthsCount = this.howManyMonthsFit();
      let formatNames = Object.keys(this.$store.state.GanttElastic.options.calendar.month.format);
      let currentDate = dayjs(this.$store.state.GanttElastic.options.times.firstTime);
      for (let monthIndex = 0; monthIndex < monthsCount.count; monthIndex++) {
        let monthWidth = 0;
        let monthOffset = Number.MAX_SAFE_INTEGER;
        let finalDate = dayjs(currentDate).add(1, "month").startOf("month");
        if (finalDate.valueOf() > this.$store.state.GanttElastic.options.times.lastTime) {
          finalDate = dayjs(this.$store.state.GanttElastic.options.times.lastTime);
        }
        // we must find first and last step to get the offsets / widths
        for (let step = 0, len = this.$store.state.GanttElastic.options.times.steps.length; step < len; step++) {
          let currentStep = this.$store.state.GanttElastic.options.times.steps[step];
          if (currentStep.time >= currentDate.valueOf() && currentStep.time < finalDate.valueOf()) {
            monthWidth += currentStep.width.px;
            if (currentStep.offset.px < monthOffset) {
              monthOffset = currentStep.offset.px;
            }
          }
        }
        let label = "";
        let choosenFormatName;
        for (let formatName of formatNames) {
          if (this.$store.state.GanttElastic.options.calendar.month.maxWidths[formatName] + 2 <= monthWidth) {
            label = this.$store.state.GanttElastic.options.calendar.month.format[formatName](currentDate.toDate());
            choosenFormatName = formatName;
          }
        }
        let textWidth = 0;
        if (typeof this.$store.state.GanttElastic.options.calendar.month.widths[monthIndex] !== 'undefined') {
          textWidth = this.$store.state.GanttElastic.options.calendar.month.widths[monthIndex][choosenFormatName];
        }
        let x = monthOffset;
        months.push({
          index: monthIndex,
          key: monthIndex + "m",
          x,
          y: 0,
          width: monthWidth,
          textWidth,
          type: choosenFormatName,
          height: this.$store.state.GanttElastic.options.calendar.month.height,
          label
        });
        currentDate = currentDate.add(1, "month").startOf("month");
        if (currentDate.valueOf() > this.$store.state.GanttElastic.options.times.lastDate) {
          currentDate = dayjs(this.$store.state.GanttElastic.options.times.lastDate);
        }
      }
      return this.$store.commit(this.root.updateOptionsMut, { calendar: { months } });
    },

    /**
     * Regenerate dates
     */
    regenerate () {
      this.generateHours();
      this.generateDays();
      this.generateMonths();
      this.root.calculateCalendarDimensions();
    }

  },

  computed: {

    /**
     * Get width
     *
     * @returns {number}
     */
    getWidth () {
      let width = this.$store.state.GanttElastic.options.width;
      return width;
    },

    /**
     * Get month style
     *
     * @returns {object}
     */
    monthsStyle () {
      return this.root.mergeDeep({}, this.$store.state.GanttElastic.options.calendar.styles.row, this.$store.state.GanttElastic.options.calendar.month.style);
    },

    /**
     * Get day style
     *
     * @returns {object}
     */
    daysStyle () {
      return this.root.mergeDeep({}, this.$store.state.GanttElastic.options.calendar.styles.row, this.$store.state.GanttElastic.options.calendar.day.style);
    },

    /**
     * Get hour styke
     *
     * @returns {object}
     */
    hoursStyle () {
      return this.root.mergeDeep({}, this.$store.state.GanttElastic.options.calendar.styles.row, this.$store.state.GanttElastic.options.calendar.hour.style);
    },

    /**
     * Get visible days
     *
     * @returns {array}
     */
    getDays () {
      return this.days.filter(day => this.root.isInsideViewPort(day.x, day.width));
    },

    /**
     * Get visible hours
     *
     * @returns {array}
     */
    getHours () {
      return this.hours.filter(hour => this.root.isInsideViewPort(hour.x, hour.width));
    },

    /**
     * Get visible months
     *
     * @returns {array}
     */
    getMonths () {
      return this.months.filter(month => this.root.isInsideViewPort(month.x, month.width));
    },
  }
};
</script>
