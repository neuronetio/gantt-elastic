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
        :key="index"
        :day="day"
      ></${prefix}-calendar-day>
    </g>`,
    data() {
      return {};
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
      days(){
        this.$root.$data.calendar.days = [];
        for(let i=0,len=this.$root.$data.times.steps; i<len; i++){
          const date = new Date(this.$root.$data.times.firstTaskDate.getTime()+i*24*60*60*1000);
          this.$root.$data.calendar.days.push({
            x: this.$root.$data.calendar.strokeWidth/2 + i * this.$root.$data.times.stepPx,
            y: this.$root.$data.calendar.strokeWidth/2,
            width: this.$root.$data.times.stepPx,
            height: this.$root.$data.calendar.height,
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
