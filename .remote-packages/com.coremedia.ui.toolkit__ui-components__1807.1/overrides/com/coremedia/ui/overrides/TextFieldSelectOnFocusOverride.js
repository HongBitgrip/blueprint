Ext.define("com.coremedia.ui.overrides.FormFieldSelectOnFocusOverride", {
  override: "Ext.form.field.Text",

  constructor: function (config) {
    if (config && config.editable !== false) {
      config.selectOnFocus = true;
    }

    this.callParent(arguments);
  }
});
