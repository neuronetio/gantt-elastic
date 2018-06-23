const Elastigantt = Vue.component("Elastigantt", {
  template: `<div class="elastigantt">
    <elastigantt-main></elastigantt-main>
  </div>`,
  data() {
    return window.elastiganttStore.initStore(prefix, 'Elastigantt', {});
  },
  methods: {

  }
});

export { Elastigantt };
