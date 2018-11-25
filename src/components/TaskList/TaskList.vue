<template>
  <foreignObject class="gantt-elastic__task-list-object" x="0" y="0" width="100%" height="100%" v-if="root.state.taskList.display">
    <div xmlns="http://www.w3.org/1999/xhtml" class="gantt-elastic__task-list-container">
      <task-list-header></task-list-header>
      <task-list-item v-for="task in root.visibleTasks" :key="task.id" :task="task" :expander-style="getListExpanderStyle(task)"></task-list-item>
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
    getHeaderExpanderStyle () {
      const state = this.root.state;
      return Object.assign({}, state.taskList.styles.header, {
        width: ((state.taskList.expander.width + this.root.style("calendar-row")["stroke-width"] + state.taskList.expander.margin) / 100) * state.taskList.percent + "px",
        height: state.calendar.height + this.root.style("calendar-row")["stroke-width"] + "px",
        "margin-bottom": state.calendar.gap + "px",
        "padding-right": state.taskList.expander.margin + "px",
        "padding-left": state.taskList.expander.margin + "px",
        margin: "auto 0px",
        display: "inline-flex"
      });
    },
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
