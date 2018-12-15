<template>
  <g
    class="gantt-elastic__tree-row-bar-wrapper gantt-elastic__tree-row-project-wrapper"
    :style="root.style('tree-row-bar-wrapper', root.style('tree-row-project-wrapper'), task.style['tree-row-bar-wrapper'])"
    @mouseover="treeRowMouseOver"
    @mouseout="treeRowMouseOut"
  >
    <svg
      class="gantt-elastic__tree-row-bar gantt-elastic__tree-row-project"
      :style="root.style('tree-row-bar', 'tree-row-project', task.style['tree-row-bar'])"
      :x="task.x"
      :y="task.y"
      :width="task.width"
      :height="task.height"
      @click="emitEvent('click', $event)"
      @mouseenter="emitEvent('mouseenter', $event)"
      @mouseover="emitEvent('mouseover', $event)"
      @mouseout="emitEvent('mouseout', $event)"
      @mousedown="emitEvent('mousedown', $event)"
      @mouseup="emitEvent('mouseup', $event)"
      @mousewheel="emitEvent('mousewheel', $event)"
      @touchstart="emitEvent('touchstart', $event)"
      @touchmove="emitEvent('touchmove', $event)"
      @touchend="emitEvent('touchend', $event)"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <clipPath :id="clipPathId">
          <path :d="getPoints"></path>
        </clipPath>
      </defs>
      <path
        class="gantt-elastic__tree-row-bar-polygon gantt-elastic__tree-row-project-polygon"
        :style="root.style('tree-row-bar-polygon','tree-row-project-polygon', task.style['base'], task.style['tree-row-bar-polygon'])"
        :d="getPoints"
      ></path>
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
      return "gantt-elastic__project-clip-path-" + this.task.id;
    },
    getViewBox () {
      return `0 0 ${this.task.width} ${this.task.height}`;
    },
    getGroupTransform () {
      return `translate(${this.task.x} ${this.task.y})`;
    },
    getPoints () {
      const task = this.task;
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
    },
  },
  methods: {
    emitEvent (eventName, event) {
      this.root.$emit(`gantt-elastic-chart-${this.task.type}-${eventName}`, { event, data: this.task });
    }
  }
};
</script>
