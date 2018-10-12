<template>
<g class="elastigantt__calendar-group">
  <foreignObject :x="getX" :y="getY" :width="getWidth" :height="root.state.calendar.height">
    <div class="elastigantt__calendar" :style="root.state.calendar.styles.wrapper" xmlns="http://www.w3.org/1999/xhtml"></div>
  </foreignObject>
  <calendar-row v-for="(month,index) in months" :key="month.key" :item="month"></calendar-row>
  <calendar-row v-for="(day,index) in days" :key="day.key" :item="day" v-if="root.isInsideViewPort(day.x,day.width)"></calendar-row>
  <calendar-row v-for="(hour,index) in hours" :key="hour.key" :item="hour" v-if="root.isInsideViewPort(hour.x,hour.width)"></calendar-row>
</g>
</template>
<script>
import CalendarRow from './CalendarRow.vue';
export default {
  components: {
    CalendarRow
  },
  inject: ['root'],
  data() {
    return {
      hours: [],
      days: [],
      months: [],
    };
  },
  created() {
    this.$root.$on('elastigantt.scope.change', this.regenerate);
    this.$root.$on('elastigantt.times.timeZoom.change', this.regenerate);
    this.regenerate();
  },
  methods: {
    howManyHoursFit(dayIndex) {
      let firstDate = dayjs(this.root.state.times.steps[dayIndex].date);
      const additionalSpace = this.root.state.calendar.styles.column['stroke-width'] + 2;
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
        type: ''
      };
    },
    howManyDaysFit() {
      let firstDate = dayjs(this.root.state.times.steps[0].date);
      const additionalSpace = this.root.state.calendar.styles.column['stroke-width'] + 2;
      let fullWidth = this.root.state.width;
      let formatNames = Object.keys(this.root.state.calendar.day.format);
      for (let days = this.root.state.times.steps.length; days > 1; days = Math.ceil(days / 2)) {
        for (let formatName of formatNames) {
          if ((this.root.state.calendar.day.maxWidths[formatName] + additionalSpace) * days <= fullWidth && days > 1) {
            return {
              count: days,
              type: formatName
            };
          }
        }
      }
      return {
        count: 0,
        type: ''
      };
    },
    howManyMonthsFit() {
      let firstDate = dayjs(this.root.state.times.firstDate);
      const additionalSpace = this.root.state.calendar.styles.column['stroke-width'] + 2;
      let fullWidth = this.root.state.width;
      let formatNames = Object.keys(this.root.state.calendar.day.format);
      const monthsCount = Math.ceil(this.root.state.times.lastDate.diff(this.root.state.times.firstDate, 'months', true));
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
        count: 0,
        type: ''
      };
    },
    hourTextStyle() {
      return 'font-family:' + this.root.state.calendar.hour.fontFamily + ';font-size:' + this.root.state.calendar.hour.fontSize;
    },
    dayTextStyle() {
      return 'font-family:' + this.root.state.calendar.day.fontFamily + ';font-size:' + this.root.state.calendar.day.fontSize;
    },
    generateHours() {
      let hours = [];
      for (let dayIndex = 0, len = this.root.state.times.steps.length; dayIndex < len; dayIndex++) {
        const hoursCount = this.howManyHoursFit(dayIndex);
        const hourStep = 24 / hoursCount.count;
        const hourWidthPx = this.root.state.times.steps[dayIndex].width.px / hoursCount.count;
        for (let i = 0, len = hoursCount.count; i < len; i++) {
          const date = dayjs(this.root.state.times.steps[dayIndex].date).add(i * hourStep, 'hour');
          hours.push({
            key: this.root.state.times.steps[dayIndex].date.valueOf() + 'h' + i,
            x: this.root.state.calendar.styles.column['stroke-width'] / 2 + this.root.state.times.steps[dayIndex].offset.px + hourWidthPx * i,
            y: this.root.state.calendar.styles.column['stroke-width'] / 2 + this.root.state.calendar.day.height + this.root.state.calendar.month.height,
            width: hourWidthPx,
            height: this.root.state.calendar.hour.height,
            label: this.root.state.calendar.hour.format[hoursCount.type](date)
          });
        }
      }
      return this.hours = hours;
    },
    generateDays() {
      let days = [];
      const daysCount = this.howManyDaysFit();
      const dayStep = Math.ceil(this.root.state.times.steps.length / daysCount.count);
      for (let dayIndex = 0, len = this.root.state.times.steps.length; dayIndex < len; dayIndex += dayStep) {
        let dayWidthPx = 0;
        // day could be shorter (daylight saving time) so join widths and divide
        for (let currentStep = 0; currentStep < dayStep; currentStep++) {
          if (typeof this.root.state.times.steps[dayIndex + currentStep] !== 'undefined') {
            dayWidthPx += this.root.state.times.steps[dayIndex + currentStep].width.px;
          }
        }
        const date = dayjs(this.root.state.times.steps[dayIndex].date);
        days.push({
          key: this.root.state.times.steps[dayIndex].date.valueOf() + 'd',
          x: this.root.state.calendar.styles.column['stroke-width'] / 2 + this.root.state.times.steps[dayIndex].offset.px,
          y: this.root.state.calendar.styles.column['stroke-width'] / 2 + this.root.state.calendar.month.height,
          width: dayWidthPx,
          height: this.root.state.calendar.day.height,
          label: this.root.state.calendar.day.format[daysCount.type](date)
        });
      }
      return this.days = days;
    },
    generateMonths() {
      let months = [];
      const monthsCount = this.howManyMonthsFit();
      let currentDate = dayjs(this.root.state.times.firstDate);
      let startOfMonth = 0;
      let currentDays = 0;
      for (let monthIndex = 0; monthIndex < monthsCount.count; monthIndex++) {
        let monthWidth = 0;
        let monthOffset = Number.MAX_SAFE_INTEGER;
        let finalDate = dayjs(currentDate).add(1, 'month').startOf('month');
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
        months.push({
          key: monthIndex + 'm',
          x: this.root.state.calendar.styles.column['stroke-width'] / 2 + monthOffset,
          y: this.root.state.calendar.styles.column['stroke-width'] / 2,
          width: monthWidth,
          height: this.root.state.calendar.month.height,
          label: this.root.state.calendar.month.format[monthsCount.type](currentDate)
        });

        currentDate = currentDate.add(1, 'month').startOf('month');
        if (currentDate.valueOf() > this.root.state.times.lastDate.valueOf()) {
          currentDate = dayjs(this.root.state.times.lastDate);
        }
      }
      return this.months = months;
    },
    regenerate() {
      this.$nextTick(() => {
        this.generateHours();
        this.generateDays();
        this.generateMonths();
      });
    }
  },
  computed: {
    getX() {
      return this.root.state.calendar.styles.column['stroke-width'] / 2;
    },
    getY() {
      return this.root.state.calendar.styles.column['stroke-width'] / 2;
    },
    getWidth() {
      let width = this.root.state.width - this.root.state.calendar.styles.column['stroke-width'];
      return width;
    },
  }
}
</script>
