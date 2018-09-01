export function Tree(prefix, self) {
  return self.wrapComponent({
    template : `
      <svg class="elastigantt_tree-object"
        x="0"
        y="0"
        :width="getWidth"
        :height="getHeight"
        xmlns="http://www.w3.org/2000/svg"
      >
        <${prefix}-calendar></${prefix}-calendar>
        <${prefix}-grid></${prefix}-grid>
        <${prefix}-tree-dependency-lines :tasks="$root.getVisibleTasks()"></${prefix}-tree-dependency-lines>
        <g v-for="(task, index) in $root.getVisibleTasks()"
        :task="task"
        :index="index"
        :key="task.id">
          <component :task="task" :index="index" :is="'${prefix}-tree-row-'+task.type"></component>
        </g>
      </svg>`,
    data() { return {}; },
    computed : {
      getWidth() {
        const state = this.$root.$data;
        return state.width;
      },
      getHeight() {
        const state = this.$root.$data;
        return state.height;
      }
    }
  });
}
