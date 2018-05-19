export function Main(prefix, self) {
  return self.wrapComponent({
    template: `
    <div class="elastigantt__main">
      <${prefix}-header></${prefix}-header>
      <svg class="elastigantt__main-svg" 
        :width="getWidth" 
        :height="getHeight">
        <${prefix}-tree></${prefix}-tree>
      </svg>
    </div>`,

    data() {
      console.log(this);
      return window.elastiganttStore.initStore(prefix,'Main',{});
    },

    created(){
      
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

  });
}