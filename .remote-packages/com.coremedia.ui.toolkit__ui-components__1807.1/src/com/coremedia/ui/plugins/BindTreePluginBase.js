Ext.define("com.coremedia.ui.plugins.BindTreePluginBase", function(BindTreePluginBase) {/*package com.coremedia.ui.plugins {

import com.coremedia.ui.models.TreeModel;

import ext.Component;
import ext.Plugin;
import ext.tree.TreePanel;
import ext.tree.plugin.TreeViewDragDropPlugin;

public class BindTreePluginBase implements Plugin {
  private var treeModel:TreeModel;
  private var expandInitially:Boolean;
  private var treePanel:TreePanel;
  private var encode:Boolean;
  private var dragDropPlugin:TreeViewDragDropPlugin;


  /**
   * @param config the config object
   * /
  public*/ function BindTreePluginBase$(config/*:BindTreePlugin = null*/) {if(arguments.length<=0)config=null;
    this.treeModel$PUrH = AS3.getBindable(config,"treeModel");
    this.expandInitially$PUrH = AS3.getBindable(config,"expandInitially") || false;
    this.encode$PUrH = config.encode !== false;
  }/*

  public*/ function init(component/*:Component*/)/*:void*/ {
    this.treePanel$PUrH =AS3.as( component,  Ext.tree.Panel);
    var store/*:FolderTreeStore*/ = new com.coremedia.ui.plugins.FolderTreeStore(this.treePanel$PUrH, this.treeModel$PUrH, this.expandInitially$PUrH, this.encode$PUrH);
    this.treePanel$PUrH.setStore(store);

    this.dragDropPlugin$PUrH = this.getTreeViewDragDropPlugin$PUrH();
    if(this.dragDropPlugin$PUrH) {
      // add your special drag- and dropzone to the tree component after it has been rendered
      // we need to wait for the tree being completely rendered ('render' event is to early) and the dom is available.
      this.treePanel$PUrH.addListener('afterrender',AS3.bind( this,"setupDragDropZones$PUrH"));
    }
  }/*

  /**
   * Helper method to set
   * <ul>
   *   <li>a special dragzone to the treePanel in order to disable selection when drag'n'dropping.</li>
   *   <li>an internal dragDropGroup and an appropriate treeDropZone
   * </ul>
   * /
  private*/ function setupDragDropZones()/*:void*/ {
    var internalTreeDragZone/*:String*/ = "internalTreeDD";

    this.dragDropPlugin$PUrH.dragZone.addToGroup(internalTreeDragZone);
  }/*

  private*/ function getTreeViewDragDropPlugin()/*:TreeViewDragDropPlugin*/ {
    return AS3.as( this.treePanel$PUrH.getView().findPlugin("treeviewdragdrop"),  Ext.tree.plugin.TreeViewDragDrop);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["ext.Plugin"],
      treeModel$PUrH: null,
      expandInitially$PUrH: false,
      treePanel$PUrH: null,
      encode$PUrH: false,
      dragDropPlugin$PUrH: null,
      constructor: BindTreePluginBase$,
      init: init,
      setupDragDropZones$PUrH: setupDragDropZones,
      getTreeViewDragDropPlugin$PUrH: getTreeViewDragDropPlugin,
      requires: [
        "Ext.tree.Panel",
        "Ext.tree.plugin.TreeViewDragDrop",
        "ext.Plugin"
      ],
      uses: ["com.coremedia.ui.plugins.FolderTreeStore"]
    };
});
