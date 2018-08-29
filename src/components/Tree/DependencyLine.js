export function TreeDependencyLine(prefix, self) {
  return self.wrapComponent({
    props : [ 'task' ],
    template : ``,
    data() { return {}; },
    created(){
      console.log('dependency lines created',this);
    },
    computed : {

    }
  });
}
