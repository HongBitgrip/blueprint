Ext.define("com.coremedia.ui.overrides.MenuFocusOverride", {
  override: "Ext.menu.Menu",

  show: function () {
    this.callParent(arguments);

    // Only for context menus:
    // We want them to be focused, but NOT have one of their children focused
    // (this only happens after arrow keys are pressed).
    if (!this.up()) {
      this.enableFocusableContainer = false;
      this.el.dom.focus();
      this.enableFocusableContainer = true;
    }
  }
});
