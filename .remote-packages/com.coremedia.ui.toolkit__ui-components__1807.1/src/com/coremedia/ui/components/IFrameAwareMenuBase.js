Ext.define("com.coremedia.ui.components.IFrameAwareMenuBase", function(IFrameAwareMenuBase) {/*package com.coremedia.ui.components {
import ext.menu.Menu;

public class IFrameAwareMenuBase extends Menu {

  public*/ function IFrameAwareMenuBase$(config/*:Menu = null*/) {if(arguments.length<=0)config=null;
    this.super$PtFM(config);
    this.on('beforeshow',AS3.bind( this,"handleShow"));
    this.on('beforehide',AS3.bind( this,"handleHide"));
  }/*

  public*/ function handleShow()/*:void*/ {
    com.coremedia.ui.components.IFrameMgr.getInstance().showShims();
  }/*

  public*/ function handleHide()/*:void*/ {
    com.coremedia.ui.components.IFrameMgr.getInstance().hideShims();
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.menu.Menu",
      constructor: IFrameAwareMenuBase$,
      super$PtFM: function() {
        Ext.menu.Menu.prototype.constructor.apply(this, arguments);
      },
      handleShow: handleShow,
      handleHide: handleHide,
      requires: ["Ext.menu.Menu"],
      uses: ["com.coremedia.ui.components.IFrameMgr"]
    };
});
