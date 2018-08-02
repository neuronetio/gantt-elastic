export function TreeBar(prefix, self) {
  return self.wrapComponent({
    props:['task'],
    template:`<rect id="elastigantt__tree-row" x="0" y="0" width="100%" height="100%" style="fill:#FF0000a0"></rect>`,
    data(){
      return {};
    },
    computed:{

    }
  });
}
