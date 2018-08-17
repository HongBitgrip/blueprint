Ext.define("com.coremedia.ui.plugins.FolderTreeNode", function(FolderTreeNode) {/*package com.coremedia.ui.plugins {

import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.models.NodeChildren;
import com.coremedia.ui.util.EncodingUtil;

import ext.data.TreeModel;
import ext.data.operation.ReadOperation;
import ext.tree.TreePanel;

internal class FolderTreeNode extends TreeModel {
  public var getChildren:Function;
  public var encode:Boolean;
  private var stateValueExpression:ValueExpression;
  private var callback:Function;

  public*/ function FolderTreeNode$(attributes/*:**/) {
    this.super$GxCW(attributes);

    this.stateValueExpression$GxCW = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(this.getChildren, this.getId());
  }/*

  override public*/ function destroy(/*...params*/)/*:void*/ {var params=Array.prototype.slice.call(arguments);
    this.stateValueExpression$GxCW.removeChangeListener(AS3.bind(this,"stateValueExpressionChanged$GxCW"));
    Ext.data.TreeModel.prototype.destroy.call(this);
  }/*

  private*/ function stateValueExpressionChanged()/*:void*/ {
    var state/*:**/ = this.stateValueExpression$GxCW.getValue();
    if (state) {
      this.updateTreeNode$GxCW(state);
      var theCallback/*:Function*/ = this.callback$GxCW;
      this.callback$GxCW = null;
      if (theCallback) {
        theCallback();
      }
    }
  }/*

  private*/ function updateTreeNode(state/*:NodeChildren*/)/*:void*/ {
    var textsByChildId/*:Object*/ = state.getTextsByChildId();
    var iconsByChildId/*:Object*/ = state.getIconsByChildId();
    var isLeafByChildId/*:Object*/ = state.getLeafByChildId();
    var clsByChildId/*:Object*/ = state.getClsByChildId();
    var existingChildIds/*:Object*/ = {};
    var childIds/*:Array*/ = state.getChildIds();
    var bulkUpdate/*:Boolean*/ = !this.isLoaded();
    if (bulkUpdate) {
       this.beginEdit();
    }
    try {
      this.processExistingNodes$GxCW(textsByChildId, iconsByChildId, clsByChildId, existingChildIds);
      this.addMissingNodes$GxCW(childIds, textsByChildId, iconsByChildId, clsByChildId, existingChildIds,isLeafByChildId);
      this.sortNodes$GxCW(childIds);
    } finally {
      if (bulkUpdate) {
        this.endEdit();
      }
    }
  }/*

  private*/ function sortNodes(childIds/*:Array*/)/*:void*/ {
    var indexWithHighestDiff/*:int*/ = -1;
    var highestDiff/*:uint*/ = 0;
    var firstDiffEntry/*:int*/ = -1;
    var lastDiffEntry/*:int*/ = -1;
    // check if sort is needed
    for (var i/*:uint*/ = 0; i < childIds.length; i++) {
      var childNode/*:FolderTreeNode*/ = AS3.cast(FolderTreeNode,this.findChild('id', childIds[i], false));
      if (this.indexOf(childNode) != i) {
        if (firstDiffEntry === -1) {
          firstDiffEntry = i;
        }
        lastDiffEntry = i;
        var positionDiff/*:Number*/ = Math.abs(i - this.indexOf(childNode));
        if (positionDiff > highestDiff) {
          indexWithHighestDiff = i;
          highestDiff = positionDiff;
        }
      }
    }

    // if sort is needed
    if (indexWithHighestDiff !== -1) {

      var tree/*:TreePanel*/ = AS3.cast(Ext.tree.Panel,AS3.cast(FolderTreeNode,this.childNodes[0]).getOwnerTree());
      if (tree) {
        // The store is already bound to a panel. The panel's selection state must
        // be preserved.
        var selectedNodes/*:Array*/ = tree.getSelectionModel().getSelection();
        var selectedNode/*:FolderTreeNode*/ = selectedNodes[0];
        tree.suspendEvents(false);
      }
      // If highest Diff is at the beginning of the list
      if ((lastDiffEntry - firstDiffEntry) / 2 > indexWithHighestDiff) {
        for (var j/*:uint*/ = firstDiffEntry; j <= lastDiffEntry; j++) {
          this.moveNode$GxCW(childIds, j, false);
        }
      } else {
        for (var k/*:uint*/ = lastDiffEntry; k >= firstDiffEntry; k--) {
          this.moveNode$GxCW(childIds, k, true);
        }
      }
      if (tree) {
        tree.resumeEvents();
        if (selectedNode) {
          tree.getSelectionModel().select(selectedNode);
        }
      }
    }
  }/*

  private*/ function moveNode(childIds/*:Array*/, j/*:uint*/, forward/*:Boolean*/)/*:void*/ {
    var childNode/*:FolderTreeNode*/ = AS3.cast(FolderTreeNode,this.findChild('id', childIds[j], false));
    if (this.indexOf(childNode) != j) {
      var treeNode/*:FolderTreeNode*/ = childNode;
      if (forward) {
        this.insertBefore(treeNode, this.childNodes[j + 1]);
      } else {
        this.insertBefore(treeNode, this.childNodes[j]);
      }
    }
  }/*

  private*/ function processExistingNodes(textsByChildId/*:Object*/, iconsByChildId/*:Object*/, clsByChildId/*:Object*/, existingChildIds/*:Object*/)/*:void*/ {
    // Clone the old child nodes, so that we do not have to worry about
    // disappearing nodes when traversing the array.
    var oldChildNodes/*:Array*/ = (this.childNodes || []).concat();
    for (var i/*:uint*/ = 0; i < oldChildNodes.length; i++) {
      var childNode/*:FolderTreeNode*/ = oldChildNodes[i];
      var childId/*:String*/ = childNode.getId();
      var childText/*:String*/ = textsByChildId[childId];
      var encodedChildText/*:String*/ = com.coremedia.ui.util.EncodingUtil.encodeForHTML(childText);
      if (!encodedChildText) {
        // The node is no longer part of the tree.
        // Maybe it moved, but we do not know where to.
        this.removeChild(childNode, false);
      } else {
        // The node already exists, but it might have been renamed.
        if (childNode.text !== encodedChildText) {
          childNode.set("text", this.encode ? encodedChildText : childText);
          childNode.set("qtip", encodedChildText);
        }
        // And it might have been restyled.
        var iconCls/*:String*/ = iconsByChildId[childId] || "";
        if (childNode.iconCls !== iconCls) {
          childNode.set("iconCls", iconCls);
        }
        var cls/*:String*/ = clsByChildId[childId] || "";
        if (childNode.cls !== cls) {
          childNode.set("cls", cls);
        }
        // The node has been processed. Do not append later on.
        existingChildIds[childId] = true;
      }
    }
  }/*

  private*/ function addMissingNodes(childIds/*:Array*/, textsByChildId/*:Object*/, iconsByChildId/*:Object*/, clsByChildId/*:Object*/, existingChildIds/*:Object*/, existingIsLeaf/*:Object*/)/*:void*/ {
    for (var i/*:uint*/ = 0; i < childIds.length; i++) {
      var newChildId/*:String*/ = childIds[i];
      if (!existingChildIds[newChildId]) {
        var newChildText/*:String*/ = textsByChildId[newChildId];
        var newEncodedChildText/*:String*/ = com.coremedia.ui.util.EncodingUtil.encodeForHTML(newChildText);
        var newChildIconCls/*:String*/ = iconsByChildId[newChildId] || "";
        var newChildCls/*:String*/ = clsByChildId[newChildId] || "";
        var newChildIsLeaf/*:String*/ = existingIsLeaf[newChildId] || false;
        var existingNode/*:FolderTreeNode*/ = AS3.cast(FolderTreeNode,this.getTreeStore().getNodeById(newChildId));
        if (existingNode) {
          // The node already exists somewhere else in the tree. Remove it at its original position.
          existingNode.remove();
        }
        // A new node must be created.
        var insertBeforeNode/*:FolderTreeNode*/ = null;
        for (var j/*:uint*/ = i + 1; j < childIds.length; j++) {
          var nextChildId/*:String*/ = childIds[j];
          var nextNode/*:FolderTreeNode*/ = AS3.cast(FolderTreeNode,this.getTreeStore().findNode('id', nextChildId, false));
          if (nextNode) {
            insertBeforeNode = nextNode;
            break;
          }
        }
        this.insertBefore({
          id: newChildId,
          text: this.encode ? newEncodedChildText : newChildText,
          qtip: newEncodedChildText,
          iconCls: newChildIconCls,
          cls: newChildCls,
          leaf: newChildIsLeaf,
          editable: this.getDepth() !== 0
        }, insertBeforeNode);
      }
    }
  }/*

  override public*/ function load(options/*:Object = null*/)/*:ReadOperation*/ {if(arguments.length<=0)options=null;
    return Ext.data.TreeModel.prototype.load.call(this,options);
  }/*

  internal*/ function start(callback/*:Function*/)/*:void*/ {
    this.callback$GxCW = callback;
    this.stateValueExpression$GxCW.addChangeListener(AS3.bind(this,"stateValueExpressionChanged$GxCW"));
    this.stateValueExpressionChanged$GxCW();
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.data.TreeModel",
      getChildren: null,
      encode: false,
      stateValueExpression$GxCW: null,
      callback$GxCW: null,
      constructor: FolderTreeNode$,
      super$GxCW: function() {
        Ext.data.TreeModel.prototype.constructor.apply(this, arguments);
      },
      destroy: destroy,
      stateValueExpressionChanged$GxCW: stateValueExpressionChanged,
      updateTreeNode$GxCW: updateTreeNode,
      sortNodes$GxCW: sortNodes,
      moveNode$GxCW: moveNode,
      processExistingNodes$GxCW: processExistingNodes,
      addMissingNodes$GxCW: addMissingNodes,
      load: load,
      start: start,
      requires: [
        "Ext.data.TreeModel",
        "Ext.tree.Panel",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.util.EncodingUtil"
      ]
    };
});
