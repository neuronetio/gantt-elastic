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
        <g v-for="(task, index) in $root.$data.tasks"
        :task="task"
        :index="index"
        :key="task.id">
          <component :task="task" :index="index" :is="'${prefix}-tree-row-'+task.type"></component>
        </g>
        <${prefix}-tree-dependency-lines :tasks="$root.$data.tasks"></${prefix}-tree-dependency-lines>
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
