<template>
<div class="elastigantt__task-list-header">
  <div class="elastigantt__task-list-header-column" v-for="column in root.state.taskList.columns" :key="column._id" :style="getStyle(column)">
    <task-list-expander v-if="column.expander" :style="expanderStyle" :tasks="collapsible"></task-list-expander>
    <div class="elastigantt__task-list-header-label" :style="column.styles.label" :column="column" @mouseup="resizerMouseUp($event, column)">{{column.label}}</div>
    <div class="elastigantt__task-list-header-resizer" :column="column" @mousedown="resizerMouseDown($event, column)"></div>
  </div>
</div>
</template>

<script>
import TaskListExpander from './Expander.vue';

export default {
  components: {
    TaskListExpander,
  },
  inject: ['root'],
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
        const state = this.root.state;
        return Object.assign({
          'height': (state.calendar.height + state.calendar.styles.column['stroke-width']) + 'px',
          'margin-bottom': state.calendar.gap + 'px',
          'width': column.finalWidth + 'px'
        }, state.taskList.styles.header);
      }
    },
    collapsible() {
      return this.root.state.tasks.filter(task => task.allChildren.length > 0);
    }
  },
  methods: {
    resizerMouseDown(event, column) {
      if (!this.resizerMoving) {
        this.resizer.moving = column;
        this.resizer.x = event.clientX;
        this.resizer.initialWidth = column.width;
        this.$root.$emit('elastigantt.taskList.column.width.change.start', this.resizer.moving.width);
      }
    },
    resizerMouseMove(event) {
      if (this.resizer.moving) {
        this.resizer.moving.width = this.resizer.initialWidth + event.clientX - this.resizer.x;
        this.$root.$emit('elastigantt.taskList.column.width.change', this.resizer.moving.width);
      }
    },
    resizerMouseUp(event) {
      if (this.resizer.moving) {
        this.$root.$emit('elastigantt.taskList.column.width.change', this.resizer.moving.width);
        this.$root.$emit('elastigantt.taskList.column.width.change.stop', this.resizer.moving.width);
        this.resizer.moving = false;
      }
    }
  },
  created() {
    this.$root.$on('elastigantt.main.mousemove', this.resizerMouseMove);
    this.$root.$on('elastigantt.main.mouseup', this.resizerMouseUp);
  }
}
</script>
