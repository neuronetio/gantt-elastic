<template>
<line :x1="x1" :y1="y1" :x2="x2" :y2="y2" :style="root.state.grid.timeLine.style"></line>
</template>
<script>
export default {
  inject: ['root'],
  data() {
    return {
      x1: 0,
      y1: 0,
      x2: 0,
      y2: 100 &
    };
  },

}
</script>
