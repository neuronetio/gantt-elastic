<template>
<g class="elastigantt__calendar-row-group">
  <rect class="elastigantt__calendar-row" :x="item.x" :y="item.y" :width="item.width" :height="item.height" :style="state.calendar.styles.row"></rect>
  <text
    :x="getTextX"
    :y="getTextY"
    alignment-baseline="middle"
    text-anchor="middle"
    :style="state.calendar.styles.text">{{item.label}}</text>
</g>
</template>
<script>
export default {
  inject: ['state'],
  props: ['item'],
  data() {
    return {};
  },
  computed: {
    getTextX() {
      return this.item.x + this.item.width / 2;
    },
    getTextY() {
      return this.item.y + this.item.height / 2;
    }
  }
}
</script>
