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
    let { el, tasks, options } = config;
    const ganttElastic = GanttElasticStandalone; //mergeDeep({}, GanttElasticStandalone);
    ganttElastic.data = { tasks, options };
    console.log('mounting', ganttElastic);
    return new Vue(ganttElastic)
      .$on('gantt-elastic-ready', ganttInstance => {
        console.log(ganttInstance);
        if (typeof config.ready === 'function') {
          config.ready(ganttInstance);
        }
      })
      .$mount(el);
  }
};
export default GanttElasticStandalone;
