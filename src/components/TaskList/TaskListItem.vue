<template>
<div class="elastigantt__task-list-item" :style="root.state.taskList.styles.row">
  <div class="elastigantt__task-list-item-column elastigantt__task-list-item-column--expander" :style="expanderStyle">
    <task-list-expander :tasks="[task]"></task-list-expander>
  </div>
  <item-column v-for="column in root.state.taskList.columns" :key="column._id" :column="column" :task="task"></item-column>
</div>
</template>
<script>
import TaskListExpander from './Expander.vue';
import ItemColumn from './ItemColumn.vue';

export default {
  components: {
    'task-list-expander': TaskListExpander,
    'item-column': ItemColumn
  },
  inject: ['root'],
  props: ['task', 'expanderStyle'],
  data() {
    return {};
  },
}
</script>
