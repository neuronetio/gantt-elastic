<!--
/**
 * @fileoverview GanttElastic standalone version component
 * @license MIT
 * @author Rafal Pospiech <neuronet.io@gmail.com>
 * @package
 */
-->
<template>
  <gantt-elastic :tasks="tasks" :options="options" :dynamicStyle="dynamicStyle">
    <component v-if="components.header" :is="components.header" slot="header"></component>
    <component v-if="components.footer" :is="components.footer" slot="footer"></component>
  </gantt-elastic>
</template>
<script>
import Vue from 'vue';
import GanttElastic from './GanttElastic.vue';
export default {
  name: 'GanttElasticStandalone',
  components: {
    'gantt-elastic': GanttElastic
  },
  props: ['header', 'footer'],
  data: {
    components: {},
    tasks: [],
    options: {},
    dynamicStyle: {}
  }
};
</script>
