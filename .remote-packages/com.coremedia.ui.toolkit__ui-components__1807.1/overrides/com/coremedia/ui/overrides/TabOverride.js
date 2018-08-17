Ext.define('com.coremedia.ui.overrides.TabOverride', {
  override: 'Ext.tab.Tab',

  initComponent: function() {
    var me = this;

    var ariaWarnFn = Ext.ariaWarn;
    Ext.ariaWarn = Ext.emptyFn;

    try {
      me.callParent(arguments);
    } finally {
      Ext.ariaWarn = ariaWarnFn;
    }
  }
});
