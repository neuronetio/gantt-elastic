export function Tree(prefix, self) {
  return self.wrapComponent({
    template: `<g>
      <${prefix}-grid></${prefix}-grid>
      <${prefix}-tree-row
        v-for="(task, index) in tasks"
        v-bind:task="task"
        v-bind:index="index"
        v-bind:key="task.key"></${prefix}-tree-row>
    </g>`,

    data() {
      return window.elastiganttStore.initStore(prefix, 'Tree', {});
    },
    computed: {
      tasks() {
        console.log(this.shared.times.timePerPixel)
        return this.shared.tasks;
      }
    }
  });
}
