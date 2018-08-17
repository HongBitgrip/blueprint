Ext.define("com.coremedia.ui.overrides.SplitButtonAriaReadyOverride", {
  override: "Ext.button.Split",

  constructor: function (config) {
    if (config.ariaLabel) {
      config.ariaLabel = this.getSplitButtonAriaLabel(config.ariaLabel);
    }

    this.callParent(arguments);

    this.splitButtonDescriptionEl = null;
  },

  setAriaLabel: function (text) {
    text = this.getSplitButtonAriaLabel(text);
    this.callParent(arguments);
  },

  getSplitButtonAriaLabel: function (text) {
    return text + " Split";
  },

  getSplitButtonMoreInfoText: function () {
    return this.resourceManager.getString('com.coremedia.ui.UI', 'SplitButton_popup_info_text');
  },

  afterRender: function () {
    this.callParent(arguments);

    this.addOrRemoveSplitButtonDescription();
    this.preventTabbableArrowEl();
  },

  addOrRemoveSplitButtonDescription: function () {
    if (!this.rendered) {
      return;
    }

    if (!this.splitButtonDescriptionEl) {
      this.splitButtonDescriptionEl = com.coremedia.ui.util.AriaUtils.createReferenceableAriaEl(this, "splitButtonDescriptionEl");
      com.coremedia.ui.util.AriaUtils.addDescribedBy(this.getEl(), this.splitButtonDescriptionEl.id);
    }

    if (this.menu) {
      this.splitButtonDescriptionEl.dom.innerHTML = this.getSplitButtonMoreInfoText();
    } else {
      this.splitButtonDescriptionEl.dom.innerHTML = "";
    }
  },

  preventTabbableArrowEl: function () {
    // We do not want the arrowEl to be tabbable. Ever.
    var arrowEl = this.arrowEl;
    arrowEl.dom.setAttribute("tabIndex", -1);
    arrowEl.dom.setAttribute = Ext.Function.createSequence(arrowEl.dom.setAttribute, function (attr, value) {
      if (attr === "tabIndex" && value !== -1) {
        arrowEl.dom.setAttribute(attr, -1);
      }
    });
  },

  setMenu: function () {
    this.callParent(arguments);

    this.addOrRemoveSplitButtonDescription();
  }
});
