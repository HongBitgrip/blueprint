/**
 * Ext.mixin.Focusable.findFocusTarget works with the faulty :canfocus selector.
 * We replace :canfocus by :focusable.
 */
Ext.define("com.coremedia.ui.overrides.ComponentQueryCanFocusOverride", {
  override: "Ext.ComponentQuery"
}, function () {
  Ext.ComponentQuery.pseudos.canfocus = Ext.ComponentQuery.pseudos.focusable;
});
