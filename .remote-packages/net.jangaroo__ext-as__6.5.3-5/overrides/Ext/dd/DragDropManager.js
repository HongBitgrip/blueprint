/**
 * Disabled the cache as it does not refresh on scrolling or when card layouts switch their active item during a
 * drag operation.
 */
Ext.define('JooOverrides.Ext.dd.DragDropManager', {
  override: 'Ext.dd.DragDropManager',
  useCache: false,

  /**
   * Workaround for EXTJS-23191 and thus CMS-7577
   */
  stopEvent: function(e) {
    if (this.stopPropagation) {
      e.stopPropagation();
    }

    if (this.preventDefault) {
      e.preventDefault();
    }
  }

});
