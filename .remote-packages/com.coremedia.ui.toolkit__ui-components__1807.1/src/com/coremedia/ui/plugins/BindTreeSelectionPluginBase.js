Ext.define("com.coremedia.ui.plugins.BindTreeSelectionPluginBase", function(BindTreeSelectionPluginBase) {/*package com.coremedia.ui.plugins {

import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.logging.Logger;
import com.coremedia.ui.models.TreeExpander;
import com.coremedia.ui.models.TreeModel;
import com.coremedia.ui.util.EventUtil;
import com.coremedia.ui.util.ObjectUtils;

import ext.Component;
import ext.Plugin;
import ext.data.Model;
import ext.data.NodeInterface;
import ext.data.Store;
import ext.selection.TreeSelectionModel;
import ext.tree.TreePanel;

/**
 * A plugin to bind the selection in a list to a bean.
 * /
public class BindTreeSelectionPluginBase implements Plugin {

  private var treeModel:TreeModel;
  private var selectedValueExpression:ValueExpression;
  private var previousSelectionPath:Array;
  /**
   * Required in addition to selectedValueExpression as if changing the preferred site
   * the path changes - but the value does not.
   * /
  private var selectedPathValueExpression:ValueExpression;
  private var defaultValue:Object;
  private var openPathValueExpression:ValueExpression;

  private var ignoreEmptySelection:Boolean;
  private var treePanel:TreePanel;
  private var treeSelectionModel:TreeSelectionModel;

  private var updateSelection:Boolean;

  /**
   * Bind a property path of a given bean to the selection of a tree.
   * If neither an id nor a bean is given, the <code>applicationContext</code> bean is used.
   * <p>
   * While the tree is not visible, the selection is not updated.
   * </p>
   *
   * @param config the config object
   * @see com.coremedia.ui.data.#applicationContext
   * /
  public*/ function BindTreeSelectionPluginBase$(config/*:BindTreeSelectionPlugin = null*/) {if(arguments.length<=0)config=null;
    this.treeModel$6GL3 = AS3.getBindable(config,"treeModel");
    this.selectedValueExpression$6GL3 = AS3.getBindable(config,"valueExpression");
    this.defaultValue$6GL3 = AS3.getBindable(config,"defaultValue");
    this.openPathValueExpression$6GL3 = AS3.getBindable(config,"openPathValueExpression");

    this.ignoreEmptySelection$6GL3 = ! !AS3.getBindable(config,"ignoreEmptySelection");
    this.updateSelection$6GL3 = AS3.getBindable(config,"updateSelection") !== false;
  }/*
  

  public*/ function init(component/*:Component*/)/*:void*/ {
    if (AS3.is(component,  Ext.tree.Panel)) {
      this.treePanel$6GL3 =  (AS3.as(component,  Ext.tree.Panel));
      component.addListener('beforedestroy',AS3.bind( this,"componentDestroyed$6GL3"));
      this.treeSelectionModel$6GL3 =AS3.as( this.treePanel$6GL3.getSelectionModel(),  Ext.selection.TreeModel);
      this.treeSelectionModel$6GL3.addListener('beforeselect',AS3.bind( this,"treeSelectionChanged$6GL3"));
      if (this.updateSelection$6GL3) {
        this.selectedValueExpression$6GL3.addChangeListener(AS3.bind(this,"selectionValueForTreePanelChanged$6GL3"));
        this.selectedPathValueExpression$6GL3 = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(AS3.bind(this,"computeSelectionPath$6GL3"));
        this.selectedPathValueExpression$6GL3.addChangeListener(AS3.bind(this,"selectionPathChanged$6GL3"));
        this.selectionPathChanged$6GL3(this.selectedPathValueExpression$6GL3);
      }
      if (this.openPathValueExpression$6GL3) {
        this.openPathValueExpression$6GL3.setValue(undefined);
        this.openPathValueExpression$6GL3.addChangeListener(AS3.bind(this,"openPathValueExpressionChanged$6GL3"));
      }
    }
  }/*

  private*/ function treeSelectionChanged(selectionModel/*:TreeSelectionModel*/, newNode/*:Model*/)/*:void*/ {
    var newBean/*:Object*/ = this.treeModel$6GL3.getNodeModel(newNode.getId());
    var newNodeId/*:String*/ = this.treeModel$6GL3.getNodeId(newBean);
    if (newNodeId !== newNode.getId()) {
      // an "alias" has been selected: select its original node!
      com.coremedia.ui.util.EventUtil.invokeLater(AS3.bind(this,"ensureVisibleWithHandleAndSelect$6GL3"), this.treePanel$6GL3.getStore().getById(newNodeId));
      return;
    }
    var selection/*:Array*/ = this.treeSelectionModel$6GL3.getSelection();
    var oldNode/*:Model*/ = selection && selection.length === 1 ? selection[0] : null;
    var oldBean/*:Object*/ = oldNode ? this.treeModel$6GL3.getNodeModel(oldNode.getId()) : null;

    if (this.ignoreEmptySelection$6GL3 && !newBean) {
      return;
    }

    if (this.selectedValueExpression$6GL3.getValue() === oldBean || newBean) {
      com.coremedia.ui.logging.Logger.debug(com.coremedia.ui.plugins.BindTreeSelectionPlugin + ": setting to the next value: " + newBean);
      this.selectedValueExpression$6GL3.setValue(newBean);
    }
  }/*

  private*/ function openPathValueExpressionChanged()/*:void*/ {
    var newValue/*:**/ = this.openPathValueExpression$6GL3.getValue();
    if (newValue) {
      this.openPathValueExpression$6GL3.setValue(undefined);

      var selected/*:**/ = this.selectedValueExpression$6GL3.getValue();
      if (newValue === selected) {
        this.tryOpenPath$6GL3();
      } else {
        this.selectedValueExpression$6GL3.setValue(newValue);
      }
    }
  }/*

  private*/ function selectionValueForTreePanelChanged()/*:void*/ {
    if (!(this.isTreePanelReady$6GL3())) {
      return;
    }
    var newSelectValue/*:**/ = this.selectedValueExpression$6GL3.getValue();
    if (!newSelectValue) {
      this.treeSelectionModel$6GL3.deselectAll();
    } else {
      this.tryOpenPath$6GL3();
    }
  }/*

  private*/ function isTreePanelReady()/*:Boolean*/ {
    return ! !this.treePanel$6GL3.getRootNode();
  }/*

  private*/ function computeSelectionPath()/*:Array*/ {
    var selection/*:NodeInterface*/ = this.selectedValueExpression$6GL3.getValue();
    if (selection === undefined) {
      return undefined;
    }
    return this.treeModel$6GL3.getIdPathFromModel(selection);
  }/*

  private*/ function selectionPathChanged(selectedPathValueExpression/*:ValueExpression*/)/*:void*/ {
    var selectionPath/*:Array*/ = selectedPathValueExpression.getValue();
    if (selectionPath === null) {
      // The selection has been removed from the tree.
      // Try to find id paths starting from the old parent node(s):
      if (this.previousSelectionPath$6GL3) {
        for (var i/*:int*/ = this.previousSelectionPath$6GL3.length - 2; i >= 0; i--) {
          var nodeId/*:String*/ = this.previousSelectionPath$6GL3[i];
          var idPath/*:Array*/ = this.treeModel$6GL3.getIdPath(nodeId);
          if (idPath) {
            this.selectPath$6GL3(idPath);
            return;
          }
        }
      }
    } else if (selectionPath !== undefined) {
      if (this.previousSelectionPath$6GL3
              && selectionPath[selectionPath.length - 1] === this.previousSelectionPath$6GL3[this.previousSelectionPath$6GL3.length - 1]
              && !com.coremedia.ui.util.ObjectUtils.equal(selectionPath, this.previousSelectionPath$6GL3)) {
        com.coremedia.ui.util.EventUtil.invokeLater(AS3.bind(this,"selectPath$6GL3"), selectionPath);
      }
      this.previousSelectionPath$6GL3 = selectionPath;
    }
  }/*

  private*/ function selectPath(path/*:Array*/)/*:void*/ {
    if (!(this.isTreePanelReady$6GL3())) {
      return;
    }

    this.treePanel$6GL3.selectPath('>' + path.join('>'));
  }/*

  //especially when switching between views (e.g. between list and tree view
  //of the studio collection) it may be necessary to wait until
  //the tree panel is ready
  private*/ function tryOpenPath()/*:void*/ {var this$=this;
    if (this.treePanel$6GL3.rendered) {
      this.openPath$6GL3();
    } else {
      this.treePanel$6GL3.addListener("render", function ()/*:void*/ {
        this$.openPath$6GL3();
      }, null, {single: true});
    }
  }/*

  private*/ function openPath()/*:void*/ {var this$=this;
    var store/*:Store*/ = this.treePanel$6GL3.getStore();
    var selectedValue/*:Object*/ = this.selectedValueExpression$6GL3.getValue();
    if (AS3.is(store,  com.coremedia.ui.models.TreeExpander) && selectedValue) {
      var nodeId/*:String*/ = this.treeModel$6GL3.getNodeId(selectedValue);
      (AS3.as(store,  com.coremedia.ui.models.TreeExpander)).expandPathTo(nodeId, function()/*:void*/ {this$.selectExistingNode$6GL3(selectedValue);});
    } else {
      // Best effort: If the bean is already loaded, show it and select it.
      this.selectExistingNode$6GL3(selectedValue);
    }
  }/*

  private*/ function selectExistingNode(expectedSelectedValue/*:Object*/)/*:void*/ {var this$=this;
    var selectedValue/*:**/ = this.selectedValueExpression$6GL3.getValue();
    if (expectedSelectedValue !== selectedValue) {
      // The expand request was overtaken by another request. Discard.
      return;
    }
    if (selectedValue) {
      var nodeId/*:String*/ = this.treeModel$6GL3.getNodeId(selectedValue);
      var nodeToSelect/*:NodeInterface*/ = AS3.cast(Ext.data.NodeInterface,this.treePanel$6GL3.getStore().getById(nodeId));
      if (nodeToSelect) {
        var tree/*:TreePanel*/ =AS3.as( nodeToSelect.getOwnerTree(),  Ext.tree.Panel);
        tree.expandPath(nodeToSelect.parentNode ? nodeToSelect.parentNode.getPath() : nodeToSelect.getPath(),
                {
                  callback: function()/*:void*/ {
                    this$.ensureVisibleWithHandleAndSelect$6GL3(nodeToSelect);
                  }
                });
      } else {
        this.treeSelectionModel$6GL3.deselectAll();
        // if folder selection is not possible, this is handled elsewhere (CollectionViewBase currently)
        this.selectedValueExpression$6GL3.setValue(this.defaultValue$6GL3);
      }
    }
  }/*

  private*/ function ensureVisibleWithHandleAndSelect(nodeToSelect/*:NodeInterface*/)/*:void*/ {
    var tree/*:TreePanel*/ =AS3.as( nodeToSelect.getOwnerTree(),  Ext.tree.Panel);
    tree.ensureVisible(nodeToSelect, {select: true});
  }/*

  private*/ function componentDestroyed()/*:void*/ {
    if (this.selectedValueExpression$6GL3) {
      if (this.treeSelectionModel$6GL3) {
        this.treeSelectionModel$6GL3.removeListener('beforeselect',AS3.bind( this,"treeSelectionChanged$6GL3"));
      }

      if (this.updateSelection$6GL3) {
        this.selectedValueExpression$6GL3.removeChangeListener(AS3.bind(this,"selectionValueForTreePanelChanged$6GL3"));
      }
    }
    if (this.selectedPathValueExpression$6GL3) {
      this.selectedPathValueExpression$6GL3.removeChangeListener(AS3.bind(this,"selectionPathChanged$6GL3"));
    }

    if(this.openPathValueExpression$6GL3) {
      this.openPathValueExpression$6GL3.removeChangeListener(AS3.bind(this,"openPathValueExpressionChanged$6GL3"));
    }

    this.treePanel$6GL3 = null;
    this.selectedValueExpression$6GL3 = null;
    this.treeSelectionModel$6GL3 = null;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["ext.Plugin"],
      treeModel$6GL3: null,
      selectedValueExpression$6GL3: null,
      previousSelectionPath$6GL3: null,
      selectedPathValueExpression$6GL3: null,
      defaultValue$6GL3: null,
      openPathValueExpression$6GL3: null,
      ignoreEmptySelection$6GL3: false,
      treePanel$6GL3: null,
      treeSelectionModel$6GL3: null,
      updateSelection$6GL3: false,
      constructor: BindTreeSelectionPluginBase$,
      init: init,
      treeSelectionChanged$6GL3: treeSelectionChanged,
      openPathValueExpressionChanged$6GL3: openPathValueExpressionChanged,
      selectionValueForTreePanelChanged$6GL3: selectionValueForTreePanelChanged,
      isTreePanelReady$6GL3: isTreePanelReady,
      computeSelectionPath$6GL3: computeSelectionPath,
      selectionPathChanged$6GL3: selectionPathChanged,
      selectPath$6GL3: selectPath,
      tryOpenPath$6GL3: tryOpenPath,
      openPath$6GL3: openPath,
      selectExistingNode$6GL3: selectExistingNode,
      ensureVisibleWithHandleAndSelect$6GL3: ensureVisibleWithHandleAndSelect,
      componentDestroyed$6GL3: componentDestroyed,
      requires: [
        "Ext.data.NodeInterface",
        "Ext.selection.TreeModel",
        "Ext.tree.Panel",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.logging.Logger",
        "com.coremedia.ui.util.EventUtil",
        "com.coremedia.ui.util.ObjectUtils",
        "ext.Plugin"
      ],
      uses: [
        "com.coremedia.ui.models.TreeExpander",
        "com.coremedia.ui.plugins.BindTreeSelectionPlugin"
      ]
    };
});
