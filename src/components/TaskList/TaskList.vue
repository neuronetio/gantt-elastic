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
    :style="root.style('task-list-wrapper',{width:'100%', height:'100%'})"
    v-show="$store.state.options.taskList.display"
  >
    <div class="gantt-elastic__task-list" :style="root.style('task-list')" ref="taskList">
      <task-list-header></task-list-header>
      <div
        class="gantt-elastic__task-list-items"
        ref="taskListItems"
        :style="root.style('task-list-items',{height:$store.state.options.rowsHeight+'px'})"
      >
        <task-list-item
          v-for="task in $store.state.tasks"
          :key="task.id"
          :task="task"
          :expander-style="getListExpanderStyle(task)"
          v-show="task.visible"
        ></task-list-item>
      </div>
    </div>
  </div>
</template>

<script>
import TaskListHeader from './TaskListHeader.vue'
import TaskListItem from './TaskListItem.vue'
export default {
  components: {
    TaskListHeader,
    TaskListItem
  },
  inject: ['root'],
  data() {
    return {}
  },
  /**
   * Mounted
   */
  mounted() {
    this.$store.commit(this.root.updateOptions, {
      refs: {
        taskListWrapper: this.$refs.taskListWrapper,
        taskList: this.$refs.taskList,
        taskListItems: this.$refs.taskListItems
      }
    })
  },

  computed: {
    /**
     * Calculate task list expander style
     *
     * @returns {object}
     */
    getListExpanderStyle() {
      return task => {
        const options = this.$store.state.options
        const padding = (task.parents.length - 1) * options.taskList.expander.padding
        const style = {
          'padding-left': padding + options.taskList.expander.margin + 'px',
          margin: `auto 0px auto 10px`
        }
        return style
      }
    }
  }
}
</script>
