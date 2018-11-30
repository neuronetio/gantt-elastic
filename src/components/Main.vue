<template>
  <div class="gantt-elastic__main">
    <top-header></top-header>
    <svg
      :width="getWidth"
      :height="root.state.height"
      class="gantt-elastic__svg-container"
      ref="svgMain"
      xmlns="http://www.w3.org/2000/svg"
    >
      <foreignObject x="0" y="0" width="100%" height="100%">
        <div
          xmlns="http://www.w3.org/1999/xhtml"
          class="gantt-elastic__container"
          @mousemove="mouseMove"
          @mouseup="mouseUp"
        >
          <div class="gantt-elastic__task-list-container">
            <svg
              ref="svgTaskList"
              class="gantt-elastic__task-list-svg"
              xmlns="http://www.w3.org/2000/svg"
              :width="root.state.taskList.finalWidth"
              :height="root.state.height"
              v-if="root.state.taskList.display"
            >
              <defs v-html="defs"></defs>
              <task-list></task-list>
            </svg>
          </div>
          <div
            class="gantt-elastic__main-container"
            ref="svgTreeContainer"
            @mousedown.stop="treeMouseDown"
            @mouseup.stop="treeMouseUp"
            @mousemove.stop="treeMouseMove"
          >
            <svg ref="svgTree" xmlns="http://www.w3.org/2000/svg" :width="root.state.width" :height="root.state.height">
              <defs v-html="defs"></defs>
              <tree></tree>
            </svg>
          </div>
        </div>
      </foreignObject>
    </svg>
    <div
      class="gantt-elastic__tree-scroll-container"
      :style="{marginLeft:getMarginLeft}"
      v-on:scroll="onScroll"
      ref="treeScrollContainer"
    >
      <div class="gantt-elastic__tree-scroll" :style="{height:'1px', width:root.state.width+'px'}"></div>
    </div>
  </div>
</template>

<script>
import Header from "./Header.vue";
import TaskList from "./TaskList/TaskList.vue";
import Tree from "./Tree/Tree.vue";

export default {
  components: {
    TopHeader: Header,
    TaskList: TaskList,
    Tree: Tree
  },
  inject: ["root"],
  props: ["tasks", "options"],
  data () {
    return {
      defs: "",
      moving: false,
      mousePos: {
        x: 0,
        y: 0
      }
    };
  },
  mounted () {
    this.root.state.svgMain = this.$refs.svgMain;
    this.root.state.svgTree = this.$refs.svgTree;
    this.root.state.svgTreeContainer = this.$refs.svgTreeContainer;
    this.root.state.svgTaskList = this.$refs.svgTaskList;
    this.root.state.treeScrollContainer = this.$refs.treeScrollContainer;
  },
  computed: {
    getWidth () {
      return this.root.state.width + this.root.state.taskList.finalWidth;
    },
    getMainStyle () {
      const state = this.root.state;
      return {
        width: state.width + "px"
      };
    },
    getMarginLeft () {
      if (!this.root.state.taskList.display) {
        return "0px";
      }
      return this.root.state.taskList.finalWidth + "px";
    }
  },
  methods: {
    mouseMove (event) {
      this.$root.$emit("gantt-elastic.main.mousemove", event);
    },
    mouseUp (event) {
      this.$root.$emit("gantt-elastic.main.mouseup", event);
    },
    onScroll (ev) {
      this.$root.$emit("gantt-elastic.tree.scroll", ev);
    },
    onWheel (ev) {
      this.$root.$emit("gantt-elastic.tree.wheel", ev);
    },
    treeMouseDown (ev) {
      this.moving = true;
    },
    treeMouseUp (ev) {
      this.moving = false;
    },
    treeMouseMove (ev) {
      if (this.moving) {
        let currentPos = this.root.state.svgTreeContainer.scrollLeft;
        this.root.scrollTo(currentPos - (ev.movementX * this.root.state.scroll.dragMoveMultiplier));
      }
    }
  }
};
</script>
