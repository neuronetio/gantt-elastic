<template>
<svg :x="task.x+task.width + root.state.treeText.offset" :y="task.y-root.state.grid.horizontal.gap" :width="getWidth" :height="task.height+root.state.grid.horizontal.gap*2">
  <rect x="0" y="0" width="100%" height="100%" :style="root.state.treeText.styles.background"></rect>
  <text :x="root.state.treeText.xPadding" y="50%" :style="root.state.treeText.styles.text" alignment-baseline="middle">{{task.label}}</text>
</svg>
</template>
<script>
export default {
  inject: ['root'],
  props: ['task'],
  data() {
    return {};
  },
  computed: {
    getWidth() {
      const textStyle = this.root.state.treeText.styles.text;
      this.root.state.ctx.font = `${textStyle['font-weight']} ${textStyle['font-size']} ${textStyle['font-family']}`;
      const textWidth = this.root.state.ctx.measureText(this.task.label).width;
      return textWidth + this.root.state.treeText.xPadding * 2;
    }
  }
}
</script>
