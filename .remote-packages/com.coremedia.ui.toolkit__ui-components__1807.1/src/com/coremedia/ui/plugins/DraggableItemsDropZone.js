Ext.define("com.coremedia.ui.plugins.DraggableItemsDropZone", function(DraggableItemsDropZone) {/*package com.coremedia.ui.plugins {
import com.coremedia.ui.util.DraggableItemsUtils;

import ext.Component;
import ext.Ext;
import ext.button.Button;
import ext.container.Container;
import ext.dd.DragSource;
import ext.dd.DropZone;
import ext.dom.Element;
import ext.event.Event;

import js.HTMLElement;

public class DraggableItemsDropZone extends DropZone {

  /**
   * The drag container.
   * /
  [Bindable]
  public var dropContainer:Container;

  /**
   * The CSS selector to identify items in the dom.
   * /
  [Bindable]
  public var itemSelector:String;

  /**
   * The handler to be triggered if a draggable item has been successfully dropped.
   * Two parameters will be provided:
   * - dropIndex:number the new index of the item to be dropped
   * - dragItem:Component the component that was dropped
   * 
   * return:Boolean specifies if the drop action was successful or not
   * /
  [Bindable]
  public var dropHandler:Function;

  /**
   * Function to build a target placeholder for the drop position of the dragged item.
   * /
  [Bindable]
  public var targetPlaceholderBuilder:Function;

  [Bindable]
  public var sourcePlaceholderBuilder:Function;

  /**
   * Fallback function to determine an inner drop container based on a drag event.
   * This function is used if the drag event target does not match the given itemSelector.
   * In this case a drop operation would not re-order items.
   * However, it might still be the case that a drop operation should be possible,
   * namely as an addition of the dragged item into an inner drop container.
   * /
  [Bindable]
  public var fallbackDropContainerFinder:Function;

  private var targetPlaceholderModifierCls:String;
  private var outerDropContainer:Container;
  private var dummyTargetComp:Component;

  public*/ function DraggableItemsDropZone$(dropContainerEl/*:Element*/, config/*:DraggableItemsDropZone*/) {
    this.super$RPfW(dropContainerEl, config);
    AS3.setBindable(this,"dropContainer" , AS3.getBindable(config,"dropContainer"));
    this.outerDropContainer$RPfW = AS3.getBindable(this,"dropContainer");
    AS3.setBindable(this,"itemSelector" , AS3.getBindable(config,"itemSelector"));
    AS3.setBindable(this,"dropHandler" , AS3.getBindable(config,"dropHandler"));
    AS3.setBindable(this,"targetPlaceholderBuilder" , AS3.getBindable(config,"targetPlaceholderBuilder") || com.coremedia.ui.util.DraggableItemsUtils.defaultTargetPlaceholderBuilder);
    AS3.setBindable(this,"sourcePlaceholderBuilder" , AS3.getBindable(config,"sourcePlaceholderBuilder") || com.coremedia.ui.util.DraggableItemsUtils.defaultSourcePlaceholderBuilder);
    AS3.setBindable(this,"fallbackDropContainerFinder" , AS3.getBindable(config,"fallbackDropContainerFinder"));
  }/*


  override public*/ function notifyEnter(source/*:DragSource*/, e/*:Event*/, data/*:Object*/)/*:String*/ {
    var result/*:String*/ = Ext.dd.DropZone.prototype.notifyEnter.call(this,source, e, data);

    var draggedItem/*:Component*/ =AS3.as( data.dragItem,  Ext.Component);

    if (!draggedItem) {
      return this.dropNotAllowed;
    }

    // Construct target placeholder
    var targetPlaceholder/*:Element*/ =AS3.as( AS3.getBindable(this,"targetPlaceholderBuilder")(draggedItem),  Ext.dom.Element);
    this.targetPlaceholderModifierCls$RPfW = null;
    if (targetPlaceholder.hasCls(com.coremedia.ui.util.DraggableItemsUtils.TARGET_PLACEHOLDER_BLOCK.getCSSClass())) {
      this.targetPlaceholderModifierCls$RPfW = com.coremedia.ui.util.DraggableItemsUtils.TARGET_PLACEHOLDER_MODIFIER_SOURCE_POSITION.getCSSClass();
    }

    if (targetPlaceholder) {
      this.targetPlaceholderModifierCls$RPfW && targetPlaceholder.addCls(this.targetPlaceholderModifierCls$RPfW);
      targetPlaceholder.insertAfter(draggedItem.getEl());
      data.targetPlaceholder = targetPlaceholder;

      if (this.isDragSourceDragTarget$RPfW(source)) {
        var sourcePlaceholder/*:Element*/ =AS3.as( data.sourcePlaceholder,  Ext.dom.Element);
        sourcePlaceholder && hideSourcePlaceholder$static(data);
      }

      repairTopValues$static(targetPlaceholder.parent(), draggedItem);
    }

    return result;
  }/*

  override public*/ function notifyOut(source/*:DragSource*/, e/*:Event*/, data/*:Object*/)/*:void*/ {
    var targetPlaceholder/*:Element*/ =AS3.as( data.targetPlaceholder,  Ext.dom.Element);

    if (targetPlaceholder) {
      targetPlaceholder.destroy();
      delete data.targetPlaceholder;

      if (this.isDragSourceDragTarget$RPfW(source)) {
        AS3.getBindable(this,"sourcePlaceholderBuilder") && showSourcePlaceholder$static(AS3.getBindable(this,"sourcePlaceholderBuilder"), data);
      }
    }

    repairTopValues$static(data.sourceElement.parent(), data.dragItem);

    Ext.dd.DropZone.prototype.notifyOut.call(this,source, e, data);
  }/*

  override public*/ function onContainerOver(source/*:DragSource*/, evt/*:Event*/, data/*:Object*/)/*:String*/ {
    var targetPlaceholder/*:Element*/ =AS3.as( data.targetPlaceholder,  Ext.dom.Element);
    var draggedItem/*:Component*/ =AS3.as( data.dragItem,  Ext.Component);

    // should never happen but just to be sure
    if (!targetPlaceholder || !draggedItem) {
      return Ext.dd.DropZone.prototype.onContainerOver.call(this,source, evt, data);
    }

    // if evt is targetPlaceholder no recalculation is needed
    var targetId/*:String*/ = evt.getTarget(null, null, true).id;
    if (targetId === targetPlaceholder.id) {
      return this.dropAllowed;
    }

    var targetElement/*:Element*/ = this.getTargetElement$RPfW(evt);

    if (!targetElement && AS3.getBindable(this,"fallbackDropContainerFinder")) {
      targetElement = this.getTargetElementByFallback$RPfW(evt, targetElement, draggedItem);
    }

    var component/*:Component*/ = com.coremedia.ui.util.DraggableItemsUtils.findComponentForElement(this.outerDropContainer$RPfW, targetElement);
    if (component) {
      AS3.setBindable(this,"dropContainer" , component.up());
    }

    // determine position of targetPlaceholder
    var dropPosition/*:int*/ = this.calculateDropPosition$RPfW(draggedItem, this.getTargetPlaceholderPosition$RPfW(targetPlaceholder));

    if (!targetElement) {
      // cursor must be in a gap between different items
      // if last drop position is valid, drop is allowed
      return this.isValidDropPosition$RPfW(dropPosition, draggedItem) ? this.dropAllowed : this.dropNotAllowed;
    }

    // Special handling for hover effects on buttons
    this.removeHoverClassIfButton$RPfW(evt);

    // calculate if drag source is to be dropped before or after the target element
    var isDropAfter/*:Boolean*/ = calculateIsDropAfter$static(targetElement, evt);

    // calculate new placeholder position
    var newDropPosition/*:int*/ = this.calculateNewDropPosition$RPfW(draggedItem, targetElement, isDropAfter);

    // only change target placeholder if anything has changed
    if (newDropPosition !== dropPosition) {
      // move placeholder
      movePlaceholderToElement$static(targetPlaceholder, targetElement, isDropAfter);
      repairTopValues$static(targetPlaceholder.parent(), draggedItem);

      // placeholder gets special class if it is at the source position
      this.updatePlaceholderClass$RPfW(targetPlaceholder, draggedItem, newDropPosition);
    }

    return this.dropAllowed;
  }/*

  private*/ function getTargetElementByFallback(evt/*:Event*/, targetElement/*:Element*/, draggedItem/*:Component*/)/*:Element*/ {
    var cont/*:Container*/ = AS3.getBindable(this,"fallbackDropContainerFinder")(evt);
    if (cont) {
      var matchingElements/*:Array*/ = cont.getEl().query(AS3.getBindable(this,"itemSelector"));
      if (matchingElements.length > 0) {
        targetElement = Ext.get(matchingElements[matchingElements.length - 1]);
      } else {
        this.dummyTargetComp$RPfW && this.dummyTargetComp$RPfW.destroy();
        var dummyTargetCompCfg/*:Component*/ = AS3.cast(Ext.Component,{});
        dummyTargetCompCfg.cls = draggedItem.getEl().dom.className;
        AS3.setBindable(dummyTargetCompCfg,"height" , 0);
        cont.add(dummyTargetCompCfg);
        this.dummyTargetComp$RPfW =AS3.as( cont.itemCollection.last(),  Ext.Component);
        targetElement = this.dummyTargetComp$RPfW.getEl();
      }
    }
    return targetElement;
  }/*

  override public*/ function onContainerDrop(source/*:DragSource*/, e/*:Event*/, data/*:Object*/)/*:Boolean*/ {
    var targetPlaceholder/*:Element*/ =AS3.as( data.targetPlaceholder,  Ext.dom.Element);
    var draggedItem/*:Component*/ =AS3.as( data.dragItem,  Ext.Component);

    // drop can occur without notifyEnter or onContainerOver, this should be the only case where data is not initialized
    if (!targetPlaceholder || !draggedItem) {
      // avoids that repair will be triggered when not really dragging
      return true;
    }

    var placeholderPosition/*:int*/ = this.getTargetPlaceholderPosition$RPfW(targetPlaceholder);
    var dropPosition/*:int*/ = this.calculateDropPosition$RPfW(draggedItem, placeholderPosition);

    // remove placeholder
    targetPlaceholder.destroy();

    // Special handling for hover effects on buttons
    this.addHoverClassIfButton$RPfW(e);

    // if dropPosition is not valid, container drop has failed
    if (!this.isValidDropPosition$RPfW(dropPosition, draggedItem)) {
      return false;
    }

    var success/*:Boolean*/ = true;
    var oldSourcePosition/*:int*/ = this.getDragSourcePosition$RPfW(draggedItem);
    if (oldSourcePosition !== dropPosition) {
      success = !AS3.getBindable(this,"dropHandler") || AS3.getBindable(this,"dropHandler")(dropPosition, draggedItem, AS3.getBindable(this,"dropContainer"));
      if (success) {
        this.rearrangeDomPosition$RPfW(draggedItem, oldSourcePosition, dropPosition);
      }
    }

    this.dummyTargetComp$RPfW && this.dummyTargetComp$RPfW.destroy();

    return success;
  }/*

  private*/ function updatePlaceholderClass(targetPlaceholder/*:Element*/, draggedItem/*:Component*/, dropPosition/*:int*/)/*:void*/ {
    var oldSourcePosition/*:int*/ = this.getDragSourcePosition$RPfW(draggedItem);
    if (dropPosition === oldSourcePosition
          && AS3.getBindable(this,"dropContainer") === draggedItem.up()) {
      this.targetPlaceholderModifierCls$RPfW && targetPlaceholder.addCls(this.targetPlaceholderModifierCls$RPfW);
    } else {
      this.targetPlaceholderModifierCls$RPfW && targetPlaceholder.removeCls(this.targetPlaceholderModifierCls$RPfW);
    }
  }/*

  private*/ function isValidDropPosition(dropPosition/*:int*/, draggedItem/*:Component*/)/*:Boolean*/ {
    if (AS3.getBindable(this,"dropContainer").itemCollection.indexOf(draggedItem) === -1) {
      return dropPosition > -1 && dropPosition <= AS3.getBindable(this,"dropContainer").itemCollection.length;
    } else {
      return dropPosition > -1 && dropPosition < AS3.getBindable(this,"dropContainer").itemCollection.length;
    }
  }/*

  private*/ function rearrangeDomPosition(draggedItem/*:Component*/, oldSourcePosition/*:int*/, dropPosition/*:int*/)/*:void*/ {
    if (dropPosition === 0) {
      // source position has changed so item will not be inserted before itsself!
      draggedItem.getEl().insertBefore(AS3.getBindable(this,"dropContainer").itemCollection.getAt(0).getEl());
    } else {
      if (oldSourcePosition < dropPosition) {
        draggedItem.getEl().insertAfter(AS3.getBindable(this,"dropContainer").itemCollection.getAt(dropPosition).getEl());
      } else {
        draggedItem.getEl().insertAfter(AS3.getBindable(this,"dropContainer").itemCollection.getAt(dropPosition - 1).getEl());
      }
    }
  }/*

  private*/ function removeHoverClassIfButton(e/*:Event*/)/*:void*/ {
    var targetElement/*:Element*/ = this.getTargetElement$RPfW(e);
    var targetComponent/*:Component*/ = com.coremedia.ui.util.DraggableItemsUtils.findComponentForElement(AS3.getBindable(this,"dropContainer"), targetElement);
    if (AS3.is(targetComponent,  Ext.button.Button)) {
      targetComponent.removeCls("x-btn-over");
    }
  }/*

  private*/ function addHoverClassIfButton(e/*:Event*/)/*:void*/ {
    var targetElement/*:Element*/ = this.getTargetElement$RPfW(e);
    var targetComponent/*:Component*/ = com.coremedia.ui.util.DraggableItemsUtils.findComponentForElement(AS3.getBindable(this,"dropContainer"), targetElement);
    if (AS3.is(targetComponent,  Ext.button.Button)) {
      targetComponent.addCls("x-btn-over");
    }
  }/*

  private*/ function calculateNewDropPosition(draggedItem/*:Component*/, targetElement/*:Element*/, isDropAfter/*:Boolean*/)/*:int*/ {
    var newTarget/*:Component*/ = com.coremedia.ui.util.DraggableItemsUtils.findComponentForElement(AS3.getBindable(this,"dropContainer"), targetElement);
    var newPlaceholderPosition/*:int*/ = AS3.getBindable(this,"dropContainer").itemCollection.indexOf(newTarget);
    if (isDropAfter) {
      newPlaceholderPosition++;
    }
    var newDropPosition/*:int*/ = this.calculateDropPosition$RPfW(draggedItem, newPlaceholderPosition);
    return newDropPosition;
  }/*

  private*/ function getDragSourcePosition(draggedItem/*:Component*/)/*:Number*/ {
    return AS3.getBindable(this,"dropContainer").itemCollection.indexOf(draggedItem);
  }/*

  private*/ function getTargetElement(e/*:Event*/)/*:Element*/ {
    // check if proxy is selected
    var proxy/*:HTMLElement*/ = e.getTarget(".x-dd-drag-proxy");
    if (proxy) {
      // if this is the case the pointer is over the drag proxy
      // for hideGhostWrapper this should be suppressed by the pointer-events: none attribute in case the browser
      // supports it

      // the workaround is to hide the ghost temporarily to check whats underneath the ghost
      var xy/*:Array*/ = e.getXY();
      proxy.style.display = "none";
      var result/*:Element*/ =AS3.as( Ext.get(AS3.as(window.document["elementFromPoint"](xy[0], xy[1]),  HTMLElement)).findParent(AS3.getBindable(this,"itemSelector"), 10, true),  Ext.dom.Element);
      proxy.style.display = "";
      return result;
    }
    return AS3.as( e.getTarget(AS3.getBindable(this,"itemSelector"), null, true),  Ext.dom.Element);
  }/*

  private*/ function calculateDropPosition(draggedItem/*:Component*/, placeholderPosition/*:int*/)/*:int*/ {
    if (placeholderPosition !== -1
            && this.getDragSourcePosition$RPfW(draggedItem) !== -1
            && this.getDragSourcePosition$RPfW(draggedItem) < placeholderPosition) {
      return placeholderPosition - 1;
    } else {
      return placeholderPosition;
    }
  }/*

  /**
   * Retrieves the position of the target placeholder relative to the other items of the dropContainer.
   *
   * @param targetPlaceholder The target placeholder which position is to be checked
   * @return The position of the target placeholder, if no position can be determined -1 will be returned
   * /
  private*/ function getTargetPlaceholderPosition(targetPlaceholder/*:Element*/)/*:int*/ {
    if (targetPlaceholder.isStyle("display", "none")) {
      return -1;
    }
    // check if the prev sibling matches the selector
    var prevElement/*:Element*/ = this.findPrevMatchingElement$RPfW(targetPlaceholder);
    // if an element was found, determine the position of the component in the dropContainer
    if (prevElement) {
      var prevComponent/*:Component*/ = com.coremedia.ui.util.DraggableItemsUtils.findComponentForElement(AS3.getBindable(this,"dropContainer"), prevElement);
      var prevPosition/*:Number*/ = AS3.getBindable(this,"dropContainer").itemCollection.indexOf(prevComponent);
      if (prevPosition > -1) {
        // it is the prev position, so we add 1
        return prevPosition + 1;
      }
    }
    // otherwise check if the next sibling matches the selector
    var nextElement/*:Element*/ = this.findNextMatchingElement$RPfW(targetPlaceholder);
    // if an element was found, determine the position of the component in the dropContainer
    if (nextElement) {
      var nextComponent/*:Component*/ = com.coremedia.ui.util.DraggableItemsUtils.findComponentForElement(AS3.getBindable(this,"dropContainer"), nextElement);
      var nextPosition/*:Number*/ = AS3.getBindable(this,"dropContainer").itemCollection.indexOf(nextComponent);
      if (nextPosition > -1) {
        // nothing to add, this is the position of the placeholder
        return nextPosition;
      }
    }
    // if the placeholder has no matching siblings return -1 indicating that no position was found
    return -1;
  }/*

  private*/ function findPrevMatchingElement(targetPlaceholder/*:Element*/)/*:Element*/ {
    return targetPlaceholder.prev(AS3.getBindable(this,"itemSelector"));
  }/*

  private*/ function findNextMatchingElement(targetPlaceholder/*:Element*/)/*:Element*/ {
    return targetPlaceholder.next(AS3.getBindable(this,"itemSelector"));
  }/*

  private*/ function isDragSourceDragTarget(source/*:DragSource*/)/*:Boolean*/ {
    var draggableItemsDragZone/*:DraggableItemsDragZone*/ =AS3.as( source,  com.coremedia.ui.plugins.DraggableItemsDragZone);
    return draggableItemsDragZone && AS3.getBindable(draggableItemsDragZone,"dragContainer") === this.outerDropContainer$RPfW;
  }/*

  private static*/ function calculateIsDropAfter$static(targetElement/*:Element*/, e/*:Event*/)/*:Boolean*/ {
    var height/*:int*/ = targetElement.getHeight();
    var positionY/*:int*/ = targetElement.getY();
    var centerY/*:int*/ = positionY + Math.floor(height / 2);
    var mouseY/*:int*/ = e.getXY()[1];
    var isDropAfter/*:Boolean*/ = (mouseY >= centerY);
    return isDropAfter;
  }/*

  private static*/ function movePlaceholderToElement$static(targetPlaceholder/*:Element*/, targetElement/*:Element*/, isDropAfter/*:Boolean*/)/*:void*/ {
    if (!isDropAfter) {
      targetPlaceholder.insertBefore(targetElement);
    } else {
      targetPlaceholder.insertAfter(targetElement);
    }
  }/*

  private static*/ function hideSourcePlaceholder$static(dragData/*:Object*/)/*:void*/ {
    dragData.sourcePlaceholder.destroy();
    delete dragData.sourcePlaceholder;
  }/*

  private static*/ function showSourcePlaceholder$static(sourcePlaceholderBuilder/*:Function*/, dragData/*:Object*/)/*:void*/ {
    var sourcePlaceholder/*:Element*/ = sourcePlaceholderBuilder(dragData.dragItem, dragData.dragItemSize);
    dragData.sourcePlaceholder = sourcePlaceholder;
    sourcePlaceholder.insertAfter(dragData.dragItem.getEl());
  }/*

  private static*/ function repairTopValues$static(containerElement/*:Element*/, draggedItem/*:Component*/)/*:void*/ {
    if (!draggedItem.getEl().isStyle("position", "absolute")) {
      return;
    }

    var margin/*:Object*/;
    var topSum/*:int*/ = 0;
    var child/*:Element*/ = containerElement.first();
    while (child) {
      if (!child.isStyle("display", "none")) {
        margin = child.getMargin();
        child["setMargin"](null);
        topSum = topSum + child.getMargin().top;
        child.dom.style.top = topSum + "px";
        topSum = topSum + child.getHeight() + child.getMargin().bottom;
        child["setMargin"](margin);
      }
      child = child.next();
    }
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.dd.DropZone",
      targetPlaceholderModifierCls$RPfW: null,
      outerDropContainer$RPfW: null,
      dummyTargetComp$RPfW: null,
      constructor: DraggableItemsDropZone$,
      super$RPfW: function() {
        Ext.dd.DropZone.prototype.constructor.apply(this, arguments);
      },
      notifyEnter: notifyEnter,
      notifyOut: notifyOut,
      onContainerOver: onContainerOver,
      getTargetElementByFallback$RPfW: getTargetElementByFallback,
      onContainerDrop: onContainerDrop,
      updatePlaceholderClass$RPfW: updatePlaceholderClass,
      isValidDropPosition$RPfW: isValidDropPosition,
      rearrangeDomPosition$RPfW: rearrangeDomPosition,
      removeHoverClassIfButton$RPfW: removeHoverClassIfButton,
      addHoverClassIfButton$RPfW: addHoverClassIfButton,
      calculateNewDropPosition$RPfW: calculateNewDropPosition,
      getDragSourcePosition$RPfW: getDragSourcePosition,
      getTargetElement$RPfW: getTargetElement,
      calculateDropPosition$RPfW: calculateDropPosition,
      getTargetPlaceholderPosition$RPfW: getTargetPlaceholderPosition,
      findPrevMatchingElement$RPfW: findPrevMatchingElement,
      findNextMatchingElement$RPfW: findNextMatchingElement,
      isDragSourceDragTarget$RPfW: isDragSourceDragTarget,
      config: {
        dropContainer: null,
        itemSelector: null,
        dropHandler: null,
        targetPlaceholderBuilder: null,
        sourcePlaceholderBuilder: null,
        fallbackDropContainerFinder: null
      },
      requires: [
        "Ext",
        "Ext.Component",
        "Ext.button.Button",
        "Ext.dd.DropZone",
        "Ext.dom.Element"
      ],
      uses: [
        "com.coremedia.ui.plugins.DraggableItemsDragZone",
        "com.coremedia.ui.util.DraggableItemsUtils"
      ]
    };
});
