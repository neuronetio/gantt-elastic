export function TreeProgressBar(prefix, self) {
  return self.wrapComponent({
    props:['task'],
    template:`<rect id="elastigantt__tree-row-progress" x="0" y="0" height="25%" width="100%" style="fill:#00ff92a0"></rect>`,
    data(){
      return {};
    },
    computed:{

    }
  });
}
