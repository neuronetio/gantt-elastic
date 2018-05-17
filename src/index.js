import {ElastiganttMain} from "./components/Elastigantt";
import {ElastiganttTree} from "./components/ElastigantTree";
import {ElastiganttTreeRow} from "./components/ElastiganttTreeRow";

class Elastigantt {

  toPascalCase(str){
    return str.replace(/(\w)(\w*)/g,function(g0,g1,g2){return g1.toUpperCase() + g2.toLowerCase();}).replace(/\-/g,'');
  }

  getComponents(slug){
    let self = this;
    let components = {
      'elastigantt-tree-row':ElastiganttMain(slug,self),
      'elastigantt-tree':ElastiganttTree(slug,self),
      'elastigantt':ElastiganttTreeRow(slug,self),

    };

    let customComponents = {};
    for(let componentName in components){
      let component = components[componentName];
      // shallow extend
      if(typeof this.customComponents[componentName]!=='undefined'){
        component = {...component,...this.customComponents[componentName]};
      }
      customComponents[this.toPascalCase(slug+'-'+componentName)] = component;
    }

    return customComponents;
  }

  registerComponents(){
    const components = this.getComponents(this.prefix);
    for(let componentName in components){
      let component = components[componentName];
      let currentInstanceComponentName = componentName;
      console.log(currentInstanceComponentName);
      Vue.component(currentInstanceComponentName,component);
    }
  }

  makeTree(tasks){
    for(let task in tasks){
      for(let parent in tasks){

      }
    }
  }

  constructor(prefix, container, data, customComponents = {}){
    const self = this;
    this.container = container;
    this.prefix = prefix.replace(/[^a-z0-9]/gi,'');
    this.prefixPascal = this.toPascalCase(this.prefix);

    this.data = data;
    this.data.tasks = data.tasks.map(task=>task);
    this.data.tasks.unshift({id:0,label:'root',key:'0'});

    this.customComponents = customComponents;
    this.registerComponents();

    this.app = new Vue({
      el: container,
      template:`<${self.prefixPascal}-elastigantt :tasks="tasks"></elastigantt>`,
      data:self.data
    });

  }
}



// initialization


let elastigantt = new Elastigantt('app','#app',{
  tasks:[
    {id:1, key:'T1', label:'row1'},
    {id:2, key:'T2', label:'row2',parent:1},
    {id:3, key:'T3', label:'row3',parent:2},
  ]
});

