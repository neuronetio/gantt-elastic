import { Elastigantt } from './components/Elastigantt.js';
import { Grid } from './components/Grid.js';
import { GridHeader } from './components/GridHeader.js';
import { Header } from './components/Header.js';
import { Main } from './components/Main.js';
import { Tree } from './components/Tree.js';
import { TreeRow } from './components/TreeRow.js';
import { elastiganttStore } from './elastiganttStorage.js';

class ElastiganttApp {
  toPascalCase(str) {
    return str.replace(/(\w)(\w*)/g, function(g0, g1, g2) {
      return g1.toUpperCase() + g2.toLowerCase();
    }).replace(/\-/g, '');
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
      'tree-row': TreeRow(prefix, self)
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
        style: 'fill:#FF0000'
      },
      horizontalGrid: {
        gap: 6,
        style: "stroke:#00000055;strokeWidth:2",
        lines: [],
      },
      verticalGrid: {
        step: 24 * 60 * 60 * 1000,
        style: "stroke:#00000055;strokeWidth:2",
        lines: [],
      },
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
      methods: {
        recalculate() {
          let max = this.times.timeScale * 60;
          let min = this.times.timeScale;
          let steps = max / min;
          let percent = (this.times.timeZoom / 100);
          let pixelPercent = percent * steps;
          let radian = percent * 90 * Math.PI / 180;
          console.log('percent', percent, Math.sin(radian), Math.pow(2, this.times.timeZoom) * Math.sin(radian))
          //console.log('radian sin', Math.cos(radian), this.times.timeScale, (Math.cos(radian) * this.times.timeScale));

          this.times.timePerPixel = this.times.timeScale * steps * percent + Math.pow(2, this.times.timeZoom);
          console.log('perPixel', this.times.timePerPixel);
          this.times.totalTasksDurationMs = this.times.lastTaskTime - this.times.firstTaskTime;
          this.times.totalTasksDurationPx = this.times.totalTasksDurationMs / this.times.timePerPixel;
          this.times.stepPx = this.verticalGrid.step / this.times.timePerPixel;
          this.times.steps = Math.ceil(this.times.totalTasksDurationPx / this.times.stepPx);
          for (let index = 0, len = this.tasks.length; index < len; index++) {
            let task = this.tasks[index];
            task.width = task.durationMs / this.times.timePerPixel;
            task.height = this.row.height;
            let x = task.startTime - this.times.firstTaskTime;
            if (x) {
              x = x / this.times.timePerPixel;
            }
            task.x = x;
            task.y = ((this.row.height + this.horizontalGrid.gap) * index) + this.horizontalGrid.gap;
          }
        },
      }
    });
  }
}

// initialization
let elastigantt = new ElastiganttApp(
  'app',
  '#app',
  {
    tasks: [
      {
        id: 1,
        key: 'T1',
        label: 'row1',
        start: '2018-05-18T12:00:00',
        duration: 1 * 24 * 60 * 60,
        progress: 50,
      },
      {
        id: 2,
        key: 'T2',
        label: 'Ka\u0142abangaaaa!!!! :D:D:D:D',
        parent: 1,
        start: '2018-05-19T12:00:00',
        duration: 2 * 24 * 60 * 60,
        progress: 50,
      },
      {
        id: 3,
        key: 'T3',
        label: 'row3',
        parent: 2,
        start: '2018-05-20T12:00:00',
        duration: 3 * 24 * 60 * 60,
        progress: 50,
      },
      {
        id: 4,
        key: 'T4',
        label: 'row4',
        start: '2018-05-21T12:00:00',
        duration: 2 * 24 * 60 * 60,
        progress: 50,
      },
      {
        id: 5,
        key: 'T5',
        label: 'row5',
        parent: 1,
        start: '2018-05-19T12:00:00',
        duration: 2 * 24 * 60 * 60,
        progress: 50,
      },
      {
        id: 6,
        key: 'T6',
        label: 'row6',
        parent: 2,
        start: '2018-05-22T12:00:00',
        duration: 1 * 24 * 60 * 60,
        progress: 50,
      }
    ]
  },
  {
    debug: false,
    showStack: true
  }
);
