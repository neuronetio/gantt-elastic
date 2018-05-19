export function Header(prefix, self) {
    return self.wrapComponent({
  
      template: `<div class="elastigantt__header">
          <input type="text" v-model="scale">
      </div>`,
      
      data(){
        return window.elastiganttStore.initStore(prefix,'GridHeader',{});
      },
  
      computed: {
        scale:{
            get(){
                return this.shared.options.duration.scale;
            },
            set(value){
                this.shared.options.duration.scale = value;
            }
        }
        
      }
    });
  }