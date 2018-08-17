Ext.define("JooOverrides.Ext.grid.plugin.DragDrop", {
  override: "Ext.grid.plugin.DragDrop",

  // modified onViewRender method as the used DragZone and DropZone implementations were hard coded
  onViewRender: function (view) {
    var me = this,
            ownerGrid = view.ownerCt.ownerGrid || view.ownerCt,
            dragZone = me.dragZone || {};

    ownerGrid.relayEvents(view, ['beforedrop', 'drop']);

    if (me.enableDrag) {
      if (me.containerScroll) {
        dragZone.scrollEl = view.getEl();
        dragZone.containerScroll = true;
      }

      me.dragZone = Ext.create(Ext.apply({
        xclass: "Ext.view.DragZone",
        view: view,
        ddGroup: me.dragGroup || me.ddGroup,
        dragText: me.dragText
      }, dragZone));
    }

    if (me.enableDrop) {
      me.dropZone = Ext.create(Ext.apply({
        xclass: "Ext.grid.ViewDropZone",
        view: view,
        ddGroup: me.dropGroup || me.ddGroup
      }, me.dropZone));
    }
  },

  uses: [
    "Ext.view.DragZone",
    "Ext.grid.ViewDropZone"
  ]
});