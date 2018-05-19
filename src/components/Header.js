export function Header(prefix, self) {
    return {
  
      template: `<g></g>`,
      
      data(){
        return window.elastiganttStore.initStore(prefix,'GridHeader',{});
      },
  
      computed: {
        
      }
    };
  }