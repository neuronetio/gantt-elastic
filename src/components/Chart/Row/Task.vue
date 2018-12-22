<template>
  <g
    class="gantt-elastic__chart-row-bar-wrapper gantt-elastic__chart-row-task-wrapper"
    :style="root.style('chart-row-bar-wrapper', 'chart-row-task-wrapper', task.style['chart-row-bar-wrapper'])"
  >
    <svg
      class="gantt-elastic__chart-row-bar gantt-elastic__chart-row-task"
      :style="root.style('chart-row-bar','chart-row-task',task.style['chart-row-bar'])"
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
          <polygon :points="getPoints"></polygon>
        </clipPath>
      </defs>
      <polygon
        class="gantt-elastic__chart-row-bar-polygon gantt-elastic__chart-row-task-polygon"
        :style="root.style('chart-row-bar-polygon', 'chart-row-task-polygon' , task.style['base'], task.style['chart-row-bar-polygon'])"
        :points="getPoints"
      ></polygon>
      <progress-bar :task="task" :clip-path="'url(#'+clipPathId+')'"></progress-bar>
    </svg>
    <chart-text :task="task" v-if="root.state.row.showText"></chart-text>
  </g>
</template>

<script>
import ChartText from "../Text.vue";
import ProgressBar from "../ProgressBar.vue";
export default {
  components: {
    ChartText,
    ProgressBar
  },
  inject: ["root"],
  props: ["task"],
  data () {
    return {};
  },
  computed: {
    clipPathId () {
      return "gantt-elastic__task-clip-path-" + this.task.id;
    },
    getViewBox () {
      const task = this.task;
      return `0 0 ${task.width} ${task.height}`;
    },
    getGroupTransform () {
      return `translate(${this.task.x} ${this.task.y})`;
    },
    getPoints () {
      const task = this.task;
      return `0,0 ${task.width},0 ${task.width},${task.height} 0,${
        task.height
        }`;
    },
  },
  methods: {
    emitEvent (eventName, event) {
      this.root.$emit(`chart-${this.task.type}-${eventName}`, { event, data: this.task });
    }
  }
};
</script>
