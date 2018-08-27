export function TreeRowTask(prefix, self) {
  return self.wrapComponent({
    props : [ 'task', 'index' ],
    template : `<g class="elastigantt__tree-row-task-group" @mouseover="treeRowMouseOver" @mouseout="treeRowMouseOut">
      <svg class="elastigantt__tree-row"
        :x="task.x"
        :y="task.y"
        :width="task.width"
        :height="task.height"
        @click="treeRowClick"
        xmlns="http://www.w3.org/2000/svg"
      >
        <${prefix}-tree-bar :task="task"></${prefix}-tree-bar>
        <${prefix}-tree-progress-bar :task="task"></${prefix}-tree-progress-bar>
        <${prefix}-tree-text :task="task" v-if="$root.$data.row.showText"></${prefix}-tree-text>
      </svg>
      <${prefix}-info :task="task" v-if="task.mouseOver"></${prefix}-info>
    </g>`,
    data() { return {}; },
    computed : {
      getViewBox() { return `0 0 ${this.task.width} ${this.task.height}`; },
      getGroupTransform() { return `translate(${this.task.x} ${this.task.y})`; },
    },
    methods : {
      treeRowClick() { this.task.tooltip.visible = !this.task.tooltip.visible; },
      treeRowMouseOver() { this.task.mouseOver   = true; },
      treeRowMouseOut() { this.task.mouseOver    = false; },
    }
  });
}
