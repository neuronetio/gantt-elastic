<template>
<elastigantt :tasks="tasks" :options="options"></elastigantt>
</template>
<script>
import Elastigantt from './Elastigantt.vue';
export default {
  components: {
    'elastigantt': Elastigantt
  },
  data: {
    tasks: [],
    options: {},
  }
}
</script>
