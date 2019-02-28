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
import Vuex from 'vuex'
import dayjs from 'dayjs'
import MainView from './components/MainView.vue'
import style from './style.js'
Vue.use(Vuex)

/**
 * Helper function to fill out empty options in user settings
 *
 * @param {object} userOptions - initial user options that will merge with those below
 * @returns {object} merged options
 */
function getOptions(userOptions) {
  let localeCode = 'en'
  if (typeof userOptions.locale !== 'undefined' && typeof userOptions.locale.code === 'string') {
    localeCode = userOptions.locale.code
  }
  return {
    style,
    slots: {
      header: {}
    },
    title: {
      label: 'gantt-elastic',
      html: false
    },
    width: 0,
    height: 0,
    clientWidth: 0,
    rowsHeight: 0,
    allVisibleTasksHeight: 0,
    scroll: {
      scrolling: false,
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
        bottom: 0,
        time: 0,
        timeCenter: 0,
        dateTime: {
          left: '',
          right: ''
        }
      }
    },
    scope: {
      before: 1,
      after: 1
    },
    times: {
      timeScale: 60 * 1000,
      timeZoom: 17,
      timePerPixel: 0,
      firstTime: 0,
      lastTime: 0,
      firstTaskTime: 0,
      lastTaskTime: 0,
      totalViewDurationMs: 0,
      totalViewDurationPx: 0,
      stepDuration: 'day', // hour, month
      steps: []
    },
    row: {
      height: 24
    },
    maxRows: 20,
    maxHeight: 0,
    chart: {
      grid: {
        horizontal: {
          gap: 6
        }
      },
      progress: {
        width: 20,
        height: 6,
        pattern: true,
        bar: false
      },
      text: {
        offset: 0,
        xPadding: 10,
        display: true
      },
      expander: {
        type: 'chart',
        display: false,
        displayIfTaskListHidden: true,
        offset: 4,
        size: 18
      }
    },
    taskList: {
      display: true,
      resizeAfterThreshold: true,
      widthThreshold: 75,
      columns: [
        {
          id: 0,
          label: 'ID',
          value: 'id',
          width: 40
        }
      ],
      resizerWidth: 0,
      percent: 100,
      width: 0,
      finalWidth: 0,
      widthFromPercentage: 0,
      minWidth: 18,
      expander: {
        type: 'task-list',
        size: 16,
        columnWidth: 24,
        padding: 16,
        margin: 10,
        straight: false
      }
    },
    calendar: {
      hours: [],
      days: [],
      months: [],
      workingDays: [1, 2, 3, 4, 5],
      gap: 6,
      height: 0,
      hour: {
        height: 20,
        display: true,
        widths: [],
        maxWidths: {},
        format: {
          long(date) {
            return dayjs(date)
              .locale(localeCode)
              .format('HH:mm')
          },
          medium(date) {
            return dayjs(date)
              .locale(localeCode)
              .format('HH:mm')
          },
          short(date) {
            return dayjs(date)
              .locale(localeCode)
              .format('HH')
          }
        }
      },
      day: {
        height: 20,
        display: true,
        widths: [],
        maxWidths: {},
        format: {
          long(date) {
            return dayjs(date)
              .locale(localeCode)
              .format('DD dddd')
          },
          medium(date) {
            return dayjs(date)
              .locale(localeCode)
              .format('DD ddd')
          },
          short(date) {
            return dayjs(date)
              .locale(localeCode)
              .format('DD')
          }
        }
      },
      month: {
        height: 20,
        display: true,
        widths: [],
        maxWidths: {},
        format: {
          short(date) {
            return dayjs(date)
              .locale(localeCode)
              .format('MM')
          },
          medium(date) {
            return dayjs(date)
              .locale(localeCode)
              .format("MMM 'YY")
          },
          long(date) {
            return dayjs(date)
              .locale(localeCode)
              .format('MMMM YYYY')
          }
        }
      }
    },
    locale: {
      code: 'en',
      Now: 'Now',
      'X-Scale': 'Zoom-X',
      'Y-Scale': 'Zoom-Y',
      'Task list width': 'Task list',
      'Before/After': 'Expand',
      'Display task list': 'Show task list'
    }
  }
}
/**
 * Helper function to determine if specified variable is an object
 *
 * @param {any} item
 * @returns {boolean}
 */
function isObject(item) {
  return (
    item &&
    typeof item === 'object' &&
    !Array.isArray(item) &&
    !(item instanceof HTMLElement) &&
    !(item instanceof CanvasRenderingContext2D) &&
    typeof item !== 'function'
  )
}
/**
 * Helper function which will merge objects recursively - creating brand new one - like clone
 *
 * @param {object} target
 * @params {object} sources
 * @returns {object}
 */
export function mergeDeep(target, alreadyMerged, ...sources) {
  if (!sources.length) {
    return target
  }
  const source = sources.shift()
  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (typeof target[key] === 'undefined') {
          Object.assign(target, { [key]: {} })
        }
        mergeDeep(target[key], alreadyMerged, source[key])
      } else if (Array.isArray(source[key])) {
        target[key] = source[key].map(item => {
          if (isObject(item)) {
            return mergeDeep({}, alreadyMerged, item)
          }
          return item
        })
      } else if (typeof source[key] === 'function') {
        if (source[key].toString().indexOf('[native code]') === -1) {
          target[key] = source[key]
        }
      } else {
        Object.assign(target, { [key]: source[key] })
      }
    }
  }
  return mergeDeep(target, alreadyMerged, ...sources)
}

/**
 * Same as above but with reactivity in mind
 *
 * @param {object} target
 * @params {object} sources
 * @returns {object}
 */
export function mergeDeepReactive(target, alreadyMerged, ...sources) {
  if (!sources.length) {
    return Vue.observable(target)
  }
  const source = sources.shift()
  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (typeof target[key] === 'undefined') {
          target[key] = {}
        }
        target[key] = mergeDeepReactive(target[key], alreadyMerged, source[key])
      } else if (Array.isArray(source[key])) {
        target[key] = Vue.observable(
          source[key].map(item => {
            if (isObject(item)) {
              return mergeDeepReactive({}, alreadyMerged, item)
            }
            return Vue.observable(item)
          })
        )
      } else if (typeof source[key] === 'function') {
        if (source[key].toString().indexOf('[native code]') === -1) {
          target[key] = source[key]
        }
      } else {
        target[key] = Vue.observable(source[key])
      }
    }
  }
  return mergeDeepReactive(target, alreadyMerged, ...sources)
}

const store = new Vuex.Store({
  state: {
    tasks: [],
    options: {
      scrollBarHeight: 0,
      allVisibleTasksHeight: 0,
      refs: {},
      tasksById: {},
      times: {}
    }
  },
  mutations: {
    /**
     * Update tasks
     */
    updateTasks(state, tasks) {
      state.tasks = tasks.map(task => mergeDeepReactive({}, [], task))
    },

    /**
     * Update task
     */
    updateTask(state, task) {
      for (let index = 0, len = state.tasks.length; index < len; index++) {
        const current = state.tasks[index]
        if (current.id === task.id) {
          state.tasks[index] = mergeDeepReactive({}, [], state.tasks[index], task)
        }
      }
    },

    /**
     * Update options
     */
    updateOptions(state, payload) {
      state.options = mergeDeepReactive(state.options, [], payload)
    }
  }
})

const styleCache = {}
let globalVisibleTasks = []

/**
 * GanttElastic
 * Main vue component
 */
const GanttElastic = {
  components: {
    MainView
  },
  store,
  props: ['tasks', 'options'],
  provide() {
    const provider = {}
    const self = this
    Object.defineProperty(provider, 'root', {
      enumerable: true,
      get: () => self
    })
    return provider
  },
  data() {
    return {
      updateTasks: 'updateTasks',
      updateTask: 'updateTask',
      updateOptions: 'updateOptions'
    }
  },
  methods: {
    mergeDeep,
    mergeDeepReactive,

    /**
     * Calculate height of scrollbar in current browser
     *
     * @returns {number}
     */
    getScrollBarHeight() {
      const outer = document.createElement('div')
      outer.style.visibility = 'hidden'
      outer.style.height = '100px'
      outer.style.msOverflowStyle = 'scrollbar'
      document.body.appendChild(outer)
      var noScroll = outer.offsetHeight
      outer.style.overflow = 'scroll'
      var inner = document.createElement('div')
      inner.style.height = '100%'
      outer.appendChild(inner)
      var withScroll = inner.offsetHeight
      outer.parentNode.removeChild(outer)
      return this.$store.commit(this.updateOptions, { scrollBarHeight: noScroll - withScroll })
    },

    /**
     * Get style for specified class
     *
     * @param {object|string} mergeWith - merge multiple styles by className (without gantt-elastic__) or object with props
     * @returns {object}
     */
    style(...mergeWith) {
      const index = JSON.stringify(mergeWith)
      if (typeof styleCache[index] !== 'undefined') {
        return styleCache[index]
      }
      let merged = this.$store.state.options.style['*']
      mergeWith.forEach(objOrClassName => {
        if (typeof objOrClassName === 'string') {
          merged = Object.assign({}, merged, this.$store.state.options.style[objOrClassName])
        } else if (typeof objOrClassName === 'object') {
          merged = Object.assign({}, merged, objOrClassName)
        } else if (typeof objOrClassName === 'function') {
          merged = Object.assign({}, objOrClassName())
        }
      })
      styleCache[index] = merged
      return merged
    },

    /**
     * Fill out empty task properties and make it reactive
     */
    refreshTasks(tasks) {
      tasks = tasks.map(task => {
        if (typeof task.x === 'undefined') {
          task.x = 0
        }
        if (typeof task.y === 'undefined') {
          task.y = 0
        }
        if (typeof task.width === 'undefined') {
          task.width = 0
        }
        if (typeof task.height === 'undefined') {
          task.height = 0
        }
        if (typeof task.mouseOver === 'undefined') {
          task.mouseOver = false
        }
        if (typeof task.visible === 'undefined') {
          task.visible = true
        }
        if (typeof task.collapsed === 'undefined') {
          task.collapsed = false
        }
        if (typeof task.dependentOn === 'undefined') {
          task.dependentOn = []
        }
        if (typeof task.parentId === 'undefined') {
          task.parentId = null
        }
        if (typeof task.style === 'undefined') {
          task.style = {}
        }
        if (typeof task.children === 'undefined') {
          task.children = []
        }
        if (typeof task.parents === 'undefined') {
          task.parents = []
        }
        if (typeof task.parent === 'undefined') {
          task.parent = null
        }
        if (typeof task.durationMs === 'undefined') {
          task.durationMs = task.duration * 1000
        }
        return task
      })
      return tasks
    },

    /**
     * Initialize component
     */
    initialize(itsUpdate = '', data = null) {
      let tasks = this.tasks.map(task => {
        return this.mergeDeep({}, [], task)
      })
      let options = this.mergeDeep({}, [], getOptions(this.options), this.options)
      options.tasksById = {}
      tasks = tasks.map(task => {
        task.startTime = dayjs(task.start).valueOf()
        task.durationMs = task.duration * 1000
        task.endTime = task.startTime + task.durationMs
        return task
      })
      tasks = this.refreshTasks(tasks)
      dayjs.locale(options.locale, null, true)
      options.taskList.columns = options.taskList.columns.map((column, index) => {
        const columnOptions = {
          thresholdPercent: 100,
          widthFromPercentage: 0,
          finalWidth: 0
        }
        if (typeof column.height === 'undefined') {
          columnOptions.height = 0
        }
        if (typeof column.style === 'undefined') {
          columnOptions.style = {}
        }
        columnOptions._id = `${index}-${column.label}`
        return this.mergeDeep({}, [], column, columnOptions)
      })
      if (itsUpdate === '' || itsUpdate === 'tasks') {
        tasks = this.resetTaskTree(tasks)
        tasks = this.makeTaskTree(tasks)
      }
      if (itsUpdate === '') {
        options.ctx = document.createElement('canvas').getContext('2d')
      }
      this.$store.commit(this.updateTasks, tasks)
      this.$store.state.tasks.forEach(task => (options.tasksById[task.id] = task))
      this.$store.commit(this.updateOptions, options)
      this.globalOnResize()
      this.calculateTaskListColumnsDimensions()
      this.getScrollBarHeight()
      this.$store.commit(this.updateOptions, {
        outerHeight: this.$store.state.options.height + this.$store.state.options.scrollBarHeight
      })
      console.log(this.$store.state)
    },

    /**
     * Get calendar rows outer height
     *
     * @returns {int}
     */
    getCalendarHeight() {
      return (
        this.$store.state.options.calendar.height +
        this.style('calendar-row')['border-width'] +
        this.$store.state.options.calendar.gap
      )
    },

    /**
     * Sum all calendar rows height and return result
     *
     * @returns {int}
     */
    calculateCalendarDimensions() {
      let height = 0
      if (this.$store.state.options.calendar.hour.display && this.$store.state.options.calendar.hours.length > 0) {
        height += this.$store.state.options.calendar.hour.height
      }
      if (this.$store.state.options.calendar.day.display && this.$store.state.options.calendar.days.length > 0) {
        height += this.$store.state.options.calendar.day.height
      }
      if (this.$store.state.options.calendar.month.display && this.$store.state.options.calendar.months.length > 0) {
        height += this.$store.state.options.calendar.month.height
      }
      this.$store.commit(this.updateOptions, { calendar: { height } })
      return height
    },

    /**
     * Get maximal level of nested task children
     *
     * @returns {int}
     */
    getMaximalLevel() {
      let maximalLevel = 0
      this.$store.state.tasks.forEach(task => {
        if (task.parents.length > maximalLevel) {
          maximalLevel = task.parents.length
        }
      })
      return maximalLevel - 1
    },

    /**
     * Get maximal expander width - to calculate straight task list text
     *
     * @returns {int}
     */
    getMaximalExpanderWidth() {
      return (
        this.getMaximalLevel() * this.$store.state.options.taskList.expander.padding +
        this.$store.state.options.taskList.expander.margin
      )
    },

    /**
     * Synchronize scrollTop property when row height is changed
     */
    syncScrollTop() {
      if (this.$store.state.options.refs.taskListItems) {
        const scrollTop = this.$store.state.options.refs.chartGraph.scrollTop
        this.$store.commit(this.updateOptions, {
          scroll: { top: scrollTop }
        })
        this.$store.state.options.refs.taskListItems.scrollTop = scrollTop
        this.$store.state.options.refs.chartScrollContainerVertical.scrollTop = scrollTop
      }
    },

    /**
     * Calculate task list columns dimensions
     */
    calculateTaskListColumnsDimensions(columns) {
      let final = 0
      let percentage = 0
      this.$store.state.options.taskList.columns.forEach(column => {
        if (column.expander) {
          column.widthFromPercentage =
            ((this.getMaximalExpanderWidth() + column.width) / 100) * this.$store.state.options.taskList.percent
        } else {
          column.widthFromPercentage = (column.width / 100) * this.$store.state.options.taskList.percent
        }
        percentage += column.widthFromPercentage
        column.finalWidth = (column.thresholdPercent * column.widthFromPercentage) / 100
        final += column.finalWidth
        column.height = this.getTaskHeight() - this.style('grid-line-horizontal')['stroke-width']
      })
      this.$store.commit(this.updateOptions, {
        taskList: {
          widthFromPercentage: percentage,
          finalWidth: final
        }
      })
      this.syncScrollTop()
    },

    /**
     * Reset task tree - which is used to create tree like structure inside task list
     */
    resetTaskTree(tasks) {
      const updateTaskProps = {
        children: [],
        parent: null,
        parents: []
      }
      for (let i = 0, len = tasks.length; i < len; i++) {
        let task = tasks[i]
        tasks[i] = Object.assign(task, updateTaskProps)
      }
      return tasks
    },

    /**
     * Make task tree, after reset - look above
     *
     * @param {array} tasks
     * @returns {object} tasks with children and parents
     */
    makeTaskTree(tasks = []) {
      tasks.forEach(currentTask => {
        currentTask.children = []
        tasks.forEach(nestedTask => {
          if (
            typeof nestedTask.parentId !== 'undefined' &&
            nestedTask.parentId &&
            nestedTask.parentId === currentTask.id
          ) {
            nestedTask.parent = currentTask.id
            nestedTask.parents = [currentTask.id]
            currentTask.parents.forEach(id => nestedTask.parents.push(id))
            currentTask.children.push(nestedTask.id)
          }
        })
      })
      return tasks
    },

    /**
     * Get task by id
     *
     * @param {any} taskId
     * @returns {object|null} task
     */
    getTask(taskId) {
      if (typeof this.$store.state.options.tasksById[taskId] !== 'undefined') {
        return this.$store.state.options.tasksById[taskId]
      }
      return null
    },

    /**
     * Get children tasks for specified taskId
     *
     * @param {any} taskId
     * @returns {array} children
     */
    getChildren(taskId) {
      return this.$store.state.tasks.filter(task => task.parent === taskId)
    },

    /**
     * Get svg
     *
     * @returns {string} html svg image of gantt
     */
    getSVG() {
      return this.$store.state.options.mainView.outerHTML
    },

    /**
     * Get image
     *
     * @param {string} type image format
     * @returns {Promise} when resolved returns base64 image string of gantt
     */
    getImage(type = 'image/png') {
      return new Promise((resolve, reject) => {
        const img = new Image()
        img.onload = () => {
          const canvas = document.createElement('canvas')
          canvas.width = this.$store.state.options.mainView.clientWidth
          canvas.height = this.$store.state.options.rowsHeight
          canvas.getContext('2d').drawImage(img, 0, 0)
          resolve(canvas.toDataURL(type))
        }
        img.src = 'data:image/svg+xml,' + encodeURIComponent(this.getSVG())
      })
    },

    /**
     * Get gantt total height
     *
     * @returns {number}
     */
    getHeight(visibleTasks, outer = false) {
      let height =
        visibleTasks.length *
          (this.$store.state.options.row.height + this.$store.state.options.chart.grid.horizontal.gap * 2) +
        this.$store.state.options.calendar.height +
        parseFloat(this.style('calendar-row-rect')['border-width']) * 2 +
        this.$store.state.options.calendar.gap
      if (outer) {
        height += this.$store.state.options.scrollBarHeight
      }
      return height
    },

    /**
     * Get one task height
     *
     * @returns {number}
     */
    getTaskHeight(withStroke = false) {
      if (withStroke) {
        return (
          this.$store.state.options.row.height +
          this.$store.state.options.chart.grid.horizontal.gap * 2 +
          this.style('grid-line-horizontal')['stroke-width']
        )
      }
      return this.$store.state.options.row.height + this.$store.state.options.chart.grid.horizontal.gap * 2
    },

    /**
     * Get specified tasks height
     *
     * @returns {number}
     */
    getTasksHeight(visibleTasks, outer = false) {
      return visibleTasks.length * this.getTaskHeight()
    },

    /**
     * Convert time (in milliseconds) to pixel offset inside chart
     *
     * @param {int} ms
     * @returns {number}
     */
    timeToPixelOffsetX(ms) {
      let x = ms - this.$store.state.options.times.firstTime
      if (x) {
        x = x / this.$store.state.options.times.timePerPixel
      }
      return x
    },

    /**
     * Convert pixel offset inside chart to corresponding time offset in milliseconds
     *
     * @param {number} pixelOffsetX
     * @returns {int} milliseconds
     */
    pixelOffsetXToTime(pixelOffsetX) {
      let offset = pixelOffsetX + this.style('grid-line-vertical')['stroke-width'] / 2
      return offset * this.$store.state.options.times.timePerPixel + this.$store.state.options.times.firstTime
    },

    /**
     * Determine if element is inside current view port
     *
     * @param {number} x - element placement
     * @param {number} width - element width
     * @param {int} buffer - or threshold, if element is outside viewport but offset from view port is below this value return true
     * @returns {boolean}
     */
    isInsideViewPort(x, width, buffer = 5000) {
      return (
        (x + width + buffer >= this.$store.state.options.scroll.chart.left &&
          x - buffer <= this.$store.state.options.scroll.chart.right) ||
        (x - buffer <= this.$store.state.options.scroll.chart.left &&
          x + width + buffer >= this.$store.state.options.scroll.chart.right)
      )
    },

    /**
     * Chart scroll event handler
     *
     * @param {event} ev
     */
    onScrollChart(ev) {
      const horizontal = this.$store.state.options.refs.chartScrollContainerHorizontal
      const vertical = this.$store.state.options.refs.chartScrollContainerVertical
      this._onScrollChart(horizontal.scrollLeft, vertical.scrollTop)
    },

    /**
     * After same as above but with different arguments - normalized
     *
     * @param {number} left
     * @param {number} top
     */
    _onScrollChart(left, top) {
      const chartContainerWidth = this.$store.state.options.refs.chartContainer.clientWidth
      const options = {
        scroll: {
          chart: {
            left: left,
            right: left + chartContainerWidth,
            percent: (left / this.$store.state.options.times.totalViewDurationPx) * 100,
            top: top,
            time: this.pixelOffsetXToTime(left),
            timeCenter: this.pixelOffsetXToTime(left + chartContainerWidth / 2),
            dateTime: {
              left: this.$store.state.options.scroll.chart.time,
              right: this.pixelOffsetXToTime(left + this.$store.state.options.refs.chart.clientWidth)
            }
          }
        }
      }
      this.$store.commit(this.updateOptions, options)
      this.scrollTo(left, top)
    },

    /**
     * Scroll current chart to specified time (in milliseconds)
     *
     * @param {int} time
     */
    scrollToTime(time) {
      let pos = this.timeToPixelOffsetX(time)
      const chartContainerWidth = this.$store.state.options.refs.chartContainer.clientWidth
      pos = pos - chartContainerWidth / 2
      if (pos > this.$store.state.options.width) {
        pos = this.$store.state.options.width - chartContainerWidth
      }
      this.scrollTo(pos)
    },

    /**
     * Scroll chart or task list to specified pixel values
     *
     * @param {number|null} left
     * @param {number|null} top
     */
    scrollTo(left = null, top = null) {
      if (left !== null) {
        this.$store.state.options.refs.chartContainer.scrollLeft = left
        this.$store.state.options.refs.chartScrollContainerHorizontal.scrollLeft = left
        this.$store.commit(this.updateOptions, { scroll: { left } })
      }
      if (top !== null) {
        this.$store.state.options.refs.chartScrollContainerVertical.scrollTop = top
        this.$store.state.options.refs.chartGraph.scrollTop = top
        this.$store.state.options.refs.taskListItems.scrollTop = top
        this.$store.commit(this.updateOptions, { scroll: { top } })
      }
    },

    /**
     * After some actions like time zoom change we need to recompensate scroll position
     * so as a result everything will be in same place
     */
    fixScrollPos() {
      this.$nextTick(() => {
        this.scrollToTime(this.$store.state.options.scroll.chart.timeCenter)
      })
    },

    /**
     * Mouse wheel event handler
     */
    onWheelChart(ev) {
      if (!ev.shiftKey) {
        let top = this.$store.state.options.scroll.top + ev.deltaY
        const chartClientHeight = this.$store.state.options.rowsHeight
        const scrollHeight = this.$store.state.options.refs.chartGraph.scrollHeight - chartClientHeight
        if (top < 0) {
          top = 0
        } else if (top > scrollHeight) {
          top = scrollHeight
        }
        this.scrollTo(null, top)
      } else {
        let left = this.$store.state.options.scroll.left + ev.deltaY
        const chartClientWidth = this.$store.state.options.refs.chartScrollContainerHorizontal.clientWidth
        const scrollWidth = this.$store.state.options.refs.chartScrollContainerHorizontal.scrollWidth - chartClientWidth
        if (left < 0) {
          left = 0
        } else if (left > scrollWidth) {
          left = scrollWidth
        }
        this.scrollTo(left)
      }
    },

    /**
     * Time zoom change event handler
     */
    onTimeZoomChange(timeZoom) {
      this.$store.commit(this.updateOptions, { times: { timeZoom: timeZoom } })
      this.recalculateTimes()
      this.calculateSteps()
      this.calculateCalendarDimensions()
      this.fixScrollPos()
    },

    /**
     * Row height change event handler
     */
    onRowHeightChange(height) {
      this.$store.commit(this.updateOptions, { row: { height: height } })
      this.calculateTaskListColumnsDimensions()
    },

    /**
     * Scope change event handler
     */
    onScopeChange(value) {
      this.$store.commit(this.updateOptions, { scope: { before: value, after: value } })
      this.initTimes()
      this.calculateSteps()
      this.computeCalendarWidths()
      this.fixScrollPos()
    },

    /**
     * Task list width change event handler
     */
    onTaskListWidthChange(value) {
      this.$store.commit(this.updateOptions, { taskList: { percent: value } })
      this.calculateTaskListColumnsDimensions()
      this.fixScrollPos()
    },

    /**
     * Task list column width change event handler
     */
    onTaskListColumnWidthChange(value) {
      this.calculateTaskListColumnsDimensions()
      this.fixScrollPos()
    },

    /**
     * Listen to speciefied event names
     */
    initializeEvents() {
      this.$on('chart-scroll-horizontal', this.onScrollChart)
      this.$on('chart-scroll-vertical', this.onScrollChart)
      this.$on('chart-wheel', this.onWheelChart)
      this.$on('times-timeZoom-change', this.onTimeZoomChange)
      this.$on('row-height-change', this.onRowHeightChange)
      this.$on('scope-change', this.onScopeChange)
      this.$on('taskList-width-change', this.onTaskListWidthChange)
      this.$on('taskList-column-width-change', this.onTaskListColumnWidthChange)
    },

    /**
     * When some action was performed (scale change for example) - recalculate time variables
     */
    recalculateTimes() {
      let max = this.$store.state.options.times.timeScale * 60
      let min = this.$store.state.options.times.timeScale
      let steps = max / min
      let percent = this.$store.state.options.times.timeZoom / 100
      const timePerPixel =
        this.$store.state.options.times.timeScale * steps * percent +
        Math.pow(2, this.$store.state.options.times.timeZoom)
      const totalViewDurationMs = dayjs(this.$store.state.options.times.lastTime).diff(
        dayjs(this.$store.state.options.times.firstTime),
        'milisecods'
      )
      const totalViewDurationPx = totalViewDurationMs / timePerPixel
      this.$store.commit(this.updateOptions, {
        times: {
          timePerPixel,
          totalViewDurationMs,
          totalViewDurationPx
        },
        width: totalViewDurationPx + this.style('grid-line-vertical')['stroke-width']
      })
    },

    /**
     * Initialize time variables
     */
    initTimes() {
      const firstTime = dayjs(this.$store.state.options.times.firstTaskTime)
        .locale(this.locale)
        .startOf('day')
        .subtract(this.$store.state.options.scope.before, 'days')
        .startOf('day')
        .valueOf()
      const lastTime = dayjs(this.$store.state.options.times.lastTaskTime)
        .locale(this.locale)
        .endOf('day')
        .add(this.$store.state.options.scope.after, 'days')
        .endOf('day')
        .valueOf()
      this.$store.commit(this.updateOptions, {
        times: {
          firstTime,
          lastTime
        }
      })
      this.recalculateTimes()
    },

    /**
     * Calculate steps
     * Steps are days by default
     * Each step contain information about time offset and pixel offset of this time inside gantt chart
     */
    calculateSteps() {
      const steps = []
      const lastMs = this.$store.state.options.times.lastTime
      const currentDate = dayjs(this.$store.state.options.times.firstTime)
      steps.push({
        time: currentDate.valueOf(),
        offset: {
          ms: 0,
          px: 0
        }
      })
      for (
        let currentDate = dayjs(this.$store.state.options.times.firstTime)
          .add(1, this.$store.state.options.times.stepDuration)
          .startOf('day');
        currentDate.valueOf() <= lastMs;
        currentDate = currentDate.add(1, this.$store.state.options.times.stepDuration).startOf('day')
      ) {
        const offsetMs = currentDate.diff(this.$store.state.options.times.firstTime, 'milisecods')
        const offsetPx = offsetMs / this.$store.state.options.times.timePerPixel
        const step = {
          time: currentDate.valueOf(),
          offset: {
            ms: offsetMs,
            px: offsetPx
          }
        }
        const previousStep = steps[steps.length - 1]
        previousStep.width = {
          ms: offsetMs - previousStep.offset.ms,
          px: offsetPx - previousStep.offset.px
        }
        steps.push(step)
      }
      const lastStep = steps[steps.length - 1]
      lastStep.width = {
        ms: this.$store.state.options.times.totalViewDurationMs - lastStep.offset.ms,
        px: this.$store.state.options.times.totalViewDurationPx - lastStep.offset.px
      }
      this.$store.commit(this.updateOptions, { times: { steps } })
    },

    /**
     * Calculate calendar widths - when scale was changed for example
     */
    computeCalendarWidths() {
      this.computeDayWidths()
      this.computeHourWidths()
      this.computeMonthWidths()
    },

    /**
     * Compute width of calendar hours column widths basing on text widths
     */
    computeHourWidths() {
      const options = this.$store.state.options
      const newOptions = {
        calendar: {
          hour: {
            widths: []
          }
        }
      }
      const style = this.style('calendar-row-text', 'calendar-row-text--hour')
      options.ctx.font = style['font-size'] + ' ' + style['font-family']
      let currentDate = dayjs('2018-01-01T00:00:00') // any date will be good for hours
      let maxWidths = {}
      Object.keys(options.calendar.hour.format).forEach(formatName => {
        maxWidths[formatName] = 0
      })
      for (let hour = 0; hour < 24; hour++) {
        const widths = {
          hour
        }
        Object.keys(options.calendar.hour.format).forEach(formatName => {
          widths[formatName] = options.ctx.measureText(
            options.calendar.hour.format[formatName](currentDate.toDate())
          ).width
        })
        newOptions.calendar.hour.widths.push(widths)
        Object.keys(options.calendar.hour.format).forEach(formatName => {
          if (widths[formatName] > maxWidths[formatName]) {
            maxWidths[formatName] = widths[formatName]
          }
        })
        currentDate = currentDate.add(1, 'hour')
      }
      newOptions.calendar.hour.maxWidths = maxWidths
      this.$store.commit(this.updateOptions, newOptions)
    },

    /**
     * Compute calendar days column widths basing on text widths
     */
    computeDayWidths() {
      const options = this.$store.state.options
      const newOptions = {
        calendar: {
          day: {
            widths: []
          }
        }
      }
      const style = this.style('calendar-row-text', 'calendar-row-text--day')
      options.ctx.font = style['font-size'] + ' ' + style['font-family']
      let currentDate = dayjs(options.times.steps[0].date)
      let maxWidths = {}
      Object.keys(options.calendar.day.format).forEach(formatName => {
        maxWidths[formatName] = 0
      })
      for (let day = 0, daysLen = options.times.steps.length; day < daysLen; day++) {
        const widths = {
          day
        }
        Object.keys(options.calendar.day.format).forEach(formatName => {
          widths[formatName] = options.ctx.measureText(
            options.calendar.day.format[formatName](currentDate.toDate())
          ).width
        })
        newOptions.calendar.day.widths.push(widths)
        Object.keys(options.calendar.day.format).forEach(formatName => {
          if (widths[formatName] > maxWidths[formatName]) {
            maxWidths[formatName] = widths[formatName]
          }
        })
        currentDate = currentDate.add(1, 'day')
      }
      newOptions.calendar.day.maxWidths = maxWidths
      this.$store.commit(this.updateOptions, newOptions)
    },

    /**
     * Compute month calendar columns widths basing on text widths
     */
    computeMonthWidths() {
      const options = this.$store.state.options
      const newOptions = {
        calendar: {
          month: {
            widths: []
          }
        }
      }
      const style = this.style('calendar-row-text', 'calendar-row-text--month')
      options.ctx.font = style['font-size'] + ' ' + style['font-family']
      let maxWidths = {}
      Object.keys(options.calendar.month.format).forEach(formatName => {
        maxWidths[formatName] = 0
      })
      let currentDate = dayjs(this.$store.state.options.times.firstTime)
      const monthsCount = Math.ceil(
        dayjs(this.$store.state.options.times.lastTime).diff(
          dayjs(this.$store.state.options.times.firstTime),
          'months',
          true
        )
      )
      for (let month = 0; month < monthsCount; month++) {
        const widths = {
          month
        }
        Object.keys(options.calendar.month.format).forEach(formatName => {
          widths[formatName] = options.ctx.measureText(
            options.calendar.month.format[formatName](currentDate.toDate())
          ).width
        })
        newOptions.calendar.month.widths.push(widths)
        Object.keys(options.calendar.month.format).forEach(formatName => {
          if (widths[formatName] > maxWidths[formatName]) {
            maxWidths[formatName] = widths[formatName]
          }
        })
        currentDate = currentDate.add(1, 'month')
      }
      newOptions.calendar.month.maxWidths = maxWidths
      this.$store.commit(this.updateOptions, newOptions)
    },

    /**
     * Prepare time and date variables for gantt
     */
    prepareDates() {
      let firstTaskTime = Number.MAX_SAFE_INTEGER
      let lastTaskTime = 0
      for (let index = 0, len = this.$store.state.tasks.length; index < len; index++) {
        let task = this.$store.state.tasks[index]
        const newProps = {
          id: task.id
        }
        newProps.startTime = dayjs(task.start).valueOf()
        newProps.durationMs = task.duration * 1000
        if (task.startTime < firstTaskTime) {
          firstTaskTime = task.startTime
        }
        if (newProps.startTime + newProps.durationMs > lastTaskTime) {
          lastTaskTime = newProps.startTime + newProps.durationMs
        }
        this.$store.commit(this.updateTask, newProps)
      }
      const firstTime = dayjs(firstTaskTime)
        .locale(this.locale)
        .startOf('day')
        .subtract(this.$store.state.options.scope.before, 'days')
        .startOf('day')
        .valueOf()
      const lastTime = dayjs(lastTaskTime)
        .locale(this.locale)
        .endOf('day')
        .add(this.$store.state.options.scope.after, 'days')
        .endOf('day')
        .valueOf()
      this.$store.commit(this.updateOptions, {
        times: {
          firstTaskTime,
          lastTaskTime,
          firstTime,
          lastTime
        }
      })
    },

    /**
     * Setup and calulate everything
     */
    setup(itsUpdate = '', data = null) {
      this.initialize(itsUpdate, data)
      this.prepareDates()
      this.initTimes()
      this.calculateSteps()
      this.computeCalendarWidths()
      this.calculateCalendarDimensions()
      const width = this.$store.state.options.taskList.columns.reduce(
        (prev, current) => {
          return { width: prev.width + current.width }
        },
        { width: 0 }
      ).width
      this.$store.commit(this.updateOptions, { taskList: { width } })
    },

    /**
     * Global resize event (from window.addEventListener)
     */
    globalOnResize(ev) {
      if (typeof this.$el === 'undefined' || !this.$el) {
        return
      }
      const options = {
        clientWidth: this.$el.clientWidth,
        taskList: {
          columns: []
        }
      }
      if (
        this.$store.state.options.taskList.widthFromPercentage >
        (this.$store.state.options.clientWidth / 100) * this.$store.state.options.taskList.widthThreshold
      ) {
        const diff =
          this.$store.state.options.taskList.widthFromPercentage -
          (this.$store.state.options.clientWidth / 100) * this.$store.state.options.taskList.widthThreshold
        let diffPercent = 100 - (diff / this.$store.state.options.taskList.widthFromPercentage) * 100
        if (diffPercent < 0) {
          diffPercent = 0
        }
        options.taskList.columns = this.$store.state.options.taskList.columns.map(column => {
          column.thresholdPercent = diffPercent
          return column
        })
      } else {
        options.taskList.columns = this.$store.state.options.taskList.columns.map(column => {
          column.thresholdPercent = 100
          return column
        })
      }
      this.$store.commit(this.updateOptions, options)
      this.calculateTaskListColumnsDimensions()
    }
  },

  computed: {
    /**
     * Get visible tasks
     * Very importan method which will bring us only those tasks that are visible inside gantt chart
     * For example when task is collapsed - children of this task are not visible - we should not render them
     */
    visibleTasks() {
      const visibleTasks = this.$store.state.tasks.filter(task => task.visible)
      const maxRows = visibleTasks.slice(0, this.$store.state.options.maxRows)
      const options = {}
      options.rowsHeight = this.getTasksHeight(maxRows)
      let heightCompensation = 0
      if (this.$store.state.options.maxHeight && options.rowsHeight > this.$store.state.options.maxHeight) {
        heightCompensation = options.rowsHeight - this.$store.state.options.maxHeight
        options.rowsHeight = this.$store.state.options.maxHeight
      }
      options.height = this.getHeight(maxRows) - heightCompensation
      options.allVisibleTasksHeight = this.getTasksHeight(visibleTasks)
      options.outerHeight = this.getHeight(maxRows, true) - heightCompensation
      let len = visibleTasks.length
      for (let index = 0; index < len; index++) {
        let task = visibleTasks[index]
        const props = { id: task.id }
        props.width =
          task.durationMs / this.$store.state.options.times.timePerPixel -
          this.style('grid-line-vertical')['stroke-width']
        if (props.width < 0) {
          props.width = 0
        }
        props.height = this.$store.state.options.row.height
        props.x = this.timeToPixelOffsetX(task.startTime)
        props.y =
          (this.$store.state.options.row.height + this.$store.state.options.chart.grid.horizontal.gap * 2) * index +
          this.$store.state.options.chart.grid.horizontal.gap
        this.$store.commit(this.updateTask, props)
      }
      this.$store.commit(this.updateOptions, options)
      this.$nextTick(() => {
        this.syncScrollTop()
      })
      return visibleTasks
    },

    /**
     * Get columns and compute dimensions on the fly
     */
    getTaskListColumns() {
      this.calculateTaskListColumnsDimensions()
      return this.$store.state.options.taskList.columns
    }
  },

  /**
   * Watch tasks after gantt instance is created and react when we have new kids on the block
   */
  created() {
    /*this.$watch('tasks', (tasks) => {
      this.setup('tasks');
      this.$emit('tasks-changed', tasks);
    }, { deep: true });
    this.$watch('options', (opts) => {
      this.setup('options');
      this.$emit('options-changed', opts);
    }, { deep: true });*/
    this.initializeEvents()
    this.setup()
    this.$root.$emit('gantt-elastic-created', this)
  },

  /**
   * Emit before-mount event
   */
  beforeMount() {
    this.$emit('before-mount', this)
  },

  /**
   * Emit ready/mounted events and deliver this gantt instance to outside world when needed
   */
  mounted() {
    this.$store.commit(this.updateOptions, { clientWidth: this.$el.clientWidth })
    window.addEventListener('resize', this.globalOnResize)
    this.globalOnResize()
    this.$root.$emit('gantt-elastic-mounted', this)
    this.$emit('mounted')
    this.$root.$emit('gantt-elastic-ready', this)
  },

  /**
   * Emit event when data was changed and before update (you can cleanup dom events here for example)
   */
  beforeUpdate() {
    this.$emit('before-update')
  },

  /**
   * Emit event when gantt-elastic view was updated
   */
  updated() {
    this.$nextTick(() => {
      this.$emit('updated')
    })
  },

  /**
   * Before destroy event - clean up
   */
  beforeDestroy() {
    window.removeEventListener('resize', this.globalOnResize)
    this.$emit('before-destroy')
  },

  /**
   * Emit event after gantt-elastic was destroyed
   */
  destroyed() {
    this.$emit('destroyed')
  }
}
export default GanttElastic
</script>

<style>
@import url('./styles/ganttElastic.css');
</style>
