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
        for (let step = 0; step <= this.$root.$data.times.steps; step++) {
          let x = step * this.$root.$data.times.stepPx + this.$root.$data.verticalGrid.width;
          this.$root.$data.verticalGrid.lines.push({
            key: step,
            x1: x,
            y1: this.$root.$data.calendar.height,
            x2: x,
            y2: '100%',
            style: this.$root.$data.verticalGrid.style
          });
        }
        return this.$root.$data.verticalGrid.lines;
      },
      horizontalLines() {
        this.$root.$data.horizontalGrid.lines = [];
        let tasks = this.$root.$data.tasks;
        for (let index = 0, len = tasks.length; index <= len; index++) {
          this.$root.$data.horizontalGrid.lines.push({
            key: 'hl' + index,
            x1: this.$root.$data.verticalGrid.width,
            y1: index * (this.$root.$data.row.height + this.$root.$data.horizontalGrid.gap) + this.$root.$data.horizontalGrid.gap / 2 + this.$root.$data.calendar.height,
            x2: '100%',
            y2: index * (this.$root.$data.row.height + this.$root.$data.horizontalGrid.gap) + this.$root.$data.horizontalGrid.gap / 2 + this.$root.$data.calendar.height,
            style: this.$root.$data.horizontalGrid.style
          });
        }
        return this.$root.$data.horizontalGrid.lines;
      }
    }
  });
}
