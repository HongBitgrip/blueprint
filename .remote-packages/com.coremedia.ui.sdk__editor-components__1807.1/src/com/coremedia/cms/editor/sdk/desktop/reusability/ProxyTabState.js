Ext.define("com.coremedia.cms.editor.sdk.desktop.reusability.ProxyTabState", function(ProxyTabState) {/*package com.coremedia.cms.editor.sdk.desktop.reusability {
import com.coremedia.ui.util.ObjectUtils;

import ext.Ext;

import joo.JavaScriptObject;

public class ProxyTabState extends JavaScriptObject {

  public var entity:Object;

  public*/ function ProxyTabState$(state/*:Object*/) {this.super$ubcf();
    Ext.apply(this, state);
  }/*

  public*/ function plainState()/*:Object*/ {
    var state/*:Object*/ = {};
    com.coremedia.ui.util.ObjectUtils.mergeOwnProperties(this, state);
    return state;
  }/*

  public*/ function clone()/*:ProxyTabState*/ {
    return new ProxyTabState(this.plainState());
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "joo.JavaScriptObject",
      entity: null,
      constructor: ProxyTabState$,
      super$ubcf: function() {
        joo.JavaScriptObject.prototype.constructor.apply(this, arguments);
      },
      plainState: plainState,
      clone: clone,
      requires: [
        "Ext",
        "com.coremedia.ui.util.ObjectUtils",
        "joo.JavaScriptObject"
      ]
    };
});
