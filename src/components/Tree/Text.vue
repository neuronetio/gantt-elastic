<template>
  <svg
    class="gantt-elastic__tree-row-text-wrapper"
    :style="root.style('tree-row-text-wrapper')"
    :x="task.x+task.width + root.state.treeText.offset"
    :y="task.y-root.state.grid.horizontal.gap"
    :width="getWidth"
    :height="task.height+root.state.grid.horizontal.gap*2"
  >
    <rect
      class="gantt-elastic__tree-row-text-background"
      :style="root.style('tree-row-text-background')"
      x="0"
      y="0"
      width="100%"
      height="100%"
    ></rect>
    <text
      class="gantt-elastic__tree-row-text"
      :style="root.style('tree-row-text')"
      :x="root.state.treeText.xPadding"
      y="50%"
      alignment-baseline="middle"
    >{{task.label}}</text>
  </svg>
</template>

<script>
export default {
  inject: ["root"],
  props: ["task"],
  data () {
    return {};
  },
  computed: {
    getWidth () {
      const textStyle = this.root.style('tree-row-text');
      this.root.state.ctx.font = `${textStyle["font-weight"]} ${textStyle["font-size"]} ${textStyle["font-family"]}`;
      const textWidth = this.root.state.ctx.measureText(this.task.label).width;
      return textWidth + this.root.state.treeText.xPadding * 2;
    }
  }
};
</script>
