export function Calendar(prefix, self) {
  return self.wrapComponent({
    template: `<g>
    <rect
      class="elastigantt__calendar"
      x="0"
      y="0"
      v-bind:width="$root.$data.width"
      v-bind:height="$root.$data.calendar.height"
      v-bind:style="$root.$data.calendar.style"></rect>
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
        return this.$root.$data.verticalGrid.width/2;
      },
      days(){
        const days = [];
        for(let i=0,len=this.$root.$data.times.steps; i<len; i++){
          days.push({
            x: this.$root.$data.verticalGrid.width + i * this.$root.$data.times.stepPx,
            y: 0,
            width: this.$root.$data.times.stepPx-this.$root.$data.verticalGrid.width,
            height: this.$root.$data.calendar.height,
          });
        }
        return days;
      },
    }
  });
}
