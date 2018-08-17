Ext.define("com.coremedia.ui.plugins.DraggableItemsPlugin", function(DraggableItemsPlugin) {/*package com.coremedia.ui.plugins {

import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;

import ext.Component;
import ext.container.Container;
import ext.dd.IDDScrollConfig;
import ext.dd.ScrollManager;
import ext.dom.Element;
import ext.plugin.AbstractPlugin;

[PublicApi]
public class DraggableItemsPlugin extends AbstractPlugin {

  /**
   * If set must return TRUE to enable drag and drop.
   * /
  [Bindable]
  public var enabledVE:ValueExpression;

  /**
   * The DragAndDrop Group for the DragSource and DropTarget.
   * /
  [Bindable]
  public var ddGroup:String;

  /**
   * If true the drag icon and border of the ghost wrapper will not be shown (default: false).
   * /
  [Bindable]
  public var hideGhostWrapper:Boolean;

  /**
   * (optional) The CSS selector to identify a scrollable container that will be automatically scrolled when moving the
   drag item over its edges.
   * /
  [Bindable]
  public var scrollSelector:String;

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
   * The handler to be triggered if a draggable item has been successfully dropped.
   *
   * Two parameters will be provided:
   * - dropIndex:number the new index of the item to be dropped
   * - dragItem:Component the component that was dropped
   *
   * @return specifies if the drop action was successful or not
   * /
  [Bindable]
  public var dropHandler:Function;

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

  /**
   * Function to build a target placeholder for the dragged item.
   * /
  [Bindable]
  public var targetPlaceholderBuilder:Function;

  /**
   * Fallback function to determine an inner drop container based on a drag event.
   * This function is used if the drag event target does not match the given itemSelector.
   * In this case a drop operation would not re-order items.
   * However, it might still be the case that a drop operation should be possible,
   * namely as an addition of the dragged item into an inner drop container.
   * /
  [Bindable]
  public var fallbackDropContainerFinder:Function;

  /**
   * The highlighting-color to apply on the DragZone, when a dragDropElement is released and repaired.
   *
   * The color must be a 6 digit hex value, without a preceding '#'. Defaults to 'c3daf9' if not set.
   * Set to a random string to prevent the dragZone's highlighting effect.
   * /
  [Bindable]
  public var repairHighlightingColor:String;

  private var ct:Container;

  /**
   * Creates a new DragableItemsPlugin
   *
   * @see com.coremedia.ui.config.dragableItemsPlugin
   *
   * @param config the provided configuration
   * /
  public*/ function DraggableItemsPlugin$(config/*:DraggableItemsPlugin = null*/) {if(arguments.length<=0)config=null;
    AS3.setBindable(this,"ddGroup" , AS3.getBindable(config,"ddGroup"));
    AS3.setBindable(this,"enabledVE" , AS3.getBindable(config,"enabledVE"));
    AS3.setBindable(this,"hideGhostWrapper" , AS3.getBindable(config,"hideGhostWrapper"));
    AS3.setBindable(this,"itemSelector" , AS3.getBindable(config,"itemSelector"));
    AS3.setBindable(this,"handleSelector" , AS3.getBindable(config,"handleSelector"));
    AS3.setBindable(this,"scrollSelector" , AS3.getBindable(config,"scrollSelector"));
    AS3.setBindable(this,"dragHandler" , AS3.getBindable(config,"dragHandler"));
    AS3.setBindable(this,"dragEndHandler" , AS3.getBindable(config,"dragEndHandler"));
    AS3.setBindable(this,"dropHandler" , AS3.getBindable(config,"dropHandler"));
    AS3.setBindable(this,"ghostBuilder" , AS3.getBindable(config,"ghostBuilder"));
    AS3.setBindable(this,"sourcePlaceholderBuilder" , AS3.getBindable(config,"sourcePlaceholderBuilder"));
    AS3.setBindable(this,"targetPlaceholderBuilder" , AS3.getBindable(config,"targetPlaceholderBuilder"));
    AS3.setBindable(this,"fallbackDropContainerFinder" , AS3.getBindable(config,"fallbackDropContainerFinder"));
    AS3.setBindable(this,"repairHighlightingColor" , AS3.getBindable(config,"repairHighlightingColor"));
    this.super$ijUO(config);
  }/*

  override public*/ function init(component/*:Component*/)/*:void*/ {var this$=this;
    this.ct$ijUO =AS3.as( component,  Ext.container.Container);
    if (this.ct$ijUO) {
      this.ct$ijUO.on("afterrender", function ()/*:void*/ {
        this$.initDragAndDrop$ijUO();
      });
    }
  }/*

  private*/ function initDragAndDrop()/*:void*/ {var this$=this;
    var dragZoneConfig/*:DraggableItemsDragZone*/ = AS3.cast(com.coremedia.ui.plugins.DraggableItemsDragZone,{});
    dragZoneConfig.ddGroup = AS3.getBindable(this,"ddGroup");
    AS3.setBindable(dragZoneConfig,"dragHandler" , AS3.getBindable(this,"dragHandler"));
    AS3.setBindable(dragZoneConfig,"dragEndHandler" , AS3.getBindable(this,"dragEndHandler"));
    AS3.setBindable(dragZoneConfig,"dragContainer" , this.ct$ijUO);
    AS3.setBindable(dragZoneConfig,"hideGhostWrapper" , AS3.getBindable(this,"hideGhostWrapper"));
    AS3.setBindable(dragZoneConfig,"itemSelector" , AS3.getBindable(this,"itemSelector"));
    AS3.setBindable(dragZoneConfig,"handleSelector" , AS3.getBindable(this,"handleSelector"));
    AS3.setBindable(dragZoneConfig,"ghostBuilder" , AS3.getBindable(this,"ghostBuilder"));
    dragZoneConfig.repairHighlightColor = AS3.getBindable(this,"repairHighlightingColor");
    AS3.setBindable(dragZoneConfig,"sourcePlaceholderBuilder" , AS3.getBindable(this,"sourcePlaceholderBuilder"));

    var dropZoneConfig/*:DraggableItemsDropZone*/ = AS3.cast(com.coremedia.ui.plugins.DraggableItemsDropZone,{});
    dropZoneConfig.ddGroup = AS3.getBindable(this,"ddGroup");
    AS3.setBindable(dropZoneConfig,"dropContainer" , this.ct$ijUO);
    AS3.setBindable(dropZoneConfig,"itemSelector" , AS3.getBindable(this,"itemSelector"));
    AS3.setBindable(dropZoneConfig,"dropHandler" , AS3.getBindable(this,"dropHandler"));
    AS3.setBindable(dropZoneConfig,"targetPlaceholderBuilder" , AS3.getBindable(this,"targetPlaceholderBuilder"));
    AS3.setBindable(dropZoneConfig,"sourcePlaceholderBuilder" , AS3.getBindable(this,"sourcePlaceholderBuilder"));
    AS3.setBindable(dropZoneConfig,"fallbackDropContainerFinder" , AS3.getBindable(this,"fallbackDropContainerFinder"));

    var dragZone/*:DraggableItemsDragZone*/ =
            new com.coremedia.ui.plugins.DraggableItemsDragZone(this.ct$ijUO.getEl(), dragZoneConfig);
    var dropZone/*:DraggableItemsDropZone*/ =
            new com.coremedia.ui.plugins.DraggableItemsDropZone(this.ct$ijUO.getEl(), dropZoneConfig);

    var enabledChanged/*:Function*/ = function(ve/*:ValueExpression*/)/*:void*/ {
      var enabled/*:Boolean*/ =AS3.as( ve.getValue(),  Boolean);
      if (enabled) {
        dragZone.unlock();
        dropZone.unlock();
      } else {
        dropZone.lock();
        dragZone.lock();
      }
    };

    this.ct$ijUO.on("beforedestroy", function ()/*:void*/ {
      this$.getEnabledVE$ijUO().removeChangeListener(enabledChanged);
      dragZone.destroy();
      dropZone.destroy();
    });

    if (AS3.getBindable(this,"scrollSelector")) {
      this.ct$ijUO.on("afterlayout", function ()/*:void*/ {
        var scrollerElement/*:Element*/ = this$.ct$ijUO.el.child(AS3.getBindable(this$,"scrollSelector"));
        if (scrollerElement) {
          var scrollConfig/*:IDDScrollConfig*/ = AS3.cast(ext.dd.IDDScrollConfig,{});
          scrollConfig.vthresh = 40;
          scrollConfig.hthresh = -1;
          scrollConfig.animated = true;
          scrollConfig.increment = 150;
          scrollConfig.frequency = 100;
          scrollerElement.ddScrollConfig = scrollConfig;
          Ext.dd.ScrollManager.register(scrollerElement);
        }
      });
    }
    this.getEnabledVE$ijUO().addChangeListener(enabledChanged);
    enabledChanged(this.getEnabledVE$ijUO());
  }/*

  private*/ function getEnabledVE()/*:ValueExpression*/ {
    if (!AS3.getBindable(this,"enabledVE")) {
      AS3.setBindable(this,"enabledVE" , com.coremedia.ui.data.ValueExpressionFactory.createFromValue(true));
    }
    return AS3.getBindable(this,"enabledVE");
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.plugin.Abstract",
      metadata: {"": ["PublicApi"]},
      ct$ijUO: null,
      constructor: DraggableItemsPlugin$,
      super$ijUO: function() {
        Ext.plugin.Abstract.prototype.constructor.apply(this, arguments);
      },
      init: init,
      initDragAndDrop$ijUO: initDragAndDrop,
      getEnabledVE$ijUO: getEnabledVE,
      config: {
        enabledVE: null,
        ddGroup: null,
        hideGhostWrapper: false,
        scrollSelector: null,
        itemSelector: null,
        handleSelector: null,
        dragHandler: null,
        dragEndHandler: null,
        dropHandler: null,
        ghostBuilder: null,
        sourcePlaceholderBuilder: null,
        targetPlaceholderBuilder: null,
        fallbackDropContainerFinder: null,
        repairHighlightingColor: null
      },
      requires: [
        "Ext.container.Container",
        "Ext.dd.ScrollManager",
        "Ext.plugin.Abstract",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "ext.dd.IDDScrollConfig"
      ],
      uses: [
        "com.coremedia.ui.plugins.DraggableItemsDragZone",
        "com.coremedia.ui.plugins.DraggableItemsDropZone"
      ]
    };
});
