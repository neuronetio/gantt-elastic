<template>
<div class="elastigantt__header">
  <input type="range" v-model="scale" max="24" min="2">
  <input type="range" v-model="height" max="100" min="6">
  <input type="range" v-model="scope" max="100" min="0">
  <input type="range" v-model="divider" max="100" min="0">
  <input type="checkbox" v-model="root.state.taskList.display">
</div>
</template>
<script>
export default {
  inject: ['root'],
  data() {
    return {};
  },
  computed: {
    scale: {
      get() {
        return this.root.state.times.timeZoom;
      },
      set(value) {
        this.root.state.times.timeZoom = Number(value);
        //this.root.recalculate();
      }
    },
    height: {
      get() {
        return this.root.state.row.height;
      },
      set(value) {
        this.root.state.row.height = Number(value);
        //this.root.recalculate();
      }
    },
    scope: {
      get() {
        return this.root.state.scope.before;
      },
      set(value) {
        this.root.state.scope.before = Number(value);
        this.root.state.scope.after = Number(value);
        //this.root.recalculate();
      }
    },
    divider: {
      get() {
        return this.root.state.taskList.percent;
      },
      set(value) {
        this.root.state.taskList.percent = Number(value);
        //this.root.recalculate();
      }
    }
  }
}
</script>
