export function Tree(prefix, self) {
  return self.wrapComponent({
    template : `<g>
      <${prefix}-calendar></${prefix}-calendar>
      <${prefix}-grid></${prefix}-grid>
      <${prefix}-tree-row
        v-for="(task, index) in $root.$data.tasks"
        :task="task"
        :index="index"
        :key="task.id"
      ></${prefix}-tree-row>
      <${prefix}-tree-row-info
        v-for="task in $root.$data.tasks"
        :key="task.id"
        :task="task"
        v-if="task.mouseOVer"
      ></${prefix}-tree-row-info>
    </g>`,
    data() {
      return {};
    },
    computed : {}
  });
}
