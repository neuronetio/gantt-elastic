<!--
/**
 * @fileoverview Project component
 * @license MIT
 * @author Rafal Pospiech <neuronet.io@gmail.com>
 * @package GanttElastic
 */
-->
<template>
  <g
    class="gantt-elastic__chart-row-bar-wrapper gantt-elastic__chart-row-project-wrapper"
    :style="
      root.style('chart-row-bar-wrapper', root.style('chart-row-project-wrapper'), task.style['chart-row-bar-wrapper'])
    "
  >
    <foreignObject
      class="gantt-elastic__chart-expander gantt-elastic__chart-expander--project"
      :style="root.style('chart-expander', 'chart-expander--project', task.style['chart-expander'])"
      :x="
        task.x -
          $store.state.GanttElastic.options.chart.expander.offset -
          $store.state.GanttElastic.options.chart.expander.size
      "
      :y="
        task.y +
          ($store.state.GanttElastic.options.row.height - $store.state.GanttElastic.options.chart.expander.size) / 2
      "
      :width="$store.state.GanttElastic.options.chart.expander.size"
      :height="$store.state.GanttElastic.options.chart.expander.size"
      v-if="displayExpander"
    >
      <expander :tasks="[task]" :options="$store.state.GanttElastic.options.chart.expander"></expander>
    </foreignObject>
    <svg
      class="gantt-elastic__chart-row-bar gantt-elastic__chart-row-project"
      :style="root.style('chart-row-bar', 'chart-row-project', task.style['chart-row-bar'])"
      :x="task.x"
      :y="task.y"
      :width="task.width"
      :height="task.height"
      :viewBox="`0 0 ${task.width} ${task.height}`"
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
          <path :d="getPoints"></path>
        </clipPath>
      </defs>
      <path
        class="gantt-elastic__chart-row-bar-polygon gantt-elastic__chart-row-project-polygon"
        :style="
          root.style(
            'chart-row-bar-polygon',
            'chart-row-project-polygon',
            task.style['base'],
            task.style['chart-row-bar-polygon']
          )
        "
        :d="getPoints"
      ></path>
      <progress-bar :task="task" :clip-path="'url(#' + clipPathId + ')'"></progress-bar>
    </svg>
    <chart-text :task="task" v-if="$store.state.GanttElastic.options.chart.text.display"></chart-text>
  </g>
</template>

<script>
import ChartText from '../Text.vue';
import ProgressBar from '../ProgressBar.vue';
import Expander from '../../Expander.vue';
export default {
  name: 'Project',
  components: {
    ChartText,
    ProgressBar,
    Expander
  },
  inject: ['root'],
  props: ['task'],
  data() {
    return {};
  },
  computed: {
    /**
     * Get clip path id
     *
     * @returns {string}
     */
    clipPathId() {
      return 'gantt-elastic__project-clip-path-' + this.task.id;
    },

    /**
     * Get view box
     *
     * @returns {string}
     */
    getViewBox() {
      return `0 0 ${this.task.width} ${this.task.height}`;
    },

    /**
     * Get group transform
     *
     * @returns {string}
     */
    getGroupTransform() {
      return `translate(${this.task.x} ${this.task.y})`;
    },

    /**
     * Get points
     *
     * @returns {string}
     */
    getPoints() {
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

    /**
     * Should we display expander?
     *
     * @returns {boolean}
     */
    displayExpander() {
      const expander = this.$store.state.GanttElastic.options.chart.expander;
      return (
        expander.display ||
        (expander.displayIfTaskListHidden && !this.$store.state.GanttElastic.options.taskList.display)
      );
    }
  },
  methods: {
    /**
     * Emit event
     *
     * @param {string} eventName
     * @param {Event} event
     */
    emitEvent(eventName, event) {
      if (!this.$store.state.GanttElastic.options.scroll.scrolling) {
        this.root.$emit(`chart-${this.task.type}-${eventName}`, { event, data: this.task });
      }
    }
  }
};
</script>
