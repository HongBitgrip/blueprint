Ext.define("com.coremedia.cms.editor.sdk.sites.CloneSiteErrorDialogBase", function(CloneSiteErrorDialogBase) {/*package com.coremedia.cms.editor.sdk.sites {

import com.coremedia.cms.editor.sdk.components.StudioDialog;

public class CloneSiteErrorDialogBase extends StudioDialog {
  public*/ function CloneSiteErrorDialogBase$(config/*:CloneSiteErrorDialog = null*/) {if(arguments.length<=0)config=null;
    this.super$Xbqv(config);
  }/*

  override public*/ function close()/*:void*/ {
    try {
      this.initialConfig.callback && this.initialConfig.callback();
    } finally {
      com.coremedia.cms.editor.sdk.components.StudioDialog.prototype.close.call(this);
    }
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.components.StudioDialog",
      constructor: CloneSiteErrorDialogBase$,
      super$Xbqv: function() {
        com.coremedia.cms.editor.sdk.components.StudioDialog.prototype.constructor.apply(this, arguments);
      },
      close: close,
      requires: ["com.coremedia.cms.editor.sdk.components.StudioDialog"]
    };
});
