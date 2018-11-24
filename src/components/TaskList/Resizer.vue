<template>
<div class="gantt-elastic__task-list-resizer" style="getStyle"></div>
</template>
<script>
export default {
  inject: ["root"],
  props: ["column"],
  data() {
    return {};
  },
  computed: {
    getStyle() {
      return {
        height: "100%",
        width: this.root.state.taskList.resizerWidth + "px"
      };
    }
  }
};
</script>
