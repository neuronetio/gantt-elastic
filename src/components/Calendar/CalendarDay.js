export function CalendarDay(prefix, self) {
  return self.wrapComponent({
    props:['day'],
    template: `<rect
      class="elastigantt__calendar-day"
      :x="day.x"
      :y="day.y"
      :width="day.width"
      :height="day.height"
      style="fill:#FF000050"
    ></rect>`,
    data() {
      return {};
    },

  });
}
