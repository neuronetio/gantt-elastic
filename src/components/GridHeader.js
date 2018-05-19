export function GridHeader(prefix, self) {
  return self.wrapComponent({
  
      template: `<g></g>`,
      
      data(){
        return window.elastiganttStore.initStore(prefix,'GridHeader',{});
      },
  
      computed: {
        
      }
    })
  }