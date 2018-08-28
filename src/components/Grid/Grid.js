export function Grid(prefix, self) {
  return self.wrapComponent({

    template : `<g>
        <line
          class="elastigantt__grid-vertical-line"
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

    data() { return {}; },
    computed : {
      verticalLines() {
        let lines   = [];
        const state = this.$root.$data;
        for (let step = 1; step <= state.times.steps; step++) {
          let x = step * state.times.stepPx + state.verticalGrid.strokeWidth / 2;
          lines.push({
            key : step,
            x1 : x,
            y1 : state.calendar.height + state.calendar.strokeWidth + state.calendar.gap,
            x2 : x,
            y2 : state.calendar.height + state.calendar.strokeWidth + state.calendar.gap +
                     (state.tasks.length * (state.row.height + state.horizontalGrid.gap * 2)) +
                     state.horizontalGrid.strokeWidth,
          });
        }
        return state.verticalGrid.lines = lines;
      },
      horizontalLines() {
        let lines   = [];
        const state = this.$root.$data;
        let tasks   = state.tasks;
        for (let index = 0, len = tasks.length; index <= len; index++) {
          lines.push({
            key : 'hl' + index,
            x1 : 0,
            y1 : index * (state.row.height + state.horizontalGrid.gap * 2) + state.calendar.height +
                     state.calendar.strokeWidth + state.calendar.gap + state.horizontalGrid.strokeWidth / 2,
            x2 : state.times.steps * state.times.stepPx + state.verticalGrid.strokeWidth,
            y2 : index * (state.row.height + state.horizontalGrid.gap * 2) + state.calendar.height +
                     state.calendar.strokeWidth + state.calendar.gap + state.horizontalGrid.strokeWidth / 2,
          });
        }
        return state.horizontalGrid.lines = lines;
      }
    }
  });
}
