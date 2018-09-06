<template>
<svg :x="task.x+task.width + state.treeText.offset" :y="task.y" :width="getWidth" :height="task.height">
  <rect x="0" y="0" width="100%" height="100%" :style="state.treeText.styles.background"></rect>
  <text :x="state.treeText.xPadding" y="50%" :style="state.treeText.styles.text" alignment-baseline="middle">{{task.label}}</text>
</svg>
</template>
<script>
export default {
  inject: ['state'],
  props: ['task'],
  data() {
    return {};
  },
  computed: {
    getWidth() {
      const textStyle = this.state.treeText.styles.text;
      this.state.ctx.font = `${textStyle['font-weight']} ${textStyle['font-size']} ${textStyle['font-family']}`;
      const textWidth = this.state.ctx.measureText(this.task.label).width;
      return textWidth + this.state.treeText.xPadding * 2;
    }
  }
}
</script>
