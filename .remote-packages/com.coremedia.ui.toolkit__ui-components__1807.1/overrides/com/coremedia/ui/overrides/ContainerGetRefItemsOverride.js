// Ext.container.Container.getRefItems() is not robust, which such a basic function should be.
Ext.define('com.coremedia.ui.overrides.ComponentOverride', {
  override: 'Ext.container.Container',

  getRefItems: function (deep) {
    var result = [];

    // Yes, programming by exception is not nice but this happens rarely and is simply the easiest
    // way to catch the various possibilities for errors in the context of getRefItems.
    try {
      result = this.callParent(arguments);
    } catch (err) {
      // dont care
    }

    return result;
  }
});
