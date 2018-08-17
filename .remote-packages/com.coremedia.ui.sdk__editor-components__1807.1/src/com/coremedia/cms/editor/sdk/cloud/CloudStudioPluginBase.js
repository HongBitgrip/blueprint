Ext.define("com.coremedia.cms.editor.sdk.cloud.CloudStudioPluginBase", function(CloudStudioPluginBase) {/*package com.coremedia.cms.editor.sdk.cloud {

import com.coremedia.cap.common.CapLoginService;
import com.coremedia.cms.editor.configuration.StudioPlugin;
import com.coremedia.cms.editor.sdk.editorContext;

public class CloudStudioPluginBase extends StudioPlugin {
  public*/ function CloudStudioPluginBase$(config/*:CloudStudioPlugin = null*/) {if(arguments.length<=0)config=null;
    this.super$E_IS(config);
  }/*

  internal*/ function returnToCloud()/*:void*/ {
    var loginService/*:CapLoginService*/ = com.coremedia.cms.editor.sdk.editorContext.getSession().getConnection().getLoginService();
    var loginUrl/*:String*/ = loginService.get("loginUrl");
    window.location.href = loginUrl;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.configuration.StudioPlugin",
      constructor: CloudStudioPluginBase$,
      super$E_IS: function() {
        com.coremedia.cms.editor.configuration.StudioPlugin.prototype.constructor.apply(this, arguments);
      },
      returnToCloud: returnToCloud,
      requires: ["com.coremedia.cms.editor.configuration.StudioPlugin"],
      uses: ["com.coremedia.cms.editor.sdk.editorContext"]
    };
});
