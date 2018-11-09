import dayjs from 'dayjs';
import Vue from 'vue';
import ElastiganttComponent from './Elastigantt.vue';
import Elastigantt from './Elastigantt.standalone.vue';
window.dayjs = dayjs;
window.Vue = Vue;
window.Elastigantt = {
  component: Elastigantt,
  mount(config) {
    const mergeDeep = ElastiganttComponent.methods.mergeDeep;
    console.log(mergeDeep)
    let {el, tasks, options} = config;
    const elastigantt = mergeDeep({}, Elastigantt);
    elastigantt.data = mergeDeep({}, elastigantt.data);
    elastigantt.el = el;
    elastigantt.data.tasks = tasks;
    elastigantt.data.options = options;
    return new Vue(elastigantt);
  }
}
export default Elastigantt;
