Ext.define("com.coremedia.cms.editor.sdk.collectionview.tree.LibraryTreeViewDropZone", function(LibraryTreeViewDropZone) {/*package com.coremedia.cms.editor.sdk.collectionview.tree {
import com.coremedia.ui.util.BeanCollectionDropZoneHelper;

import ext.dd.DragSource;
import ext.event.Event;
import ext.tree.TreePanel;
import ext.view.ViewDropZone;

import js.HTMLElement;

public class LibraryTreeViewDropZone extends ViewDropZone {

  [Bindable]
  public var ddGroups:Array;

  [Bindable]
  public var tree:TreePanel;

  private var beanCollectionDropZoneHelper:BeanCollectionDropZoneHelper;

  public*/ function LibraryTreeViewDropZone$(config/*:LibraryTreeViewDropZone = null*/) {var this$=this;if(arguments.length<=0)config=null;

    AS3.setBindable(this,"ddGroups" , AS3.getBindable(config,"ddGroups") || []);
    if (!config.ddGroup && AS3.getBindable(this,"ddGroups").length > 0) {
      config.ddGroup = AS3.getBindable(this,"ddGroups")[0];
      AS3.setBindable(this,"ddGroups" , AS3.getBindable(this,"ddGroups").slice(1));
    }

    this.super$Hz0w(config);

    AS3.getBindable(this,"ddGroups").forEach(function (ddGroup/*:String*/)/*:void*/ {
      this$.addToGroup(ddGroup);
    });

    AS3.setBindable(this,"tree" , AS3.getBindable(config,"tree"));

    this.beanCollectionDropZoneHelper$Hz0w = new com.coremedia.ui.util.BeanCollectionDropZoneHelper(new com.coremedia.cms.editor.sdk.collectionview.tree.LibraryDragDropTreeModel());
  }/*

  override public*/ function notifyEnter(source/*:DragSource*/, evt/*:Event*/, data/*:Object*/)/*:String*/ {
    Ext.view.DropZone.prototype.notifyEnter.call(this,source, evt, data);

    return this.beanCollectionDropZoneHelper$Hz0w.notifyEnter(source, evt, data);
  }/*

  override public*/ function notifyOut(source/*:DragSource*/, evt/*:Event*/, data/*:Object*/)/*:void*/ {
    Ext.view.DropZone.prototype.notifyOut.call(this,source, evt, data);

    this.beanCollectionDropZoneHelper$Hz0w.notifyOut(source, evt, data);
  }/*

  override public*/ function onNodeOver(nodeData/*:Object*/, source/*:DragSource*/, e/*:Event*/, data/*:Object*/)/*:String*/ {
    Ext.view.DropZone.prototype.onNodeOver.call(this,nodeData, source, e, data);

    var targetNode/*:HTMLElement*/ = AS3.cast(HTMLElement,nodeData);
    var targetNodeId/*:String*/ = AS3.getBindable(this,"tree").getStore().getAt(Number(targetNode.getAttribute("data-recordindex"))).getId();
    var node/*:Object*/ = {node: {id: targetNodeId}};

    return this.beanCollectionDropZoneHelper$Hz0w.onNodeOver(node, source, e, data);
  }/*

  override public*/ function onNodeDrop(nodeData/*:Object*/, source/*:DragSource*/, e/*:Event*/, data/*:Object*/)/*:Boolean*/ {
    var targetNode/*:HTMLElement*/ = AS3.cast(HTMLElement,nodeData);
    var targetNodeId/*:String*/ = AS3.getBindable(this,"tree").getStore().getAt(Number(targetNode.getAttribute("data-recordindex"))).getId();
    var node/*:Object*/ = {node: {id: targetNodeId}};

    AS3.getBindable(this,"tree").getView().focusNode(AS3.getBindable(this,"tree").getSelection()[0]);

    return this.beanCollectionDropZoneHelper$Hz0w.onNodeDrop(node, source, e, data);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.view.DropZone",
      beanCollectionDropZoneHelper$Hz0w: null,
      constructor: LibraryTreeViewDropZone$,
      super$Hz0w: function() {
        Ext.view.DropZone.prototype.constructor.apply(this, arguments);
      },
      notifyEnter: notifyEnter,
      notifyOut: notifyOut,
      onNodeOver: onNodeOver,
      onNodeDrop: onNodeDrop,
      config: {
        ddGroups: null,
        tree: null
      },
      requires: [
        "Ext.view.DropZone",
        "com.coremedia.ui.util.BeanCollectionDropZoneHelper"
      ],
      uses: ["com.coremedia.cms.editor.sdk.collectionview.tree.LibraryDragDropTreeModel"]
    };
});
