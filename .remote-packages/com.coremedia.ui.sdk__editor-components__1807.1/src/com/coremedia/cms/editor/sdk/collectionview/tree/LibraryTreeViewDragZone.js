Ext.define("com.coremedia.cms.editor.sdk.collectionview.tree.LibraryTreeViewDragZone", function(LibraryTreeViewDragZone) {/*package com.coremedia.cms.editor.sdk.collectionview.tree {
import com.coremedia.ui.util.EncodingUtil;

import ext.ClassManager;
import ext.Ext;
import ext.data.Model;
import ext.tree.TreeView;
import ext.view.ViewDragZone;

import js.HTMLElement;

public class LibraryTreeViewDragZone extends ViewDragZone {

  [Bindable]
  public var ddGroups:Array;

  public*/ function LibraryTreeViewDragZone$(config/*:LibraryTreeViewDragZone = null*/) {var this$=this;if(arguments.length<=0)config=null;
    AS3.setBindable(this,"ddGroups" , AS3.getBindable(config,"ddGroups") || []);
    if (!config.ddGroup && AS3.getBindable(this,"ddGroups").length > 0) {
      config.ddGroup = AS3.getBindable(this,"ddGroups")[0];
      AS3.setBindable(this,"ddGroups" , AS3.getBindable(this,"ddGroups").slice(1));
    }

    this.super$vIF$(config);

    AS3.getBindable(this,"ddGroups").forEach(function (ddGroup/*:String*/)/*:void*/ {
      this$.addToGroup(ddGroup);
    });
  }/*

  override public*/ function onInitDrag(x/*:Number*/, y/*:Number*/)/*:Boolean*/ {
    var data/*:Object*/ = this.dragData;
    var ddel/*:HTMLElement*/ = data.ddel;
    var view/*:TreeView*/ = data.view;
    var record/*:Model*/ = view.getRecord(data.item);

    //required for DnD, see DragInfo.makeDragInfo
    data.node = record;
    data.records = [record];
    data.copy = true;

    //TODO: Workaround until CMS-7978 is fixed
    Ext.get(ddel).setHtml(com.coremedia.ui.util.EncodingUtil.encodeForHTML(Ext.ClassManager.get("Ext.tree.ViewDragZone").prototype.getDragText.apply(this, [])));
    this.getProxy().update(ddel);
    Ext.view.DragZone.prototype.onStartDrag.call(this,x, y);
    return true;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.view.DragZone",
      constructor: LibraryTreeViewDragZone$,
      super$vIF$: function() {
        Ext.view.DragZone.prototype.constructor.apply(this, arguments);
      },
      onInitDrag: onInitDrag,
      config: {ddGroups: null},
      requires: [
        "Ext",
        "Ext.ClassManager",
        "Ext.view.DragZone",
        "com.coremedia.ui.util.EncodingUtil"
      ]
    };
});
