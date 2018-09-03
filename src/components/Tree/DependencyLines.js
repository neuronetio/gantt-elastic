export function TreeDependencyLines(prefix, self) {
  return self.wrapComponent({
    props : [ 'tasks' ],
    template : `<g class="elastigantt__tree-dependency-lines-container">
    <g v-for="task in dependencyTasks" :key="task.id" :task="task">
      <path
        v-for="dependencyLine in task.dependencyLines" :key="dependencyLine.id" :task="task"
        :d="dependencyLine.points" fill="transparent" stroke="#FFa00090" stroke-width="3">
      </path>
      </g>
    </g>`,
    data() { return {}; },
    methods : {
      getPoints(fromTaskId, toTaskId) {
        const state    = this.$root.$data;
        const fromTask = this.$root.getTask(fromTaskId);
        const toTask   = this.$root.getTask(toTaskId);
        if (!toTask.visible || !fromTask.visible) {
          return '';
        }
        const startX    = fromTask.x + fromTask.width;
        const startY    = fromTask.y + fromTask.height / 2;
        const stopX     = toTask.x;
        const stopY     = toTask.y + toTask.height / 2;
        const distanceX = stopX - startX;
        const distanceY = stopY - startY;
        const offset    = 10;
        const roundness = 4;
        const isBefore  = distanceX <= offset + roundness;
        let points      = `M ${startX} ${startY}
          L ${startX + offset},${startY} `;
        if (isBefore) {
          points += `Q ${startX + offset + roundness},${startY} ${startX + offset + roundness},${startY + roundness}
            L ${startX + offset + roundness},${startY + distanceY / 2 - roundness}
            Q ${startX + offset + roundness},${startY + distanceY / 2} ${startX + offset},${startY + distanceY / 2}
            L ${startX - offset + distanceX},${startY + distanceY / 2}
            Q ${startX - offset + distanceX - roundness},${startY + distanceY / 2} ${
              startX - offset + distanceX - roundness},${startY + distanceY / 2 + roundness}
            L ${startX - offset + distanceX - roundness},${stopY - roundness}
            Q ${startX - offset + distanceX - roundness},${stopY} ${startX - offset + distanceX},${stopY}
            L ${stopX},${stopY}`;
        } else {
          points += `L ${startX + distanceX / 2 - roundness},${startY}
            Q ${startX + distanceX / 2},${startY} ${startX + distanceX / 2},${startY + roundness}
            L ${startX + distanceX / 2},${stopY - roundness}
            Q ${startX + distanceX / 2},${stopY} ${startX + distanceX / 2 + roundness},${stopY}
            L ${stopX},${stopY}`;
        }
        return points;
      }
    },
    computed : {
      dependencyTasks() {
        return this.tasks.filter(task => typeof task.dependentOn !== 'undefined').map(task => {
          task.dependencyLines = task.dependentOn.map(id => { return {points : this.getPoints(id, task.id)}; });
          return task;
        });
      },
    }
  });
}
