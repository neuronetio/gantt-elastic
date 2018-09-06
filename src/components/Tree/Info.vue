<template>
<svg class="elastigantt__info"
    :x="getX"
    :y="task.y"
    :width="getWidth"
    :height="state.row.height"
    xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="100%" height="100%" :style="state.info.style"></rect>
  <text x="50%" y="50%" :style="getTextStyle" text-anchor="middle" alignment-baseline="middle">{{task.label}}</text>
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
    getX() {
      const state = this.state;
      this.state.ctx.font = `${state.info.fontWeight} ${state.info.fontSize} ${state.info.fontFamily}`;
      const textWidth = this.state.ctx.measureText(this.task.label).width / 2 + 10;
      return this.task.x + this.task.width / 2 - textWidth;
    },
    getWidth() {
      return this.state.ctx.measureText(this.task.label).width + 20;
    },
    getTextStyle() {
      let state = this.state;
      return `${state.info.textStyle};font-family:${state.info.fontFamily};font-size:${
            state.info.fontSize};font-weight:${state.info.fontWeight};`;
    }
  }
}
</script>
