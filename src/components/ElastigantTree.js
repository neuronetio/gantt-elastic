export function ElastiganttTree(prefix, self) {
  console.log('tasks',window.elastiganttStore.getGlobalState());
  return {

    template: `<g><rect class="elastigantt__tree" 
        :x="0"
        :y="0"
        :width="getWidth"
        :height="getHeight"></rect>
        <${prefix}-elastigantt-tree-row 
          v-for="(task, index) in shared.tasks"
          :task="task"
          :index="index"
          :key="task.id"></${prefix}-elastigantt-tree-row>
        </g>`,
    
    data(){
      return window.elastiganttStore.initStore(prefix,'ElastiganttTree',{});
    },

    computed: {
      getWidth() {
        return 100;
      },
      getHeight() {
        return this.shared.height;
      }
    }
  };
}