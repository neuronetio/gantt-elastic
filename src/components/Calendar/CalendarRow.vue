<!--
/**
 * @fileoverview CalendarRow component
 * @license MIT
 * @author Rafal Pospiech <neuronet.io@gmail.com>
 * @package GanttElastic
 */
-->
<template>
  <g class="gantt-elastic__calendar-row" :style="root.style('calendar-row')">
    <rect
      :class="'gantt-elastic__calendar-row-rect--'+which"
      :style="root.style('calendar-row-rect--'+which)"
      :x="item.x"
      :y="item.y"
      :width="item.width"
      :height="item.height"
    ></rect>
    <text
      :class="'gantt-elastic__calendar-row-text--'+which"
      :style="root.style('calendar-row-text--'+which)"
      :x="getTextX"
      :y="getTextY"
      alignment-baseline="middle"
      :text-anchor="anchor"
    >{{item.label}}</text>
  </g>
</template>

<script>
export default {
  inject: ["root"],
  props: ["item", "which"],
  data () {
    return {
      anchor: 'middle'
    };
  },
  computed: {
    /**
     * Get x position
     *
     * @returns {number}
     */
    getTextX () {
      let x = this.item.x + this.item.width / 2;
      if (this.which === 'month' && this.root.isInsideViewPort(this.item.x, this.item.width, 0)) {
        this.anchor = 'start';
        let scrollWidth = this.root.state.scroll.chart.right - this.root.state.scroll.chart.left;
        x = this.root.state.scroll.chart.left + (scrollWidth / 2) - (this.item.textWidth / 2) + 2;
        if (x + this.item.textWidth + 2 > this.item.x + this.item.width) {
          x = this.item.x + this.item.width - this.item.textWidth - 2;
        } else if (x < this.item.x) {
          x = this.item.x + 2;
        }
      }
      return x;
    },

    /**
     * Get y position
     *
     * @returns {number}
     */
    getTextY () {
      return this.item.y + this.item.height / 2;
    }
  }
};
</script>
