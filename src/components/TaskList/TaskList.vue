<template>
<foreignObject class="elastigantt__task-list-object" x="0" y="0" width="100%" height="100%" v-if="root.state.taskList.display">
  <div xmlns="http://www.w3.org/1999/xhtml" class="elastigantt__task-list-container">
    <div v-html="root.state.defs.join('')"></div>
    <task-list-resizer></task-list-resizer>
    <task-list-header :expander-style="getHeaderExpanderStyle"></task-list-header>
    <task-list-item v-for="task in root.visibleTasks" :key="task.id" :task="task" :expander-style="getListExpanderStyle(task)"></task-list-item>
  </div>
</foreignObject>
</template>
<script>
import TaskListResizer from './Resizer.vue';
import TaskListHeader from './TaskListHeader.vue';
import TaskListItem from './TaskListItem.vue';

export default {
  components: {
    'task-list-resizer': TaskListResizer,
    'task-list-header': TaskListHeader,
    'task-list-item': TaskListItem,
  },
  inject: ['root'],
  data() {
    return {};
  },
  computed: {
    getHeaderExpanderStyle() {
      const state = this.root.state;
      const padding = this.root.getMaximalLevel() * state.taskList.expander.padding;
      return Object.assign({}, state.taskList.styles.header, {
        'width': (state.calendar.styles.column['stroke-width'] + padding + state.taskList.expander.margin) / 100 * state.taskList.percent + 'px',
        'height': state.calendar.height + state.calendar.styles.column['stroke-width'] + 'px',
        'margin-bottom': state.calendar.gap + 'px',
        'padding-right': padding + state.taskList.expander.margin + 'px',
        'padding-left': state.taskList.expander.margin + 'px',
        'margin': 'auto 0px',
        'display': 'inline-flex'
      });
    },
    getListExpanderStyle() {
      return task => {
        const state = this.root.state;
        const padding = (task.parents.length - 1) * state.taskList.expander.padding;
        const fullPadding = this.root.getMaximalLevel() * state.taskList.expander.padding;
        let height = state.row.height + (state.horizontalGrid.gap * 2) - state.horizontalGrid.strokeWidth;
        let width = (state.taskList.expander.width + state.calendar.styles.column['stroke-width'] + padding + state.taskList.expander.margin) / 100 * state.taskList.percent;
        const style = {
          'width': width + 'px',
          'height': height + 'px',
          'border-color': '#00000010',
          'padding-left': padding + state.taskList.expander.margin + 'px',
          'margin': 'auto 0px',
        };
        //console.log('style', style);
        return style;
      }
    }
  }
}
</script>
