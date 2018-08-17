//noinspection JSUnusedGlobalSymbols
Ext.define('JooOverrides.Ext.layout.container.boxOverflow.Menu', {

  override: 'Ext.layout.container.boxOverflow.Menu',


  // CMS-7658
  // Also delete conf.xclass which is created via the jangaroo compiler
  createMenuConfig: function (component, hideOnClick) {
    var config = this.callParent(arguments);
    delete config.xclass;
    return config;
  },

  // CMS-8187 + CMS-9746
  // TODO: obsolete once we have fixed CMS-9826
  getSuffixConfig: function () {
    var me = this;

    var result = me.callParent(arguments);

    me.menu.mon(Ext.GlobalEvents, "added", me.checkReRegister, me.menu);

    return result;
  },

  checkReRegister: function (addedCmp) {
    if (this.isDescendantOf(addedCmp)) {
      this.registerWithOwnerCt();
    }
  }
});