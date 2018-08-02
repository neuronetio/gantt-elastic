var ElastiganttApp = (function (exports) {
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
          class="elastigantt__grid-vertical-line"
          v-for="(line,index) in horizontalLines"
          :key="line.key"
          :x1="line.x1"
          :y1="line.y1"
          :x2="line.x2"
          :y2="line.y2"
        ></line>
        <line
          class="elastigantt__grid-horizontal-line"
          v-for="(line,index) in verticalLines"
          :key="line.key"
          :x1="line.x1"
          :y1="line.y1"
          :x2="line.x2"
          :y2="line.y2"
        ></line>
      </g>`,

      data() {
        return {};
      },
      computed: {
        verticalLines() {
          let lines = [];
          for (let step = 0; step <= this.$root.$data.times.steps; step++) {
            let x = step * this.$root.$data.times.stepPx + this.$root.$data.verticalGrid.strokeWidth/2;
            lines.push({
              key: step,
              x1: x,
              y1: this.$root.$data.calendar.height+this.$root.$data.calendar.strokeWidth+ this.$root.$data.calendar.gap,
              x2: x,
              y2: this.$root.$data.calendar.height+this.$root.$data.calendar.strokeWidth+ this.$root.$data.calendar.gap+(this.$root.$data.tasks.length*(this.$root.$data.row.height+this.$root.$data.horizontalGrid.gap*2))+this.$root.$data.horizontalGrid.strokeWidth,
            });
          }
          return this.$root.$data.verticalGrid.lines = lines;
        },
        horizontalLines() {
          let lines = [];
          let tasks = this.$root.$data.tasks;
          for (let index = 0, len = tasks.length; index <= len; index++) {
            lines.push({
              key: 'hl' + index,
              x1: 0,
              y1: index * (this.$root.$data.row.height + this.$root.$data.horizontalGrid.gap*2) + this.$root.$data.calendar.height + this.$root.$data.calendar.strokeWidth + this.$root.$data.calendar.gap + this.$root.$data.horizontalGrid.strokeWidth/2,
              x2: this.$root.$data.times.steps*this.$root.$data.times.stepPx+this.$root.$data.verticalGrid.strokeWidth,
              y2: index * (this.$root.$data.row.height + this.$root.$data.horizontalGrid.gap*2) + this.$root.$data.calendar.height+this.$root.$data.calendar.strokeWidth+ this.$root.$data.calendar.gap+ this.$root.$data.horizontalGrid.strokeWidth/2,
            });
          }
          return this.$root.$data.horizontalGrid.lines = lines;
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
          <input type="range" v-model="scale" max="24" min="2">
          <input type="range" v-model="height" max="100" min="6">
          <input type="range" v-model="scope" max="100" min="0">
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
            this.$root.$data.times.timeZoom = Number(value);
            this.$root.recalculate();
          }
        },
        height: {
          get() {
            return this.$root.$data.row.height;
          },
          set(value) {
            this.$root.$data.row.height = Number(value);
            this.$root.recalculate();
          }
        },
        scope: {
          get() {
            return this.$root.$data.scope.before;
          },
          set(value) {
            this.$root.$data.scope.before = Number(value);
            this.$root.$data.scope.after = Number(value);
            this.$root.recalculate();
          }
        },

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
          <defs v-html="defs"></defs>
          <${prefix}-tree></${prefix}-tree>
        </svg>
      </div>
    </div>`,
      data() {
        return {
          defs:'',
        };
      },
      created(){
        let css = '';
        for(let i=0,len=document.styleSheets.length;i<len;i++){
          let styleSheet = document.styleSheets[i];
          if(styleSheet.title==='elastigantt__style'){
            for(let r=0,rules=styleSheet.rules.length;r<rules;r++){
              let rule = styleSheet.rules[r];
              css+=rule.cssText+"\n";
            }
            break;
          }
        }
        css="<![CDATA[\n"+css+"]]>";
        this.defs = `<style type="text/css">${css}</style>`;
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
        v-bind:style="getStyle"
      ></rect>
      <text
      :x="task.x+2"
      :y="getTextY"
      :style="getTextStyle"
      alignment-baseline="middle"
      >{{task.label}}</text>
      </g>`,

      data() {
        return {};
      },
      computed: {
        getStyle() {
          return this.task.style ? this.task.style : this.$root.$data.row.style;
        },
        getTextY(){
          let state = this.$root.$data;
          return this.task.y + state.row.height/2;
        },
        getTextStyle(){
          let state = this.$root.$data;
          return `${state.row.textStyle};font-family:${state.row.fontFamily};font-size:${state.row.fontSize}`;
        }
      }
    });
  }

  function Calendar(prefix, self) {
    return self.wrapComponent({
      template: `<g class="elastigantt__calendar-group">
      <rect
        class="elastigantt__calendar"
        :x="getX"
        :y="getY"
        :width="getWidth"
        :height="$root.$data.calendar.height"
        :style="$root.$data.calendar.style"
      ></rect>
      <${prefix}-calendar-row
        v-for="(month,index) in months"
        :key="month.key"
        :item="month"
      ></${prefix}-calendar-row>
      <${prefix}-calendar-row
        v-for="(day,index) in days"
        :key="day.key"
        :item="day"
      ></${prefix}-calendar-row>
      <${prefix}-calendar-row
        v-for="(hour,index) in hours"
        :key="hour.key"
        :item="hour"
      ></${prefix}-calendar-row>
    </g>`,
      data() {
        return {
          cache:{}
        };
      },
      methods:{
        howManyHoursFit(current = 24, currentRecurrection = 1){
          let max = {
            short:0,
            medium:0,
            long:0
          };
          const state = this.$root.$data;
          self.ctx.font = state.calendar.day.fontSize+' '+state.calendar.fontFamily;
          let firstDate = dayjs(state.times.firstDate);
          for(let i=0;i<current;i++){
            let currentDate = firstDate.add(i,'hours').toDate();
            let textWidth = {
              short:self.ctx.measureText(state.calendar.hour.format.short(currentDate)).width,
              medium:self.ctx.measureText(state.calendar.hour.format.medium(currentDate)).width,
              long:self.ctx.measureText(state.calendar.hour.format.long(currentDate)).width,
            };
            if(textWidth.short>=max.short){
              max.short=textWidth.short;
            }
            if(textWidth.medium>=max.medium){
              max.medium=textWidth.medium;
            }
            if(textWidth.long>=max.long){
              max.long=textWidth.long;
            }
          }
          let cellWidth = state.times.stepPx/current - state.calendar.strokeWidth - 2;
          if(current>1){
            if(max.short > cellWidth){
              currentRecurrection++;
              return this.howManyHoursFit(Math.ceil(current/currentRecurrection), currentRecurrection);
            }
          }
          if(currentRecurrection < 3){
            if(max.long <= cellWidth){
              return {count:current, type:'long'};
            }
            if(max.medium <= cellWidth){
              return {count:current, type:'medium'};
            }
          }
          if(max.short <= cellWidth && current>1){
            return {count:current, type:'short'};
          }
          return {count:0, type:'short'};
        },
        howManyDaysFit(current = this.$root.$data.times.steps, currentRecurrection = 1){
          let max = {
            short:0,
            medium:0,
            long:0
          };
          const state = this.$root.$data;
          self.ctx.font = state.calendar.day.fontSize+' '+state.calendar.fontFamily;
          let firstDate = dayjs(state.times.firstDate);
          for(let i=0;i<current;i++){
            let currentDate = firstDate.add(i,'days').toDate();
            let textWidth = {
              short:self.ctx.measureText(state.calendar.day.format.short(currentDate)).width,
              medium:self.ctx.measureText(state.calendar.day.format.medium(currentDate)).width,
              long:self.ctx.measureText(state.calendar.day.format.long(currentDate)).width,
            };
            if(textWidth.short>=max.short){
              max.short=textWidth.short;
            }
            if(textWidth.medium>=max.medium){
              max.medium=textWidth.medium;
            }
            if(textWidth.long>=max.long){
              max.long=textWidth.long;
            }
          }
          let cellWidth = state.times.totalViewDurationPx/current - state.calendar.strokeWidth - 2;
          if(current>1){
            if(max.short > cellWidth){
              currentRecurrection++;
              return this.howManyDaysFit(Math.ceil(current/currentRecurrection), currentRecurrection);
            }
          }
          if(max.long <= cellWidth){
            return {count:current, type:'long'};
          }
          if(max.medium <= cellWidth){
            return {count:current, type:'medium'};
          }
          if(max.short <= cellWidth && current > 1){
            return {count:current, type:'short'};
          }
          return {cunt:0,type:'short'};
        },
        hourTextStyle(){
          return 'font-family:'+this.$root.$data.calendar.hour.fontFamily+';font-size:'+this.$root.$data.calendar.hour.fontSize;
        },
        dayTextStyle(){
          return 'font-family:'+this.$root.$data.calendar.day.fontFamily+';font-size:'+this.$root.$data.calendar.day.fontSize;
        },
      },
      computed:{
        getX(){
          return this.$root.$data.calendar.strokeWidth/2;
        },
        getY(){
          return this.$root.$data.calendar.strokeWidth/2;
        },
        getWidth(){
          return this.$root.$data.width-this.$root.$data.calendar.strokeWidth;
        },

        hours(){
          let hours = [];
          let hoursCount = this.howManyHoursFit();
          let hourStep=24/hoursCount.count;
          let state = this.$root.$data;
          for(let i=0,len=state.times.steps*hoursCount.count; i<len; i++){
            const date = new Date(state.times.firstTime+i*hourStep*60*60*1000);
            hours.push({
              key:'h'+i,
              x: state.calendar.strokeWidth/2 + i * state.times.stepPx/hoursCount.count,
              y: state.calendar.strokeWidth/2+state.calendar.day.height+state.calendar.month.height,
              width: state.times.stepPx/hoursCount.count,
              height: state.calendar.hour.height,
              label: state.calendar.hour.format[hoursCount.type](date)
            });
          }
          return state.calendar.hours = hours;
        },
        days(){
          let state = this.$root.$data;
          let days = [];
          let daysCount = this.howManyDaysFit();
          let dayStep = state.times.steps / daysCount.count;
          for(let i=0,len=daysCount.count; i<len; i++){
            const date = new Date(state.times.firstTime+i*dayStep*24*60*60*1000);
            days.push({
              key:'d'+i,
              x: state.calendar.strokeWidth/2 + i * state.times.totalViewDurationPx / daysCount.count,
              y: state.calendar.strokeWidth/2+state.calendar.month.height,
              width: state.times.totalViewDurationPx / daysCount.count,
              height: state.calendar.day.height,
              label: state.calendar.day.format[daysCount.type](date)
            });
          }
          return state.calendar.days = days;
        },
        months(){
          let state = this.$root.$data;
          let months = [];
          let firstDate = state.times.firstDate;
          let lastDate = state.times.lastDate;
          let steps = state.times.steps;
          let currentDate = dayjs(state.times.firstDate);
          let currentMonth = currentDate.month();
          let currentDays = 0;
          let monthDays = [];
          let currentDateObj = {date:currentDate.clone().toDate() , days:0};
          for(let i=0;i<steps;i++){
            currentDays++;
            currentDate = currentDate.clone().add(1,'days');
            if(currentDate.month() !== currentMonth){
              currentMonth = currentDate.month();
              currentDateObj.days = currentDays;
              monthDays.push(currentDateObj);
              currentDateObj = {date:currentDate.clone().toDate(), days:0};
              currentDays = 0;
            }
          }
          if(currentDays){
            currentDateObj.days = currentDays;
            monthDays.push(currentDateObj);
          }
          let currentOffset = state.calendar.strokeWidth/2;
          for(let i = 0,len = monthDays.length; i<len; i++){
            let days = monthDays[i].days;
            let date = monthDays[i].date;
            let width = state.times.stepPx * days;
            let format = 'long';
            if(self.ctx.measureText(state.calendar.month.format[format](date)).width > width){
              format='medium';
              if(self.ctx.measureText(state.calendar.month.format[format](date)).width > width){
                format='short';
              }
            }          months.push({
              key:'m'+i,
              x: currentOffset,
              y: state.calendar.strokeWidth/2,
              width: width,
              height: state.calendar.day.height,
              label: state.calendar.month.format[format](date)
            });
            currentOffset+=width;
          }
          return state.calendar.months = months;
        }
      }
    });
  }

  function CalendarRow(prefix, self) {
    return self.wrapComponent({
      props:['item'],
      template: `<g class="elastigantt__calendar-row-group">
    <rect
      class="elastigantt__calendar-row"
      :x="item.x"
      :y="item.y"
      :width="item.width"
      :height="item.height"
    ></rect>
    <text
      :x="getTextX"
      :y="getTextY"
      alignment-baseline="middle"
      text-anchor="middle"
    >{{item.label}}</text>
    </g>`,
      data() {
        return {};
      },
      computed:{
        getTextX(){
          return this.item.x+this.item.width/2;
        },
        getTextY(){
          return this.item.y+this.item.height/2;
        },
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
        'calendar-row': CalendarRow(prefix, self),
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

    getDefaultOptions(userOptions) {
      return {
        debug: false,
        width: 0,
        height: 0,
        svgElement: null,
        scope:{
          before:10,
          after:10,
        },
        times: {
          timeScale: 60 * 1000,
          timeZoom: 18,
          timePerPixel: 0,
          fistDate:null,
          firstTime:null, // firstDate getTime()
          lastDate:null,
          lastTime:null, // last date getTime()
          totalViewDurationMs: 0,
          totalViewDurationPx: 0,
          stepMs: 24 * 60 * 60 * 1000,
          stepPx: 0,
          steps: 0,
        },
        row: {
          height: 16,
          style: 'fill:#FF0000a0',
          textStyle: 'fill:#ffffff;text-shadow:1px 1px 1px rgba(0,0,0,0.75)',
          fontFamily:'sans-serif',
          fontSize: '12px'
        },
        horizontalGrid: {
          gap: 6,
          strokeWidth: 2,
          style: "stroke:#00000050;strokeWidth:2",
          lines: [],
        },
        verticalGrid: {
          strokeWidth: 2,
          style: "stroke:#00000050;strokeWidth:2",
          lines: [],
        },
        calendar: {
          hours:[],
          days:[],
          months:[],
          gap:6,
          height: 0,
          strokeWidth:2,
          fontFamily:'sans-serif',
          style:"fill:#00000020;stroke:#00000000;strokeWidth:2",
          hour:{
            height: 20,
            display: true,
            fontSize:'12px',
            format:{
              short(date){
                return dayjs(date).locale('pl').format('HH');
              },
              medium(date){
                return dayjs(date).locale('pl').format('HH:mm');
              },
              long(date){
                return dayjs(date).locale('pl').format('HH:mm');
              }
            }
          },
          day:{
            height: 20,
            display: true,
            fontSize:'12px',
            format:{
              short(date){
                return dayjs(date).locale('pl').format('DD');
              },
              medium(date){
                return dayjs(date).locale('pl').format('DD ddd');
              },
              long(date){
                return dayjs(date).locale('pl').format('DD dddd');
              }
            }
          },
          month:{
            height: 20,
            display: true,
            fontSize:'12px',
            format:{
              short(date){
                return dayjs(date).locale('pl').format('MM');
              },
              medium(date){
                return dayjs(date).locale('pl').format('\'YY MMM');
              },
              long(date){
                return dayjs(date).locale('pl').format('YYYY MMMM (MM)');
              }
            }
          },
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
      dayjs.locale(options.locale, null, true);

      this.data = data;
      this.tasks = data.tasks;
      this.options = Object.assign(this.getDefaultOptions(options), options);

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
      this.ctx = document.createElement('canvas').getContext('2d');

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
          let firstTaskDate,lastTaskDate;
          for (let index = 0, len = this.tasks.length; index < len; index++) {
            let task = this.tasks[index];
            task.startDate = new Date(task.start);
            task.startTime = task.startDate.getTime();
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
          this.times.lastTaskTime = lastTaskTime;
          this.times.firstTaskDate = firstTaskDate;
          this.times.lastTaskDate = lastTaskDate;
          this.recalculate();
        },
        methods: {
          calculateCalendarDimensions(){
            this.calendar.height = 0;
            if(this.calendar.hour.display){
              this.calendar.height+=this.calendar.hour.height;
            }
            if(this.calendar.day.display){
              this.calendar.height+=this.calendar.day.height;
            }
            if(this.calendar.month.display){
              this.calendar.height+=this.calendar.month.height;
            }
          },
          recalculate() {
            const firstDate = this.times.firstTaskDate.toISOString().split('T')[0]+'T00:00:00';
            const lastDate = this.times.lastTaskDate.toISOString().split('T')[0]+'T23:59:59.999';
            this.times.firstDate = dayjs(firstDate).locale(this.locale).subtract(this.scope.before,'days').toDate();
            this.times.lastDate = dayjs(lastDate).locale(this.locale).add(this.scope.after,'days').toDate();
            this.times.firstTime = this.times.firstDate.getTime();
            this.times.lastTime = this.times.lastDate.getTime();
            this.times.totalViewDurationMs = this.times.lastDate.getTime() - this.times.firstDate.getTime();

            let max = this.times.timeScale * 60;
            let min = this.times.timeScale;
            let steps = max / min;
            let percent = (this.times.timeZoom / 100);
            this.times.timePerPixel = this.times.timeScale * steps * percent + Math.pow(2, this.times.timeZoom);
            this.times.totalViewDurationPx = this.times.totalViewDurationMs / this.times.timePerPixel;
            this.times.stepPx = this.times.stepMs / this.times.timePerPixel;
            this.times.steps = Math.ceil(this.times.totalViewDurationPx / this.times.stepPx);

            let widthMs = this.times.lastTime - this.times.firstTime;
            let width = 0;
            if (widthMs) {
              width = widthMs / this.times.timePerPixel;
            }
            this.width = width + this.verticalGrid.strokeWidth;
            this.calculateCalendarDimensions();
            this.height = this.tasks.length * (this.row.height + this.horizontalGrid.gap*2) + this.horizontalGrid.gap + this.calendar.height+this.$root.$data.calendar.strokeWidth+ this.$root.$data.calendar.gap;
            for (let index = 0, len = this.tasks.length; index < len; index++) {
              let task = this.tasks[index];
              task.width = task.durationMs / this.times.timePerPixel - this.verticalGrid.strokeWidth;
              if(task.width < 0){
                task.width = 0;
              }
              task.height = this.row.height;
              let x = task.startTime - this.times.firstTime;
              if (x) {
                x = x / this.times.timePerPixel;
              }
              task.x = x + this.verticalGrid.strokeWidth;
              task.y = ((this.row.height + this.horizontalGrid.gap*2) * index) + this.horizontalGrid.gap + this.calendar.height+this.$root.$data.calendar.strokeWidth+ this.$root.$data.calendar.gap;
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

  exports.ElastiganttApp = ElastiganttApp;

  return exports;

}({}));
//# sourceMappingURL=elastigantt.js.map
