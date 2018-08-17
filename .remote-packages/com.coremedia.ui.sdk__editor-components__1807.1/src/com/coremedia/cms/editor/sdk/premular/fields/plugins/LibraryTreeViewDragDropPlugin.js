Ext.define("com.coremedia.cms.editor.sdk.premular.fields.plugins.LibraryTreeViewDragDropPlugin", function(LibraryTreeViewDragDropPlugin) {/*package com.coremedia.cms.editor.sdk.premular.fields.plugins {
import com.coremedia.cms.editor.sdk.collectionview.tree.LibraryTreeViewDragZone;
import com.coremedia.cms.editor.sdk.collectionview.tree.LibraryTreeViewDropZone;

import ext.Ext;
import ext.tree.TreePanel;
import ext.tree.plugin.TreeViewDragDropPlugin;
import ext.view.ViewDragZone;
import ext.view.ViewDropZone;

public class LibraryTreeViewDragDropPlugin extends TreeViewDragDropPlugin {

  [Bindable]
  public var ddGroups:Array;

  [Bindable]
  public var tree:TreePanel;

  public*/ function LibraryTreeViewDragDropPlugin$(config/*:LibraryTreeViewDragDropPlugin = null*/) {if(arguments.length<=0)config=null;

    AS3.setBindable(this,"ddGroups" , AS3.getBindable(config,"ddGroups") || []);
    if (!config.ddGroup && AS3.getBindable(this,"ddGroups").length > 0) {
      config.ddGroup = AS3.getBindable(this,"ddGroups")[0];
      AS3.setBindable(this,"ddGroups" , AS3.getBindable(this,"ddGroups").slice(1));
    }
    this.super$nYNJ(config);

    var dragZoneCfg/*:LibraryTreeViewDragZone*/ = AS3.cast(com.coremedia.cms.editor.sdk.collectionview.tree.LibraryTreeViewDragZone,{});
    AS3.setBindable(dragZoneCfg,"ddGroups" , AS3.getBindable(this,"ddGroups"));
    this.dragZone = AS3.cast(Ext.view.DragZone,Ext.apply(dragZoneCfg, this.dragZone));

    var dropZoneCfg/*:LibraryTreeViewDropZone*/ = AS3.cast(com.coremedia.cms.editor.sdk.collectionview.tree.LibraryTreeViewDropZone,{});
    AS3.setBindable(dropZoneCfg,"ddGroups" , AS3.getBindable(this,"ddGroups"));
    AS3.setBindable(dropZoneCfg,"tree" , AS3.getBindable(config,"tree"));
    this['dropZone'] = AS3.cast(Ext.view.DropZone,Ext.apply(dropZoneCfg, this.dropZone));
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.tree.plugin.TreeViewDragDrop",
      constructor: LibraryTreeViewDragDropPlugin$,
      super$nYNJ: function() {
        Ext.tree.plugin.TreeViewDragDrop.prototype.constructor.apply(this, arguments);
      },
      config: {
        ddGroups: null,
        tree: null
      },
      requires: [
        "Ext",
        "Ext.tree.plugin.TreeViewDragDrop",
        "Ext.view.DragZone",
        "Ext.view.DropZone"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.collectionview.tree.LibraryTreeViewDragZone",
        "com.coremedia.cms.editor.sdk.collectionview.tree.LibraryTreeViewDropZone"
      ]
    };
});
