export function TreeRow(prefix, self) {
  return self.wrapComponent({
    props: ['task', 'index'],
    template: `<g>
      <rect
        class="elastigantt__tree-row"
        v-bind:id="task.id"
        v-bind:x="task.x"
        v-bind:y="task.y"
        v-bind:width="task.width"
        v-bind:height="task.height"
        v-bind:style="getStyle"></rect>
      </g>`,

    data() {
      return {};
    },
    computed: {
      getStyle() {
        return this.task.style ? this.task.style : this.$root.$data.row.style;
      },
    }
  });
}
