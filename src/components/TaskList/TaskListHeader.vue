<template>
<div class="elastigantt__task-list-header">
  <div class="elastigantt__task-list-header-column elastigantt__task-list-header-column--expander" :style="expanderStyle">
    <task-list-expander :tasks="collapsible"></task-list-expander>
  </div>
  <div class="elastigantt__task-list-header-column" v-for="column in state.taskList.columns" :key="column.label" :style="getStyle(column)">
    <div class="elastigantt__task-list-header-label" :style="column.styles.label" :column="column" @mouseup="resizerMouseUp($event, column)">{{column.label}}</div>
    <div class="elastigantt__task-list-header-resizer" :column="column" @mousedown="resizerMouseDown($event, column)"></div>
  </div>
</div>
</template>

<script>
export default {
  props: ['expanderStyle'],
  data() {
    return {
      resizer: {
        moving: false,
        x: 0
      }
    };
  },
  computed: {
    getStyle() {
      return column => {
        const state = this.state;
        return Object.assign({
          'height': (state.calendar.height + state.calendar.styles.column['stroke-width']) + 'px',
          'margin-bottom': state.calendar.gap + 'px',
          'width': column.finalWidth + 'px'
        }, state.taskList.styles.header);
      }
    },
    collapsible() {
      return this.state.tasks.filter(task => task.allChildren.length > 0);
    }
  },
  methods: {
    resizerMouseDown(event, column) {
      if (!this.resizerMoving) {
        this.resizer.moving = column;
        this.resizer.x = event.clientX;
        this.resizer.initialWidth = column.width;
      }
    },
    resizerMouseMove(event, column) {
      if (this.resizer.moving) {
        this.resizer.moving.width = this.resizer.initialWidth + event.clientX - this.resizer.x;
        this.$root.calculateTaskListColumnWidths();
      }
    },
    resizerMouseUp(event, column) {
      this.resizer.moving = false;
    }
  },
  created() {
    this.$root.$on('mousemove', this.resizerMouseMove);
    this.$root.$on('mouseup', this.resizerMouseUp);
  }
}
</script>
