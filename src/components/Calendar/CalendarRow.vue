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
        :style="root.style('calendar-row-text', 'calendar-row-text--' + which, getStyle(item))"
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
    getTextX() {
      let x = this.item.x + this.item.width / 2;
      if (this.which === 'month' && this.root.isInsideViewPort(this.item.x, this.item.width, 0)) {
        this.anchor = 'start';
        let scrollWidth =
          this.$store.state.GanttElastic.options.scroll.chart.right -
          this.$store.state.GanttElastic.options.scroll.chart.left;
        x = this.$store.state.GanttElastic.options.scroll.chart.left + scrollWidth / 2 - this.item.textWidth / 2 + 2;
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
    getTextY() {
      return this.item.y + this.item.height / 2;
    },

    /**
     * Get style for an item
     *
     * @returns {function}
     */
    getStyle() {
      return item => {
        return {
          'line-height':
            item.height -
            parseFloat(this.root.style('calendar-row-rect', 'calendar-row-rect--' + this.which)['border-width']) * 2 +
            'px'
        };
      };
    }
  }
};
</script>
