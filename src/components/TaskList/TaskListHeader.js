export function TaskListHeader(prefix, self) {
  return self.wrapComponent({
    template : `<div class="elastigantt__task-list-header">
      <div class="elastigantt__task-list-header-column"
        v-for="column in $root.$data.taskList.columns"
        :key="column.label"
        :style="getStyle"
      >{{column.label}}</div>
    </div>`,
    data() {
      return {};
    },
    computed : {
      getStyle() {
        const state = this.$root.$data;
        return {
          'height': (state.calendar.height + state.calendar.strokeWidth) + 'px',
              'margin-bottom': state.calendar.gap + 'px'
        }
      }
    }
  });
}
