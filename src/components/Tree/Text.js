export function TreeText(prefix, self) {
  return self.wrapComponent({
    props: ['task'],
    template: `<svg :x="task.x+task.width + $root.$data.treeText.offset" :y="task.y" :width="getWidth" :height="task.height">
        <rect x="0" y="0" width="100%" height="100%" :style="$root.$data.treeText.styles.background"></rect>
        <text :x="$root.$data.treeText.xPadding" y="50%" :style="$root.$data.treeText.styles.text" alignment-baseline="middle">{{task.label}}</text>
      </svg>`,
    data() {
      return {};
    },
    computed: {
      getWidth() {
        const textStyle = this.$root.$data.treeText.styles.text;
        self.ctx.font = `${textStyle['font-weight']} ${textStyle['font-size']} ${textStyle['font-family']}`;
        console.log(self.ctx.font);
        const textWidth = self.ctx.measureText(this.task.label).width;
        return textWidth + this.$root.$data.treeText.xPadding * 2;
      }
    }
  });
}
