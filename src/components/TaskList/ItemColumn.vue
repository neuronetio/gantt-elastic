<template>
<div class="elastigantt__task-list-item-column" :style="column.style">
  <div class="elastigantt__task-list-item-value--wrapper">
    <slot></slot>
    <div class="elastigantt__task-list-item-value" :style="column.styles.value">{{value}}</div>
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
    value() {
      if (typeof this.column.value === 'function') {
        return this.column.value(this.task);
      }
      return this.task[this.column.value];
    }
  }
}
</script>
