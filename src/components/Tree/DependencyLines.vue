<template>
<g class="elastigantt__tree-dependency-lines-container">
  <g v-for="task in dependencyTasks" :key="task.id" :task="task">
    <path v-for="dependencyLine in task.dependencyLines" :key="dependencyLine.id" :task="task" :d="dependencyLine.points" :style="root.state.dependencyLines.style">
    </path>
  </g>
</g>
</template>
<script>
export default {
  inject: ['root'],
  props: ['tasks'],
  data() {
    return {};
  },
  methods: {
    getPoints(fromTaskId, toTaskId) {
      const state = this.root.state;
      const fromTask = this.root.getTask(fromTaskId);
      const toTask = this.root.getTask(toTaskId);
      if (!toTask.visible || !fromTask.visible) {
        return '';
      }
      const startX = fromTask.x + fromTask.width;
      const startY = fromTask.y + fromTask.height / 2;
      const stopX = toTask.x;
      const stopY = toTask.y + toTask.height / 2;
      const distanceX = stopX - startX;
      let distanceY;
      let yMultiplier = 1;
      if (stopY >= startY) {
        distanceY = stopY - startY;
      } else {
        distanceY = startY - stopY;
        yMultiplier = -1;
      }
      const offset = 10;
      const roundness = 4;
      const isBefore = distanceX <= offset + roundness;
      let points = `M ${startX} ${startY}
          L ${startX + offset},${startY} `;
      if (isBefore) {
        points +=
          `Q ${startX + offset + roundness},${startY} ${startX + offset + roundness},${startY + roundness * yMultiplier}
            L ${startX + offset + roundness},${startY + (distanceY * yMultiplier) / 2 - (roundness * yMultiplier)}
            Q ${startX + offset + roundness},${startY + (distanceY * yMultiplier) / 2} ${startX + offset},${startY + (distanceY * yMultiplier) / 2}
            L ${startX - offset + distanceX},${startY + (distanceY * yMultiplier) / 2}
            Q ${startX - offset + distanceX - roundness},${startY + (distanceY * yMultiplier) / 2} ${startX - offset + distanceX - roundness},${startY + (distanceY * yMultiplier) / 2 + (roundness * yMultiplier)}
            L ${startX - offset + distanceX - roundness},${stopY - roundness * yMultiplier}
            Q ${startX - offset + distanceX - roundness},${stopY} ${startX - offset + distanceX},${stopY}
            L ${stopX},${stopY}`;
      } else {
        points +=
          `L ${startX + distanceX / 2 - roundness},${startY}
            Q ${startX + distanceX / 2},${startY} ${startX + distanceX / 2},${startY + roundness * yMultiplier}
            L ${startX + distanceX / 2},${stopY - roundness * yMultiplier}
            Q ${startX + distanceX / 2},${stopY} ${startX + distanceX / 2 + roundness},${stopY}
            L ${stopX},${stopY}`;
      }
      return points;
    }
  },
  computed: {
    dependencyTasks() {
      return this.tasks.filter(task => typeof task.dependentOn !== 'undefined').map(task => {
        task.dependencyLines = task.dependentOn.map(id => {
          return {
            points: this.getPoints(id, task.id)
          };
        });
        return task;
      });
    }
  }
}
</script>
