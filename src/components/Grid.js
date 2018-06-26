export function Grid(prefix, self) {
  return self.wrapComponent({

    template: `<g>
        <line
          v-for="(line,index) in horizontalLines"
          :key="line.key"
          :x1="line.x1"
          :y1="line.y1"
          :x2="line.x2"
          :y2="line.y2"
          :style="line.style"
        ></line>
        <line
          v-for="(line,index) in verticalLines"
          :key="line.key"
          :x1="line.x1"
          :y1="line.y1"
          :x2="line.x2"
          :y2="line.y2"
          :style="line.style"
        ></line>
      </g>`,

    data() {
      return {};
    },
    methods: {

    },
    computed: {
      verticalLines() {
        this.$root.$data.verticalGrid.lines = [];
        for (let step = 0; step < this.$root.$data.times.steps; step++) {
          let x = step * this.$root.$data.times.stepPx;
          this.$root.$data.verticalGrid.lines.push({
            key: step,
            x1: x,
            y1: 0,
            x2: x,
            y2: '100%',
            style: this.$root.$data.verticalGrid.style
          });
        }
        return this.$root.$data.verticalGrid.lines;
      },
      horizontalLines() {
        this.$root.$data.horizontalGrid.lines = [];
        for (let [index, task] of this.$root.$data.tasks.entries()) {
          this.$root.$data.horizontalGrid.lines.push({
            key: 'hl' + task.key,
            x1: 0,
            y1: index * (this.$root.$data.row.height + this.$root.$data.horizontalGrid.gap) + this.$root.$data.horizontalGrid.gap / 2,
            x2: '100%',
            y2: index * (this.$root.$data.row.height + this.$root.$data.horizontalGrid.gap) + this.$root.$data.horizontalGrid.gap / 2,
            style: this.$root.$data.horizontalGrid.style
          });
        }
        return this.$root.$data.horizontalGrid.lines;
      }
    }
  });
}
