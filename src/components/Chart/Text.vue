<!--
/**
 * @fileoverview Text component
 * @license MIT
 * @author Rafal Pospiech <neuronet.io@gmail.com>
 * @package GanttElastic
 */
-->
<template>
  <svg
    class="gantt-elastic__chart-row-text-wrapper"
    :style="{ ...root.style['chart-row-text-wrapper'] }"
    :x="task.x + task.width + root.state.options.chart.text.offset"
    :y="task.y - root.state.options.chart.grid.horizontal.gap"
    :width="getWidth"
    :height="getHeight"
  >
    <foreignObject x="0" y="0" width="100%" :height="getHeight">
      <div
        xmlns="http://www.w3.org/1999/xhtml"
        class="gantt-elastic__chart-row-text"
        :style="{ ...root.style['chart-row-text'] }"
      >
        <div
          class="gantt-elastic__chart-row-text-content gantt-elastic__chart-row-text-content--text"
          :style="{
            ...root.style['chart-row-text-content'],
            ...root.style['chart-row-text-content--text'],
            ...contentStyle
          }"
          v-if="!html"
        >
          <div>{{ task.label }}</div>
        </div>
        <div
          class="gantt-elastic__chart-row-text-content gantt-elastic__chart-row-text-content--html"
          :style="{
            ...root.style['chart-row-text-content'],
            ...root.style['chart-row-text-content--html'],
            ...contentStyle
          }"
          v-if="html"
          v-html="task.label"
        ></div>
      </div>
    </foreignObject>
  </svg>
</template>

<script>
export default {
  name: 'ChartText',
  inject: ['root'],
  props: ['task'],
  data() {
    return {};
  },
  computed: {
    /**
     * Get width
     *
     * @returns {number}
     */
    getWidth() {
      const textStyle = this.root.style['chart-row-text'];
      this.root.state.ctx.font = `${textStyle['font-weight']} ${textStyle['font-size']} ${textStyle['font-family']}`;
      const textWidth = this.root.state.ctx.measureText(this.task.label).width;
      return textWidth + this.root.state.options.chart.text.xPadding * 2;
    },

    /**
     * Get height
     *
     * @returns {number}
     */
    getHeight() {
      return this.task.height + this.root.state.options.chart.grid.horizontal.gap * 2;
    },

    /**
     * Get content style
     *
     * @returns {object}
     */
    contentStyle() {
      return { height: '100%', 'line-height': this.getHeight + 'px' };
    },

    /**
     * Should we render text as html?
     *
     * @returns {boolean}
     */
    html() {
      const cols = this.root.state.options.taskList.columns;
      for (let i = 0, len = cols.length; i < len; i++) {
        const col = cols[i];
        if (col.value === 'label' && typeof col.html !== 'undefined' && col.html) {
          return true;
        }
      }
      return false;
    }
  }
};
</script>
