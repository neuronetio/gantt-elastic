export function TreeText(prefix, self) {
  return self.wrapComponent({
    props: ['task'],
    template: `<svg :x="task.x+task.width+$root.$data.treeText.offset" :y="task.y" :width="getWidth" :height="task.height">
      <text :x="0" y="50%" :style="$root.$data.treeText.styles.text" alignment-baseline="middle">{{task.label}}</text>
      </svg>`,
    data() {
      return {};
    },
    computed: {
      getWidth() {
        const textStyle = this.$root.$data.treeText.styles.text;
        self.ctx.font = `${textStyle['font-weight']} ${textStyle['font-size']} ${textStyle['font-family']}`;
        const textWidth = self.ctx.measureText(this.task.label).width;
        return this.task.x + this.task.width + this.$root.$data.treeText.xPadding * 2;
      }
    }
  });
}
