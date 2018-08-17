Ext.define("com.coremedia.cms.editor.sdk.util.ContentExportActionBase", function(ContentExportActionBase) {/*package com.coremedia.cms.editor.sdk.util {
import com.coremedia.cap.content.Content;
import com.coremedia.cms.editor.sdk.actions.ContentAction;

/**
 * Console content export
 * /
public class ContentExportActionBase extends ContentAction {

  public*/ function ContentExportActionBase$(config/*:ContentExportAction = undefined*/) {
    this.super$b3e2(config);
    this.setHandler(AS3.bind(this,"handleAction$b3e2"), this);
  }/*

  private*/ function handleAction()/*:void*/ {
    var content/*:Content*/ = this.getContents()[0];
    if(content) {
      com.coremedia.cms.editor.sdk.util.ContentExport.consoleExport(content);
    }
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.actions.ContentAction",
      constructor: ContentExportActionBase$,
      super$b3e2: function() {
        com.coremedia.cms.editor.sdk.actions.ContentAction.prototype.constructor.apply(this, arguments);
      },
      handleAction$b3e2: handleAction,
      requires: ["com.coremedia.cms.editor.sdk.actions.ContentAction"],
      uses: ["com.coremedia.cms.editor.sdk.util.ContentExport"]
    };
});
