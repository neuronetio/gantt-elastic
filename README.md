# Gantt-elastic - Javascript Gantt Chart

## Javascript Gantt Chart for vue, jquery, vanilla js and other frameworks

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/de39273bf6c84e81a4da175907122d5a)](https://www.codacy.com/app/neuronetio/gantt-elastic?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=neuronetio/gantt-elastic&amp;utm_campaign=Badge_Grade)
[![Known Vulnerabilities](https://snyk.io/test/github/neuronetio/gantt-elastic/badge.svg)](https://snyk.io/test/github/{username}/{repo})
![gzipped](https://img.badgesize.io/neuronetio/gantt-elastic/master/dist/GanttElastic.umd.min.js.png?compression=gzip&label=gzipped)
![npm](https://img.shields.io/npm/dm/gantt-elastic.svg)
![NpmLicense](https://img.shields.io/npm/l/gantt-elastic.svg)

Keywords: [ gantt, javascript gantt, gantt chart, js gantt, vue gantt, project manager, gantt project manager ]

![preview img](https://github.com/neuronetio/gantt-elastic/raw/master/gantt-elastic.jpg)
![preview gif](https://github.com/neuronetio/gantt-elastic/raw/master/gantt-elastic.gif)


## Gantt-elastic
is a vue component but it could be used in other frameworks or even with jQuery (vue is kind of elastic and lightweight framework).

gantt-elastic is not fully finished yet and may change (not released yet)

### Full documentation soon

For now you can look at [WIKI](https://github.com/neuronetio/gantt-elastic/wiki)

### Installation
`npm install --save gantt-elastic` or download zip from github / clone repo

### Standalone usage (vue.js bundled along with gantt-elastic component) for other frameworks like jQuery or pure vanilla js apps

```html
<!DOCTYPE html>
<html charset="utf-8">
<head>
  <meta charset="UTF-8">
  <title>gantt-elastic demo</title>
</head>
<body>
  <div id="gantt" style="width:100%;height:100%;"></div>

  <script src="../dist/bundle.js"></script><!-- ../ is your path to gantt-elastic -->
  <script>
    // override components - copy component from src directory modify as you like and replace proper branch of GanttElastic.components tree
    // more info about vue components you can find here : https://vuejs.org/v2/guide/index.html
    // You can change anything! You have full control of components templates, events, data ... and so on!
    // GanttElastic.component.components.EgMain.components.TopHeader = CustomHeader;

    // just helper to get current dates
    function getDate(hours) {
      const currentDate = new Date();
      const currentYear = currentDate.getFullYear();
      const currentMonth = currentDate.getMonth() + 1;
      const currentDay = currentDate.getDate();
      const timeStamp = new Date(`${currentYear}-${currentMonth}-${currentDay} 00:00:00`).getTime();
      return new Date(timeStamp + hours * 60 * 60 * 1000);
    }

    const tasks = [
      {
        id: 1,
        label: 'Make some noise',
        user: '<a href="https://www.google.com/search?q=John+Doe" target="_blank" style="color:#0077c0;">John Doe</a>',
        start: getDate(-24 * 5),
        duration: 5 * 24 * 60 * 60,
        progress: 85,
        type: 'project'
      }, {
        id: 2,
        label: 'With great power comes great responsibility',
        user: '<a href="https://www.google.com/search?q=Peter+Parker" target="_blank" style="color:#0077c0;">Peter Parker</a>',
        parentId: 1,
        start: getDate(-24 * 4),
        duration: 4 * 24 * 60 * 60,
        progress: 50,
        type: 'milestone',
        style: {
          base: {
            fill: '#1EBC61',
            stroke: '#0EAC51'
          },
          /*'tree-row-bar': {
            fill: '#1EBC61',
            stroke: '#0EAC51'
          },
          'tree-row-bar-polygon': {
            stroke: '#0EAC51'
          }*/
        },
      }, {
        id: 3,
        label: 'Courage is being scared to death, but saddling up anyway.',
        user: '<a href="https://www.google.com/search?q=John+Wayne" target="_blank" style="color:#0077c0;">John Wayne</a>',
        parentId: 2,
        start: getDate(-24 * 3),
        duration: 2 * 24 * 60 * 60,
        progress: 100,
        type: 'task'
      },
      /* ... */
    ];

    const options = {
      title: {
        label: 'Your project title as html (link or whatever...)',
        html: false,
      },
      taskList: {
        columns: [
          { id: 1, label: 'ID', value: 'id', width: 40 },
          { id: 2, label: 'Description', value: 'label', width: 200, expander: true },
          { id: 3, label: 'Assigned to', value: 'user', width: 130, html: true },
          { id: 3, label: 'Start', value: (task) => task.startDate.format('YYYY-MM-DD'), width: 78 },
          { id: 4, label: 'Type', value: 'type', width: 68 },
          { id: 5, label: '%', value: 'progress', width: 35,  style: {
              "task-list-header-label": {
                'text-align': 'center',
                'width': '100%'
              },
              "task-list-item-value": {
                'text-align': 'center',
                'width': '100%'
              }
            }
          }
        ]
      },
      locale: {
        code: 'en',
        'Now': 'Now',
        'X-Scale': 'Zoom-X',
        'Y-Scale': 'Zoom-Y',
        'Task list width': 'Task list',
        'Before/After': 'Expand',
        'Display task list': 'Task list'
        // from now on locale settings are same as those from dayjs - https://github.com/iamkun/dayjs/blob/master/docs/en/I18n.md
      },
    };

    const ganttElastic = GanttElastic.mount({
      el: '#gantt', // <- your container id
      tasks: tasks,
      options: options
    });
    // listen to events
    /*ganttElastic.$on('gantt-elastic.tree.scroll',(ev)=>{
      console.log('scroll');
    });*/
  </script>
</body>
</html>
```

### gantt-elastic as vue component

Take a look at the `vue.html` inside [examples folder](https://github.com/neuronetio/gantt-elastic/tree/master/examples)  file to see how you could add gantt-elastic inside `<script>` tag along with the Vue framework

You can also import gantt-elastic as compiled js component in commonjs or umd format ([examples](https://github.com/neuronetio/gantt-elastic/tree/master/examples) folder) or just grab GanttElastic.vue from src directory and add to your existing vue project.

```javascript
import Vue from 'vue';
import GanttElastic from "gantt-elastic/src/GanttElastic.vue";
new Vue({
  el:'#gantt',
  template:`<gantt-elastic :tasks="tasks" :options="options"></gantt-elastic>`,
  components: {
    ganttElastic: GanttElastic
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
  render: h => h(App),
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
