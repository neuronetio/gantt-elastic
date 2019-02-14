<!--
/**
 * @fileoverview MainView component
 * @license MIT
 * @author Rafal Pospiech <neuronet.io@gmail.com>
 * @package GanttElastic
 */
-->
<template>
  <div class="gantt-elastic__main-view" :style="root.style('main-view')">
    <div
      class="gantt-elastic__svg-container-wrapper"
      :style="root.style('svg-container-wrapper',{height:root.state.height+'px'})"
    >
      <svg
        :width="getWidth"
        :height="root.state.height"
        class="gantt-elastic__svg-container"
        :style="root.style('svg-container')"
        ref="svgMainView"
        xmlns="http://www.w3.org/2000/svg"
      >
        <foreignObject x="0" y="0" width="100%" height="100%">
          <div
            xmlns="http://www.w3.org/1999/xhtml"
            class="gantt-elastic__container"
            :style="root.style('container')"
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
              @mousedown="chartMouseDown"
              @touchstart="chartMouseDown"
              @mouseup="chartMouseUp"
              @touchend="chartMouseUp"
              @mousemove.prevent="chartMouseMove"
              @touchmove.prevent="chartMouseMove"
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
    TaskList,
    Chart
  },
  inject: ["root"],
  props: ["tasks", "options"],
  data () {
    return {
      defs: "",
      mousePos: {
        x: 0,
        y: 0,
        movementX: 0,
        movementY: 0,
        lastX: 0,
        lastY: 0,
        positiveX: 0,
        positiveY: 0,
        currentX: 0,
        currentY: 0,
      }
    };
  },
  /**
   * Mounted
   */
  mounted () {
    this.viewBoxWidth = this.$el.clientWidth;
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

    /**
     * Get width
     *
     * @returns {number}
     */
    getWidth () {
      return this.root.state.clientWidth ? this.root.state.clientWidth - this.root.state.scrollBarHeight : 0;
    },

    /**
     * Get margin left
     *
     * @returns {string}
     */
    getMarginLeft () {
      if (!this.root.state.taskList.display) {
        return "0px";
      }
      return this.root.state.taskList.finalWidth + "px";
    },

    /**
     * Get vertical style
     *
     * @returns {object}
     */
    verticalStyle () {
      return {
        width: this.root.state.scrollBarHeight + 'px',
        height: this.root.state.rowsHeight + 'px',
        "margin-top": (this.root.state.calendar.height + this.root.state.calendar.gap) + 'px'
      };
    },

    /**
    * Get view box
    *
    * @returns {string}
    */
    getViewBox () {
      if (this.root.state.clientWidth) {
        return `0 0 ${this.root.state.clientWidth - this.root.state.scrollBarHeight} ${this.root.state.height}`;
      }
      return `0 0 0 ${this.root.state.height}`;
    }
  },
  methods: {
    /**
     * Emit event when mouse is moving inside main view
     */
    mouseMove (event) {
      this.root.$emit("main-view-mousemove", event);
    },

    /**
     * Emit mouseup event inside main view
     */
    mouseUp (event) {
      this.root.$emit("main-view-mouseup", event);
    },

    /**
     * Horizontal scroll event handler
     */
    onHorizontalScroll (ev) {
      this.root.$emit("chart-scroll-horizontal", ev);
    },

    /**
     * Vertical scroll event handler
     */
    onVerticalScroll (ev) {
      this.root.$emit("chart-scroll-vertical", ev);
    },

    /**
     * Mouse wheel event handler
     */
    chartWheel (ev) {
      this.root.$emit("chart-wheel", ev);
    },

    /**
     * Chart mousedown event handler
     * Initiates drag scrolling mode
     */
    chartMouseDown (ev) {
      if (typeof ev.touches !== 'undefined') {
        this.mousePos.x = this.mousePos.lastX = ev.touches[0].screenX;
        this.mousePos.y = this.mousePos.lastY = ev.touches[0].screenY;
        this.mousePos.movementX = 0;
        this.mousePos.movementY = 0;
        this.mousePos.currentX = this.$refs.chartScrollContainerHorizontal.scrollLeft;
        this.mousePos.currentY = this.$refs.chartScrollContainerVertical.scrollTop;
      }
      this.root.state.scroll.scrolling = true;
    },

    /**
     * Chart mouseup event handler
     * Deactivates drag scrolling mode
     */
    chartMouseUp (ev) {
      this.root.state.scroll.scrolling = false;
    },

    /**
     * Chart mousemove event handler
     * When in drag scrolling mode this method calculate scroll movement
     */
    chartMouseMove (ev) {
      if (this.root.state.scroll.scrolling) {
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
          this.mousePos.lastX = screenX;
          this.mousePos.lastY = screenY;
        } else {
          movementX = ev.movementX;
          movementY = ev.movementY;
        }
        const horizontal = this.$refs.chartScrollContainerHorizontal;
        const vertical = this.$refs.chartScrollContainerVertical;
        let x = 0, y = 0;
        if (touch) {
          x = this.mousePos.currentX + (movementX * this.root.state.scroll.dragXMoveMultiplier);
        } else {
          x = horizontal.scrollLeft - (movementX * this.root.state.scroll.dragXMoveMultiplier);
        }
        horizontal.scrollLeft = x;
        if (touch) {
          y = this.mousePos.currentY + (movementY * this.root.state.scroll.dragYMoveMultiplier);
        } else {
          y = vertical.scrollTop - (movementY * this.root.state.scroll.dragYMoveMultiplier);
        }
        vertical.scrollTop = y;
      }
    },

  },

  /**
   * Before destroy event - clean up
   */
  beforeDestroy () {
    document.removeEventListener('mouseup', this.chartMouseUp);
    document.removeEventListener('mousemove', this.chartMouseMove);
    document.removeEventListener('touchmove', this.chartMouseMove);
    document.removeEventListener('touchend', this.chartMouseUp);
  }
};
</script>
