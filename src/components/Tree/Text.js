export function TreeText(prefix, self) {
  return self.wrapComponent({
    props : [ 'task' ],
    template :
        `<text x="50%" y="50%" :style="getTextStyle" text-anchor="middle" alignment-baseline="middle">{{task.label}}</text>`,
    data() { return {}; },
    computed : {
      getTextStyle() {
        let state = this.$root.$data;
        return `${state.row.textStyle};font-family:${state.row.fontFamily};font-size:${
            state.row.fontSize};font-weight:bold;`;
      }
    }
  });
}
