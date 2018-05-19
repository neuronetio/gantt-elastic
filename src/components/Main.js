export function Main(prefix, self) {
  
  return {
    template: `<svg class="elastigantt__main" 
      :width="getWidth" 
      :height="getHeight">
      <${prefix}-tree></${prefix}-tree>
    </svg>`,

    data() {
      return window.elastiganttStore.initStore(prefix,'Main',{});
    },

    mounted(){
      console.log('mounted!',this);
    },

    beforeCreate(){
      console.log('beforeCreate',this);
    },

    methods:{
      calculateHeight(){
        return this.shared.height = this.shared.tasks.length*(this.shared.options.row.height+this.shared.options.row.gap);
      },
    },

    computed:{
      getWidth(){
        let width = this.shared.classInstance.containerElement.clientWidth;
        return width;
      },
      getHeight(){
        return this.calculateHeight();
      },
    },

  };
}