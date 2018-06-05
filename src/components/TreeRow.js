export function TreeRow(prefix, self) {
  return self.wrapComponent({
    props: ['task', 'index'],
    template: `<rect 
      class="elastigantt__tree-row" 
      :id="getId" 
      :x="getX"
      :y="getY"
      :width="getWidth"
      :height="getHeight"
      :style="getStyle"></rect>`,

    data() {
      return window.elastiganttStore.initStore(prefix, 'TreeRow', {});
    },

    methods: {
     
    },

    computed: {
      getId(){
        return this.task.key;
      },
      getHeight() {
        return this.shared.options.row.height;
      },
      getWidth() {
        if(this.task.durationMs){
          return this.task.durationMs / this.shared.options.scaleX;
        }
        return this.task.durationMs;
      },
      getX(){
        let x = this.task.startTime - this.shared.firstTaskTime;
        if(x){
          x = x / this.shared.options.scaleX;
        }
        return x;
      },
      getY() {
        let row = this.shared.options.row;
        let horizontalGrid = this.shared.options.horizontalGrid;
        return ((row.height + horizontalGrid.gap) * this.index) + horizontalGrid.gap;
      },
      getStyle(){
        return this.task.style ? this.task.style : this.shared.options.row.style;
      },
    }
  });
}