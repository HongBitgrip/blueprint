Ext.define("com.coremedia.ui.plugins.DraggableItemsDragZone", function(DraggableItemsDragZone) {/*package com.coremedia.ui.plugins {

import com.coremedia.ui.skins.StatusProxySkin;
import com.coremedia.ui.util.DraggableItemsUtils;

import ext.Component;
import ext.Ext;
import ext.container.Container;
import ext.dd.DragZone;
import ext.dom.Element;
import ext.event.Event;

public class DraggableItemsDragZone extends DragZone {

  /**
   * The handler to be triggered on drag.
   *
   * The current dragData will be provided as the only parameter.
   * /
  [Bindable]
  public var dragHandler:Function;

  /**
   * The handler to be triggered on drag end.
   *
   * The current dragData will be provided as the only parameter.
   * /
  [Bindable]
  public var dragEndHandler:Function;

  /**
   * If true the drag icon and border of the ghost wrapper will not be shown (default: false).
   * /
  [Bindable]
  public var hideGhostWrapper:Boolean;

  /**
   * The CSS selector to identify items in the dom.
   * /
  [Bindable]
  public var itemSelector:String;

  /**
   * (optional) If set specifies the selector for the drag handle to use. Otherwise the whole item is used as handle.
   * /
  [Bindable]
  public var handleSelector:String;

  /**
   * The drag container.
   * /
  [Bindable]
  public var dragContainer:Container;

  /**
   * Function to build a drag ghost for the dragged item.
   * /
  [Bindable]
  public var ghostBuilder:Function;

  /**
   * Function to build a source placeholder for the dragged item.
   * /
  [Bindable]
  public var sourcePlaceholderBuilder:Function;

  public*/ function DraggableItemsDragZone$(dragContainerEl/*:Element*/, config/*:DraggableItemsDragZone*/) {
    this.super$2kub(dragContainerEl, config);
    AS3.setBindable(this,"dragHandler" , AS3.getBindable(config,"dragHandler"));
    AS3.setBindable(this,"dragEndHandler" , AS3.getBindable(config,"dragEndHandler"));
    AS3.setBindable(this,"hideGhostWrapper" , AS3.getBindable(config,"hideGhostWrapper"));
    AS3.setBindable(this,"dragContainer" , AS3.getBindable(config,"dragContainer"));
    AS3.setBindable(this,"itemSelector" , AS3.getBindable(config,"itemSelector"));
    AS3.setBindable(this,"handleSelector" , AS3.getBindable(config,"handleSelector"));
    AS3.setBindable(this,"ghostBuilder" , AS3.getBindable(config,"ghostBuilder") || com.coremedia.ui.util.DraggableItemsUtils.defaultGhostBuilder);
    AS3.setBindable(this,"sourcePlaceholderBuilder" , AS3.getBindable(config,"sourcePlaceholderBuilder") || com.coremedia.ui.util.DraggableItemsUtils.defaultSourcePlaceholderBuilder);

    if (AS3.getBindable(this,"hideGhostWrapper")) {
      this.getProxy().setUI(com.coremedia.ui.skins.StatusProxySkin.SIMPLE.getSkin());
    }
  }/*

  override public*/ function getDragData(evtObj/*:Event*/)/*:Object*/ {
    var sourceElement/*:Element*/ =AS3.as( evtObj.getTarget(AS3.getBindable(this,"itemSelector"), null, true),  Ext.dom.Element);
    // if handle selector is specified, it must be one of the targets ancestors
    if (sourceElement && (!AS3.getBindable(this,"handleSelector") || evtObj.getTarget(AS3.getBindable(this,"handleSelector")))) {
      var clickedItem/*:Component*/ = com.coremedia.ui.util.DraggableItemsUtils.findComponentForElement(AS3.getBindable(this,"dragContainer"), sourceElement);

      if (!clickedItem) {
        return null;
      }

      // Construct drag ghost
      var ghost/*:Element*/ = AS3.getBindable(this,"ghostBuilder")(clickedItem);
      // if drag ghost has no id, attach an new id
      if (!ghost.id) {
        ghost.id = Ext.id();
      }

      // Construct source placeholder
      var sourcePlaceholder/*:Element*/ = AS3.getBindable(this,"sourcePlaceholderBuilder")(clickedItem);

      // required to properly calculate the ghost position relative to the mouse position
      this._domRef = sourceElement.dom;

      return {
        // own data
        dragItem: clickedItem,
        sourcePlaceholder: sourcePlaceholder,
        sourceElement: sourceElement,
        // required by API
        ddel: ghost.dom,
        xy: sourceElement.getXY()
      };
    }
    return null;
  }/*

  override public*/ function getRepairXY(e/*:Event*/)/*:Array*/ {
    return this.dragData.xy;
  }/*

  override public*/ function autoOffset(iPageX/*:int*/, iPageY/*:int*/)/*:void*/ {
    if (AS3.getBindable(this,"hideGhostWrapper")) {
      this.setDelta(iPageX - this.startPageX, iPageY - this.startPageY);
    } else {
      Ext.dd.DragZone.prototype.autoOffset.call(this,iPageX, iPageY);
    }
  }/*

  override public*/ function onStartDrag(x/*:Number*/, y/*:Number*/)/*:void*/ {
    Ext.dd.DragZone.prototype.onStartDrag.call(this,x, y);
    this.hideSourceElement$2kub();
  }/*

  override public*/ function onDrag(e/*:Event*/)/*:void*/ {
    Ext.dd.DragZone.prototype.onDrag.call(this,e);
    AS3.getBindable(this,"dragHandler") && AS3.getBindable(this,"dragHandler")(this.dragData);
  }/*

  override public*/ function endDrag(e/*:Event*/)/*:void*/ {
    AS3.getBindable(this,"dragEndHandler") && AS3.getBindable(this,"dragEndHandler")(this.dragData);
    Ext.dd.DragZone.prototype.endDrag.call(this,e);
  }/*

  // afterDragDrop and afterInvalidDrop do not exist
  override public*/ function onMouseUp(e/*:Event*/)/*:void*/ {
    Ext.dd.DragZone.prototype.onMouseUp.call(this,e);
    this.showSourceElement$2kub();
  }/*

  private*/ function showSourceElement()/*:void*/ {
    if (this.dragData.sourceElement) {
      this.dragData.sourcePlaceholder && this.dragData.sourcePlaceholder.remove();
      this.dragData.sourceElement.show();
      this.dragData.sourceElement.setStyle("position", "");
      this.dragData.dragItem.updateLayout();
    }
  }/*


  private*/ function hideSourceElement()/*:void*/ {
    if (this.dragData.sourceElement) {
      this.dragData.sourceElement.hide();
      this.dragData.sourcePlaceholder.insertAfter(this.dragData.sourceElement);
    }
  }/*

  override public*/ function destroy(/*...params*/)/*:void*/ {var params=Array.prototype.slice.call(arguments);
    Ext.dd.DragZone.prototype.destroy.call(this,params);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.dd.DragZone",
      constructor: DraggableItemsDragZone$,
      super$2kub: function() {
        Ext.dd.DragZone.prototype.constructor.apply(this, arguments);
      },
      getDragData: getDragData,
      getRepairXY: getRepairXY,
      autoOffset: autoOffset,
      onStartDrag: onStartDrag,
      onDrag: onDrag,
      endDrag: endDrag,
      onMouseUp: onMouseUp,
      showSourceElement$2kub: showSourceElement,
      hideSourceElement$2kub: hideSourceElement,
      destroy: destroy,
      config: {
        dragHandler: null,
        dragEndHandler: null,
        hideGhostWrapper: false,
        itemSelector: null,
        handleSelector: null,
        dragContainer: null,
        ghostBuilder: null,
        sourcePlaceholderBuilder: null
      },
      requires: [
        "Ext",
        "Ext.dd.DragZone",
        "Ext.dom.Element"
      ],
      uses: [
        "com.coremedia.ui.skins.StatusProxySkin",
        "com.coremedia.ui.util.DraggableItemsUtils"
      ]
    };
});
