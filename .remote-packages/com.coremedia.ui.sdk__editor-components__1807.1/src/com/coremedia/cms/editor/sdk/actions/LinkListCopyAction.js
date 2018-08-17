Ext.define("com.coremedia.cms.editor.sdk.actions.LinkListCopyAction", function(LinkListCopyAction) {/*package com.coremedia.cms.editor.sdk.actions {

import com.coremedia.cms.editor.sdk.clipboard.Clipboard;
import com.coremedia.cms.editor.sdk.clipboard.CopyToClipboardAction;

import mx.resources.ResourceManager;

[PublicApi]
public class LinkListCopyAction extends AbstractLinkListAction {

  public static const ACTION_ID:String =*/function ACTION_ID$static_(){LinkListCopyAction.ACTION_ID=( com.coremedia.cms.editor.sdk.clipboard.CopyToClipboardAction.ACTION_ID);}/*;

  public*/ function LinkListCopyAction$(config/*:LinkListCopyAction = null*/) {if(arguments.length<=0)config=null;
    this.super$zdkE(config);
  }/*

  override protected*/ function defaultHandler()/*:void*/ {
    var clipboard/*:Clipboard*/ = com.coremedia.cms.editor.sdk.clipboard.Clipboard.getInstance();
    var contentsToCopy/*:Array*/ = this.getSelectedValues();
    if (contentsToCopy.length > 0) {
      clipboard.setValue(contentsToCopy, com.coremedia.cms.editor.sdk.clipboard.Clipboard.COPY);
    }
  }/*

  override protected*/ function createIconCls()/*:String*/ {
    return mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.sdk.actions.Actions', 'Action_copyToClipboard_icon');
  }/*

  override protected*/ function calculateDisabled()/*:Boolean*/ {
    return this.isNothingSelected();
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.actions.AbstractLinkListAction",
      metadata: {"": ["PublicApi"]},
      constructor: LinkListCopyAction$,
      super$zdkE: function() {
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
        "com.coremedia.cms.editor.sdk.actions.AbstractLinkListAction",
        "mx.resources.ResourceManager"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.clipboard.Clipboard",
        "com.coremedia.cms.editor.sdk.clipboard.CopyToClipboardAction"
      ]
    };
});
