<template>
  <div class="gantt-elastic__main-view">
    <div
      class="gantt-elastic__svg-container-wrapper"
      :style="root.style('svg-container-wrapper',{height:root.state.height+'px'})"
    >
      <svg
        :width="getWidth"
        :height="root.state.height"
        class="gantt-elastic__svg-container"
        :style="root.style('svg-container', {'max-width':'calc(100% - '+root.state.scrollBarHeight+'px)'})"
        ref="svgMainView"
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
                v-show="root.state.taskList.display"
              >
                <defs v-html="defs"></defs>
                <task-list></task-list>
              </svg>
            </div>
            <div
              class="gantt-elastic__main-view-container"
              ref="svgChartContainer"
              @mousedown.stop="chartMouseDown"
              @touchstart.stop.prevent="chartMouseDown"
              @mouseup.stop.prevent="chartMouseUp"
              @touchend.stop.prevent="chartMouseUp"
              @mousemove.stop.prevent="chartMouseMove"
              @touchmove.stop.prevent="chartMouseMove"
              @wheel.prevent="chartWheel"
            >
              <chart></chart>
            </div>
          </div>
        </foreignObject>
      </svg>
      <div
        class="gantt-elastic__chart-scroll-container gantt-elastic__chart-scroll-container--vertical"
        :style="root.style('chart-scroll-container','chart-scroll-container--vertical',verticalStyle)"
        ref="chartScrollContainerVertical"
        @scroll="onVerticalScroll"
      >
        <div
          class="gantt-elastic__chart-scroll--vertical"
          :style="{width:'1px',height:root.state.allVisibleTasksHeight+'px'}"
        ></div>
      </div>
    </div>
    <div
      class="gantt-elastic__chart-scroll-container gantt-elastic__chart-scroll-container--horizontal"
      :style="root.style('chart-scroll-container','chart-scroll-container--horizontal',{marginLeft:getMarginLeft})"
      @scroll="onHorizontalScroll"
      ref="chartScrollContainerHorizontal"
    >
      <div class="gantt-elastic__chart-scroll--horizontal" :style="{height:'1px', width:root.state.width+'px'}"></div>
    </div>
  </div>
</template>

<script>
import TaskList from "./TaskList/TaskList.vue";
import Chart from "./Chart/Chart.vue";

export default {
  components: {
    TaskList: TaskList,
    Chart: Chart
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
    this.root.state.refs.svgMainView = this.$refs.svgMainView;
    this.root.state.refs.svgChart = this.$refs.svgChart;
    this.root.state.refs.svgChartContainer = this.$refs.svgChartContainer;
    this.root.state.refs.svgTaskList = this.$refs.svgTaskList;
    this.root.state.refs.chartScrollContainerHorizontal = this.$refs.chartScrollContainerHorizontal;
    this.root.state.refs.chartScrollContainerVertical = this.$refs.chartScrollContainerVertical;
    document.addEventListener('mouseup', this.chartMouseUp.bind(this));
    document.addEventListener('mousemove', this.chartMouseMove.bind(this));
    document.addEventListener('touchmove', this.chartMouseMove.bind(this));
    document.addEventListener('touchend', this.chartMouseUp.bind(this));
  },
  computed: {
    getWidth () {
      return this.root.state.width + this.root.state.taskList.finalWidth;
    },
    getMainViewStyle () {
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
      this.root.$emit("main-view-mousemove", event);
    },
    mouseUp (event) {
      this.root.$emit("main-view-mouseup", event);
    },
    onHorizontalScroll (ev) {
      this.root.$emit("chart-scroll-horizontal", ev);
    },
    onVerticalScroll (ev) {
      this.root.$emit("chart-scroll-vertical", ev);
    },
    chartWheel (ev) {
      this.root.$emit("chart-wheel", ev);
    },
    chartMouseDown (ev) {
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
    chartMouseUp (ev) {
      this.moving = false;
    },
    chartMouseMove (ev) {
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
        const horizontal = this.$refs.chartScrollContainerHorizontal;
        const vertical = this.$refs.chartScrollContainerVertical;
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
