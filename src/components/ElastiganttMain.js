export function ElastiganttMain(prefix, self) {
  return {

    props: ['data'],
    template: `<svg class="elastigantt__main" 
      :width="getWidth" 
      :height="getHeight"
      >

      </svg>`,

    data() {
      return window.elastiganttStore.init(prefix,{
        
      });
    },

    computed:{
      getWidth(){
        let width = this.store.get('classInstance.containerElement.clientWidth');
        console.log(width);
        return width;
      },
      getHeight(){
        let height = this.store.get('classInstance.containerElement.clientHeight');
        console.log(height);
        return height;
      }

    },

  };
}