<!--
/**
 * @fileoverview CalendarRow component
 * @license MIT
 * @author Rafal Pospiech <neuronet.io@gmail.com>
 * @package GanttElastic
 */
-->
<template>
  <div
    :class="'gantt-elastic__calendar-row gantt-elastic__calendar-row-' + which"
    :style="root.style('calendar-row', 'calendar-row-' + which)"
  >
    <div
      v-for="item in items"
      :key="item.key"
      :class="'gantt-elastic__calendar-row-rect gantt-elastic__calendar-row-rect--' + which"
      :style="
        root.style('calendar-row-rect', 'calendar-row-rect--' + which, {
          width: item.width + 'px',
          height: item.height + 'px'
        })
      "
    >
      <div
        :class="'gantt-elastic__calendar-row-text gantt-elastic__calendar-row-text--' + which"
        :style="root.style('calendar-row-text', 'calendar-row-text--' + which)"
      >
        {{ item.label }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CalendarRow',
  inject: ['root'],
  props: ['items', 'which'],
  data() {
    return {};
  },
  methods: {
    /**
     * Get x position
     *
     * @returns {number}
     */
    getTextX(item) {
      let x = item.x + item.width / 2;
      if (this.which === 'month' && this.root.isInsideViewPort(item.x, item.width, 0)) {
        this.anchor = 'start';
        let scrollWidth = this.root.state.options.scroll.chart.right - this.root.state.options.scroll.chart.left;
        x = this.root.state.options.scroll.chart.left + scrollWidth / 2 - item.textWidth / 2 + 2;
        if (x + item.textWidth + 2 > item.x + item.width) {
          x = item.x + item.width - item.textWidth - 2;
        } else if (x < item.x) {
          x = item.x + 2;
        }
      }
      console.log('x', x);
      return x;
    }
  }
};
</script>
