const Elastigantt = Vue.component("Elastigantt", {
  template: `<div class="elastigantt">
    <elastigantt-main></elastigantt-main>
  </div>`,
  data() {
    return {};
  },
  methods: {

    test(){
      console.log('test');
    }
  }
});

export {Elastigantt};
