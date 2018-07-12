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
      howManyHoursFit(current = 24){
        let max = 0;
        let ctx;
        try {
            ctx = document.createElement('canvas').getContext('2d');
            ctx.font = this.$root.$data.calendar.hour.fontSize+' '+this.$root.$data.calendar.fontFamily;
        } catch (err) {
            throw new Error('Canvas support required');
        }
        for(let i=1;i<=current;i++){
          let text= i.toString();
          if(i<10){
            text='0'+text;
          }
          let width = ctx.measureText(text).width;
          if(width>max){
            max=width;
          }
        }
        let cellWidth=this.$root.$data.times.stepPx/current - this.$root.$data.calendar.strokeWidth - 2;
        if(max>cellWidth && current>1){
          let next=2;
          switch(current){
            case 24:next=12;break;
            case 12:next=8;break;
            case 8:next=6;break;
            case 6:next=4;break;
            case 4:next=3;break;
            case 3:next=2;break;
            case 2:next=0;
          }
          return this.howManyHoursFit(next);
        }
        return current;
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
      hourTextStyle(){
        return 'visibility:hidden;font-family:'+this.$root.$data.calendar.hour.fontFamily+';font-size:'+this.$root.$data.calendar.hour.fontSize;
      },
      hours(){
        this.$root.$data.calendar.hours = [];
        let hoursCount = this.howManyHoursFit();
        let hourStep=24/hoursCount;
        for(let i=0,len=this.$root.$data.times.steps*hoursCount; i<len; i++){
          const date = new Date(this.$root.$data.times.firstTime+i*hourStep*60*60*1000);
          this.$root.$data.calendar.hours.push({
            key:'h'+i,
            x: this.$root.$data.calendar.strokeWidth/2 + i * this.$root.$data.times.stepPx/hoursCount,
            y: this.$root.$data.calendar.strokeWidth/2+this.$root.$data.calendar.day.height,
            width: this.$root.$data.times.stepPx/hoursCount,
            height: this.$root.$data.calendar.hour.height,
            style: this.$root.$data.calendar.hour.style,
            textStyle: this.$root.$data.calendar.hour.textStyle,
            fontFamily: this.$root.$data.calendar.hour.fontFamily,
            fontSize: this.$root.$data.calendar.hour.fontSize,
            date: date,
            label: this.$root.$data.calendar.hour.format(date)
          });
        }
        return this.$root.$data.calendar.hours;
      },
      days(){
        this.$root.$data.calendar.days = [];
        for(let i=0,len=this.$root.$data.times.steps; i<len; i++){
          const date = new Date(this.$root.$data.times.firstTime+i*24*60*60*1000);
          this.$root.$data.calendar.days.push({
            key:'d'+i,
            x: this.$root.$data.calendar.strokeWidth/2 + i * this.$root.$data.times.stepPx,
            y: this.$root.$data.calendar.strokeWidth/2,
            width: this.$root.$data.times.stepPx,
            height: this.$root.$data.calendar.day.height,
            style: this.$root.$data.calendar.day.style,
            textStyle: this.$root.$data.calendar.day.textStyle,
            date: date,
            label: this.$root.$data.calendar.day.format(date)
          });
        }
        return this.$root.$data.calendar.days;
      },
    }
  });
}
