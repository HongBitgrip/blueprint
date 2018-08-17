/**
 * This makes the constants of Ext.window.MessageBox static
 */
Ext.define('JooOverrides.Ext.window.MessageBox', {
  override: 'Ext.window.MessageBox'
}, function() {
  var consts = ["OK", "YES", "NO", "CANCEL", "OKCANCEL", "YESNO", "YESNOCANCEL", "INFO", "WARNING", "QUESTION", "ERROR"];
  Ext.copyIf(Ext.window.MessageBox, Ext.window.MessageBox.prototype, consts);
});
