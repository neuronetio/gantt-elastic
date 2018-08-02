export function TreeRow(prefix, self) {
  return self.wrapComponent({
    props: ['task', 'index'],
    template: `<g>
      <rect class="elastigantt__tree-row"
        v-bind:id="task.id"
        v-bind:x="task.x"
        v-bind:y="task.y"
        v-bind:width="task.width"
        v-bind:height="task.height"
        v-bind:style="getStyle"
      ></rect>
      <rect class="elastigantt__tree-row-progress"
        :x="task.x"
        :y="task.y"
        :width="getProgressWidth"
        :height="this.$root.$data.progress.height"
        :style="getProgressStyle"
      ></rect>
      <text
      :x="task.x+2"
      :y="getTextY"
      :style="getTextStyle"
      alignment-baseline="middle"
      >{{task.label}}</text>
      </g>`,

    data() {
      return {};
    },
    computed: {
      getStyle() {
        return this.task.style ? this.task.style : this.$root.$data.row.style;
      },
      getProgressStyle(){
        return this.task.progressStyle ? this.task.progressStyle : this.$root.$data.progress.style;
      },
      getProgressWidth(){
        console.log(this.task.width,this.task.progress,this.task.progress/this.task.width*100);
        return this.task.width/100*this.task.progress;
      },
      getTextY(){
        let state = this.$root.$data;
        return this.task.y + state.row.height/2;
      },
      getTextStyle(){
        let state = this.$root.$data;
        return `${state.row.textStyle};font-family:${state.row.fontFamily};font-size:${state.row.fontSize}`;
      }
    }
  });
}
