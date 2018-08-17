Ext.define("com.coremedia.cms.editor.sdk.actions.WithdrawActionBase", function(WithdrawActionBase) {/*package com.coremedia.cms.editor.sdk.actions {

import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.authorization.Right;
import com.coremedia.cap.content.publication.PublicationService;
import com.coremedia.cms.editor.sdk.ContentTreeRelation;
import com.coremedia.cms.editor.sdk.collectionview.CollectionViewExtension;
import com.coremedia.cms.editor.sdk.desktop.ActionsToolbar;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.cms.editor.sdk.util.MessageBoxUtil;

import ext.StringUtil;

import mx.resources.ResourceManager;

[PublicApi]
[ResourceBundle('com.coremedia.cms.editor.sdk.actions.Actions')]
public class WithdrawActionBase extends AbstractPublishAction {
  /**
   * An ext.Action that withdraws the content indicated
   * by the given expression.
   *
   * @param config the component configuration object
   * /
  public*/ function WithdrawActionBase$(config/*:WithdrawAction = null*/) {if(arguments.length<=0)config=null;
    this.super$1i1y(AS3.cast(com.coremedia.cms.editor.sdk.actions.WithdrawAction,com.coremedia.cms.editor.sdk.actions.ActionConfigUtil.extendConfig(config, 'withdraw')), com.coremedia.cms.editor.sdk.actions.AbstractPublishAction.OPERATION_WITHDRAW, com.coremedia.cms.editor.sdk.desktop.ActionsToolbar.WITHDRAW_BUTTON_ITEM_ID);
  }/*

  override protected*/ function isDisabledFor(contents/*:Array*/)/*:Boolean*/ {
    var needsWithdraw/*:Boolean*/ = false;
    for (var i/*:int*/ = 0; i < contents.length; i++) {
      var content/*:Content*/ = contents[i];
      if (!content.getRepository().getAccessControl().mayPerform(content, com.coremedia.cap.content.authorization.Right.DELETE) ||
              !content.getRepository().getAccessControl().mayPerform(content, com.coremedia.cap.content.authorization.Right.APPROVE) ||
              !content.getRepository().getAccessControl().mayPerform(content, com.coremedia.cap.content.authorization.Right.PUBLISH)) {
        return true;
      }

      if (content.isPublished()) {
        needsWithdraw = true;
      }
    }
    return !needsWithdraw;
  }/*

  override protected*/ function doPublish(contents/*:Array*/, publicationService/*:PublicationService*/, callback/*:Function*/)/*:void*/ {
    var content/*:Content*/ = contents[0];
    com.coremedia.cms.editor.sdk.editorContext.getCollectionViewExtender().findExtension(content, function(extension/*:CollectionViewExtension*/)/*:void*/ {
      if (extension) {
        var treeRelation/*:ContentTreeRelation*/ = extension.getContentTreeRelation();
        var folderName/*:String*/ = null;
        for (var i/*:uint*/ = 0; i < contents.length; i++) {
          var c/*:Content*/ = contents[i];
          if (c.isFolder()) {
            folderName = c.getName();
          }
        }

        if (folderName) {
          var title/*:String*/;
          var message/*:String*/;
          if (contents.length === 1) {
            title = mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.sdk.actions.Actions', 'Action_withdraw_folder_verifyMessage_title');
            message = Ext.String.format(mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.sdk.actions.Actions', 'Action_withdraw_folder_verifyMessage_text'), folderName);
          } else {
            title = mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.sdk.actions.Actions', 'Action_withdraw_contents_verifyMessage_title');
            message = Ext.String.format(mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.sdk.actions.Actions', 'Action_withdraw_contents_verifyMessage_text'), contents.length);
          }
          com.coremedia.cms.editor.sdk.util.MessageBoxUtil.showConfirmation(title, message,
                  mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.sdk.actions.Actions', 'Action_withdraw_buttonText'),
                  function (btn/*:**/)/*:void*/ {
                    if (btn === 'ok') {
                      treeRelation.withdraw(contents, publicationService, callback);
                    } else {
                      callback(null);
                    }
                  });
        } else {
          treeRelation.withdraw(contents, publicationService, callback);
        }
      }
    });
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.actions.AbstractPublishAction",
      metadata: {"": ["PublicApi"]},
      constructor: WithdrawActionBase$,
      super$1i1y: function() {
        com.coremedia.cms.editor.sdk.actions.AbstractPublishAction.prototype.constructor.apply(this, arguments);
      },
      isDisabledFor: isDisabledFor,
      doPublish: doPublish,
      requires: [
        "Ext.String",
        "com.coremedia.cap.content.authorization.Right",
        "com.coremedia.cms.editor.sdk.actions.AbstractPublishAction",
        "com.coremedia.cms.editor.sdk.actions.Actions_properties",
        "mx.resources.ResourceManager"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.actions.ActionConfigUtil",
        "com.coremedia.cms.editor.sdk.actions.WithdrawAction",
        "com.coremedia.cms.editor.sdk.desktop.ActionsToolbar",
        "com.coremedia.cms.editor.sdk.editorContext",
        "com.coremedia.cms.editor.sdk.util.MessageBoxUtil"
      ]
    };
});
