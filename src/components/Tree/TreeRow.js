export function TreeRow(prefix, self) {
  return self.wrapComponent({
    props: ['task', 'index'],
    template: `<foreignObject :id="task.id" :transform="getGroupTransform" :width="task.width" :height="task.height">
      <svg :width="task.width" :height="task.height">
        <rect class="elastigantt__tree-row"
          :x="0"
          :y="0"
          width="100%"
          height="100%"
          :style="getStyle"
        ></rect>
        <rect class="elastigantt__tree-row-progress"
          :x="0"
          :y="0"
          :height="this.$root.$data.progress.height"
          width="100%"
          :style="getProgressStyle"
        ></rect>
        <text
        :x="2"
        :y="getTextY"
        :style="getTextStyle"
        alignment-baseline="middle"
        >{{task.label}}</text>
      </svg>
    </foreignObject>`,

    data() {
      return {};
    },
    computed: {
      getGroupTransform(){
        return `translate(${this.task.x} ${this.task.y})`;
      },
      getStyle() {
        return this.task.style ? this.task.style : this.$root.$data.row.style;
      },
      getProgressStyle(){
        return this.task.progressStyle ? this.task.progressStyle : this.$root.$data.progress.style;
      },
      getProgressWidth(){
        return this.task.width/100*this.task.progress;
      },
      getTextY(){
        let state = this.$root.$data;
        return state.row.height/2;
      },
      getTextStyle(){
        let state = this.$root.$data;
        return `${state.row.textStyle};font-family:${state.row.fontFamily};font-size:${state.row.fontSize}`;
      }
    }
  });
}
