<!--
/**
 * @fileoverview TaskListItem component
 * @license MIT
 * @author Rafal Pospiech <neuronet.io@gmail.com>
 * @package GanttElastic
 */
-->
<template>
  <div class="gantt-elastic__task-list-item" :style="{ ...root.style['task-list-item'] }">
    <item-column v-for="column in columns" :key="column._id" :column="column" :task="task">
      <task-list-expander
        v-if="column.expander"
        :tasks="[task]"
        :options="root.state.options.taskList.expander"
        type="taskList"
      ></task-list-expander>
    </item-column>
  </div>
</template>
<script>
import TaskListExpander from '../Expander.vue';
import ItemColumn from './ItemColumn.vue';

export default {
  name: 'TaskListItem',
  components: {
    TaskListExpander,
    ItemColumn
  },
  inject: ['root'],
  props: ['task'],
  data() {
    return {};
  },
  computed: {
    columns() {
      return this.root.state.options.taskList.columns;
    }
  }
};
</script>
