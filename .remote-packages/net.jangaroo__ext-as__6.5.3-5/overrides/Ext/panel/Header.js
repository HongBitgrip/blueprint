/**
 * Fixes setUI so that ui change will be delegated to the panel title if existing.
 */
Ext.define('JooOverrides.Ext.panel.Header', {
  override: 'Ext.panel.Header',

  /**
   * @inheritdoc
   */
  setUI: function(ui) {
    var me = this,
            title = me.title,
            titleIndex = undefined;

    if (title.rendered) {
      // panel title has set a class representing the container it was added to
      // this class must be removed before the ui change

      // save the position of the title and remove it
      titleIndex = me.items.indexOf(title);
      if (titleIndex >= 0) {
        me.remove(title, false);
      }
    }

    // use callSuper here as the other override should not apply
    me.callParent(arguments);

    if (title.rendered) {
      // re-add the title to the header at the correct position
      me.insert(titleIndex, title);
      title.setUI(ui);
    }
  }
});
