Ext.define("com.coremedia.ui.util.BeanCollectionDropZoneHelper", function(BeanCollectionDropZoneHelper) {/*package com.coremedia.ui.util {
import com.coremedia.ui.data.Bean;
import com.coremedia.ui.data.RemoteBean;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.data.beanFactory;
import com.coremedia.ui.models.DragDropModel;
import com.coremedia.ui.store.BeanRecord;

import ext.Ext;
import ext.data.Model;
import ext.dd.DragSource;
import ext.dom.Element;
import ext.event.Event;

import js.KeyEvent;

public class BeanCollectionDropZoneHelper {

  /**
   * The name of the localModel property storing the node data.
   * /
  private static const*/var NODEDATA_PROPERTY$static/*:String*/ = 'nodeData';/*
  /**
   * The name of the localModel property storing the alternative flag.
   * /
  private static const*/var ALTERNATIVE_PROPERTY$static/*:String*/ = 'alternative';/*

  private var beanCollectionDragDropModel:DragDropModel;

  // Save current drag information to have it available on key events.
  // Key event handlers have no other chance to access this data
  private var dragData:Object;
  private var dragGhost:Element;
  private var dragSource:DragSource;

  private var styleClassValueExpression:ValueExpression =*/function styleClassValueExpression_(){this.styleClassValueExpression$wli$=(
          com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(AS3.bind(this,"computeStyleClass$wli$")));}/*;

  private var localModel:Bean;

  /**
   * Specifies the css class used in the drag ghost if the default action may be performed.
   * /
  private var defaultActionCSSClass:String = "x-dd-drop-ok";

  /**
   * Specifies the css class used in the drag ghost if the alternative action may be performed.
   * /
  private var alternativeActionCSSClass:String = "x-dd-drop-ok-add";

  /**
   * Specifies the css class used in the drag ghost if no action may be performed.
   * /
  private var forbiddenCssClass:String = "x-dd-drop-nodrop";

  /**
   * Specifies if drop mode can be switched to the alternative action.
   * /
  private var allowAlternativeAction:Boolean = true;

  public*/ function BeanCollectionDropZoneHelper$(beanCollectionDragDropModel/*:DragDropModel*/, allowAlternativeAction/*:Boolean = true*/) {styleClassValueExpression_.call(this);if(arguments.length<=1)allowAlternativeAction=true;
    this.beanCollectionDragDropModel$wli$ = beanCollectionDragDropModel;
    this.allowAlternativeAction$wli$ = allowAlternativeAction;
    var properties/*:**/ = {}; //NOSONAR
    properties[ALTERNATIVE_PROPERTY$static] = false;
    this.localModel$wli$ = com.coremedia.ui.data.beanFactory.createLocalBean(properties);
  }/*

  public*/ function setDefaultActionCSSClass(defaultActionCSSClass/*:String*/)/*:void*/ {
    this.defaultActionCSSClass$wli$ = defaultActionCSSClass;
  }/*

  public*/ function setAlternativeActionCSSClass(alternativeActionCSSClass/*:String*/)/*:void*/ {
    this.alternativeActionCSSClass$wli$ = alternativeActionCSSClass;
  }/*

  public*/ function setForbiddenCSSClass(forbiddenCSSClass/*:String*/)/*:void*/ {
    this.forbiddenCssClass$wli$ = forbiddenCSSClass;
  }/*

  private*/ function computeStyleClass()/*:String*/ {
    var nodeData/*:Object*/ = this.localModel$wli$.get(NODEDATA_PROPERTY$static);
    if (!nodeData || !this.dragData$wli$) {
      return this.forbiddenCssClass$wli$;
    }
    //TODO: EXT6_API. nodeData is just an Object. Public-API to access the target node id?
    var targetNodeId/*:String*/ = nodeData['node']['id'];
    var droppedNodeIds/*:Array*/ = BeanCollectionDropZoneHelper.extractNodeIds(this.dragData$wli$);

    var isAlternative/*:Boolean*/ =AS3.as( this.localModel$wli$.get(ALTERNATIVE_PROPERTY$static),  Boolean);

    if (isAlternative && this.beanCollectionDragDropModel$wli$.allowAlternativeAction(this.dragSource$wli$, droppedNodeIds, targetNodeId)) {
      return this.alternativeActionCSSClass$wli$;
    } else if (!isAlternative && this.beanCollectionDragDropModel$wli$.allowDefaultAction(this.dragSource$wli$, droppedNodeIds, targetNodeId)) {
      return this.defaultActionCSSClass$wli$;
    }
    return this.forbiddenCssClass$wli$;
  }/*

  private*/ function updateStyleClass()/*:void*/ {
    if (this.dragGhost$wli$) {
      this.dragGhost$wli$.removeCls([this.alternativeActionCSSClass$wli$, this.defaultActionCSSClass$wli$, this.forbiddenCssClass$wli$]);
      this.dragGhost$wli$.addCls(this.styleClassValueExpression$wli$.getValue());
    }
  }/*

  public static*/ function extractNodeIds$static(dragData/*:Object*/)/*:Array*/ {
    var droppedNodeIds/*:Array*/ = [];
    if (dragData.contents) {
      // Selection from dataView (thumbnail)
      for (var j/*:uint*/ = 0; j < dragData.contents.length; j++) {
        droppedNodeIds.push(BeanCollectionDropZoneHelper.extractNodeId(dragData.contents[j]));
      }
    } else if (dragData.records && dragData.records.length > 0) {
      // (Multi-)selection (from list)
      for (var i/*:uint*/ = 0; i < dragData.records.length; i++) {
        var record/*:Model*/ = dragData.records[i];
        var beanRecord/*:BeanRecord*/ =AS3.as( record,  com.coremedia.ui.store.BeanRecord);
        var nodeId/*:String*/ = beanRecord ? BeanCollectionDropZoneHelper.extractNodeId(beanRecord.getBean()) : record.getId();
        droppedNodeIds.push(nodeId);
      }
    }
    return droppedNodeIds;
  }/*

  public static*/ function getRemoteBeansForNodes$static(nodeIds/*:Array*/)/*:Array*/ {
    var remoteBeans/*:Array*/ = [];
    nodeIds.forEach(function (nodeId/*:String*/)/*:void*/ {
      remoteBeans.push(com.coremedia.ui.data.beanFactory.getRemoteBean(nodeId));
    });
    return remoteBeans;
  }/*

  public static*/ function extractNodeId$static(remoteBean/*:Object*/)/*:String*/ {
    return (AS3.as(remoteBean,  com.coremedia.ui.data.RemoteBean)).getUriPath();
  }/*

  protected*/ function handleKeyDownEvent(event/*:Event*/)/*:void*/ {
    this.updateAlternativeMode$wli$(event);
  }/*

  protected*/ function handleKeyUpEvent(event/*:Event*/)/*:void*/ {
    this.updateAlternativeMode$wli$(event);
  }/*

  private*/ function updateAlternativeMode(event/*:Event*/)/*:void*/ {
    this.localModel$wli$.set(ALTERNATIVE_PROPERTY$static, this.isAlternativeRequested(event));
  }/*

  public*/ function isAlternativeRequested(event/*:Object*/)/*:Boolean*/ {
    if (!this.allowAlternativeAction$wli$) {
      return false;
    }
    var keyCode/*:Number*/ = event.keyCode;
    // Keyup event for alternative key -> No alternative action requested
    if (event.type === "keyup" &&
            (!Ext.isMac && keyCode === KeyEvent.DOM_VK_CONTROL) ||
            (Ext.isMac && keyCode === KeyEvent.DOM_VK_ALT)) {
      return false;
    }
    return (!Ext.isMac && (event.ctrlKey || keyCode === KeyEvent.DOM_VK_CONTROL)) ||
            (Ext.isMac && (event.altKey || keyCode === KeyEvent.DOM_VK_ALT));
  }/*

  public*/ function notifyEnter(source/*:DragSource*/, event/*:Event*/, data/*:Object*/)/*:String*/ {
    // registers a global keydown and keyup listener to modify the drag drop
    // feedback icon when the alternative action dnd modifier key (CTRL) is pressed or released.
    Ext.get(window.document).addListener('keydown',AS3.bind( this,"handleKeyDownEvent"), this);
    Ext.get(window.document).addListener('keyup',AS3.bind( this,"handleKeyUpEvent"), this);

    // saves the given dragData object to have it available in future key event handler calls
    this.dragData$wli$ = data;
    this.dragSource$wli$ = source;

    this.styleClassValueExpression$wli$.addChangeListener(AS3.bind(this,"updateStyleClass$wli$"));

    return this.forbiddenCssClass$wli$;
  }/*

  public*/ function notifyOut(source/*:DragSource*/, e/*:Event*/, data/*:Object*/)/*:void*/ {
    // Remove previously registered key handlers and reset drag info buffers
    Ext.get(window.document).removeListener('keydown',AS3.bind( this,"handleKeyDownEvent"), this);
    Ext.get(window.document).removeListener('keyup',AS3.bind( this,"handleKeyUpEvent"), this);

    this.styleClassValueExpression$wli$.removeChangeListener(AS3.bind(this,"updateStyleClass$wli$"));

    this.dragData$wli$ = null;
    this.dragGhost$wli$ = null;
  }/*

  public*/ function onNodeOver(nodeData/*:Object*/, source/*:DragSource*/, event/*:Event*/, data/*:Object*/)/*:String*/ {
    // Remember dragGhost if it hasn't been saved since the last notifyOut call.
    if (!this.dragGhost$wli$) {
      this.dragGhost$wli$ = Ext.get(source.getDragEl());
    }
    // Remember nodeData as the user might press the alternative key next.
    this.localModel$wli$.set(NODEDATA_PROPERTY$static, nodeData);
    // Remember whether a key indicates the alternative operation.
    this.updateAlternativeMode$wli$(event);
    return this.styleClassValueExpression$wli$.getValue();
  }/*

  public*/ function onNodeDrop(nodeData/*:Object*/, source/*:DragSource*/, dropEvent/*:Event*/, data/*:Object*/)/*:Boolean*/ {
    this.dragData$wli$ = null;
    this.dragGhost$wli$ = null;

    //TODO: EXT6_API. nodeData is just an Object. Public-API to access the target node id?
    var targetNodeId/*:String*/ = nodeData['node']['id'];

    var droppedNodeIds/*:Array*/ = BeanCollectionDropZoneHelper.extractNodeIds(data);
    var isAlternative/*:Boolean*/ = this.isAlternativeRequested(dropEvent);
    var mayPerform/*:Boolean*/ = isAlternative
            ? this.beanCollectionDragDropModel$wli$.allowAlternativeAction(source, droppedNodeIds, targetNodeId)
            : this.beanCollectionDragDropModel$wli$.allowDefaultAction(source, droppedNodeIds, targetNodeId);
    if (mayPerform) {
      try {
        isAlternative
                ? this.beanCollectionDragDropModel$wli$.performAlternativeAction(droppedNodeIds, targetNodeId)
                : this.beanCollectionDragDropModel$wli$.performDefaultAction(droppedNodeIds, targetNodeId);
      } catch(error){if(AS3.is (error,Object)) {
        return false;
      }else throw error;}
    } else {
      return false;
    }

    return true;
  }/*

  public*/ function onContainerOver(source/*:DragSource*/, event/*:Event*/, data/*:Object*/)/*:String*/ {
    // Remember dragGhost if it hasn't been saved since the last notifyOut call.
    if (!this.dragGhost$wli$) {
      this.dragGhost$wli$ = Ext.get(source.getDragEl());
    }

    // Remember whether a key indicates the alternative operation.
    this.updateAlternativeMode$wli$(event);

    // Target node is the DD model component
    var nodeData/*:Object*/ = {node: {id : this.beanCollectionDragDropModel$wli$.getModelItemId()}};
    this.localModel$wli$.set(NODEDATA_PROPERTY$static, nodeData);

    return this.styleClassValueExpression$wli$.getValue();
  }/*

  public*/ function onContainerDrop(dragSource/*:DragSource*/, dropEvent/*:Event*/, data/*:Object*/)/*:Boolean*/ {
    this.dragData$wli$ = null;
    this.dragGhost$wli$ = null;

    var droppedNodeIds/*:Array*/ = BeanCollectionDropZoneHelper.extractNodeIds(data);

    var isAlternative/*:Boolean*/ = this.isAlternativeRequested(dropEvent);
    var modelItemId/*:String*/ = this.beanCollectionDragDropModel$wli$.getModelItemId();
    var mayPerform/*:Boolean*/ = isAlternative
            ? this.beanCollectionDragDropModel$wli$.allowAlternativeAction(dragSource, droppedNodeIds, modelItemId)
            : this.beanCollectionDragDropModel$wli$.allowDefaultAction(dragSource, droppedNodeIds, modelItemId);
    if (mayPerform) {
      try {
        isAlternative ? this.beanCollectionDragDropModel$wli$.performAlternativeAction(droppedNodeIds, modelItemId)
                : this.beanCollectionDragDropModel$wli$.performDefaultAction(droppedNodeIds, modelItemId);
      } catch(error){if(AS3.is (error,Object)) {
        return false;
      }else throw error;}
    } else {
      return false;
    }

    return true;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      beanCollectionDragDropModel$wli$: null,
      dragData$wli$: null,
      dragGhost$wli$: null,
      dragSource$wli$: null,
      localModel$wli$: null,
      defaultActionCSSClass$wli$: "x-dd-drop-ok",
      alternativeActionCSSClass$wli$: "x-dd-drop-ok-add",
      forbiddenCssClass$wli$: "x-dd-drop-nodrop",
      allowAlternativeAction$wli$: true,
      constructor: BeanCollectionDropZoneHelper$,
      setDefaultActionCSSClass: setDefaultActionCSSClass,
      setAlternativeActionCSSClass: setAlternativeActionCSSClass,
      setForbiddenCSSClass: setForbiddenCSSClass,
      computeStyleClass$wli$: computeStyleClass,
      updateStyleClass$wli$: updateStyleClass,
      handleKeyDownEvent: handleKeyDownEvent,
      handleKeyUpEvent: handleKeyUpEvent,
      updateAlternativeMode$wli$: updateAlternativeMode,
      isAlternativeRequested: isAlternativeRequested,
      notifyEnter: notifyEnter,
      notifyOut: notifyOut,
      onNodeOver: onNodeOver,
      onNodeDrop: onNodeDrop,
      onContainerOver: onContainerOver,
      onContainerDrop: onContainerDrop,
      statics: {
        extractNodeIds: extractNodeIds$static,
        getRemoteBeansForNodes: getRemoteBeansForNodes$static,
        extractNodeId: extractNodeId$static
      },
      requires: [
        "Ext",
        "com.coremedia.ui.data.RemoteBean",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.data.beanFactory"
      ],
      uses: ["com.coremedia.ui.store.BeanRecord"]
    };
});
