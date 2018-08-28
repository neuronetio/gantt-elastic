export function Main(prefix, self) {
  return self.wrapComponent({
    template : `
    <div class="elastigantt__main">
      <${prefix}-header></${prefix}-header>
      <div class="elastigantt__container">
        <div class="elastigantt__task-list-container">
          <svg ref="svgTaskList" class="elastigantt__task-list-svg" xmlns="http://www.w3.org/2000/svg"
            :width="$root.$data.taskList.finalWidth+'px'"
            :height="$root.$data.height"
            v-if="$root.$data.taskList.display"
          >
            <defs v-html="defs"></defs>
            <${prefix}-task-list></${prefix}-task-list>
          </svg>
        </div>
        <div class="elastigantt__main-svg-container">
          <svg ref="svgElement" class="elastigantt__main-container" xmlns="http://www.w3.org/2000/svg"
            :width="getWidth"
            :height="$root.$data.height">
            <defs v-html="defs"></defs>
            <${prefix}-tree></${prefix}-tree>
          </svg>
        </div>
      </div>
    </div>`,
    data() {
      return {
        defs : '',
      };
    },
    created() {
      let css = '';
      try {
        for (let i = 0, len = document.styleSheets.length; i < len; i++) {
          let styleSheet = document.styleSheets[i];
          if (styleSheet.title === 'elastigantt__style') {
            for (let r = 0, rules = styleSheet.rules.length; r < rules; r++) {
              let rule = styleSheet.rules[r];
              css += rule.cssText + "\n";
            }
            break;
          }
        }
        // css       = "<![CDATA[\n" + css + "]]>";
        this.defs = `<style type="text/css">${css}</style>`;
        this.$root.$data.defs.push(this.defs);
      } catch (e) { console.log("Cannot add stylesheet to SVG."); }
      // this.$root.$data.defs.forEach((def) => { this.defs += def; });
    },
    mounted() { this.$root.svgElement = this.$refs.svgElement; },
    computed : {
      getWidth() { return this.$root.$data.width; },
      getMainStyle() {
        const state = this.$root.$data;
        return {width : state.width + 'px'};
      }
    }
  })
}
