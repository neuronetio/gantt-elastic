const elastiganttStore = function elastiganttStore(debug) {
  let showStack = true;
  function stateHandler(fullPath) {
    return {
      get(target, name) {
        let value = target[name];
        if (debug && name !== '_isProxy' && name !== '__ob__') {
          if (!(typeof value === 'object' && typeof value._isProxy !== 'undefined')) {
            let log = 'GET: ' + fullPath + '.' + name.toString();
            console.groupCollapsed(log);
            console.log('VALUE:', value);
            console.trace();
            console.groupEnd();
          }
        }
        return target[name];
      },
      set(target, name, value) {
        let oldValue = target[name];
        if (debug) {
          if (!(typeof oldValue === 'object' && typeof oldValue._isProxy !== 'undefined')) {
            let log = 'SET: ' + fullPath + '.' + name.toString();
            console.groupCollapsed(log);
            console.log('VALUE:', value);
            console.trace();
            console.groupEnd();
          }
        }
        if (typeof value === 'object' && !Array.isArray(value)) {
          value._isProxy = true;
          target[name] = new Proxy(value, stateHandler(fullPath + '.' + name));
        } else {
          target[name] = value;
        }
        return true;
      },
      deleteProperty(target, name) {
        let oldValue = target[name];
        if (debug) {
          if (!(typeof target[name] === 'object' && typeof target[name]._isProxy !== 'undefined')) {
            let log = 'DEL: ' + fullPath + '.' + name.toString();
            console.groupCollapsed(log);
            console.log('OLDVAL:', oldValue);
            console.trace();
            console.groupEnd();
          }
        }
        delete target[name];
        return true;
      }
    }
  }

  let globalState = {};
  let instancesStates = {};
  let componentsStates = {};
  if (debug) {
    globalState = new Proxy({}, stateHandler('root'));
    instancesStates = new Proxy({}, stateHandler('root'));
    componentsStates = new Proxy({}, stateHandler('root'));
  }

  let lastId = {};

  return {

    saveGlobalState(obj, current = globalState) {
      for (let key in obj) {
        globalState[key] = obj[key];
      }
    },

    getGlobalState(prop) {
      if (prop) {
        return globalState[prop];
      }
      return globalState;
    },

    getInstanceState(prefix) {
      if (prefix) {
        return instancesStates[prefix];
      }
      return instancesStates;
    },

    getComponentState(prefix, componentId) {
      if (prefix) {
        if (componentId) {
          return componentsStates[prefix][componentId];
        }
        return componentsStates[prefix];
      }
      return componentsStates;
    },

    initStore(prefix, componentName) {
      if (typeof lastId[prefix] === 'undefined') {
        lastId[prefix] = 0;
      }
      const componentId = lastId[prefix]++;
      if (typeof componentsStates[prefix] === 'undefined') {
        componentsStates[prefix] = {};
      }
      if (debug) {
        return componentsStates[prefix][componentId] = new Proxy(globalState, stateHandler(`${componentName}[${componentId}]`));
      }
      return componentsStates[prefix][componentId] = globalState;
    },

  };
};

export { elastiganttStore };
