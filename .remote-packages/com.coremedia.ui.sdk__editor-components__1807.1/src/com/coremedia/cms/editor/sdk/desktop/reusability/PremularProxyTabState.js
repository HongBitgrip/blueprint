Ext.define("com.coremedia.cms.editor.sdk.desktop.reusability.PremularProxyTabState", function(PremularProxyTabState) {/*package com.coremedia.cms.editor.sdk.desktop.reusability {
import com.coremedia.cap.content.Content;
import com.coremedia.cms.editor.sdk.premular.PremularConfiguration;

public class PremularProxyTabState extends ProxyTabState {

  public var content:Content;
  public var premularConfiguration:PremularConfiguration;
  public var contentTypeName:String;

  public*/ function PremularProxyTabState$(state/*:Object*/) {
    this.super$qSsN (state);
  }/*

  override public*/ function clone()/*:ProxyTabState*/ {
    return new PremularProxyTabState(this.plainState());
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.desktop.reusability.ProxyTabState",
      content: null,
      premularConfiguration: null,
      contentTypeName: null,
      constructor: PremularProxyTabState$,
      super$qSsN: function() {
        com.coremedia.cms.editor.sdk.desktop.reusability.ProxyTabState.prototype.constructor.apply(this, arguments);
      },
      clone: clone,
      requires: ["com.coremedia.cms.editor.sdk.desktop.reusability.ProxyTabState"]
    };
});
