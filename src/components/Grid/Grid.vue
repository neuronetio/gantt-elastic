<template>
<g>
  <line class="elastigantt__grid-horizontal-line" v-for="(line,index) in horizontalLines" :key="line.key" :x1="line.x1" :y1="line.y1" :x2="line.x2" :y2="line.y2" :style="getHStyle"></line>
  <line class="elastigantt__grid-vertical-line" v-for="(line,index) in verticalLines" :key="line.key" :x1="line.x1" :y1="line.y1" :x2="line.x2" :y2="line.y2" :style="getVStyle"></line>
  <line class="elastigantt__grid-time-line" :x1="timeLine.x" :y1="timeLine.y1" :x2="timeLine.x" :y2="timeLine.y2" :style="root.state.grid.timeLine.style"></line>
</g>
</template>
<script>
export default {
  inject: ['root'],
  data() {
    return {
      timeLine: {
        x: 0,
        y1: '0%',
        y2: '100%',
        dateTime: '',
      },
    };
  },
  created() {
    this.reposition();
    this.root.$on('recenterPosition', this.recenterPosition);
    /*this.root.state.grid.timeLine.intervalHandler = setInterval(() => {
      this.reposition();
    }, 1000);*/
  },
  methods: {
    reposition() {
      const state = this.root.state;
      const d = new Date();
      const current = d.getTime();
      const currentOffset = this.root.timeToPixelOffsetX(current);
      this.timeLine.x = currentOffset;
      this.timeLine.dateTime = d.toLocaleDateString();
      console.log(this.timeLine.dateTime);
    },
    recenterPosition() {

    }
  },
  computed: {
    getVStyle() {
      return this.root.state.grid.vertical.style;
    },
    getHStyle() {
      return this.root.state.grid.horizontal.style;
    },
    verticalLines() {
      let lines = [];
      const state = this.root.state;
      for (let step = 0; step <= state.times.steps; step++) {
        let x = step * state.times.stepPx + state.grid.vertical.style.strokeWidth / 2;
        lines.push({
          key: step,
          x1: x,
          y1: state.calendar.height + state.calendar.styles.column['stroke-width'] + state.calendar.gap,
          x2: x,
          y2: state.calendar.height + state.calendar.styles.column['stroke-width'] + state.calendar.gap + (state.tasks.length * (state.row.height + state.grid.horizontal.gap * 2)) + state.grid.horizontal.style.strokeWidth
        });
      }
      return state.grid.vertical.lines = lines;
    },
    horizontalLines() {
      let lines = [];
      const state = this.root.state;
      let tasks = this.root.visibleTasks;
      for (let index = 0, len = tasks.length; index <= len; index++) {
        lines.push({
          key: 'hl' + index,
          x1: 0,
          y1: index * (state.row.height + state.grid.horizontal.gap * 2) + state.calendar.height + state.calendar.styles.column['stroke-width'] + state.calendar.gap + state.grid.horizontal.style.strokeWidth / 2,
          x2: state.times.steps * state.times.stepPx + state.grid.vertical.style.strokeWidth,
          y2: index * (state.row.height + state.grid.horizontal.gap * 2) + state.calendar.height + state.calendar.styles.column['stroke-width'] + state.calendar.gap + state.grid.horizontal.style.strokeWidth / 2
        });
      }
      return state.grid.horizontal.lines = lines;
    }
  }
}
</script>
