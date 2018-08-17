Ext.define("com.coremedia.ui.overrides.ButtonAriaReadyOverride", {
  override: "Ext.button.Button",

  constructor: function (config) {
    this.syncAriaLabelAndText = !config.ariaLabel;

    this.callParent(arguments);

    this.ariaCheck();
  },

  setAriaLabel: function () {
    this.callParent(arguments);

    this.syncAriaLabelAndText = false;
  },

  updateText: function (text, oldText) {
    this.callParent(arguments);

    if (text && this.syncAriaLabelAndText) {
      this.updateAriaLabel(text);
    }
  },

  ariaCheck: function () {
    if (!this.ariaLabel && this.ariaRole !== 'presentation') {
      var msg = "No aria-label found for button with id '" + this.id + "'. " +
              "For each button, either set the 'ariaLabel' or 'text' property.";
      Ext.ariaWarn(this, msg);
    }
  }
});
