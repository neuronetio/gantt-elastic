# Elastigantt - Elastic Javascript Gantt Chart


### Javascript Gantt Chart

Keywords: [ gantt, javascript gantt, gantt chart, js gantt, vue gantt, project manager, gantt project manager ]

![preview img](https://github.com/neuronetio/elastigantt/raw/master/elastigantt.jpg)
![preview gif](https://github.com/neuronetio/elastigantt/raw/master/elastigantt.gif)


#### Elastigantt is a vue component but it could be used in other frameworks or even with jQuery (vue is kind of elastic and lightweight framework).

##### Elastigantt is not fully finished yet and may change (but if you really wan't you can fork this repo or download current version - do not use npm right now)

##### :star2: Give it a star if you want more activity in this repo, thanks!

### install
`npm install --save elastigantt` or download zip from github

### usage (more info / documentation soon - for now take a look at [index.html](https://github.com/neuronetio/elastigantt/blob/master/index.html))
```html
<div id="gantt"></div>
```
```javascript
const options = {
  taskList : {
    columns : [
      {id:1, label : 'ID', value : 'id', width : 40},
      {id:2, label : 'Description', value : 'label', width : 250, expander:true},
      {id:3, label: 'Start', value:(task)=>task.startDate.format('YYYY-MM-DD'), width:100},
      {id:3, label : 'User', value : 'user', width : 120},
      {id:4, label : 'Type', value : 'type', width : 60},
      {id:5, label : '%', value : 'progress', width : 35, styles:{
         label: {'text-align':'center','width':'100%'} ,
         value: {'text-align':'center','width':'100%'}
       }},
    ],
  },
  locale:{
    code:'en',
    'Now':'Now',
    'X-Scale':'X-Scale',
    'Y-Scale':'Y-Scale',
    'Task list width':'Task list width',
    'Display task list':'Show task list'
  },
};

const tasks = [
  {
    id: 1,
    label: 'Make some noise',
    user: 'John Doe',
    start: '2018-05-18T12:00:00',
    duration: 5 * 24 * 60 * 60,
    progress: 85,
    type: 'project',
  },
  {
    id: 2,
    label: 'With great power comes great responsibility',
    user: 'Peter Parker',
    parentId: 1,
    start: '2018-05-19T12:00:00',
    duration: 4 * 24 * 60 * 60,
    progress: 50,
    type: 'milestone',
  },
  {
    id: 3,
    label: 'Courage is being scared to death, but saddling up anyway.',
    user: 'John Wayne',
    parentId: 2,
    start: '2018-05-19T12:00:00',
    duration: 2 * 24 * 60 * 60,
    progress: 100,
    type: 'task',
  },
  /* ... */
];

// override components - copy component from src directory change it to object or compile *.vue to *.js
// more info about components you can find here : https://vuejs.org/v2/guide/index.html
// You can change anything! You have full control of components templates, events, data ... and so on!
Elastigantt.component.components.EgMain.components.TopHeader = CustomHeader;

const elastigantt = Elastigantt.mount({
  el: '#app', // <- your container id
  tasks: tasks,
  options: options
});

// listen to events
elastigantt.$on('elastigantt.tree.scroll',(ev)=>{
  console.log('scrolled!');
});
```
#### as Vue component
```javascript
const Elastigantt = require('elastigantt');
//import Elastigantt from './node_modules/elastigantt/index.js';

export default {
  template:`<elastigantt :tasks="tasks" :options="options"></elastigantt>`,
  data(){
    return {
      tasks:[/* ... */],
      options:{/* ... */}
    }
  }
}
```
License: MIT
