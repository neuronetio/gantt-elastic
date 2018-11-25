<template>
  <foreignObject
    class="gantt-elastic__task-list-wrapper"
    :style="root.style('task-list-wrapper')"
    x="0"
    y="0"
    width="100%"
    height="100%"
    v-if="root.state.taskList.display"
  >
    <div xmlns="http://www.w3.org/1999/xhtml" class="gantt-elastic__task-list" :style="root.style('task-list')">
      <task-list-header></task-list-header>
      <task-list-item
        v-for="task in root.visibleTasks"
        :key="task.id"
        :task="task"
        :expander-style="getListExpanderStyle(task)"
      ></task-list-item>
    </div>
  </foreignObject>
</template>

<script>
import TaskListHeader from "./TaskListHeader.vue";
import TaskListItem from "./TaskListItem.vue";
export default {
  components: {
    TaskListHeader,
    TaskListItem
  },
  inject: ["root"],
  data () {
    return {};
  },
  computed: {
    getListExpanderStyle () {
      return task => {
        const state = this.root.state;
        const padding = (task.parents.length - 1) * state.taskList.expander.padding;
        const maxLevel = this.root.getMaximalLevel();
        let height = state.row.height + state.grid.horizontal.gap * 2 - state.grid.horizontal.style.strokeWidth;
        let width = ((state.taskList.expander.size + this.root.style("calendar-row")["stroke-width"] + padding + state.taskList.expander.margin) / 100) * state.taskList.percent;
        if (state.taskList.expander.straight) {
          width = (maxLevel - 1) * state.taskList.expander.size + state.taskList.expander.padding * 2;
        }
        const style = {
          width: width + "px",
          height: height + "px",
          "border-color": "#00000010",
          "padding-left": padding + state.taskList.expander.margin + "px",
          margin: "auto 0px"
        };
        return style;
      };
    }
  }
};
</script>
