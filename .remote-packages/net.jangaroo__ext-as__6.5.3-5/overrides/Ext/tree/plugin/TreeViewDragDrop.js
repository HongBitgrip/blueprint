Ext.define("JooOverrides.Ext.tree.plugin.TreeViewDragDrop", {
  override: "Ext.tree.plugin.TreeViewDragDrop",

  // modified onViewRender method as the used DragZone and DropZone implementations were hard coded
  onViewRender: function (view) {
    var me = this,
            ownerGrid = view.ownerCt.ownerGrid || view.ownerCt,
            scrollEl;

    ownerGrid.relayEvents(view, ['beforedrop', 'drop']);

    if (me.enableDrag) {
      if (me.containerScroll) {
        scrollEl = view.getEl();
      }
      me.dragZone = Ext.create(Ext.apply({
        xclass: "Ext.tree.ViewDragZone",
        view: view,
        ddGroup: me.dragGroup || me.ddGroup,
        dragText: me.dragText,
        displayField: me.displayField,
        repairHighlightColor: me.nodeHighlightColor,
        repairHighlight: me.nodeHighlightOnRepair,
        scrollEl: scrollEl
      }, me.dragZone));
    }

    if (me.enableDrop) {
      me.dropZone = Ext.create(Ext.apply({
        xclass: "Ext.tree.ViewDropZone",
        view: view,
        ddGroup: me.dropGroup || me.ddGroup,
        allowContainerDrops: me.allowContainerDrops,
        appendOnly: me.appendOnly,
        allowParentInserts: me.allowParentInserts,
        expandDelay: me.expandDelay,
        dropHighlightColor: me.nodeHighlightColor,
        dropHighlight: me.nodeHighlightOnDrop,
        sortOnDrop: me.sortOnDrop,
        containerScroll: me.containerScroll
      }, me.dropZone));
    }
  },

  uses: [
    "Ext.tree.ViewDragZone",
    "Ext.tree.ViewDropZone"
  ]
});
