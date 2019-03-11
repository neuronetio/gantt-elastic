<!--
/**
 * @fileoverview Days highlight component
 * @license MIT
 * @author Rafal Pospiech <neuronet.io@gmail.com>
 * @package GanttElastic
 */
-->

<template>
  <g
    class="gantt-elastic__chart-days-highlight-container"
    :style="root.style('chart-days-highlight-container')"
    v-if="showWorkingDays"
  >
    <rect
      class="gantt-elastic__chart-days-highlight-rect"
      v-for="day in workingDays"
      :key="getKey(day)"
      :x="day.offset.px"
      y="0"
      :width="day.width.px"
      height="100%"
      :style="root.style('chart-days-highlight-rect')"
    ></rect>
  </g>
</template>

<script>
import dayjs from 'dayjs';
export default {
  inject: ['root'],
  data () {
    return {};
  },
  methods: {
    /**
     * Get key
     *
     * @param {object} day
     * @returns {string} key ideintifier for loop
     */
    getKey (day) {
      return dayjs(day.time).format('YYYY-MM-DD');
    }
  },
  computed: {
    /**
     * Get working days
     *
     * @returns {array}
     */
    workingDays () {
      return this.$store.state.GanttElastic.options.times.steps.filter(step => {
        return this.$store.state.GanttElastic.options.calendar.workingDays.indexOf(dayjs(step.time).day()) === -1;
      });
    },

    /**
     * Show working days?
     *
     * @returns {bool}
     */
    showWorkingDays () {
      const calendar = this.$store.state.GanttElastic.options.calendar;
      if (typeof calendar.workingDays !== 'undefined' && Array.isArray(calendar.workingDays) && calendar.workingDays.length) {
        return true;
      }
      return false;
    }
  }
}
</script>
