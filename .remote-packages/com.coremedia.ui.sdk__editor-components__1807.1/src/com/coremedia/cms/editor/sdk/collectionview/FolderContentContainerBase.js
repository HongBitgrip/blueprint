Ext.define("com.coremedia.cms.editor.sdk.collectionview.FolderContentContainerBase", function(FolderContentContainerBase) {/*package com.coremedia.cms.editor.sdk.collectionview {

import com.coremedia.cap.content.Content;
import com.coremedia.cms.editor.sdk.EditorContextImpl;
import com.coremedia.cms.editor.sdk.collectionview.list.FolderContentDropZone;
import com.coremedia.cms.editor.sdk.collectionview.list.RepositoryList;
import com.coremedia.cms.editor.sdk.collectionview.tree.LibraryDragDropTreeModel;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.store.BeanRecord;
import com.coremedia.ui.util.createComponentSelector;

import ext.container.Container;
import ext.data.Store;
import ext.dd.DropZone;
import ext.event.Event;
import ext.view.DataView;

import js.HTMLElement;

public class FolderContentContainerBase extends SortableSwitchingContainerBase {


  /**
   * value expression that acts as a model for informing a view of a newly created content object.
   * /
  [Bindable]
  public var createdContentValueExpression:ValueExpression;

  private var folderContentDropZone:FolderContentDropZone;
  private var selectedFolder:Content;

  public*/ function FolderContentContainerBase$(config/*:FolderContentContainer = null*/) {if(arguments.length<=0)config=null;
    this.super$t3Ju(config);
    this.addListener("afterrender",AS3.bind( this,"setupFolderContentDropZone$t3Ju"));
  }/*

  [InjectFromExtParent]
  public*/ function setSelectedFolder(selectedFolder/*:Content*/)/*:void*/ {
    this.selectedFolder$t3Ju = selectedFolder;
  }/*

  private*/ function setupFolderContentDropZone()/*:void*/ {
    var dropZoneConfig/*:DropZone*/ = AS3.cast(Ext.dd.DropZone,{
      ddGroup: "ContentDD"
    });
    this.folderContentDropZone$t3Ju = new com.coremedia.cms.editor.sdk.collectionview.list.FolderContentDropZone(this,
            new com.coremedia.cms.editor.sdk.collectionview.tree.LibraryDragDropTreeModel(),
            dropZoneConfig,AS3.bind( this,"customGetTargetFromEvent$t3Ju"),AS3.bind( this,"getActiveStore"));
  }/*

  override protected*/ function beforeDestroy()/*:void*/ {
    this.folderContentDropZone$t3Ju.unreg();
    com.coremedia.cms.editor.sdk.collectionview.SortableSwitchingContainerBase.prototype.beforeDestroy.call(this);
  }/*

  public*/ function getActiveStore()/*:Store*/ {
    var activeItemValue/*:**/ = this.getActiveItemValue();
    if (activeItemValue === com.coremedia.cms.editor.sdk.collectionview.CollectionViewConstants.LIST_VIEW) {
      return (AS3.as(this.getActiveItem(),  com.coremedia.cms.editor.sdk.collectionview.list.RepositoryList)).getStore();
    } else if (activeItemValue === com.coremedia.cms.editor.sdk.collectionview.CollectionViewConstants.THUMBNAILS_VIEW) {
      return AS3.as( (AS3.as((AS3.as(this.getActiveItem(),  Ext.container.Container)).queryById("thumbdataview"),  Ext.view.View)).getStore(),  Ext.data.Store);
    }
    return undefined;
  }/*

  private*/ function customGetTargetFromEvent(e/*:Event*/)/*:Object*/ {
    var contentId/*:String*/;
    var activeItemValue/*:**/ = this.getActiveItemValue();
    if (activeItemValue === com.coremedia.cms.editor.sdk.collectionview.CollectionViewConstants.LIST_VIEW) {
      contentId = this.getTargetContentIdInList$t3Ju(e);
    } else if (activeItemValue === com.coremedia.cms.editor.sdk.collectionview.CollectionViewConstants.THUMBNAILS_VIEW) {
      contentId = getTargetContentIdInDataView$static(e);
    }

    if (!contentId) {
      if (this.selectedFolder$t3Ju) {
        contentId = this.selectedFolder$t3Ju.getUriPath();
      }
    }

    if (!contentId) {
      return undefined;
    }

    return {node: {id: contentId}};
  }/*

  private*/ function getTargetContentIdInList(e/*:Event*/)/*:String*/ {
    var repList/*:RepositoryList*/ =AS3.as( this.down(com.coremedia.ui.util.createComponentSelector()._xtype(com.coremedia.cms.editor.sdk.collectionview.list.RepositoryList.xtype).build()),  com.coremedia.cms.editor.sdk.collectionview.list.RepositoryList);
    var rowSelector/*:String*/ = repList.getView()['rowSelector'];
    if (!rowSelector) {
      throw AS3.cast(AS3.Error,repList.getView().getId() + " has no rowSelector. We cannot find the row target.");
    }
    var target/*:HTMLElement*/ = e.getTarget(rowSelector);

    if (target) {
      var targetRowIndex/*:int*/ = repList.getView().indexOf(target);
      try {
        return (AS3.as((AS3.as(repList.getStore().getAt(targetRowIndex),  com.coremedia.ui.store.BeanRecord)).getBean(),  com.coremedia.cap.content.Content)).getUriPath();
      } catch(e){if(AS3.is (e,AS3.Error)) {
        // nothing
      }else throw e;}
    }

    return undefined;
  }/*

  private static*/ function getTargetContentIdInDataView$static(e/*:Event*/)/*:String*/ {
    var target/*:HTMLElement*/ = e.getTarget("[data-content-id]");

    if (target) {
      return AS3.as( target.getAttribute('data-content-id'),  String);
    }

    return undefined;
  }/*

  internal static*/ function getActiveItemValueExpression$static()/*:ValueExpression*/ {
    return com.coremedia.ui.data.ValueExpressionFactory.create('view', AS3.cast(com.coremedia.cms.editor.sdk.EditorContextImpl,com.coremedia.cms.editor.sdk.editorContext).getCollectionViewModel().getMainStateBean());
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.collectionview.SortableSwitchingContainerBase",
      metadata: {setSelectedFolder: ["InjectFromExtParent"]},
      folderContentDropZone$t3Ju: null,
      selectedFolder$t3Ju: null,
      constructor: FolderContentContainerBase$,
      super$t3Ju: function() {
        com.coremedia.cms.editor.sdk.collectionview.SortableSwitchingContainerBase.prototype.constructor.apply(this, arguments);
      },
      setSelectedFolder: setSelectedFolder,
      setupFolderContentDropZone$t3Ju: setupFolderContentDropZone,
      beforeDestroy: beforeDestroy,
      getActiveStore: getActiveStore,
      customGetTargetFromEvent$t3Ju: customGetTargetFromEvent,
      getTargetContentIdInList$t3Ju: getTargetContentIdInList,
      config: {createdContentValueExpression: null},
      statics: {getActiveItemValueExpression: getActiveItemValueExpression$static},
      requires: [
        "AS3.Error",
        "Ext.container.Container",
        "Ext.data.Store",
        "Ext.dd.DropZone",
        "Ext.view.View",
        "com.coremedia.cap.content.Content",
        "com.coremedia.cms.editor.sdk.collectionview.SortableSwitchingContainerBase",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.store.BeanRecord",
        "com.coremedia.ui.util.createComponentSelector"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.EditorContextImpl",
        "com.coremedia.cms.editor.sdk.collectionview.CollectionViewConstants",
        "com.coremedia.cms.editor.sdk.collectionview.list.FolderContentDropZone",
        "com.coremedia.cms.editor.sdk.collectionview.list.RepositoryList",
        "com.coremedia.cms.editor.sdk.collectionview.tree.LibraryDragDropTreeModel",
        "com.coremedia.cms.editor.sdk.editorContext"
      ]
    };
});
