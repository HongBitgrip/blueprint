Ext.define('com.coremedia.ui.overrides.ToolbarDefaultUIOverride', {
  override: 'Ext.toolbar.Toolbar',

  // we do not use dedicated mixins for toolbar buttons
  defaultButtonUI: "default"
});
