Ext.define("com.coremedia.ui.components.FloatingToolbarBase", function(FloatingToolbarBase) {/*package com.coremedia.ui.components {

import ext.Component;
import ext.toolbar.Toolbar;

public class FloatingToolbarBase extends Toolbar {

  /**
   * True, if this component is initialized. This is done after the first layout.
   * /
  public var initialized:Boolean = false;

  /**
   * True, if this components offsets are initialized properly.
   * /
  private var offsetsInitialized:Boolean = false;

  /**
   * True, if the toolbar appears to be floating.
   * /
  public var toolbarIsFloating:Boolean = false;

  /**
   * The amount of scrolling that needs to be done (in px) until the scrollbar starts (and stops) floating.
   * /
  public var minScrollDistance:Number;
  public var maxScrollDistance:Number;

  /**
   * The initial top/left values of the toolbar
   * /
  public var initialTopValue:Number;
  public var initialLeftValue:Number;

  /**
   * The global top/left values of the toolbar (distance to the viewport) while not floating.
   * /
  public var nonFloatingToolbarGlobalTopValue:Number;
  public var nonFloatingToolbarGlobalLeftValue:Number;

  /**
   * The offset between the top/left corner of the toolbar and the top/left corner of the editingComponent
   * /
  public var verticalOffsetToEditingComponent:Number = 0;
  public var horizontalOffsetToEditingComponent:Number = 0;

  /**
   * The minimum height, the editingComponent has to have. Otherwise the toolbar will not float.
   * /
  public var editingComponentMinHeight:Number = 300;

  /**
   * The bottom offset. The toolbar will stop scrolling when reaching this distance to the bottom of the editing component.
   * /
  public var bottomOffset:Number = 100;

  /**
   * CSS classes to be applied to the toolbar while floating.
   * /
  public const FLOATING_TOOLBAR_POSITION_CLS:String = "cm-fixed";
  public const FLOATING_TOOLBAR_SHADOW_CLS:String = "cm-floating-toolbar-shadow";

  public*/ function FloatingToolbarBase$(config/*:FloatingToolbar = null*/) {if(arguments.length<=0)config=null;
    this.super$ueUo(config);
    this.on("afterlayout",AS3.bind( this,"initialize$ueUo"));
  }/*

  private*/ function initialize()/*:void*/ {
    if (!this.initialized) {
      this.toolbarIsFloating = false;
      this.initialTopValue = this.getEl().getTop(true);
      this.initialLeftValue = this.getEl().getLeft(true);
      this.horizontalOffsetToEditingComponent = 0;
      this.verticalOffsetToEditingComponent = 0;
    }
    // initialize these values as soon as an item with dimensions is displayed inside the parent container
    // otherwise the globalLeft and globalTop values will be incorrect
    if (!this.offsetsInitialized$ueUo && this.containerHasItemsWithDimensions$ueUo()) {
      this.horizontalOffsetToEditingComponent = getGlobalLeft$static(this.getParentsFirstItem$ueUo()) - getGlobalLeft$static(this);
      this.verticalOffsetToEditingComponent = getGlobalTop$static(this.getParentsFirstItem$ueUo()) - getGlobalTop$static(this);
      this.offsetsInitialized$ueUo = true;
    }

    this.initialized = true;
  }/*

  private*/ function containerHasItemsWithDimensions()/*:Boolean*/ {
    return this.getParentsFirstItem$ueUo().getEl().getWidth() > 0 || this.getParentsFirstItem$ueUo().getEl().getHeight() > 0;
  }/*

  private*/ function getParentsFirstItem()/*:Component*/ {
    return AS3.as( this.ownerCt.itemCollection.get(0),  Ext.Component);
  }/*

  private static*/ function getGlobalLeft$static(component/*:Component*/)/*:Number*/ {
    return component.getEl().getLeft();
  }/*

  private static*/ function getGlobalTop$static(component/*:Component*/)/*:Number*/ {
    return component.getEl().getTop();
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.toolbar.Toolbar",
      initialized: false,
      offsetsInitialized$ueUo: false,
      toolbarIsFloating: false,
      minScrollDistance: NaN,
      maxScrollDistance: NaN,
      initialTopValue: NaN,
      initialLeftValue: NaN,
      nonFloatingToolbarGlobalTopValue: NaN,
      nonFloatingToolbarGlobalLeftValue: NaN,
      verticalOffsetToEditingComponent: 0,
      horizontalOffsetToEditingComponent: 0,
      editingComponentMinHeight: 300,
      bottomOffset: 100,
      FLOATING_TOOLBAR_POSITION_CLS: "cm-fixed",
      FLOATING_TOOLBAR_SHADOW_CLS: "cm-floating-toolbar-shadow",
      constructor: FloatingToolbarBase$,
      super$ueUo: function() {
        Ext.toolbar.Toolbar.prototype.constructor.apply(this, arguments);
      },
      initialize$ueUo: initialize,
      containerHasItemsWithDimensions$ueUo: containerHasItemsWithDimensions,
      getParentsFirstItem$ueUo: getParentsFirstItem,
      requires: [
        "Ext.Component",
        "Ext.toolbar.Toolbar"
      ]
    };
});
