<template>
<g class="elastigantt__calendar-group">
  <foreignObject :x="getX" :y="getY" :width="getWidth" :height="root.state.calendar.height">
    <div class="elastigantt__calendar" :style="root.state.calendar.styles.wrapper" xmlns="http://www.w3.org/1999/xhtml"></div>
  </foreignObject>
  <calendar-row v-for="(month,index) in months" :key="month.key" :item="month"></calendar-row>
  <calendar-row v-for="(day,index) in days" :key="day.key" :item="day"></calendar-row>
  <calendar-row v-for="(hour,index) in hours" :key="hour.key" :item="hour"></calendar-row>
</g>
</template>
<script>
import CalendarRow from './CalendarRow.vue';
export default {
  components: {
    'calendar-row': CalendarRow
  },
  inject: ['root'],
  data() {
    return {
      cache: {}
    };
  },
  methods: {
    howManyHoursFit(dayIndex) {
      let firstDate = dayjs(this.root.state.times.steps[dayIndex].date);
      const additionalSpace = this.root.state.calendar.styles.column['stroke-width'] + 6;
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
      const additionalSpace = this.root.state.calendar.styles.column['stroke-width'] + 6;
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
    hourTextStyle() {
      return 'font-family:' + this.root.state.calendar.hour.fontFamily + ';font-size:' + this.root.state.calendar.hour.fontSize;
    },
    dayTextStyle() {
      return 'font-family:' + this.root.state.calendar.day.fontFamily + ';font-size:' + this.root.state.calendar.day.fontSize;
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

    hours() {
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
      return this.root.state.calendar.hours = hours;
    },
    days() {
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
      return this.root.state.calendar.days = days;
    },
    months() {
      let state = this.root.state;
      let months = [];
      let firstDate = state.times.firstDate;
      let lastDate = state.times.lastDate;
      let steps = state.times.steps;
      let currentDate = dayjs(state.times.firstDate);
      let currentMonth = currentDate.month();
      let currentDays = 0;
      let monthDays = [];
      let currentDateObj = {
        date: currentDate.clone().toDate(),
        days: 0
      };
      for (let i = 0; i < steps; i++) {
        currentDays++;
        currentDate = currentDate.clone().add(1, 'days');
        if (currentDate.month() !== currentMonth) {
          currentMonth = currentDate.month();
          currentDateObj.days = currentDays;
          monthDays.push(currentDateObj);
          currentDateObj = {
            date: currentDate.clone().toDate(),
            days: 0
          };
          currentDays = 0;
        }
      }
      if (currentDays) {
        currentDateObj.days = currentDays;
        monthDays.push(currentDateObj);
      }
      let currentOffset = state.calendar.styles.column['stroke-width'] / 2;
      for (let i = 0, len = monthDays.length; i < len; i++) {
        let days = monthDays[i].days;
        let date = monthDays[i].date;
        let width = state.times.stepPx * days;
        let format = 'long';
        if (state.ctx.measureText(state.calendar.month.format[format](date)).width > width) {
          format = 'medium';
          if (state.ctx.measureText(state.calendar.month.format[format](date)).width > width) {
            format = 'short';
          }
        };
        months.push({
          key: 'm' + i,
          x: currentOffset,
          y: state.calendar.styles.column['stroke-width'] / 2,
          width: width,
          height: state.calendar.day.height,
          label: state.calendar.month.format[format](date)
        });
        currentOffset += width;
      }
      return state.calendar.months = months;
    }
  }
}
</script>
