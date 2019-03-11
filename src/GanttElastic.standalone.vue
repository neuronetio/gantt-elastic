<!--
/**
 * @fileoverview GanttElastic standalone version component
 * @license MIT
 * @author Rafal Pospiech <neuronet.io@gmail.com>
 * @package
 */
-->
<template>
  <gantt-elastic :tasks="tasks" :options="options">
    <gantt-header slot="header"></gantt-header>
    <gantt-footer slot="footer"></gantt-footer>
  </gantt-elastic>
</template>
<script>
import Vue from 'vue';
import Vuex from 'vuex';
import GanttElastic from './GanttElastic.vue';
Vue.use(Vuex);
const store = new Vuex.Store({});
export default {
  components: {
    'gantt-header': { template: `<div></div>` },
    'gantt-elastic': GanttElastic,
    'gantt-footer': { template: `<div></div>` }
  },
  store,
  props: ['header', 'footer'],
  data: {
    tasks: [],
    options: {}
  }
};
</script>
