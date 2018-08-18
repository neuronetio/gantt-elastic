export function TaskListItem(prefix, self) {
  return self.wrapComponent({
    props : [ 'task' ],
    template : `<div class="elastigantt__task-list-item">
      <div class="elastigantt__task-list-item-column"
      v-for="column in $root.$data.taskList.columns"
      :key="column.label"
      :style="getStyle"
      >
        <div class="elastigantt__task-list-item-value" :style="{width:column.finalWidth}">{{task[column.value]}}</div>
      </div>
    </div>`,
    data() {
      return {};
    },
    computed : {
      getStyle() {
        const state = this.$root.$data;
        let height  = state.row.height + (state.horizontalGrid.gap * 2) - state.horizontalGrid.strokeWidth;
        return {'height' : height + 'px', 'line-height' : height + 'px'};
      },
      getContent(column) {
        return this.task[column.value];
      }
    }
  });
}
