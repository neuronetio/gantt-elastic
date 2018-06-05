export function Header(prefix, self) {
    return self.wrapComponent({
  
      template: `<div class="elastigantt__header">
          <input type="text" v-model="scale">
      </div>`,
      
      data(){
        return window.elastiganttStore.initStore(prefix,'Header',{});
      },
  
      computed: {
        scale:{
            get(){
                return this.shared.options.scaleX;
            },
            set(value){
                this.shared.options.scaleX = value;
            }
        }
        
      }
    });
  }