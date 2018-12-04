<template>
  <div class="gantt-elastic__main">
    <top-header></top-header>
    <div
      class="gantt-elastic__svg-container-wrapper"
      :style="root.style('svg-container-wrapper',{height:root.state.height+'px'})"
    >
      <svg
        :width="getWidth"
        :height="root.state.height"
        class="gantt-elastic__svg-container"
        :style="root.style('svg-container', {'max-width':'calc(100% - '+root.state.scrollBarHeight+'px)'})"
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
              @wheel.prevent="treeWheel"
            >
              <tree></tree>
            </div>
          </div>
        </foreignObject>
      </svg>
      <div
        class="gantt-elastic__tree-scroll-container gantt-elastic__tree-scroll-container--vertical"
        :style="root.style('tree-scroll-container','tree-scroll-container--vertical',verticalStyle)"
        ref="treeScrollContainerVertical"
        @scroll="onVerticalScroll"
      >
        <div
          class="gantt-elastic__tree-scroll--vertical"
          :style="{width:'1px',height:root.state.allVisibleTasksHeight+'px'}"
        ></div>
      </div>
    </div>
    <div
      class="gantt-elastic__tree-scroll-container gantt-elastic__tree-scroll-container--horizontal"
      :style="root.style('tree-scroll-container','tree-scroll-container--horizontal',{marginLeft:getMarginLeft})"
      @scroll="onHorizontalScroll"
      ref="treeScrollContainerHorizontal"
    >
      <div class="gantt-elastic__tree-scroll--horizontal" :style="{height:'1px', width:root.state.width+'px'}"></div>
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
    this.root.state.refs.svgMain = this.$refs.svgMain;
    this.root.state.refs.svgTree = this.$refs.svgTree;
    this.root.state.refs.svgTreeContainer = this.$refs.svgTreeContainer;
    this.root.state.refs.svgTaskList = this.$refs.svgTaskList;
    this.root.state.refs.treeScrollContainerHorizontal = this.$refs.treeScrollContainerHorizontal;
    this.root.state.refs.treeScrollContainerVertical = this.$refs.treeScrollContainerVertical;
    document.addEventListener('mouseup', this.treeMouseUp.bind(this));
    document.addEventListener('mousemove', this.treeMouseMove.bind(this));
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
    },
    verticalStyle () {
      return {
        width: this.root.state.scrollBarHeight + 'px',
        height: this.root.state.rowsHeight + 'px',
        "margin-top": (this.root.state.calendar.height + this.root.state.calendar.gap) + 'px'
      };
    }
  },
  methods: {
    mouseMove (event) {
      this.root.$emit("gantt-elastic.main.mousemove", event);
    },
    mouseUp (event) {
      this.root.$emit("gantt-elastic.main.mouseup", event);
    },
    onHorizontalScroll (ev) {
      this.root.$emit("gantt-elastic.tree.scroll.horizontal", ev);
    },
    onVerticalScroll (ev) {
      this.root.$emit("gantt-elastic.tree.scroll.vertical", ev);
    },
    treeWheel (ev) {
      this.root.$emit("gantt-elastic.tree.wheel", ev);
    },
    treeMouseDown (ev) {
      this.moving = true;
    },
    treeMouseUp (ev) {
      this.moving = false;
    },
    treeMouseMove (ev) {
      if (this.moving) {
        const horizontal = this.$refs.treeScrollContainerHorizontal;
        const vertical = this.$refs.treeScrollContainerVertical;
        const currentX = horizontal.scrollLeft;
        const x = currentX - (ev.movementX * this.root.state.scroll.dragXMoveMultiplier);
        horizontal.scrollLeft = x;
        const currentY = vertical.scrollTop;
        const y = currentY - (ev.movementY * this.root.state.scroll.dragYMoveMultiplier);
        vertical.scrollTop = y;
      }
    }
  }
};
</script>
