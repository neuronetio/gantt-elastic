const elastiganttStore = {
    debug: false,
    globalState:{},
    instancesStates:{},
  
    setDebug(value){
      this.debug = value;
    },

    _normalizePrefix(prefix) {
      if (typeof prefix === 'undefined' || prefix === null || prefix === '') {
        throw new Error("Empty prefix!");
      }
      return prefix.replace('.','');
    },
  
    _setProp(prop, value, currentBranch = this.instancesStates) {
      if (!prop) {
        throw new Error(`Property not found [${prop}]`);
      }
      if(this.debug){ console.groupCollapsed(`elastiganttStore._setProp:${prop}`); }
      let breadcrumbs = prop.split('.');
      for (let index = 0, len = breadcrumbs.length; index < len; index++) {
        let breadcrumb = breadcrumbs[index];
        if (this.debug) {
          console.log('current breadcrumb', index, breadcrumb, breadcrumbs.length - 1);
        }
        if (index === breadcrumbs.length - 1) {
          if (this.debug) {
            console.log('saving', breadcrumb, value);
            console.groupEnd();
          }
          return currentBranch[breadcrumb] = value;
        }
        if (typeof currentBranch[breadcrumb] === 'undefined') {
          currentBranch[breadcrumb] = {};
        }
        currentBranch = currentBranch[breadcrumb];
      }
    },
  
    setGlobal(prop, value) {
      return this._setProp(prop, value, this.globalState);
    },
  
    _setStorage(prefix) {
      prefix = this._normalizePrefix(prefix);
      return function set(prop, value) {
        this._setProp(`${prefix}.${prop}`, value);
      }.bind(this);
    },
  
    _getProp(prop, currentBranch = this.instancesStates) {
      if (!prop) {
        throw new Error(`Property not found [${prop}]`);
      }
      if(this.debug){ console.groupCollapsed(`elastiganttStore._getProp:${prop}`); }
      let breadcrumbs = prop.split('.');
      for (let index = 0, len = breadcrumbs.length; index < len; index++) {
        let breadcrumb = breadcrumbs[index];
        if (this.debug) {
          console.log('current breadcrumb', index, breadcrumb, breadcrumbs.length - 1);
        }
        if (index === breadcrumbs.length - 1) {
          if (this.debug) {
            console.log('getting', breadcrumb, currentBranch, currentBranch[breadcrumb]);
            console.groupEnd();
          }
          return currentBranch[breadcrumb];
        }
        currentBranch = currentBranch[breadcrumb];
      }
    },
  
    getGlobal(prop) {
      return this._getProp(prop, this.globalState);
    },
  
    _getStorage(prefix) {
      prefix = this._normalizePrefix(prefix);
      return function get(prop) {
        return this._getProp(`${prefix}.${prop}`);
      }.bind(this);
    },
  
    _unsetProp(prop, currentBranch = this.instancesStates) {
      if (!prop) {
        throw new Error(`Property not found [${prop}]`);
      }
      if(this.debug){ console.groupCollapsed(`elastiganttStore._unsetProp:${prop}`); }
      let breadcrumbs = prop.split('.');
      for (let index = 0, len = breadcrumbs.length; index < len; index++) {
        let breadcrumb = breadcrumbs[index];
        if (this.debug) {
          console.debug('current breadcrumb', index, breadcrumb, breadcrumbs.length - 1);
        }
        if (index === breadcrumbs.length - 1) {
          if (this.debug) {
            console.debug('deleting', breadcrumb);
            console.groupEnd();
          }
          return delete currentBranch[breadcrumb];
        }
        currentBranch = currentBranch[breadcrumb];
      }
    },
  
    unsetGlobal(prop) {
      return this._unsetProp(prop, this.globalState);
    },
  
    _unsetStorage(prefix) {
      prefix = this._normalizePrefix(prefix);
      return function unset(prop) {
        this._unsetProp(`${prefix}.${prop}`);
      }.bind(this);
    },

    getStore(prefix){
      let store = {};
      store.get = this._getStorage(prefix);
      store.set = this._setStorage(prefix);
      store.unset = this._unsetStorage(prefix);
      store.getGlobal = this.getGlobal;
      store.setGlobal = this.setGlobal;
      store.unsetGlobal = this.unsetGlobal;
      return store;
    },

    init(prefix, data = {}){
      data.store = this.getStore(prefix);
      return data;
    },
  
  };

  export {elastiganttStore};