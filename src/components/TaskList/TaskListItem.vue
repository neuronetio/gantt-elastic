<template>
<div class="elastigantt__task-list-item" :style="root.state.taskList.styles.row">
  <div class="elastigantt__task-list-item-column elastigantt__task-list-item-column--expander" :style="expanderStyle">
    <task-list-expander :tasks="[task]"></task-list-expander>
  </div>
  <div class="elastigantt__task-list-item-column" v-for="column in root.state.taskList.columns" :key="column.label" :style="getStyle(column)" :column="column">
    <div class="elastigantt__task-list-item-value" :style="column.styles.value">{{task[column.value]}}</div>
  </div>
</div>
</template>
<script>
import TaskListExpander from './Expander.vue';

export default {
  components: {
    'task-list-expander': TaskListExpander,
  },
  inject: ['root'],
  props: [
    "task", "expanderStyle"
  ],
  data() {
    return {};
  },
  computed: {
    getStyle() {
      const state = this.root.state;
      return column => {
        let height = state.row.height + state.horizontalGrid.gap * 2 - state.horizontalGrid.strokeWidth;
        return Object.assign({
          'height': height + "px",
          "line-height": height + "px",
          'width': column.finalWidth + "px"
        }, state.taskList.styles.column);
      };
    },
    getContent(column) {
      return this.task[column.value];
    }
  }
}
</script>
