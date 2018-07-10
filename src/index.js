import { Elastigantt } from './components/Elastigantt.js';
import { Grid } from './components/Grid.js';
import { GridHeader } from './components/GridHeader.js';
import { Header } from './components/Header.js';
import { Main } from './components/Main.js';
import { Tree } from './components/Tree.js';
import { TreeRow } from './components/TreeRow.js';
import { Calendar } from './components/Calendar/Calendar.js';
import { CalendarDay } from './components/Calendar/CalendarDay.js';
import { elastiganttStore } from './elastiganttStorage.js';

class ElastiganttApp {
  toPascalCase(str) {
    return str.replace(/(\w)(\w*)/g, function(g0, g1, g2) {
      return g1.toUpperCase() + g2.toLowerCase();
    }).replace(/\-/g, '');
    console.log('test');
  }

  toKebabCase(str) {
    return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
  }

  getComponents(prefix, kebabCase = true) {
    let self = this;

    let components = {
      main: Main(prefix, self),
      tree: Tree(prefix, self),
      header: Header(prefix, self),
      grid: Grid(prefix, self),
      'grid-header': GridHeader(prefix, self),
      'tree-row': TreeRow(prefix, self),
      calendar: Calendar(prefix, self),
      'calendar-day': CalendarDay(prefix, self)
    };

    let customComponents = {};
    for (let componentName in components) {
      let component = components[componentName];
      // shallow extend
      if (typeof this.customComponents[componentName] !== 'undefined') {
        component = {
          ...component, ...this.customComponents[componentName]
        };
      }
      customComponents[this.toPascalCase(
        prefix + '-' + componentName
      )] = component;
    }

    if (kebabCase) {
      let kebabComponents = {};
      for (let name in customComponents) {
        let value = customComponents[name];
        kebabComponents[this.toKebabCase(name)] = value;
      }
      return kebabComponents;
    }

    return customComponents;
  }

  registerComponents() {
    const components = this.getComponents(this.prefix, true);
    for (let componentName in components) {
      let component = components[componentName]
      let currentInstanceComponentName = componentName;
      Vue.component(currentInstanceComponentName, component);
    }
  }

  wrapComponent(props) {
    return props;
  }

  getDefaultOptions() {
    return {
      debug: false,
      width: 0,
      height: 0,
      svgElement: null,
      times: {
        timeScale: 60 * 1000,
        timeZoom: 18,
        timePerPixel: 0,
        totalTasksDurationMs: 0,
        totalTasksDurationPx: 0,
        stepPx: 0,
        steps: 0,
      },
      row: {
        height: 50,
        style: 'fill:#FF0000a0'
      },
      horizontalGrid: {
        gap: 6,
        width: 2,
        style: "stroke:#666;strokeWidth:2",
        lines: [],
      },
      verticalGrid: {
        step: 24 * 60 * 60 * 1000,
        width: 2,
        style: "stroke:#666;strokeWidth:2",
        lines: [],
      },
      calendar: {
        height: 60,
        style: "fill:#00FF0055",
      }
    };
  }

  constructor(prefix, containerId, data, options = {}, customComponents = {}) {
    const self = this;
    if (typeof window.elastiganttStore === 'undefined') {
      window.elastiganttStore = elastiganttStore(
        options.debug,
        options.showStack
      );
    }

    if (containerId.substr(0, 1) === '#') {
      containerId = containerId.substr(1);
    }
    this.containerId = containerId;
    this.containerElement = document.getElementById(containerId);
    this.prefix = prefix.replace(/[^a-z0-9]/gi, '');
    this.prefixPascal = this.toPascalCase(this.prefix);

    this.data = data;
    this.tasks = data.tasks;
    this.options = Object.assign(this.getDefaultOptions(), options);

    // initialize observer
    this.tasks = this.tasks.map((task) => {
      task.x = 0;
      task.y = 0;
      task.width = 0;
      task.height = 0;
      return task;
    });

    const globalState = this.options;
    globalState.classInstance = this;
    globalState.data = this.data;
    globalState.tasks = this.tasks;

    this.customComponents = customComponents;
    this.registerComponents();

    this.app = new Vue({
      el: '#' + containerId,
      template: `<div id="${prefix}-elastigantt">
        <${self.prefix}-main></${self.prefix}-main>
      </div>`,
      data: globalState,
      created() {
        let tasks = this.$root.$data.tasks;
        let firstTaskTime = Number.MAX_SAFE_INTEGER;
        let lastTaskTime = 0;
        for (let index = 0, len = this.tasks.length; index < len; index++) {
          let task = this.tasks[index];
          task.startDate = new Date(task.start);
          task.startTime = task.startDate.getTime();
          task.durationMs = task.duration * 1000;
          if (task.startTime < firstTaskTime) {
            firstTaskTime = task.startTime;
          }
          if (task.startTime + task.durationMs > lastTaskTime) {
            lastTaskTime = task.startTime + task.durationMs;
          }
        }
        this.$root.$data.times.firstTaskTime = firstTaskTime;
        this.$root.$data.times.lastTaskTime = lastTaskTime;
        this.times.totalTasksDurationMs = this.times.lastTaskTime - this.times.firstTaskTime;
        this.$root.recalculate();
      },
      methods: {
        recalculate() {
          let max = this.times.timeScale * 60;
          let min = this.times.timeScale;
          let steps = max / min;
          let percent = (this.times.timeZoom / 100);
          this.times.timePerPixel = this.times.timeScale * steps * percent + Math.pow(2, this.times.timeZoom);
          this.times.totalTasksDurationPx = this.times.totalTasksDurationMs / this.times.timePerPixel;
          this.times.stepPx = this.verticalGrid.step / this.times.timePerPixel;
          this.times.steps = Math.ceil(this.times.totalTasksDurationPx / this.times.stepPx);

          let widthMs = this.$root.$data.times.lastTaskTime - this.$root.$data.times.firstTaskTime;
          let width = 0;
          if (widthMs) {
            width = widthMs / this.$root.$data.times.timePerPixel;
          }
          this.width = width + this.verticalGrid.width * 2;
          this.height = this.tasks.length * (this.row.height + this.horizontalGrid.gap) + this.horizontalGrid.gap + this.calendar.height;

          for (let index = 0, len = this.tasks.length; index < len; index++) {
            let task = this.tasks[index];
            task.width = task.durationMs / this.times.timePerPixel;
            task.height = this.row.height;
            let x = task.startTime - this.times.firstTaskTime;
            if (x) {
              x = x / this.times.timePerPixel;
            }
            task.x = x + this.verticalGrid.width;
            task.y = ((this.row.height + this.horizontalGrid.gap) * index) + this.horizontalGrid.gap + this.calendar.height;
          }
        },
        getSVG() {
          return this.svgElement.outerHTML;
        },
        getImage(type = 'image/png') {
          return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => {
              const canvas = document.createElement('canvas');
              canvas.width = this.svgElement.clientWidth;
              canvas.height = this.svgElement.clientHeight;
              canvas.getContext('2d').drawImage(img, 0, 0);
              resolve(canvas.toDataURL(type));
            }
            img.src = "data:image/svg+xml," + encodeURIComponent(this.getSVG());
          });
        }
      }
    });
  }
}
export { ElastiganttApp };
window.ElastiganttApp = ElastiganttApp;
