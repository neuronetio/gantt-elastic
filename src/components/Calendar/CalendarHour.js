export function CalendarHour(prefix, self) {
  return self.wrapComponent({
    props:['hour'],
    template: `<g class="elastigantt__calendar-hour-group">
    <rect
      class="elastigantt__calendar-hour"
      :x="hour.x"
      :y="hour.y"
      :width="hour.width"
      :height="hour.height"
    ></rect>
    <text
      :x="getTextX"
      :y="getTextY"
      alignment-baseline="middle"
      text-anchor="middle"
    >{{hour.label}}</text>
    </g>`,
    data() {
      return {};
    },
    computed:{
      getTextX(){
        return this.hour.x+this.hour.width/2;
      },
      getTextY(){
        return this.hour.y+this.hour.height/2;
      },
    }
  });
}
