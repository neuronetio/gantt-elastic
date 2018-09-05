export function TaskList(prefix, self) {
  return self.wrapComponent({
    template: `<foreignObject class="elastigantt__task-list-object"
      x="0"
      y="0"
      width="100%"
      height="100%"
      v-if="$root.$data.taskList.display"
      >
      <div  xmlns="http://www.w3.org/1999/xhtml" class="elastigantt__task-list-container">
      <div v-html="$root.$data.defs.join('')"></div>
        <${prefix}-task-list-resizer></${prefix}-task-list-resizer>
        <${prefix}-task-list-header :expander-style="getHeaderExpanderStyle"></${prefix}-task-list-header>
        <${prefix}-task-list-item
          v-for="task in $root.getVisibleTasks()"
          :key="task.id"
          :task="task"
          :expander-style="getListExpanderStyle"
        ></${prefix}-task-list-item>
      </div>
    </foreignObject>`,
    data() {
      return {};
    },
    computed: {
      getHeaderExpanderStyle() {
        const state = this.$root.$data;
        return Object.assign({
          'width': state.taskList.expander.columnWidth + state.calendar.strokeWidth + 'px',
          'height': state.calendar.height + state.calendar.strokeWidth + 'px',
          'margin-bottom': state.calendar.gap + 'px'
        }, this.$root.$data.taskList.styles.header);
      },
      getListExpanderStyle() {
        const state = this.$root.$data;
        let height = state.row.height + (state.horizontalGrid.gap * 2) - state.horizontalGrid.strokeWidth;
        return {
          'width': state.taskList.expander.columnWidth + state.calendar.strokeWidth + 'px',
          'height': height + 'px',
          'border-color': '#00000010'
        };
      }
    }
  });
}
