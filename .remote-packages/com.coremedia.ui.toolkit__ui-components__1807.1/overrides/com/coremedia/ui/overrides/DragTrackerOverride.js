Ext.define("com.coremedia.ui.overrides.DragTrackerOverride", {
  override: "Ext.dd.DragTracker",

  onStart: function () {
    this.callParent(arguments);
    com.coremedia.ui.components.IFrameMgr.getInstance().showShims();
  },

  onEnd: function () {
    com.coremedia.ui.components.IFrameMgr.getInstance().hideShims();
    this.callParent(arguments);
  },

  uses: [
    "com.coremedia.ui.components.IFrameMgr"
  ]
});
