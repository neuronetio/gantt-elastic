<!--
/**
 * @fileoverview Task component
 * @license MIT
 * @author Rafal Pospiech <neuronet.io@gmail.com>
 * @package GanttElastic
 */
-->
<template>
  <g
    class="gantt-elastic__chart-row-bar-wrapper gantt-elastic__chart-row-task-wrapper"
    :style="root.style('chart-row-bar-wrapper', 'chart-row-task-wrapper', task.style['chart-row-bar-wrapper'])"
  >
    <foreignObject
      class="gantt-elastic__chart-expander gantt-elastic__chart-expander--task"
      :style="root.style('chart-expander','chart-expander--task',task.style['chart-expander'])"
      :x="task.x - root.state.chart.expander.offset - root.state.chart.expander.size"
      :y="task.y + (root.state.row.height - root.state.chart.expander.size)/2 "
      :width="root.state.chart.expander.size"
      :height="root.state.chart.expander.size"
      v-if="displayExpander"
    >
      <expander :tasks="[task]" :options="root.state.chart.expander"></expander>
    </foreignObject>
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
      @mousemove="emitEvent('mousemove', $event)"
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
    <chart-text :task="task" v-if="root.state.chart.text.display"></chart-text>
  </g>
</template>

<script>
import ChartText from "../Text.vue";
import ProgressBar from "../ProgressBar.vue";
import Expander from "../../Expander.vue";
export default {
  components: {
    ChartText,
    ProgressBar,
    Expander
  },
  inject: ["root"],
  props: ["task"],
  data () {
    return {};
  },
  computed: {

    /**
     * Get clip path id
     * @returns {string}
     */
    clipPathId () {
      return "gantt-elastic__task-clip-path-" + this.task.id;
    },

    /**
     * Get view box
     * @returns {string}
     */
    getViewBox () {
      const task = this.task;
      return `0 0 ${task.width} ${task.height}`;
    },

    /**
     * Get group transform
     * @returns {string}
     */
    getGroupTransform () {
      return `translate(${this.task.x} ${this.task.y})`;
    },

    /**
     * Get points
     * @returns {string}
     */
    getPoints () {
      const task = this.task;
      return `0,0 ${task.width},0 ${task.width},${task.height} 0,${
        task.height
        }`;
    },

    /**
     * Should we display expander?
     * @returns {boolean}
     */
    displayExpander () {
      const expander = this.root.state.chart.expander;
      return expander.display || (expander.displayIfTaskListHidden && !this.root.state.taskList.display);
    }
  },
  methods: {
    /**
     * Emit event
     * @param {string} eventName
     * @param {Event} event
     */
    emitEvent (eventName, event) {
      if (!this.root.state.scroll.scrolling) {
        this.root.$emit(`chart-${this.task.type}-${eventName}`, { event, data: this.task });
      }
    }
  }
};
</script>
