Ext.define("com.coremedia.cms.editor.sdk.util.ColumnsUtil", function(ColumnsUtil) {/*package com.coremedia.cms.editor.sdk.util {
import ext.grid.column.Column;

public class ColumnsUtil {

  /**
   * Search a column with the given header in the column model
   *
   * @param columns the columns where to find the given header in
   * @param header the header to find in the column model
   * @return the column found in column model or null if no column was found
   * /
  public static*/ function getColumnByHeader$static(columns/*:Array*/, header/*:String*/)/*:Column*/ {
    var matchedColumns/*:Array*/ = columns.filter(function (oneColumn/*:Column*/)/*:Boolean*/ {
      return oneColumn.header === header;
    });
    return matchedColumns.length >= 1 ? matchedColumns[0] : null;
  }/*

  /**
   * Search a column with the given dataIndex in the column model
   *
   * @param columns the columns where to find the given dataIndex in
   * @param dataIndex the dataIndex to find in the column model
   * @return the column found in column model or null if no column was found
   * /
  public static*/ function getColumnByDataIndex$static(columns/*:Array*/, dataIndex/*:String*/)/*:Column*/ {
    var matchedColumns/*:Array*/ = columns.filter(function (oneColumn/*:Column*/)/*:Boolean*/ {
      return oneColumn.dataIndex === dataIndex;
    });
    return matchedColumns.length >= 1 ? matchedColumns[0] : null;
  }/*
}*/function ColumnsUtil$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: ColumnsUtil$,
      statics: {
        getColumnByHeader: getColumnByHeader$static,
        getColumnByDataIndex: getColumnByDataIndex$static
      }
    };
});
