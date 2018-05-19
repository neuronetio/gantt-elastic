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

class Elastigantt {

  toPascalCase(str) {
    return str.replace(/(\w)(\w*)/g, function (g0, g1, g2) {
      return g1.toUpperCase() + g2.toLowerCase();
    }).replace(/\-/g, '');
  }

  getComponents(prefix) {
    let self = this;

    let components = {
      'elastigantt-main': ElastiganttMain(prefix, self),
      'elastigantt-tree': ElastiganttTree(prefix, self),
      'elastigantt-tree-row': ElastiganttTreeRow(prefix, self),
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
      debug: false,
      day:{
        width:20,
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
    this.registerComponents();

    this.app = new Vue({
      el: '#' + containerId,
      template: `<div id="${prefix}-elastigantt">
        <${self.prefix}-elastigantt-main></${self.prefix}-elastigantt-main>
      </div>`,

      data: {
        store: elastiganttStore
      },
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
      duration:1,
    },
    {
      id: 2,
      key: 'T2',
      label: 'Kałabangaaaa!!!! :D:D:D:D',
      parent: 1,
      duration:2,
    },
    {
      id: 3,
      key: 'T3',
      label: 'row3',
      parent: 2,
      duration:1,
    },
    {
      id: 4,
      key: 'T4',
      label: 'row4',
      duration:1,
    },
    {
      id: 5,
      key: 'T5',
      label: 'row5',
      parent: 1,
      duration:2,
    },
    {
      id: 6,
      key: 'T6',
      label: 'row6',
      parent: 2,
      duration:1,
    },
  ]
}, {
  debug: true,
  showStack:true,
});