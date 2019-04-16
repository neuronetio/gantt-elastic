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

and if you want default header

`npm install --save gantt-elastic-header`

### Standalone usage (vue.js bundled along with gantt-elastic component) for other frameworks like jQuery or pure vanilla js apps

```html
<!DOCTYPE html>
<html charset="utf-8">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
    <title>Gangtt-elastic demo</title>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/dayjs"></script>

    <script src="https://unpkg.com/gantt-elastic/dist/bundle.js"></script>
    <script src="https://unpkg.com/gantt-elastic-header/dist/Header.umd.js"></script>
  </head>

  <body>
    <div id="app" style="width:100%;height:100%;"></div>

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

      const tasks = [
        {
          id: 1,
          label: 'Make some noise',
          user:
            '<a href="https://www.google.com/search?q=John+Doe" target="_blank" style="color:#0077c0;">John Doe</a>',
          start: getDate(-24 * 5),
          duration: 5 * 24 * 60 * 60 * 1000,
          progress: 85,
          type: 'project'
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
          duration: 2 * 24 * 60 * 60 * 1000,
          progress: 100,
          type: 'task'
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
          dependentOn: [3]
        },
        {
          id: 5,
          label: 'One billion, gajillion, fafillion... shabadylu...mil...shabady......uh, Yen.',
          user:
            '<a href="https://www.google.com/search?q=Austin+Powers" target="_blank" style="color:#0077c0;">Austin Powers</a>',
          parentId: 4,
          start: getDate(0),
          duration: 2 * 24 * 60 * 60 * 1000,
          progress: 10,
          type: 'milestone',
          style: {
            base: {
              fill: '#0287D0',
              stroke: '#0077C0'
            }
          }
        },
        {
          id: 6,
          label: 'Butch Mario and the Luigi Kid',
          user:
            '<a href="https://www.google.com/search?q=Mario+Bros" target="_blank" style="color:#0077c0;">Mario Bros</a>',
          parentId: 5,
          start: getDate(24),
          duration: 1 * 24 * 60 * 60 * 1000,
          progress: 50,
          type: 'task',
          style: {
            base: {
              fill: '#8E44AD',
              stroke: '#7E349D'
            }
          }
        },
        {
          id: 7,
          label: 'Devon, the old man wanted me, it was his dying request',
          user:
            '<a href="https://www.google.com/search?q=Knight+Rider" target="_blank" style="color:#0077c0;">Knight Rider</a>',
          parentId: 2,
          dependentOn: [6],
          start: getDate(24 * 2),
          end: getDate(24 * 3), // end time in ms instead of duration
          progress: 20,
          type: 'task'
        },
        {
          id: 8,
          label: 'Hey, Baby! Anybody ever tell you I have beautiful eyes?',
          user:
            '<a href="https://www.google.com/search?q=Johhny+Bravo" target="_blank" style="color:#0077c0;">Johhny Bravo</a>',
          parentId: 7,
          dependentOn: [7],
          start: dayjs()
            .startOf('day')
            .valueOf(),
          end: dayjs().add(1, 'day'),
          progress: 0,
          type: 'task'
        },
        {
          id: 9,
          label: 'This better be important, woman. You are interrupting my very delicate calculations.',
          user:
            '<a href="https://www.google.com/search?q=Dexter\'s+Laboratory" target="_blank" style="color:#0077c0;">Dexter\'s Laboratory</a>',
          parentId: 8,
          dependentOn: [8, 7],
          start: getDate(24 * 4),
          duration: 4 * 60 * 60 * 1000,
          progress: 20,
          type: 'task',
          style: {
            base: {
              fill: '#8E44AD',
              stroke: '#7E349D'
            }
            /*'tree-row-bar-polygon': {
            stroke: '#7E349D'
          },
          'tree-row-bar': {
            fill: '#8E44AD',
            stroke: '#7E349D'
          }*/
          }
        },
        {
          id: 10,
          label: 'current task',
          user:
            '<a href="https://www.google.com/search?q=Johnattan+Owens" target="_blank" style="color:#0077c0;">Johnattan Owens</a>',
          start: getDate(24 * 5),
          duration: 24 * 60 * 60 * 1000,
          progress: 0,
          type: 'task'
        }
      ];

      const options = {
        title: {
          label: 'Your project title as html (link or whatever...)',
          html: false
        },
        taskList: {
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
              expander: true
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
                  'text-align': 'center'
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
      GanttElastic.component.components['gantt-header'] = Header;
      const app = GanttElastic.mount({
        el: '#app', // <- your container id
        tasks: tasks,
        options: options,
        ready(ganttInstance) {
          console.log('ready!', ganttInstance);

          ganttInstance.$on('tasks-updated', tasks => {
            console.log('tasks-updated', tasks, app);
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
        }
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
