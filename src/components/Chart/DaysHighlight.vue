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
    v-if="root.state.calendar.showWorkingDays"
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
export default {
  inject: ['root'],
  data () {
    return {};
  },
  methods: {
    getKey (day) {
      return day.date.format('YYYY-MM-DD');
    }
  },
  computed: {
    workingDays () {
      return this.root.state.times.steps.filter(step => {
        return this.root.state.calendar.workingDays.indexOf(step.date.day()) === -1;
      });
    }
  }
}
</script>
