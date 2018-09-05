export function CalendarRow(prefix, self) {
  return self.wrapComponent({
    props: ['item'],
    template: `<g class="elastigantt__calendar-row-group">
    <rect
      class="elastigantt__calendar-row"
      :x="item.x"
      :y="item.y"
      :width="item.width"
      :height="item.height"
      :style="$root.$data.calendar.styles.row"
    ></rect>
    <text
      :x="getTextX"
      :y="getTextY"
      alignment-baseline="middle"
      text-anchor="middle"
      :style="$root.$data.calendar.styles.text"
    >{{item.label}}</text>
    </g>`,
    data() {
      return {};
    },
    computed: {
      getTextX() {
        return this.item.x + this.item.width / 2;
      },
      getTextY() {
        return this.item.y + this.item.height / 2;
      }
    }
  });
}
