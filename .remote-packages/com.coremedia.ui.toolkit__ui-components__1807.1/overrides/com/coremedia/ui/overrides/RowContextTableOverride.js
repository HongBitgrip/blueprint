// Re-using row contexts is a bit unstable as a re-used row context
// carries its baggage over to a new row it is assigned to. Especially
// in case of ValueExpressions this may cause problems. We forbid it.
Ext.define("com.coremedia.ui.overrides.RowContextTableOverride", {
  override: "Ext.panel.Table",

  onItemAdd: function () {
    this.freeRowContexts = this.freeRowContexts || [];
    this.freeRowContexts.forEach(function (context) {
      context.destroy && context.destroy();
    });
    this.freeRowContexts = [];

    this.callParent(arguments);
  }
});
