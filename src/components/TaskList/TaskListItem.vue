<template>
  <div class="gantt-elastic__task-list-item" :style="root.style('task-list-item')">
    <item-column v-for="column in root.state.taskList.columns" :key="column._id" :column="column" :task="task">
      <task-list-expander v-if="column.expander" :tasks="[task]" :style="expanderStyle"></task-list-expander>
    </item-column>
  </div>
</template>
<script>
import TaskListExpander from "./Expander.vue";
import ItemColumn from "./ItemColumn.vue";

export default {
  components: {
    TaskListExpander,
    ItemColumn
  },
  inject: ["root"],
  props: ["task", "expanderStyle"],
  data () {
    return {};
  }
};
</script>
