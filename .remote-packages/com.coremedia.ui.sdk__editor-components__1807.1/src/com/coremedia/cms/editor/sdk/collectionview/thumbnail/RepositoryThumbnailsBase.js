Ext.define("com.coremedia.cms.editor.sdk.collectionview.thumbnail.RepositoryThumbnailsBase", function(RepositoryThumbnailsBase) {/*package com.coremedia.cms.editor.sdk.collectionview.thumbnail {

import com.coremedia.cap.content.Content;
import com.coremedia.cms.editor.sdk.collectionview.CollectionView;
import com.coremedia.cms.editor.sdk.collectionview.CollectionViewManagerInternal;
import com.coremedia.cms.editor.sdk.collectionview.CollectionViewModel;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.ui.context.ComponentContextManager;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;

import ext.container.Container;
import ext.event.Event;

public class RepositoryThumbnailsBase extends Container {
  private var collectionViewModel:CollectionViewModel;

  public*/ function RepositoryThumbnailsBase$(config/*:RepositoryThumbnails = null*/) {if(arguments.length<=0)config=null;
    this.super$VLYL(config);
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

  [InjectFromExtParent]
  public*/ function setCollectionViewModel(collectionViewModel/*:CollectionViewModel*/)/*:void*/ {
    this.collectionViewModel$VLYL = collectionViewModel;
  }/*

  protected*/ function getCollectionViewModel()/*:CollectionViewModel*/ {
    return this.collectionViewModel$VLYL;
  }/*

  public*/ function disableBrowserContextMenu()/*:void*/ {
    this.el.on("contextmenu", function(event/*:Event*/)/*:void*/ {
      event.preventDefault();
    });
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.container.Container",
      metadata: {setCollectionViewModel: ["InjectFromExtParent"]},
      collectionViewModel$VLYL: null,
      constructor: RepositoryThumbnailsBase$,
      super$VLYL: function() {
        Ext.container.Container.prototype.constructor.apply(this, arguments);
      },
      getContentsValueExpression: getContentsValueExpression,
      getSelectedFolderExpression: getSelectedFolderExpression,
      setCollectionViewModel: setCollectionViewModel,
      getCollectionViewModel: getCollectionViewModel,
      disableBrowserContextMenu: disableBrowserContextMenu,
      requires: [
        "Ext.container.Container",
        "com.coremedia.ui.context.ComponentContextManager",
        "com.coremedia.ui.data.ValueExpressionFactory"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.collectionview.CollectionView",
        "com.coremedia.cms.editor.sdk.collectionview.CollectionViewManagerInternal",
        "com.coremedia.cms.editor.sdk.editorContext"
      ]
    };
});
