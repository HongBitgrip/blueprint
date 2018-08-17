Ext.define("com.coremedia.ui.overrides.DragZoneOverride", {
  override: "Ext.dd.DragZone",

  startDrag: function () {
    this.callParent(arguments);
    com.coremedia.ui.components.IFrameMgr.getInstance().showShims();
  },

  endDrag: function () {
    com.coremedia.ui.components.IFrameMgr.getInstance().hideShims();
    this.callParent(arguments);
  },

  uses: [
    "com.coremedia.ui.components.IFrameMgr"
  ]
});
