Ext.define('JooOverrides.Ext.Component', {
  override: 'Ext.Component',

  requires: [
    "mx.resources.ResourceManager"
  ],

  config: {
    ariaLabel: null
  },

  updateAriaLabel: function (ariaLabel) {
    this.ariaLabel = ariaLabel;

    if (this.ariaEl && AS3.is(this.ariaEl, Ext.dom.Element)) {
      if (ariaLabel) {
        this.ariaEl.dom.setAttribute("aria-label", ariaLabel);
      } else {
        this.ariaEl.dom.removeAttribute("aria-label");
      }
    }
  },

  /**
   * Find a container above this component at any level by xtype or class
   *
   * See also the {@link Ext.Component#up up} method.
   *
   * @param {String/Ext.Class} xtype The xtype string for a component, or the class of the component directly
   * @param {Boolean} shallow (optional) False to check whether this Component is descended from the xtype (this is
   * the default), or true to check whether this Component is directly of the specified xtype.
   * @return {Ext.container.Container} The first Container which matches the given xtype or class
   */
  findParentByType: function (xtype, shallow) {
    var componentQuery;
    if (Ext.isFunction(xtype)) {
      xtype = xtype.xtype;
    }
    if (Ext.isString(xtype)) {
      componentQuery = xtype.replace(/\./g, "\\.");
      if (shallow) {
        componentQuery += "(true)";
      }
    }
    return this.up(componentQuery);
  },
  // patch for Actions being added to a Component via config's baseAction;
  // apply config options to component
  initConfig: function (config) {
    var action = config.baseAction;
    if (action) {
      if (!action.isInstance) {
        if (action.xclass === "ext.ActionRef") {
          // special case ActionRef: find the actual action in the container hierarchy: 
          var actionId = action.actionId;
          if (!actionId) {
            Ext.raise("ActionRef must have an actionId.");
          }
          var container = config.$initParent;
          if (!container || !container.isContainer) {
            Ext.raise("Action ID '" + actionId + "' could not be resolved: no container.");
          }
          action = container.getAction(actionId);
          if (!action) {
            Ext.raise("Action ID '" + actionId + "' could not be resolved in container " + container.getId() + ".");
          }
        } else {
          // it is an action config object:
          action = Ext.create(action);
        }
      }
      this.baseAction = action;

      if (action.initialConfig) {
        for (var i in action.initialConfig) {
          if (action.initialConfig.hasOwnProperty(i) && !(i in config)) {
            config[i] = action.initialConfig[i];
          }
        }
      }

      delete config.baseAction;
    }

    return this.callParent(arguments);
  },
  /**
   * When a component does not define its own xtype (especially Base-classes in our case),
   * it inherits the xtype from its parent.
   * This leads to duplicate xtypes in the xtypes hierarchy, which again leads to duplicate executions
   * of Studio plugin rules.
   * To prevent this we exclude components without own xtype from the computation of the xtype hierarchy.
   *
   * Copied from http://docs.sencha.com/extjs/6.0.2/classic/src/Component.js.html#Ext.Component-method-getXTypes
   * Still the same original code in 6.5.2.
   */
  getXTypes: function () {
    var self = this.self,
            xtypes, parentPrototype, parentXtypes;

    if (!self.xtypes) {
      xtypes = [];
      parentPrototype = this;

      while (parentPrototype) {
        if (parentPrototype.hasOwnProperty('xtype')) { // exclude components without own xtype from xtype hierarchy
          parentXtypes = parentPrototype.xtypes;

          if (parentXtypes !== undefined) {
            xtypes.unshift.apply(xtypes, parentXtypes);
          }
        }

        parentPrototype = parentPrototype.superclass;
      }

      self.xtypeChain = xtypes;
      self.xtypes = xtypes.join('/');
    }

    return self.xtypes;
  },
  // Patch for missing 'show' event in the case that a component:
  // (1) is hidden
  // (2) is not rendered
  // (3) show() gets called
  // Might seem a bit odd to fire 'show' for a non-rendered component.
  // However, not firing the event at all is not good as well.
  show: function (animateTarget, cb, scope) {
    var me = this,
            rendered = me.rendered;

    if (me.hierarchicallyHidden || (me.floating && !rendered && me.isHierarchicallyHidden())) {
      // If this is a hierarchically hidden floating component, we need to stash
      // the arguments to this call so that the call can be deferred until the next
      // time syncHidden() is called.
      if (!rendered) {
        // If the component has not yet been rendered it requires special treatment.
        // Normally, for rendered components we can just set the pendingShow property
        // and syncHidden() listens to events in the hierarchyEventSource and calls
        // show() when this component becomes hierarchically visible.  However,
        // if the component has not yet been rendered the hierarchy event listeners
        // have not yet been attached (since Floating is initialized during the
        // render phase.  This means we have to initialize the hierarchy event
        // listeners right now to ensure that the component will show itself when
        // it becomes hierarchically visible.
        me.initHierarchyEvents();
      }
      // defer the show call until next syncHidden(), but ignore animateTarget.
      if (arguments.length > 1) {
        arguments[0] = null; // jshint ignore:line
        me.pendingShow = arguments;
      } else {
        me.pendingShow = true;
      }
    } else if (rendered && me.isVisible()) {
      if (me.floating) {
        me.onFloatShow();
      }
    } else {
      if (me.fireEvent('beforeshow', me) !== false) {
        me.hidden = false;
        delete this.getInherited().hidden;
        // Render on first show if there is an autoRender config, or if this
        // is a floater (Window, Menu, BoundList etc).

        // We suspend layouts here because floaters/autoRenders
        // will layout when onShow is called. If the render succeeded,
        // the layout will be trigger inside onShow, so we don't flush
        // in the first block. If, for some reason we couldn't render, then
        // we resume layouts and force a flush because we don't know if something
        // will force it.
        Ext.suspendLayouts();
        if (!rendered && (me.autoRender || me.floating)) {
          me.doAutoRender();
          rendered = me.rendered;
        }

        if (rendered) {
          me.beforeShow();
          Ext.resumeLayouts();
          me.onShow.apply(me, arguments);
          me.afterShow.apply(me, arguments);
        } else {
          Ext.resumeLayouts(true);
          // Here is the fix. Maybe wait for 'afterrender' before firing 'show'?
          me.fireEvent("show", me);
        }
      } else {
        me.onShowVeto();
      }
    }
    return me;
  }
}, function () {
  Ext.Component.prototype.resourceManager = mx.resources.ResourceManager.getInstance();
  Ext.Config.get("itemId"); // declare Component's itemId config to avoid warning logged by AS3.js
});
