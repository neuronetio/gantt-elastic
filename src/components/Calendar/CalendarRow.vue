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
      text-anchor="middle"
    >{{item.label}}</text>
  </g>
</template>

<script>
export default {
  inject: ["root"],
  props: ["item", "which"],
  data () {
    return {};
  },
  computed: {
    getTextX () {
      return this.item.x + this.item.width / 2;
    },
    getTextY () {
      return this.item.y + this.item.height / 2;
    }
  }
};
</script>
