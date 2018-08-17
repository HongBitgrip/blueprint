Ext.define("com.coremedia.cms.editor.sdk.publication.ApproveAndRetryPluginBase", function(ApproveAndRetryPluginBase) {/*package com.coremedia.cms.editor.sdk.publication {

import com.coremedia.cap.common.SESSION;
import com.coremedia.cap.content.publication.PublicationService;
import com.coremedia.cap.content.results.ApproveResult;
import com.coremedia.cap.content.results.ApproveResultCodes;
import com.coremedia.cap.content.results.ApproveResultItem;
import com.coremedia.cap.content.results.PublicationResult;
import com.coremedia.cap.content.results.PublicationResultItem;
import com.coremedia.cms.editor.sdk.actions.AbstractPublishAction;
import com.coremedia.cms.editor.sdk.util.MessageBoxUtil;
import com.coremedia.ui.plugins.AddItemsPlugin;
import com.coremedia.ui.skins.ButtonSkin;
import com.coremedia.ui.util.ComponentUtil;

import ext.Component;
import ext.MessageBox;
import ext.StringUtil;
import ext.button.Button;
import ext.toolbar.Toolbar;

import mx.resources.ResourceManager;

/**
 * Plugin, that approves all contents that caused a publication to fail
 * and retries to publish the set of contents.
 * /
[ResourceBundle('com.coremedia.cms.editor.Editor')]
public class ApproveAndRetryPluginBase extends AddItemsPlugin {
  private var pubWindow:PublicationResultWindow;
  private var itemsToApprove:Array;

  public*/ function ApproveAndRetryPluginBase$(config/*:ApproveAndRetryPlugin = null*/) {if(arguments.length<=0)config=null;
    this.super$NmGc(config);
  }/*

  override public*/ function init(component/*:Component*/)/*:void*/ {
    if (AS3.is(component,  com.coremedia.cms.editor.sdk.publication.PublicationResultWindow)) {
      this.pubWindow$NmGc =AS3.as( component,  com.coremedia.cms.editor.sdk.publication.PublicationResultWindow);
      if (this.pubWindow$NmGc.initialConfig.publishOperation === com.coremedia.cms.editor.sdk.actions.AbstractPublishAction.OPERATION_PUBLISH
              || this.pubWindow$NmGc.initialConfig.publishOperation === com.coremedia.cms.editor.sdk.actions.AbstractPublishAction.OPERATION_APPROVE_PUBLISH) {
        var fbar/*:Toolbar*/ = com.coremedia.ui.util.ComponentUtil.getFooterToolbar(this.pubWindow$NmGc);
        var buttons/*:Array*/ = fbar ? fbar.query("> button[ui=" + com.coremedia.ui.skins.ButtonSkin.FOOTER_PRIMARY.getSkin() + "]") : [];
        buttons.forEach(function (btn/*:Button*/)/*:void*/ {
          btn.ui = com.coremedia.ui.skins.ButtonSkin.FOOTER_SECONDARY.getSkin();
        });
        com.coremedia.ui.plugins.AddItemsPlugin.prototype.init.call(this,fbar);
      }
    }
  }/*

  protected*/ function bulkPublishHandler()/*:void*/ {
    this.itemsToApprove$NmGc = this.pubWindow$NmGc.initialConfig.publicationResultItems;
    this.approveNext$NmGc();
  }/*

  private*/ function approveNext()/*:void*/ {var this$=this;
    var publicationService/*:PublicationService*/ = com.coremedia.cap.common.SESSION.getConnection().getContentRepository().getPublicationService();

    var next/*:PublicationResultItem*/ = this.itemsToApprove$NmGc.pop();
    if (next) {
      publicationService.approveWithPath(next.content, function (r/*:ApproveResult*/)/*:void*/ {
        if (r.successful) {
          this$.approveNext$NmGc();
        }
        else {
          this$.abort$NmGc(r);
        }
      });
    }
    else {
      var contents/*:Array*/ = AS3.getBindable(this.pubWindow$NmGc,"contents");
      var publishOperation/*:String*/ = this.pubWindow$NmGc.initialConfig.publishOperation;
      this.pubWindow$NmGc.close();
      com.coremedia.cms.editor.sdk.publication.PublisherState.publicationStarted(publishOperation);
      publicationService.publishAll(contents, function (r/*:PublicationResult*/)/*:void*/ {
        com.coremedia.cms.editor.sdk.publication.PublisherState.publicationFinished(contents, r, publishOperation);
      });
    }
  }/*

  private*/ function abort(response/*:ApproveResult*/)/*:void*/ {
    if (response.results && response.results.some(function (item/*:ApproveResultItem*/)/*:Boolean*/ {
              return item.resultCode === com.coremedia.cap.content.results.ApproveResultCodes.DOCUMENT_NOT_VALID;
            })) {
      var errorWindowTitle/*:String*/ = mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'CheckBefore_validationErrorWindowTitle');
      var errorText/*:String*/ = mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'CheckBefore_validationErrorWindowTextSimple');
      com.coremedia.cms.editor.sdk.util.MessageBoxUtil.showError(errorWindowTitle, errorText, null, false);
    } else {
      // we assume there is at least one result with a resultCode
      var error/*:String*/ = response.error ? response.error.errorName : response.results[0].resultCode;
      this.pubWindow$NmGc.close();
      Ext.MessageBox.alert(mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'ApproveAllAndRetryAction_failure_title'),
              Ext.String.format(mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'ApproveAllAndRetryAction_failure_text'),
                      error));
    }
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.plugins.AddItemsPlugin",
      pubWindow$NmGc: null,
      itemsToApprove$NmGc: null,
      constructor: ApproveAndRetryPluginBase$,
      super$NmGc: function() {
        com.coremedia.ui.plugins.AddItemsPlugin.prototype.constructor.apply(this, arguments);
      },
      init: init,
      bulkPublishHandler: bulkPublishHandler,
      approveNext$NmGc: approveNext,
      abort$NmGc: abort,
      requires: [
        "Ext.String",
        "Ext.window.MessageBox",
        "com.coremedia.cap.common.SESSION",
        "com.coremedia.cap.content.results.ApproveResultCodes",
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.ui.plugins.AddItemsPlugin",
        "com.coremedia.ui.skins.ButtonSkin",
        "com.coremedia.ui.util.ComponentUtil",
        "mx.resources.ResourceManager"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.actions.AbstractPublishAction",
        "com.coremedia.cms.editor.sdk.publication.PublicationResultWindow",
        "com.coremedia.cms.editor.sdk.publication.PublisherState",
        "com.coremedia.cms.editor.sdk.util.MessageBoxUtil"
      ]
    };
});
