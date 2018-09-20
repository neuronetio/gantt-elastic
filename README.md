# Elastigantt - Elastic Javascript Gantt

![preview img](https://github.com/neuronetio/elastigantt/raw/master/elastigantt.jpg)
![preview gif](https://github.com/neuronetio/elastigantt/raw/master/elastigantt.gif)


#### Elastigantt is a vue component but it could be used in other frameworks or even with jQuery (vue is kind of elastic and lightweight framework).


#### usage (more info soon - for now take a look at [index.html](https://github.com/neuronetio/elastigantt/blob/master/index.html))
```html
<div id="gantt"></div>
```
```javascript
const options = {
  taskList : {
    columns : [
      {id:1, label : 'ID', value : 'id', width : 40},
      {id:2, label : 'Description', value : 'label', width : 250, expander:true},
      {id:3, label: 'Start',value:'start',width:100},
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

const elastigantt = new Vue({
  el:'#gantt',// <- your container
  template:`<elastigantt :tasks="tasks" :options="options"></elastigantt>`,
  data:{
    tasks,
    options
  }
});
```
