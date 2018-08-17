Ext.define("com.coremedia.cms.editor.sdk.actions.RevertActionBase", function(RevertActionBase) {/*package com.coremedia.cms.editor.sdk.actions {

import com.coremedia.cap.common.SESSION;
import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.authorization.Right;
import com.coremedia.cap.content.results.RevertResult;
import com.coremedia.cms.editor.sdk.bulkOperation.RevertResultWindow;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.cms.editor.sdk.premular.PremularBase;
import com.coremedia.cms.editor.sdk.util.MessageBoxUtil;
import com.coremedia.ui.util.EncodingUtil;

import ext.ComponentManager;
import ext.StringUtil;

import mx.resources.ResourceManager;

[PublicApi]
[ResourceBundle('com.coremedia.cms.editor.sdk.actions.Actions')]
public class RevertActionBase extends ContentAction {
  public*/ function RevertActionBase$(config/* : RevertAction = null*/) {if(arguments.length<=0)config=null;
    this.super$KKMM(AS3.cast(com.coremedia.cms.editor.sdk.actions.RevertAction,com.coremedia.cms.editor.sdk.actions.ActionConfigUtil.extendConfig(config, 'revert', {handler:AS3.bind( this,"revert$KKMM")})));
  }/*

  protected override*/ function isDisabledFor(contents/*:Array*/)/*:Boolean*/ {
    var needsRevert/*:Boolean*/ = false;
    for (var i/*:int*/ = 0; i < contents.length; i++) {
      var content/*:Content*/ = contents[i];
      if (content.isCheckedOut()) {
        if (content.isCheckedOutByOther() &&
                !content.getRepository().getAccessControl().mayPerform(content, com.coremedia.cap.content.authorization.Right.SUPERVISE))
        {
          return true;
        }
        if (content.getCheckedOutVersion() === null &&
                !content.getRepository().getAccessControl().mayPerform(content, com.coremedia.cap.content.authorization.Right.DELETE)) {
          return true;
        }
        needsRevert = true;
      }
    }
    return !needsRevert;
  }/*

  private*/ function revert()/*:void*/ {
    var originalContents/*:Array*/ = this.getContents();
    if (!originalContents || !originalContents.length) {
      return;
    }

    var newDocumentCount/*:uint*/ = 0;
    var contents/*:Array*/ = [];
    var newDocumentName/*:String*/ = null;
    for (var i/*:int*/ = 0; i < originalContents.length; i++) {
      var content/*:Content*/ = originalContents[i];
      if (content.isCheckedOut()) {
        contents.push(content);
        if (content.getCheckedOutVersion() === null) {
          newDocumentCount++;
          newDocumentName = content.getName();
        }
      }
    }

    if (!contents.length) {
      return;
    }

    var title/*:String*/;
    var message/*:String*/;
    if (contents.length === 1) {
      var singleContent/*:Content*/ = contents[0];
      var singleContentName/*:String*/ = singleContent.getName();
      if (newDocumentCount === 0) {
        title = mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.sdk.actions.Actions', 'Action_revert_verifyMessage_singleOld_title');
        message = Ext.String.format(mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.sdk.actions.Actions', 'Action_revert_verifyMessage_singleOld_text'), com.coremedia.ui.util.EncodingUtil.encodeForHTML(singleContentName));
      } else {
        title = mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.sdk.actions.Actions', 'Action_revert_verifyMessage_singleNew_title');
        message = Ext.String.format(mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.sdk.actions.Actions', 'Action_revert_verifyMessage_singleNew_text'), com.coremedia.ui.util.EncodingUtil.encodeForHTML(singleContentName));
      }
    } else {
      if (newDocumentCount === 0) {
        title = mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.sdk.actions.Actions', 'Action_revert_verifyMessage_manyOld_title');
        message = Ext.String.format(mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.sdk.actions.Actions', 'Action_revert_verifyMessage_manyOld_text'), contents.length);
      } else if (newDocumentCount === 1) {
        title = mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.sdk.actions.Actions', 'Action_revert_verifyMessage_manyOldOneNew_title');
        message = Ext.String.format(mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.sdk.actions.Actions', 'Action_revert_verifyMessage_manyOldOneNew_text'), contents.length, com.coremedia.ui.util.EncodingUtil.encodeForHTML(newDocumentName));
      } else if (newDocumentCount === contents.length) {
        title = mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.sdk.actions.Actions', 'Action_revert_verifyMessage_allNew_title');
        message = Ext.String.format(mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.sdk.actions.Actions', 'Action_revert_verifyMessage_allNew_text'), contents.length);
      } else {
        title = mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.sdk.actions.Actions', 'Action_revert_verifyMessage_manyNew_title');
        message = Ext.String.format(mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.sdk.actions.Actions', 'Action_revert_verifyMessage_manyNew_text'), contents.length, com.coremedia.ui.util.EncodingUtil.encodeForHTML(newDocumentCount));
      }
    }

    com.coremedia.cms.editor.sdk.util.MessageBoxUtil.showConfirmation(title, message,
            mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.sdk.actions.Actions', 'Action_revert_buttonText'),
            function (btn/*:**/)/*:void*/ {
      if (btn === 'ok') {
        contents.filter(function (c/*:Content*/)/*:Boolean*/ {
          // new documents have no version at all
          return c.getCheckedOutVersion() === null;
        }).map(function (c/*:Content*/)/*:**/ {
          var panel/*:PremularBase*/ =AS3.as( com.coremedia.cms.editor.sdk.editorContext.getWorkAreaTabManager().findTabForEntity(c),  com.coremedia.cms.editor.sdk.premular.PremularBase);
          if(panel) {
            panel.setPreventCloseMessage(true);
          }
          return panel;
        });
        com.coremedia.cap.common.SESSION.getConnection().getContentRepository().revertAll(contents, RevertActionBase.completed);
      }
    }, false);
  }/*

  internal static*/ function completed$static(result/*:RevertResult*/)/*:void*/ {
    // Show error message box if revert did not succeed.
    if (!result['successful']) {
      var revertResultWindowCfg/*:RevertResultWindow*/ = AS3.cast(com.coremedia.cms.editor.sdk.bulkOperation.RevertResultWindow,{});
      AS3.setBindable(revertResultWindowCfg,"bulkResultItems" , result.results);
      Ext.ComponentManager.create(revertResultWindowCfg).show();
    }
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.actions.ContentAction",
      metadata: {"": ["PublicApi"]},
      constructor: RevertActionBase$,
      super$KKMM: function() {
        com.coremedia.cms.editor.sdk.actions.ContentAction.prototype.constructor.apply(this, arguments);
      },
      isDisabledFor: isDisabledFor,
      revert$KKMM: revert,
      statics: {completed: completed$static},
      requires: [
        "Ext.ComponentManager",
        "Ext.String",
        "com.coremedia.cap.common.SESSION",
        "com.coremedia.cap.content.authorization.Right",
        "com.coremedia.cms.editor.sdk.actions.Actions_properties",
        "com.coremedia.cms.editor.sdk.actions.ContentAction",
        "com.coremedia.ui.util.EncodingUtil",
        "mx.resources.ResourceManager"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.actions.ActionConfigUtil",
        "com.coremedia.cms.editor.sdk.actions.RevertAction",
        "com.coremedia.cms.editor.sdk.bulkOperation.RevertResultWindow",
        "com.coremedia.cms.editor.sdk.editorContext",
        "com.coremedia.cms.editor.sdk.premular.PremularBase",
        "com.coremedia.cms.editor.sdk.util.MessageBoxUtil"
      ]
    };
});
