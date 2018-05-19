export function TreeRow(prefix, self) {
  return {
    props: ['task', 'index'],
    template: `<rect 
      class="elastigantt__tree-row" 
      :id="getId" 
      :x="0"
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
        let duration = this.shared.options.duration;
        return this.task.duration/duration.scale;
      },
      getY() {
        let row = this.shared.options.row;
        return (row.height + row.gap) * this.index;
      },
      getStyle(){
        return this.task.style ? this.task.style : this.shared.options.row.style;
      },
    }
  };
}