/**
 * This adds Ext JS 3.4 Legacy API to <code>Ext.container.Container</code>.
 */
(function() {
  Ext.define('JooOverrides.Ext.container.Container', {
    override: 'Ext.container.Container',

    mixins: [
      "ext.mixin.AdvancedFocusableContainerMixin"
    ],

    // restore ext 3.4 behaviour
    bubbleEvents: ["add", "remove"],
    /**
     * Find a component under this container at any level by property
     * @param {String} prop
     * @param {String} value
     * @deprecated Use <code>down(...)</code> or <code>query(...)</code> with selector <code>"[prop=value]"</code> instead.
     * @return {Array} Array of Ext.Components
     */
    find: function (prop, value) {
      return this.queryBy(function (c) {
        return c[prop] === value;
      });
    },

    /**
     * Find a component under this container at any level by xtype or class
     * @param {String/Class} xtype The xtype string for a component, or the class of the component directly
     * @param {Boolean} shallow (optional) False to check whether this Component is descended from the xtype (this is
     * the default), or true to check whether this Component is directly of the specified xtype.
     * @deprecated Use <code>down(...)</code> or <code>query(...)</code> with selector <code>"xtype"</code> instead. Use selector <code>"xtype(true)"</code> for shallow xtype lookup.
     * @return {Array} Array of Ext.Components
     */
    findByType: function (xtype, shallow) {
      return this.queryBy(function (c) {
        return typeof xtype === "function" ? c instanceof xtype : c.isXType(xtype, shallow);
      });
    },

    initConfig: function (config) {
      // convert from MXML actionList to standard Ext JS actions:
      config.actions = addToActionMap(config.actionList, config.actions);
      delete config.actionList;
      this.callParent(arguments);
    },
    getActionList: function () {
      var values = [];
      if (this.actions) {
        for (var key in this.actions) {
          values.push(this.actions[key]);
        }
      }
      return values;
    },
    setActionList: function (actionList) {
      this.setActions(addToActionMap(actionList)); // setActions() automatically adds to existing actions!
    }
  }, function() {
    Object.defineProperty(Ext.container.Container.prototype, "itemCollection", {
      get: function() {
        return this.items;
      },
      enumerable: false,
      configurable: false
    });
  });
  function addToActionMap(actionList, actionMap) {
    if (!actionMap) {
      actionMap = {};
    }
    if (actionList) {
      if (!Ext.isArray(actionList)) {
        Ext.raise("Container#actionList must be an Array.");
      }
      for (var i = 0; i < actionList.length; ++i) {
        var action = actionList[i];
        if (!action.actionId) {
          Ext.raise("Action " + action.$className + " without actionId added to actionList of Container "
                  + this.$className + ".");
        }
        actionMap[action.actionId] = action;
      }
    }
    return actionMap;
  }
})();