Ext.define("com.coremedia.cms.editor.sdk.dashboard.ReloadButtonBase", function(ReloadButtonBase) {/*package com.coremedia.cms.editor.sdk.dashboard {

import com.coremedia.ui.components.IconButton;

public class ReloadButtonBase extends IconButton {
  private static const*/var ANIMATE_CLS$static/*:String*/ = 'animate';/*

  [Bindable]
  public var widget:Reloadable;

  public*/ function ReloadButtonBase$(config/*:IconButton = null*/) {if(arguments.length<=0)config=null;
    this.super$QBBG(config);
  }/*

  protected*/ function reload()/*:void*/ {
    this.removeAnimateClass$QBBG();
    this.el.addCls(ANIMATE_CLS$static);
    this.removeAnimateClass$QBBG(1000);
    AS3.getBindable(this,"widget").reload();
  }/*

  private*/ function removeAnimateClass(delay/*:int = 0*/)/*:void*/ {var this$=this;if(arguments.length<=0)delay=0;
    if (!delay) {
      removeAnimateClassInternal();
    } else {
      window.setTimeout(function ()/*:void*/ {
        removeAnimateClassInternal();
      }, delay);
    }

    function removeAnimateClassInternal()/*:void*/ {
      this$.el.removeCls(ANIMATE_CLS$static);
    }
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.components.IconButton",
      constructor: ReloadButtonBase$,
      super$QBBG: function() {
        com.coremedia.ui.components.IconButton.prototype.constructor.apply(this, arguments);
      },
      reload: reload,
      removeAnimateClass$QBBG: removeAnimateClass,
      config: {widget: null},
      requires: ["com.coremedia.ui.components.IconButton"]
    };
});
