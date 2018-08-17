Ext.define("com.coremedia.cms.editor.sdk.premular.fields.struct.StructTreeStore", function(StructTreeStore) {/*package com.coremedia.cms.editor.sdk.premular.fields.struct {
import com.coremedia.ui.data.ValueExpression;

import ext.Ext;

import ext.data.TreeStore;

public class StructTreeStore extends TreeStore {
  /**
   * A property path expression leading to the Bean whose property is edited.
   * This property editor assumes that this bean has a property 'properties'.
   * /
  [Bindable]
  public var bindTo:ValueExpression;

  /**
   * The property of the Bean to bind in this field.
   * /
  [Bindable]
  public var propertyName:String;

  private var allNodes:Array;

  public*/ function StructTreeStore$(config/*:StructTreeStore = null*/) {if(arguments.length<=0)config=null;
    var rootStructValueExpression/*:ValueExpression*/ = AS3.getBindable(config,"bindTo").extendBy('properties', AS3.getBindable(config,"propertyName"));
    var root/*:StructTreeNode*/ = com.coremedia.cms.editor.sdk.premular.fields.struct.StructTreeNode.makeStructTreeRootNode(rootStructValueExpression, this);
    this.super$huTe(AS3.cast(Ext.data.TreeStore,Ext.apply({
      root: root
    }, config)));
  }/*

  public*/ function nodeCreated(node/*:StructTreeNode*/)/*:void*/ {
    if (!this.allNodes$huTe) {
      this.allNodes$huTe = [];
    }
    this.allNodes$huTe.push(node);
  }/*

  override public*/ function destroy(/*...params*/)/*:void*/ {var params=Array.prototype.slice.call(arguments);
    this.allNodes$huTe && this.allNodes$huTe.forEach(function(node/*:StructTreeNode*/)/*:void*/ {
      node.removeListeners();
    });

    Ext.data.TreeStore.prototype.destroy.call(this,params);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.data.TreeStore",
      allNodes$huTe: null,
      constructor: StructTreeStore$,
      super$huTe: function() {
        Ext.data.TreeStore.prototype.constructor.apply(this, arguments);
      },
      nodeCreated: nodeCreated,
      destroy: destroy,
      config: {
        bindTo: null,
        propertyName: null
      },
      requires: [
        "Ext",
        "Ext.data.TreeStore"
      ],
      uses: ["com.coremedia.cms.editor.sdk.premular.fields.struct.StructTreeNode"]
    };
});
