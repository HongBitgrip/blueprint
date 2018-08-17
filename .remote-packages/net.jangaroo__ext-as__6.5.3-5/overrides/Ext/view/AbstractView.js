Ext.define("JooOverrides.Ext.view.AbstractView", {
  override: "Ext.view.AbstractView",

  /**
   * Fixes lost focus states of items. If an item is updated, Ext restores the
   * selection of the item if necessary. This also needs to be done for
   * the focus.
   */
  handleUpdate: function (store, record) {
    var me = this,
            index,
            node,
            selModel = me.getSelectionModel();

    if (me.viewReady && !me.refreshNeeded) {
      index = me.dataSource.indexOf(record);

      // If the record has been removed from the data source since the changes were made, do nothing
      if (index > -1) {
        // ensure the node actually exists in the DOM
        if (me.getNode(record)) {
          node = me.bufferRender([record], index).children[0];
          me.all.replaceElement(index, node, true);
          me.updateIndexes(index, index);
          // Maintain selection after update
          selModel.onUpdate(record);
          me.refreshSizePending = true;
          if (selModel.isSelected(record)) {
            me.onItemSelect(record);

            // FIX: Maintain focus after update
            var focused = me.getNavigationModel() && me.getNavigationModel().getLastFocused();
            focused && focused === record && me.getNode(record).focus();
            // EOF
          }
          if (me.hasListeners.itemupdate) {
            me.fireEvent('itemupdate', record, index, node, me);
          }
          return node;
        }
      }
    }
  },


  /**
   * AbstraceView has problems with tabbability if
   * (1) initially empty (both view and its potential internal tabGuard are tabbable then)
   * (2) view was emptied via context menu and then filled again (view not tabbable then for one instance)
   */
  constructor: function () {
    this.callParent(arguments);

    var me = this;

    me.on("itemadd", function () {
      me.refreshTabIndex();
    });
    me.on("itemremove", function () {
      me.refreshTabIndex();
    })
  },

  onFocusLeave: function () {
    this.callParent(arguments);

    if (this.getStore().getCount() === 0) {
      this.manageTabIndex(-1);
    }
    this.containsFocus = false;
    this.cellFocused = false;
  },

  refresh: function () {
    this.callParent(arguments);

    this.refreshTabIndex();
  },

  refreshTabIndex: function () {
    if (this.enableTabStopIfEmpty) {
      return;
    }

    this.tabGuardEl && (this.tabGuardEl.tabIndex = -1);

    if (this.getStore().getCount() !== 0) {
      this.manageTabIndex(0);
    } else if (this.getStore().getCount() === 0) {
      this.manageTabIndex(-1);
      this.containsFocus = false;
      this.cellFocused = false;
    }
  },

  manageTabIndex: function (tabIndex) {
    if (this.enableTabStopIfEmpty) {
      return;
    }

    this.setTabIndex(tabIndex);
    if (this.el && this.el.dom.getAttribute(Ext.Element.tabbableSavedValueAttribute)) {
      this.el.dom.setAttribute(Ext.Element.tabbableSavedValueAttribute, tabIndex);
    }
  }
});