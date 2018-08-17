Ext.define("com.coremedia.cms.editor.sdk.actions.LinkListPasteAction", function(LinkListPasteAction) {/*package com.coremedia.cms.editor.sdk.actions {

import com.coremedia.cms.editor.sdk.clipboard.Clipboard;
import com.coremedia.cms.editor.sdk.clipboard.PasteFromClipboardAction;
import com.coremedia.cms.editor.sdk.util.MessageBoxUtil;

import mx.resources.ResourceManager;

[PublicApi]
public class LinkListPasteAction extends AbstractLinkListAction {

  public static const ACTION_ID:String =*/function ACTION_ID$static_(){LinkListPasteAction.ACTION_ID=( com.coremedia.cms.editor.sdk.clipboard.PasteFromClipboardAction.ACTION_ID);}/*;

  [ExtConfig]
  public var replace:Boolean;

  public*/ function LinkListPasteAction$(config/*:LinkListPasteAction = null*/) {if(arguments.length<=0)config=null;
    if (config.replace !== undefined) {
      this.replace = config.replace;
    }
    this.super$IZ66(config);
  }/*

  override protected*/ function defaultHandler()/*:void*/ {
    var contentsToPaste/*:Array*/ = com.coremedia.cms.editor.sdk.clipboard.Clipboard.getInstance().getContents();
    try {
      if (this.replace) {
        this.linkListWrapper.setLinks(contentsToPaste);
      } else {
        this.linkListWrapper.addLinks(contentsToPaste);
      }
    } catch(e){if(AS3.is (e,AS3.Error)) {
      var errorMsg/*:String*/ = e.message || "";
      var dialogTitle/*:String*/ = mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'dialog_pasteErrorTitle_text');
      com.coremedia.cms.editor.sdk.util.MessageBoxUtil.showInfo(dialogTitle, errorMsg);
      return;
    }else throw e;}

    // select the newly pasted contents
    this.selectedValuesExpression.setValue(contentsToPaste);
  }/*

  override protected*/ function createIconCls()/*:String*/ {
    return mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.sdk.actions.Actions', 'Action_pasteFromClipboard_icon');
  }/*

  override protected*/ function calculateDisabled()/*:Boolean*/ {
    var clipboard/*:Clipboard*/ = com.coremedia.cms.editor.sdk.clipboard.Clipboard.getInstance();

    if (clipboard.getOperation() === com.coremedia.cms.editor.sdk.clipboard.Clipboard.MOVE) {
      return true;
    }

    //noinspection JSMismatchedCollectionQueryUpdate
    var contents/*:Array*/ = clipboard.getContents();

    if (contents.length === 0 || com.coremedia.cms.editor.sdk.actions.AbstractLinkListAction.prototype.calculateDisabled.call(this)) {
      return true;
    }

    return !this.replace && this.linkListWrapper.getFreeCapacity() < contents.length;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.actions.AbstractLinkListAction",
      metadata: {"": ["PublicApi"]},
      replace: false,
      constructor: LinkListPasteAction$,
      super$IZ66: function() {
        com.coremedia.cms.editor.sdk.actions.AbstractLinkListAction.prototype.constructor.apply(this, arguments);
      },
      defaultHandler: defaultHandler,
      createIconCls: createIconCls,
      calculateDisabled: calculateDisabled,
      statics: {
        ACTION_ID: undefined,
        __initStatics__: function() {
          ACTION_ID$static_();
        }
      },
      requires: [
        "AS3.Error",
        "com.coremedia.cms.editor.sdk.actions.AbstractLinkListAction",
        "mx.resources.ResourceManager"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.clipboard.Clipboard",
        "com.coremedia.cms.editor.sdk.clipboard.PasteFromClipboardAction",
        "com.coremedia.cms.editor.sdk.util.MessageBoxUtil"
      ]
    };
});
