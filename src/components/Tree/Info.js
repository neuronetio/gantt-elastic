export function Info(prefix, self) {
  return self.wrapComponent({
    props : [ 'task' ],
    template : `<foreignObject
      class="elastigantt__info"
      :x="task.x+task.width+10"
      :y="task.y"
      :width="getWidth"
      :height="$root.$data.row.height"
    >
      <svg width="100%" height="100%">
      <rect x="4" y="0" width="100%" height="100%" :style="$root.$data.info.style"></rect>
        <text x="10" y="50%" :style="getTextStyle" alignment-baseline="middle">{{task.label}}</text>
      </svg>
    </foreignObject>`,
    data() {
      return {};
    },
    computed : {
      getWidth() {
        return self.ctx.measureText(this.task.label).width + 20;
      },
      getTextStyle() {
        let state = this.$root.$data;
        return `${state.info.textStyle};font-family:${state.info.fontFamily};font-size:${
            state.info.fontSize};font-weight:bold;`;
      }
    }
  });
}
