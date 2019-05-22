/**
 * @fileoverview Bundle main entry file
 * @license MIT
 * @author Rafal Pospiech <neuronet.io@gmail.com>
 * @package GanttElasticStandalone
 */
import Vue from 'vue';
import { mergeDeep } from './GanttElastic.vue';
import GanttElasticStandalone from './GanttElastic.standalone.vue';

window.GanttElastic = {
  component: GanttElasticStandalone,
  mount(config) {
    const ready = typeof config.ready === 'function' ? config.ready : () => {};
    const cfg = mergeDeep({}, config);
    if (typeof cfg.dynamicStyle === 'undefined') {
      cfg.dynamicStyle = {};
    }
    const ganttElastic = { ...GanttElasticStandalone };
    for (let prop in cfg) {
      if (['el', 'ready'].includes(prop)) {
        continue;
      }
      if (typeof ganttElastic[prop] !== 'undefined') {
        ganttElastic[prop] = { ...ganttElastic[prop], ...cfg[prop] };
        continue;
      }
      ganttElastic[prop] = cfg[prop];
    }
    return new Vue(ganttElastic).$on('gantt-elastic-ready', ready).$mount(cfg.el);
  }
};
export default GanttElasticStandalone;
