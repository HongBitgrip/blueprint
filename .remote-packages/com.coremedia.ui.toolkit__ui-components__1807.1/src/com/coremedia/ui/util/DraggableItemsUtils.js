Ext.define("com.coremedia.ui.util.DraggableItemsUtils", function(DraggableItemsUtils) {/*package com.coremedia.ui.util {

import com.coremedia.ui.models.bem.BEMBlock;
import com.coremedia.ui.models.bem.BEMElement;
import com.coremedia.ui.models.bem.BEMModifier;

import ext.Component;
import ext.Ext;
import ext.Template;
import ext.XTemplate;
import ext.container.Container;
import ext.dom.Element;

import js.Node;

public class DraggableItemsUtils {

  public static const SOURCE_PLACEHOLDER_BLOCK:BEMBlock =*/function SOURCE_PLACEHOLDER_BLOCK$static_(){DraggableItemsUtils.SOURCE_PLACEHOLDER_BLOCK=( new com.coremedia.ui.models.bem.BEMBlock("cm-draggable-items-source-placeholder"));}/*;
  public static const TARGET_PLACEHOLDER_BLOCK:BEMBlock =*/function TARGET_PLACEHOLDER_BLOCK$static_(){DraggableItemsUtils.TARGET_PLACEHOLDER_BLOCK=( new com.coremedia.ui.models.bem.BEMBlock("cm-draggable-items-target-placeholder"));}/*;
  public static const TARGET_PLACEHOLDER_MODIFIER_SOURCE_POSITION:BEMModifier =*/function TARGET_PLACEHOLDER_MODIFIER_SOURCE_POSITION$static_(){DraggableItemsUtils.TARGET_PLACEHOLDER_MODIFIER_SOURCE_POSITION=( DraggableItemsUtils.TARGET_PLACEHOLDER_BLOCK.createModifier("source-position"));}/*;

  public static const DRAG_GHOST_BLOCK:BEMBlock =*/function DRAG_GHOST_BLOCK$static_(){DraggableItemsUtils.DRAG_GHOST_BLOCK=( new com.coremedia.ui.models.bem.BEMBlock("cm-drag-ghost"));}/*;
  public static const DRAG_GHOST_ELEMENT_ICON:BEMElement =*/function DRAG_GHOST_ELEMENT_ICON$static_(){DraggableItemsUtils.DRAG_GHOST_ELEMENT_ICON=( DraggableItemsUtils.DRAG_GHOST_BLOCK.createElement("icon"));}/*;
  public static const DRAG_GHOST_ELEMENT_TEXT:BEMElement =*/function DRAG_GHOST_ELEMENT_TEXT$static_(){DraggableItemsUtils.DRAG_GHOST_ELEMENT_TEXT=( DraggableItemsUtils.DRAG_GHOST_BLOCK.createElement("text"));}/*;

  public static var DRAG_GHOST_TEMPLATE:Template =*/function DRAG_GHOST_TEMPLATE$static_(){DraggableItemsUtils.DRAG_GHOST_TEMPLATE=( new Ext.XTemplate([
    '<div class="' + DraggableItemsUtils.DRAG_GHOST_BLOCK + '">',
      '<span class="' + DraggableItemsUtils.DRAG_GHOST_ELEMENT_ICON + ' {icon:htmlEncode}"></span>',
      '<span class="' + DraggableItemsUtils.DRAG_GHOST_ELEMENT_TEXT + '">{title:htmlEncode}</span>',
    '</div>']).compile());}/*;

  private static const*/var DRAGGABLE_ITEM_CACHED_HEIGHT$static/*:String*/ = "draggableItemCachedHeight";/*

  /**
   * Finds the component the given element represents.
   *
   * @param container The container to start finding the component from
   * @param el The element to find the component for
   * @return
   * /
  public static*/ function findComponentForElement$static(container/*:Container*/, el/*:Element*/)/*:Component*/ {
    if (container && el) {
      return AS3.as( container.queryBy(function (cmpItem/*:Component*/)/*:Boolean*/ {
                return (cmpItem.getEl() === el);
              })[0],  Ext.Component);
    }
    return null;
  }/*

  /**
   * The default implementation for a ghostBuilder.
   *
   * @param dragItem The drag item to build the ghost for.
   * @return the built ghost
   * /
  public static*/ function defaultGhostBuilder$static(dragItem/*:Component*/)/*:Element*/ {
    dragItem[DRAGGABLE_ITEM_CACHED_HEIGHT$static] = dragItem.getEl().getHeight();
    var node/*:Node*/ = dragItem.getEl().dom.cloneNode(true);
    replaceIdFromNodeRecursive$static(node);

    var ghost/*:Element*/ = Ext.get(node);
    ghost.removeCls("x-box-item");
    ghost.setStyle("top", null);
    ghost.setStyle("background-color", determineBackgroundColor$static(dragItem));

    return Ext.get(node);
  }/*

  private static*/ function determineBackgroundColor$static(dragItem/*:Component*/)/*:String*/ {
    var element/*:Element*/ = dragItem.getEl();

    while (element) {
      var color/*:String*/ = element.getStyle("background-color");
      if (color.indexOf("transparent") === -1) {
        return color;
      }

      element = element.parent();
    }

    return null;
  }/*


  /**
   * The default implementation for a targetPlaceholderBuilder
   *
   * @param dragItem The drag item to build the target placeholder for.
   * @return the built target placeholder
   * /
  public static*/ function defaultTargetPlaceholderBuilder$static(dragItem/*:Component*/)/*:Element*/ {
    var targetPlaceholder/*:Element*/ = createPlaceholderForDragItem$static(dragItem);
    targetPlaceholder.addCls(DraggableItemsUtils.TARGET_PLACEHOLDER_BLOCK.getCSSClass());
    return targetPlaceholder;
  }/*

  /**
   * The default implementation for a sourcePlaceholderBuilder.
   *
   * @param dragItem The drag item to build the source placeholder for.
   * @return the built source placeholder
   * /
  public static*/ function defaultSourcePlaceholderBuilder$static(dragItem/*:Component*/)/*:Element*/ {
    var sourcePlaceholder/*:Element*/ = createPlaceholderForDragItem$static(dragItem);
    sourcePlaceholder.addCls(DraggableItemsUtils.SOURCE_PLACEHOLDER_BLOCK.getCSSClass());
    return sourcePlaceholder;
  }/*

  private static*/ function createPlaceholderForDragItem$static(dragItem/*:Component*/)/*:Element*/ {
    var placeholder/*:Element*/ = Ext.get(window.document.createElement("div"));
    var size/*:**/ = dragItem.getEl().getSize();
    placeholder.setSize("100%", size.height || dragItem[DRAGGABLE_ITEM_CACHED_HEIGHT$static]);
    return placeholder;
  }/*

  private static*/ function replaceIdFromNodeRecursive$static(node/*:Node*/)/*:void*/ {
    if (node.setAttribute) {
      node.setAttribute("id", Ext.id());
    }
    for (var i/*:Number*/ = 0; i < node.childNodes.length; i++) {
      replaceIdFromNodeRecursive$static(node.childNodes[i]);
    }
  }/*

}*/function DraggableItemsUtils$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: DraggableItemsUtils$,
      statics: {
        SOURCE_PLACEHOLDER_BLOCK: undefined,
        TARGET_PLACEHOLDER_BLOCK: undefined,
        TARGET_PLACEHOLDER_MODIFIER_SOURCE_POSITION: undefined,
        DRAG_GHOST_BLOCK: undefined,
        DRAG_GHOST_ELEMENT_ICON: undefined,
        DRAG_GHOST_ELEMENT_TEXT: undefined,
        DRAG_GHOST_TEMPLATE: undefined,
        findComponentForElement: findComponentForElement$static,
        defaultGhostBuilder: defaultGhostBuilder$static,
        defaultTargetPlaceholderBuilder: defaultTargetPlaceholderBuilder$static,
        defaultSourcePlaceholderBuilder: defaultSourcePlaceholderBuilder$static,
        __initStatics__: function() {
          SOURCE_PLACEHOLDER_BLOCK$static_();
          TARGET_PLACEHOLDER_BLOCK$static_();
          TARGET_PLACEHOLDER_MODIFIER_SOURCE_POSITION$static_();
          DRAG_GHOST_BLOCK$static_();
          DRAG_GHOST_ELEMENT_ICON$static_();
          DRAG_GHOST_ELEMENT_TEXT$static_();
          DRAG_GHOST_TEMPLATE$static_();
        }
      },
      requires: [
        "Ext",
        "Ext.Component",
        "Ext.XTemplate"
      ],
      uses: ["com.coremedia.ui.models.bem.BEMBlock"]
    };
});
