<template>
  <gantt-elastic :tasks="tasks" :options="options">
    <gantt-header slot="header"></gantt-header>
    <gantt-footer slot="footer"></gantt-footer>
  </gantt-elastic>
</template>
<script>
import GanttElastic from './GanttElastic.vue';
export default {
  components: {
    'gantt-header': { template: `` },
    'gantt-elastic': GanttElastic,
    'gantt-footer': { template: `` }
  },
  props: ['header', 'footer'],
  data: {
    tasks: [],
    options: {},
  },
}
</script>
