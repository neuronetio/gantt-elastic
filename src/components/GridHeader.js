export function GridHeader(prefix, self) {
    return {
  
      template: `<g></g>`,
      
      data(){
        return window.elastiganttStore.initStore(prefix,'GridHeader',{});
      },
  
      computed: {
        
      }
    };
  }