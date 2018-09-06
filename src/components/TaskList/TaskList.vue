<template>
<foreignObject class="elastigantt__task-list-object" x="0" y="0" width="100%" height="100%" v-if="state.taskList.display">
  <div xmlns="http://www.w3.org/1999/xhtml" class="elastigantt__task-list-container">
    <div v-html="state.defs.join('')"></div>
    <task-list-resizer></task-list-resizer>
    <task-list-header :expander-style="getHeaderExpanderStyle"></task-list-header>
    <task-list-item v-for="task in $root.getVisibleTasks()" :key="task.id" :task="task" :expander-style="getListExpanderStyle"></task-list-item>
  </div>
</foreignObject>
</template>
<script>
export default {
  inject: ['state'],
  data() {
    return {};
  },
  computed: {
    getHeaderExpanderStyle() {
      const state = this.state;
      return Object.assign({
        'width': state.taskList.expander.columnWidth + state.calendar.styles.column['stroke-width'] + 'px',
        'height': state.calendar.height + state.calendar.styles.column['stroke-width'] + 'px',
        'margin-bottom': state.calendar.gap + 'px'
      }, this.state.taskList.styles.header);
    },
    getListExpanderStyle() {
      const state = this.state;
      let height = state.row.height + (state.horizontalGrid.gap * 2) - state.horizontalGrid.strokeWidth;
      return {
        'width': state.taskList.expander.columnWidth + state.calendar.styles.column['stroke-width'] + 'px',
        'height': height + 'px',
        'border-color': '#00000010'
      };
    }
  }
}
</script>
