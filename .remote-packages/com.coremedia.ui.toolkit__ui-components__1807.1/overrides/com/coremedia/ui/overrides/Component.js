/**
 * When a component does not define its own xtype (especially Base-classes in our case),
 * it inherits the xtype from its parent.
 * This leads to duplicate xtypes in the xtypes hierarchy, which again leads to duplicate executions
 * of Studio plugin rules.
 * To prevent this we exclude components without own xtype from the computation of the xtype hierarchy.
 */
Ext.define('com.coremedia.ui.overrides.ComponentOverride', {
  override: 'Ext.Component',

  /**
   * Copied from http://docs.sencha.com/extjs/6.0.2/classic/src/Component.js.html#Ext.Component-method-getXTypes
   */
  getXTypes: function() {
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
  }
});
