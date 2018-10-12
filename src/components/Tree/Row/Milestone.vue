<template>
<g class="elastigantt__tree-row-milestone-group" @mouseover="treeRowMouseOver" @mouseout="treeRowMouseOut">
  <svg class="elastigantt__tree-row-milestone" :x="task.x" :y="task.y" :width="task.width" :height="task.height" @click="treeRowClick" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <clipPath id="'elastigantt__milestone-clip-path-'+task.id">
        <polygon :points="getPoints"></polygon>
      </clipPath>
    </defs>
    <polygon :points="getPoints" :style="root.state.row.styles.bar"></polygon>
    <progress-bar :task="task" clip-path="'url(#elastigantt__milestone-clip-path-'+task.id+')'"></progress-bar>
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
      return `0 0 ${this.task.width} ${this.task.height}`;
    },
    getGroupTransform() {
      return `translate(${this.task.x} ${this.task.y})`;
    },
    getPoints() {
      const task = this.task;
      const fifty = task.height / 2;
      let offset = fifty;
      if (task.width / 2 - offset < 0) {
        offset = task.width / 2;
      }
      return `0,${fifty}
        ${offset},0
        ${task.width - offset},0
        ${task.width},${fifty}
        ${task.width - offset},${task.height}
        ${offset},${task.height}`;
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
