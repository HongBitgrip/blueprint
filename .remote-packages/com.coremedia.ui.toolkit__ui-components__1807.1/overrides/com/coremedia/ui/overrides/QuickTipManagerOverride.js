Ext.define('com.coremedia.ui.overrides.QuickTipManagerOverride', {
  override: 'Ext.tip.QuickTipManager',

  require: 'com.coremedia.ui.components.StatefulQuickTip',

  init : function (autoRender, config) {
    var me = this;
    me.callParent([autoRender, Ext.apply(config || {},{className:'com.coremedia.ui.components.StatefulQuickTip'})]);
  }
});
