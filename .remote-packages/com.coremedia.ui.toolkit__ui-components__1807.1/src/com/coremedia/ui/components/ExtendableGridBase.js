Ext.define("com.coremedia.ui.components.ExtendableGridBase", function(ExtendableGridBase) {/*package com.coremedia.ui.components {

import ext.Ext;
import ext.grid.GridPanel;

public class ExtendableGridBase extends GridPanel {
  /**
   * Create a ListViewBase object.
   *
   * @param config the configuration object
   * /
  public*/ function ExtendableGridBase$(config/*:ExtendableGrid = null*/) {if(arguments.length<=0)config=null;
    var merged/*:ExtendableGrid*/ = AS3.cast(com.coremedia.ui.components.ExtendableGrid,Ext.apply({}, config));
    if (!merged.columns || merged.columns.length === 0) {
      merged.columns = AS3.getBindable(merged,"defaultColumns");
    }
    delete merged['defaultColumns'];
    delete merged['defaultFields'];
    delete merged['extraFields'];
    this.super$6HwV(merged);
  }/*

  protected*/ function makeFields(config/*:ExtendableGrid*/)/*:Array*/ {
    var result/*:Array*/ = [];
    if (AS3.getBindable(config,"defaultFields")) {
      result = result.concat(AS3.getBindable(config,"defaultFields"));
    }
    if (AS3.getBindable(config,"extraFields")) {
      result = result.concat(AS3.getBindable(config,"extraFields"));
    }
    return result;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.grid.Panel",
      constructor: ExtendableGridBase$,
      super$6HwV: function() {
        Ext.grid.Panel.prototype.constructor.apply(this, arguments);
      },
      makeFields: makeFields,
      requires: [
        "Ext",
        "Ext.grid.Panel"
      ],
      uses: ["com.coremedia.ui.components.ExtendableGrid"]
    };
});
