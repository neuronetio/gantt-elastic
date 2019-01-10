<!--
/**
 * @fileoverview TaskList component
 * @license MIT
 * @author Rafal Pospiech <neuronet.io@gmail.com>
 * @package GanttElastic
 */
-->
<template>
  <foreignObject
    class="gantt-elastic__task-list-wrapper"
    ref="taskListWrapper"
    :style="root.style('task-list-wrapper')"
    x="0"
    y="0"
    width="100%"
    height="100%"
    v-show="root.state.taskList.display"
  >
    <div
      xmlns="http://www.w3.org/1999/xhtml"
      class="gantt-elastic__task-list"
      :style="root.style('task-list')"
      ref="taskList"
    >
      <task-list-header></task-list-header>
      <div
        class="gantt-elastic__task-list-items"
        ref="taskListItems"
        :style="root.style('task-list-items',{height:root.state.rowsHeight+'px'})"
      >
        <task-list-item
          v-for="task in root.state.tasks"
          :key="task.id"
          :task="task"
          :expander-style="getListExpanderStyle(task)"
          v-show="task.visible"
        ></task-list-item>
      </div>
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
  mounted () {
    this.root.state.refs.taskListWrapper = this.$refs.taskListWrapper;
    this.root.state.refs.taskList = this.$refs.taskList;
    this.root.state.refs.taskListItems = this.$refs.taskListItems;
  },
  computed: {
    getListExpanderStyle () {
      return task => {
        const state = this.root.state;
        const padding = (task.parents.length - 1) * state.taskList.expander.padding;
        const maxLevel = this.root.getMaximalLevel();
        let height = state.row.height + state.grid.horizontal.gap * 2 - this.root.style('grid-line-vertical')['stroke-width'];
        let width = ((state.taskList.expander.size + this.root.style("calendar-row")["stroke-width"] + padding + state.taskList.expander.margin) / 100) * state.taskList.percent;
        if (state.taskList.expander.straight) {
          width = (maxLevel - 1) * state.taskList.expander.size + state.taskList.expander.padding * 2;
        }
        const style = {
          "padding-left": padding + state.taskList.expander.margin + "px",
          margin: "auto 0px"
        };
        return style;
      };
    }
  }
};
</script>
