export function ElastiganttTreeRow(prefix, self) {
  return {

    props: ['data', 'task', 'index'],

    template: `<rect 
      class="elastigantt__tree-row" 
      :id="getElementId(task.key)" 
      :x="0"
      :y="getY"
      :width="getWidth"
      :height="getHeight"
      :style="getStyle"></rect>`,

    data(){
      return {store:elastiganttStore};
    },

    methods: {
      getElementId(id) {
        return `elastigantt__tree-row--${id}`;
      }
    },

    computed: {
      getData() {
        return this.data;
      },
      getHeight() {
        return this.data.options.row.height;
      },
      getWidth() {
        return 50;
      },
      getY() {
        return (this.data.options.row.height + this.data.options.row.gap) * this.index;
      },
      getStyle() {
        return this.data.options.row.style;
      },
    }
  };
}