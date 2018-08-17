Ext.define("JooOverrides.Ext.grid.feature.RowBody", {
  override: "Ext.grid.feature.RowBody",

  onColumnsChanged: function () {
    if (this.view && this.view.rendered) {
      this.callParent(arguments);
    }
  }
});
