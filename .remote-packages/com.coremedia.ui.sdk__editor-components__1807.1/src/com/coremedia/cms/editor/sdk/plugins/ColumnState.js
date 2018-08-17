Ext.define("com.coremedia.cms.editor.sdk.plugins.ColumnState", function(ColumnState) {/*package com.coremedia.cms.editor.sdk.plugins {
import joo.JavaScriptObject;

/**
 * A typesafe wrapper for the persisted aspect of a column configuration.
 * /
public class ColumnState extends JavaScriptObject {
  var id:String;
  var dataIndex:String;
  var hidden:Boolean;
}*/function ColumnState$() {this.super$nyEp();}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "joo.JavaScriptObject",
      id: null,
      dataIndex: null,
      hidden: false,
      super$nyEp: function() {
        joo.JavaScriptObject.prototype.constructor.apply(this, arguments);
      },
      constructor: ColumnState$,
      requires: ["joo.JavaScriptObject"]
    };
});
