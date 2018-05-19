export function ElastiganttMain(prefix, self) {
  return {

    props: ['data'],
    template: `<div class="elastigantt__main" 
      :width="getWidth" 
      :height="getHeight"
      >
        {{name}}
      </div>`,

    data() {
      return window.elastiganttStore.initStore(prefix,'ElastiganttMain',{
        name:"Rafał!"
      });
    },

    mounted(){
      this.shared.test = "oto test";
      delete this.shared.test;
      this.test2 = "oto drugi test";
      delete this.test2;
      console.log('mounted!',this);
    },

    computed:{
      getWidth(){
        let width = this.shared.classInstance.containerElement.clientWidth;
        console.log(width);
        return width;
      },
      getHeight(){
        let height = this.shared.classInstance.containerElement.clientHeight;
        console.log(height);
        return height;
      }

    },

  };
}