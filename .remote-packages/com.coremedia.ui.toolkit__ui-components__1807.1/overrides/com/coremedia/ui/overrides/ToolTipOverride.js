Ext.define("com.coremedia.ui.overrides.TooltipOverride", {
  override: "Ext.tip.ToolTip",
  // sadly set in Ext JS to 500
  maxWidth : 700,
  // Disabled touch support while targeting tooltips.
  // This makes sure that tooltips appear on hover, not on click.
  setTarget: function setTarget(target) {
    var oldTouch = Ext.supports.Touch;
    Ext.supports.Touch = false;
    try {
      this.callParent(arguments);
    } finally {
      Ext.supports.Touch = oldTouch;
    }
  }
});
