/**
 * 12/04/2017
 * Always sort selection by actual index of record. Otherwise working with the selection in a grid can have unexpected
 * effects where the order in which items were selected matters. We discussed with UX that this is not indended for
 * our components and so this "feature" is disabled globally.
 */
Ext.define("com.coremedia.ui.overrides.RowModelOverride", {
  override: "Ext.selection.RowModel",

  getSelection: function () {
    var selection = this.callParent(),
        store = this.getStore();
    if (selection && store) {
      selection = selection.sort(function (recordA, recordB) {
        var indexA = store.indexOf(recordA),
            indexB = store.indexOf(recordB);
        if (indexA < indexB) {
          return -1;
        }
        if (indexA > indexB) {
          return 1;
        }
        return 0;
      });
    }
    return selection;
  }
});
