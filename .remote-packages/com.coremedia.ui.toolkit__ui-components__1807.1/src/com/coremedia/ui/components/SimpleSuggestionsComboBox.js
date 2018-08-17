Ext.define("com.coremedia.ui.components.SimpleSuggestionsComboBox", function(SimpleSuggestionsComboBox) {/*package com.coremedia.ui.components {
import ext.Ext;
import ext.form.field.ComboBox;

public class SimpleSuggestionsComboBox extends ComboBox {

  [Bindable]
  public var doQueryFunction:Function;

  public*/ function SimpleSuggestionsComboBox$(config/*:SimpleSuggestionsComboBox = null*/) {if(arguments.length<=0)config=null;
    this.super$kSW6(config);
    this.mon(this,"resize",AS3.bind(this,"resizePickerToComboBox$kSW6"));
  }/*

  private*/ function resizePickerToComboBox()/*:void*/ {
    this.getPicker().setWidth(this.getWidth());
  }/*

  override public*/ function doQuery(queryString/*:String*/, forceAll/*:Boolean=false*/, rawQuery/*:Boolean=false*/)/*:void*/ {switch(Math.max(arguments.length,1)){case 1:forceAll=false;case 2:rawQuery=false;}
    if (AS3.getBindable(this,"doQueryFunction") !== null) {
      AS3.getBindable(this,"doQueryFunction")(this);
    } else {
      Ext.form.field.ComboBox.prototype.doQuery.call(this,queryString, forceAll, rawQuery);
    }
  }/*

  protected*/ function onValueCollectionEndUpdate()/*:void*/ {
    var me = this,
            store = me.store,
            selectedRecords = me.valueCollection.getRange(),
            selectedRecord = selectedRecords[0],
            selectionCount = selectedRecords.length;

    me.updateBindSelection(me.pickerSelectionModel, selectedRecords);

    if (me.isSelectionUpdating()) {
      return;
    }

    Ext.suspendLayouts();

    me.lastSelection = selectedRecords;
    if (selectionCount) {
      // Track the last selection with a value (non blank) for use in
      // assertValue
      me.lastSelectedRecords = selectedRecords;
    }

    // If we have selected a value, and it's not possible to select any more values
    // or, we are configured to hide the picker each time, then collapse the picker.
    if (selectionCount && ((!me.multiSelect && store.contains(selectedRecord)) || me.collapseOnSelect || !store.getCount())) {
      /*
       * Prevent the "no results found" message from being collapsed.
       * => show it again, after it is hidden by the picker's collapse method
       */
      if(this.getStore().getCount() > 0) {
        me.updatingValue = true;
        me.collapse();
        me.updatingValue = false;
      }
    }
    Ext.resumeLayouts(true);
    if (!me.suspendCheckChange) {
      if (!me.multiSelect) {
        selectedRecords = selectedRecord;
      }
      me.fireEvent('select', me, selectedRecords);
    }
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.form.field.ComboBox",
      constructor: SimpleSuggestionsComboBox$,
      super$kSW6: function() {
        Ext.form.field.ComboBox.prototype.constructor.apply(this, arguments);
      },
      resizePickerToComboBox$kSW6: resizePickerToComboBox,
      doQuery: doQuery,
      onValueCollectionEndUpdate: onValueCollectionEndUpdate,
      config: {doQueryFunction: null},
      requires: [
        "Ext",
        "Ext.form.field.ComboBox"
      ]
    };
});
