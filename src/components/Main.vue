<template>
<div class="elastigantt__main">
  <main-header></main-header>
  <div class="elastigantt__container" @mousemove="mouseMove" @mouseup="mouseUp">
    <div class="elastigantt__task-list-container">
      <svg ref="svgTaskList" class="elastigantt__task-list-svg" xmlns="http://www.w3.org/2000/svg"
          :width="root.state.taskList.finalWidth+'px'"
          :height="root.state.height"
          v-if="root.state.taskList.display">
        <defs v-html="defs"></defs>
        <task-list></task-list>
      </svg>
    </div>
    <div class="elastigantt__main-svg-container">
      <svg ref="svgElement" class="elastigantt__main-container" xmlns="http://www.w3.org/2000/svg"
          :width="getWidth"
          :height="root.state.height">
        <defs v-html="defs"></defs>
        <tree></tree>
      </svg>
    </div>
  </div>
</div>
</template>

<script>
import Header from './Header.vue';
import TaskList from './TaskList/TaskList.vue';
import Tree from './Tree/Tree.vue';

export default {
  components: {
    'main-header': Header,
    'task-list': TaskList,
    'tree': Tree
  },
  inject: ['root'],
  data() {
    return {
      defs: ''
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
      this.root.state.defs.push(this.defs);
    } catch (e) {
      console.log("Cannot add stylesheet to SVG. You must run this app from server.");
    }
    // this.root.state.defs.forEach((def) => { this.defs += def; });
  },
  mounted() {
    this.root.svgElement = this.$refs.svgElement;
  },
  computed: {
    getWidth() {
      return this.root.state.width;
    },
    getMainStyle() {
      const state = this.root.state;
      return {
        width: root.state.width + 'px'
      };
    }
  },
  methods: {
    mouseMove(event) {
      this.root.$emit('mousemove', event);
    },
    mouseUp(event) {
      this.root.$emit('mouseup', event);
    }
  }
}
</script>
