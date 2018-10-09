<template>
<elastigantt :tasks="tasks" :options="options"></elastigantt>
</template>
<script>
export default {
  el: '#elastigantt',
  data: {
    tasks: [],
    options: {}
  }
}
</script>
