<template>
<elastigantt :tasks="tasks" :options="options"></elastigantt>
</template>
<script>
import dayjs from 'dayjs';
import Vue from 'vue';
import Elastigantt from './Elastigantt.vue';
export default {
  components: {
    'elastigantt': Elastigantt
  },
  beforeCreate() {
    console.log('elastigantt standalone vue component mounted');
  },
  data: {
    tasks: [],
    options: {},
  }
}
</script>
