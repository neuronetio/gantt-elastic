import ElastiganttStandalone from './Elastigantt.standalone.vue';
import Elastigantt from './Elastigantt.vue';
export default {
  component: Elastigantt,
  mount(config) {
    let {el, tasks, options} = config;
    const elastigantt = Object.assign({}, ElastiganttStandalone);
    elastigantt.data = Object.assign({}, elastigantt.data);
    elastigantt.el = el;
    elastigantt.data = {
      tasks,
      options
    };
    Vue.component('elastigantt', Elastigantt);
    return new Vue(elastigantt);
  }
}
