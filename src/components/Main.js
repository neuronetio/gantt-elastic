export function Main(prefix, self) {
  return self.wrapComponent({
    template : `
    <div class="elastigantt__main">
      <${prefix}-header></${prefix}-header>
      <div class="elastigantt__container">
        <svg ref="svgTaskList" class="elastigantt__task-list-container" xmlns="http://www.w3.org/2000/svg"
          :width="$root.$data.taskList.width+'%'"
          :height="$root.$data.height"
        >
          <defs v-html="defs"></defs>
          <${prefix}-task-list></${prefix}-task-list>
        </svg>
        <div class="elastigantt__main-svg-container" :style="getMainStyle">
          <svg ref="svgElement" class="elastigantt__main-container" xmlns="http://www.w3.org/2000/svg"
            :width="$root.$data.width"
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
        css       = "<![CDATA[\n" + css + "]]>";
        this.defs = `<style type="text/css">${css}</style>`;
      } catch (e) {
        console.log("Cannot add stylesheet to SVG.");
      }
      this.$root.$data.defs.forEach((def) => {
        this.defs += def;
      });
    },
    mounted() {
      this.$root.svgElement = this.$refs.svgElement;
    },
    computed : {
      getMainStyle() {
        const state = this.$root.$data;
        return {width : (100 - state.taskList.width) + '%'};
      }
    }
  })
}
