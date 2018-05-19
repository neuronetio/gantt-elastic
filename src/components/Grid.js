export function Grid(prefix, self) {
    return {
  
      template: `<g></g>`,
      
      data(){
        return window.elastiganttStore.initStore(prefix,'Grid',{});
      },
  
      computed: {
        
      }
    };
  }