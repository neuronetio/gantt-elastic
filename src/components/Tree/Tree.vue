<template>
  <svg
    class="gantt-elastic_tree"
    :style="root.style('tree')"
    x="0"
    y="0"
    :width="getWidth"
    :height="getHeight"
    xmlns="http://www.w3.org/2000/svg"
  >
    <calendar></calendar>
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
    return {};
  },
  computed: {
    getWidth () {
      const state = this.root.state;
      return state.width;
    },
    getHeight () {
      const state = this.root.state;
      return state.height;
    }
  }
};
</script>
