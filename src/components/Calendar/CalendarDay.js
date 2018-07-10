export function CalendarDay(prefix, self) {
  return self.wrapComponent({
    props:['day'],
    template: `<g class="elastigantt__calendar-day-group">
    <rect
      class="elastigantt__calendar-day"
      :x="day.x"
      :y="day.y"
      :width="day.width"
      :height="day.height"
      :style="day.style"
    ></rect>
    <text
      :x="getTextX"
      :y="getTextY"
      alignment-baseline="middle"
      text-anchor="middle"
      :style="day.textStyle"
    >{{day.label}}</text>
    </g>`,
    data() {
      return {};
    },
    computed:{
      getTextX(){
        return this.day.x+this.day.width/2;
      },
      getTextY(){
        return this.day.y+this.day.height/2;
      }
    }
  });
}
