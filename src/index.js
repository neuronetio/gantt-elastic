// elastigantt components
import {Calendar} from './components/Calendar/Calendar.js';
import {CalendarRow} from './components/Calendar/CalendarRow.js';
import {Elastigantt} from './components/Elastigantt.js';
import {Grid} from './components/Grid/Grid.js';
import {GridHeader} from './components/Grid/GridHeader.js';
import {Header} from './components/Header.js';
import {Main} from './components/Main.js';
import {TaskListExpander} from './components/TaskList/Expander.js';
import {TaskListResizer} from './components/TaskList/Resizer.js';
import {TaskList} from './components/TaskList/TaskList.js';
import {TaskListHeader} from './components/TaskList/TaskListHeader.js';
import {TaskListItem} from './components/TaskList/TaskListItem.js';
import {TreeBar} from './components/Tree/Bar.js';
import {TreeDependencyLines} from './components/Tree/DependencyLines.js';
import {Info} from './components/Tree/Info.js';
import {TreeProgressBar} from './components/Tree/ProgressBar.js';
import {TreeRowMilestone} from './components/Tree/Row/Milestone.js';
import {TreeRowProject} from './components/Tree/Row/Project.js';
import {TreeRowTask} from './components/Tree/Row/Task.js';
import {TreeText} from './components/Tree/Text.js';
import {Tree} from './components/Tree/Tree.js';
import {elastiganttStore} from './elastiganttStorage.js';

class ElastiganttApp {
  toPascalCase(str) {
    return str.replace(/(\w)(\w*)/g, function(g0, g1, g2) { return g1.toUpperCase() + g2.toLowerCase(); })
        .replace(/\-/g, '');
  }

  toKebabCase(str) { return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase(); }

  getComponents(prefix, kebabCase = true) {
    let self = this;

    let components = {
      'task-list-resizer' : TaskListResizer(prefix, self),
      'task-list-expander' : TaskListExpander(prefix, self),
      'task-list-header' : TaskListHeader(prefix, self),
      'task-list-item' : TaskListItem(prefix, self),
      'task-list' : TaskList(prefix, self),
      'main' : Main(prefix, self),
      'tree' : Tree(prefix, self),
      'header' : Header(prefix, self),
      'grid' : Grid(prefix, self),
      'grid-header' : GridHeader(prefix, self),
      'tree-row-task' : TreeRowTask(prefix, self),
      'tree-row-milestone' : TreeRowMilestone(prefix, self),
      'tree-row-project' : TreeRowProject(prefix, self),
      'tree-text' : TreeText(prefix, self),
      'tree-bar' : TreeBar(prefix, self),
      'tree-dependency-lines' : TreeDependencyLines(prefix, self),
      'tree-progress-bar' : TreeProgressBar(prefix, self),
      'info' : Info(prefix, self),
      'calendar' : Calendar(prefix, self),
      'calendar-row' : CalendarRow(prefix, self),
    };

    let customComponents = {};
    for (let componentName in components) {
      let component = components[componentName];
      // shallow extend
      if (typeof this.customComponents[componentName] !== 'undefined') {
        component = {...component, ...this.customComponents[componentName]};
      }
      customComponents[this.toPascalCase(prefix + '-' + componentName)] = component;
    }

    if (kebabCase) {
      let kebabComponents = {};
      for (let name in customComponents) {
        let value                               = customComponents[name];
        kebabComponents[this.toKebabCase(name)] = value;
      }
      return kebabComponents;
    }

    return customComponents;
  }

  registerComponents() {
    const components = this.getComponents(this.prefix, true);
    for (let componentName in components) {
      let component                    = components[componentName];
      let currentInstanceComponentName = componentName;
      Vue.component(currentInstanceComponentName, component);
    }
  }

  wrapComponent(props) { return props; }

  getDefaultOptions(userOptions) {
    return {
      debug : false,
      width : 0,
      height : 0,
      svgElement : null,
      scope : {
        before : 1,
        after : 1,
      },
      times : {
        timeScale : 60 * 1000,
        timeZoom : 17,
        timePerPixel : 0,
        fistDate : null,
        firstTime : null, // firstDate getTime()
        lastDate : null,
        lastTime : null, // last date getTime()
        totalViewDurationMs : 0,
        totalViewDurationPx : 0,
        stepMs : 24 * 60 * 60 * 1000,
        stepPx : 0,
        steps : 0,
      },
      row : {
        height : 30,
        style : 'fill:#FF0000a0',
        textStyle : 'fill:#ffffff',
        fontFamily : 'sans-serif',
        fontSize : '12px',
        showText : true,
      },
      progress : {
        height : 6,
        style : 'fill:#00ff92a0',
      },
      horizontalGrid : {
        gap : 6,
        strokeWidth : 1,
        style : "stroke:#00000050;strokeWidth:1",
        lines : [],
      },
      verticalGrid : {
        strokeWidth : 1,
        style : "stroke:#00000050;strokeWidth:1",
        lines : [],
      },
      info : {style : 'fill:#000000f0', textStyle : 'fill:#fff', fontFamily : 'sans-serif', fontSize : '12px'},
      taskList : {
        display : true,
        columns : [
          {label : 'Description', value : 'label', width : 324},
          {label : 'User', value : 'user', width : 150},
          {label : 'Type', value : 'type', width : 100},
          {label : 'Progress', value : 'progress', width : 60},
        ],
        resizerWidth : 0,
        percent : 100,
        width : 0,
        finalWidth : 0,
        expander : {size : 16, columnWidth : 24}
      },
      calendar : {
        hours : [],
        days : [],
        months : [],
        gap : 6,
        height : 0,
        strokeWidth : 1,
        fontFamily : 'sans-serif',
        style : "fill:#00000020;stroke:#00000000;strokeWidth:1",
        hour : {
          height : 20,
          display : true,
          fontSize : '12px',
          format : {
            short(date) { return dayjs(date).locale(userOptions.locale.code).format('HH'); },
            medium(date) { return dayjs(date).locale(userOptions.locale.code).format('HH:mm'); },
            long(date) { return dayjs(date).locale(userOptions.locale.code).format('HH:mm'); }
          }
        },
        day : {
          height : 20,
          display : true,
          fontSize : '12px',
          format : {
            short(date) { return dayjs(date).locale(userOptions.locale.code).format('DD'); },
            medium(date) { return dayjs(date).locale(userOptions.locale.code).format('DD ddd'); },
            long(date) { return dayjs(date).locale(userOptions.locale.code).format('DD dddd'); }
          }
        },
        month : {
          height : 20,
          display : true,
          fontSize : '12px',
          format : {
            short(date) { return dayjs(date).locale(userOptions.locale.code).format('MM'); },
            medium(date) { return dayjs(date).locale(userOptions.locale.code).format('\'YY MMM'); },
            long(date) { return dayjs(date).locale(userOptions.locale.code).format('YYYY MMMM (MM)'); }
          }
        },
      },
      defs : []
    };
  }

  constructor(prefix, containerId, data, options = {}, customComponents = {}) {
    const self = this;
    if (typeof window.elastiganttStore === 'undefined') {
      window.elastiganttStore = elastiganttStore(options.debug, options.showStack);
    }

    if (containerId.substr(0, 1) === '#') {
      containerId = containerId.substr(1);
    }
    this.containerId      = containerId;
    this.containerElement = document.getElementById(containerId);
    this.prefix           = prefix.replace(/[^a-z0-9]/gi, '');
    this.prefixPascal     = this.toPascalCase(this.prefix);
    dayjs.locale(options.locale, null, true);
    this.data                     = data;
    this.tasks                    = data.tasks;
    this.options                  = Object.assign(this.getDefaultOptions(options), options);
    this.options.taskList.columns = this.options.taskList.columns.map(column => {
      column.finalWidth = column.width / 100 * this.options.taskList.percent;
      return column;
    });

    // initialize observer
    this.tasks = this.tasks.map((task) => {
      task.x               = 0;
      task.y               = 0;
      task.width           = 0;
      task.height          = 0;
      task.tooltip         = {visible : false};
      task.mouseOver       = false;
      task.dependencyLines = [];
      if (typeof task.visible === 'undefined') {
        task.visible = true;
      }
      if (typeof task.collapsed === 'undefined') {
        task.collapsed = false;
      }
      if (typeof task.dependencyLines === 'undefined') {
        task.dependencyLines = [];
      }
      if (typeof task.children === 'undefined') {
        task.children = [];
      }
      return task;
    });

    const globalState         = this.options;
    globalState.classInstance = this;
    globalState.data          = this.data;
    globalState.tasks         = this.tasks;
    this.ctx                  = document.createElement('canvas').getContext('2d');

    this.customComponents = customComponents;
    this.registerComponents();

    this.app = new Vue({
      el : '#' + containerId,
      template : `<div id="${prefix}-elastigantt">
        <${self.prefix}-main></${self.prefix}-main>
      </div>`,
      data : globalState,
      created() {
        this.tasksById = {};
        this.tasks.forEach(task => this.tasksById[task.id] = task);
        let tasks         = this.tasks;
        let firstTaskTime = Number.MAX_SAFE_INTEGER;
        let lastTaskTime  = 0;
        let firstTaskDate, lastTaskDate;
        for (let index = 0, len = this.tasks.length; index < len; index++) {
          let task        = this.tasks[index];
          task.startDate  = new Date(task.start);
          task.startTime  = task.startDate.getTime();
          task.durationMs = task.duration * 1000;
          if (task.startTime < firstTaskTime) {
            firstTaskTime = task.startTime;
            firstTaskDate = task.startDate;
          }
          if (task.startTime + task.durationMs > lastTaskTime) {
            lastTaskTime = task.startTime + task.durationMs;
            lastTaskDate = new Date(task.startTime + task.durationMs);
          }
        }
        this.times.firstTaskTime = firstTaskTime;
        this.times.lastTaskTime  = lastTaskTime;
        this.times.firstTaskDate = firstTaskDate;
        this.times.lastTaskDate  = lastTaskDate;
        this.recalculate();
      },
      methods : {
        getTask(taskId) { return this.tasksById[taskId]; },
        getChildren(taskId) { return this.tasks.filter(task => task.parent === taskId); },
        getVisibleTasks() { return this.tasks.filter(task => task.visible); },
        calculateCalendarDimensions() {
          this.calendar.height = 0;
          if (this.calendar.hour.display) {
            this.calendar.height += this.calendar.hour.height;
          }
          if (this.calendar.day.display) {
            this.calendar.height += this.calendar.day.height;
          }
          if (this.calendar.month.display) {
            this.calendar.height += this.calendar.month.height;
          }
        },
        calculateTaskListColumnWidths() {
          let final = 0;
          this.taskList.columns.forEach((column) => {
            column.finalWidth = column.width / 100 * this.taskList.percent;
            final += column.finalWidth;
          });
          this.taskList.finalWidth = final + this.taskList.expander.columnWidth;
        },
        recalculate() {
          const firstDate      = this.times.firstTaskDate.toISOString().split('T')[0] + 'T00:00:00';
          const lastDate       = this.times.lastTaskDate.toISOString().split('T')[0] + 'T23:59:59.999';
          this.times.firstDate = dayjs(firstDate).locale(this.locale).subtract(this.scope.before, 'days').toDate();
          this.times.lastDate  = dayjs(lastDate).locale(this.locale).add(this.scope.after, 'days').toDate();
          this.times.firstTime = this.times.firstDate.getTime();
          this.times.lastTime  = this.times.lastDate.getTime();
          this.times.totalViewDurationMs = this.times.lastTime - this.times.firstTime;
          this.taskList.width =
              this.taskList.columns
                  .reduce((prev, current) => { return {width : prev.width + current.width}; }, {width : 0})
                  .width;
          let max                        = this.times.timeScale * 60;
          let min                        = this.times.timeScale;
          let steps                      = max / min;
          let percent                    = this.times.timeZoom / 100;
          this.times.timePerPixel        = this.times.timeScale * steps * percent + Math.pow(2, this.times.timeZoom);
          this.times.totalViewDurationPx = this.times.totalViewDurationMs / this.times.timePerPixel;
          this.times.stepPx              = this.times.stepMs / this.times.timePerPixel;
          this.width                     = this.times.totalViewDurationPx + this.verticalGrid.strokeWidth;
          this.times.steps               = Math.ceil(this.times.totalViewDurationPx / this.times.stepPx);

          this.calculateCalendarDimensions();
          this.calculateTaskListColumnWidths();
          this.tasks.forEach(task => { task.children = this.getChildren(task.id); });
          const visibleTasks = this.getVisibleTasks();
          this.height        = visibleTasks.length * (this.row.height + this.horizontalGrid.gap * 2) +
                        this.horizontalGrid.gap + this.calendar.height + this.$root.$data.calendar.strokeWidth +
                        this.$root.$data.calendar.gap;
          for (let index = 0, len = visibleTasks.length; index < len; index++) {
            let task   = visibleTasks[index];
            task.width = task.durationMs / this.times.timePerPixel - this.verticalGrid.strokeWidth;
            if (task.width < 0) {
              task.width = 0;
            }
            task.height = this.row.height;
            let x       = task.startTime - this.times.firstTime;
            if (x) {
              x = x / this.times.timePerPixel;
            }
            task.x = x + this.verticalGrid.strokeWidth;
            task.y = ((this.row.height + this.horizontalGrid.gap * 2) * index) + this.horizontalGrid.gap +
                     this.calendar.height + this.$root.$data.calendar.strokeWidth + this.$root.$data.calendar.gap;
          }
        },
        getSVG() { return this.svgElement.outerHTML; },
        getImage(type = 'image/png') {
          return new Promise((resolve, reject) => {
            const img  = new Image();
            img.onload = () => {
              const canvas  = document.createElement('canvas');
              canvas.width  = this.svgElement.clientWidth;
              canvas.height = this.svgElement.clientHeight;
              canvas.getContext('2d').drawImage(img, 0, 0);
              resolve(canvas.toDataURL(type));
            };
            img.src = "data:image/svg+xml," + encodeURIComponent(this.getSVG());
          });
        }
      }
    });
  }
}
export {ElastiganttApp};
window.ElastiganttApp = ElastiganttApp;
