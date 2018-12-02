<template>
  <g
    class="gantt-elastic__tree-row-bar-wrapper gantt-elastic__tree-row-milestone-wrapper"
    :style="root.style('tree-row-bar-wrapper', 'tree-row-milestone-wrapper', task.style['tree-row-bar-wrapper'])"
    @mouseover="treeRowMouseOver"
    @mouseout="treeRowMouseOut"
  >
    <svg
      class="gantt-elastic__tree-row-bar gantt-elastic__tree-row-milestone"
      :style="root.style('tree-row-bar', 'tree-row-milestone', task.style['tree-row-bar'])"
      :x="task.x"
      :y="task.y"
      :width="task.width"
      :height="task.height"
      @click="treeRowClick"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <clipPath :id="clipPathId">
          <polygon :points="getPoints"></polygon>
        </clipPath>
      </defs>
      <polygon
        class="gantt-elastic__tree-row-bar-polygon gantt-elastic__tree-row-milestone-polygon"
        :style="root.style('tree-row-bar-polygon','tree-row-milestone-polygon', task.style['base'], task.style['tree-row-bar-polygon'])"
        :points="getPoints"
      ></polygon>
      <progress-bar :task="task" :clip-path="'url(#'+clipPathId+')'"></progress-bar>
    </svg>
    <tree-text :task="task" v-if="root.state.row.showText"></tree-text>
  </g>
</template>

<script>
import TreeText from "../Text.vue";
import ProgressBar from "../ProgressBar.vue";
export default {
  components: {
    TreeText,
    ProgressBar
  },
  inject: ["root"],
  props: ["task"],
  data () {
    return {};
  },
  computed: {
    clipPathId () {
      return "gantt-elastic__milestone-clip-path-" + this.task.id;
    },
    getViewBox () {
      return `0 0 ${this.task.width} ${this.task.height}`;
    },
    getGroupTransform () {
      return `translate(${this.task.x} ${this.task.y})`;
    },
    getPoints () {
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
    },
  },
  methods: {
    treeRowClick () {

    },
    treeRowMouseOver () {

    },
    treeRowMouseOut () {

    }
  }
};
</script>
