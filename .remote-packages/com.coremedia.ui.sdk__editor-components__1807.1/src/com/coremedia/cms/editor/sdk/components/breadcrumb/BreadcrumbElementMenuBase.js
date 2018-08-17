Ext.define("com.coremedia.cms.editor.sdk.components.breadcrumb.BreadcrumbElementMenuBase", function(BreadcrumbElementMenuBase) {/*package com.coremedia.cms.editor.sdk.components.breadcrumb {

import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.models.NodeChildren;
import com.coremedia.ui.models.TreeModel;

import ext.dom.Element;
import ext.menu.Menu;

public class BreadcrumbElementMenuBase extends Menu {

  /**
   * Tree model for this breadcrumb element menu.
   * /
  [Bindable]
  public var treeModel:TreeModel;

  /**
   * Currently selected node of the bean tree model.
   * /
  [Bindable]
  public var selectedNodeValueExpression:ValueExpression;

  /**
   * @param config the config object
   * /
  public*/ function BreadcrumbElementMenuBase$(config/*:BreadcrumbElementMenu = null*/) {if(arguments.length<=0)config=null;
    this.super$dsWy(config);
  }/*

  internal*/ function onHideInternal()/*:void*/ {
    var buttonEl/*:Element*/ = this.up() && this.up().getEl() ||
            this['cmOwnerCt'] && this['cmOwnerCt'].getEl();
    if (buttonEl) {
      buttonEl.removeCls('arrow-menu-active');
    }
  }/*

  public*/ function getMenuItemModels(treeModel/*:TreeModel*/, breadcrumbElementId/*:String*/, selectedNodeValueExpression/*:ValueExpression*/)/*:ValueExpression*/ {
    return com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function()/*:Array*/ {
      var path/*:Array*/;
      var entity/*:Object*/ = selectedNodeValueExpression.getValue();
      if (entity) {
        path = treeModel.getIdPathFromModel(entity) || [];
      } else {
        path = [];
      }

      var nodeState/*:NodeChildren*/ = treeModel.getChildren(breadcrumbElementId);
      if (!nodeState) {
        return undefined;
      }
      var childIds/*:Array*/ = nodeState.getChildIds();
      var result/*:Array*/ = [];
      for (var i/*:uint*/ = 0; i < childIds.length; i++) {
        var childId/*:**/ = childIds[i];
        var text/*:String*/ = nodeState.getTextsByChildId()[childId];
        var iconCls/*:String*/ = nodeState.getIconsByChildId()[childId];
        var cls/*:String*/ = nodeState.getClsByChildId()[childId];
        var active/*:Boolean*/ = path.indexOf(childId) !== -1;
        result.push({id:childId, text:text, iconCls:iconCls, cls:cls, active:active});
      }
      return result;
    });
  }/*

  public*/ function clickBreadcrumbElementMenuItemHandler(menuItem/*:BreadcrumbElementMenuItem*/)/*:void*/ {
    var entity/*:Object*/ = AS3.getBindable(this,"treeModel").getNodeModel(AS3.getBindable(menuItem,"model").id);
    AS3.getBindable(this,"selectedNodeValueExpression").setValue(entity);
  }/*

  public static*/ function getMenuItemModelKey$static(model/*:Object*/)/*:String*/ {
    return model.id + '#' + model.text + (model.active ? '!' : '.');
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.menu.Menu",
      constructor: BreadcrumbElementMenuBase$,
      super$dsWy: function() {
        Ext.menu.Menu.prototype.constructor.apply(this, arguments);
      },
      onHideInternal: onHideInternal,
      getMenuItemModels: getMenuItemModels,
      clickBreadcrumbElementMenuItemHandler: clickBreadcrumbElementMenuItemHandler,
      config: {
        treeModel: null,
        selectedNodeValueExpression: null
      },
      statics: {getMenuItemModelKey: getMenuItemModelKey$static},
      requires: [
        "Ext.menu.Menu",
        "com.coremedia.ui.data.ValueExpressionFactory"
      ]
    };
});
