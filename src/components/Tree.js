export function Tree(prefix, self) {
  return self.wrapComponent({
    template: `<g>
      <${prefix}-calendar></${prefix}-calendar>
      <${prefix}-grid></${prefix}-grid>
      <${prefix}-tree-row
        v-for="(task, index) in $root.$data.tasks"
        v-bind:task="task"
        v-bind:index="index"
        v-bind:key="task.key"></${prefix}-tree-row>
    </g>`,

    data() {
      return {

      };
    },
    computed: {
    }
  });
}
