export function TreeRowTask(prefix, self) {
  return self.wrapComponent({
    props: [
      'task', 'index'
    ],
    template: `<g class="elastigantt__tree-row-task-group" @mouseover="treeRowMouseOver" @mouseout="treeRowMouseOut">
      <svg class="elastigantt__tree-row-task"
        :x="task.x"
        :y="task.y"
        :width="task.width"
        :height="task.height"
        @click="treeRowClick"
        xmlns="http://www.w3.org/2000/svg"
      >
      <defs>
        <clipPath id="elastigantt__task-clip-path">
          <polygon :points="getPoints"></polygon>
        </clipPath>
      </defs>
        <polygon :points="getPoints" :style="$root.$data.row.styles.bar"></polygon>
        <${prefix}-tree-progress-bar :task="task" clip-path="url(#elastigantt__task-clip-path)">
        </${prefix}-tree-progress-bar>
      </svg>
      <${prefix}-tree-text :task="task" v-if="$root.$data.row.showText"></${prefix}-tree-text>
      <${prefix}-info :task="task" v-if="$root.$data.info.display && task.mouseOver"></${prefix}-info>
    </g>`,
    data() {
      return {};
    },
    computed: {
      getViewBox() {
        return `0 0 ${this.task.width} ${this.task.height}`;
      },
      getGroupTransform() {
        return `translate(${this.task.x} ${this.task.y})`;
      },
      getPoints() {
        const task = this.task;
        const fifty = this.task.height - this.task.height / 4;
        const full = this.task.height;
        const offset = 10;
        return `0,0 ${task.width},0 ${task.width},${task.height} 0,${task.height}`;
      }
    },
    methods: {
      treeRowClick() {
        this.task.tooltip.visible = !this.task.tooltip.visible;
      },
      treeRowMouseOver() {
        this.task.mouseOver = true;
      },
      treeRowMouseOut() {
        this.task.mouseOver = false;
      }
    }
  });
}
