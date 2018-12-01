<template>
  <svg
    class="gantt-elastic__tree"
    :style="root.style('tree')"
    ref="tree"
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
        class="gantt-elastic__tree-graph"
        ref="treeGraph"
        :style="root.style('tree-graph',{height:'100%'})"
      >
        <svg
          class="gantt-elastic__tree"
          :style="root.style('tree')"
          ref="tree"
          x="0"
          y="0"
          :width="getWidth+'px'"
          :height="root.state.allVisibleTasksHeight+'px'"
          :viewBox="getViewBox"
          xmlns="http://www.w3.org/2000/svg"
        >
          <grid></grid>
          <dependency-lines :tasks="root.visibleTasks"></dependency-lines>
          <g
            class="gantt-elastic__tree-row-wrapper"
            :style="root.style('tree-row-wrapper')"
            v-for="task in root.visibleTasks"
            :task="task"
            :key="task.id"
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
    Project
  },
  inject: ["root"],
  data () {
    return {
      moving: false
    };
  },
  mounted () {
    this.root.state.refs.tree = this.$refs.tree;
    this.root.state.refs.treeGraph = this.$refs.treeGraph;
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
