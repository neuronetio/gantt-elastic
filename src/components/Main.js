export function Main(prefix, self) {
  return self.wrapComponent({
    template: `
    <div class="elastigantt__main">
      <${prefix}-header></${prefix}-header>
      <div class="elastigantt__container">
        <svg ref="svgElement" class="elastigantt__main-svg" xmlns="http://www.w3.org/2000/svg"
          :width="$root.$data.width"
          :height="$root.$data.height">
          <defs v-html="defs"></defs>
          <${prefix}-tree></${prefix}-tree>
        </svg>
      </div>
    </div>`,
    data() {
      return {
        defs:'',
      };
    },
    created(){
      let css = '';
      for(let i=0,len=document.styleSheets.length;i<len;i++){
        let styleSheet = document.styleSheets[i];
        if(styleSheet.title==='elastigantt__style'){
          for(let r=0,rules=styleSheet.rules.length;r<rules;r++){
            let rule = styleSheet.rules[r];
            css+=rule.cssText+"\n";
          }
          break;
        }
      }
      css="<![CDATA[\n"+css+"]]>";
      this.defs = `<style type="text/css">${css}</style>`;
      this.$root.$data.defs.forEach((def)=>{
        this.defs+=def;
      });
    },
    mounted() {
      this.$root.svgElement = this.$refs.svgElement;
    }
  })
}
