Ext.define("com.coremedia.cms.editor.sdk.collectionview.list.FolderContentDropZone", function(FolderContentDropZone) {/*package com.coremedia.cms.editor.sdk.collectionview.list {

import com.coremedia.cap.content.Content;
import com.coremedia.cms.editor.sdk.collectionview.CollectionView;
import com.coremedia.ui.context.ComponentContextManager;
import com.coremedia.ui.data.Bean;
import com.coremedia.ui.data.RemoteBean;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.beanFactory;
import com.coremedia.ui.models.DragDropModel;
import com.coremedia.ui.store.BeanRecord;
import com.coremedia.ui.util.BeanCollectionDropZoneHelper;

import ext.Component;
import ext.data.Store;
import ext.dd.DragSource;
import ext.dd.DropZone;
import ext.event.Event;

public class FolderContentDropZone extends DropZone {

  private var beanCollectionDropZoneHelper:BeanCollectionDropZoneHelper;

  private var dropComponent:Component;
  private var customGetTargetFromEvent:Function;
  private var getActiveStoreOfComponent:Function;

  public*/ function FolderContentDropZone$(component/*:Component*/, beanCollectionDragDropModel/*:DragDropModel*/, config/*:DropZone*/, customGetTargetFromEvent/*:Function*/, getActiveStoreOfComponent/*:Function = null*/) {if(arguments.length<=4)getActiveStoreOfComponent=null;
    this.super$Lxjd(component.getEl(), config);

    this.dropComponent$Lxjd = component;
    this.customGetTargetFromEvent$Lxjd = customGetTargetFromEvent;
    this.getActiveStoreOfComponent$Lxjd = getActiveStoreOfComponent;

    this.beanCollectionDropZoneHelper$Lxjd = new com.coremedia.ui.util.BeanCollectionDropZoneHelper(beanCollectionDragDropModel);
  }/*

  public override*/ function notifyEnter(source/*:DragSource*/, event/*:Event*/, data/*:Object*/)/*:String*/ {
    return this.beanCollectionDropZoneHelper$Lxjd.notifyEnter(source, event, data);
  }/*

  public override*/ function notifyOut(source/*:DragSource*/, e/*:Event*/, data/*:Object*/)/*:void*/ {
    this.beanCollectionDropZoneHelper$Lxjd.notifyOut(source, e, data);
  }/*

  public override*/ function onNodeOver(nodeData/*:Object*/, source/*:DragSource*/, event/*:Event*/, data/*:Object*/)/*:String*/ {
    Ext.dd.DropZone.prototype.onNodeOver.call(this,nodeData, source, event, data);
    return this.beanCollectionDropZoneHelper$Lxjd.onNodeOver(nodeData, source, event, data);
  }/*

  public override*/ function onNodeDrop(nodeData/*:Object*/, source/*:DragSource*/, dropEvent/*:Event*/, data/*:Object*/)/*:Boolean*/ {
    var success/*:Boolean*/ = this.beanCollectionDropZoneHelper$Lxjd.onNodeDrop(nodeData, source, dropEvent, data);

    // See to it that dropped nodes get selected if their parent is the currently selected folder.
    // Only necessary for the case of a move operation. The case of a copy operation
    // is taken care of elsewhere by means of tracking newly created content.
    if (success && !this.beanCollectionDropZoneHelper$Lxjd.isAlternativeRequested(dropEvent) && this.getActiveStoreOfComponent$Lxjd) {
      FolderContentDropZone.selectDroppedNodesIfVisible(this.dropComponent$Lxjd, this.getActiveStoreOfComponent$Lxjd(this.dropComponent$Lxjd), nodeData.node.id, com.coremedia.ui.util.BeanCollectionDropZoneHelper.extractNodeIds(data));
    }

    return success;
  }/*

  override public*/ function getTargetFromEvent(e/*:Event*/)/*:Object*/ {
    return this.customGetTargetFromEvent$Lxjd(e);
  }/*

  public static*/ function selectDroppedNodesIfVisible$static(component/*:Component*/, componentStore/*:Store*/, droppedOntoFolderUri/*:String*/, droppedContentsUris/*:Array*/)/*:void*/ {
    var selectedRepositoryItemsValueExpression/*:ValueExpression*/ = com.coremedia.ui.context.ComponentContextManager.getInstance().getContextExpression(component, com.coremedia.cms.editor.sdk.collectionview.CollectionView.SELECTED_REPOSITORY_ITEMS_VARIABLE_NAME);
    var selectedFolderValueExpression/*:ValueExpression*/ = com.coremedia.ui.context.ComponentContextManager.getInstance().getContextExpression(component, com.coremedia.cms.editor.sdk.collectionview.CollectionView.SELECTED_FOLDER_VARIABLE_NAME);

    var selectedFolder/*:Content*/ = selectedFolderValueExpression.getValue();
    if (selectedFolder && selectedFolder.getUriPath() === droppedOntoFolderUri) {
      selectedRepositoryItemsValueExpression.setValue([]);
      var contents/*:Array*/ = droppedContentsUris.map(function (contentUri/*:String*/)/*:RemoteBean*/ {
        return com.coremedia.ui.data.beanFactory.getRemoteBean(contentUri);
      });
      componentStore.addListener("update", function storeLoaded(store/*:Store*/)/*:void*/ {
        store.removeListener("update", storeLoaded);
        if (containsRecords$static(componentStore, contents)) {
          selectedRepositoryItemsValueExpression.setValue(contents);
        }
      });
    }
  }/*

  private static*/ function containsRecords$static(store/*:Store*/, beans/*:Array*/)/*:Boolean*/ {
    var contains/*:Boolean*/ = true;
    beans.forEach(function (bean/*:Bean*/)/*:void*/ {
      var index/*:Number*/ = findBeanRecordIndex$static(store, bean);
      if (index === -1) {
        contains = false;
      }
    });
    return contains;
  }/*
  /**
   * Find index of BeanRecord with given bean in store:
   * /
  private static*/ function findBeanRecordIndex$static(store/*:Store*/, bean/*:Bean*/)/*:Number*/ {
    if (bean) {
      return store.findBy(function (record/*:BeanRecord*/)/*:Boolean*/ {
        return record.getBean() === bean;
      });
    }
    return -1;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.dd.DropZone",
      beanCollectionDropZoneHelper$Lxjd: null,
      dropComponent$Lxjd: null,
      customGetTargetFromEvent$Lxjd: null,
      getActiveStoreOfComponent$Lxjd: null,
      constructor: FolderContentDropZone$,
      super$Lxjd: function() {
        Ext.dd.DropZone.prototype.constructor.apply(this, arguments);
      },
      notifyEnter: notifyEnter,
      notifyOut: notifyOut,
      onNodeOver: onNodeOver,
      onNodeDrop: onNodeDrop,
      getTargetFromEvent: getTargetFromEvent,
      statics: {selectDroppedNodesIfVisible: selectDroppedNodesIfVisible$static},
      requires: [
        "Ext.dd.DropZone",
        "com.coremedia.ui.context.ComponentContextManager",
        "com.coremedia.ui.data.beanFactory",
        "com.coremedia.ui.util.BeanCollectionDropZoneHelper"
      ],
      uses: ["com.coremedia.cms.editor.sdk.collectionview.CollectionView"]
    };
});
