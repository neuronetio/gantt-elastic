function ElastigantMain(slug, self) {
  return {
    props: ['task'],
    template: `<div class="row" :id="getElementId(task.key)">
        <div class="col-md-6 elastigantt__tree-row">{{ task.key }}</div>
        <div class="col-md-6 elastigantt__tree-row">{{ task.label }}</div>
      </div>`,
    methods: {
      getElementId(id) {
        return `elastigantt__tree-row--${id}`;
      }
    }
  };
}
export default ElastigantMain;