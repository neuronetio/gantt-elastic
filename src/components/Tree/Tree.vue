<template>
<svg class="elastigantt_tree-object"
    x="0"
    y="0"
    :width="getWidth"
    :height="getHeight"
    xmlns="http://www.w3.org/2000/svg">
  <calendar></calendar>
  <grid></grid>
  <tree-dependency-lines :tasks="$root.getVisibleTasks()"></tree-dependency-lines>
  <g v-for="(task, index) in $root.getVisibleTasks()"
      :task="task"
      :index="index"
      :key="task.id">
    <component :task="task" :index="index" :is="'tree-row-'+task.type"></component>
  </g>
</svg>
</template>
<script>
export default {
  inject: ['state'],
  data() {
    return {};
  },
  computed: {
    getWidth() {
      const state = this.state;
      return state.width;
    },
    getHeight() {
      const state = this.state;
      return state.height;
    }
  }
}
</script>
