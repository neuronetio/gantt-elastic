import Vue from 'vue';
import {mergeDeep} from './GanttElastic.vue';
import GanttElastic from './GanttElastic.standalone.vue';
window.GanttElastic = {
  component: GanttElastic,
  mount(config) {
    let {el, tasks, options} = config;
    const ganttElastic = mergeDeep({}, GanttElastic);
    ganttElastic.data = mergeDeep({}, ganttElastic.data);
    ganttElastic.el = el;
    ganttElastic.data.tasks = tasks;
    ganttElastic.data.options = options;
    return new Vue(ganttElastic);
  }
}
export default GanttElastic;
