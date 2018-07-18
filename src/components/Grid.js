export function Grid(prefix, self) {
  return self.wrapComponent({

    template: `<g>
        <line
          class="elastigantt__grid-horizontal-line"
          v-for="(line,index) in horizontalLines"
          :key="line.key"
          :x1="line.x1"
          :y1="line.y1"
          :x2="line.x2"
          :y2="line.y2"
        ></line>
        <line
          class="elastigantt__grid-horizontal-line"
          v-for="(line,index) in verticalLines"
          :key="line.key"
          :x1="line.x1"
          :y1="line.y1"
          :x2="line.x2"
          :y2="line.y2"
        ></line>
      </g>`,

    data() {
      return {};
    },
    computed: {
      verticalLines() {
        let lines = [];
        for (let step = 0; step <= this.$root.$data.times.steps; step++) {
          let x = step * this.$root.$data.times.stepPx + this.$root.$data.verticalGrid.strokeWidth/2;
          lines.push({
            key: step,
            x1: x,
            y1: this.$root.$data.calendar.height+this.$root.$data.calendar.strokeWidth+ this.$root.$data.calendar.gap,
            x2: x,
            y2: this.$root.$data.calendar.height+this.$root.$data.calendar.strokeWidth+ this.$root.$data.calendar.gap+(this.$root.$data.tasks.length*(this.$root.$data.row.height+this.$root.$data.horizontalGrid.gap*2))+this.$root.$data.horizontalGrid.strokeWidth,
          });
        }
        return this.$root.$data.verticalGrid.lines = lines;
      },
      horizontalLines() {
        let lines = [];
        let tasks = this.$root.$data.tasks;
        for (let index = 0, len = tasks.length; index <= len; index++) {
          lines.push({
            key: 'hl' + index,
            x1: 0,
            y1: index * (this.$root.$data.row.height + this.$root.$data.horizontalGrid.gap*2) + this.$root.$data.calendar.height + this.$root.$data.calendar.strokeWidth + this.$root.$data.calendar.gap + this.$root.$data.horizontalGrid.strokeWidth/2,
            x2: this.$root.$data.times.steps*this.$root.$data.times.stepPx+this.$root.$data.verticalGrid.strokeWidth,
            y2: index * (this.$root.$data.row.height + this.$root.$data.horizontalGrid.gap*2) + this.$root.$data.calendar.height+this.$root.$data.calendar.strokeWidth+ this.$root.$data.calendar.gap+ this.$root.$data.horizontalGrid.strokeWidth/2,
          });
        }
        return this.$root.$data.horizontalGrid.lines = lines;
      }
    }
  });
}
