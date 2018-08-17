Ext.define('com.coremedia.ui.theme.panel.Panel', {
  override: 'Ext.panel.Panel',

  // Theme triton sets border and bodyBorder to false, reset this by setting undefined as default
  border: undefined,
  bodyBorder: undefined
});
