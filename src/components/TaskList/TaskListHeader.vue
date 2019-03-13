<!--
/**
 * @fileoverview TaskListHeader component
 * @license MIT
 * @author Rafal Pospiech <neuronet.io@gmail.com>
 * @package GanttElastic
 */
-->
<template>
  <div
    class="gantt-elastic__task-list-header"
    :style="
      root.style('task-list-header', {
        height: $store.state.GanttElastic.options.calendar.height + 'px',
        'margin-bottom': $store.state.GanttElastic.options.calendar.gap + 'px'
      })
    "
  >
    <div
      class="gantt-elastic__task-list-header-column"
      :style="root.style('task-list-header-column', column.style['task-list-header-column'], getStyle(column))"
      v-for="column in root.getTaskListColumns"
      :key="column._id"
    >
      <task-list-expander
        v-if="column.expander"
        :tasks="collapsible"
        :options="$store.state.GanttElastic.options.taskList.expander"
      ></task-list-expander>
      <div
        class="gantt-elastic__task-list-header-label"
        :style="root.style('task-list-header-label', column.style['task-list-header-label'])"
        :column="column"
        @mouseup="resizerMouseUp"
      >
        {{ column.label }}
      </div>
      <div
        class="gantt-elastic__task-list-header-resizer-wrapper"
        :style="root.style('task-list-header-resizer-wrapper', column.style['task-list-header-resizer-wrapper'])"
        :column="column"
        @mousedown="resizerMouseDown($event, column)"
      >
        <div
          class="gantt-elastic__task-list-header-resizer"
          :style="root.style('task-list-header-resizer', column.style['task-list-header-resizer'])"
        >
          <div
            class="gantt-elastic__task-list-header-resizer-dot"
            :style="root.style('task-list-header-resizer-dot', column.style['task-list-header-resizer-dot'])"
          ></div>
          <div
            class="gantt-elastic__task-list-header-resizer-dot"
            :style="root.style('task-list-header-resizer-dot', column.style['task-list-header-resizer-dot'])"
          ></div>
          <div
            class="gantt-elastic__task-list-header-resizer-dot"
            :style="root.style('task-list-header-resizer-dot', column.style['task-list-header-resizer-dot'])"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TaskListExpander from '../Expander.vue';
export default {
  name: 'TaskListHeader',
  components: {
    TaskListExpander
  },

  inject: ['root'],

  data() {
    return {
      resizer: {
        moving: false,
        x: 0
      }
    };
  },

  computed: {
    /**
     * Get style
     *
     * @returns {object}
     */
    getStyle() {
      return column => {
        const options = this.$store.state.GanttElastic.options;
        return {
          height: options.calendar.height + this.root.style('calendar-row-rect')['border-width'] + 'px',
          width: column.finalWidth + 'px'
        };
      };
    },

    /**
     * Is this row collapsible?
     *
     * @returns {bool}
     */
    collapsible() {
      return this.$store.state.GanttElastic.tasks.filter(task => task.children.length > 0);
    }
  },

  methods: {
    /**
     * Resizer mouse down event handler
     */
    resizerMouseDown(event, column) {
      if (!this.resizerMoving) {
        this.resizer.moving = column;
        this.resizer.x = event.clientX;
        this.resizer.initialWidth = column.width;
        this.root.$emit('taskList-column-width-change-start', this.resizer.moving);
      }
    },

    /**
     * Resizer mouse move event handler
     */
    resizerMouseMove(event) {
      if (this.resizer.moving) {
        this.resizer.moving.width = this.resizer.initialWidth + event.clientX - this.resizer.x;
        if (this.resizer.moving.width < this.$store.state.GanttElastic.options.taskList.minWidth) {
          this.resizer.moving.width = this.$store.state.GanttElastic.options.taskList.minWidth;
        }
        this.root.$emit('taskList-column-width-change', this.resizer.moving);
      }
    },

    /**
     * Resizer mouse up event handler
     */
    resizerMouseUp(event) {
      if (this.resizer.moving) {
        this.root.$emit('taskList-column-width-change', this.resizer.moving);
        this.root.$emit('taskList-column-width-change-stop', this.resizer.moving);
        this.resizer.moving = false;
      }
    }
  },

  /**
   * Created
   */
  created() {
    this.mouseUpListener = document.addEventListener('mouseup', this.resizerMouseUp.bind(this));
    this.mouseMoveListener = document.addEventListener('mousemove', this.resizerMouseMove.bind(this));
    this.root.$on('main-view-mousemove', this.resizerMouseMove);
    this.root.$on('main-view-mouseup', this.resizerMouseUp);
  },

  /**
   * Before destroy event - clear all event listeners
   */
  beforeDestroy() {
    document.removeEventListener('mouseup', this.resizerMouseUp);
    document.removeEventListener('mousemove', this.resizerMouseMove);
  }
};
</script>
