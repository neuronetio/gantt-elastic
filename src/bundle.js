import Vue from 'vue';
import {mergeDeep} from './Elastigantt.vue';
import Elastigantt from './Elastigantt.standalone.vue';
window.Elastigantt = {
  component: Elastigantt,
  mount(config) {
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
