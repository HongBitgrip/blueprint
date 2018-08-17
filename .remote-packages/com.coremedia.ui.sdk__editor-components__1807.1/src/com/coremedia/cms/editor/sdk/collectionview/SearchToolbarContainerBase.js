Ext.define("com.coremedia.cms.editor.sdk.collectionview.SearchToolbarContainerBase", function(SearchToolbarContainerBase) {/*package com.coremedia.cms.editor.sdk.collectionview {

import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.ui.context.ComponentContextManager;
import com.coremedia.ui.data.ValueExpression;

import ext.container.Container;

[PublicApi]
public class SearchToolbarContainerBase extends Container {

  private var activeSearchToolbarExpression:ValueExpression;

  public*/ function SearchToolbarContainerBase$(config/*:SearchToolbarContainer = null*/) {if(arguments.length<=0)config=null;
    this.super$3pbm(config);

    this.activeSearchToolbarExpression$3pbm = AS3.getBindable(config,"activeSearchToolbarExpression");

    var selectedFolderExpression/*:ValueExpression*/ = com.coremedia.ui.context.ComponentContextManager.getInstance().getContextExpression(this, com.coremedia.cms.editor.sdk.collectionview.CollectionView.SELECTED_FOLDER_VARIABLE_NAME);
    selectedFolderExpression.addChangeListener(AS3.bind(this,"folderSelectionChanged$3pbm"));


    var repositorySearchToolbarContainer/*:Container*/ =AS3.as( this.queryById('repositorySearchToolbarContainer'),  Ext.container.Container);
    this.on("resize", function ()/*:void*/ {
      repositorySearchToolbarContainer.updateLayout();
    });
  }/*

  /**
   * Fired if a selection change in the repository tree has occured.
   * /
  private*/ function folderSelectionChanged(ve/*:ValueExpression*/)/*:void*/ {var this$=this;
    var selection/*:Object*/ = ve.getValue();
    com.coremedia.cms.editor.sdk.editorContext.getCollectionViewExtender().findExtension(selection,
            function (extension/*:CollectionViewExtension*/)/*:void*/ {
              var toolbarItemId/*:String*/ = extension && extension.getSearchToolbarItemId();
              if (toolbarItemId) {
                this$.activeSearchToolbarExpression$3pbm.setValue(toolbarItemId);
              } else {
                this$.activeSearchToolbarExpression$3pbm.setValue('repositorySearchToolbarContainer');
              }
            });
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.container.Container",
      metadata: {"": ["PublicApi"]},
      activeSearchToolbarExpression$3pbm: null,
      constructor: SearchToolbarContainerBase$,
      super$3pbm: function() {
        Ext.container.Container.prototype.constructor.apply(this, arguments);
      },
      folderSelectionChanged$3pbm: folderSelectionChanged,
      requires: [
        "Ext.container.Container",
        "com.coremedia.ui.context.ComponentContextManager"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.collectionview.CollectionView",
        "com.coremedia.cms.editor.sdk.editorContext"
      ]
    };
});
