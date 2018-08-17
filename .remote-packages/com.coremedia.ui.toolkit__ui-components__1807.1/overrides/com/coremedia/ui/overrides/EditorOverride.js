Ext.define('com.coremedia.ui.overrides.EditorOverride', {
  override: 'Ext.Editor',

  initComponent: function() {
    var me = this,
        editorDefaultSkin = "opaque";

    if (me.field) {
      // use opaque UI with background color and without animations as default UI for inline editing elements
      if (me.field.ui === "default" && me.field.config.ui === undefined) {
        me.field.ui = editorDefaultSkin;
      }
    }
    me.callParent(arguments);
  }
});