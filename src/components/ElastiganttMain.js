export function ElastiganttMain(prefix, self) {
  
  return {
    template: `<svg class="elastigantt__main" 
      :width="getWidth" 
      :height="getHeight">
      <${prefix}-elastigantt-tree></${prefix}-elastigantt-tree>
    </svg>`,

    data() {
      return window.elastiganttStore.initStore(prefix,'ElastiganttMain',{});
    },

    mounted(){
      console.log('mounted!',this);
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