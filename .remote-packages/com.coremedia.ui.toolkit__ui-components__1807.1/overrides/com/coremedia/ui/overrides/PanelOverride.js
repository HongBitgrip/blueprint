Ext.define('com.coremedia.ui.overrides.PanelOverride', {
  override: 'Ext.panel.Panel',

  getExpandToolText: function () {
    return this.resourceManager.getString('com.coremedia.ui.UI', 'Expand_Tool_text');
  },

  getCollapseToolText: function () {
    return this.resourceManager.getString('com.coremedia.ui.UI', 'Collapse_Tool_text');
  },

  getLocaleText: function () {
    return this.resourceManager.getString('com.coremedia.ui.UI', 'Locale_text');
  },

  setTitle: function(title) {
    this.callParent(arguments);
    var titleText = this.title ? this.title : " ";
    if (this.getLocaleText() === "DE" ) {
      this.expandToolText = titleText + " " + this.getExpandToolText();
      this.collapseToolText = titleText + " " + this.getCollapseToolText();
    } else {
      this.expandToolText = this.getExpandToolText() + " " + titleText;
      this.collapseToolText = this.getCollapseToolText() + " " + titleText;
    }
  }
});