export function Calendar(prefix, self) {
  return self.wrapComponent({
    template: `<g class="elastigantt__calendar-group">
      <rect
        class="elastigantt__calendar"
        :x="getX"
        :y="getY"
        :width="getWidth"
        :height="$root.$data.calendar.height"
        :style="$root.$data.calendar.style"
      ></rect>
      <${prefix}-calendar-day
        v-for="(day,index) in days"
        :key="day.key"
        :day="day"
      ></${prefix}-calendar-day>
      <${prefix}-calendar-hour
        v-for="(hour,index) in hours"
        :key="hour.key"
        :hour="hour"
      ></${prefix}-calendar-hour>
      <div ref="hourText" :style="hourTextStyle"></div>
    </g>`,
    data() {
      return {};
    },
    methods:{
      howManyHoursFit(current = 24, currentRecurrection = 1){
        let max = {
          short:0,
          medium:0,
          long:0
        };
        const state = this.$root.$data;
        self.ctx.font = state.calendar.day.fontSize+' '+state.calendar.fontFamily;
        let firstDate = moment(state.times.firstDate).locale(state.locale);
        for(let i=0;i<current;i++){
          let currentDate = firstDate.add(i,'hours').toDate();
          let textWidth = {
            short:self.ctx.measureText(state.calendar.hour.format.short(currentDate)).width,
            medium:self.ctx.measureText(state.calendar.hour.format.medium(currentDate)).width,
            long:self.ctx.measureText(state.calendar.hour.format.long(currentDate)).width,
          };
          if(textWidth.short>=max.short){
            max.short=textWidth.short;
          }
          if(textWidth.medium>=max.medium){
            max.medium=textWidth.medium;
          }
          if(textWidth.long>=max.long){
            max.long=textWidth.long;
          }
        }
        let cellWidth = state.times.stepPx/current - state.calendar.strokeWidth - 2;
        if(current>1){
          if(max.short > cellWidth){
            currentRecurrection++;
            return this.howManyHoursFit(Math.ceil(current/currentRecurrection), currentRecurrection);
          }
        }
        if(currentRecurrection < 3){
          if(max.long <= cellWidth){
            return {count:current, type:'long'};
          }
          if(max.medium <= cellWidth){
            return {count:current, type:'medium'};
          }
        }
        if(max.short <= cellWidth && current>1){
          return {count:current, type:'short'};
        }
        return {count:0, type:'short'};
      },
      howManyDaysFit(current = this.$root.$data.times.steps, currentRecurrection = 1){
        let max = {
          short:0,
          medium:0,
          long:0
        };
        const state = this.$root.$data;
        self.ctx.font = state.calendar.day.fontSize+' '+state.calendar.fontFamily;
        let firstDate = moment(state.times.firstDate).locale(state.locale);
        for(let i=0;i<current;i++){
          let currentDate = firstDate.add(i,'days').toDate();
          let textWidth = {
            short:self.ctx.measureText(state.calendar.day.format.short(currentDate)).width,
            medium:self.ctx.measureText(state.calendar.day.format.medium(currentDate)).width,
            long:self.ctx.measureText(state.calendar.day.format.long(currentDate)).width,
          };
          if(textWidth.short>=max.short){
            max.short=textWidth.short;
          }
          if(textWidth.medium>=max.medium){
            max.medium=textWidth.medium;
          }
          if(textWidth.long>=max.long){
            max.long=textWidth.long;
          }
        }
        let cellWidth = state.times.totalViewDurationPx/current - state.calendar.strokeWidth - 2;
        if(current>1){
          if(max.short > cellWidth){
            currentRecurrection++;
            return this.howManyDaysFit(Math.ceil(current/currentRecurrection), currentRecurrection);
          }
        }
        if(max.long <= cellWidth){
          return {count:current, type:'long'};
        }
        if(max.medium <= cellWidth){
          return {count:current, type:'medium'};
        }
        if(max.short <= cellWidth && current > 1){
          return {count:current, type:'short'};
        }
        return {cunt:0,type:'short'};
      },
      hourTextStyle(){
        return 'font-family:'+this.$root.$data.calendar.hour.fontFamily+';font-size:'+this.$root.$data.calendar.hour.fontSize;
      },
      dayTextStyle(){
        return 'font-family:'+this.$root.$data.calendar.day.fontFamily+';font-size:'+this.$root.$data.calendar.day.fontSize;
      },
    },
    computed:{
      getX(){
        return this.$root.$data.calendar.strokeWidth/2;
      },
      getY(){
        return this.$root.$data.calendar.strokeWidth/2;
      },
      getWidth(){
        return this.$root.$data.width-this.$root.$data.calendar.strokeWidth;
      },

      hours(){
        let hours = [];
        let hoursCount = this.howManyHoursFit();
        let hourStep=24/hoursCount.count;
        let state = this.$root.$data;
        for(let i=0,len=state.times.steps*hoursCount.count; i<len; i++){
          const date = new Date(state.times.firstTime+i*hourStep*60*60*1000);
          hours.push({
            key:'h'+i,
            x: state.calendar.strokeWidth/2 + i * state.times.stepPx/hoursCount.count,
            y: state.calendar.strokeWidth/2+state.calendar.day.height,
            width: state.times.stepPx/hoursCount.count,
            height: state.calendar.hour.height,
            label: state.calendar.hour.format[hoursCount.type](date)
          });
        }
        return state.calendar.hours = hours;
      },
      days(){
        let days = [];
        let daysCount = this.howManyDaysFit();
        let dayStep = this.$root.$data.times.steps / daysCount.count;
        for(let i=0,len=daysCount.count; i<len; i++){
          const date = new Date(this.$root.$data.times.firstTime+i*dayStep*24*60*60*1000);
          days.push({
            key:'d'+i,
            x: this.$root.$data.calendar.strokeWidth/2 + i * this.$root.$data.times.totalViewDurationPx / daysCount.count,
            y: this.$root.$data.calendar.strokeWidth/2,
            width: this.$root.$data.times.totalViewDurationPx / daysCount.count,
            height: this.$root.$data.calendar.day.height,
            label: this.$root.$data.calendar.day.format[daysCount.type](date)
          });
        }
        return this.$root.$data.calendar.days = days;
      },
    }
  });
}
