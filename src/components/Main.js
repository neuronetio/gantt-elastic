export function Main(prefix, self) {
  return self.wrapComponent({
    template: `
    <div class="elastigantt__main">
      <${prefix}-header></${prefix}-header>
      <div class="elastigantt__container">
        <svg class="elastigantt__main-svg"
          :width="$root.$data.width"
          :height="$root.$data.height">
          <${prefix}-tree></${prefix}-tree>
        </svg>
      </div>
    </div>`,
    data() {
      return {};
    },
  })
}
