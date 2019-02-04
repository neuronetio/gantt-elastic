/**
* @fileoverview Bundle main entry file
* @license MIT
* @author Rafal Pospiech <neuronet.io@gmail.com>
* @package GanttElastic
*/
import Vue from 'vue';
import { mergeDeep } from './GanttElastic.vue';
import GanttElastic from './GanttElastic.standalone.vue';
window.GanttElastic = {
  component: GanttElastic,
  mount (config) {
    let { el, tasks, options } = config;
    const ganttElastic = mergeDeep({}, GanttElastic);
    ganttElastic.data = mergeDeep({}, ganttElastic.data);
    ganttElastic.data.tasks = tasks;
    ganttElastic.data.options = options;
    return new Vue(ganttElastic).$on('gantt-elastic-ready', ganttInstance => {
      if (typeof config.ready === 'function') {
        config.ready(ganttInstance);
      }
    }).$mount(el);
  }
};
export default GanttElastic;
