<template>
<div class="elastigantt__task-list-item" :style="state.taskList.styles.row">
  <div class="elastigantt__task-list-item-column elastigantt__task-list-item-column--expander" :style="expanderStyle">
    <task-list-expander :tasks="[task]"></task-list-expander>
  </div>
  <div class="elastigantt__task-list-item-column" v-for="column in state.taskList.columns" :key="column.label" :style="getStyle(column)" :column="column">
    <div class="elastigantt__task-list-item-value" :style="column.styles.value">{{task[column.value]}}</div>
  </div>
</div>
</template>
<script>
export default {
  inject: ['state'],
  props: [
    "task", "expanderStyle"
  ],
  data() {
    return {};
  },
  computed: {
    getStyle() {
      const state = this.state;
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
