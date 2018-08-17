Ext.define("com.coremedia.ui.plugins.FolderTreeProxy", function(FolderTreeProxy) {/*package com.coremedia.ui.plugins {
import ext.Ext;
import ext.data.operation.Operation;
import ext.data.operation.ReadOperation;
import ext.data.proxy.DataProxy;
import ext.tree.TreePanel;

public class FolderTreeProxy extends DataProxy {
  private var folderTreeStore:FolderTreeStore;
  private var treePanel:TreePanel;

  public*/ function FolderTreeProxy$(folderTreeStore/*:FolderTreeStore*/, treePanel/*:TreePanel*/) {this.super$K6aG();
    this.folderTreeStore$K6aG = folderTreeStore;
    this.treePanel$K6aG = treePanel;
  }/*

  override public*/ function read(operation/*:Operation*/)/*:void*/ {
    var read/*:ReadOperation*/ = AS3.cast(Ext.data.operation.Read,operation);
    var id/*:String*/ =AS3.as( read.getId(),  String);
    var node/*:FolderTreeNode*/ = AS3.cast(com.coremedia.ui.plugins.FolderTreeNode,this.folderTreeStore$K6aG.getNodeById(id));
    node.start(function()/*:void*/ {
      operation.setRecords([]);
      operation.setSuccessful(true);
      if (AS3.getBindable(read,"callback","DUMMY")) {
        Ext.callback(AS3.getBindable(read,"callback","DUMMY"), AS3.getBindable(read,"scope","DUMMY"), [node]);
      }
    });
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.data.proxy.Proxy",
      folderTreeStore$K6aG: null,
      treePanel$K6aG: null,
      constructor: FolderTreeProxy$,
      super$K6aG: function() {
        Ext.data.proxy.Proxy.prototype.constructor.apply(this, arguments);
      },
      read: read,
      requires: [
        "Ext",
        "Ext.data.operation.Read",
        "Ext.data.proxy.Proxy"
      ],
      uses: ["com.coremedia.ui.plugins.FolderTreeNode"]
    };
});
