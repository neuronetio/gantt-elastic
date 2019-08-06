<!--
/**
 * @fileoverview Group component
 * @license MIT
 * @author Gabriel Jimenez <gjimenez@nextdigital.es>
 * @package GanttElastic
 */
-->
<template>
  <g>
    <component
      v-for="subtask in subtaskList"
      :task="subtask"
      :key="subtask.id"
      :is="subtask.type">
    </component>
  </g>
</template>

<script>
import ChartText from '../Text.vue';
import ProgressBar from '../ProgressBar.vue';
import Expander from '../../Expander.vue';
import taskMixin from './Task.mixin.js';
import Task from 'gantt-elastic/src/components/Chart/Row/Task';
import Milestone from 'gantt-elastic/src/components/Chart/Row/Milestone';
import Project from 'gantt-elastic/src/components/Chart/Row/Project';
export default {
  name: 'Group',
  components: {
    Task,
    Milestone,
    Project,
  },
  inject: ['root'],
  props: ['task'],
  mixins: [taskMixin],
  data() {
    return {};
  },
  computed: {
    subtaskList() {
      return this.task.tasks;
    },
  },
};
</script>
