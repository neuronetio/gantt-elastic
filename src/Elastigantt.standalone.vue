<template>
<elastigantt :tasks="tasks" :options="options"></elastigantt>
</template>
<script>
import Elastigantt from './Elastigantt.vue';
Vue.component('elastigantt', Elastigantt);
export default {
  el: '#elastigantt',
  data: {
    tasks: [],
    options: {}
  }
}
</script>
