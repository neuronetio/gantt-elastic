import Elastigantt from './Elastigantt.standalone.vue';
export default function init(config) {
  let {el, tasks, options} = config;
  const elastigantt = Object.assign({}, Elastigantt);
  elastigantt.data = Object.assign({}, elastigantt.data);
  elastigantt.el = el;
  elastigantt.data = {
    tasks,
    options
  };
  return new Vue(elastigantt);
}
