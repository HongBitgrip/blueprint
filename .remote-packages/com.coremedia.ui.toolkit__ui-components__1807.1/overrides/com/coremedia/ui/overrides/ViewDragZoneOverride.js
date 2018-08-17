Ext.define("com.coremedia.ui.overrides.ViewDragZoneOverride", {
  override: "Ext.view.DragZone",

  onTriggerGesture: function(view, record, item, index, e) {
    var navModel;

    // Only respond to longpress for touch dragging.
    // Reject drag start if mousedown is on the actionable cell of an actionable grid view
    // Patch for Ext 6.2.0: Add condition e.view.actionableMode, so that a cell can be dragged
    // as long as it has not yet entered actionable mode (that is, is showing an editor).
    if ((e.pointerType === 'touch' && e.type !== 'longpress') || (e.position && e.view.actionableMode && e.position.isEqual(e.view.actionPosition))) {
      return;
    }

    if (!this.isPreventDrag(e, record, item, index)) {
      navModel = view.getNavigationModel();

      // Since handleMouseDown prevents the default behavior of the event, which
      // is to focus the view, we focus the view now.  This ensures that the view
      // remains focused if the drag is cancelled, or if no drag occurs.
      //
      // A Table event will have a position property which is a CellContext
      if (e.position) {
        navModel.setPosition(e.position);
      }
      // Otherwise, just use the item index
      else {
        navModel.setPosition(index);
      }
      this.handleMouseDown(e);
    }
  }
});
