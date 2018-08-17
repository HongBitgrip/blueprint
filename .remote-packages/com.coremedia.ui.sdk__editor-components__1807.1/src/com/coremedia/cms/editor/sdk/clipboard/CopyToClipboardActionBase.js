Ext.define("com.coremedia.cms.editor.sdk.clipboard.CopyToClipboardActionBase", function(CopyToClipboardActionBase) {/*package com.coremedia.cms.editor.sdk.clipboard {
import com.coremedia.cap.content.Content;
import com.coremedia.cms.editor.sdk.actions.*;
import com.coremedia.ui.data.RemoteBeanUtil;

[PublicApi]
public class CopyToClipboardActionBase extends ContentAction {

  public*/ function CopyToClipboardActionBase$(config/*:CopyToClipboardAction = null*/) {if(arguments.length<=0)config=null;
    this.super$4f4x(AS3.cast(com.coremedia.cms.editor.sdk.clipboard.CopyToClipboardAction,com.coremedia.cms.editor.sdk.actions.ActionConfigUtil.extendConfig(config, 'copyToClipboard', {handler:AS3.bind( this,"copyToClipboard$4f4x")})));
  }/*

  override protected*/ function isDisabledFor(contents/*:Array*/)/*:Boolean*/ {
    if (contents.length < 1) {
      return true;
    }
    var anyContentNotCopyable/*:Boolean*/ = false;
    for (var i/*:int*/ =0; i < contents.length; i++) {
      // disable the action when one of the content is not-readable or deleted or destroyed
      var content/*:Content*/ = contents[i];
      if (!content || !com.coremedia.ui.data.RemoteBeanUtil.isAccessible(content)) {
        anyContentNotCopyable = true;
        break;
      }


    }
    return anyContentNotCopyable;
  }/*

  private*/ function copyToClipboard()/*:void*/ {
    var clipboard/*:Clipboard*/ = com.coremedia.cms.editor.sdk.clipboard.Clipboard.getInstance();
    clipboard.setValue(this.getContents(), com.coremedia.cms.editor.sdk.clipboard.Clipboard.COPY);
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.actions.ContentAction",
      metadata: {"": ["PublicApi"]},
      constructor: CopyToClipboardActionBase$,
      super$4f4x: function() {
        com.coremedia.cms.editor.sdk.actions.ContentAction.prototype.constructor.apply(this, arguments);
      },
      isDisabledFor: isDisabledFor,
      copyToClipboard$4f4x: copyToClipboard,
      requires: [
        "com.coremedia.cms.editor.sdk.actions.ContentAction",
        "com.coremedia.ui.data.RemoteBeanUtil"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.actions.ActionConfigUtil",
        "com.coremedia.cms.editor.sdk.clipboard.Clipboard",
        "com.coremedia.cms.editor.sdk.clipboard.CopyToClipboardAction"
      ]
    };
});
