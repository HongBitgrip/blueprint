Ext.define("com.coremedia.cms.editor.sdk.actions.PasteLinkActionBase", function(PasteLinkActionBase) {/*package com.coremedia.cms.editor.sdk.actions {

import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.ContentType;
import com.coremedia.cms.editor.sdk.clipboard.Clipboard;
import com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil;
import com.coremedia.cms.editor.sdk.util.LinkListUtil;
import com.coremedia.cms.editor.sdk.util.MessageBoxUtil;
import com.coremedia.ui.data.BeanState;

import ext.StringUtil;

import mx.resources.ResourceManager;

[PublicApi]
[Deprecated(since="1710.1", replacement="com.coremedia.cms.editor.sdk.actions.LinkListPasteAction")]
[ResourceBundle('com.coremedia.cms.editor.Editor')]
public class PasteLinkActionBase extends AbstractModifyLinksAction {

  /**
   * @param config the config object
   * /
  public*/ function PasteLinkActionBase$(config/*:PasteLinkAction = null*/) {if(arguments.length<=0)config=null;
    this.super$8Vpf(AS3.cast(com.coremedia.cms.editor.sdk.actions.PasteLinkAction,com.coremedia.cms.editor.sdk.actions.ActionConfigUtil.extendConfig(config, "pasteFromClipboard", {handler:AS3.bind(this,"pasteLink$8Vpf")})));
  }/*

  override protected*/ function isDisabledFor(contents/*:Array*/)/*:Boolean*/ {
    var content/*:Content*/ = this.getContents()[0];
    var disabled/*:Boolean*/ = true;
    var clipboard/*:Clipboard*/ = com.coremedia.cms.editor.sdk.clipboard.Clipboard.getInstance();
    if (content) {
      disabled = (com.coremedia.cms.editor.sdk.util.LinkListUtil.getFreeCapacity(this.getValueExpression(), this.getPropertyName(), this.getMaxCardinality()) < clipboard.getContents().length);
    }
    return disabled || clipboard.getContents().length === 0 || clipboard.getOperation() === com.coremedia.cms.editor.sdk.clipboard.Clipboard.MOVE;
  }/*

  private*/ function pasteLink()/*:void*/ {
    // fetch old link list value
    var originalValue/*:Array*/ = this.getLinks();
    if (!originalValue) {
      // Should not happen, but be cautious.
      return;
    }

    // fetch clipboard contents
    var clipboard/*:Clipboard*/ = com.coremedia.cms.editor.sdk.clipboard.Clipboard.getInstance();
    var contentsToPaste/*:Array*/ = clipboard.getContents();
    if (contentsToPaste.length === 0) {
      return;
    }

    // check that content types of clipboard contents are allowed in link list
    var targetType/*:ContentType*/ = this.getLinkType();
    var failedContent/*:Content*/ = com.coremedia.cms.editor.sdk.util.LinkListUtil.containsContentNotMatchingType(targetType, contentsToPaste);
    if (failedContent != null) {
      if (failedContent.getState() !== com.coremedia.ui.data.BeanState.READABLE) {
        com.coremedia.cms.editor.sdk.util.MessageBoxUtil.showInfo(mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'dialog_pasteErrorTitle_text'),
          Ext.String.format(mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'dialog_pasteErrorUnreadableMessage_text')));

      } else {
        com.coremedia.cms.editor.sdk.util.MessageBoxUtil.showInfo(mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'dialog_pasteErrorTitle_text'),
          Ext.String.format(mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'dialog_pasteErrorMessage_text'),
            failedContent.getName(),
            com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil.localizeDocumentTypeName(failedContent.getType().getName()),
            com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil.localizeDocumentTypeName(targetType.getName())));
      }
      return;
    }

    // actually paste clipboard contents into link list (append)
    var newValue/*:Array*/ = originalValue.concat(contentsToPaste);
    this.setLinks(newValue);
  }/*

  override protected*/ function onFirstComponentAdded()/*:void*/ {
    com.coremedia.cms.editor.sdk.actions.AbstractModifyLinksAction.prototype.onFirstComponentAdded.call(this);
    com.coremedia.cms.editor.sdk.clipboard.Clipboard.getInstance().addValueChangeListener(AS3.bind(this,"isDisabledFor"));
  }/*

  override protected*/ function onLastComponentRemoved()/*:void*/ {
    com.coremedia.cms.editor.sdk.actions.AbstractModifyLinksAction.prototype.onLastComponentRemoved.call(this);
    com.coremedia.cms.editor.sdk.clipboard.Clipboard.getInstance().removeValueChangeListener(AS3.bind(this,"isDisabledFor"));
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.actions.AbstractModifyLinksAction",
      metadata: {"": [
        "PublicApi",
        "Deprecated",
        [
          "since",
          "1710.1",
          "replacement",
          "com.coremedia.cms.editor.sdk.actions.LinkListPasteAction"
        ]
      ]},
      constructor: PasteLinkActionBase$,
      super$8Vpf: function() {
        com.coremedia.cms.editor.sdk.actions.AbstractModifyLinksAction.prototype.constructor.apply(this, arguments);
      },
      isDisabledFor: isDisabledFor,
      pasteLink$8Vpf: pasteLink,
      onFirstComponentAdded: onFirstComponentAdded,
      onLastComponentRemoved: onLastComponentRemoved,
      requires: [
        "Ext.String",
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.cms.editor.sdk.actions.AbstractModifyLinksAction",
        "com.coremedia.ui.data.BeanState",
        "mx.resources.ResourceManager"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.actions.ActionConfigUtil",
        "com.coremedia.cms.editor.sdk.actions.PasteLinkAction",
        "com.coremedia.cms.editor.sdk.clipboard.Clipboard",
        "com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil",
        "com.coremedia.cms.editor.sdk.util.LinkListUtil",
        "com.coremedia.cms.editor.sdk.util.MessageBoxUtil"
      ]
    };
});
