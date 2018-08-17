Ext.define("com.coremedia.cms.editor.sdk.components.breadcrumb.BreadcrumbElementBase", function(BreadcrumbElementBase) {/*package com.coremedia.cms.editor.sdk.components.breadcrumb {

import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.models.NodeChildren;
import com.coremedia.ui.models.TreeModel;
import com.coremedia.ui.models.bem.BEMElement;

import ext.button.SplitButton;
import ext.dom.Element;
import ext.menu.Menu;
import ext.util.Format;

public class BreadcrumbElementBase extends SplitButton {

  private var isInOverflow:Boolean = false;

  /**
   * Currently selected node of the bean tree model.
   * /
  [Bindable]
  public var selectedNodeValueExpression:ValueExpression;

  /**
   * Node id for this breadcrumb element.
   * /
  public var breadcrumbElementId:String;

  /**
   * Determines whether the BreadcrumbElement component should hide its button field if
   * it is the root node (the arrow part of the component stays enabled).
   * /
  public var hideIfRootNode:Boolean;

  /**
   * Tree model for this breadcrumb element.
   * /
  [Bindable]
  public var treeModel:TreeModel;

  /**
   * If set to true this config option disables the navigation down the tree.
   * /
  [Bindable]
  public var disableNavigation:Boolean;

  private var nonLeafChildrenExpression:ValueExpression;

  public static const BREADCRUMB_ROOT_ELEMENT:BEMElement =*/function BREADCRUMB_ROOT_ELEMENT$static_(){BreadcrumbElementBase.BREADCRUMB_ROOT_ELEMENT=( com.coremedia.cms.editor.sdk.components.breadcrumb.Breadcrumb.BREADCRUMB_BLOCK.createElement("root"));}/*;

  /**
   * @param config the config object
   * /
  public*/ function BreadcrumbElementBase$(config/*:BreadcrumbElement = null*/) {if(arguments.length<=0)config=null;
    this.super$Wpmz(config);

    this.nonLeafChildrenExpression$Wpmz = BreadcrumbElementBase.getNonLeafChildrenValueExpression(AS3.getBindable(config,"treeModel"), config.breadcrumbElementId);
    this.nonLeafChildrenExpression$Wpmz.addChangeListener(AS3.bind(this,"handleMenu"));

    this.setIsInOverflow(false);
  }/*

  override protected*/ function onDestroy()/*:void*/ {
    Ext.button.Split.prototype.onDestroy.call(this);
    this.nonLeafChildrenExpression$Wpmz.removeChangeListener(AS3.bind(this,"handleMenu"));
  }/*

  private*/ function isRootNode()/*:Boolean*/ {
    return AS3.getBindable(this,"treeModel").getRootId() === this.breadcrumbElementId;
  }/*

  protected*/ function clickBreadcrumbElementHandler()/*:void*/ {
    if (!this.hideIfRootNode || !this.isRootNode$Wpmz()) {
      AS3.getBindable(this,"selectedNodeValueExpression").setValue(AS3.getBindable(this,"treeModel").getNodeModel(this.breadcrumbElementId));
    }
  }/*


  protected*/ function computeText(disableEllipsis/*:Boolean*/)/*:String*/ {
    var text/*:String*/ = this.breadcrumbElementId === AS3.getBindable(this,"treeModel").getRootId() ? "" : AS3.getBindable(this,"treeModel").getText(this.breadcrumbElementId);
    var shortText/*:String*/ =  disableEllipsis ? text : Ext.util.Format.ellipsis(text, 23, false);
    return shortText;
  }/*

  protected*/ function computeAriaLabel(disableEllipsis/*:Boolean*/)/*:String*/ {
    var text/*:String*/ = this.breadcrumbElementId === AS3.getBindable(this,"treeModel").getRootId() ? this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'CollectionView_breadcrumb_root_text') : AS3.getBindable(this,"treeModel").getText(this.breadcrumbElementId);
    var shortText/*:String*/ =  disableEllipsis ? text : Ext.util.Format.ellipsis(text, 23, false);
    return shortText;
  }/*

  protected*/ function computeIconCls(hideIcon/*:Boolean*/)/*:String*/ {
    if (!hideIcon && AS3.getBindable(this,"treeModel").getIconCls(this.breadcrumbElementId)) {
      return AS3.getBindable(this,"treeModel").getIconCls(this.breadcrumbElementId);
    }
    return "";
  }/*

  protected*/ function addRootCss(addRootCssClass/*:Boolean*/)/*:String*/ {
    if (this.isRootNode$Wpmz()) {
      return BreadcrumbElementBase.BREADCRUMB_ROOT_ELEMENT.getCSSClass();
    }
  }/*

  override protected*/ function afterRender()/*:void*/ {
    Ext.button.Split.prototype.afterRender.call(this);
    this.handleMenu();
  }/*

  public*/ function handleMenu()/*:void*/ {
    var el/*:Element*/ = this.getEl();
    if (el) {

      //noinspection JSMismatchedCollectionQueryUpdate
      var nonLeafChildren/*:Array*/ = this.nonLeafChildrenExpression$Wpmz.getValue();
      if (AS3.getBindable(this,"disableNavigation") || !nonLeafChildren || nonLeafChildren.length === 0) {
        if (AS3.is(AS3.getBindable(this,"menu","DUMMY"),  Ext.menu.Menu)) {
          this.setMenu(false, true);
        }
      }

      if (nonLeafChildren && nonLeafChildren.length > 0) {
        if (!AS3.getBindable(this,"disableNavigation")) {
          var newMenuCfg/*:BreadcrumbElementMenu*/ = AS3.cast(com.coremedia.cms.editor.sdk.components.breadcrumb.BreadcrumbElementMenu,{});
          AS3.setBindable(newMenuCfg,"breadcrumbElementId" , this.breadcrumbElementId);
          AS3.setBindable(newMenuCfg,"treeModel", AS3.getBindable(this,"treeModel"));
          AS3.setBindable(newMenuCfg,"selectedNodeValueExpression" , AS3.getBindable(this,"selectedNodeValueExpression"));
          newMenuCfg.xtype = com.coremedia.cms.editor.sdk.components.breadcrumb.BreadcrumbElementMenu.xtype;
          newMenuCfg.alignOffset = this.isInOverflow$Wpmz ? [0, -30] : [-26, 0];
          var newMenu/*:BreadcrumbElementMenu*/ = new com.coremedia.cms.editor.sdk.components.breadcrumb.BreadcrumbElementMenu(newMenuCfg);

          this.setMenu(newMenu, true);
        }
      }
      this.up().updateLayout();
    }

    this.setArrowVisible(! !AS3.getBindable(this,"menu","DUMMY"));
  }/*

  public*/ function resetMenu()/*:void*/ {
    if (AS3.is(AS3.getBindable(this,"menu","DUMMY"),  Ext.menu.Menu)) {
      this.setMenu(false, true);
    }

    this.handleMenu();
  }/*


  //if menu is in overflow the menu needs a new default offset
  public*/ function setIsInOverflow(overflow/*:Boolean*/)/*:void*/ {
    this.isInOverflow$Wpmz = overflow;

    if (!this.isInOverflow$Wpmz) {
      this.resetMenu();
    } else {
      AS3.getBindable(this,"menu","DUMMY") && (AS3.cast(com.coremedia.cms.editor.sdk.components.breadcrumb.BreadcrumbElementMenu,AS3.getBindable(this,"menu","DUMMY")).alignOffset = [0, -30]);
    }
  }/*

  public static*/ function getNonLeafChildrenValueExpression$static(treeModel/*:TreeModel*/, nodeId/*:String*/)/*:ValueExpression*/ {
    return com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:Array*/ {
      var nodeState/*:NodeChildren*/ = treeModel.getChildren(nodeId);
      if (!nodeState) {
        return undefined;
      }
      return nodeState.getChildIds();
    });
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.button.Split",
      isInOverflow$Wpmz: false,
      breadcrumbElementId: null,
      hideIfRootNode: false,
      nonLeafChildrenExpression$Wpmz: null,
      constructor: BreadcrumbElementBase$,
      super$Wpmz: function() {
        Ext.button.Split.prototype.constructor.apply(this, arguments);
      },
      onDestroy: onDestroy,
      isRootNode$Wpmz: isRootNode,
      clickBreadcrumbElementHandler: clickBreadcrumbElementHandler,
      computeText: computeText,
      computeAriaLabel: computeAriaLabel,
      computeIconCls: computeIconCls,
      addRootCss: addRootCss,
      afterRender: afterRender,
      handleMenu: handleMenu,
      resetMenu: resetMenu,
      setIsInOverflow: setIsInOverflow,
      config: {
        selectedNodeValueExpression: null,
        treeModel: null,
        disableNavigation: false
      },
      statics: {
        BREADCRUMB_ROOT_ELEMENT: undefined,
        getNonLeafChildrenValueExpression: getNonLeafChildrenValueExpression$static,
        __initStatics__: function() {
          BREADCRUMB_ROOT_ELEMENT$static_();
        }
      },
      requires: [
        "Ext.button.Split",
        "Ext.menu.Menu",
        "Ext.util.Format",
        "com.coremedia.ui.data.ValueExpressionFactory"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.components.breadcrumb.Breadcrumb",
        "com.coremedia.cms.editor.sdk.components.breadcrumb.BreadcrumbElementMenu"
      ]
    };
});
