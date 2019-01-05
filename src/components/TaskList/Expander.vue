<!--
/**
 * @fileoverview Expander component
 * @license MIT
 * @author Rafal Pospiech <neuronet.io@gmail.com>
 * @package GanttElastic
 */
-->
<template>
  <div
    class="gantt-elastic__task-list-column-expander-wrapper"
    :style="root.style('task-list-column-expander-wrapper')"
  >
    <svg
      class="gantt-elastic__task-list-column-expander-content"
      :style="root.style('task-list-column-expander-content')"
      :width="root.state.taskList.expander.size"
      :height="root.state.taskList.expander.size"
    >
      <rect
        class="gantt-elastic__task-list-column-expander-border"
        :style="root.style('task-list-column-expander-border',borderStyle)"
        :x="border"
        :y="border"
        :width="root.state.taskList.expander.size-border*2"
        :height="root.state.taskList.expander.size-border*2"
        rx="2"
        ry="2"
        v-if="allChildren.length"
        @click="toggle"
      ></rect>
      <line
        class="gantt-elastic__task-list-column-expander-line"
        :style="root.style('task-list-column-expander-line')"
        v-if="allChildren.length"
        :x1="lineOffset"
        :y1="root.state.taskList.expander.size/2"
        :x2="root.state.taskList.expander.size-lineOffset"
        :y2="root.state.taskList.expander.size/2"
        @click="toggle"
      ></line>
      <line
        class="gantt-elastic__task-list-column-expander-line"
        :style="root.style('task-list-column-expander-line')"
        v-if="collapsed"
        :x1="root.state.taskList.expander.size/2"
        :y1="lineOffset"
        :x2="root.state.taskList.expander.size/2"
        :y2="root.state.taskList.expander.size-lineOffset"
        @click="toggle"
      ></line>
    </svg>
  </div>
</template>

<script>
export default {
  inject: ["root"],
  props: ["tasks"],
  data () {
    const border = 0.5;
    return {
      border,
      borderStyle: {
        "stroke-width": border
      },
      lineOffset: 5
    };
  },
  computed: {
    /**
     * Get all tasks
     *
     * @returns {array}
     */
    allChildren () {
      const children = [];
      this.tasks.forEach(task => {
        task.allChildren.forEach(child => {
          children.push(child);
        });
      });
      return children;
    },

    /**
     * Is current expander collapsed?
     *
     * @returns {boolean}
     */
    collapsed () {
      if (this.tasks.length === 0) {
        return false;
      }
      let collapsed = 0;
      for (let i = 0, len = this.tasks.length; i < len; i++) {
        if (this.tasks[i].collapsed) {
          collapsed++;
        }
      }
      return collapsed === this.tasks.length;
    }
  },
  methods: {
    /**
     * Toggle expander
     */
    toggle () {
      if (this.allChildren.length === 0) {
        return;
      }
      const collapsed = !this.collapsed;
      this.tasks.forEach(task => {
        task.collapsed = collapsed;
        task.allChildren.forEach(child => {
          child.visible = !collapsed && !child.parent.collapsed;
        });
      });
    }
  }
};
</script>
