<template>
<g class="elastigantt__tree-row-task-group" @mouseover="treeRowMouseOver" @mouseout="treeRowMouseOut">
  <svg class="elastigantt__tree-row-task" :x="task.x" :y="task.y" :width="task.width" :height="task.height" @click="treeRowClick" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <clipPath id="elastigantt__task-clip-path">
        <polygon :points="getPoints"></polygon>
      </clipPath>
    </defs>
    <polygon :points="getPoints" :style="root.state.row.styles.bar"></polygon>
    <progress-bar :task="task" clip-path="url(#elastigantt__task-clip-path)"></progress-bar>
  </svg>
  <tree-text :task="task" v-if="root.state.row.showText"></tree-text>
  <info :task="task" v-if="root.state.info.display && task.mouseOver"></info>
</g>
</template>
<script>
import TreeText from '../Text.vue';
import Info from '../Info.vue';
import ProgressBar from '../ProgressBar.vue';

export default {
  components: {
    TreeText,
    Info,
    ProgressBar
  },
  inject: ['root'],
  props: ['task'],
  data() {
    return {};
  },
  computed: {
    getViewBox() {
      const task = this.task;
      return `0 0 ${task.width} ${task.height}`;
    },
    getGroupTransform() {
      return `translate(${this.task.x} ${this.task.y})`;
    },
    getPoints() {
      const task = this.task;
      const fifty = this.task.height - this.task.height / 4;
      const full = this.task.height;
      const offset = 10;
      return `0,0 ${task.width},0 ${task.width},${task.height} 0,${task.height}`;
    }
  },
  methods: {
    treeRowClick() {
      this.task.tooltip.visible = !this.task.tooltip.visible;
    },
    treeRowMouseOver() {
      this.task.mouseOver = true;
    },
    treeRowMouseOut() {
      this.task.mouseOver = false;
    }
  }
}
</script>
