<!--
/**
 * @fileoverview TaskListHeader component
 * @license MIT
 * @author Rafal Pospiech <neuronet.io@gmail.com>
 * @package GanttElastic
 */
-->
<template>
  <div class="gantt-elastic__task-list-header" :style="root.style('task-list-header')">
    <div
      class="gantt-elastic__task-list-header-column"
      :style="root.style('task-list-header-column', column.style['task-list-header-column'], getStyle(column))"
      v-for="column in root.state.taskList.columns"
      :key="column._id"
    >
      <task-list-expander v-if="column.expander" :tasks="collapsible"></task-list-expander>
      <div
        class="gantt-elastic__task-list-header-label"
        :style="root.style('task-list-header-label',column.style['task-list-header-label'])"
        :column="column"
        @mouseup="resizerMouseUp"
      >{{column.label}}</div>
      <div
        class="gantt-elastic__task-list-header-resizer-wrapper"
        :style="root.style('task-list-header-resizer-wrapper',column.style['task-list-header-resizer-wrapper'])"
        :column="column"
        @mousedown="resizerMouseDown($event, column)"
      >
        <div
          class="gantt-elastic__task-list-header-resizer"
          :style="root.style('task-list-header-resizer',column.style['task-list-header-resizer'])"
        >
          <div
            class="gantt-elastic__task-list-header-resizer-dot"
            :style="root.style('task-list-header-resizer-dot',column.style['task-list-header-resizer-dot'])"
          ></div>
          <div
            class="gantt-elastic__task-list-header-resizer-dot"
            :style="root.style('task-list-header-resizer-dot',column.style['task-list-header-resizer-dot'])"
          ></div>
          <div
            class="gantt-elastic__task-list-header-resizer-dot"
            :style="root.style('task-list-header-resizer-dot',column.style['task-list-header-resizer-dot'])"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TaskListExpander from "./Expander.vue";
export default {

  components: {
    TaskListExpander
  },

  inject: ["root"],

  data () {
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
     * @returns {object}
     */
    getStyle () {
      return column => {
        const state = this.root.state;
        return {
          "height": state.calendar.height + this.root.style('calendar-row')['stroke-width'] + "px",
          "margin-bottom": state.calendar.gap + "px",
          "width": column.finalWidth + "px"
        };
      };
    },

    /**
     * Is this row collapsible?
     * @returns {bool}
     */
    collapsible () {
      return this.root.state.tasks.filter(task => task.allChildren.length > 0);
    },
  },

  methods: {
    /**
     * Resizer mouse down event handler
     */
    resizerMouseDown (event, column) {
      if (!this.resizerMoving) {
        this.resizer.moving = column;
        this.resizer.x = event.clientX;
        this.resizer.initialWidth = column.width;
        this.root.$emit("taskList-column-width-change-start", this.resizer.moving);
      }
    },

    /**
     * Resizer mouse move event handler
     */
    resizerMouseMove (event) {
      if (this.resizer.moving) {
        this.resizer.moving.width = this.resizer.initialWidth + event.clientX - this.resizer.x;
        if (this.resizer.moving.width < this.root.state.taskList.minWidth) {
          this.resizer.moving.width = this.root.state.taskList.minWidth;
        }
        this.root.$emit("taskList-column-width-change", this.resizer.moving);
      }
    },

    /**
     * Resizer mouse up event handler
     */
    resizerMouseUp (event) {
      if (this.resizer.moving) {
        this.root.$emit("taskList-column-width-change", this.resizer.moving);
        this.root.$emit("taskList-column-width-change-stop", this.resizer.moving);
        this.resizer.moving = false;
      }
    }
  },

  /**
   * Created
   */
  created () {
    this.mouseUpListener = document.addEventListener('mouseup', (event) => {
      this.resizerMouseUp(event);
    });
    this.mouseMoveListener = document.addEventListener('mousemove', (event) => {
      this.resizerMouseMove(event);
    });
    this.root.$on("main-view-mousemove", this.resizerMouseMove);
    this.root.$on("main-view-mouseup", this.resizerMouseUp);
  }
};
</script>
