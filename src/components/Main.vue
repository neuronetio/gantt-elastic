<template>
<div class="elastigantt__main">
  <main-header></main-header>
  <div class="elastigantt__container" @mousemove="mouseMove" @mouseup="mouseUp">
    <div class="elastigantt__task-list-container">
      <svg ref="svgTaskList" class="elastigantt__task-list-svg" xmlns="http://www.w3.org/2000/svg"
          :width="state.taskList.finalWidth+'px'"
          :height="state.height"
          v-if="state.taskList.display">
        <defs v-html="defs"></defs>
        <task-list></task-list>
      </svg>
    </div>
    <div class="elastigantt__main-svg-container">
      <svg ref="svgElement" class="elastigantt__main-container" xmlns="http://www.w3.org/2000/svg"
          :width="getWidth"
          :height="state.height">
        <defs v-html="defs"></defs>
        <tree></tree>
      </svg>
    </div>
  </div>
</div>
</template>

<script>
export default {
  inject: ['state'],
  data() {
    return {
      defs: ''
    };
  },
  created() {
    console.log(this.state)
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
      this.state.defs.push(this.defs);
    } catch (e) {
      console.log("Cannot add stylesheet to SVG. You must run this app from server.");
    }
    // this.state.defs.forEach((def) => { this.defs += def; });
  },
  mounted() {
    this.$root.svgElement = this.$refs.svgElement;
  },
  computed: {
    getWidth() {
      return this.state.width;
    },
    getMainStyle() {
      const state = this.state;
      return {
        width: state.width + 'px'
      };
    }
  },
  methods: {
    mouseMove(event) {
      this.$root.$emit('mousemove', event);
    },
    mouseUp(event) {
      this.$root.$emit('mouseup', event);
    }
  }
}
</script>
