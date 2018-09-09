<template>
<svg class="elastigantt_tree-object"
    x="0"
    y="0"
    :width="getWidth"
    :height="getHeight"
    xmlns="http://www.w3.org/2000/svg">
  <calendar></calendar>
  <grid></grid>
  <tree-dependency-lines :tasks="root.visibleTasks"></tree-dependency-lines>
  <g v-for="task in root.visibleTasks"  :task="task">
    <component :task="task" :is="'tree-row-'+task.type"></component>
  </g>
</svg>
</template>
<script>
import Grid from '../Grid/Grid.vue';
import Calendar from '../Calendar/Calendar.vue';
import DependencyLines from './DependencyLines.vue';
import Task from './Row/Task.vue';
import Milestone from './Row/Milestone.vue';
import Project from './Row/Project.vue';

export default {
  components: {
    'grid': Grid,
    'tree-dependency-lines': DependencyLines,
    'calendar': Calendar,
    'tree-row-task': Task,
    'tree-row-milestone': Milestone,
    'tree-row-project': Project
  },
  inject: ['root'],
  data() {
    return {};
  },
  computed: {
    getWidth() {
      const state = this.root.state;
      return state.width;
    },
    getHeight() {
      const state = this.root.state;
      return state.height;
    }
  }
}
</script>
