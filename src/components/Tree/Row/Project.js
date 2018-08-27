export function TreeRowProject(prefix, self) {
  return self.wrapComponent({
    props : [ 'task', 'index' ],
    template :
        `<g class="elastigantt__tree-row-project-group" @mouseover="treeRowMouseOver" @mouseout="treeRowMouseOut">
      <svg class="elastigantt__tree-row-project"
        :x="task.x"
        :y="task.y"
        :width="task.width"
        :height="task.height"
        @click="treeRowClick"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon :points="getPoints" fill="#FF0000A0"></polygon>
        <${prefix}-tree-progress-bar :task="task"></${prefix}-tree-progress-bar>
        <${prefix}-tree-text :task="task" v-if="$root.$data.row.showText"></${prefix}-tree-text>
      </svg>
      <${prefix}-info :task="task" v-if="task.mouseOver"></${prefix}-info>
    </g>`,
    data() { return {}; },
    computed : {
      getViewBox() { return `0 0 ${this.task.width} ${this.task.height}`; },
      getGroupTransform() { return `translate(${this.task.x} ${this.task.y})`; },
      getPoints() {
        const task                               = this.task;
        const fifty                              = this.task.height - this.task.height / 4;
        const full                               = this.task.height;
        const offset                             = 10;
        return `0,${full} 0,0 ${task.width},0 ${task.width},${full} ${task.width - offset},${fifty} ${offset},${
            fifty} 0,${full}`;
      },
    },
    methods : {
      treeRowClick() { this.task.tooltip.visible = !this.task.tooltip.visible; },
      treeRowMouseOver() { this.task.mouseOver   = true; },
      treeRowMouseOut() { this.task.mouseOver    = false; },
    }
  });
}
