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
              @touchstart.stop.prevent="treeMouseDown"
              @mouseup.stop.prevent="treeMouseUp"
              @touchend.stop.prevent="treeMouseUp"
              @mousemove.stop.prevent="treeMouseMove"
              @touchmove.stop.prevent="treeMouseMove"
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
        y: 0,
        movementX: 0,
        movementY: 0,
        lastX: 0,
        lastY: 0,
        positiveX: 0,
        positiveY: 0,
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
    document.addEventListener('touchmove', this.treeMouseMove.bind(this));
    document.addEventListener('touchend', this.treeMouseUp.bind(this));
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
      this.root.$emit("main-mousemove", event);
    },
    mouseUp (event) {
      this.root.$emit("main-mouseup", event);
    },
    onHorizontalScroll (ev) {
      this.root.$emit("chart-scroll-horizontal", ev);
    },
    onVerticalScroll (ev) {
      this.root.$emit("chart-scroll-vertical", ev);
    },
    treeWheel (ev) {
      this.root.$emit("chart-wheel", ev);
    },
    treeMouseDown (ev) {
      if (typeof ev.touches !== 'undefined') {
        this.mousePos.x = this.mousePos.lastX = ev.touches[0].screenX;
        this.mousePos.y = this.mousePos.lastY = ev.touches[0].screenY;
        this.mousePos.positiveX = 0;
        this.mousePos.positiveY = 0;
        this.mousePos.movementX = 0;
        this.mousePos.movementY = 0;
      }
      this.moving = true;
    },
    treeMouseUp (ev) {
      this.moving = false;
    },
    treeMouseMove (ev) {
      if (this.moving) {
        ev.preventDefault();
        ev.stopImmediatePropagation();
        ev.stopPropagation();
        const touch = typeof ev.touches !== 'undefined';
        let movementX, movementY;
        if (touch) {
          const screenX = ev.touches[0].screenX;
          const screenY = ev.touches[0].screenY;
          movementX = this.mousePos.x - screenX;
          movementY = this.mousePos.y - screenY;
          let positiveX = screenX - this.mousePos.lastX > 0 ? 1 : -1;
          let positiveY = screenY - this.mousePos.lastY > 0 ? 1 : -1;
          this.mousePos.lastX = screenX;
          this.mousePos.lastY = screenY;
          if (positiveX !== this.mousePos.positiveX) {
            this.mousePos.x = screenX;
            this.mousePos.positiveX = positiveX;
            movementX = 0;
          }
          if (positiveY !== this.mousePos.positiveY) {
            this.mousePos.y = screenY;
            this.mousePos.positiveY = positiveY;
            movementY = 0;
          }
        } else {
          movementX = ev.movementX;
          movementY = ev.movementY;
        }
        const horizontal = this.$refs.treeScrollContainerHorizontal;
        const vertical = this.$refs.treeScrollContainerVertical;
        const currentX = horizontal.scrollLeft;
        let x = 0, y = 0;
        if (touch) {
          x = currentX + movementX;
        } else {
          x = currentX - (movementX * this.root.state.scroll.dragXMoveMultiplier);
        }
        horizontal.scrollLeft = x;
        const currentY = vertical.scrollTop;
        if (touch) {
          y = currentY + movementY;
        } else {
          y = currentY - (movementY * this.root.state.scroll.dragYMoveMultiplier);
        }
        vertical.scrollTop = y;
      }
    }
  }
};
</script>
