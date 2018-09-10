var Elastigantt = (function () {
  'use strict';

  //
  //
  //
  //
  //
  //
  //
  //
  //

  var script = {
    inject: ['root'],
    data() {
      return {};
    },
    computed: {
      scale: {
        get() {
          return this.root.state.times.timeZoom;
        },
        set(value) {
          this.root.state.times.timeZoom = Number(value);
        }
      },
      height: {
        get() {
          return this.root.state.row.height;
        },
        set(value) {
          this.root.state.row.height = Number(value);
          this.root.calculateTaskListColumnsWidths();
        }
      },
      scope: {
        get() {
          return this.root.state.scope.before;
        },
        set(value) {
          this.root.state.scope.before = Number(value);
          this.root.state.scope.after = Number(value);
        }
      },
      divider: {
        get() {
          return this.root.state.taskList.percent;
        },
        set(value) {
          this.root.state.taskList.percent = Number(value);
          this.root.calculateTaskListColumnsWidths();
        }
      }
    }
  };

  /* script */
              const __vue_script__ = script;
              
  /* template */
  var __vue_render__ = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", { staticClass: "elastigantt__header" }, [
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.scale,
            expression: "scale"
          }
        ],
        attrs: { type: "range", max: "24", min: "2" },
        domProps: { value: _vm.scale },
        on: {
          __r: function($event) {
            _vm.scale = $event.target.value;
          }
        }
      }),
      _vm._v(" "),
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.height,
            expression: "height"
          }
        ],
        attrs: { type: "range", max: "100", min: "6" },
        domProps: { value: _vm.height },
        on: {
          __r: function($event) {
            _vm.height = $event.target.value;
          }
        }
      }),
      _vm._v(" "),
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.scope,
            expression: "scope"
          }
        ],
        attrs: { type: "range", max: "100", min: "0" },
        domProps: { value: _vm.scope },
        on: {
          __r: function($event) {
            _vm.scope = $event.target.value;
          }
        }
      }),
      _vm._v(" "),
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.divider,
            expression: "divider"
          }
        ],
        attrs: { type: "range", max: "100", min: "0" },
        domProps: { value: _vm.divider },
        on: {
          __r: function($event) {
            _vm.divider = $event.target.value;
          }
        }
      }),
      _vm._v(" "),
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.root.state.taskList.display,
            expression: "root.state.taskList.display"
          }
        ],
        attrs: { type: "checkbox" },
        domProps: {
          checked: Array.isArray(_vm.root.state.taskList.display)
            ? _vm._i(_vm.root.state.taskList.display, null) > -1
            : _vm.root.state.taskList.display
        },
        on: {
          change: function($event) {
            var $$a = _vm.root.state.taskList.display,
              $$el = $event.target,
              $$c = $$el.checked ? true : false;
            if (Array.isArray($$a)) {
              var $$v = null,
                $$i = _vm._i($$a, $$v);
              if ($$el.checked) {
                $$i < 0 &&
                  _vm.$set(_vm.root.state.taskList, "display", $$a.concat([$$v]));
              } else {
                $$i > -1 &&
                  _vm.$set(
                    _vm.root.state.taskList,
                    "display",
                    $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                  );
              }
            } else {
              _vm.$set(_vm.root.state.taskList, "display", $$c);
            }
          }
        }
      })
    ])
  };
  var __vue_staticRenderFns__ = [];
  __vue_render__._withStripped = true;

    /* style */
    const __vue_inject_styles__ = undefined;
    /* scoped */
    const __vue_scope_id__ = undefined;
    /* module identifier */
    const __vue_module_identifier__ = undefined;
    /* functional template */
    const __vue_is_functional_template__ = false;
    /* component normalizer */
    function __vue_normalize__(
      template, style, script$$1,
      scope, functional, moduleIdentifier,
      createInjector, createInjectorSSR
    ) {
      const component = (typeof script$$1 === 'function' ? script$$1.options : script$$1) || {};

      // For security concerns, we use only base name in production mode.
      component.__file = "F:\\elastigantt\\src\\components\\Header.vue";

      if (!component.render) {
        component.render = template.render;
        component.staticRenderFns = template.staticRenderFns;
        component._compiled = true;

        if (functional) component.functional = true;
      }

      component._scopeId = scope;

      return component
    }
    /* style inject */
    
    /* style inject SSR */
    

    
    var Header = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  //
  //
  //

  var script$1 = {
    inject: ['root'],
    props: ['column'],
    data() {
      return {};
    },
    computed: {
      getStyle() {
        const state = this.root.state;
        return {
          height: '100%',
          width: root.state.taskList.resizerWidth + 'px'
        };
      }
    }
  };

  /* script */
              const __vue_script__$1 = script$1;
              
  /* template */
  var __vue_render__$1 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", {
      staticClass: "elastigantt__task-list-resizer",
      staticStyle: {}
    })
  };
  var __vue_staticRenderFns__$1 = [];
  __vue_render__$1._withStripped = true;

    /* style */
    const __vue_inject_styles__$1 = undefined;
    /* scoped */
    const __vue_scope_id__$1 = undefined;
    /* module identifier */
    const __vue_module_identifier__$1 = undefined;
    /* functional template */
    const __vue_is_functional_template__$1 = false;
    /* component normalizer */
    function __vue_normalize__$1(
      template, style, script,
      scope, functional, moduleIdentifier,
      createInjector, createInjectorSSR
    ) {
      const component = (typeof script === 'function' ? script.options : script) || {};

      // For security concerns, we use only base name in production mode.
      component.__file = "F:\\elastigantt\\src\\components\\TaskList\\Resizer.vue";

      if (!component.render) {
        component.render = template.render;
        component.staticRenderFns = template.staticRenderFns;
        component._compiled = true;

        if (functional) component.functional = true;
      }

      component._scopeId = scope;

      return component
    }
    /* style inject */
    
    /* style inject SSR */
    

    
    var TaskListResizer = __vue_normalize__$1(
      { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
      __vue_inject_styles__$1,
      __vue_script__$1,
      __vue_scope_id__$1,
      __vue_is_functional_template__$1,
      __vue_module_identifier__$1,
      undefined,
      undefined
    );

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //

  var script$2 = {
    inject: ['root'],
    props: ['tasks'],
    data() {
      const border = 0.5;
      return {
        border,
        borderStyle: {
          'fill': '#ffffffa0',
          'stroke': '#000000',
          'stroke-width': border
        },
        lineOffset: 5,
        lineStyle: {
          'fill': 'transparent',
          'stroke': '#000000',
          'stroke-width': 1,
          'stroke-linecap': 'round'
        }
      };
    },
    computed: {
      allChildren() {
        const children = [];
        this.tasks.forEach(task => {
          task.allChildren.forEach(child => {
            children.push(child);
          });
        });
        return children;
      },
      collapsed() {
        if (this.tasks.length === 0) {
          return false;
        }
        let collapsed = 0;
        for (let i = 0, len = this.tasks.length; i < len; i++) {
          if (this.tasks[i].collapsed) {
            collapsed++;
          }
        }
        return collapsed === this.tasks.length;
      }
    },
    methods: {
      toggle() {
        if (this.allChildren.length === 0) {
          return;
        }
        const collapsed = !this.collapsed;
        this.tasks.forEach(task => {
          task.collapsed = collapsed;
          task.allChildren.forEach(child => {
            let parentsNotCollapsed = child.parents.filter(parent => parent.collapsed === false).length === child.parents.length;
            child.visible = !collapsed;
          });
        });
      }
    }
  };

  /* script */
              const __vue_script__$2 = script$2;
              
  /* template */
  var __vue_render__$2 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "svg",
      {
        attrs: {
          width: _vm.root.state.taskList.expander.size,
          height: _vm.root.state.taskList.expander.size
        }
      },
      [
        _c("rect", {
          style: _vm.root.state.taskList.styles.expander,
          attrs: {
            x: _vm.border,
            y: _vm.border,
            width: _vm.root.state.taskList.expander.size - _vm.border * 2,
            height: _vm.root.state.taskList.expander.size - _vm.border * 2,
            rx: "2",
            ry: "2"
          },
          on: { click: _vm.toggle }
        }),
        _vm._v(" "),
        _vm.allChildren.length
          ? _c("line", {
              style: _vm.lineStyle,
              attrs: {
                x1: _vm.lineOffset,
                y1: _vm.root.state.taskList.expander.size / 2,
                x2: _vm.root.state.taskList.expander.size - _vm.lineOffset,
                y2: _vm.root.state.taskList.expander.size / 2
              },
              on: { click: _vm.toggle }
            })
          : _vm._e(),
        _vm._v(" "),
        _vm.collapsed
          ? _c("line", {
              style: _vm.lineStyle,
              attrs: {
                x1: _vm.root.state.taskList.expander.size / 2,
                y1: _vm.lineOffset,
                x2: _vm.root.state.taskList.expander.size / 2,
                y2: _vm.root.state.taskList.expander.size - _vm.lineOffset
              },
              on: { click: _vm.toggle }
            })
          : _vm._e()
      ]
    )
  };
  var __vue_staticRenderFns__$2 = [];
  __vue_render__$2._withStripped = true;

    /* style */
    const __vue_inject_styles__$2 = undefined;
    /* scoped */
    const __vue_scope_id__$2 = undefined;
    /* module identifier */
    const __vue_module_identifier__$2 = undefined;
    /* functional template */
    const __vue_is_functional_template__$2 = false;
    /* component normalizer */
    function __vue_normalize__$2(
      template, style, script,
      scope, functional, moduleIdentifier,
      createInjector, createInjectorSSR
    ) {
      const component = (typeof script === 'function' ? script.options : script) || {};

      // For security concerns, we use only base name in production mode.
      component.__file = "F:\\elastigantt\\src\\components\\TaskList\\Expander.vue";

      if (!component.render) {
        component.render = template.render;
        component.staticRenderFns = template.staticRenderFns;
        component._compiled = true;

        if (functional) component.functional = true;
      }

      component._scopeId = scope;

      return component
    }
    /* style inject */
    
    /* style inject SSR */
    

    
    var TaskListExpander = __vue_normalize__$2(
      { render: __vue_render__$2, staticRenderFns: __vue_staticRenderFns__$2 },
      __vue_inject_styles__$2,
      __vue_script__$2,
      __vue_scope_id__$2,
      __vue_is_functional_template__$2,
      __vue_module_identifier__$2,
      undefined,
      undefined
    );

  //

  var script$3 = {
    components: {
      'task-list-expander': TaskListExpander,
    },
    inject: ['root'],
    props: ['expanderStyle'],
    data() {
      return {
        resizer: {
          moving: false,
          x: 0
        }
      };
    },
    computed: {
      getStyle() {
        return column => {
          const state = this.root.state;
          return Object.assign({
            'height': (state.calendar.height + state.calendar.styles.column['stroke-width']) + 'px',
            'margin-bottom': state.calendar.gap + 'px',
            'width': column.finalWidth + 'px'
          }, state.taskList.styles.header);
        }
      },
      collapsible() {
        return this.root.state.tasks.filter(task => task.allChildren.length > 0);
      }
    },
    methods: {
      resizerMouseDown(event, column) {
        if (!this.resizerMoving) {
          this.resizer.moving = column;
          this.resizer.x = event.clientX;
          this.resizer.initialWidth = column.width;
        }
      },
      resizerMouseMove(event) {
        if (this.resizer.moving) {
          this.resizer.moving.width = this.resizer.initialWidth + event.clientX - this.resizer.x;
          this.root.calculateTaskListColumnsWidths();
        }
      },
      resizerMouseUp(event) {
        if (this.resizer.moving) {
          this.resizer.moving = false;
          this.root.calculateTaskListColumnsWidths();
        }
      }
    },
    created() {
      this.root.$on('mousemove', this.resizerMouseMove);
      this.root.$on('mouseup', this.resizerMouseUp);
    }
  };

  /* script */
              const __vue_script__$3 = script$3;
              
  /* template */
  var __vue_render__$3 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "div",
      { staticClass: "elastigantt__task-list-header" },
      [
        _c(
          "div",
          {
            staticClass:
              "elastigantt__task-list-header-column elastigantt__task-list-header-column--expander",
            style: _vm.expanderStyle
          },
          [_c("task-list-expander", { attrs: { tasks: _vm.collapsible } })],
          1
        ),
        _vm._v(" "),
        _vm._l(_vm.root.state.taskList.columns, function(column) {
          return _c(
            "div",
            {
              key: column._id,
              staticClass: "elastigantt__task-list-header-column",
              style: _vm.getStyle(column)
            },
            [
              _c(
                "div",
                {
                  staticClass: "elastigantt__task-list-header-label",
                  style: column.styles.label,
                  attrs: { column: column },
                  on: {
                    mouseup: function($event) {
                      _vm.resizerMouseUp($event, column);
                    }
                  }
                },
                [_vm._v(_vm._s(column.label))]
              ),
              _vm._v(" "),
              _c("div", {
                staticClass: "elastigantt__task-list-header-resizer",
                attrs: { column: column },
                on: {
                  mousedown: function($event) {
                    _vm.resizerMouseDown($event, column);
                  }
                }
              })
            ]
          )
        })
      ],
      2
    )
  };
  var __vue_staticRenderFns__$3 = [];
  __vue_render__$3._withStripped = true;

    /* style */
    const __vue_inject_styles__$3 = undefined;
    /* scoped */
    const __vue_scope_id__$3 = undefined;
    /* module identifier */
    const __vue_module_identifier__$3 = undefined;
    /* functional template */
    const __vue_is_functional_template__$3 = false;
    /* component normalizer */
    function __vue_normalize__$3(
      template, style, script,
      scope, functional, moduleIdentifier,
      createInjector, createInjectorSSR
    ) {
      const component = (typeof script === 'function' ? script.options : script) || {};

      // For security concerns, we use only base name in production mode.
      component.__file = "F:\\elastigantt\\src\\components\\TaskList\\TaskListHeader.vue";

      if (!component.render) {
        component.render = template.render;
        component.staticRenderFns = template.staticRenderFns;
        component._compiled = true;

        if (functional) component.functional = true;
      }

      component._scopeId = scope;

      return component
    }
    /* style inject */
    
    /* style inject SSR */
    

    
    var TaskListHeader = __vue_normalize__$3(
      { render: __vue_render__$3, staticRenderFns: __vue_staticRenderFns__$3 },
      __vue_inject_styles__$3,
      __vue_script__$3,
      __vue_scope_id__$3,
      __vue_is_functional_template__$3,
      __vue_module_identifier__$3,
      undefined,
      undefined
    );

  //
  //
  //
  //
  //

  var script$4 = {
    inject: ['root'],
    props: ['column', 'task'],
    data() {
      return {};
    },
  };

  /* script */
              const __vue_script__$4 = script$4;
              
  /* template */
  var __vue_render__$4 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "div",
      {
        staticClass: "elastigantt__task-list-item-column",
        style: _vm.column.style
      },
      [
        _c(
          "div",
          {
            staticClass: "elastigantt__task-list-item-value",
            style: _vm.column.styles.value
          },
          [_vm._v(_vm._s(_vm.task[_vm.column.value]))]
        )
      ]
    )
  };
  var __vue_staticRenderFns__$4 = [];
  __vue_render__$4._withStripped = true;

    /* style */
    const __vue_inject_styles__$4 = undefined;
    /* scoped */
    const __vue_scope_id__$4 = undefined;
    /* module identifier */
    const __vue_module_identifier__$4 = undefined;
    /* functional template */
    const __vue_is_functional_template__$4 = false;
    /* component normalizer */
    function __vue_normalize__$4(
      template, style, script,
      scope, functional, moduleIdentifier,
      createInjector, createInjectorSSR
    ) {
      const component = (typeof script === 'function' ? script.options : script) || {};

      // For security concerns, we use only base name in production mode.
      component.__file = "F:\\elastigantt\\src\\components\\TaskList\\ItemColumn.vue";

      if (!component.render) {
        component.render = template.render;
        component.staticRenderFns = template.staticRenderFns;
        component._compiled = true;

        if (functional) component.functional = true;
      }

      component._scopeId = scope;

      return component
    }
    /* style inject */
    
    /* style inject SSR */
    

    
    var ItemColumn = __vue_normalize__$4(
      { render: __vue_render__$4, staticRenderFns: __vue_staticRenderFns__$4 },
      __vue_inject_styles__$4,
      __vue_script__$4,
      __vue_scope_id__$4,
      __vue_is_functional_template__$4,
      __vue_module_identifier__$4,
      undefined,
      undefined
    );

  //

  var script$5 = {
    components: {
      'task-list-expander': TaskListExpander,
      'item-column': ItemColumn
    },
    inject: ['root'],
    props: ['task', 'expanderStyle'],
    data() {
      return {};
    },
  };

  /* script */
              const __vue_script__$5 = script$5;
              
  /* template */
  var __vue_render__$5 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "div",
      {
        staticClass: "elastigantt__task-list-item",
        style: _vm.root.state.taskList.styles.row
      },
      [
        _c(
          "div",
          {
            staticClass:
              "elastigantt__task-list-item-column elastigantt__task-list-item-column--expander",
            style: _vm.expanderStyle
          },
          [_c("task-list-expander", { attrs: { tasks: [_vm.task] } })],
          1
        ),
        _vm._v(" "),
        _vm._l(_vm.root.state.taskList.columns, function(column) {
          return _c("item-column", {
            key: column._id,
            attrs: { column: column, task: _vm.task }
          })
        })
      ],
      2
    )
  };
  var __vue_staticRenderFns__$5 = [];
  __vue_render__$5._withStripped = true;

    /* style */
    const __vue_inject_styles__$5 = undefined;
    /* scoped */
    const __vue_scope_id__$5 = undefined;
    /* module identifier */
    const __vue_module_identifier__$5 = undefined;
    /* functional template */
    const __vue_is_functional_template__$5 = false;
    /* component normalizer */
    function __vue_normalize__$5(
      template, style, script,
      scope, functional, moduleIdentifier,
      createInjector, createInjectorSSR
    ) {
      const component = (typeof script === 'function' ? script.options : script) || {};

      // For security concerns, we use only base name in production mode.
      component.__file = "F:\\elastigantt\\src\\components\\TaskList\\TaskListItem.vue";

      if (!component.render) {
        component.render = template.render;
        component.staticRenderFns = template.staticRenderFns;
        component._compiled = true;

        if (functional) component.functional = true;
      }

      component._scopeId = scope;

      return component
    }
    /* style inject */
    
    /* style inject SSR */
    

    
    var TaskListItem = __vue_normalize__$5(
      { render: __vue_render__$5, staticRenderFns: __vue_staticRenderFns__$5 },
      __vue_inject_styles__$5,
      __vue_script__$5,
      __vue_scope_id__$5,
      __vue_is_functional_template__$5,
      __vue_module_identifier__$5,
      undefined,
      undefined
    );

  //

  var script$6 = {
    components: {
      'task-list-resizer': TaskListResizer,
      'task-list-header': TaskListHeader,
      'task-list-item': TaskListItem,
    },
    inject: ['root'],
    data() {
      return {};
    },
    computed: {
      getHeaderExpanderStyle() {
        const state = this.root.state;
        const padding = this.root.getMaximalLevel() * state.taskList.expander.padding;
        return Object.assign({}, state.taskList.styles.header, {
          'width': (state.taskList.expander.columnWidth + state.calendar.styles.column['stroke-width'] + padding + state.taskList.expander.margin * 2) + 'px',
          'height': state.calendar.height + state.calendar.styles.column['stroke-width'] + 'px',
          'margin-bottom': state.calendar.gap + 'px',
          'padding-right': padding + state.taskList.expander.margin + 'px',
          'padding-left': state.taskList.expander.margin + 'px',
          'margin': '0px',
        });
      },
      getListExpanderStyle() {
        return task => {
          const state = this.root.state;
          const padding = (task.parents.length - 1) * state.taskList.expander.padding;
          const fullPadding = this.root.getMaximalLevel() * state.taskList.expander.padding;
          let height = state.row.height + (state.horizontalGrid.gap * 2) - state.horizontalGrid.strokeWidth;
          let width = state.taskList.expander.columnWidth + state.calendar.styles.column['stroke-width'] + fullPadding + state.taskList.expander.margin * 2;
          const style = {
            'width': width + 'px',
            'height': height + 'px',
            'border-color': '#00000010',
            'padding-left': padding + state.taskList.expander.margin + 'px',
            'padding-right': state.taskList.expander.margin + 'px',
            'margin': 'auto 0px',
          };
          //console.log('style', style);
          return style;
        }
      }
    }
  };

  /* script */
              const __vue_script__$6 = script$6;
              
  /* template */
  var __vue_render__$6 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _vm.root.state.taskList.display
      ? _c(
          "foreignObject",
          {
            staticClass: "elastigantt__task-list-object",
            attrs: { x: "0", y: "0", width: "100%", height: "100%" }
          },
          [
            _c(
              "div",
              {
                staticClass: "elastigantt__task-list-container",
                attrs: { xmlns: "http://www.w3.org/1999/xhtml" }
              },
              [
                _c("div", {
                  domProps: { innerHTML: _vm._s(_vm.root.state.defs.join("")) }
                }),
                _vm._v(" "),
                _c("task-list-resizer"),
                _vm._v(" "),
                _c("task-list-header", {
                  attrs: { "expander-style": _vm.getHeaderExpanderStyle }
                }),
                _vm._v(" "),
                _vm._l(_vm.root.visibleTasks, function(task) {
                  return _c("task-list-item", {
                    key: task.id,
                    attrs: {
                      task: task,
                      "expander-style": _vm.getListExpanderStyle(task)
                    }
                  })
                })
              ],
              2
            )
          ]
        )
      : _vm._e()
  };
  var __vue_staticRenderFns__$6 = [];
  __vue_render__$6._withStripped = true;

    /* style */
    const __vue_inject_styles__$6 = undefined;
    /* scoped */
    const __vue_scope_id__$6 = undefined;
    /* module identifier */
    const __vue_module_identifier__$6 = undefined;
    /* functional template */
    const __vue_is_functional_template__$6 = false;
    /* component normalizer */
    function __vue_normalize__$6(
      template, style, script,
      scope, functional, moduleIdentifier,
      createInjector, createInjectorSSR
    ) {
      const component = (typeof script === 'function' ? script.options : script) || {};

      // For security concerns, we use only base name in production mode.
      component.__file = "F:\\elastigantt\\src\\components\\TaskList\\TaskList.vue";

      if (!component.render) {
        component.render = template.render;
        component.staticRenderFns = template.staticRenderFns;
        component._compiled = true;

        if (functional) component.functional = true;
      }

      component._scopeId = scope;

      return component
    }
    /* style inject */
    
    /* style inject SSR */
    

    
    var TaskList = __vue_normalize__$6(
      { render: __vue_render__$6, staticRenderFns: __vue_staticRenderFns__$6 },
      __vue_inject_styles__$6,
      __vue_script__$6,
      __vue_scope_id__$6,
      __vue_is_functional_template__$6,
      __vue_module_identifier__$6,
      undefined,
      undefined
    );

  //
  //
  //
  //
  //
  //

  var script$7 = {
    inject: ['root'],
    data() {
      return {};
    },
    computed: {
      getVStyle() {
        return this.root.state.verticalGrid.style;
      },
      getHStyle() {
        return this.root.state.horizontalGrid.style;
      },
      verticalLines() {
        let lines = [];
        const state = this.root.state;
        for (let step = 0; step <= state.times.steps; step++) {
          let x = step * state.times.stepPx + state.verticalGrid.strokeWidth / 2;
          lines.push({
            key: step,
            x1: x,
            y1: state.calendar.height + state.calendar.styles.column['stroke-width'] + state.calendar.gap,
            x2: x,
            y2: state.calendar.height + state.calendar.styles.column['stroke-width'] + state.calendar.gap + (state.tasks.length * (state.row.height + state.horizontalGrid.gap * 2)) + state.horizontalGrid.strokeWidth
          });
        }
        return state.verticalGrid.lines = lines;
      },
      horizontalLines() {
        let lines = [];
        const state = this.root.state;
        let tasks = this.root.visibleTasks;
        for (let index = 0, len = tasks.length; index <= len; index++) {
          lines.push({
            key: 'hl' + index,
            x1: 0,
            y1: index * (state.row.height + state.horizontalGrid.gap * 2) + state.calendar.height + state.calendar.styles.column['stroke-width'] + state.calendar.gap + state.horizontalGrid.strokeWidth / 2,
            x2: state.times.steps * state.times.stepPx + state.verticalGrid.strokeWidth,
            y2: index * (state.row.height + state.horizontalGrid.gap * 2) + state.calendar.height + state.calendar.styles.column['stroke-width'] + state.calendar.gap + state.horizontalGrid.strokeWidth / 2
          });
        }
        return state.horizontalGrid.lines = lines;
      }
    }
  };

  /* script */
              const __vue_script__$7 = script$7;
              
  /* template */
  var __vue_render__$7 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "g",
      [
        _vm._l(_vm.horizontalLines, function(line, index) {
          return _c("line", {
            key: line.key,
            staticClass: "elastigantt__grid-horizontal-line",
            style: _vm.getHStyle,
            attrs: { x1: line.x1, y1: line.y1, x2: line.x2, y2: line.y2 }
          })
        }),
        _vm._v(" "),
        _vm._l(_vm.verticalLines, function(line, index) {
          return _c("line", {
            key: line.key,
            staticClass: "elastigantt__grid-vertical-line",
            style: _vm.getVStyle,
            attrs: { x1: line.x1, y1: line.y1, x2: line.x2, y2: line.y2 }
          })
        })
      ],
      2
    )
  };
  var __vue_staticRenderFns__$7 = [];
  __vue_render__$7._withStripped = true;

    /* style */
    const __vue_inject_styles__$7 = undefined;
    /* scoped */
    const __vue_scope_id__$7 = undefined;
    /* module identifier */
    const __vue_module_identifier__$7 = undefined;
    /* functional template */
    const __vue_is_functional_template__$7 = false;
    /* component normalizer */
    function __vue_normalize__$7(
      template, style, script,
      scope, functional, moduleIdentifier,
      createInjector, createInjectorSSR
    ) {
      const component = (typeof script === 'function' ? script.options : script) || {};

      // For security concerns, we use only base name in production mode.
      component.__file = "F:\\elastigantt\\src\\components\\Grid\\Grid.vue";

      if (!component.render) {
        component.render = template.render;
        component.staticRenderFns = template.staticRenderFns;
        component._compiled = true;

        if (functional) component.functional = true;
      }

      component._scopeId = scope;

      return component
    }
    /* style inject */
    
    /* style inject SSR */
    

    
    var Grid = __vue_normalize__$7(
      { render: __vue_render__$7, staticRenderFns: __vue_staticRenderFns__$7 },
      __vue_inject_styles__$7,
      __vue_script__$7,
      __vue_scope_id__$7,
      __vue_is_functional_template__$7,
      __vue_module_identifier__$7,
      undefined,
      undefined
    );

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //

  var script$8 = {
    inject: ['root'],
    props: ['item'],
    data() {
      return {};
    },
    computed: {
      getTextX() {
        return this.item.x + this.item.width / 2;
      },
      getTextY() {
        return this.item.y + this.item.height / 2;
      }
    }
  };

  /* script */
              const __vue_script__$8 = script$8;
              
  /* template */
  var __vue_render__$8 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("g", { staticClass: "elastigantt__calendar-row-group" }, [
      _c("rect", {
        staticClass: "elastigantt__calendar-row",
        style: _vm.root.state.calendar.styles.row,
        attrs: {
          x: _vm.item.x,
          y: _vm.item.y,
          width: _vm.item.width,
          height: _vm.item.height
        }
      }),
      _vm._v(" "),
      _c(
        "text",
        {
          style: _vm.root.state.calendar.styles.text,
          attrs: {
            x: _vm.getTextX,
            y: _vm.getTextY,
            "alignment-baseline": "middle",
            "text-anchor": "middle"
          }
        },
        [_vm._v(_vm._s(_vm.item.label))]
      )
    ])
  };
  var __vue_staticRenderFns__$8 = [];
  __vue_render__$8._withStripped = true;

    /* style */
    const __vue_inject_styles__$8 = undefined;
    /* scoped */
    const __vue_scope_id__$8 = undefined;
    /* module identifier */
    const __vue_module_identifier__$8 = undefined;
    /* functional template */
    const __vue_is_functional_template__$8 = false;
    /* component normalizer */
    function __vue_normalize__$8(
      template, style, script,
      scope, functional, moduleIdentifier,
      createInjector, createInjectorSSR
    ) {
      const component = (typeof script === 'function' ? script.options : script) || {};

      // For security concerns, we use only base name in production mode.
      component.__file = "F:\\elastigantt\\src\\components\\Calendar\\CalendarRow.vue";

      if (!component.render) {
        component.render = template.render;
        component.staticRenderFns = template.staticRenderFns;
        component._compiled = true;

        if (functional) component.functional = true;
      }

      component._scopeId = scope;

      return component
    }
    /* style inject */
    
    /* style inject SSR */
    

    
    var CalendarRow = __vue_normalize__$8(
      { render: __vue_render__$8, staticRenderFns: __vue_staticRenderFns__$8 },
      __vue_inject_styles__$8,
      __vue_script__$8,
      __vue_scope_id__$8,
      __vue_is_functional_template__$8,
      __vue_module_identifier__$8,
      undefined,
      undefined
    );

  //
  var script$9 = {
    components: {
      'calendar-row': CalendarRow
    },
    inject: ['root'],
    data() {
      return {
        cache: {}
      };
    },
    methods: {
      howManyHoursFit(current = 24, currentRecurrection = 1) {
        let max = {
          short: 0,
          medium: 0,
          long: 0
        };
        const state = this.root.state;
        state.ctx.font = state.calendar.day.fontSize + ' ' + state.calendar.fontFamily;
        let firstDate = dayjs(state.times.firstDate);
        for (let i = 0; i < current; i++) {
          let currentDate = firstDate.add(i, 'hours').toDate();
          let textWidth = {
            short: state.ctx.measureText(state.calendar.hour.format.short(currentDate)).width,
            medium: state.ctx.measureText(state.calendar.hour.format.medium(currentDate)).width,
            long: state.ctx.measureText(state.calendar.hour.format.long(currentDate)).width
          };
          if (textWidth.short >= max.short) {
            max.short = textWidth.short;
          }
          if (textWidth.medium >= max.medium) {
            max.medium = textWidth.medium;
          }
          if (textWidth.long >= max.long) {
            max.long = textWidth.long;
          }
        }
        let cellWidth = state.times.stepPx / current - state.calendar.styles.column['stroke-width'] - 2;
        if (current > 1) {
          if (max.short > cellWidth) {
            currentRecurrection++;
            return this.howManyHoursFit(Math.ceil(current / currentRecurrection), currentRecurrection);
          }
        }
        if (currentRecurrection < 3) {
          if (max.long <= cellWidth) {
            return {
              count: current,
              type: 'long'
            };
          }
          if (max.medium <= cellWidth) {
            return {
              count: current,
              type: 'medium'
            };
          }
        }
        if (max.short <= cellWidth && current > 1) {
          return {
            count: current,
            type: 'short'
          };
        }
        return {
          count: 0,
          type: 'short'
        };
      },
      howManyDaysFit(current = this.root.state.times.steps, currentRecurrection = 1) {
        let max = {
          short: 0,
          medium: 0,
          long: 0
        };
        const state = this.root.state;
        state.ctx.font = state.calendar.day.fontSize + ' ' + state.calendar.fontFamily;
        let firstDate = dayjs(state.times.firstDate);
        for (let i = 0; i < current; i++) {
          let currentDate = firstDate.add(i, 'days').toDate();
          let textWidth = {
            short: state.ctx.measureText(state.calendar.day.format.short(currentDate)).width,
            medium: state.ctx.measureText(state.calendar.day.format.medium(currentDate)).width,
            long: state.ctx.measureText(state.calendar.day.format.long(currentDate)).width
          };
          if (textWidth.short >= max.short) {
            max.short = textWidth.short;
          }
          if (textWidth.medium >= max.medium) {
            max.medium = textWidth.medium;
          }
          if (textWidth.long >= max.long) {
            max.long = textWidth.long;
          }
        }
        let cellWidth = state.times.totalViewDurationPx / current - state.calendar.styles.column['stroke-width'] - 2;
        if (current > 1) {
          if (max.short > cellWidth) {
            currentRecurrection++;
            return this.howManyDaysFit(Math.ceil(current / currentRecurrection), currentRecurrection);
          }
        }
        if (max.long <= cellWidth) {
          return {
            count: current,
            type: 'long'
          };
        }
        if (max.medium <= cellWidth) {
          return {
            count: current,
            type: 'medium'
          };
        }
        if (max.short <= cellWidth && current > 1) {
          return {
            count: current,
            type: 'short'
          };
        }
        return {
          cunt: 0,
          type: 'short'
        };
      },
      hourTextStyle() {
        return 'font-family:' + this.root.state.calendar.hour.fontFamily + ';font-size:' + this.root.state.calendar.hour.fontSize;
      },
      dayTextStyle() {
        return 'font-family:' + this.root.state.calendar.day.fontFamily + ';font-size:' + this.root.state.calendar.day.fontSize;
      }
    },
    computed: {
      getX() {
        return this.root.state.calendar.styles.column['stroke-width'] / 2;
      },
      getY() {
        return this.root.state.calendar.styles.column['stroke-width'] / 2;
      },
      getWidth() {
        let width = this.root.state.width - this.root.state.calendar.styles.column['stroke-width'];
        return width;
      },

      hours() {
        let hours = [];
        let hoursCount = this.howManyHoursFit();
        let hourStep = 24 / hoursCount.count;
        let state = this.root.state;
        for (let i = 0, len = state.times.steps * hoursCount.count; i < len; i++) {
          const date = new Date(state.times.firstTime + i * hourStep * 60 * 60 * 1000);
          hours.push({
            key: 'h' + i,
            x: state.calendar.styles.column['stroke-width'] / 2 + i * state.times.stepPx / hoursCount.count,
            y: state.calendar.styles.column['stroke-width'] / 2 + state.calendar.day.height + state.calendar.month.height,
            width: state.times.stepPx / hoursCount.count,
            height: state.calendar.hour.height,
            label: state.calendar.hour.format[hoursCount.type](date)
          });
        }
        return state.calendar.hours = hours;
      },
      days() {
        let state = this.root.state;
        let days = [];
        let daysCount = this.howManyDaysFit();
        let dayStep = state.times.steps / daysCount.count;
        for (let i = 0, len = daysCount.count; i < len; i++) {
          const date = new Date(state.times.firstTime + i * dayStep * 24 * 60 * 60 * 1000);
          days.push({
            key: 'd' + i,
            x: state.calendar.styles.column['stroke-width'] / 2 + i * state.times.totalViewDurationPx / daysCount.count,
            y: state.calendar.styles.column['stroke-width'] / 2 + state.calendar.month.height,
            width: state.times.totalViewDurationPx / daysCount.count,
            height: state.calendar.day.height,
            label: state.calendar.day.format[daysCount.type](date)
          });
        }
        return state.calendar.days = days;
      },
      months() {
        let state = this.root.state;
        let months = [];
        let firstDate = state.times.firstDate;
        let lastDate = state.times.lastDate;
        let steps = state.times.steps;
        let currentDate = dayjs(state.times.firstDate);
        let currentMonth = currentDate.month();
        let currentDays = 0;
        let monthDays = [];
        let currentDateObj = {
          date: currentDate.clone().toDate(),
          days: 0
        };
        for (let i = 0; i < steps; i++) {
          currentDays++;
          currentDate = currentDate.clone().add(1, 'days');
          if (currentDate.month() !== currentMonth) {
            currentMonth = currentDate.month();
            currentDateObj.days = currentDays;
            monthDays.push(currentDateObj);
            currentDateObj = {
              date: currentDate.clone().toDate(),
              days: 0
            };
            currentDays = 0;
          }
        }
        if (currentDays) {
          currentDateObj.days = currentDays;
          monthDays.push(currentDateObj);
        }
        let currentOffset = state.calendar.styles.column['stroke-width'] / 2;
        for (let i = 0, len = monthDays.length; i < len; i++) {
          let days = monthDays[i].days;
          let date = monthDays[i].date;
          let width = state.times.stepPx * days;
          let format = 'long';
          if (state.ctx.measureText(state.calendar.month.format[format](date)).width > width) {
            format = 'medium';
            if (state.ctx.measureText(state.calendar.month.format[format](date)).width > width) {
              format = 'short';
            }
          }        months.push({
            key: 'm' + i,
            x: currentOffset,
            y: state.calendar.styles.column['stroke-width'] / 2,
            width: width,
            height: state.calendar.day.height,
            label: state.calendar.month.format[format](date)
          });
          currentOffset += width;
        }
        return state.calendar.months = months;
      }
    }
  };

  /* script */
              const __vue_script__$9 = script$9;
              
  /* template */
  var __vue_render__$9 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "g",
      { staticClass: "elastigantt__calendar-group" },
      [
        _c(
          "foreignObject",
          {
            attrs: {
              x: _vm.getX,
              y: _vm.getY,
              width: _vm.getWidth,
              height: _vm.root.state.calendar.height
            }
          },
          [
            _c("div", {
              staticClass: "elastigantt__calendar",
              style: _vm.root.state.calendar.styles.wrapper,
              attrs: { xmlns: "http://www.w3.org/1999/xhtml" }
            })
          ]
        ),
        _vm._v(" "),
        _vm._l(_vm.months, function(month, index) {
          return _c("calendar-row", { key: month.key, attrs: { item: month } })
        }),
        _vm._v(" "),
        _vm._l(_vm.days, function(day, index) {
          return _c("calendar-row", { key: day.key, attrs: { item: day } })
        }),
        _vm._v(" "),
        _vm._l(_vm.hours, function(hour, index) {
          return _c("calendar-row", { key: hour.key, attrs: { item: hour } })
        })
      ],
      2
    )
  };
  var __vue_staticRenderFns__$9 = [];
  __vue_render__$9._withStripped = true;

    /* style */
    const __vue_inject_styles__$9 = undefined;
    /* scoped */
    const __vue_scope_id__$9 = undefined;
    /* module identifier */
    const __vue_module_identifier__$9 = undefined;
    /* functional template */
    const __vue_is_functional_template__$9 = false;
    /* component normalizer */
    function __vue_normalize__$9(
      template, style, script,
      scope, functional, moduleIdentifier,
      createInjector, createInjectorSSR
    ) {
      const component = (typeof script === 'function' ? script.options : script) || {};

      // For security concerns, we use only base name in production mode.
      component.__file = "F:\\elastigantt\\src\\components\\Calendar\\Calendar.vue";

      if (!component.render) {
        component.render = template.render;
        component.staticRenderFns = template.staticRenderFns;
        component._compiled = true;

        if (functional) component.functional = true;
      }

      component._scopeId = scope;

      return component
    }
    /* style inject */
    
    /* style inject SSR */
    

    
    var Calendar = __vue_normalize__$9(
      { render: __vue_render__$9, staticRenderFns: __vue_staticRenderFns__$9 },
      __vue_inject_styles__$9,
      __vue_script__$9,
      __vue_scope_id__$9,
      __vue_is_functional_template__$9,
      __vue_module_identifier__$9,
      undefined,
      undefined
    );

  //
  //
  //
  //
  //
  //
  //
  //

  var script$a = {
    inject: ['root'],
    props: ['tasks'],
    data() {
      return {};
    },
    methods: {
      getPoints(fromTaskId, toTaskId) {
        const state = this.root.state;
        const fromTask = this.root.getTask(fromTaskId);
        const toTask = this.root.getTask(toTaskId);
        if (!toTask.visible || !fromTask.visible) {
          return '';
        }
        const startX = fromTask.x + fromTask.width;
        const startY = fromTask.y + fromTask.height / 2;
        const stopX = toTask.x;
        const stopY = toTask.y + toTask.height / 2;
        const distanceX = stopX - startX;
        let distanceY;
        let yMultiplier = 1;
        if (stopY >= startY) {
          distanceY = stopY - startY;
        } else {
          distanceY = startY - stopY;
          yMultiplier = -1;
        }
        const offset = 10;
        const roundness = 4;
        const isBefore = distanceX <= offset + roundness;
        let points = `M ${startX} ${startY}
          L ${startX + offset},${startY} `;
        if (isBefore) {
          points +=
            `Q ${startX + offset + roundness},${startY} ${startX + offset + roundness},${startY + roundness * yMultiplier}
            L ${startX + offset + roundness},${startY + (distanceY * yMultiplier) / 2 - (roundness * yMultiplier)}
            Q ${startX + offset + roundness},${startY + (distanceY * yMultiplier) / 2} ${startX + offset},${startY + (distanceY * yMultiplier) / 2}
            L ${startX - offset + distanceX},${startY + (distanceY * yMultiplier) / 2}
            Q ${startX - offset + distanceX - roundness},${startY + (distanceY * yMultiplier) / 2} ${startX - offset + distanceX - roundness},${startY + (distanceY * yMultiplier) / 2 + (roundness * yMultiplier)}
            L ${startX - offset + distanceX - roundness},${stopY - roundness * yMultiplier}
            Q ${startX - offset + distanceX - roundness},${stopY} ${startX - offset + distanceX},${stopY}
            L ${stopX},${stopY}`;
        } else {
          points +=
            `L ${startX + distanceX / 2 - roundness},${startY}
            Q ${startX + distanceX / 2},${startY} ${startX + distanceX / 2},${startY + roundness * yMultiplier}
            L ${startX + distanceX / 2},${stopY - roundness * yMultiplier}
            Q ${startX + distanceX / 2},${stopY} ${startX + distanceX / 2 + roundness},${stopY}
            L ${stopX},${stopY}`;
        }
        return points;
      }
    },
    computed: {
      dependencyTasks() {
        return this.tasks.filter(task => typeof task.dependentOn !== 'undefined').map(task => {
          task.dependencyLines = task.dependentOn.map(id => {
            return {
              points: this.getPoints(id, task.id)
            };
          });
          return task;
        });
      }
    }
  };

  /* script */
              const __vue_script__$a = script$a;
              
  /* template */
  var __vue_render__$a = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "g",
      { staticClass: "elastigantt__tree-dependency-lines-container" },
      _vm._l(_vm.dependencyTasks, function(task) {
        return _c(
          "g",
          { key: task.id, attrs: { task: task } },
          _vm._l(task.dependencyLines, function(dependencyLine) {
            return _c("path", {
              key: dependencyLine.id,
              style: _vm.root.state.dependencyLines.style,
              attrs: { task: task, d: dependencyLine.points }
            })
          })
        )
      })
    )
  };
  var __vue_staticRenderFns__$a = [];
  __vue_render__$a._withStripped = true;

    /* style */
    const __vue_inject_styles__$a = undefined;
    /* scoped */
    const __vue_scope_id__$a = undefined;
    /* module identifier */
    const __vue_module_identifier__$a = undefined;
    /* functional template */
    const __vue_is_functional_template__$a = false;
    /* component normalizer */
    function __vue_normalize__$a(
      template, style, script,
      scope, functional, moduleIdentifier,
      createInjector, createInjectorSSR
    ) {
      const component = (typeof script === 'function' ? script.options : script) || {};

      // For security concerns, we use only base name in production mode.
      component.__file = "F:\\elastigantt\\src\\components\\Tree\\DependencyLines.vue";

      if (!component.render) {
        component.render = template.render;
        component.staticRenderFns = template.staticRenderFns;
        component._compiled = true;

        if (functional) component.functional = true;
      }

      component._scopeId = scope;

      return component
    }
    /* style inject */
    
    /* style inject SSR */
    

    
    var DependencyLines = __vue_normalize__$a(
      { render: __vue_render__$a, staticRenderFns: __vue_staticRenderFns__$a },
      __vue_inject_styles__$a,
      __vue_script__$a,
      __vue_scope_id__$a,
      __vue_is_functional_template__$a,
      __vue_module_identifier__$a,
      undefined,
      undefined
    );

  //
  //
  //
  //
  //
  //

  var script$b = {
    inject: ['root'],
    props: ['task'],
    data() {
      return {};
    },
    computed: {
      getWidth() {
        const textStyle = this.root.state.treeText.styles.text;
        this.root.state.ctx.font = `${textStyle['font-weight']} ${textStyle['font-size']} ${textStyle['font-family']}`;
        const textWidth = this.root.state.ctx.measureText(this.task.label).width;
        return textWidth + this.root.state.treeText.xPadding * 2;
      }
    }
  };

  /* script */
              const __vue_script__$b = script$b;
              
  /* template */
  var __vue_render__$b = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "svg",
      {
        attrs: {
          x: _vm.task.x + _vm.task.width + _vm.root.state.treeText.offset,
          y: _vm.task.y,
          width: _vm.getWidth,
          height: _vm.task.height
        }
      },
      [
        _c("rect", {
          style: _vm.root.state.treeText.styles.background,
          attrs: { x: "0", y: "0", width: "100%", height: "100%" }
        }),
        _vm._v(" "),
        _c(
          "text",
          {
            style: _vm.root.state.treeText.styles.text,
            attrs: {
              x: _vm.root.state.treeText.xPadding,
              y: "50%",
              "alignment-baseline": "middle"
            }
          },
          [_vm._v(_vm._s(_vm.task.label))]
        )
      ]
    )
  };
  var __vue_staticRenderFns__$b = [];
  __vue_render__$b._withStripped = true;

    /* style */
    const __vue_inject_styles__$b = undefined;
    /* scoped */
    const __vue_scope_id__$b = undefined;
    /* module identifier */
    const __vue_module_identifier__$b = undefined;
    /* functional template */
    const __vue_is_functional_template__$b = false;
    /* component normalizer */
    function __vue_normalize__$b(
      template, style, script,
      scope, functional, moduleIdentifier,
      createInjector, createInjectorSSR
    ) {
      const component = (typeof script === 'function' ? script.options : script) || {};

      // For security concerns, we use only base name in production mode.
      component.__file = "F:\\elastigantt\\src\\components\\Tree\\Text.vue";

      if (!component.render) {
        component.render = template.render;
        component.staticRenderFns = template.staticRenderFns;
        component._compiled = true;

        if (functional) component.functional = true;
      }

      component._scopeId = scope;

      return component
    }
    /* style inject */
    
    /* style inject SSR */
    

    
    var TreeText = __vue_normalize__$b(
      { render: __vue_render__$b, staticRenderFns: __vue_staticRenderFns__$b },
      __vue_inject_styles__$b,
      __vue_script__$b,
      __vue_scope_id__$b,
      __vue_is_functional_template__$b,
      __vue_module_identifier__$b,
      undefined,
      undefined
    );

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //

  var script$c = {
    inject: ['root'],
    props: ['task'],
    data() {
      return {};
    },
    computed: {
      getX() {
        const state = this.root.state;
        this.root.state.ctx.font = `${root.state.info.fontWeight} ${root.state.info.fontSize} ${root.state.info.fontFamily}`;
        const textWidth = this.root.state.ctx.measureText(this.task.label).width / 2 + 10;
        return this.task.x + this.task.width / 2 - textWidth;
      },
      getWidth() {
        return this.root.state.ctx.measureText(this.task.label).width + 20;
      },
      getTextStyle() {
        let state = this.root.state;
        return `${root.state.info.textStyle};font-family:${root.state.info.fontFamily};font-size:${
            root.state.info.fontSize};font-weight:${root.state.info.fontWeight};`;
      }
    }
  };

  /* script */
              const __vue_script__$c = script$c;
              
  /* template */
  var __vue_render__$c = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "svg",
      {
        staticClass: "elastigantt__info",
        attrs: {
          x: _vm.getX,
          y: _vm.task.y,
          width: _vm.getWidth,
          height: _vm.root.state.row.height,
          xmlns: "http://www.w3.org/2000/svg"
        }
      },
      [
        _c("rect", {
          style: _vm.root.state.info.style,
          attrs: { x: "0", y: "0", width: "100%", height: "100%" }
        }),
        _vm._v(" "),
        _c(
          "text",
          {
            style: _vm.getTextStyle,
            attrs: {
              x: "50%",
              y: "50%",
              "text-anchor": "middle",
              "alignment-baseline": "middle"
            }
          },
          [_vm._v(_vm._s(_vm.task.label))]
        )
      ]
    )
  };
  var __vue_staticRenderFns__$c = [];
  __vue_render__$c._withStripped = true;

    /* style */
    const __vue_inject_styles__$c = undefined;
    /* scoped */
    const __vue_scope_id__$c = undefined;
    /* module identifier */
    const __vue_module_identifier__$c = undefined;
    /* functional template */
    const __vue_is_functional_template__$c = false;
    /* component normalizer */
    function __vue_normalize__$c(
      template, style, script,
      scope, functional, moduleIdentifier,
      createInjector, createInjectorSSR
    ) {
      const component = (typeof script === 'function' ? script.options : script) || {};

      // For security concerns, we use only base name in production mode.
      component.__file = "F:\\elastigantt\\src\\components\\Tree\\Info.vue";

      if (!component.render) {
        component.render = template.render;
        component.staticRenderFns = template.staticRenderFns;
        component._compiled = true;

        if (functional) component.functional = true;
      }

      component._scopeId = scope;

      return component
    }
    /* style inject */
    
    /* style inject SSR */
    

    
    var Info = __vue_normalize__$c(
      { render: __vue_render__$c, staticRenderFns: __vue_staticRenderFns__$c },
      __vue_inject_styles__$c,
      __vue_script__$c,
      __vue_scope_id__$c,
      __vue_is_functional_template__$c,
      __vue_module_identifier__$c,
      undefined,
      undefined
    );

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //

  var script$d = {
    inject: ['root'],
    props: ['task'],
    data() {
      return {};
    },
    computed: {
      getProgressWidth() {
        return this.task.progress + '%';
      },
      getLinePoints() {
        const start = this.task.width / 100 * this.task.progress;
        return `M ${start} 0 L ${start} ${this.task.height}`;
      },
      getLineStyle() {
        return {
          stroke: this.root.state.row.styles.bar.stroke + 'a0',
          'stroke-width': this.root.state.row.styles.bar['stroke-width'] / 2
        };
      }
    }
  };

  /* script */
              const __vue_script__$d = script$d;
              
  /* template */
  var __vue_render__$d = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("g", [
      _c("defs", [
        _c(
          "pattern",
          {
            attrs: {
              id: "diagonalHatch",
              width: _vm.root.state.progress.width,
              height: _vm.root.state.progress.width,
              patternTransform: "rotate(45 0 0)",
              patternUnits: "userSpaceOnUse"
            }
          },
          [
            _c("line", {
              style: _vm.root.state.progress.styles.line,
              attrs: {
                x1: "0",
                y1: "0",
                x2: "0",
                y2: _vm.root.state.progress.width
              }
            })
          ]
        )
      ]),
      _vm._v(" "),
      _c("rect", {
        style: _vm.root.state.progress.styles.bar,
        attrs: {
          x: _vm.getProgressWidth,
          y: "0",
          width: 100 - _vm.task.progress + "%",
          height: "100%"
        }
      }),
      _vm._v(" "),
      _c("path", { style: _vm.getLineStyle, attrs: { d: _vm.getLinePoints } })
    ])
  };
  var __vue_staticRenderFns__$d = [];
  __vue_render__$d._withStripped = true;

    /* style */
    const __vue_inject_styles__$d = undefined;
    /* scoped */
    const __vue_scope_id__$d = undefined;
    /* module identifier */
    const __vue_module_identifier__$d = undefined;
    /* functional template */
    const __vue_is_functional_template__$d = false;
    /* component normalizer */
    function __vue_normalize__$d(
      template, style, script,
      scope, functional, moduleIdentifier,
      createInjector, createInjectorSSR
    ) {
      const component = (typeof script === 'function' ? script.options : script) || {};

      // For security concerns, we use only base name in production mode.
      component.__file = "F:\\elastigantt\\src\\components\\Tree\\ProgressBar.vue";

      if (!component.render) {
        component.render = template.render;
        component.staticRenderFns = template.staticRenderFns;
        component._compiled = true;

        if (functional) component.functional = true;
      }

      component._scopeId = scope;

      return component
    }
    /* style inject */
    
    /* style inject SSR */
    

    
    var ProgressBar = __vue_normalize__$d(
      { render: __vue_render__$d, staticRenderFns: __vue_staticRenderFns__$d },
      __vue_inject_styles__$d,
      __vue_script__$d,
      __vue_scope_id__$d,
      __vue_is_functional_template__$d,
      __vue_module_identifier__$d,
      undefined,
      undefined
    );

  //

  var script$e = {
    components: {
      'tree-text': TreeText,
      'info': Info,
      'tree-progress-bar': ProgressBar
    },
    inject: ['root'],
    props: ['task'],
    data() {
      return {};
    },
    computed: {
      getViewBox() {
        const task = this.task;
        return `0 0 ${task.width} ${task.height}`;
      },
      getGroupTransform() {
        return `translate(${this.task.x} ${this.task.y})`;
      },
      getPoints() {
        const task = this.task;
        const fifty = this.task.height - this.task.height / 4;
        const full = this.task.height;
        return `0,0 ${task.width},0 ${task.width},${task.height} 0,${task.height}`;
      }
    },
    methods: {
      treeRowClick() {
        this.task.tooltip.visible = !this.task.tooltip.visible;
      },
      treeRowMouseOver() {
        this.task.mouseOver = true;
      },
      treeRowMouseOut() {
        this.task.mouseOver = false;
      }
    }
  };

  /* script */
              const __vue_script__$e = script$e;
              
  /* template */
  var __vue_render__$e = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "g",
      {
        staticClass: "elastigantt__tree-row-task-group",
        on: { mouseover: _vm.treeRowMouseOver, mouseout: _vm.treeRowMouseOut }
      },
      [
        _c(
          "svg",
          {
            staticClass: "elastigantt__tree-row-task",
            attrs: {
              x: _vm.task.x,
              y: _vm.task.y,
              width: _vm.task.width,
              height: _vm.task.height,
              xmlns: "http://www.w3.org/2000/svg"
            },
            on: { click: _vm.treeRowClick }
          },
          [
            _c("defs", [
              _c("clipPath", { attrs: { id: "elastigantt__task-clip-path" } }, [
                _c("polygon", { attrs: { points: _vm.getPoints } })
              ])
            ]),
            _vm._v(" "),
            _c("polygon", {
              style: _vm.root.state.row.styles.bar,
              attrs: { points: _vm.getPoints }
            }),
            _vm._v(" "),
            _c("tree-progress-bar", {
              attrs: {
                task: _vm.task,
                "clip-path": "url(#elastigantt__task-clip-path)"
              }
            })
          ],
          1
        ),
        _vm._v(" "),
        _vm.root.state.row.showText
          ? _c("tree-text", { attrs: { task: _vm.task } })
          : _vm._e(),
        _vm._v(" "),
        _vm.root.state.info.display && _vm.task.mouseOver
          ? _c("info", { attrs: { task: _vm.task } })
          : _vm._e()
      ],
      1
    )
  };
  var __vue_staticRenderFns__$e = [];
  __vue_render__$e._withStripped = true;

    /* style */
    const __vue_inject_styles__$e = undefined;
    /* scoped */
    const __vue_scope_id__$e = undefined;
    /* module identifier */
    const __vue_module_identifier__$e = undefined;
    /* functional template */
    const __vue_is_functional_template__$e = false;
    /* component normalizer */
    function __vue_normalize__$e(
      template, style, script,
      scope, functional, moduleIdentifier,
      createInjector, createInjectorSSR
    ) {
      const component = (typeof script === 'function' ? script.options : script) || {};

      // For security concerns, we use only base name in production mode.
      component.__file = "F:\\elastigantt\\src\\components\\Tree\\Row\\Task.vue";

      if (!component.render) {
        component.render = template.render;
        component.staticRenderFns = template.staticRenderFns;
        component._compiled = true;

        if (functional) component.functional = true;
      }

      component._scopeId = scope;

      return component
    }
    /* style inject */
    
    /* style inject SSR */
    

    
    var Task = __vue_normalize__$e(
      { render: __vue_render__$e, staticRenderFns: __vue_staticRenderFns__$e },
      __vue_inject_styles__$e,
      __vue_script__$e,
      __vue_scope_id__$e,
      __vue_is_functional_template__$e,
      __vue_module_identifier__$e,
      undefined,
      undefined
    );

  //

  var script$f = {
    components: {
      'tree-text': TreeText,
      'info': Info,
      'tree-progress-bar': ProgressBar
    },
    inject: ['root'],
    props: ['task'],
    data() {
      return {};
    },
    computed: {
      getViewBox() {
        return `0 0 ${this.task.width} ${this.task.height}`;
      },
      getGroupTransform() {
        return `translate(${this.task.x} ${this.task.y})`;
      },
      getPoints() {
        const task = this.task;
        const fifty = task.height / 2;
        let offset = fifty;
        if (task.width / 2 - offset < 0) {
          offset = task.width / 2;
        }
        return `0,${fifty}
        ${offset},0
        ${task.width - offset},0
        ${task.width},${fifty}
        ${task.width - offset},${task.height}
        ${offset},${task.height}`;
      }
    },
    methods: {
      treeRowClick() {
        this.task.tooltip.visible = !this.task.tooltip.visible;
      },
      treeRowMouseOver() {
        this.task.mouseOver = true;
      },
      treeRowMouseOut() {
        this.task.mouseOver = false;
      }
    }
  };

  /* script */
              const __vue_script__$f = script$f;
              
  /* template */
  var __vue_render__$f = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "g",
      {
        staticClass: "elastigantt__tree-row-milestone-group",
        on: { mouseover: _vm.treeRowMouseOver, mouseout: _vm.treeRowMouseOut }
      },
      [
        _c(
          "svg",
          {
            staticClass: "elastigantt__tree-row-milestone",
            attrs: {
              x: _vm.task.x,
              y: _vm.task.y,
              width: _vm.task.width,
              height: _vm.task.height,
              xmlns: "http://www.w3.org/2000/svg"
            },
            on: { click: _vm.treeRowClick }
          },
          [
            _c("defs", [
              _c(
                "clipPath",
                { attrs: { id: "elastigantt__milestone-clip-path" } },
                [_c("polygon", { attrs: { points: _vm.getPoints } })]
              )
            ]),
            _vm._v(" "),
            _c("polygon", {
              style: _vm.root.state.row.styles.bar,
              attrs: { points: _vm.getPoints }
            }),
            _vm._v(" "),
            _c("tree-progress-bar", {
              attrs: {
                task: _vm.task,
                "clip-path": "url(#elastigantt__milestone-clip-path)"
              }
            })
          ],
          1
        ),
        _vm._v(" "),
        _vm.root.state.row.showText
          ? _c("tree-text", { attrs: { task: _vm.task } })
          : _vm._e(),
        _vm._v(" "),
        _vm.root.state.info.display && _vm.task.mouseOver
          ? _c("info", { attrs: { task: _vm.task } })
          : _vm._e()
      ],
      1
    )
  };
  var __vue_staticRenderFns__$f = [];
  __vue_render__$f._withStripped = true;

    /* style */
    const __vue_inject_styles__$f = undefined;
    /* scoped */
    const __vue_scope_id__$f = undefined;
    /* module identifier */
    const __vue_module_identifier__$f = undefined;
    /* functional template */
    const __vue_is_functional_template__$f = false;
    /* component normalizer */
    function __vue_normalize__$f(
      template, style, script,
      scope, functional, moduleIdentifier,
      createInjector, createInjectorSSR
    ) {
      const component = (typeof script === 'function' ? script.options : script) || {};

      // For security concerns, we use only base name in production mode.
      component.__file = "F:\\elastigantt\\src\\components\\Tree\\Row\\Milestone.vue";

      if (!component.render) {
        component.render = template.render;
        component.staticRenderFns = template.staticRenderFns;
        component._compiled = true;

        if (functional) component.functional = true;
      }

      component._scopeId = scope;

      return component
    }
    /* style inject */
    
    /* style inject SSR */
    

    
    var Milestone = __vue_normalize__$f(
      { render: __vue_render__$f, staticRenderFns: __vue_staticRenderFns__$f },
      __vue_inject_styles__$f,
      __vue_script__$f,
      __vue_scope_id__$f,
      __vue_is_functional_template__$f,
      __vue_module_identifier__$f,
      undefined,
      undefined
    );

  //

  var script$g = {
    components: {
      'tree-text': TreeText,
      'info': Info,
      'tree-progress-bar': ProgressBar
    },
    inject: ['root'],
    props: ['task'],
    data() {
      return {};
    },
    computed: {
      getViewBox() {
        return `0 0 ${this.task.width} ${this.task.height}`;
      },
      getGroupTransform() {
        return `translate(${this.task.x} ${this.task.y})`;
      },
      getPoints() {
        const task = this.task;
        const fifty = task.height / 2;
        let offset = fifty;
        if (task.width / 2 - offset < 0) {
          offset = task.width / 2;
        }
        const bottom = task.height - task.height / 4;
        const corner = task.height / 6;
        const smallCorner = task.height / 8;
        return `M ${smallCorner},0
                L ${task.width - smallCorner} 0
                L ${task.width} ${smallCorner}
                L ${task.width} ${bottom}
                L ${task.width - corner} ${task.height}
                L ${task.width - corner * 2} ${bottom}
                L ${corner * 2} ${bottom}
                L ${corner} ${task.height}
                L 0 ${bottom}
                L 0 ${smallCorner}
                Z
        `;
        // return `M ${offset} ${task.height}
        // Q 0 ${task.height} 0 ${fifty}
        // Q 0 0 ${offset} 0
        // L ${task.width - offset} 0
        // Q ${task.width} 0 ${task.width} ${fifty}
        // Q ${task.width} ${task.height} ${task.width - offset} ${task.height}
        // L ${offset} ${task.height}
        // Z`;
      }
    },
    methods: {
      treeRowClick() {
        this.task.tooltip.visible = !this.task.tooltip.visible;
      },
      treeRowMouseOver() {
        this.task.mouseOver = true;
      },
      treeRowMouseOut() {
        this.task.mouseOver = false;
      }
    }
  };

  /* script */
              const __vue_script__$g = script$g;
              
  /* template */
  var __vue_render__$g = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "g",
      {
        staticClass: "elastigantt__tree-row-project-group",
        on: { mouseover: _vm.treeRowMouseOver, mouseout: _vm.treeRowMouseOut }
      },
      [
        _c(
          "svg",
          {
            staticClass: "elastigantt__tree-row",
            attrs: {
              x: _vm.task.x,
              y: _vm.task.y,
              width: _vm.task.width,
              height: _vm.task.height,
              xmlns: "http://www.w3.org/2000/svg"
            },
            on: { click: _vm.treeRowClick }
          },
          [
            _c("defs", [
              _c(
                "clipPath",
                { attrs: { id: "elastigantt__project-clip-path" } },
                [
                  _c("path", {
                    style: _vm.root.state.row.styles.bar,
                    attrs: { d: _vm.getPoints }
                  })
                ]
              )
            ]),
            _vm._v(" "),
            _c("path", {
              style: _vm.root.state.row.styles.bar,
              attrs: { d: _vm.getPoints }
            }),
            _vm._v(" "),
            _c("tree-progress-bar", {
              attrs: {
                task: _vm.task,
                "clip-path": "url(#elastigantt__project-clip-path)"
              }
            })
          ],
          1
        ),
        _vm._v(" "),
        _vm.root.state.row.showText
          ? _c("tree-text", { attrs: { task: _vm.task } })
          : _vm._e(),
        _vm._v(" "),
        _vm.root.state.info.display && _vm.task.mouseOver
          ? _c("info", { attrs: { task: _vm.task } })
          : _vm._e()
      ],
      1
    )
  };
  var __vue_staticRenderFns__$g = [];
  __vue_render__$g._withStripped = true;

    /* style */
    const __vue_inject_styles__$g = undefined;
    /* scoped */
    const __vue_scope_id__$g = undefined;
    /* module identifier */
    const __vue_module_identifier__$g = undefined;
    /* functional template */
    const __vue_is_functional_template__$g = false;
    /* component normalizer */
    function __vue_normalize__$g(
      template, style, script,
      scope, functional, moduleIdentifier,
      createInjector, createInjectorSSR
    ) {
      const component = (typeof script === 'function' ? script.options : script) || {};

      // For security concerns, we use only base name in production mode.
      component.__file = "F:\\elastigantt\\src\\components\\Tree\\Row\\Project.vue";

      if (!component.render) {
        component.render = template.render;
        component.staticRenderFns = template.staticRenderFns;
        component._compiled = true;

        if (functional) component.functional = true;
      }

      component._scopeId = scope;

      return component
    }
    /* style inject */
    
    /* style inject SSR */
    

    
    var Project = __vue_normalize__$g(
      { render: __vue_render__$g, staticRenderFns: __vue_staticRenderFns__$g },
      __vue_inject_styles__$g,
      __vue_script__$g,
      __vue_scope_id__$g,
      __vue_is_functional_template__$g,
      __vue_module_identifier__$g,
      undefined,
      undefined
    );

  //

  var script$h = {
    components: {
      'grid': Grid,
      'tree-dependency-lines': DependencyLines,
      'calendar': Calendar,
      'tree-row-task': Task,
      'tree-row-milestone': Milestone,
      'tree-row-project': Project
    },
    inject: ['root'],
    data() {
      return {};
    },
    computed: {
      getWidth() {
        const state = this.root.state;
        return state.width;
      },
      getHeight() {
        const state = this.root.state;
        return state.height;
      }
    }
  };

  /* script */
              const __vue_script__$h = script$h;
              
  /* template */
  var __vue_render__$h = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "svg",
      {
        staticClass: "elastigantt_tree-object",
        attrs: {
          x: "0",
          y: "0",
          width: _vm.getWidth,
          height: _vm.getHeight,
          xmlns: "http://www.w3.org/2000/svg"
        }
      },
      [
        _c("calendar"),
        _vm._v(" "),
        _c("grid"),
        _vm._v(" "),
        _c("tree-dependency-lines", { attrs: { tasks: _vm.root.visibleTasks } }),
        _vm._v(" "),
        _vm._l(_vm.root.visibleTasks, function(task) {
          return _c(
            "g",
            { attrs: { task: task } },
            [
              _c("tree-row-" + task.type, {
                tag: "component",
                attrs: { task: task }
              })
            ],
            1
          )
        })
      ],
      2
    )
  };
  var __vue_staticRenderFns__$h = [];
  __vue_render__$h._withStripped = true;

    /* style */
    const __vue_inject_styles__$h = undefined;
    /* scoped */
    const __vue_scope_id__$h = undefined;
    /* module identifier */
    const __vue_module_identifier__$h = undefined;
    /* functional template */
    const __vue_is_functional_template__$h = false;
    /* component normalizer */
    function __vue_normalize__$h(
      template, style, script,
      scope, functional, moduleIdentifier,
      createInjector, createInjectorSSR
    ) {
      const component = (typeof script === 'function' ? script.options : script) || {};

      // For security concerns, we use only base name in production mode.
      component.__file = "F:\\elastigantt\\src\\components\\Tree\\Tree.vue";

      if (!component.render) {
        component.render = template.render;
        component.staticRenderFns = template.staticRenderFns;
        component._compiled = true;

        if (functional) component.functional = true;
      }

      component._scopeId = scope;

      return component
    }
    /* style inject */
    
    /* style inject SSR */
    

    
    var Tree = __vue_normalize__$h(
      { render: __vue_render__$h, staticRenderFns: __vue_staticRenderFns__$h },
      __vue_inject_styles__$h,
      __vue_script__$h,
      __vue_scope_id__$h,
      __vue_is_functional_template__$h,
      __vue_module_identifier__$h,
      undefined,
      undefined
    );

  //

  var script$i = {
    components: {
      'main-header': Header,
      'task-list': TaskList,
      'tree': Tree
    },
    inject: ['root'],
    props: ['tasks', 'options'],
    data() {
      return {
        defs: ''
      };
    },
    created() {
      let css = '';
      try {
        for (let i = 0, len = document.styleSheets.length; i < len; i++) {
          let styleSheet = document.styleSheets[i];
          if (styleSheet.title === 'elastigantt__style') {
            for (let r = 0, rules = styleSheet.rules.length; r < rules; r++) {
              let rule = styleSheet.rules[r];
              css += rule.cssText + "\n";
            }
            break;
          }
        }
        // css       = "<![CDATA[\n" + css + "]]>";
        this.defs = `<style type="text/css">${css}</style>`;
        this.root.state.defs.push(this.defs);
      } catch (e) {
        console.log("Cannot add stylesheet to SVG. You must run this app from server.");
      }
      // this.root.state.defs.forEach((def) => { this.defs += def; });
    },
    mounted() {
      this.root.svgElement = this.$refs.svgElement;
    },
    computed: {
      getWidth() {
        return this.root.state.width;
      },
      getMainStyle() {
        const state = this.root.state;
        return {
          width: state.width + 'px'
        };
      }
    },
    methods: {
      mouseMove(event) {
        this.root.$emit('mousemove', event);
      },
      mouseUp(event) {
        this.root.$emit('mouseup', event);
      }
    }
  };

  /* script */
              const __vue_script__$i = script$i;
              
  /* template */
  var __vue_render__$i = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "div",
      { staticClass: "elastigantt__main" },
      [
        _c("main-header"),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "elastigantt__container",
            on: { mousemove: _vm.mouseMove, mouseup: _vm.mouseUp }
          },
          [
            _c("div", { staticClass: "elastigantt__task-list-container" }, [
              _vm.root.state.taskList.display
                ? _c(
                    "svg",
                    {
                      ref: "svgTaskList",
                      staticClass: "elastigantt__task-list-svg",
                      attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: _vm.root.state.taskList.finalWidth + "px",
                        height: _vm.root.state.height
                      }
                    },
                    [
                      _c("defs", { domProps: { innerHTML: _vm._s(_vm.defs) } }),
                      _vm._v(" "),
                      _c("task-list")
                    ],
                    1
                  )
                : _vm._e()
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "elastigantt__main-svg-container" }, [
              _c(
                "svg",
                {
                  ref: "svgElement",
                  staticClass: "elastigantt__main-container",
                  attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: _vm.getWidth,
                    height: _vm.root.state.height
                  }
                },
                [
                  _c("defs", { domProps: { innerHTML: _vm._s(_vm.defs) } }),
                  _vm._v(" "),
                  _c("tree")
                ],
                1
              )
            ])
          ]
        )
      ],
      1
    )
  };
  var __vue_staticRenderFns__$i = [];
  __vue_render__$i._withStripped = true;

    /* style */
    const __vue_inject_styles__$i = undefined;
    /* scoped */
    const __vue_scope_id__$i = undefined;
    /* module identifier */
    const __vue_module_identifier__$i = undefined;
    /* functional template */
    const __vue_is_functional_template__$i = false;
    /* component normalizer */
    function __vue_normalize__$i(
      template, style, script,
      scope, functional, moduleIdentifier,
      createInjector, createInjectorSSR
    ) {
      const component = (typeof script === 'function' ? script.options : script) || {};

      // For security concerns, we use only base name in production mode.
      component.__file = "F:\\elastigantt\\src\\components\\Main.vue";

      if (!component.render) {
        component.render = template.render;
        component.staticRenderFns = template.staticRenderFns;
        component._compiled = true;

        if (functional) component.functional = true;
      }

      component._scopeId = scope;

      return component
    }
    /* style inject */
    
    /* style inject SSR */
    

    
    var Main = __vue_normalize__$i(
      { render: __vue_render__$i, staticRenderFns: __vue_staticRenderFns__$i },
      __vue_inject_styles__$i,
      __vue_script__$i,
      __vue_scope_id__$i,
      __vue_is_functional_template__$i,
      __vue_module_identifier__$i,
      undefined,
      undefined
    );

  //
  //
  //
  //

  function getOptions(userOptions) {
    return {
      debug: false,
      width: 0,
      height: 0,
      svgElement: null,
      scope: {
        before: 1,
        after: 1
      },
      times: {
        timeScale: 60 * 1000,
        timeZoom: 17,
        timePerPixel: 0,
        fistDate: null,
        firstTime: null, // firstDate getTime()
        lastDate: null,
        lastTime: null, // last date getTime()
        totalViewDurationMs: 0,
        totalViewDurationPx: 0,
        stepMs: 24 * 60 * 60 * 1000,
        stepPx: 0,
        steps: 0
      },
      row: {
        height: 24,
        styles: {
          bar: {
            'fill': '#ff0000a0',
            'stroke': '#ff0000',
            'stroke-width': '1'
          },
          text: {
            'fill': '#ffffff',
            'font-family': 'sans-serif',
            'font-size': '12px'
          }
        },
        showText: true
      },
      treeText: {
        offset: 0,
        styles: {
          text: {
            'font-family': 'sans-serif',
            'font-size': '12px',
            'font-weight': 'normal',
            'fill': '#000000a0'
          },
          background: {
            fill: '#ffffffb0'
          }
        },
        xPadding: 10
      },
      dependencyLines: {
        style: {
          'fill': 'transparent',
          'stroke': '#FFa00090',
          'stroke-width': 2
        }
      },
      progress: {
        width: 20,
        height: 6,
        styles: {
          line: {
            'stroke': '#ffffff85',
            'stroke-width': 20
          },
          bar: {
            'fill': "url(#diagonalHatch)",
            'transform': 'translateY(0.1) scaleY(0.8)'
          }
        }
      },
      horizontalGrid: {
        gap: 6,
        strokeWidth: 1,
        style: 'stroke:#00000010;strokeWidth:1',
        lines: []
      },
      verticalGrid: {
        strokeWidth: 1,
        style: 'stroke:#00000010;strokeWidth:1',
        lines: []
      },
      info: {
        style: 'fill:#000000a0',
        textStyle: 'fill:#fff',
        fontFamily: 'sans-serif',
        fontSize: '12px',
        fontWeight: 'bold',
        display: false
      },
      taskList: {
        display: true,
        styles: {
          row: {
            'background': 'transparent',
            'border-color': '#00000010'
          },
          column: {
            'border-color': '#00000010',
            'height': 0,
            'width': 0,
            'line-height': 0
          },
          header: {
            'background': 'linear-gradient(to bottom,#fff,#f5f5f5)',
            'border-color': '#00000010'
          },
          label: {
            'display': 'inline-block',
            'margin': 'auto 6px',
            'color': '#404040'
          },
          value: {
            'margin': 'auto 6px',
            'overflow': 'hidden',
            'text-overflow': 'ellipsis',
            'line-height': '1.5em',
            'word-break': 'keep-all',
            'font-family': 'sans-serif',
            'font-size': '12px',
            'white-space': 'nowrap',
            'color': '#606060'
          },
          expander: {
            stroke: '#909090',
            strokeWidth: 1,
            'fill': '#ffffffa0',
          }
        },
        columns: [{
          id: 0,
          label: 'ID',
          value: 'id',
          width: 40,
          styles: {
            label: {}
          }
        }],
        resizerWidth: 0,
        percent: 100,
        width: 0,
        finalWidth: 0,
        expander: {
          size: 16,
          columnWidth: 24,
          padding: 20,
          margin: 10
        }
      },
      calendar: {
        hours: [],
        days: [],
        months: [],
        gap: 6,
        height: 0,
        styles: {
          wrapper: {
            'width': '100%',
            'height': '100%',
            'background': 'linear-gradient(to bottom,#fff,#f5f5f5)',
            'border-color': '#00000010'
          },
          row: {
            fill: 'transparent',
            stroke: '#00000010'
          },
          column: {
            'stroke': '#00000010',
            'stroke-width': 1,
            'fill': 'transparent'
          },
          text: {
            fontFamily: 'sans-serif',
            'fill': '#404040'
          }
        },
        hour: {
          height: 20,
          display: true,
          fontSize: '12px',
          format: {
            short(date) {
              return dayjs(date).locale(userOptions.locale.code).format('HH');
            },
            medium(date) {
              return dayjs(date).locale(userOptions.locale.code).format('HH:mm');
            },
            long(date) {
              return dayjs(date).locale(userOptions.locale.code).format('HH:mm');
            }
          }
        },
        day: {
          height: 20,
          display: true,
          fontSize: '12px',
          format: {
            short(date) {
              return dayjs(date).locale(userOptions.locale.code).format('DD');
            },
            medium(date) {
              return dayjs(date).locale(userOptions.locale.code).format('DD ddd');
            },
            long(date) {
              return dayjs(date).locale(userOptions.locale.code).format('DD dddd');
            }
          }
        },
        month: {
          height: 20,
          display: true,
          fontSize: '12px',
          format: {
            short(date) {
              return dayjs(date).locale(userOptions.locale.code).format('MM');
            },
            medium(date) {
              return dayjs(date).locale(userOptions.locale.code).format('\'YY MMM');
            },
            long(date) {
              return dayjs(date).locale(userOptions.locale.code).format('YYYY MMMM (MM)');
            }
          }
        }
      },
      defs: []
    };
  }

  var script$j = {
    components: {
      'elastigantt-main': Main,
    },
    props: [
      'tasks', 'options'
    ],
    provide() {
      const provider = {};
      const self = this;
      Object.defineProperty(provider, 'root', {
        enumerable: true,
        get: () => self
      });
      return provider;
    },
    data() {
      return {
        state: {}
      };
    },
    methods: {
      isObject(item) {
        return item && typeof item === 'object' && !Array.isArray(item);
      },
      mergeDeep(target, ...sources) {
        if (!sources.length) {
          return target;
        }
        const source = sources.shift();
        if (this.isObject(target) && this.isObject(source)) {
          for (const key in source) {
            if (this.isObject(source[key])) {
              if (!target[key])
                Object.assign(target, {
                  [key]: {}
                });
              this.mergeDeep(target[key], source[key]);
            } else {
              Object.assign(target, {
                [key]: source[key]
              });
            }
          }
        }
        return this.mergeDeep(target, ...sources);
      },
      initialize() {
        this.state = this.mergeDeep({}, getOptions(this.options), this.options, {
          tasks: this.tasks.map(task => this.mergeDeep({}, task))
        });
        dayjs.locale(options.locale, null, true);
        this.state.taskList.columns = this.state.taskList.columns.map((column, index) => {
          column.finalWidth = (column.width / 100) * this.state.taskList.percent;
          column.styles = this.mergeDeep({}, this.state.taskList.styles, column.styles);
          if (typeof column.style === 'undefined') {
            column.style = {
              'height': 0 + "px",
              'line-height': 0 + "px",
              'width': 0 + "px"
            };
          }
          column.style = this.mergeDeep({}, this.state.taskList.styles.column, column.style);
          if (typeof column.height === 'undefined') {
            column.height = 0;
          }
          column._id = `${index}-${column.label}`;
          return this.mergeDeep({}, column);
        });
        // initialize observer
        this.state.tasks = this.state.tasks.map(task => {
          task.x = 0;
          task.y = 0;
          task.width = 0;
          task.height = 0;
          task.tooltip = {
            visible: false
          };
          task.mouseOver = false;
          task.dependencyLines = [];
          if (typeof task.visible === 'undefined') {
            task.visible = true;
          }
          if (typeof task.collapsed === 'undefined') {
            task.collapsed = false;
          }
          if (typeof task.dependencyLines === 'undefined') {
            task.dependencyLines = [];
          }
          if (typeof task.dependentOn === 'undefined') {
            task.dependentOn = [];
          }
          if (typeof task.parentId === 'undefined') {
            task.parentId = null;
          }
          task.children = [];
          task.allChildren = [];
          task.parents = [];
          task.parent = null;
          task.durationMs = 0;
          return this.mergeDeep({}, task);
        });
        this.state.rootTask = {
          id: null,
          label: 'root',
          children: [],
          allChildren: [],
          parents: [],
          parent: null
        };
        this.resetTaskTree();
        this.state.taskTree = this.makeTaskTree(this.state.rootTask);
        this.state.tasks = this.state.taskTree.allChildren;
        this.state.ctx = document.createElement('canvas').getContext('2d');
        this.calculateTaskListColumnsWidths();
      },
      calculateCalendarDimensions() {
        this.state.calendar.height = 0;
        if (this.state.calendar.hour.display) {
          this.state.calendar.height += this.state.calendar.hour.height;
        }
        if (this.state.calendar.day.display) {
          this.state.calendar.height += this.state.calendar.day.height;
        }
        if (this.state.calendar.month.display) {
          this.state.calendar.height += this.state.calendar.month.height;
        }
      },
      getMaximalLevel() {
        let maximalLevel = 0;
        this.state.tasks.forEach(task => {
          if (task.parents.length > maximalLevel) {
            maximalLevel = task.parents.length;
          }
        });
        return maximalLevel - 1;
      },
      calculateTaskListColumnsWidths() {
        let final = 0;
        this.state.taskList.columns.forEach(column => {
          column.finalWidth = (column.width / 100) * this.state.taskList.percent;
          final += column.finalWidth;
          let height = this.state.row.height + this.state.horizontalGrid.gap * 2 - this.state.horizontalGrid.strokeWidth;
          column.style.height = height + "px";
          column.style['line-height'] = height + "px";
          column.style.width = column.finalWidth + "px";
        });
        const expanderMaxPadding = this.getMaximalLevel() * this.state.taskList.expander.padding;
        this.state.taskList.finalWidth = final + this.state.taskList.expander.columnWidth + expanderMaxPadding + this.state.taskList.expander.margin * 2;
      },
      resetTaskTree() {
        this.state.rootTask.children = [];
        this.state.rootTask.allChildren = [];
        this.state.rootTask.parent = null;
        this.state.rootTask.parents = [];
        for (let i = 0, len = this.state.tasks.length; i < len; i++) {
          let current = this.state.tasks[i];
          current.children = [];
          current.allChildren = [];
          current.parent = null;
          current.parents = [];
        }
      },
      makeTaskTree(task) {
        for (let i = 0, len = this.state.tasks.length; i < len; i++) {
          let current = this.state.tasks[i];
          if (current.parentId === task.id) {
            if (task.parents.length) {
              task.parents.forEach(parent => current.parents.push(parent));
            }
            if (task !== this.root) {
              current.parents.push(task);
              current.parent = task;
            } else {
              current.parents = [];
              current.parent = null;
            }
            current = this.makeTaskTree(current);
            task.allChildren.push(current);
            task.children.push(current);
            current.allChildren.forEach(child => task.allChildren.push(child));
          }
        }
        return task;
      },
      getTask(taskId) {
        return this.tasksById[taskId];
      },
      getChildren(taskId) {
        return this.state.tasks.filter(task => task.parent === taskId);
      },
      getSVG() {
        return this.svgElement.outerHTML;
      },
      getImage(type = 'image/png') {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = () => {
            const canvas = document.createElement('canvas');
            canvas.width = this.svgElement.clientWidth;
            canvas.height = this.svgElement.clientHeight;
            canvas.getContext('2d').drawImage(img, 0, 0);
            resolve(canvas.toDataURL(type));
          };
          img.src = 'data:image/svg+xml,' + encodeURIComponent(this.getSVG());
        });
      },
    },
    computed: {
      visibleTasks() {
        const firstDate = this.state.times.firstTaskDate.toISOString().split('T')[0] + 'T00:00:00';
        const lastDate = this.state.times.lastTaskDate.toISOString().split('T')[0] + 'T23:59:59.999';
        this.state.times.firstDate = dayjs(firstDate).locale(this.locale).subtract(this.state.scope.before, 'days').toDate();
        this.state.times.lastDate = dayjs(lastDate).locale(this.locale).add(this.state.scope.after, 'days').toDate();
        this.state.times.firstTime = this.state.times.firstDate.getTime();
        this.state.times.lastTime = this.state.times.lastDate.getTime();
        this.state.times.totalViewDurationMs = this.state.times.lastTime - this.state.times.firstTime;
        this.state.taskList.width = this.state.taskList.columns.reduce((prev, current) => {
          return {
            width: prev.width + current.width
          };
        }, {
          width: 0
        }).width;
        let max = this.state.times.timeScale * 60;
        let min = this.state.times.timeScale;
        let steps = max / min;
        let percent = this.state.times.timeZoom / 100;
        this.state.times.timePerPixel = this.state.times.timeScale * steps * percent + Math.pow(2, this.state.times.timeZoom);
        this.state.times.totalViewDurationPx = this.state.times.totalViewDurationMs / this.state.times.timePerPixel;
        this.state.times.stepPx = this.state.times.stepMs / this.state.times.timePerPixel;
        this.state.width = this.state.times.totalViewDurationPx + this.state.verticalGrid.strokeWidth;
        this.state.times.steps = Math.ceil(this.state.times.totalViewDurationPx / this.state.times.stepPx);
        this.calculateCalendarDimensions();
        this.resetTaskTree();
        this.state.tasks = this.makeTaskTree(this.state.rootTask).allChildren;
        const visibleTasks = this.state.tasks.filter(task => task.visible);
        this.state.height = visibleTasks.length * (this.state.row.height + this.state.horizontalGrid.gap * 2) + this.state.horizontalGrid.gap + this.state.calendar.height + this.state.calendar.styles.column['stroke-width'] + this.state.calendar.gap;
        for (let index = 0, len = visibleTasks.length; index < len; index++) {
          let task = visibleTasks[index];
          task.width = task.durationMs / this.state.times.timePerPixel - this.state.verticalGrid.strokeWidth;
          if (task.width < 0) {
            task.width = 0;
          }
          task.height = this.state.row.height;
          let x = task.startTime - this.state.times.firstTime;
          if (x) {
            x = x / this.state.times.timePerPixel;
          }
          task.x = x + this.state.verticalGrid.strokeWidth;
          task.y = (this.state.row.height + this.state.horizontalGrid.gap * 2) * index + this.state.horizontalGrid.gap + this.state.calendar.height + this.state.calendar.styles.column['stroke-width'] + this.state.calendar.gap;
        }
        return visibleTasks;
      },

    },
    created() {
      this.initialize();
      this.tasksById = {};
      this.state.tasks.forEach(task => (this.tasksById[task.id] = task));
      let tasks = this.state.tasks;
      let firstTaskTime = Number.MAX_SAFE_INTEGER;
      let lastTaskTime = 0;
      let firstTaskDate,
        lastTaskDate;
      for (let index = 0, len = this.state.tasks.length; index < len; index++) {
        let task = this.state.tasks[index];
        task.startDate = new Date(task.start);
        task.startTime = task.startDate.getTime();
        task.durationMs = task.duration * 1000;
        if (task.startTime < firstTaskTime) {
          firstTaskTime = task.startTime;
          firstTaskDate = task.startDate;
        }
        if (task.startTime + task.durationMs > lastTaskTime) {
          lastTaskTime = task.startTime + task.durationMs;
          lastTaskDate = new Date(task.startTime + task.durationMs);
        }
      }
      this.state.times.firstTaskTime = firstTaskTime;
      this.state.times.lastTaskTime = lastTaskTime;
      this.state.times.firstTaskDate = firstTaskDate;
      this.state.times.lastTaskDate = lastTaskDate;
    },
  };

  /* script */
              const __vue_script__$j = script$j;
              
  /* template */
  var __vue_render__$j = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("elastigantt-main", {
      attrs: { tasks: _vm.tasks, options: _vm.options },
      on: { calculateTaskListColumnsWidths: _vm.calculateTaskListColumnsWidths }
    })
  };
  var __vue_staticRenderFns__$j = [];
  __vue_render__$j._withStripped = true;

    /* style */
    const __vue_inject_styles__$j = undefined;
    /* scoped */
    const __vue_scope_id__$j = undefined;
    /* module identifier */
    const __vue_module_identifier__$j = undefined;
    /* functional template */
    const __vue_is_functional_template__$j = false;
    /* component normalizer */
    function __vue_normalize__$j(
      template, style, script,
      scope, functional, moduleIdentifier,
      createInjector, createInjectorSSR
    ) {
      const component = (typeof script === 'function' ? script.options : script) || {};

      // For security concerns, we use only base name in production mode.
      component.__file = "F:\\elastigantt\\src\\Elastigantt.vue";

      if (!component.render) {
        component.render = template.render;
        component.staticRenderFns = template.staticRenderFns;
        component._compiled = true;

        if (functional) component.functional = true;
      }

      component._scopeId = scope;

      return component
    }
    /* style inject */
    
    /* style inject SSR */
    

    
    var Elastigantt = __vue_normalize__$j(
      { render: __vue_render__$j, staticRenderFns: __vue_staticRenderFns__$j },
      __vue_inject_styles__$j,
      __vue_script__$j,
      __vue_scope_id__$j,
      __vue_is_functional_template__$j,
      __vue_module_identifier__$j,
      undefined,
      undefined
    );

  Vue.component('elastigantt', Elastigantt);

  return Elastigantt;

}());
//# sourceMappingURL=elastigantt.js.map
