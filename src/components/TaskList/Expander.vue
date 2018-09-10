<template>
<div class="elastigantt__task-list-column-expander">
  <svg :width="root.state.taskList.expander.size" :height="root.state.taskList.expander.size" :style="root.state.taskList.styles.expanderContent">
  <rect
    :x="border"
    :y="border"
    :width="root.state.taskList.expander.size-border*2"
    :height="root.state.taskList.expander.size-border*2"
    rx="2"
    ry="2"
    :style="root.state.taskList.styles.expander"
    v-if="allChildren.length"
    @click="toggle">
  </rect>
  <line v-if="allChildren.length"
    :x1="lineOffset"
    :y1="root.state.taskList.expander.size/2"
    :x2="root.state.taskList.expander.size-lineOffset"
    :y2="root.state.taskList.expander.size/2"
    :style="lineStyle"
    @click="toggle">
  </line>
  <line v-if="collapsed"
    :x1="root.state.taskList.expander.size/2"
    :y1="lineOffset"
    :x2="root.state.taskList.expander.size/2"
    :y2="root.state.taskList.expander.size-lineOffset"
    :style="lineStyle"
    @click="toggle">
  </line>
</svg>
</div>
</template>

<script>
export default {
  inject: ['root'],
  props: ['tasks'],
  data() {
    const border = 0.5;
    return {
      border,
      borderStyle: {
        'fill': '#ffffffa0',
        'stroke': '#000000',
        'stroke-width': border
      },
      lineOffset: 5,
      lineStyle: {
        'fill': 'transparent',
        'stroke': '#000000',
        'stroke-width': 1,
        'stroke-linecap': 'round'
      }
    };
  },
  computed: {
    allChildren() {
      const children = [];
      this.tasks.forEach(task => {
        task.allChildren.forEach(child => {
          children.push(child);
        });
      });
      return children;
    },
    collapsed() {
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
    },
  },
  methods: {
    toggle() {
      if (this.allChildren.length === 0) {
        return;
      }
      const collapsed = !this.collapsed;
      this.tasks.forEach(task => {
        task.collapsed = collapsed;
        task.allChildren.forEach(child => {
          let parentsNotCollapsed = child.parents.filter(parent => parent.collapsed === false).length === child.parents.length;
          child.visible = !collapsed;
        });
      });
    }
  }
}
</script>
