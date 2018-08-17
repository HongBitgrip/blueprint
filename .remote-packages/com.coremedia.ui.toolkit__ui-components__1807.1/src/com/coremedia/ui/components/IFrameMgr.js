Ext.define("com.coremedia.ui.components.IFrameMgr", function(IFrameMgr) {/*package com.coremedia.ui.components {
/**
 * Manager for all Components that use an iFrame. Allows to shim/unshim them.
 * Extends the Drag'Drop of Windows and DragZones in order to shim all IFrames that are used when dragging starts.
 *
 * @see Shimmable
 * /
public class IFrameMgr {

  private static*/ var instance$static/*:IFrameMgr*/;/* =*/function instance$static_(){instance$static=( new IFrameMgr());};/*

  //Map of Components. key=id, value=component
  private const shimmables:Object =*/function shimmables_(){this.shimmables$IBgW=( {});}/*;

  /**
   * Register a new Component with an iframe. Ignored if already there. Components are expected to have  toggleShim(Boolean)-Function
   * @param shimmable the iFrame that should be registered
   * /
  public*/ function registerIFrame(shimmable/*:Shimmable*/)/*:void*/ {
    if (!this.shimmables$IBgW[shimmable.getId()]) {
      this.shimmables$IBgW[shimmable.getId()] = shimmable;
    }
  }/*

  /**
   * Unregister the given iframe
   * @param shimmable the iframe to unregister
   * /
  public*/ function unregisterIFrame(shimmable/*:Shimmable*/)/*:void*/ {
    if (this.shimmables$IBgW[shimmable.getId()]) {
      delete this.shimmables$IBgW[shimmable.getId()];
    }
  }/*

  /**
   * show Shims for all registered IFrames
   * /
  public*/ function showShims()/*:void*/ {
    for/* each*/ (var $1 in this.shimmables$IBgW) {var shimmable/*:Shimmable*/ =this.shimmables$IBgW[$1];
      //fails if the Component has not the correct function
      shimmable.toggleShim(true);
    }
  }/*

  /**
   * hide shims for all registered iFrames
   * /
  public*/ function hideShims()/*:void*/ {
    for/* each*/ (var $1 in this.shimmables$IBgW) {var shimmable/*:Shimmable*/ =this.shimmables$IBgW[$1];
      //fails if the Component has not the correct function
      shimmable.toggleShim(false);
    }
  }/*

  public static*/ function getInstance$static()/*:IFrameMgr*/ {
    return instance$static;
  }/*
}*/function IFrameMgr$() {shimmables_.call(this);}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      registerIFrame: registerIFrame,
      unregisterIFrame: unregisterIFrame,
      showShims: showShims,
      hideShims: hideShims,
      constructor: IFrameMgr$,
      statics: {
        instance: undefined,
        getInstance: getInstance$static,
        __initStatics__: function() {
          instance$static_();
        }
      }
    };
});
