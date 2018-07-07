(function () {
  'use strict';

  const Elastigantt = Vue.component("Elastigantt", {
    template: `<div class="elastigantt">
    <elastigantt-main></elastigantt-main>
  </div>`,
    data() {
      return window.elastiganttStore.initStore(prefix, 'Elastigantt', {});
    },
    methods: {

    }
  });

  function Grid(prefix, self) {
    return self.wrapComponent({

      template: `<g>
        <line
          v-for="(line,index) in horizontalLines"
          :key="line.key"
          :x1="line.x1"
          :y1="line.y1"
          :x2="line.x2"
          :y2="line.y2"
          :style="line.style"
        ></line>
        <line
          v-for="(line,index) in verticalLines"
          :key="line.key"
          :x1="line.x1"
          :y1="line.y1"
          :x2="line.x2"
          :y2="line.y2"
          :style="line.style"
        ></line>
      </g>`,

      data() {
        return {};
      },
      methods: {

      },
      computed: {
        verticalLines() {
          this.$root.$data.verticalGrid.lines = [];
          for (let step = 0; step <= this.$root.$data.times.steps; step++) {
            let x = step * this.$root.$data.times.stepPx + this.$root.$data.verticalGrid.width;
            this.$root.$data.verticalGrid.lines.push({
              key: step,
              x1: x,
              y1: this.$root.$data.calendar.height,
              x2: x,
              y2: '100%',
              style: this.$root.$data.verticalGrid.style
            });
          }
          return this.$root.$data.verticalGrid.lines;
        },
        horizontalLines() {
          this.$root.$data.horizontalGrid.lines = [];
          let tasks = this.$root.$data.tasks;
          for (let index = 0, len = tasks.length; index <= len; index++) {
            this.$root.$data.horizontalGrid.lines.push({
              key: 'hl' + index,
              x1: this.$root.$data.verticalGrid.width,
              y1: index * (this.$root.$data.row.height + this.$root.$data.horizontalGrid.gap) + this.$root.$data.horizontalGrid.gap / 2 + this.$root.$data.calendar.height,
              x2: '100%',
              y2: index * (this.$root.$data.row.height + this.$root.$data.horizontalGrid.gap) + this.$root.$data.horizontalGrid.gap / 2 + this.$root.$data.calendar.height,
              style: this.$root.$data.horizontalGrid.style
            });
          }
          return this.$root.$data.horizontalGrid.lines;
        }
      }
    });
  }

  function GridHeader(prefix, self) {
    return self.wrapComponent({

      template: `<g></g>`,

      data() {
        return {};
      },

      computed: {

      }
    });
  }

  function Header(prefix, self) {
    return self.wrapComponent({

      template: `<div class="elastigantt__header">
          <input type="range" v-model="scale" max="22" min="1">
      </div>`,

      data() {
        return {};
      },

      computed: {
        scale: {
          get() {
            return this.$root.$data.times.timeZoom;
          },
          set(value) {
            this.$root.$data.times.timeZoom = value;
            this.$root.recalculate();
          }
        }

      }
    });
  }

  function Main(prefix, self) {
    return self.wrapComponent({
      template: `
    <div class="elastigantt__main">
      <${prefix}-header></${prefix}-header>
      <div class="elastigantt__container">
        <svg ref="svgElement" class="elastigantt__main-svg" xmlns="http://www.w3.org/2000/svg"
          :width="$root.$data.width"
          :height="$root.$data.height">
          <${prefix}-tree></${prefix}-tree>
        </svg>
      </div>
    </div>`,
      data() {
        return {};
      },
      mounted() {
        this.$root.svgElement = this.$refs.svgElement;
      }
    })
  }

  function Tree(prefix, self) {
    return self.wrapComponent({
      template: `<g>
      <${prefix}-calendar></${prefix}-calendar>
      <${prefix}-grid></${prefix}-grid>
      <${prefix}-tree-row
        v-for="(task, index) in $root.$data.tasks"
        v-bind:task="task"
        v-bind:index="index"
        v-bind:key="task.key"></${prefix}-tree-row>
    </g>`,

      data() {
        return {

        };
      },
      computed: {
      }
    });
  }

  function TreeRow(prefix, self) {
    return self.wrapComponent({
      props: ['task', 'index'],
      template: `<g>
      <rect
        class="elastigantt__tree-row"
        v-bind:id="task.id"
        v-bind:x="task.x"
        v-bind:y="task.y"
        v-bind:width="task.width"
        v-bind:height="task.height"
        v-bind:style="getStyle"></rect>
      </g>`,

      data() {
        return {};
      },
      computed: {
        getStyle() {
          return this.task.style ? this.task.style : this.$root.$data.row.style;
        },
      }
    });
  }

  function Calendar(prefix, self) {
    return self.wrapComponent({
      template: `<g>
    <rect
      class="elastigantt__calendar"
      x="0"
      y="0"
      v-bind:width="$root.$data.width"
      v-bind:height="$root.$data.calendar.height"
      v-bind:style="$root.$data.calendar.style"></rect>
    </g>`,
      data() {
        return {};
      },

    });
  }

  function CalendarDay(prefix, self) {
    return self.wrapComponent({
      template: ``,
      data() {
        return {};
      }
    });
  }

  const elastiganttStore = function elastiganttStore(debug) {
    function stateHandler(fullPath) {
      return {
        get(target, name) {
          let value = target[name];
          if (debug && name !== '_isProxy' && name !== '__ob__') {
            if (!(typeof value === 'object' && typeof value._isProxy !== 'undefined')) {
              let log = 'GET: ' + fullPath + '.' + name.toString();
              console.groupCollapsed(log);
              console.log('VALUE:', value);
              console.trace();
              console.groupEnd();
            }
          }
          return target[name];
        },
        set(target, name, value) {
          let oldValue = target[name];
          if (debug) {
            if (!(typeof oldValue === 'object' && typeof oldValue._isProxy !== 'undefined')) {
              let log = 'SET: ' + fullPath + '.' + name.toString();
              console.groupCollapsed(log);
              console.log('VALUE:', value);
              console.trace();
              console.groupEnd();
            }
          }
          if (typeof value === 'object' && !Array.isArray(value)) {
            value._isProxy = true;
            target[name] = new Proxy(value, stateHandler(fullPath + '.' + name));
          } else {
            target[name] = value;
          }
          return true;
        },
        deleteProperty(target, name) {
          let oldValue = target[name];
          if (debug) {
            if (!(typeof target[name] === 'object' && typeof target[name]._isProxy !== 'undefined')) {
              let log = 'DEL: ' + fullPath + '.' + name.toString();
              console.groupCollapsed(log);
              console.log('OLDVAL:', oldValue);
              console.trace();
              console.groupEnd();
            }
          }
          delete target[name];
          return true;
        }
      }
    }

    let globalState = {};
    let instancesStates = {};
    let componentsStates = {};
    if (debug) {
      globalState = new Proxy({}, stateHandler('root'));
      instancesStates = new Proxy({}, stateHandler('root'));
      componentsStates = new Proxy({}, stateHandler('root'));
    }

    let lastId = {};

    return {

      saveGlobalState(obj, current = globalState) {
        for (let key in obj) {
          globalState[key] = obj[key];
        }
      },

      getGlobalState(prop) {
        if (prop) {
          return globalState[prop];
        }
        return globalState;
      },

      getInstanceState(prefix) {
        if (prefix) {
          return instancesStates[prefix];
        }
        return instancesStates;
      },

      getComponentState(prefix, componentId) {
        if (prefix) {
          if (componentId) {
            return componentsStates[prefix][componentId];
          }
          return componentsStates[prefix];
        }
        return componentsStates;
      },

      initStore(prefix, componentName) {
        if (typeof lastId[prefix] === 'undefined') {
          lastId[prefix] = 0;
        }
        const componentId = lastId[prefix]++;
        if (typeof componentsStates[prefix] === 'undefined') {
          componentsStates[prefix] = {};
        }
        if (debug) {
          return componentsStates[prefix][componentId] = new Proxy(globalState, stateHandler(`${componentName}[${componentId}]`));
        }
        return componentsStates[prefix][componentId] = globalState;
      },

    };
  };

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
        let component = components[componentName];
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
          style: 'fill:#FF0000'
        },
        horizontalGrid: {
          gap: 6,
          width: 2,
          style: "stroke:#00000055;strokeWidth:2",
          lines: [],
        },
        verticalGrid: {
          step: 24 * 60 * 60 * 1000,
          width: 2,
          style: "stroke:#00000055;strokeWidth:2",
          lines: [],
        },
        calendar: {
          height: 20,
          style: "fill:#00FF00",
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
              };
              img.src = "data:image/svg+xml," + encodeURIComponent(this.getSVG());
            });
          }
        }
      });
    }
  }

  window.ElastiganttApp = ElastiganttApp;

}());
//# sourceMappingURL=elastigantt.js.map
