<template>
<div class="gantt-elastic__task-list-item-column" :style="column.style">
  <div class="gantt-elastic__task-list-item-value--wrapper">
    <slot></slot>
    <div v-if="!html" class="gantt-elastic__task-list-item-value" :style="column.styles.value">{{value}}</div>
    <div v-if="html" class="gantt-elastic__task-list-item-value" :style="column.styles.value" v-html="value"></div>
  </div>
</div>
</template>
<script>
export default {
  inject: ['root'],
  props: ['column', 'task'],
  data() {
    return {};
  },
  computed: {
    html() {
      if (typeof this.column.html !== 'undefined' && this.column.html === true) {
        return true;
      }
      return false;
    },
    value() {
      if (typeof this.column.value === 'function') {
        return this.column.value(this.task);
      }
      return this.task[this.column.value];
    }
  }
}
</script>
