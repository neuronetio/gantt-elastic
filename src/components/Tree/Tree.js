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
        <${prefix}-tree-row
          v-for="(task, index) in $root.$data.tasks"
          :task="task"
          :index="index"
          :key="task.id"
        ></${prefix}-tree-row>
      </svg>`,
    data() {
      return {};
    },
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
