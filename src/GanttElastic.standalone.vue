<template>
<gantt-elastic :tasks="tasks" :options="options"></gantt-elastic>
</template>
<script>
import GanttElastic from './GanttElastic.vue';
export default {
  components: {
    'gantt-elastic': GanttElastic
  },
  data: {
    tasks: [],
    options: {},
  }
}
</script>
