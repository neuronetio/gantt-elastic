export function TreeRow(prefix, self) {
  return self.wrapComponent({
    props: ['task', 'index'],
    template: `<g>
      <rect
        class="elastigantt__tree-row"
        v-bind:id="task.id"
        v-bind:x="task.x"
        v-bind:y="task.y"
        v-bind:width="task.width"
        v-bind:height="task.height"
        v-bind:style="getStyle"></rect>
      </g>`,

    data() {
      return {};
    },
    computed: {
      getId() {
        return this.task.key;
      },
      getHeight() {
        return this.$root.$data.row.height;
      },
      getWidth() {
        if (this.task.durationMs) {
          return this.task.durationMs / this.$root.$data.times.timePerPixel;
        }
        return this.task.durationMs;
      },
      getX() {
        let x = this.task.startTime - this.$root.$data.times.firstTaskTime;
        if (x) {
          x = x / this.$root.$data.times.timePerPixel;
        }
        return x;
      },
      getY() {
        let row = this.$root.$data.row;
        let horizontalGrid = this.$root.$data.horizontalGrid;
        return ((row.height + horizontalGrid.gap) * this.index) + horizontalGrid.gap;
      },
      getTextX() {
        return this.getX + 10;
      },
      getTextY() {
        return this.getY + this.$root.$data.row.height / 10;
      },
      getStyle() {
        return this.task.style ? this.task.style : this.$root.$data.row.style;
      },
    }
  });
}
