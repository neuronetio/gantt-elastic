<template>
  <g
    class="gantt-elastic__chart-row-progress-bar-wrapper"
    :style="root.style('chart-row-progress-bar-wrapper', task.style['chart-row-progress-bar-wrapper'])"
  >
    <defs>
      <pattern
        id="diagonalHatch"
        :width="root.state.progress.width"
        :height="root.state.progress.width"
        patternTransform="rotate(45 0 0)"
        patternUnits="userSpaceOnUse"
      >
        <line
          class="chart-row-progress-bar-line"
          :style="root.style('chart-row-progress-bar-line', task.style['chart-row-progress-bar-line'])"
          x1="0"
          y1="0"
          x2="0"
          :y2="root.state.progress.width"
        />
      </pattern>
    </defs>
    <rect
      v-if="root.state.progress.bar"
      class="gantt-elastic__chart-row-progress-bar-solid"
      :style="root.style('chart-row-progress-bar-solid', task.style['chart-row-progress-bar-solid'])"
      x="0"
      y="0"
      :width="getProgressWidth"
    ></rect>
    <g v-if="root.state.progress.pattern">
      <rect
        class="gantt-elastic__chart-row-progress-bar-pattern"
        :style="root.style('chart-row-progress-bar-pattern', task.style['chart-row-progress-bar-pattern'])"
        :x="getProgressWidth"
        y="0"
        :width="100-task.progress+'%'"
        height="100%"
      ></rect>
      <path
        class="gantt-elastic__chart-row-progress-bar-outline"
        :style="root.style('chart-row-progress-bar-outline', task.style['base'], task.style['chart-row-progress-bar-outline'])"
        :d="getLinePoints"
      ></path>
    </g>
  </g>
</template>

<script>
export default {
  inject: ["root"],
  props: ["task"],
  data () {
    return {};
  },
  computed: {
    getProgressWidth () {
      return this.task.progress + "%";
    },
    getLinePoints () {
      const start = (this.task.width / 100) * this.task.progress;
      return `M ${start} 0 L ${start} ${this.task.height}`;
    },
    getSolidStyle () {
      return Object.assign({}, this.root.state.progress.styles.bar.solid, this.task.progressBarStyle.bar);
    },
    getLineStyle () {
      return Object.assign({}, {
        stroke: this.root.state.row.styles.bar.stroke + "a0",
        "stroke-width": this.root.state.row.styles.bar["stroke-width"] / 2
      }, this.task.style);
    }
  }
};
</script>
