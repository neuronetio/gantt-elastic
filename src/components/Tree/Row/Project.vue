<template>
<g class="elastigantt__tree-row-project-group" @mouseover="treeRowMouseOver" @mouseout="treeRowMouseOut">
  <svg class="elastigantt__tree-row" :x="task.x" :y="task.y" :width="task.width" :height="task.height" @click="treeRowClick" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <clipPath id="elastigantt__project-clip-path">
        <path :d="getPoints" :style="root.state.row.styles.bar"></path>
      </clipPath>
    </defs>
    <path :d="getPoints" :style="root.state.row.styles.bar"></path>
    <progress-bar :task="task" clip-path="url(#elastigantt__project-clip-path)"></progress-bar>
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
      const bottom = task.height - task.height / 4;
      const corner = task.height / 6;
      const smallCorner = task.height / 8;
      return `M ${smallCorner},0
                L ${task.width - smallCorner} 0
                L ${task.width} ${smallCorner}
                L ${task.width} ${bottom}
                L ${task.width - corner} ${task.height}
                L ${task.width - corner * 2} ${bottom}
                L ${corner * 2} ${bottom}
                L ${corner} ${task.height}
                L 0 ${bottom}
                L 0 ${smallCorner}
                Z
        `;
      // return `M ${offset} ${task.height}
      // Q 0 ${task.height} 0 ${fifty}
      // Q 0 0 ${offset} 0
      // L ${task.width - offset} 0
      // Q ${task.width} 0 ${task.width} ${fifty}
      // Q ${task.width} ${task.height} ${task.width - offset} ${task.height}
      // L ${offset} ${task.height}
      // Z`;
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
