export function Main(prefix, self) {
  return self.wrapComponent({
    template: `
    <div class="elastigantt__main">
      <${prefix}-header></${prefix}-header>
      <div class="elastigantt__container">
        <svg ref="svgElement" class="elastigantt__main-svg" xmlns="http://www.w3.org/2000/svg"
          :width="$root.$data.width"
          :height="$root.$data.height">
          <?xml-stylesheet type="text/css" href="src/styles/elastigantt.css"?>
          <${prefix}-tree></${prefix}-tree>
        </svg>
      </div>
    </div>`,
    data() {
      return {};
    },
    mounted() {
      this.$root.svgElement = this.$refs.svgElement;
    }
  })
}
