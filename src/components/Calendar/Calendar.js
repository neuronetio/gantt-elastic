export function Calendar(prefix, self) {
  return self.wrapComponent({
    template: `<g class="elastigantt__calendar-group">
      <foreignObject
        :x="getX"
        :y="getY"
        :width="getWidth"
        :height="$root.$data.calendar.height"
      >
        <div class="elastigantt__calendar" :style="$root.$data.calendar.styles.wrapper" xmlns="http://www.w3.org/1999/xhtml"></div>
      </foreignObject>
      <${prefix}-calendar-row
        v-for="(month,index) in months"
        :key="month.key"
        :item="month"
      ></${prefix}-calendar-row>
      <${prefix}-calendar-row
        v-for="(day,index) in days"
        :key="day.key"
        :item="day"
      ></${prefix}-calendar-row>
      <${prefix}-calendar-row
        v-for="(hour,index) in hours"
        :key="hour.key"
        :item="hour"
      ></${prefix}-calendar-row>
    </g>`,
    data() {
      return {cache: {}};
    },
    methods: {
      howManyHoursFit(current = 24, currentRecurrection = 1) {
        let max = {
          short: 0,
          medium: 0,
          long: 0
        };
        const state = this.$root.$data;
        self.ctx.font = state.calendar.day.fontSize + ' ' + state.calendar.fontFamily;
        let firstDate = dayjs(state.times.firstDate);
        for (let i = 0; i < current; i++) {
          let currentDate = firstDate.add(i, 'hours').toDate();
          let textWidth = {
            short: self.ctx.measureText(state.calendar.hour.format.short(currentDate)).width,
            medium: self.ctx.measureText(state.calendar.hour.format.medium(currentDate)).width,
            long: self.ctx.measureText(state.calendar.hour.format.long(currentDate)).width
          };
          if (textWidth.short >= max.short) {
            max.short = textWidth.short;
          }
          if (textWidth.medium >= max.medium) {
            max.medium = textWidth.medium;
          }
          if (textWidth.long >= max.long) {
            max.long = textWidth.long;
          }
        }
        let cellWidth = state.times.stepPx / current - state.calendar.styles.column['stroke-width'] - 2;
        if (current > 1) {
          if (max.short > cellWidth) {
            currentRecurrection++;
            return this.howManyHoursFit(Math.ceil(current / currentRecurrection), currentRecurrection);
          }
        }
        if (currentRecurrection < 3) {
          if (max.long <= cellWidth) {
            return {count: current, type: 'long'};
          }
          if (max.medium <= cellWidth) {
            return {count: current, type: 'medium'};
          }
        }
        if (max.short <= cellWidth && current > 1) {
          return {count: current, type: 'short'};
        }
        return {count: 0, type: 'short'};
      },
      howManyDaysFit(current = this.$root.$data.times.steps, currentRecurrection = 1) {
        let max = {
          short: 0,
          medium: 0,
          long: 0
        };
        const state = this.$root.$data;
        self.ctx.font = state.calendar.day.fontSize + ' ' + state.calendar.fontFamily;
        let firstDate = dayjs(state.times.firstDate);
        for (let i = 0; i < current; i++) {
          let currentDate = firstDate.add(i, 'days').toDate();
          let textWidth = {
            short: self.ctx.measureText(state.calendar.day.format.short(currentDate)).width,
            medium: self.ctx.measureText(state.calendar.day.format.medium(currentDate)).width,
            long: self.ctx.measureText(state.calendar.day.format.long(currentDate)).width
          };
          if (textWidth.short >= max.short) {
            max.short = textWidth.short;
          }
          if (textWidth.medium >= max.medium) {
            max.medium = textWidth.medium;
          }
          if (textWidth.long >= max.long) {
            max.long = textWidth.long;
          }
        }
        let cellWidth = state.times.totalViewDurationPx / current - state.calendar.styles.column['stroke-width'] - 2;
        if (current > 1) {
          if (max.short > cellWidth) {
            currentRecurrection++;
            return this.howManyDaysFit(Math.ceil(current / currentRecurrection), currentRecurrection);
          }
        }
        if (max.long <= cellWidth) {
          return {count: current, type: 'long'};
        }
        if (max.medium <= cellWidth) {
          return {count: current, type: 'medium'};
        }
        if (max.short <= cellWidth && current > 1) {
          return {count: current, type: 'short'};
        }
        return {cunt: 0, type: 'short'};
      },
      hourTextStyle() {
        return 'font-family:' + this.$root.$data.calendar.hour.fontFamily + ';font-size:' + this.$root.$data.calendar.hour.fontSize;
      },
      dayTextStyle() {
        return 'font-family:' + this.$root.$data.calendar.day.fontFamily + ';font-size:' + this.$root.$data.calendar.day.fontSize;
      }
    },
    computed: {
      getX() {
        return this.$root.$data.calendar.styles.column['stroke-width'] / 2;
      },
      getY() {
        return this.$root.$data.calendar.styles.column['stroke-width'] / 2;
      },
      getWidth() {
        return this.$root.$data.width - this.$root.$data.calendar.styles.column['stroke-width'];
      },

      hours() {
        let hours = [];
        let hoursCount = this.howManyHoursFit();
        let hourStep = 24 / hoursCount.count;
        let state = this.$root.$data;
        for (let i = 0, len = state.times.steps * hoursCount.count; i < len; i++) {
          const date = new Date(state.times.firstTime + i * hourStep * 60 * 60 * 1000);
          hours.push({
            key: 'h' + i,
            x: state.calendar.styles.column['stroke-width'] / 2 + i * state.times.stepPx / hoursCount.count,
            y: state.calendar.styles.column['stroke-width'] / 2 + state.calendar.day.height + state.calendar.month.height,
            width: state.times.stepPx / hoursCount.count,
            height: state.calendar.hour.height,
            label: state.calendar.hour.format[hoursCount.type](date)
          });
        }
        return state.calendar.hours = hours;
      },
      days() {
        let state = this.$root.$data;
        let days = [];
        let daysCount = this.howManyDaysFit();
        let dayStep = state.times.steps / daysCount.count;
        for (let i = 0, len = daysCount.count; i < len; i++) {
          const date = new Date(state.times.firstTime + i * dayStep * 24 * 60 * 60 * 1000);
          days.push({
            key: 'd' + i,
            x: state.calendar.styles.column['stroke-width'] / 2 + i * state.times.totalViewDurationPx / daysCount.count,
            y: state.calendar.styles.column['stroke-width'] / 2 + state.calendar.month.height,
            width: state.times.totalViewDurationPx / daysCount.count,
            height: state.calendar.day.height,
            label: state.calendar.day.format[daysCount.type](date)
          });
        }
        return state.calendar.days = days;
      },
      months() {
        let state = this.$root.$data;
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
          if (self.ctx.measureText(state.calendar.month.format[format](date)).width > width) {
            format = 'medium';
            if (self.ctx.measureText(state.calendar.month.format[format](date)).width > width) {
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
  });
}
