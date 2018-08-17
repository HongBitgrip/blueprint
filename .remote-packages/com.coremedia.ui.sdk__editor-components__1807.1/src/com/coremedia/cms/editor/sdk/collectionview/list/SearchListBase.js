Ext.define("com.coremedia.cms.editor.sdk.collectionview.list.SearchListBase", function(SearchListBase) {/*package com.coremedia.cms.editor.sdk.collectionview.list {

import com.coremedia.cms.editor.sdk.editorContext;

import ext.Ext;

public class SearchListBase extends LibraryListView {

  public*/ function SearchListBase$(config/*:SearchList = null*/) {if(arguments.length<=0)config=null;
    // If necessary, replace the columns by the columns configured in the editor context
    var columns/*:Array*/ = this.determineColumns$jjQM(AS3.getBindable(config,"instanceName"));
    config.columns = com.coremedia.cms.editor.sdk.collectionview.list.AbstractListViewBase.createColumnModel(columns, config);
    var copiedConfig/*:SearchList*/ = AS3.cast(com.coremedia.cms.editor.sdk.collectionview.list.SearchList,Ext.apply({}, config));

    this.super$jjQM(copiedConfig);
  }/*

  //noinspection JSMethodCanBeStatic
  private*/ function determineColumns(instanceName/*:String*/)/*:Array*/ {
    return com.coremedia.cms.editor.sdk.editorContext.getSearchListViewColumns(instanceName);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.collectionview.list.LibraryListView",
      constructor: SearchListBase$,
      super$jjQM: function() {
        com.coremedia.cms.editor.sdk.collectionview.list.LibraryListView.prototype.constructor.apply(this, arguments);
      },
      determineColumns$jjQM: determineColumns,
      requires: [
        "Ext",
        "com.coremedia.cms.editor.sdk.collectionview.list.LibraryListView"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.collectionview.list.AbstractListViewBase",
        "com.coremedia.cms.editor.sdk.collectionview.list.SearchList",
        "com.coremedia.cms.editor.sdk.editorContext"
      ]
    };
});
