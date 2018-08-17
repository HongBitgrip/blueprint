Ext.define("com.coremedia.ui.overrides.LoadMaskOverride", {
  override: "Ext.LoadMask",
  baseCls: "cm-loadmask"
}, function () {
  //noinspection JSUnusedGlobalSymbols
  Ext.LoadMask.prototype.focusable = false;
});
