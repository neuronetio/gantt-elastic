export function Tree(prefix, self) {
  return self.wrapComponent({

    template: `<g>
      <${prefix}-grid></${prefix}-grid>
      <${prefix}-tree-row 
        v-for="(task, index) in shared.tasks"
        :task="task"
        :index="index"
        :key="task.id"></${prefix}-tree-row>
    </g>`,
    
    data(){
      return window.elastiganttStore.initStore(prefix,'Tree',{});
    },

    computed: {
      getWidth() {
        return 100;
      },
      getHeight() {
        return this.shared.height;
      }
    }
  });
}