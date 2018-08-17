Ext.define("com.coremedia.cms.editor.sdk.desktop.sidepanel.SidePanelFloatingWindowBase", function(SidePanelFloatingWindowBase) {/*package com.coremedia.cms.editor.sdk.desktop.sidepanel {

import com.coremedia.cms.editor.sdk.components.StudioDialog;
import com.coremedia.ui.logging.Logger;

import ext.Component;
import ext.Ext;
import ext.event.Event;
import ext.util.ComponentDragger;

public class SidePanelFloatingWindowBase extends StudioDialog {

  internal static const STATE_ID_PREFIX:String = 'side-panel-window_';

  private var startX:Number;
  private var startY:Number;

  // The height of the window header. We have to use a constant here, because this component is not yet rendered.
  private const headerHeight:Number = 34;

  private var docked:Boolean;

  public*/ function SidePanelFloatingWindowBase$(config/*:SidePanelFloatingWindow = null*/) {if(arguments.length<=0)config=null;
    if (!config.items || config.items.length < 1) {
      throw AS3.cast(AS3.Error,'Window must not have 0 items');
    }

    //auto apply aria label from the first child so that the dialog itself has an ariaLabel
    if(config.items[0].ariaLabel) {
      config.ariaLabel = config.items[0].ariaLabel;
    }

    var item/*:Component*/ =AS3.as( config.items[0],  Ext.Component);
    if (!item) {
      throw AS3.cast(AS3.Error,'Item is not a valid component');
    }

    this['id'] = SidePanelFloatingWindowBase.STATE_ID_PREFIX + item.getId();
    item.enableBubble(['show', 'hide']);

    this.startX$QdH7 = AS3.getBindable(config,"x","DUMMY");
    this.startY$QdH7 = AS3.getBindable(config,"y","DUMMY");

    AS3.setBindable(config,"title" , item['title']);
    AS3.setBindable(config,"width" , item.initialConfig.width);
    AS3.setBindable(config,"height" , config.header ? item.initialConfig.height + this.headerHeight$QdH7 : item.initialConfig.height);
    AS3.setBindable(config,"minWidth" , item.initialConfig.minWidth);
    // item.initialConfig.minHeight is the minHeight of the component inside the windows body. To get the right minHeight for the
    // window, we have to add the windows header to the minHeight config
    AS3.setBindable(config,"minHeight" , config.header ? item.initialConfig.minHeight + this.headerHeight$QdH7 : item.initialConfig.minHeight);

    this.super$QdH7(AS3.cast(com.coremedia.cms.editor.sdk.components.StudioDialog,Ext.apply({},
            config, item['getWindowDefaults'] && item['getWindowDefaults']())));

    this.on('beforeAdd', onBeforeAddInternal$static);
    this.on('beforeremove',AS3.bind( this,"onBeforeRemove$QdH7"));

    this.on('show',AS3.bind( this,"onShowInternal$QdH7"));
    this.on('hide',AS3.bind( this,"onHideInternal$QdH7"));

    this.on('beforestatesave',AS3.bind( this,"checkIfDocked$QdH7"));

    this.mon(item, 'titlechange',AS3.bind( this,"onTitleChange$QdH7"));

    // Re-register nested floatings with their new zIndexParent (the SidePanelFloatingWindow in this case)
    com.coremedia.cms.editor.sdk.desktop.sidepanel.SidePanelManagerImpl.reRegisterFloatings(this);
  }/*

  private static*/ function onBeforeAddInternal$static()/*:Boolean*/ {
    com.coremedia.ui.logging.Logger.error('It is not allowed to add new components to this window. Please create a new one');
    return false;
  }/*

  private*/ function onBeforeRemove()/*:void*/ {
    var item/*:Component*/ = this.getComponent(0);
    item && item.mun(item, 'titlechange',AS3.bind( this,"onTitleChange$QdH7"));
  }/*

  override public*/ function getState()/*:Object*/ {
    return {
      x: AS3.getBindable(this,"x","DUMMY"),
      y: AS3.getBindable(this,"y","DUMMY"),
      height: this.getHeight(),
      width: this.getWidth()
    };
  }/*

  private*/ function checkIfDocked()/*:Boolean*/ {
    return !this.docked$QdH7;
  }/*

  //noinspection JSUnusedLocalSymbols
  private*/ function onTitleChange(component/*:Component*/, title/*:String*/)/*:Boolean*/ {
    this.setTitle(title);
  }/*

  override public*/ function applyState(state/*:Object*/)/*:void*/ {var this$=this;
    if (this.rendered) {
      this.doApplyState$QdH7(state);
    } else {
      this.on('afterrender', function()/*:void*/ {
        this$.doApplyState$QdH7(state);
      });
    }
  }/*

  private*/ function doApplyState(state/*:Object*/)/*:void*/ {
    var posX/*:Number*/ = this.startX$QdH7 || state.x;
    var posY/*:Number*/ = this.startY$QdH7 || state.y;

    var viewSize/*:Object*/ = Ext.getBody().getViewSize();
    if (posX < 0 || posX > viewSize.width ||
            posY < 0 || posY > viewSize.height) {
      posX = 100;
      posY = 100;
    }

    this['x'] = posX;
    this['y'] = posY;
    this.setPosition(posX, posY);

    this['width'] = state.width;
    this.setWidth(state.width);

    this['height'] = state.height;
    this.setHeight(state.height);

    state.visible && this.show();
  }/*

  private*/ function onShowInternal(component/*:Component*/)/*:void*/ {
    var item/*:Component*/ = this.getComponent(0);
    if (item && component === this) {
      item.events['show'].bubble = false;
      item.show();
      item.events['show'].bubble = true;
    } else {
      this.rendered && this.suspendEvents(false);
      this.show();
      this.rendered && this.resumeEvents();
    }

    this.toFront();
  }/*

  private*/ function onHideInternal(component/*:Component*/)/*:void*/ {
    var item/*:Component*/ = this.getComponent(0);
    if (item && component === this) {
      item.events['hide'].bubble = false;
      // The floating window is already hidden, consequently the inner component
      // is no longer visible. In this case, its hide() method does nothing.
      // Thus we enforce an event for the sake of listeners that directly listen
      // to the inner component.
      item.fireEvent("hide", item);
      item.events['hide'].bubble = true;
    } else {
      this.rendered && this.suspendEvents(false);
      this.hide();
      this.rendered && this.resumeEvents();
    }
  }/*

  private*/ function setupDD()/*:void*/ {var this$=this;
    var me/*:SidePanelFloatingWindow*/ = AS3.cast(com.coremedia.cms.editor.sdk.desktop.sidepanel.SidePanelFloatingWindow,this);
    var componentDragger/*:ComponentDragger*/ = AS3.cast(Ext.util.ComponentDragger,this.dd);

    var originalOnDrag/*:Function*/ =AS3.bind( componentDragger,"onDrag");
    componentDragger.onDrag = function (e/*:Event*/)/*:**/ {arguments=Array.prototype.slice.call(arguments);
      var result/*:**/ = originalOnDrag.apply(AS3.bind(componentDragger,"onDrag"), arguments);
      AS3.cast(com.coremedia.cms.editor.sdk.desktop.sidepanel.SidePanelManagerImpl,com.coremedia.cms.editor.sdk.desktop.sidepanel.sidePanelManager).onDragFloatingWindow(me, e);
      return result;
    };

    var originalOnEnd/*:Function*/ =AS3.bind( componentDragger,"onEnd");
    componentDragger.onEnd = function (e/*:Event*/)/*:**/ {arguments=Array.prototype.slice.call(arguments);
      var result/*:**/ = originalOnEnd.apply(componentDragger, arguments);
      this$.docked$QdH7 = AS3.cast(com.coremedia.cms.editor.sdk.desktop.sidepanel.SidePanelManagerImpl,com.coremedia.cms.editor.sdk.desktop.sidepanel.sidePanelManager).endDragFloatingWindow(me, e);
      return result;
    };
  }/*

  override protected*/ function onBoxReady(width/*:Number*/, height/*:Number*/)/*:void*/ {
    com.coremedia.cms.editor.sdk.components.StudioDialog.prototype.onBoxReady.call(this,width, height);
    this.setupDD$QdH7();
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.components.StudioDialog",
      startX$QdH7: NaN,
      startY$QdH7: NaN,
      headerHeight$QdH7: 34,
      docked$QdH7: false,
      constructor: SidePanelFloatingWindowBase$,
      super$QdH7: function() {
        com.coremedia.cms.editor.sdk.components.StudioDialog.prototype.constructor.apply(this, arguments);
      },
      onBeforeRemove$QdH7: onBeforeRemove,
      getState: getState,
      checkIfDocked$QdH7: checkIfDocked,
      onTitleChange$QdH7: onTitleChange,
      applyState: applyState,
      doApplyState$QdH7: doApplyState,
      onShowInternal$QdH7: onShowInternal,
      onHideInternal$QdH7: onHideInternal,
      setupDD$QdH7: setupDD,
      onBoxReady: onBoxReady,
      statics: {STATE_ID_PREFIX: 'side-panel-window_'},
      requires: [
        "AS3.Error",
        "Ext",
        "Ext.Component",
        "Ext.util.ComponentDragger",
        "com.coremedia.cms.editor.sdk.components.StudioDialog",
        "com.coremedia.ui.logging.Logger"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.desktop.sidepanel.SidePanelFloatingWindow",
        "com.coremedia.cms.editor.sdk.desktop.sidepanel.SidePanelManagerImpl",
        "com.coremedia.cms.editor.sdk.desktop.sidepanel.sidePanelManager"
      ]
    };
});
