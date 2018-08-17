// when a window is focused delegate it to the first focusable component.
Ext.define("com.coremedia.ui.overrides.WindowDefaultFocusOverride", {
  override: "Ext.window.Window",
  defaultFocus: ":focusable"
});
