Ext.define('JooOverrides.Ext.plugin.Abstract', {
  override: 'Ext.plugin.Abstract',

  // make AbstractPlugin implement the ActionScript Plugin interface:
  mixins: ['ext.Plugin']
}, function () {
  Ext.Config.get("cmp"); // declare AbstractPlugin's cmp config to avoid warning logged by AS3.js
});