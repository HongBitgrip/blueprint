Ext.define("com.coremedia.cms.editor.sdk.collectionview.list.RepositoryListBase", function(RepositoryListBase) {/*package com.coremedia.cms.editor.sdk.collectionview.list {

import com.coremedia.cap.content.Content;
import com.coremedia.cms.editor.sdk.collectionview.CollectionView;
import com.coremedia.cms.editor.sdk.collectionview.CollectionViewManagerInternal;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.ui.context.ComponentContextManager;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;

import ext.Ext;

public class RepositoryListBase extends LibraryListView {

  public*/ function RepositoryListBase$(config/*:RepositoryList = null*/) {if(arguments.length<=0)config=null;
    var columns/*:Array*/ = determineColumns$static(AS3.getBindable(config,"instanceName"));
    config.columns = com.coremedia.cms.editor.sdk.collectionview.list.AbstractListViewBase.createColumnModel(columns, config);
    var copiedConfig/*:RepositoryList*/ = AS3.cast(com.coremedia.cms.editor.sdk.collectionview.list.RepositoryList,Ext.apply({}, config));

    this.super$W5Au(copiedConfig);
  }/*

  private static*/ function determineColumns$static(instanceName/*:String*/)/*:Array*/ {
    return com.coremedia.cms.editor.sdk.editorContext.getRepositoryListViewColumns(instanceName);
  }/*

  protected*/ function getContentsValueExpression()/*:ValueExpression*/ {var this$=this;
    return com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:Array*/ {
      if (!this$.getSelectedFolderExpression()) {
        return undefined;
      }
      var selectedFolder/*:Content*/ = this$.getSelectedFolderExpression().getValue();
      var cvManager/*:CollectionViewManagerInternal*/ = (AS3.as(com.coremedia.cms.editor.sdk.editorContext.getCollectionViewManager(),  com.coremedia.cms.editor.sdk.collectionview.CollectionViewManagerInternal));
      return cvManager.getFolderChildren(selectedFolder);
    });
  }/*

  internal*/ function getSelectedFolderExpression()/*:ValueExpression*/ {
    return com.coremedia.ui.context.ComponentContextManager.getInstance().getContextExpression(this, com.coremedia.cms.editor.sdk.collectionview.CollectionView.SELECTED_FOLDER_VARIABLE_NAME);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.collectionview.list.LibraryListView",
      constructor: RepositoryListBase$,
      super$W5Au: function() {
        com.coremedia.cms.editor.sdk.collectionview.list.LibraryListView.prototype.constructor.apply(this, arguments);
      },
      getContentsValueExpression: getContentsValueExpression,
      getSelectedFolderExpression: getSelectedFolderExpression,
      requires: [
        "Ext",
        "com.coremedia.cms.editor.sdk.collectionview.list.LibraryListView",
        "com.coremedia.ui.context.ComponentContextManager",
        "com.coremedia.ui.data.ValueExpressionFactory"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.collectionview.CollectionView",
        "com.coremedia.cms.editor.sdk.collectionview.CollectionViewManagerInternal",
        "com.coremedia.cms.editor.sdk.collectionview.list.AbstractListViewBase",
        "com.coremedia.cms.editor.sdk.collectionview.list.RepositoryList",
        "com.coremedia.cms.editor.sdk.editorContext"
      ]
    };
});
