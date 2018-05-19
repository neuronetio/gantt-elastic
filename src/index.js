import {
  elastiganttStore
} from "./elastiganttStorage.js";
import {
  ElastiganttMain
} from "./components/ElastiganttMain.js";
import {
  ElastiganttTree
} from "./components/ElastigantTree.js";
import {
  ElastiganttTreeRow
} from "./components/ElastiganttTreeRow.js";

window.elastiganttStore = elastiganttStore;

class Elastigantt {

  toPascalCase(str) {
    return str.replace(/(\w)(\w*)/g, function (g0, g1, g2) {
      return g1.toUpperCase() + g2.toLowerCase();
    }).replace(/\-/g, '');
  }

  getComponents(prefix) {
    let self = this;

    let components = {
      'elastigantt-tree-row': ElastiganttTreeRow(prefix, self),
      'elastigantt-tree': ElastiganttTree(prefix, self),
      'elastigantt-main': ElastiganttMain(prefix, self),
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
    return customComponents;
  }

  registerComponents() {
    const components = this.getComponents(this.prefix);
    for (let componentName in components) {
      let component = components[componentName];
      let currentInstanceComponentName = componentName;
      Vue.component(currentInstanceComponentName, component);
    }
  }

  getDefaultOptions() {
    return {
      debug:false,
      row: {
        height: 50,
        gap: 2,
        style: 'fill:#ff0000'
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

    this.customComponents = customComponents;
    this.registerComponents();
    if(typeof options.debug === 'boolean'){
      window.elastiganttStore.setDebug(options.debug);
    }
    let store = window.elastiganttStore.getStore(prefix);

    store.set('classInstance', this);
    store.set('data', this.data);
    store.set('tasks', this.tasks);
    store.set('options', this.options);


    this.app = new Vue({
      el: '#' + containerId,
      template: `<div id="${prefix}-elastigantt" style="width:100%;height:100%;">
        <${self.prefixPascal}-elastigantt-main></${self.prefixPascal}-elastigantt-main>
      </div>`,

      data: {
        store: elastiganttStore
      },
    });

  }
}



// initialization


let elastigantt = new Elastigantt('app', '#app', {
  tasks: [{
      id: 1,
      key: 'T1',
      label: 'row1'
    },
    {
      id: 2,
      key: 'T2',
      label: 'Kałabangaaaa!!!! :D:D:D:D',
      parent: 1
    },
    {
      id: 3,
      key: 'T3',
      label: 'row3',
      parent: 2
    },
  ]
},{
  debug:true,
});