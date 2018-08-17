Ext.define('com.coremedia.ui.overrides.RowWidgetPluginOverride', {
  override: 'Ext.grid.plugin.RowWidget',

  privates: {
    viewOverrides: {
      handleEvent: function (e) {

        // PATCH HERE !!!
        // Even when the event was triggered below a row expander,
        // we want the normal (TableView.handleEvent()) behaviour for
        // 'mouseenter', 'mouseover' and 'mouseout' events in order
        // to apply the right hover styles for rows.
        if (e.getTarget('.' + this.rowExpander.rowIdCls, this.body)
                && e.type !== "mouseenter"
                && e.type !== "mouseover"
                && e.type !== "mouseout") {
          return;
        }

        this.callParent([e]);

      },

      onFocusEnter: function (e) {
        // An override applied to the client view so that it ignores focus moving into the expander row
        if (e.event.getTarget('.' + this.rowExpander.rowIdCls, this.body)) {
          return;
        }

        this.callParent([e]);
      },

      toggleChildrenTabbability: function (enableTabbing) {
        // An override applied to the client view so that it does not interfere with tabbability of elements
        // within the expander rows.
        var focusEl = this.getTargetEl(),
                rows = this.all,
                i;

        for (i = rows.startIndex; i <= rows.endIndex; i++) {
          // Extract the data row from each row.
          // We do not interfere with tabbing in the the expander row.
          focusEl = Ext.fly(this.getRow(rows.item(i)));
          if (enableTabbing) {
            focusEl.restoreTabbableState(/* skipSelf = */ true);
          }
          else {
            // Do NOT includeSaved
            // Once an item has had tabbability saved, do not increment its save level
            focusEl.saveTabbableState({
              skipSelf: true,
              includeSaved: false
            });
          }
        }
      }
    }
  }
});