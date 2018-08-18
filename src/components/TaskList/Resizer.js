export function TaskListResizer(prefix, self) {
  return self.wrapComponent({
    template : `<div class="elastigantt__task-list-resizer" style="getStyle"></div>`,
    data() {
      return {};
    },
    computed : {
      getStyle() {
        const state = this.$root.$data;
        return {height : '100%', width : state.taskList.resizerWidth + 'px'};
      }
    }
  });
}
