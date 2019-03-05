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
    :style="root.style('chart', { width: getWidth + 'px', height: getHeight + 'px' })"
    ref="chart"
  >
    <calendar></calendar>
    <div
      :style="root.style('chart-area', { width: '100%', height: $store.state.GanttElastic.options.rowsHeight + 'px' })"
    >
      <div class="gantt-elastic__chart-graph" ref="chartGraph" :style="root.style('chart-graph', { height: '100%' })">
        <svg
          class="gantt-elastic__chart"
          :style="root.style('chart')"
          ref="chart"
          x="0"
          y="0"
          :width="getWidth + 'px'"
          :height="$store.state.GanttElastic.options.allVisibleTasksHeight + 'px'"
          xmlns="http://www.w3.org/2000/svg"
        >
          <days-highlight></days-highlight>
          <grid></grid>
          <dependency-lines :tasks="root.visibleTasks"></dependency-lines>
          <g
            class="gantt-elastic__chart-row-wrapper"
            :style="root.style('chart-row-wrapper')"
            v-for="task in root.visibleTasks"
            :task="task"
            :key="task.id"
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
    this.$store.commit(this.root.updateOptionsMut, {
      refs: {
        chart: this.$refs.chart,
        chartGraph: this.$refs.chartGraph
      }
    });
  },

  computed: {
    /**
     * Get width
     *
     * @returns {number}
     */
    getWidth() {
      return this.$store.state.GanttElastic.options.width;
    },

    /**
     * Get height
     *
     * @returns {number}
     */
    getHeight() {
      return this.$store.state.GanttElastic.options.height;
    },

    /**
     * Get view box
     *
     * @returns {string}
     */
    getViewBox() {
      return `0 0 ${Math.round(this.getWidth)} ${this.$store.state.GanttElastic.options.allVisibleTasksHeight}`;
    }
  }
};
</script>
