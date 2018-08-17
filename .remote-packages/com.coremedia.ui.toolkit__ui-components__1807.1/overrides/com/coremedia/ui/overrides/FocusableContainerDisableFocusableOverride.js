// Fix for occasional remaining tabIndex=0 on a disabled focusable item.
// This may happen if all items of a FocusableContainer are disabled at once. Timing issues may lead to
// a situation where
// (1) an item gets focused because the previous item got disabled, thus receiving tabIndex=0
// (2) a bit later the same item gets disabled itself but keeps its tabIndex=0
// We make sure to erase tabIndex if an item gets disabled.

Ext.define("com.coremedia.ui.overrides.FocusableContainerDisableFocusableOverride", {
  override: "Ext.mixin.FocusableContainer",

  requires: ["com.coremedia.ui.mixins.MixinOverrideUtil"],

  privates: {
    onFocusableChildDisable:function(child) {
      this.callParent(arguments);
      this.deactivateFocusable(child);
    }
  }
}, function() {
  com.coremedia.ui.mixins.MixinOverrideUtil.reapplyMembers(this, ["onFocusableChildDisable"]);
});
