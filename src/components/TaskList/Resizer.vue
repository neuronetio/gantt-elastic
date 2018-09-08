<template>
<div class="elastigantt__task-list-resizer" style="getStyle"></div>
</template>
<script>
export default {
  data() {
    return {};
  },
  computed: {
    getStyle() {
      const state = this.root.state;
      return {
        height: '100%',
        width: root.state.taskList.resizerWidth + 'px'
      };
    }
  }
}
</script>
