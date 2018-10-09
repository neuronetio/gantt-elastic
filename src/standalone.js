import Elastigantt from './Elastigantt.standalone.vue';
export default function init(el, tasks, options) {
  const elastigantt = Object.assign({}, Elastigantt);
  elastigantt.data = Object.assign({}, elastigantt.data);
  elastigantt.el = el;
  elastigantt.data = {
    tasks,
    options
  };
  return new Vue(elastigantt);
}
