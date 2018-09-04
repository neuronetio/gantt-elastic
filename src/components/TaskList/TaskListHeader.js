export function TaskListHeader(prefix, self) {
  return self.wrapComponent({
    props : [ 'expanderStyle' ],
    template : `<div class="elastigantt__task-list-header">
      <div class="elastigantt__task-list-header-column elastigantt__task-list-header-column--expander" :style="expanderStyle">
        <${prefix}-task-list-expander :tasks="collapsible"></${prefix}-task-list-expander>
      </div>
      <div class="elastigantt__task-list-header-column"
        v-for="column in $root.$data.taskList.columns"
        :key="column.label"
        :style="getStyle(column)"
      >
      <div class="elastigantt__task-list-header-label" :column="column"
        @mouseup="resizerMouseUp($event, column)"
      >{{column.label}}</div>
      <div class="elastigantt__task-list-header-resizer" :column="column"
        @mousedown="resizerMouseDown($event, column)"
      ></div>
      </div>
    </div>`,
    data() {
      return {
        resizer : {
          moving : false,
          x : 0,
        }
      };
    },
    computed : {
      getStyle() {
        return column => {
          const state = this.$root.$data;
          return {
            'height': (state.calendar.height + state.calendar.strokeWidth) + 'px',
                'margin-bottom': state.calendar.gap + 'px', 'width': column.finalWidth + 'px'
          }
        }
      },
      collapsible() { return this.$root.$data.tasks.filter(task => task.allChildren.length > 0); }
    },
    methods : {
      resizerMouseDown(event, column) {
        if (!this.resizerMoving) {
          this.resizer.moving       = column;
          this.resizer.x            = event.clientX;
          this.resizer.initialWidth = column.width;
        }
      },
      resizerMouseMove(event, column) {
        if (this.resizer.moving) {
          this.resizer.moving.width = this.resizer.initialWidth + event.clientX - this.resizer.x;
          this.$root.calculateTaskListColumnWidths();
        }
      },
      resizerMouseUp(event, column) { this.resizer.moving = false; },
    },
    created() {
      this.$root.$on('mousemove', this.resizerMouseMove);
      this.$root.$on('mouseup', this.resizerMouseUp);
    }
  });
}
