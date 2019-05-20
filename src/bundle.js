/**
 * @fileoverview Bundle main entry file
 * @license MIT
 * @author Rafal Pospiech <neuronet.io@gmail.com>
 * @package GanttElasticStandalone
 */
import Vue from 'vue';
//import { mergeDeep } from './GanttElastic.vue';
import GanttElasticStandalone from './GanttElastic.standalone.vue';

window.GanttElastic = {
  component: GanttElasticStandalone,
  mount(config) {
    if (typeof config.dynamicStyle === 'undefined') {
      config.dynamicStyle = {};
    }
    let { el, tasks, options, dynamicStyle } = config;
    const ganttElastic = GanttElasticStandalone; //mergeDeep({}, GanttElasticStandalone);
    ganttElastic.data = { tasks, options, dynamicStyle };
    return new Vue(ganttElastic)
      .$on('gantt-elastic-ready', ganttInstance => {
        if (typeof config.ready === 'function') {
          config.ready(ganttInstance);
        }
      })
      .$mount(el);
  }
};
export default GanttElasticStandalone;
