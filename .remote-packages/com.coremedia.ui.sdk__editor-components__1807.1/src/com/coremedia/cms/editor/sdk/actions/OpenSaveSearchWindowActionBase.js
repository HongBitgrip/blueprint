Ext.define("com.coremedia.cms.editor.sdk.actions.OpenSaveSearchWindowActionBase", function(OpenSaveSearchWindowActionBase) {/*package com.coremedia.cms.editor.sdk.actions {

import com.coremedia.ui.actions.OpenDialogAction;

public class OpenSaveSearchWindowActionBase extends OpenDialogAction {
  public*/ function OpenSaveSearchWindowActionBase$(config/*:OpenSaveSearchWindowAction = null*/) {if(arguments.length<=0)config=null;
    this.super$2$Rn(AS3.cast(com.coremedia.cms.editor.sdk.actions.OpenSaveSearchWindowAction,com.coremedia.cms.editor.sdk.actions.ActionConfigUtil.extendConfig(config, "saveSearch")));
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.actions.OpenDialogAction",
      constructor: OpenSaveSearchWindowActionBase$,
      super$2$Rn: function() {
        com.coremedia.ui.actions.OpenDialogAction.prototype.constructor.apply(this, arguments);
      },
      requires: ["com.coremedia.ui.actions.OpenDialogAction"],
      uses: [
        "com.coremedia.cms.editor.sdk.actions.ActionConfigUtil",
        "com.coremedia.cms.editor.sdk.actions.OpenSaveSearchWindowAction"
      ]
    };
});
