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
    </g>`,
    data() {
      return {};
    },

  });
}
