<h1>Gantt-elastic - Javascript Gantt Chart (editable, responsive)</h1>
<h2>Javascript Gantt Chart for vue, jquery, vanilla js and other frameworks</h2>

<br>
<h3>Project moved as next major version to <a href="https://github.com/neuronetio/gantt-schedule-timeline-calendar">gantt-schedule-timeline-calendar</a></h3><br><br>
<br>

<strong>This project is not suitable for use in a production environment as it runs very slowly even in standard medium projects. This project has been completely rewritten and built with super performance in mind and is available in the new repository as a <a href="https://github.com/neuronetio/gantt-schedule-timeline-calendar">gantt-schedule-timeline-calendar</a>.</strong>


<h2><a href="https://neuronet.io/gantt-elastic/" target="_blank">Gantt-elastic demo here</a></h2>

![preview img](https://github.com/neuronetio/gantt-elastic/raw/master/gantt-elastic.jpg)
![preview gif](https://github.com/neuronetio/gantt-elastic/raw/master/gantt-elastic.gif)
![preview gif](https://github.com/neuronetio/gantt-elastic/raw/master/grab-scroll.gif)

## Gantt-elastic

is a vue component but it could be used in other frameworks or even with jQuery (vue is kind of elastic and lightweight framework).

[WIKI](https://github.com/neuronetio/gantt-elastic/wiki)

[Vue Example](https://github.com/neuronetio/vue-gantt-elastic)

### Installation

`npm install --save gantt-elastic` or download zip from github / clone repo

and if you want default header

`npm install --save gantt-elastic-header`

### Usage

```html
<!DOCTYPE html>
<html charset="utf-8">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
    <title>GanttElastic editor demo</title>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/dayjs"></script>

    <script src="https://unpkg.com/gantt-elastic/dist/GanttElastic.umd.js"></script>
    <script src="https://unpkg.com/gantt-elastic-header/dist/Header.umd.js"></script>
  </head>

  <body>
    <div style="width:100%;height:100%">
      <div id="app" v-if="!destroy">
        <gantt-elastic :tasks="tasks" :options="options" :dynamic-style="dynamicStyle">
          <gantt-header slot="header"></gantt-header>
          <gantt-footer slot="footer"></gantt-footer>
        </gantt-elastic>
      </div>
    </div>

    <script>
      // just helper to get current dates
      function getDate(hours) {
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        const currentMonth = currentDate.getMonth();
        const currentDay = currentDate.getDate();
        const timeStamp = new Date(currentYear, currentMonth, currentDay, 0, 0, 0).getTime();
        return new Date(timeStamp + hours * 60 * 60 * 1000).getTime();
      }

      let tasks = [
        {
          id: 1,
          label: 'Make some noise',
          user:
            '<a href="https://www.google.com/search?q=John+Doe" target="_blank" style="color:#0077c0;">John Doe</a>',
          start: getDate(-24 * 5),
          duration: 15 * 24 * 60 * 60 * 1000,
          progress: 85,
          type: 'project',
          //collapsed: true,
        },
        {
          id: 2,
          label: 'With great power comes great responsibility',
          user:
            '<a href="https://www.google.com/search?q=Peter+Parker" target="_blank" style="color:#0077c0;">Peter Parker</a>',
          parentId: 1,
          start: getDate(-24 * 4),
          duration: 4 * 24 * 60 * 60 * 1000,
          progress: 50,
          type: 'milestone',
          collapsed: true,
          style: {
            base: {
              fill: '#1EBC61',
              stroke: '#0EAC51',
            },
            /*'tree-row-bar': {
              fill: '#1EBC61',
              stroke: '#0EAC51'
            },
            'tree-row-bar-polygon': {
              stroke: '#0EAC51'
            }*/
          },
        },
        {
          id: 3,
          label: 'Courage is being scared to death, but saddling up anyway.',
          user:
            '<a href="https://www.google.com/search?q=John+Wayne" target="_blank" style="color:#0077c0;">John Wayne</a>',
          parentId: 2,
          start: getDate(-24 * 3),
          duration: 2 * 24 * 60 * 60 * 1000,
          progress: 100,
          type: 'task',
        },
        {
          id: 4,
          label: 'Put that toy AWAY!',
          user:
            '<a href="https://www.google.com/search?q=Clark+Kent" target="_blank" style="color:#0077c0;">Clark Kent</a>',
          start: getDate(-24 * 2),
          duration: 2 * 24 * 60 * 60 * 1000,
          progress: 50,
          type: 'task',
          dependentOn: [3],
        },
      ];

      let options = {
        maxRows: 100,
        maxHeight: 300,
        title: {
          label: 'Your project title as html (link or whatever...)',
          html: false,
        },
        row: {
          height: 24,
        },
        calendar: {
          hour: {
            display: false,
          },
        },
        chart: {
          progress: {
            bar: false,
          },
          expander: {
            display: true,
          },
        },
        taskList: {
          expander: {
            straight: false,
          },
          columns: [
            {
              id: 1,
              label: 'ID',
              value: 'id',
              width: 40,
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
                },
              },
            },
            {
              id: 3,
              label: 'Assigned to',
              value: 'user',
              width: 130,
              html: true,
            },
            {
              id: 3,
              label: 'Start',
              value: (task) => dayjs(task.start).format('YYYY-MM-DD'),
              width: 78,
            },
            {
              id: 4,
              label: 'Type',
              value: 'type',
              width: 68,
            },
            {
              id: 5,
              label: '%',
              value: 'progress',
              width: 35,
              style: {
                'task-list-header-label': {
                  'text-align': 'center',
                  width: '100%',
                },
                'task-list-item-value-container': {
                  'text-align': 'center',
                  width: '100%',
                },
              },
            },
          ],
        },
        /*locale:{
          name: 'pl', // name String
          weekdays: 'Poniedziałek_Wtorek_Środa_Czwartek_Piątek_Sobota_Niedziela'.split('_'), // weekdays Array
          weekdaysShort: 'Pon_Wto_Śro_Czw_Pią_Sob_Nie'.split('_'), // OPTIONAL, short weekdays Array, use first three letters if not provided
          weekdaysMin: 'Pn_Wt_Śr_Cz_Pt_So_Ni'.split('_'), // OPTIONAL, min weekdays Array, use first two letters if not provided
          months: 'Styczeń_Luty_Marzec_Kwiecień_Maj_Czerwiec_Lipiec_Sierpień_Wrzesień_Październik_Listopad_Grudzień'.split('_'), // months Array
          monthsShort: 'Sty_Lut_Mar_Kwi_Maj_Cze_Lip_Sie_Wrz_Paź_Lis_Gru'.split('_'), // OPTIONAL, short months Array, use first three letters if not provided
          ordinal: n => `${n}`, // ordinal Function (number) => return number + output
          relativeTime: { // relative time format strings, keep %s %d as the same
            future: 'za %s', // e.g. in 2 hours, %s been replaced with 2hours
            past: '%s temu',
            s: 'kilka sekund',
            m: 'minutę',
            mm: '%d minut',
            h: 'godzinę',
            hh: '%d godzin', // e.g. 2 hours, %d been replaced with 2
            d: 'dzień',
            dd: '%d dni',
            M: 'miesiąc',
            MM: '%d miesięcy',
            y: 'rok',
            yy: '%d lat'
          }
       }*/
      };

      // create instance
      const app = new Vue({
        components: {
          'gantt-header': Header,
          'gantt-elastic': GanttElastic,
          'gantt-footer': {
            template: `<span>this is a footer</span>`,
          },
        },
        data: {
          tasks: tasks.map((task) => Object.assign({}, task)),
          options,
          dynamicStyle: {
            'task-list-header-label': {
              'font-weight': 'bold',
            },
          },
          destroy: false,
        },
      });

      // gantt state which will be updated in realtime
      let ganttState, ganttInstance;

      // listen to 'gantt-elastic.ready' or 'gantt-elastic.mounted' event
      // to get the gantt state for real time modification
      app.$on('gantt-elastic-ready', (ganttElasticInstance) => {
        ganttInstance = ganttElasticInstance;

        ganttInstance.$on('tasks-changed', (tasks) => {
          app.tasks = tasks;
        });
        ganttInstance.$on('options-changed', (options) => {
          app.options = options;
        });
        ganttInstance.$on('dynamic-style-changed', (style) => {
          app.dynamicStyle = style;
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

      // mount gantt to DOM
      app.$mount('#app');
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
import GanttElastic from "gantt-elastic";
import Header from "gantt-elastic-header"; // if you want standard header (npm i -s gantt-elastic-header)
new Vue({
  el:'#gantt',
  template:`<gantt-elastic :tasks="tasks" :options="options">
    <gantt-elastic-header slot="header"></gantt-elastic-header>
    <gantt-elastic-footer slot="footer"></gantt-elastic-footer>
  </gantt-elastic>`,
  components: {
    ganttElasticHeader: {template:`<span>your header</span>`}, // or Header
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
  render: (h) => h(App),
});
```

### For webpack usage (pure javascript, inside other frameworks or Vue App/Component)

Take a look at this demo project: https://github.com/neuronetio/gantt-elastic-webpack for other bundlers use umd or commonjs from dist folder.

```javascript
import GanttElastic from 'gantt-elastic/dist/GantElastic.umd.js';
import GanttElastic from 'gantt-elastic/dist/GantElastic.common.js'; // same as import GanttElastic from 'gantt-elastic';
import GanttElastic from 'gantt-elastic/src/GantElastic.vue'; // if you want vue component directly without compilation - look above
// and the same with require
const GanttElastic = require('gantt-elastic/dist/GantElastic.common.js');
```

### uglifyjs

If you are using uglifyjs in your project be sure to have es6 compatible version like [uglify-es](https://www.npmjs.com/package/uglify-es)

### Licensce

MIT
