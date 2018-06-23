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
      return window.elastiganttStore.initStore(prefix, 'TreeRow', {});
    },
    computed: {
      getId() {
        return this.task.key;
      },
      getHeight() {
        return this.shared.row.height;
      },
      getWidth() {
        console.log('getWidth', this.task.durationMs)
        if (this.task.durationMs) {
          return this.task.durationMs / this.shared.times.timePerPixel;
        }
        return this.task.durationMs;
      },
      getX() {
        console.log('getX')
        let x = this.task.startTime - this.shared.times.firstTaskTime;
        if (x) {
          x = x / this.shared.times.timePerPixel;
        }
        return x;
      },
      getY() {
        let row = this.shared.row;
        let horizontalGrid = this.shared.horizontalGrid;
        return ((row.height + horizontalGrid.gap) * this.index) + horizontalGrid.gap;
      },
      getTextX() {
        return this.getX + 10;
      },
      getTextY() {
        return this.getY + this.shared.row.height / 10;
      },
      getStyle() {
        return this.task.style ? this.task.style : this.shared.row.style;
      },
    }
  });
}
