<!--
/**
 * @fileoverview Chart component
 * @license MIT
 * @author Rafal Pospiech <neuronet.io@gmail.com>
 * @package GanttElastic
 */
-->
<template>
  <svg
    class="gantt-elastic__chart"
    :style="root.style('chart')"
    ref="chart"
    x="0"
    y="0"
    :width="getWidth+'px'"
    :height="getHeight+'px'"
    xmlns="http://www.w3.org/2000/svg"
  >
    <calendar></calendar>
    <foreignObject x="0" :y="root.getCalendarHeight()" width="100%" :height="root.state.rowsHeight">
      <div
        xmlns="http://www.w3.org/1999/xhtml"
        class="gantt-elastic__chart-graph"
        ref="chartGraph"
        :style="root.style('chart-graph',{height:'100%'})"
      >
        <svg
          class="gantt-elastic__chart"
          :style="root.style('chart')"
          ref="chart"
          x="0"
          y="0"
          :width="getWidth+'px'"
          :height="root.state.allVisibleTasksHeight+'px'"
          :viewBox="getViewBox"
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
    </foreignObject>
  </svg>
</template>

<script>
import Grid from "./Grid.vue";
import DaysHighlight from "./DaysHighlight.vue";
import Calendar from "../Calendar/Calendar.vue";
import DependencyLines from "./DependencyLines.vue";
import Task from "./Row/Task.vue";
import Milestone from "./Row/Milestone.vue";
import Project from "./Row/Project.vue";
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
  inject: ["root"],
  data () {
    return {
      moving: false
    };
  },
  mounted () {
    this.root.state.refs.chart = this.$refs.chart;
    this.root.state.refs.chartGraph = this.$refs.chartGraph;
  },
  computed: {
    getWidth () {
      const state = this.root.state;
      return state.width;
    },
    getHeight () {
      const state = this.root.state;
      return state.height;
    },
    getViewBox () {
      return `0 0 ${Math.round(this.getWidth)} ${this.root.state.allVisibleTasksHeight}`;
    }
  },
};
</script>
