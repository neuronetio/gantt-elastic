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
        <defs>
        <clipPath id="elastigantt__task-clip-path">
          <path :d="getPoints" :fill="getFill"></path>
        </clipPath>
        </defs>
        <path :d="getPoints" :fill="getFill"></path>
        <${prefix}-tree-progress-bar :task="task" clip-path="url(#elastigantt__task-clip-path)"></${
        prefix}-tree-progress-bar>
        <${prefix}-tree-text :task="task" v-if="$root.$data.row.showText"></${prefix}-tree-text>
      </svg>
      <${prefix}-info :task="task" v-if="task.mouseOver"></${prefix}-info>
    </g>`,
    data() { return {}; },
    computed : {
      getViewBox() { return `0 0 ${this.task.width} ${this.task.height}`; },
      getGroupTransform() { return `translate(${this.task.x} ${this.task.y})`; },
      getPoints() {
        const task  = this.task;
        const fifty = task.height / 2;
        let offset  = fifty;
        if (task.width - offset < 0) {
          return `M 0 ${fifty}
          Q 0 0 ${task.width / 2} 0
          Q ${task.width} ${fifty} ${task.width / 2} ${task.height}
          Q 0 ${task.height} 0 ${fifty}
          Z
          `;
        }
        return `M ${offset} ${task.height}
        Q 0 ${task.height} 0 ${fifty}
        Q 0 0 ${offset} 0
        L ${task.width - offset} 0
        Q ${task.width} 0 ${task.width} ${fifty}
        Q ${task.width} ${task.height} ${task.width - offset} ${task.height}
        L ${offset} ${task.height}
        Z`;
      },
      getFill() { return '#FF0000a0'; }
    },
    methods : {
      treeRowClick() { this.task.tooltip.visible = !this.task.tooltip.visible; },
      treeRowMouseOver() { this.task.mouseOver   = true; },
      treeRowMouseOut() { this.task.mouseOver    = false; },
    }
  });
}
