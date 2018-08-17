Ext.define("com.coremedia.cms.editor.sdk.clipboard.CutToClipboardActionBase", function(CutToClipboardActionBase) {/*package com.coremedia.cms.editor.sdk.clipboard {
import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.authorization.AccessControl;
import com.coremedia.cap.content.authorization.Right;
import com.coremedia.cms.editor.sdk.ContentTreeRelation;
import com.coremedia.cms.editor.sdk.ContentTreeRelationProvider;
import com.coremedia.cms.editor.sdk.actions.*;
import com.coremedia.ui.data.RemoteBeanUtil;

[PublicApi]
public class CutToClipboardActionBase extends ContentAction {

  public*/ function CutToClipboardActionBase$(config/*:CutToClipboardAction = null*/) {if(arguments.length<=0)config=null;
    this.super$SUyo(AS3.cast(com.coremedia.cms.editor.sdk.clipboard.CutToClipboardAction,com.coremedia.cms.editor.sdk.actions.ActionConfigUtil.extendConfig(config, 'cutToClipboard', {handler:AS3.bind( this,"cutToClipboard$SUyo")})));
  }/*

  override protected*/ function isDisabledFor(contents/*:Array*/)/*:Boolean*/ {
    if (contents.length < 1) {
      return true;
    }

    var accessControl/*:AccessControl*/ = (AS3.as(contents[0],  com.coremedia.cap.content.Content)).getRepository().getAccessControl();
    for (var i/*:int*/ =0; i < contents.length; i++) {
      // disable the action when one of the content is not-readable or deleted or destroyed
      var content/*:Content*/ = contents[i];
      if (!content ||
              !com.coremedia.ui.data.RemoteBeanUtil.isAccessible(content) ||
              content.isRoot() || content.isDeleted() ||
              !accessControl.mayPerformForType(content.getParent(), content.getType(), com.coremedia.cap.content.authorization.Right.WRITE)) {
        return true;
      }
    }

    var sourceTypeName/*:String*/ = contents[0].getType().getName();
    var folderSourceTreeRelation/*:ContentTreeRelation*/ = com.coremedia.cms.editor.sdk.ContentTreeRelationProvider.getContentTreeRelation();
    if(folderSourceTreeRelation === undefined) {
      return undefined;
    }
    if(folderSourceTreeRelation === null) {
      return true;
    }
    return !folderSourceTreeRelation.mayMove(contents, null);
  }/*

  private*/ function cutToClipboard()/*:void*/ {
    var clipboard/*:Clipboard*/ = com.coremedia.cms.editor.sdk.clipboard.Clipboard.getInstance();
    clipboard.setValue(this.getContents(), com.coremedia.cms.editor.sdk.clipboard.Clipboard.MOVE);
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.actions.ContentAction",
      metadata: {"": ["PublicApi"]},
      constructor: CutToClipboardActionBase$,
      super$SUyo: function() {
        com.coremedia.cms.editor.sdk.actions.ContentAction.prototype.constructor.apply(this, arguments);
      },
      isDisabledFor: isDisabledFor,
      cutToClipboard$SUyo: cutToClipboard,
      requires: [
        "com.coremedia.cap.content.Content",
        "com.coremedia.cap.content.authorization.Right",
        "com.coremedia.cms.editor.sdk.actions.ContentAction",
        "com.coremedia.ui.data.RemoteBeanUtil"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.ContentTreeRelationProvider",
        "com.coremedia.cms.editor.sdk.actions.ActionConfigUtil",
        "com.coremedia.cms.editor.sdk.clipboard.Clipboard",
        "com.coremedia.cms.editor.sdk.clipboard.CutToClipboardAction"
      ]
    };
});
