Ext.define('JooOverrides.Ext.button.Button', {
  override: 'Ext.button.Button'
}, function () {
  Ext.Config.get("menu"); // declare Button's menu config to avoid warning logged by AS3.js
});
