export function Grid(prefix, self) {
  return self.wrapComponent({
  
      template: `<g></g>`,
      
      data(){
        return window.elastiganttStore.initStore(prefix,'Grid',{});
      },
  
      computed: {
        
      }
    });
  }