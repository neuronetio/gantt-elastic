<template>
<div class="elastigantt__header">
  <input type="range" v-model="scale" max="24" min="2">
  <input type="range" v-model="height" max="100" min="6">
  <input type="range" v-model="scope" max="100" min="0">
  <input type="range" v-model="divider" max="100" min="0">
  <input type="checkbox" v-model="state.taskList.display">
</div>
</template>
<script>
export default {

  inject: ['state'],

  data() {
    return {};
  },

  computed: {
    scale: {
      get() {
        return this.state.times.timeZoom;
      },
      set(value) {
        this.state.times.timeZoom = Number(value);
        this.$root.recalculate();
      }
    },
    height: {
      get() {
        return this.state.row.height;
      },
      set(value) {
        this.state.row.height = Number(value);
        this.$root.recalculate();
      }
    },
    scope: {
      get() {
        return this.state.scope.before;
      },
      set(value) {
        this.state.scope.before = Number(value);
        this.state.scope.after = Number(value);
        this.$root.recalculate();
      }
    },
    divider: {
      get() {
        return this.state.taskList.percent;
      },
      set(value) {
        this.state.taskList.percent = Number(value);
        this.$root.recalculate();
      }
    }
  }
}
</script>
