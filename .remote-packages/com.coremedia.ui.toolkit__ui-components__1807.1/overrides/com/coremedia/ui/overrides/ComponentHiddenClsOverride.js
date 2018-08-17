/**
 * Adds a CSS class to hidden components.
 */
Ext.define('com.coremedia.ui.overrides.ComponentHiddenClsOverride', {
  override: 'Ext.Component',
  hiddenCls: "cm-hidden",

  show: function () {
    !this.destroyed && this.removeCls(this.hiddenCls);
    this.callParent(arguments);
  },

  hide: function () {
    this.callParent(arguments);
    !this.destroyed && this.getEl() && this.getEl().getData() && this.addCls(this.hiddenCls);
  },

  initComponent: function() {
    this.callParent(arguments);
    this.hidden && this.getEl() && this.getEl().getData() && this.addCls(this.hiddenCls);
  }
});
