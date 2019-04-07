<h1>Gantt-elastic - Javascript Gantt Chart (editable, responsive)</h1>
<h2>Javascript Gantt Chart for vue, jquery, vanilla js and other frameworks</h2>

<div style="display:block;text-align:center">
<img src="https://api.codacy.com/project/badge/Grade/de39273bf6c84e81a4da175907122d5a">
<img src="https://snyk.io/test/github/neuronetio/gantt-elastic/badge.svg">
<img src="https://img.badgesize.io/neuronetio/gantt-elastic/master/dist/GanttElastic.umd.min.js.png?compression=gzip&label=gzipped">
<img src="https://img.shields.io/npm/dm/gantt-elastic.svg">
<img src="https://img.shields.io/npm/l/gantt-elastic.svg">
</div>

<p>
Keywords: [ gantt, javascript gantt, gantt chart, js gantt, vue gantt, project manager, gantt project manager, responsive gantt ]
</p>

<h2><a href="http://neuronet.io" target="_blank">Gantt-elastic demo here</a></h2>

![preview img](https://github.com/neuronetio/gantt-elastic/raw/master/gantt-elastic.jpg)
![preview gif](https://github.com/neuronetio/gantt-elastic/raw/master/gantt-elastic.gif)
![preview gif](https://github.com/neuronetio/gantt-elastic/raw/master/grab-scroll.gif)

## Gantt-elastic

is a vue component but it could be used in other frameworks or even with jQuery (vue is kind of elastic and lightweight framework).

gantt-elastic is not fully finished yet and may change (not released yet)

### If you want more activity in this repo give it a :star:

### Full documentation soon (for now take a look at examples folder)

For now you can look at [WIKI](https://github.com/neuronetio/gantt-elastic/wiki)
There is also full example vue project at https://github.com/neuronetio/vue-gantt-elastic

### Installation

`npm install --save gantt-elastic` or download zip from github / clone repo

### Standalone usage (vue.js bundled along with gantt-elastic component) for other frameworks like jQuery or pure vanilla js apps

```html
<!DOCTYPE html>
<html charset="utf-8">
  <head>
    <meta charset="UTF-8" />
    <title>gantt-elastic demo</title>
  </head>
  <body>
    <div id="app" style="width:100%;height:100%;">
      <gantt-elastic :tasks="$store.state.tasks" :options="$store.state.options">
        <gantt-header slot="header"></gantt-header>
      </gantt-elastic>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/vuex/dist/vuex.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/dayjs"></script>
    <script src="https://cdn.jsdelivr.net/npm/gantt-elastic/dist/bundle.js"></script>
    <!-- or
  <script src="../dist/bundle.js"></script>
  where  ../ is your path to gantt-elastic
  -->
    <script>
      // just helper to get current dates
      function getDate(hours) {
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        const currentMonth = currentDate.getMonth() + 1;
        const currentDay = currentDate.getDate();
        const timeStamp = new Date(`${currentYear}-${currentMonth}-${currentDay} 00:00:00`).getTime();
        return new Date(timeStamp + hours * 60 * 60 * 1000).getTime();
      }

      let tasks = [
        {
          id: 1,
          label: 'Make some noise',
          user:
            '<a href="https://www.google.com/search?q=John+Doe" target="_blank" style="color:#0077c0;">John Doe</a>',
          start: getDate(-24 * 5),
          duration: 15 * 24 * 60 * 60,
          percent: 85,
          type: 'project'
          //collapsed: true,
        },
        {
          id: 2,
          label: 'With great power comes great responsibility',
          user:
            '<a href="https://www.google.com/search?q=Peter+Parker" target="_blank" style="color:#0077c0;">Peter Parker</a>',
          parentId: 1,
          start: getDate(-24 * 4),
          duration: 4 * 24 * 60 * 60,
          percent: 50,
          type: 'milestone',
          collapsed: true,
          style: {
            base: {
              fill: '#1EBC61',
              stroke: '#0EAC51'
            }
            /*'tree-row-bar': {
              fill: '#1EBC61',
              stroke: '#0EAC51'
            },
            'tree-row-bar-polygon': {
              stroke: '#0EAC51'
            }*/
          }
        },
        {
          id: 3,
          label: 'Courage is being scared to death, but saddling up anyway.',
          user:
            '<a href="https://www.google.com/search?q=John+Wayne" target="_blank" style="color:#0077c0;">John Wayne</a>',
          parentId: 2,
          start: getDate(-24 * 3),
          duration: 2 * 24 * 60 * 60,
          percent: 100,
          type: 'task'
        }
        /* ... */
      ];

      let options = {
        taskMapping: {
          progress: 'percent'
        },
        maxRows: 100,
        maxHeight: 300,
        title: {
          label: 'Your project title as html (link or whatever...)',
          html: false
        },
        row: {
          height: 24
        },
        calendar: {
          hour: {
            display: true
          }
        },
        chart: {
          progress: {
            bar: false
          },
          expander: {
            display: true
          }
        },
        taskList: {
          expander: {
            straight: false
          },
          columns: [
            {
              id: 1,
              label: 'ID',
              value: 'id',
              width: 40
            },
            {
              id: 2,
              label: 'Description',
              value: 'label',
              width: 200,
              expander: true,
              html: true,
              events: {
                click({ data, column }) {
                  alert('description clicked!\n' + data.label);
                }
              }
            },
            {
              id: 3,
              label: 'Assigned to',
              value: 'user',
              width: 130,
              html: true
            },
            {
              id: 3,
              label: 'Start',
              value: task => dayjs(task.start).format('YYYY-MM-DD'),
              width: 78
            },
            {
              id: 4,
              label: 'Type',
              value: 'type',
              width: 68
            },
            {
              id: 5,
              label: '%',
              value: 'progress',
              width: 35,
              style: {
                'task-list-header-label': {
                  'text-align': 'center',
                  width: '100%'
                },
                'task-list-item-value-container': {
                  'text-align': 'center',
                  width: '100%'
                }
              }
            }
          ]
        },
        locale: {
          code: 'en',
          Now: 'Now',
          'X-Scale': 'Zoom-X',
          'Y-Scale': 'Zoom-Y',
          'Task list width': 'Task list',
          'Before/After': 'Expand',
          'Display task list': 'Task list'
        }
      };

      // create instance
      const app = new Vue({
        components: {
          'gantt-header': Header,
          'gantt-elastic': GanttElastic,
          'gantt-footer': {
            template: `<span>this is a footer</span>`
          }
        },
        data: {
          tasks: tasks.map(task => Object.assign({}, task)),
          options,
          destroy: false
        }
      });

      // gantt state which will be updated in realtime
      let ganttState, ganttInstance;

      // listen to 'gantt-elastic.ready' or 'gantt-elastic.mounted' event
      // to get the gantt state for real time modification
      app.$on('gantt-elastic-ready', ganttElasticInstance => {
        ganttInstance = ganttElasticInstance;

        ganttInstance.$on('tasks-updated', tasks => {
          app.tasks = tasks;
        });
        ganttInstance.$on('options-updated', options => {
          app.options = options;
        });

        ganttInstance.$on('chart-task-mouseenter', ({ data, event }) => {
          console.log('task mouse enter', { data, event });
        });
        ganttInstance.$on('updated', () => {
          //console.log('gantt view was updated');
        });
        ganttInstance.$on('destroyed', () => {
          //console.log('gantt was destroyed');
        });
        ganttInstance.$on('times-timeZoom-updated', () => {
          console.log('time zoom changed');
        });
        ganttInstance.$on('taskList-task-click', ({ event, data, column }) => {
          console.log('task list clicked! (task)', { data, column });
        });
      });
    </script>
  </body>
</html>
```

### gantt-elastic as vue component

Take a look at the `vue.html` inside [examples folder](https://github.com/neuronetio/gantt-elastic/tree/master/examples) file to see how you could add gantt-elastic inside `<script>` tag along with the Vue framework

Demo project: https://github.com/neuronetio/vue-gantt-elastic

You can also import gantt-elastic as compiled js component in commonjs or umd format ([examples](https://github.com/neuronetio/gantt-elastic/tree/master/examples) folder) or just grab GanttElastic.vue from src directory and add to your existing vue project.

```javascript
import Vue from 'vue';
import GanttElastic from "gantt-elastic/src/GanttElastic.vue";
import Header from "gantt-elastic/src/components/Header.vue"; // if you want standard header
new Vue({
  el:'#gantt',
  template:`<gantt-elastic :tasks="tasks" :options="options">
    <gantt-elastic-header slot="header"></gantt-elastic-header>
    <gantt-elastic-footer slot="footer"></gantt-elastic-footer>
  </gantt-elastic>`,
  components: {
    ganttElasticHeader: {template:`<span>your header</span>`},// or Header
    ganttElastic: GanttElastic
    ganttElasticFooter: {template:`<span>your footer</span>`},
  },
  data() {
    return {
      tasks: tasks,
      options: options
    };
  }
});
```

or

```javascript
import Vue from 'vue';
import App from './App.vue'; // your app that uses gantt-elastic from 'gantt-elastic/src/GanttElastic.vue'

new Vue({
  el: '#app',
  render: h => h(App)
});
```

### For webpack usage (pure javascript, inside other frameworks or Vue App/Component)

Take a look at this demo project: https://github.com/neuronetio/gantt-elastic-webpack for other bundlers use umd or commonjs from dist folder.

```javascript
import GanttElastic from 'gant-elastic/dist/GantElastic.umd.js';
import GanttElastic from 'gant-elastic/dist/GantElastic.common.js'; // same as import GanttElastic from 'gantt-elastic';
import GanttElastic from 'gantt-elastic/src/GantElastic.vue'; // if you want vue component directly without compilation - look above
// and the same with require
const GanttElastic = require('gant-elastic/dist/GantElastic.common.js');
```

### uglifyjs

If you are using uglifyjs in your project be sure to have es6 compatible version like [uglify-es](https://www.npmjs.com/package/uglify-es)

### Licensce

MIT
