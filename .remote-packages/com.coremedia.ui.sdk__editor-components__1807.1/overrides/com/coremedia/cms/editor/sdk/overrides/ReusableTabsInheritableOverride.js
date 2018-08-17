// CMS-11851
// Reusable tabs must not have their inheritedState invalidated on
// removal and re-addition.
Ext.define('com.coremedia.cms.editor.sdk.overrides.ReusableTabsInheritableOverride', {
  override: 'Ext.mixin.Inheritable',

  invalidateInheritedState: function () {
    var me = this;
    var workAreaTab = AS3.as(me, com.coremedia.cms.editor.sdk.desktop.WorkAreaTab);
    if (workAreaTab) {
      var reusableTabType = AS3.as(workAreaTab.getWorkAreaTabType(), com.coremedia.cms.editor.sdk.desktop.reusability.ReusableTabType);
      if (reusableTabType) {
        return;
      }
    }

    this.callParent(arguments);
  }
}, function() {
  com.coremedia.ui.mixins.MixinOverrideUtil.reapplyMembers(this, ["invalidateInheritedState"]);
});
