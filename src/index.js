import { elastiganttStore } from "./elastiganttStorage.js";
import { Main } from "./components/Main.js";
import { Header } from "./components/Header.js";
import { Grid } from "./components/Grid.js";
import { GridHeader } from "./components/GridHeader.js";
import { Tree } from "./components/Tree.js";
import { TreeRow } from "./components/TreeRow.js";

class Elastigantt {

  toPascalCase(str) {
    return str.replace(/(\w)(\w*)/g, function (g0, g1, g2) {
      return g1.toUpperCase() + g2.toLowerCase();
    }).replace(/\-/g, '');
  }

  toKebabCase(str){
    return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
  }

  getComponents(prefix, kebabCase = true) {
    let self = this;

    let components = {
      'main': Main(prefix, self),
      'tree': Tree(prefix, self),
      'header': Header(prefix, self),
      'grid': Grid(prefix, self),
      'grid-header': GridHeader(prefix, self),
      'tree-row': TreeRow(prefix, self),
    };

    let customComponents = {};
    for (let componentName in components) {
      let component = components[componentName];
      // shallow extend
      if (typeof this.customComponents[componentName] !== 'undefined') {
        component = { ...component,
          ...this.customComponents[componentName]
        };
      }
      customComponents[this.toPascalCase(prefix + '-' + componentName)] = component;
    }

    if(kebabCase){
      let kebabComponents = {};
      for(let name in customComponents){
        let value = customComponents[name];
        kebabComponents[this.toKebabCase(name)] = value;
      }
      return kebabComponents;
    }

    return customComponents;
  }

  registerComponents() {
    const components = this.getComponents(this.prefix,true);
    for (let componentName in components) {
      let component = components[componentName];
      let currentInstanceComponentName = componentName;
      Vue.component(currentInstanceComponentName, component);
    }
  }

  wrapComponent(props){
    props.beforeCreate = function(){console.log('beforecreate');}
    return props;
  }

  getDefaultOptions() {
    return {
      debug: false,
      duration:{
        scale:60*60,
        gap:1,
      },
      row: {
        height: 50,
        gap: 2,
        style:'fill:#FF0000'
      }
    };
  }

  makeTree(tasks) {
    for (let task in tasks) {
      for (let parent in tasks) {

      }
    }
  }

  constructor(prefix, containerId, data, options = {}, customComponents = {}) {
    const self = this;
    if (typeof window.elastiganttStore === 'undefined') {
      window.elastiganttStore = elastiganttStore(options.debug , options.showStack);
    }
    if (containerId.substr(0, 1) === '#') {
      containerId = containerId.substr(1);
    }
    this.containerId = containerId;
    this.containerElement = document.getElementById(containerId);
    this.prefix = prefix.replace(/[^a-z0-9]/gi, '');
    this.prefixPascal = this.toPascalCase(this.prefix);

    this.data = data;
    this.tasks = data.tasks.map(task => task);
    this.options = Object.assign(this.getDefaultOptions(), options);
    
    const globalState = window.elastiganttStore.getGlobalState();
    globalState.classInstance = this;
    globalState.data = this.data;
    globalState.tasks = this.tasks;
    globalState.options = this.options;

    this.customComponents = customComponents;
    //this.registerComponents();

    this.app = new Vue({
      el: '#' + containerId,
      template: `<div id="${prefix}-elastigantt">
        <${self.prefix}-header></${self.prefix}-header>
        <${self.prefix}-main></${self.prefix}-main>
      </div>`,
      components:self.getComponents(self.prefix)
    });

  }
}



// initialization


let elastigantt = new Elastigantt('app', '#app', {
  tasks: [
    {
      id: 1,
      key: 'T1',
      label: 'row1',
      start:'2018-05-19 12:00:00',
      duration:1*24*60*60,
    },
    {
      id: 2,
      key: 'T2',
      label: 'Kałabangaaaa!!!! :D:D:D:D',
      parent: 1,
      start:'2018-05-19 13:00:00',
      duration:2*24*60*60,
    },
    {
      id: 3,
      key: 'T3',
      label: 'row3',
      parent: 2,
      start:'2018-05-19 12:00:00',
      duration:3*24*60*60,
    },
    {
      id: 4,
      key: 'T4',
      label: 'row4',
      start:'2018-05-19 12:00:00',
      duration:2*24*60*60,
    },
    {
      id: 5,
      key: 'T5',
      label: 'row5',
      parent: 1,
      start:'2018-05-19 12:00:00',
      duration:2*24*60*60,
    },
    {
      id: 6,
      key: 'T6',
      label: 'row6',
      parent: 2,
      start:'2018-05-19 12:00:00',
      duration:1*24*60*60,
    },
  ]
}, {
  debug: true,
  showStack:true,
});