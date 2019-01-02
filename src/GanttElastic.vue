<!--
/**
 * @fileoverview GanttElastic component
 * @license MIT
 * @author Rafal Pospiech <neuronet.io@gmail.com>
 * @package GanttElastic
 */
-->
<template>
  <div class="gantt-elastic">
    <slot name="header"></slot>
    <main-view :tasks="tasks" :options="options"></main-view>
    <slot name="footer"></slot>
  </div>
</template>

<script>
import dayjs from "dayjs";
import MainView from "./components/MainView.vue";
import style from "./style.js";

function getOptions (userOptions) {
  return {
    style,
    title: {
      label: "gantt-elastic",
      html: false
    },
    width: 0,
    height: 0,
    rowsHeight: 0,
    allVisibleTasksHeight: 0,
    scroll: {
      dragXMoveMultiplier: 3,
      dragYMoveMultiplier: 2,
      top: 0,
      taskList: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      },
      chart: {
        left: 0,
        right: 0,
        percent: 0,
        timePercent: 0,
        top: 0,
        topTask: 0,
        bottom: 0,
        time: 0,
        timeCenter: 0,
        dateTime: {
          left: "",
          right: ""
        }
      }
    },
    svgElement: null,
    scope: {
      before: 1,
      after: 1
    },
    times: {
      timeScale: 60 * 1000,
      timeZoom: 17,
      timePerPixel: 0,
      fistDate: null,
      firstTime: null, // firstDate getTime()
      lastDate: null,
      lastTime: null, // last date getTime()
      firstTaskDate: null,
      firstTaskTime: 0,
      lastTaskDate: null,
      lastTaskTime: 0,
      totalViewDurationMs: 0,
      totalViewDurationPx: 0,
      stepDuration: "day", // hour, month
      steps: []
    },
    row: {
      height: 24,
      showText: true,
    },
    maxRows: 20,
    chartText: {
      offset: 0,
      xPadding: 10
    },
    dependencyLines: {},
    progress: {
      width: 20,
      height: 6,
      pattern: true,
      bar: false,
    },
    grid: {
      horizontal: {
        gap: 6,
        lines: []
      },
      vertical: {
        lines: []
      },
      timeLine: {}
    },
    taskList: {
      display: true,
      columns: [{
        id: 0,
        label: "ID",
        value: "id",
        width: 40,
      }],
      resizerWidth: 0,
      percent: 100,
      width: 0,
      finalWidth: 0,
      expander: {
        size: 16,
        columnWidth: 24,
        padding: 16,
        margin: 10,
        straight: true
      }
    },
    calendar: {
      hours: [],
      days: [],
      months: [],
      gap: 6,
      height: 0,
      hour: {
        height: 20,
        display: true,
        widths: [],
        maxWidths: {},
        format: {
          long (date) {
            return dayjs(date)
              .locale(userOptions.locale.code)
              .format("HH:mm");
          },
          medium (date) {
            return dayjs(date)
              .locale(userOptions.locale.code)
              .format("HH:mm");
          },
          short (date) {
            return dayjs(date)
              .locale(userOptions.locale.code)
              .format("HH");
          }
        }
      },
      day: {
        height: 20,
        display: true,
        widths: [],
        maxWidths: {},
        format: {
          long (date) {
            return dayjs(date)
              .locale(userOptions.locale.code)
              .format("DD dddd");
          },
          medium (date) {
            return dayjs(date)
              .locale(userOptions.locale.code)
              .format("DD ddd");
          },
          short (date) {
            return dayjs(date)
              .locale(userOptions.locale.code)
              .format("DD");
          }
        }
      },
      month: {
        height: 20,
        display: true,
        widths: [],
        maxWidths: {},
        format: {
          short (date) {
            return dayjs(date)
              .locale(userOptions.locale.code)
              .format("MM");
          },
          medium (date) {
            return dayjs(date)
              .locale(userOptions.locale.code)
              .format("'YY MMM");
          },
          long (date) {
            return dayjs(date)
              .locale(userOptions.locale.code)
              .format("YYYY MMMM (MM)");
          }
        }
      }
    },
    defs: [],
    locale: {
      code: "en",
      Now: "Now",
      "X-Scale": "Zoom-X",
      "Y-Scale": "Zoom-Y",
      "Task list width": "Task list",
      "Before/After": "Expand",
      "Display task list": "Show task list"
    }
  };
}
function isObject (item) {
  return item && typeof item === "object" && !Array.isArray(item);
}
export function mergeDeep (target, ...sources) {
  if (!sources.length) {
    return target;
  }
  const source = sources.shift();
  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key]) Object.assign(target, {
          [key]: {}
        });
        mergeDeep(target[key], source[key]);
      } else {
        Object.assign(target, {
          [key]: source[key]
        });
      }
    }
  }
  return mergeDeep(target, ...sources);
}
export function mergeDeepReactive (component, target, ...sources) {
  if (!sources.length) {
    return target;
  }
  const source = sources.shift();
  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key]) {
          component.$set(target, key, {});
        }
        mergeDeepReactive(component, target[key], source[key]);
      } else {
        component.$set(target, key, source[key]);
      }
    }
  }
  return mergeDeepReactive(component, target, ...sources);
}
const styleCache = {};
let globalVisibleTasks = [];
const GanttElastic = {
  components: {
    MainView
  },
  props: ["tasks", "options"],
  provide () {
    const provider = {};
    const self = this;
    Object.defineProperty(provider, "root", {
      enumerable: true,
      get: () => self
    });
    return provider;
  },
  data () {
    return {
      state: {
        tasks: [],
        scrollBarHeight: 0,
        allVisibleTasksHeight: 0,
        refs: {},
      },
    };
  },
  methods: {
    mergeDeep,
    mergeDeepReactive,
    getScrollBarHeight () {
      const outer = document.createElement("div");
      outer.style.visibility = "hidden";
      outer.style.height = "100px";
      outer.style.msOverflowStyle = "scrollbar";
      document.body.appendChild(outer);
      var noScroll = outer.offsetHeight;
      outer.style.overflow = "scroll";
      var inner = document.createElement("div");
      inner.style.height = "100%";
      outer.appendChild(inner);
      var withScroll = inner.offsetHeight;
      outer.parentNode.removeChild(outer);
      return this.state.scrollBarHeight = noScroll - withScroll;
    },
    /**
     * Get style for specified class
     * @param {object|string} mergeWith - merge multiple styles by className (without gantt-elastic__) or object with props
     * @returns {object}
     */
    style (...mergeWith) {
      const index = JSON.stringify(mergeWith);
      if (typeof styleCache[index] !== 'undefined') {
        return styleCache[index];
      }
      let merged = {};
      mergeWith.forEach(objOrClassName => {
        if (typeof objOrClassName === 'string') {
          merged = Object.assign({}, merged, this.state.style[objOrClassName])
        } else if (typeof objOrClassName === 'object') {
          merged = Object.assign({}, merged, objOrClassName);
        } else if (typeof objOrClassName === 'function') {
          merged = Object.assign({}, objOrClassName())
        }
      });
      styleCache[index] = merged;
      return merged;
    },
    refreshTasks () {
      this.state.tasks = this.state.tasks.map(task => {
        if (typeof task.x === 'undefined') {
          this.$set(task, 'x', 0);
        }
        if (typeof task.y === 'undefined') {
          this.$set(task, 'y', 0);
        }
        if (typeof task.width === 'undefined') {
          this.$set(task, 'width', 0);
        }
        if (typeof task.height === 'undefined') {
          this.$set(task, 'height', 0);
        }
        if (typeof task.tooltip === 'undefined') {
          this.mergeDeepReactive(this, task, { tooltip: { visible: false } });
        }
        if (typeof task.tooltip.visible === 'undefined') {
          task.tooltip.visible = false;
        }
        if (typeof task.mouseOver === 'undefined') {
          this.$set(task, 'mouseOver', false);
        }
        if (typeof task.visible === "undefined") {
          this.$set(task, 'visible', true);
        }
        if (typeof task.collapsed === "undefined") {
          this.$set(task, 'collapsed', false);
        }
        if (typeof task.dependentOn === "undefined") {
          this.$set(task, 'dependentOn', []);
        }
        if (typeof task.parentId === "undefined") {
          this.$set(task, 'parentId', null);
        }
        if (typeof task.style === "undefined") {
          this.$set(task, 'style', {});
        }
        if (typeof task.children === 'undefined') {
          this.$set(task, 'children', []);
        }
        if (typeof task.allChildren === 'undefined') {
          this.$set(task, 'allChildren', []);
        }
        if (typeof task.parents === 'undefined') {
          this.$set(task, 'parents', []);
        }
        if (typeof task.parent === 'undefined') {
          this.$set(task, 'parent', null);
        }
        if (typeof task.durationMs === 'undefined') {
          this.$set(task, 'durationMs', []);
        }
        return task;
      });
    },
    /**
     * Initialize component
     */
    initialize () {
      this.mergeDeepReactive(this, this.state, getOptions(this.options), this.options, { tasks: this.tasks });
      this.state.tasks = this.tasks.map(task => {
        this.$set(task, 'start', dayjs(task.start).format("YYYY-MM-DD HH:mm:ss"));
        return task;
      });
      dayjs.locale(this.options.locale, null, true);
      if (typeof this.state.taskList === "undefined") {
        this.$set(this.state, 'taskList', {});
      }
      if (typeof this.state.taskList.columns === 'undefined') {
        this.$set(this.state.taskList, 'columns', []);
      }
      this.state.taskList.columns = this.state.taskList.columns.map((column, index) => {
        this.$set(column, 'finalWidth', (column.width / 100) * this.state.taskList.percent);
        if (typeof column.height === "undefined") {
          this.$set(column, 'height', 0);
        }
        if (typeof column.style === "undefined") {
          this.$set(column, 'style', {});
        }
        this.$set(column, '_id', `${index}-${column.label}`);
        return column;
      });
      // initialize observer
      this.refreshTasks(true);
      this.state.rootTask = {
        id: null,
        label: "root",
        children: [],
        allChildren: [],
        parents: [],
        parent: null
      };
      this.resetTaskTree();
      this.state.taskTree = this.makeTaskTree(this.state.rootTask);
      this.state.tasks = this.state.taskTree.allChildren;
      this.state.ctx = document.createElement("canvas").getContext("2d");
      this.calculateTaskListColumnsWidths();
      this.state.scrollBarHeight = this.getScrollBarHeight();
      this.state.outerHeight = this.state.height + this.state.scrollBarHeight;
    },
    getCalendarHeight () {
      return this.state.calendar.height + this.style('calendar-row')["stroke-width"] + this.state.calendar.gap;
    },
    calculateCalendarDimensions () {
      this.state.calendar.height = 0;
      if (this.state.calendar.hour.display) {
        this.state.calendar.height += this.state.calendar.hour.height;
      }
      if (this.state.calendar.day.display) {
        this.state.calendar.height += this.state.calendar.day.height;
      }
      if (this.state.calendar.month.display) {
        this.state.calendar.height += this.state.calendar.month.height;
      }
    },
    getMaximalLevel () {
      let maximalLevel = 0;
      this.state.tasks.forEach(task => {
        if (task.parents.length > maximalLevel) {
          maximalLevel = task.parents.length;
        }
      });
      return maximalLevel - 1;
    },
    getMaximalExpanderWidth () {
      return (this.getMaximalLevel() * this.state.taskList.expander.padding + this.state.taskList.expander.margin);
    },
    calculateTaskListColumnsWidths () {
      let final = 0;
      this.state.taskList.columns.forEach(column => {
        if (column.expander) {
          column.finalWidth = ((this.getMaximalExpanderWidth() + column.width) / 100) * this.state.taskList.percent;
        } else {
          column.finalWidth = (column.width / 100) * this.state.taskList.percent;
        }
        final += column.finalWidth;
        column.height = this.state.row.height + this.state.grid.horizontal.gap * 2 - this.state.grid.horizontal.strokeWidth;
      });
      this.state.taskList.finalWidth = final;
      if (typeof document !== 'undefined') {
        if (final > document.body.clientWidth / 2) {
          this.state.taskList.display = false;
        }
      }
    },
    resetTaskTree () {
      this.state.rootTask.children = [];
      this.state.rootTask.allChildren = [];
      this.state.rootTask.parent = null;
      this.state.rootTask.parents = [];
      for (let i = 0, len = this.state.tasks.length; i < len; i++) {
        let current = this.state.tasks[i];
        current.children = [];
        current.allChildren = [];
        current.parent = null;
        current.parents = [];
      }
    },
    makeTaskTree (task) {
      for (let i = 0, len = this.state.tasks.length; i < len; i++) {
        let current = this.state.tasks[i];
        if (current.parentId === task.id) {
          if (task.parents.length) {
            task.parents.forEach(parent => current.parents.push(parent));
          }
          if (task !== this.root) {
            current.parents.push(task);
            current.parent = task;
          } else {
            current.parents = [];
            current.parent = null;
          }
          current = this.makeTaskTree(current);
          task.allChildren.push(current);
          task.children.push(current);
          current.allChildren.forEach(child => task.allChildren.push(child));
        }
      }
      return task;
    },
    getTask (taskId) {
      return this.tasksById[taskId];
    },
    getChildren (taskId) {
      return this.state.tasks.filter(task => task.parent === taskId);
    },
    getSVG () {
      return this.state.svgMainView.outerHTML;
    },
    getImage (type = "image/png") {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement("canvas");
          canvas.width = this.state.svgMainView.clientWidth;
          canvas.height = this.state.svgMainView.clientHeight;
          canvas.getContext("2d").drawImage(img, 0, 0);
          resolve(canvas.toDataURL(type));
        };
        img.src = "data:image/svg+xml," + encodeURIComponent(this.getSVG());
      });
    },
    getHeight (visibleTasks, outer = false) {
      let height = visibleTasks.length * (this.state.row.height + this.state.grid.horizontal.gap * 2) + this.state.calendar.height + this.style('calendar-row')["stroke-width"] * 2 + this.state.calendar.gap;
      if (outer) {
        height += this.state.scrollBarHeight;
      }
      return height;
    },
    getTasksHeight (visibleTasks, outer = false) {
      return visibleTasks.length * (this.state.row.height + this.state.grid.horizontal.gap * 2);
    },
    timeToPixelOffsetX (ms) {
      let x = ms - this.state.times.firstTime;
      if (x) {
        x = x / this.state.times.timePerPixel;
      }
      return x;
    },
    pixelOffsetXToTime (pixelOffsetX) {
      let offset = pixelOffsetX + this.style('grid-line-vertical').strokeWidth / 2;
      return (offset * this.state.times.timePerPixel + this.state.times.firstTime);
    },
    isInsideViewPort (x, width, buffer = 5000) {
      return ((x + width + buffer >= this.state.scroll.chart.left && x - buffer <= this.state.scroll.chart.right) || (x - buffer <= this.state.scroll.chart.left && x + width + buffer >= this.state.scroll.chart.right));
    },
    onScrollChart (ev) {
      const horizontal = this.state.refs.chartScrollContainerHorizontal;
      const vertical = this.state.refs.chartScrollContainerVertical;
      this._onScrollChart(horizontal.scrollLeft, vertical.scrollTop);
    },
    _onScrollChart (left, top) {
      const chartContainerWidth = this.state.refs.svgChartContainer.clientWidth;
      this.state.scroll.chart.left = left;
      this.state.scroll.chart.right = left + chartContainerWidth;
      this.state.scroll.chart.percent = (left / this.state.times.totalViewDurationPx) * 100;
      this.state.scroll.chart.top = top;
      this.state.scroll.chart.topTask = Math.floor(top / (this.state.row.height + this.state.grid.horizontal.gap * 2));
      this.state.scroll.chart.time = this.pixelOffsetXToTime(left);
      this.state.scroll.chart.timeCenter = this.pixelOffsetXToTime(left + chartContainerWidth / 2);
      this.state.scroll.chart.dateTime.left = dayjs(this.state.scroll.chart.time);
      this.state.scroll.chart.dateTime.right = dayjs(this.pixelOffsetXToTime(left + this.state.refs.chart.clientWidth));
      this.scrollTo(left, top);
    },
    scrollToTime (time) {
      let pos = this.timeToPixelOffsetX(time);
      const chartContainerWidth = this.state.refs.svgChartContainer.clientWidth;
      pos = pos - chartContainerWidth / 2;
      if (pos > this.state.width) {
        pos = this.state.width - chartContainerWidth;
      }
      this.scrollTo(pos);
    },
    scrollTo (left = null, top = null) {
      if (left !== null) {
        this.state.refs.svgChartContainer.scrollLeft = left;
        this.state.refs.chartScrollContainerHorizontal.scrollLeft = left;
        this.state.scroll.left = left;
      }
      if (top !== null) {
        this.state.refs.chartScrollContainerVertical.scrollTop = top;
        this.state.refs.taskListItems.scrollTop = top;
        this.state.refs.chartGraph.scrollTop = top;
        this.state.scroll.top = top;
      }
    },
    fixScrollPos () {
      this.$nextTick(() => {
        this.scrollToTime(this.state.scroll.chart.timeCenter);
      });
    },
    onWheelChart (ev) {
      if (!ev.shiftKey) {
        let top = this.state.scroll.top + ev.deltaY;
        const chartClientHeight = this.state.refs.chartGraph.clientHeight;
        const scrollHeight = this.state.refs.chartGraph.scrollHeight - chartClientHeight;
        if (top < 0) {
          top = 0;
        } else if (top > scrollHeight) {
          top = scrollHeight;
        }
        this.scrollTo(null, top);
      } else {
        let left = this.state.scroll.left + ev.deltaY;
        const chartClientWidth = this.state.refs.chartScrollContainerHorizontal.clientWidth;
        const scrollWidth = this.state.refs.chartScrollContainerHorizontal.scrollWidth - chartClientWidth;
        if (left < 0) {
          left = 0;
        } else if (left > scrollWidth) {
          left = scrollWidth;
        }
        this.scrollTo(left);
      }
    },
    onTimeZoomChange (timeZoom) {
      this.state.times.timeZoom = timeZoom;
      this.recalculateTimes();
      this.calculateSteps();
      this.calculateCalendarDimensions();
      this.fixScrollPos();
    },
    onRowHeightChange (height) {
      this.state.row.height = height;
      this.calculateTaskListColumnsWidths();
    },
    onScopeChange (value) {
      this.state.scope.before = value;
      this.state.scope.after = value;
      this.initTimes();
      this.calculateSteps();
      this.computeCalendarWidths();
      this.fixScrollPos();
    },
    onTaskListWidthChange (value) {
      this.state.taskList.percent = value;
      this.calculateTaskListColumnsWidths();
      this.fixScrollPos();
    },
    onTaskListColumnWidthChange (value) {
      this.calculateTaskListColumnsWidths();
      this.fixScrollPos();
    },
    initializeEvents () {
      this.$on("chart-scroll-horizontal", this.onScrollChart);
      this.$on("chart-scroll-vertical", this.onScrollChart);
      this.$on("chart-wheel", this.onWheelChart);
      this.$on("times-timeZoom-change", this.onTimeZoomChange);
      this.$on("row-height-change", this.onRowHeightChange);
      this.$on("scope-change", this.onScopeChange);
      this.$on("taskList-width-change", this.onTaskListWidthChange);
      this.$on("taskList-column-width-change", this.onTaskListColumnWidthChange);
    },
    recalculateTimes () {
      let max = this.state.times.timeScale * 60;
      let min = this.state.times.timeScale;
      let steps = max / min;
      let percent = this.state.times.timeZoom / 100;
      this.state.times.timePerPixel = this.state.times.timeScale * steps * percent + Math.pow(2, this.state.times.timeZoom);
      this.state.times.totalViewDurationMs = this.state.times.lastDate.diff(this.state.times.firstDate, "milisecods");
      this.state.times.totalViewDurationPx = this.state.times.totalViewDurationMs / this.state.times.timePerPixel;
      this.state.width = this.state.times.totalViewDurationPx + this.style('grid-line-vertical').strokeWidth;
    },
    initTimes () {
      this.state.times.firstDate = dayjs(this.state.times.firstTaskDate)
        .locale(this.locale)
        .startOf("day")
        .subtract(this.state.scope.before, "days")
        .startOf("day");
      this.state.times.lastDate = dayjs(this.state.times.lastTaskDate)
        .locale(this.locale)
        .endOf("day")
        .add(this.state.scope.after, "days")
        .endOf("day");
      this.state.times.firstTime = this.state.times.firstDate.valueOf();
      this.state.times.lastTime = this.state.times.lastDate.valueOf();
      this.recalculateTimes();
    },
    calculateSteps () {
      const steps = [];
      const lastMs = dayjs(this.state.times.lastDate).valueOf();
      const currentDate = dayjs(this.state.times.firstDate);
      steps.push({
        date: currentDate,
        offset: {
          ms: 0,
          px: 0
        }
      });
      for (let currentDate = dayjs(this.state.times.firstDate).add(1, this.state.times.stepDuration).startOf("day");
        currentDate.valueOf() <= lastMs;
        currentDate = currentDate.add(1, this.state.times.stepDuration).startOf("day")) {
        const offsetMs = currentDate.diff(this.state.times.firstDate, "milisecods");
        const offsetPx = offsetMs / this.state.times.timePerPixel;
        const step = {
          date: currentDate,
          offset: {
            ms: offsetMs,
            px: offsetPx
          }
        };
        const previousStep = steps[steps.length - 1];
        previousStep.width = {
          ms: offsetMs - previousStep.offset.ms,
          px: offsetPx - previousStep.offset.px
        };
        steps.push(step);
      }
      const lastStep = steps[steps.length - 1];
      lastStep.width = {
        ms: this.state.times.totalViewDurationMs - lastStep.offset.ms,
        px: this.state.times.totalViewDurationPx - lastStep.offset.px
      };
      this.state.times.steps = steps;
    },
    computeCalendarWidths () {
      this.computeDayWidths();
      this.computeHourWidths();
      this.computeMonthWidths();
    },
    computeHourWidths () {
      const state = this.state;
      state.ctx.font = state.calendar.hour.fontSize + " " + state.calendar.fontFamily;
      let currentDate = dayjs("2018-01-01T00:00:00"); // any date will be good for hours
      let maxWidths = {};
      Object.keys(state.calendar.hour.format).forEach(formatName => {
        maxWidths[formatName] = 0;
      });
      for (let hour = 0; hour < 24; hour++) {
        const widths = {
          hour
        };
        Object.keys(state.calendar.hour.format)
          .forEach(formatName => {
            widths[formatName] = state.ctx.measureText(state.calendar.hour.format[formatName](currentDate.toDate())).width;
          });
        state.calendar.hour.widths.push(widths);
        Object.keys(state.calendar.hour.format)
          .forEach(formatName => {
            if (widths[formatName] > maxWidths[formatName]) {
              maxWidths[formatName] = widths[formatName];
            }
          });
        currentDate = currentDate.add(1, "hour");
      }
      state.calendar.hour.maxWidths = maxWidths;
    },
    computeDayWidths () {
      const state = this.state;
      state.ctx.font = state.calendar.day.fontSize + " " + state.calendar.fontFamily;
      let currentDate = dayjs(state.times.steps[0].date);
      let maxWidths = {};
      Object.keys(state.calendar.day.format)
        .forEach(formatName => {
          maxWidths[formatName] = 0;
        });
      for (let day = 0, daysLen = state.times.steps.length; day < daysLen; day++) {
        const widths = {
          day
        };
        Object.keys(state.calendar.day.format)
          .forEach(formatName => {
            widths[formatName] = state.ctx.measureText(state.calendar.day.format[formatName](currentDate.toDate())).width;
          });
        state.calendar.day.widths.push(widths);
        Object.keys(state.calendar.day.format)
          .forEach(formatName => {
            if (widths[formatName] > maxWidths[formatName]) {
              maxWidths[formatName] = widths[formatName];
            }
          });
        currentDate = currentDate.add(1, "day");
      }
      state.calendar.day.maxWidths = maxWidths;
    },
    computeMonthWidths () {
      const state = this.state;
      state.ctx.font = state.calendar.day.fontSize + " " + state.calendar.fontFamily;
      let maxWidths = {};
      Object.keys(state.calendar.month.format).forEach(formatName => {
        maxWidths[formatName] = 0;
      });
      let currentDate = dayjs(this.state.times.firstDate);
      const monthsCount = Math.ceil(this.state.times.lastDate.diff(this.state.times.firstDate, "months", true));
      for (let month = 0; month < monthsCount; month++) {
        const widths = {
          month
        };
        Object.keys(state.calendar.month.format)
          .forEach(formatName => {
            widths[formatName] = state.ctx.measureText(state.calendar.month.format[formatName](currentDate.toDate())).width;
          });
        state.calendar.month.widths.push(widths);
        Object.keys(state.calendar.month.format).forEach(formatName => {
          if (widths[formatName] > maxWidths[formatName]) {
            maxWidths[formatName] = widths[formatName];
          }
        });
        currentDate = currentDate.add(1, "month");
      }
      state.calendar.month.maxWidths = maxWidths;
    },
    prepareDates () {
      let firstTaskTime = Number.MAX_SAFE_INTEGER;
      let lastTaskTime = 0;
      let firstTaskDate, lastTaskDate;
      for (let index = 0, len = this.state.tasks.length; index < len; index++) {
        let task = this.state.tasks[index];
        task.startDate = dayjs(task.start);
        task.startTime = task.startDate.valueOf();
        task.durationMs = task.duration * 1000;
        if (task.startTime < firstTaskTime) {
          firstTaskTime = task.startTime;
          firstTaskDate = task.startDate;
        }
        if (task.startTime + task.durationMs > lastTaskTime) {
          lastTaskTime = task.startTime + task.durationMs;
          lastTaskDate = dayjs(task.startTime + task.durationMs);
        }
      }
      this.state.times.firstTaskTime = firstTaskTime;
      this.state.times.lastTaskTime = lastTaskTime;
      this.state.times.firstTaskDate = firstTaskDate;
      this.state.times.lastTaskDate = lastTaskDate;
      this.state.times.firstDate = dayjs(firstTaskDate)
        .locale(this.locale)
        .startOf("day")
        .subtract(this.state.scope.before, "days")
        .startOf("day");
      this.state.times.lastDate = dayjs(lastTaskDate)
        .locale(this.locale)
        .endOf("day")
        .add(this.state.scope.after, "days")
        .endOf("day");
    },
    setup () {
      this.initialize();
      this.tasksById = {};
      this.state.tasks.forEach(task => (this.tasksById[task.id] = task));
      this.prepareDates();
      this.initTimes();
      this.calculateSteps();
      this.computeCalendarWidths();
      this.calculateCalendarDimensions();
      this.state.taskList.width = this.state.taskList.columns.reduce((prev, current) => {
        return { width: prev.width + current.width };
      }, { width: 0 }).width;
    },

  },
  computed: {
    visibleTasks () {
      const visibleTasks = this.state.tasks.filter(task => task.visible);
      const maxRows = visibleTasks.slice(0, this.state.maxRows);
      this.state.height = this.getHeight(maxRows);
      this.state.allVisibleTasksHeight = this.getTasksHeight(visibleTasks);
      this.state.rowsHeight = this.getTasksHeight(maxRows);
      this.state.outerHeight = this.getHeight(maxRows, true);
      let len = visibleTasks.length;
      for (let index = 0; index < len; index++) {
        let task = visibleTasks[index];
        task.width = task.durationMs / this.state.times.timePerPixel - this.style('grid-line-vertical').strokeWidth;
        if (task.width < 0) {
          task.width = 0;
        }
        task.height = this.state.row.height;
        task.x = this.timeToPixelOffsetX(task.startTime);
        task.y = (this.state.row.height + this.state.grid.horizontal.gap * 2) * index + this.state.grid.horizontal.gap;
      }
      return visibleTasks;
    },
  },
  created () {
    let previousTasks = [];
    this.$watch('state.tasks', function (newTasks, oldTasks) {
      let refresh = previousTasks.length !== newTasks.length;
      if (!refresh) {
        for (let i = 0, len = newTasks.length; i < len; i++) {
          if (typeof newTasks[i].parents === 'undefined') {
            refresh = true;
            break;
          }
        }
      }
      if (refresh) {
        this.refreshTasks();
        this.prepareDates();
        this.initTimes();
        this.state.tasks.forEach(task => (this.tasksById[task.id] = task));
        this.resetTaskTree();
        this.state.taskTree = this.makeTaskTree(this.state.rootTask);
        this.state.tasks = this.state.taskTree.allChildren;
      }
      previousTasks = newTasks.slice();
    }, { immediate: true, deep: false });
    this.initializeEvents();
    this.setup();
    this.$root.$emit('gantt-elastic-created', this);
  },
  mounted () {
    this.$root.$emit('gantt-elastic-mounted', this);
    this.$root.$emit('gantt-elastic-ready', this);
  }
};
export default GanttElastic;
</script>

<style>
@import "styles/ganttElastic.css";
</style>
