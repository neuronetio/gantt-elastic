const elastiganttStore = function elastiganttStore(debug) {
  let showStack = true;
  function stateHandler(fullPath){
    return {
      get(target, name){
        let value = target[name];
        if (debug && name!=='_isProxy' && name!=='__ob__') {
          if(!(typeof value==='object' && typeof value._isProxy!=='undefined')){
            let log = 'GET: '+fullPath+'.'+name.toString();
            console.groupCollapsed(log);
            console.log('VALUE:',value);
            console.trace();
            console.groupEnd();
          }
        }
        return target[name];
      },
      set(target, name, value){
        let oldValue = target[name];
        if (debug) {
          if(!(typeof oldValue==='object' && typeof oldValue._isProxy!=='undefined')){
            let log = 'SET: '+fullPath+'.'+name.toString();
            console.groupCollapsed(log);
            console.log('VALUE:',value);
            console.trace();
            console.groupEnd();
          }
        }
        if (typeof value === 'object') {
          value._isProxy = true;
          target[name] = new Proxy(value, stateHandler(fullPath+'.'+name));
        } else {
          target[name] = value;
        }
        return true;
      },
      deleteProperty(target, name){
        let oldValue = target[name];
        if(debug){
          if(!(typeof target[name]==='object' && typeof target[name]._isProxy!=='undefined')){
            let log = 'DEL: '+fullPath+'.'+name.toString();
            console.groupCollapsed(log);
            console.log('OLDVAL:',oldValue);
            console.trace();
            console.groupEnd();
          }
        }
        delete target[name];
        return true;
      }
    }
  };

  let globalState = {};
  let instancesStates = {};
  if(debug){
    globalState = new Proxy({}, stateHandler('root'));
    instancesStates = new Proxy({}, stateHandler('root'));
  }

  return {

    getGlobalState(){
      return globalState;
    },

    getInstanceStates(){
      return instancesStates;
    },

    initStore(prefix , componentName, initialValue = {}) {
      initialValue.shared = globalState;
      if(typeof instancesStates[prefix]==='undefined'){
        instancesStates[prefix]={};
      }
      return instancesStates[prefix][componentName] = new Proxy(initialValue,stateHandler(componentName));
    },

  };
};

export {
  elastiganttStore
};