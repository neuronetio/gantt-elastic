<!--
/**
 * @fileoverview Chart component
 * @license MIT
 * @author Rafal Pospiech <neuronet.io@gmail.com>
 * @package GanttElastic
 */
-->
<template>
  <div
    class="gantt-elastic__chart"
    :style="root.style('chart', { width: root.state.options.width + 'px', height: root.state.options.height + 'px' })"
    ref="chart"
  >
    <calendar></calendar>
    <div :style="root.style('chart-area', { width: '100%', height: root.state.options.rowsHeight + 'px' })">
      <div class="gantt-elastic__chart-graph" ref="chartGraph" :style="root.style('chart-graph', { height: '100%' })">
        <svg
          class="gantt-elastic__chart-graph-svg"
          :style="root.style('chart-graph-svg')"
          ref="chartGraphSvg"
          x="0"
          y="0"
          :width="root.state.options.width + 'px'"
          :height="root.state.options.allVisibleTasksHeight + 'px'"
          xmlns="http://www.w3.org/2000/svg"
        >
          <days-highlight></days-highlight>
          <grid></grid>
          <dependency-lines :tasks="root.state.tasks"></dependency-lines>
          <g
            class="gantt-elastic__chart-row-wrapper"
            :style="root.style('chart-row-wrapper')"
            v-for="task in root.state.tasks"
            :task="task"
            :key="task.id"
            v-show="task.visible"
          >
            <component :task="task" :is="task.type"></component>
          </g>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import Grid from './Grid.vue';
import DaysHighlight from './DaysHighlight.vue';
import Calendar from '../Calendar/Calendar.vue';
import DependencyLines from './DependencyLines.vue';
import Task from './Row/Task.vue';
import Milestone from './Row/Milestone.vue';
import Project from './Row/Project.vue';
export default {
  name: 'Chart',
  components: {
    Grid,
    DependencyLines,
    Calendar,
    Task,
    Milestone,
    Project,
    DaysHighlight
  },
  inject: ['root'],
  data() {
    return {
      moving: false
    };
  },
  /**
   * Mounted
   */
  mounted() {
    this.root.state.refs.chart = this.$refs.chart;
    this.root.state.refs.chartGraph = this.$refs.chartGraph;
    this.root.state.refs.chartGraphSvg = this.$refs.chartGraphSvg;
  },

  computed: {
    /**
     * Get view box
     *
     * @returns {string}
     */
    getViewBox() {
      return `0 0 ${Math.round(this.getWidth)} ${this.root.state.options.allVisibleTasksHeight}`;
    }
  }
};
</script>
