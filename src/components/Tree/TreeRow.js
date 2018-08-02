export function TreeRow(prefix, self) {
  return self.wrapComponent({
    props: ['task', 'index'],
    template: `<foreignObject :x="task.x" :y="task.y" :width="task.width" :height="task.height" class="elastigantt__tree-row">
      <svg :width="task.width" :height="task.height">
        <${prefix}-tree-bar :task="task"></${prefix}-tree-bar>
        <${prefix}-tree-progress-bar :task="task"></${prefix}-tree-progress-bar>
        <${prefix}-tree-text :task="task"></${prefix}-tree-text>
      </svg>
    </foreignObject>`,
    data() {
      return {};
    },
    computed: {
      getGroupTransform(){
        return `translate(${this.task.x} ${this.task.y})`;
      },
    }
  });
}
