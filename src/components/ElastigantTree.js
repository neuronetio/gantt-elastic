export function ElastiganttTree(prefix, self) {
  return {

    props: ['data'],

    template: `<g><rect class="elastigantt__tree" 
        :x="0" 
        :y="0" 
        :width="getWidth" 
        :height="getHeight">
        </rect>
        <${prefix}-elastigantt-tree-row
          v-for="(item, index) in data.tasks"
          :key="item.id"
          :task="item"
          :index="index"
          ></${prefix}-elastigantt-tree-row>
        </g>`,
    
    data(){
      return {store:elastiganttStore};
    },

    computed: {
      getData() {
        return this.data;
      },
      getWidth() {
        return 100;
      },
      getHeight() {
        return this.data.tasks.length * (this.data.options.row.height + this.data.options.row.gap);
      }
    }
  };
}