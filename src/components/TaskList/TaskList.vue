<!--
/**
 * @fileoverview TaskList component
 * @license MIT
 * @author Rafal Pospiech <neuronet.io@gmail.com>
 * @package GanttElastic
 */
-->
<template>
  <div
    class="gantt-elastic__task-list-wrapper"
    ref="taskListWrapper"
    :style="root.style('task-list-wrapper', { width: '100%', height: '100%' })"
    v-show="$store.state.GanttElastic.options.taskList.display"
  >
    <div class="gantt-elastic__task-list" :style="root.style('task-list')" ref="taskList">
      <task-list-header></task-list-header>
      <div
        class="gantt-elastic__task-list-items"
        ref="taskListItems"
        :style="root.style('task-list-items', { height: $store.state.GanttElastic.options.rowsHeight + 'px' })"
      >
        <task-list-item
          v-for="task in root.visibleTasks"
          :key="task.id"
          :task="task"
          :expander-style="getListExpanderStyle(task)"
        ></task-list-item>
      </div>
    </div>
  </div>
</template>

<script>
import TaskListHeader from './TaskListHeader.vue';
import TaskListItem from './TaskListItem.vue';
export default {
  name: 'TaskList',
  components: {
    TaskListHeader,
    TaskListItem
  },
  inject: ['root'],
  data() {
    return {};
  },
  /**
   * Mounted
   */
  mounted() {
    this.$store.commit(this.root.updateOptionsMut, {
      refs: {
        taskListWrapper: this.$refs.taskListWrapper,
        taskList: this.$refs.taskList,
        taskListItems: this.$refs.taskListItems
      }
    });
  },

  computed: {
    /**
     * Calculate task list expander style
     *
     * @returns {object}
     */
    getListExpanderStyle() {
      return task => {
        const options = this.$store.state.GanttElastic.options;
        const padding = (task.parents.length - 1) * options.taskList.expander.padding;
        const style = {
          'padding-left': padding + options.taskList.expander.margin + 'px',
          margin: `auto 0px auto 10px`
        };
        return style;
      };
    }
  }
};
</script>
