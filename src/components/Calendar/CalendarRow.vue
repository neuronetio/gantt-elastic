<template>
<g class="elastigantt__calendar-row-group" v-show="inViewPort">
  <rect class="elastigantt__calendar-row" :x="item.x" :y="item.y" :width="item.width" :height="item.height" :style="root.state.calendar.styles.row"></rect>
  <text
    :x="getTextX"
    :y="getTextY"
    alignment-baseline="middle"
    text-anchor="middle"
    :style="root.state.calendar.styles.text">{{item.label}}</text>
</g>
</template>
<script>
export default {
  inject: ['root'],
  props: ['item'],
  data() {
    return {};
  },
  computed: {
    inViewPort() {
      const state = this.root.state;
      const item = this.item;
      return (item.x <= state.scroll.tree.right && item.x + item.width >= state.scroll.tree.left) ||
        (item.x <= state.scroll.tree.left && item.x + item.width >= state.scroll.tree.right);
    },
    getTextX() {
      return this.item.x + this.item.width / 2;
    },
    getTextY() {
      return this.item.y + this.item.height / 2;
    }
  }
}
</script>
