// CMS-8187 + CMS-9746
// TODO: obsolete once we have fixed CMS-9826
Ext.define('com.coremedia.ui.overrides.BoxOverflowMenuZIndexOverride', {

  override: 'Ext.layout.container.boxOverflow.Menu',

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
