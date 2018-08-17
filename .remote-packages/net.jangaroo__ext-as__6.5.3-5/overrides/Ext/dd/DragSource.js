/**
 * Workaround for CMS-7591
 */
Ext.define('JooOverrides.Ext.dd.DragSource', {
  override: 'Ext.dd.DragSource',

  onDragEnter: function () {
    this.callParent(arguments);

    // Fix here: delete the cached target. Better solution hopefully soon from Sencha
    delete this.cachedTarget;
  }
});