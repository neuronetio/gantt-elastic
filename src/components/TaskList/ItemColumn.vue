<template>
<div class="elastigantt__task-list-item-column" :style="column.style">
  <div class="elastigantt__task-list-item-value" :style="column.styles.value">{{task[column.value]}}</div>
</div>
</template>
<script>
export default {
  inject: ['root'],
  props: ['column', 'task'],
  data() {
    return {};
  },
}
</script>
