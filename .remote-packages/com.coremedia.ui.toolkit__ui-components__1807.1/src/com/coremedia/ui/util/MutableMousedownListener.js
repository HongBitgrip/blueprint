Ext.define("com.coremedia.ui.util.MutableMousedownListener", function(MutableMousedownListener) {/*package com.coremedia.ui.util {
import com.coremedia.ui.components.IFrameMgr;

import ext.EventManager;
import ext.event.Event;

import js.Node;

public class MutableMousedownListener {

  private var target:Node;
  private var handler:Function;
  private var showShims:Boolean;

  private var isMuteNextEvent:Boolean = false;
  private var isEnabled:Boolean = false;

  /**
   * Creates a new MutableMousedownListener
   *
   * @param target The target node to attach the listener
   * @param handler The handler to handle the mousedown event
   * @param showShims Activates shims if handler is active
   * /
  public*/ function MutableMousedownListener$(target/*: Node*/, handler/*: Function*/, showShims/*:Boolean = false*/) {if(arguments.length<=2)showShims=false;
    this.target$3D1z = target;
    this.handler$3D1z = handler;
    this.showShims$3D1z = showShims;
  }/*

  public*/ function enable()/*:void*/ {
    if (!this.isEnabled$3D1z) {
      Ext.EventManager.on(this.target$3D1z, "mousedown",AS3.bind( this,"mutableHandler$3D1z"));
      if (this.showShims$3D1z) {
        com.coremedia.ui.components.IFrameMgr.getInstance().showShims();
      }
      this.isEnabled$3D1z = true;
    }
  }/*

  public*/ function disable()/*:void*/ {
    if (this.isEnabled$3D1z) {
      Ext.EventManager.removeListener(this.target$3D1z, "mousedown",AS3.bind( this,"mutableHandler$3D1z"));
      if (this.showShims$3D1z) {
        com.coremedia.ui.components.IFrameMgr.getInstance().hideShims();
      }
      this.isEnabled$3D1z = false;
    }
  }/*

  public*/ function muteNextEvent()/*:void*/ {
    this.isMuteNextEvent$3D1z = true;
  }/*

  public*/ function trigger()/*:void*/ {
    if (this.isEnabled$3D1z) {
      this.mutableHandler$3D1z();
    }
  }/*

  private*/ function mutableHandler(evt/*:Event = null*/)/*:void*/ {if(arguments.length<=0)evt=null;
    if (!this.isMuteNextEvent$3D1z) {
      this.handler$3D1z(evt);
    } else {
      this.isMuteNextEvent$3D1z = false;
    }
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      target$3D1z: null,
      handler$3D1z: null,
      showShims$3D1z: false,
      isMuteNextEvent$3D1z: false,
      isEnabled$3D1z: false,
      constructor: MutableMousedownListener$,
      enable: enable,
      disable: disable,
      muteNextEvent: muteNextEvent,
      trigger: trigger,
      mutableHandler$3D1z: mutableHandler,
      requires: ["Ext.EventManager"],
      uses: ["com.coremedia.ui.components.IFrameMgr"]
    };
});
