export function TaskListItem(prefix, self) {
  return self.wrapComponent({
    props: [
      "task", "expanderStyle"
    ],
    template: `<div class="elastigantt__task-list-item" :style="$root.$data.taskList.styles.row">
      <div class="elastigantt__task-list-item-column elastigantt__task-list-item-column--expander" :style="expanderStyle">
        <${prefix}-task-list-expander :tasks="[task]"></${prefix}-task-list-expander>
      </div>
      <div class="elastigantt__task-list-item-column"
        v-for="column in $root.$data.taskList.columns"
        :key="column.label"
        :style="getStyle(column)"
        :column="column"
      >
        <div class="elastigantt__task-list-item-value" :style="column.styles.value">{{task[column.value]}}</div>
      </div>
    </div>`,
    data() {
      return {};
    },
    computed: {
      getStyle() {
        const state = this.$root.$data;
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
  });
}
