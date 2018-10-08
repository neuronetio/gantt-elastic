<template>
<div class="elastigantt__main">
  <main-header></main-header>
  <svg :width="getWidth" :height="root.state.height" class="elastigantt__svg-container" ref="svgMain" xmlns="http://www.w3.org/2000/svg">
    <foreignObject x="0" y="0" width="100%" height="100%">
      <div xmlns="http://www.w3.org/1999/xhtml" class="elastigantt__container" @mousemove="mouseMove" @mouseup="mouseUp">
        <div class="elastigantt__task-list-container">
          <svg ref="svgTaskList" class="elastigantt__task-list-svg" xmlns="http://www.w3.org/2000/svg" :width="root.state.taskList.finalWidth" :height="root.state.height" v-if="root.state.taskList.display">
            <defs v-html="defs"></defs>
            <task-list></task-list>
          </svg>
        </div>
        <div class="elastigantt__main-container" ref="svgTreeContainer">
          <svg ref="svgTree" xmlns="http://www.w3.org/2000/svg" :width="root.state.width" :height="root.state.height">
            <defs v-html="defs"></defs>
            <tree v-on:wheel="onWheel"></tree>
          </svg>
        </div>
      </div>
    </foreignObject>
  </svg>
  <div class="elastigantt__tree-scroll-container" :style="{marginLeft:getMarginLeft}" v-on:scroll="onScroll" ref="treeScrollContainer">
    <div class="elastigantt__tree-scroll" :style="{height:'1px', width:root.state.width+'px'}"></div>
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
  props: ['tasks', 'options'],
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
    this.root.state.svgMain = this.$refs.svgMain;
    this.root.state.svgTree = this.$refs.svgTree;
    this.root.state.svgTreeContainer = this.$refs.svgTreeContainer;
    this.root.state.svgTaskList = this.$refs.svgTaskList;
    this.root.state.treeScrollContainer = this.$refs.treeScrollContainer;
  },
  computed: {
    getWidth() {
      return this.root.state.width + this.root.state.taskList.finalWidth;
    },
    getMainStyle() {
      const state = this.root.state;
      return {
        width: state.width + 'px'
      };
    },
    getMarginLeft() {
      if (!this.root.state.taskList.display) {
        return '0px';
      }
      return this.root.state.taskList.finalWidth + 'px';
    }
  },
  methods: {
    mouseMove(event) {
      this.root.$emit('elastigantt.main.mousemove', event);
    },
    mouseUp(event) {
      this.root.$emit('elastigantt.main.mouseup', event);
    },
    onScroll(ev) {
      this.root.$emit('elastigantt.tree.scroll', ev);
    },
    onWheel(ev) {
      this.root.$emit('elastigantt.tree.wheel', ev);
    }
  }
}
</script>
