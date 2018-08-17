Ext.define("com.coremedia.cms.editor.sdk.publication.PublicationResultWindowBase", function(PublicationResultWindowBase) {/*package com.coremedia.cms.editor.sdk.publication {

import com.coremedia.cms.editor.sdk.actions.AbstractPublishAction;
import com.coremedia.cms.editor.sdk.actions.ApprovePublishAction;
import com.coremedia.cms.editor.sdk.actions.PublishAction;
import com.coremedia.cms.editor.sdk.actions.WithdrawAction;
import com.coremedia.cms.editor.sdk.bulkOperation.BulkResultPanelBase;
import com.coremedia.cms.editor.sdk.components.StudioDialog;
import com.coremedia.ui.data.Bean;
import com.coremedia.ui.data.ConstantValueExpression;
import com.coremedia.ui.data.beanFactory;

import ext.Ext;

/**
 * Base class for the publication result dialog.
 * /
public class PublicationResultWindowBase extends StudioDialog {

  private static*/ var currentLocation$static/*:Bean*/=null;/*

  protected static const CONFLICT_SECTION_SPECIFICATIONS:Array =*/function CONFLICT_SECTION_SPECIFICATIONS$static_(){PublicationResultWindowBase.CONFLICT_SECTION_SPECIFICATIONS=( [
    {resultCode: 'documentNotApproved', mode: com.coremedia.cms.editor.sdk.bulkOperation.BulkResultPanelBase.CONTENT_MODE},
    {resultCode: 'folderNotApproved', mode: com.coremedia.cms.editor.sdk.bulkOperation.BulkResultPanelBase.CONTENT_MODE},
    {resultCode: 'documentDoesNotExist', mode: com.coremedia.cms.editor.sdk.bulkOperation.BulkResultPanelBase.CONTENT_MODE},
    {resultCode: 'folderDoesNotExist', mode: com.coremedia.cms.editor.sdk.bulkOperation.BulkResultPanelBase.CONTENT_MODE},
    {resultCode: 'documentConcurrentlyWithdrawn', mode: com.coremedia.cms.editor.sdk.bulkOperation.BulkResultPanelBase.CONTENT_MODE},
    {resultCode: 'linkedDocumentNotApproved', mode: com.coremedia.cms.editor.sdk.bulkOperation.BulkResultPanelBase.CONTENT_MODE},
    {resultCode: 'documentConcurrentlyDeleted', mode: com.coremedia.cms.editor.sdk.bulkOperation.BulkResultPanelBase.CONTENT_MODE},
    {resultCode: 'documentLinkFailed', mode: com.coremedia.cms.editor.sdk.bulkOperation.BulkResultPanelBase.CONTENT_BEFORE_IMPEDIMENT_MODE},
    {resultCode: 'documentParentFailed', mode: com.coremedia.cms.editor.sdk.bulkOperation.BulkResultPanelBase.CONTENT_BEFORE_IMPEDIMENT_MODE},
    {resultCode: 'folderParentFailed', mode: com.coremedia.cms.editor.sdk.bulkOperation.BulkResultPanelBase.CONTENT_BEFORE_IMPEDIMENT_MODE},
    {resultCode: 'documentTargetNameConflict', mode: com.coremedia.cms.editor.sdk.bulkOperation.BulkResultPanelBase.CONTENT_BEFORE_IMPEDIMENT_MODE},
    {resultCode: 'folderTargetNameConflict', mode: com.coremedia.cms.editor.sdk.bulkOperation.BulkResultPanelBase.CONTENT_BEFORE_IMPEDIMENT_MODE},
    {resultCode: 'documentConcurrentlyRenamed', mode: com.coremedia.cms.editor.sdk.bulkOperation.BulkResultPanelBase.CONTENT_MODE},
    {resultCode: 'folderConcurrentlyRenamed', mode: com.coremedia.cms.editor.sdk.bulkOperation.BulkResultPanelBase.CONTENT_MODE},
    {resultCode: 'documentNoApproveRights', mode: com.coremedia.cms.editor.sdk.bulkOperation.BulkResultPanelBase.CONTENT_MODE},
    {resultCode: 'folderNoApproveRights', mode: com.coremedia.cms.editor.sdk.bulkOperation.BulkResultPanelBase.CONTENT_MODE},
    {resultCode: 'documentUnremovableWithdrawal', mode: com.coremedia.cms.editor.sdk.bulkOperation.BulkResultPanelBase.CONTENT_MODE},
    {resultCode: 'folderUnremovableWithdrawal', mode: com.coremedia.cms.editor.sdk.bulkOperation.BulkResultPanelBase.CONTENT_MODE},
    {resultCode: 'documentNoRights', mode: com.coremedia.cms.editor.sdk.bulkOperation.BulkResultPanelBase.CONTENT_MODE},
    {resultCode: 'folderNoRights', mode: com.coremedia.cms.editor.sdk.bulkOperation.BulkResultPanelBase.CONTENT_MODE},
    {resultCode: 'documentNoWithdrawRights', mode: com.coremedia.cms.editor.sdk.bulkOperation.BulkResultPanelBase.CONTENT_MODE},
    {resultCode: 'folderNoWithdrawRights', mode: com.coremedia.cms.editor.sdk.bulkOperation.BulkResultPanelBase.CONTENT_MODE},
    {resultCode: 'documentKeepsLiveLink', mode: com.coremedia.cms.editor.sdk.bulkOperation.BulkResultPanelBase.CONTENT_AFTER_IMPEDIMENT_MODE},
    {resultCode: 'folderCannotMarkChildToBeWithdrawn', mode: com.coremedia.cms.editor.sdk.bulkOperation.BulkResultPanelBase.CONTENT_MODE},
    {resultCode: 'documentCheckedOutByOther', mode: com.coremedia.cms.editor.sdk.bulkOperation.BulkResultPanelBase.CONTENT_MODE},
    {resultCode: 'documentNotValid', mode: com.coremedia.cms.editor.sdk.bulkOperation.BulkResultPanelBase.CONTENT_MODE},
    {resultCode: 'folderNotValid', mode: com.coremedia.cms.editor.sdk.bulkOperation.BulkResultPanelBase.CONTENT_MODE},
    {resultCode: 'documentInTrash', mode: com.coremedia.cms.editor.sdk.bulkOperation.BulkResultPanelBase.CONTENT_MODE},
    {resultCode: 'folderInTrash', mode: com.coremedia.cms.editor.sdk.bulkOperation.BulkResultPanelBase.CONTENT_MODE},
    {resultCode: 'folderKeepsLiveChildren', mode: com.coremedia.cms.editor.sdk.bulkOperation.BulkResultPanelBase.CONTENT_BEFORE_IMPEDIMENT_MODE},
    {resultCode: 'folderKeepsChildren', mode: com.coremedia.cms.editor.sdk.bulkOperation.BulkResultPanelBase.CONTENT_BEFORE_IMPEDIMENT_MODE},
    {resultCode: 'linkedDocumentNotBelowBaseFolder', mode: com.coremedia.cms.editor.sdk.bulkOperation.BulkResultPanelBase.CONTENT_MODE},
    {resultCode: 'publicationSpansBaseFolders', mode: com.coremedia.cms.editor.sdk.bulkOperation.BulkResultPanelBase.CONTENT_MODE},
    {resultCode: 'documentInRootFolderUnpublishable', mode: com.coremedia.cms.editor.sdk.bulkOperation.BulkResultPanelBase.CONTENT_MODE},
    {resultCode: 'unconfiguredPublicationTarget', mode: com.coremedia.cms.editor.sdk.bulkOperation.BulkResultPanelBase.CONTENT_MODE},
    {resultCode: 'publicationCancelled', mode: com.coremedia.cms.editor.sdk.bulkOperation.BulkResultPanelBase.CONTENT_MODE},
    {resultCode: 'internalError', mode: com.coremedia.cms.editor.sdk.bulkOperation.BulkResultPanelBase.CONTENT_MODE}
  ]);}/*;
  protected static const INFO_SECTION_SPECIFICATIONS:Array =*/function INFO_SECTION_SPECIFICATIONS$static_(){PublicationResultWindowBase.INFO_SECTION_SPECIFICATIONS=( [
    {resultCode: 'documentUnchanged', mode: com.coremedia.cms.editor.sdk.bulkOperation.BulkResultPanelBase.CONTENT_MODE},
    {resultCode: 'folderUnchanged', mode: com.coremedia.cms.editor.sdk.bulkOperation.BulkResultPanelBase.CONTENT_MODE},
    {resultCode: 'documentPublished', mode: com.coremedia.cms.editor.sdk.bulkOperation.BulkResultPanelBase.CONTENT_MODE},
    {resultCode: 'folderPublished', mode: com.coremedia.cms.editor.sdk.bulkOperation.BulkResultPanelBase.CONTENT_MODE},
    {resultCode: 'documentDeleted', mode: com.coremedia.cms.editor.sdk.bulkOperation.BulkResultPanelBase.CONTENT_MODE},
    {resultCode: 'folderDeleted', mode: com.coremedia.cms.editor.sdk.bulkOperation.BulkResultPanelBase.CONTENT_MODE},
    {resultCode: 'documentAlreadyDeleted', mode: com.coremedia.cms.editor.sdk.bulkOperation.BulkResultPanelBase.CONTENT_MODE},
    {resultCode: 'folderAlreadyDeleted', mode: com.coremedia.cms.editor.sdk.bulkOperation.BulkResultPanelBase.CONTENT_MODE},
    {resultCode: 'documentWithdrawn', mode: com.coremedia.cms.editor.sdk.bulkOperation.BulkResultPanelBase.CONTENT_MODE},
    {resultCode: 'folderWithdrawn', mode: com.coremedia.cms.editor.sdk.bulkOperation.BulkResultPanelBase.CONTENT_MODE},
    {resultCode: 'documentLaterVersion', mode: com.coremedia.cms.editor.sdk.bulkOperation.BulkResultPanelBase.CONTENT_MODE}
  ]);}/*;

  /**
   * @param config the config object
   *
   * @see com.coremedia.cap.content.Content
   * /
  public*/ function PublicationResultWindowBase$(config/*:PublicationResultWindow = null*/) {if(arguments.length<=0)config=null;
    var clonedConfig/*:PublicationResultWindow*/ = AS3.cast(com.coremedia.cms.editor.sdk.publication.PublicationResultWindow,Ext.apply({}, config));
    if (!currentLocation$static) { //local bean for window location info
      currentLocation$static = com.coremedia.ui.data.beanFactory.createLocalBean({});
    } else {
      AS3.setBindable(clonedConfig,"x" , currentLocation$static.get('x'));
      AS3.setBindable(clonedConfig,"y" , currentLocation$static.get('y'));
    }

    this.super$FSkE(clonedConfig);

    this.addListener('move',AS3.bind( this,"windowMoved$FSkE")); //listen for the current dialog position
  }/*

  /**
   * Whether the operation was a publication ('publish') or a withdrawal ('withdraw').
   * /
  [Bindable]
  public var publishOperation:String;

  /**
   * The contents that were supposed to be published as a list of Content beans.
   * /
  [Bindable]
  public var contents:Array;

  /**
   * Stores the current position in the local bean.
   * /
  private*/ function windowMoved()/*:void*/ {
    var position/*:Array*/ = this.getPosition(false);
    var x/*:**/ = position[0];
    var y/*:**/ = position[1];

    currentLocation$static.set('x', x);
    currentLocation$static.set('y', y);
  }/*

  // The height is set when a studio user resize the window manually. Since the displayed tab can change while the window is hidden,
  // we need to reset the height when it is shown again. Otherwise the auto-resizing functionality will not work anymore.
  // The maxHeight has to be set explicit to ensure correct window scrolling for many list items.
  override protected*/ function onShow(animateTarget/*:* = undefined*/, callback/*:Function = null*/, scope/*:Object = null*/)/*:void*/ {switch(Math.max(arguments.length,1)){case 1:callback=null;case 2:scope=null;}
    AS3.setBindable(this,"height" , null);
    AS3.setBindable(this,"maxHeight" , Ext.getBody().getHeight() - this.getHeader().getHeight());
    com.coremedia.cms.editor.sdk.components.StudioDialog.prototype.onShow.call(this,animateTarget,callback,scope);
  }/*

  protected*/ function retry()/*:void*/ {
    /* TODO: Once the publish action can handle multiple contents, pass the entire change set. */
    var valueExpression/*:ConstantValueExpression*/ = new com.coremedia.ui.data.ConstantValueExpression(AS3.getBindable(this,"contents"));

    var action/*:AbstractPublishAction*/;
    if (AS3.getBindable(this,"publishOperation") === com.coremedia.cms.editor.sdk.actions.AbstractPublishAction.OPERATION_PUBLISH) {
      var publishActionConfig/*:PublishAction*/ = AS3.cast(com.coremedia.cms.editor.sdk.actions.PublishAction,{});
      AS3.setBindable(publishActionConfig,"contentValueExpression" , valueExpression);
      action = new com.coremedia.cms.editor.sdk.actions.PublishAction(publishActionConfig);
    } else if (AS3.getBindable(this,"publishOperation") === com.coremedia.cms.editor.sdk.actions.AbstractPublishAction.OPERATION_APPROVE_PUBLISH) {
      var approvePublishActionConfig/*:ApprovePublishAction*/ = AS3.cast(com.coremedia.cms.editor.sdk.actions.ApprovePublishAction,{});
      AS3.setBindable(approvePublishActionConfig,"contentValueExpression" , valueExpression);
      action = new com.coremedia.cms.editor.sdk.actions.ApprovePublishAction(approvePublishActionConfig);
    } else {
      var withdrawActionConfig/*:WithdrawAction*/ = AS3.cast(com.coremedia.cms.editor.sdk.actions.WithdrawAction,{});
      AS3.setBindable(withdrawActionConfig,"contentValueExpression" , valueExpression);
      action = new com.coremedia.cms.editor.sdk.actions.WithdrawAction(withdrawActionConfig);
    }
    action.startPublication();
    this.close();
  }/*
}

}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.components.StudioDialog",
      constructor: PublicationResultWindowBase$,
      super$FSkE: function() {
        com.coremedia.cms.editor.sdk.components.StudioDialog.prototype.constructor.apply(this, arguments);
      },
      windowMoved$FSkE: windowMoved,
      onShow: onShow,
      retry: retry,
      config: {
        publishOperation: null,
        contents: null
      },
      statics: {
        CONFLICT_SECTION_SPECIFICATIONS: undefined,
        INFO_SECTION_SPECIFICATIONS: undefined,
        __initStatics__: function() {
          CONFLICT_SECTION_SPECIFICATIONS$static_();
          INFO_SECTION_SPECIFICATIONS$static_();
        }
      },
      requires: [
        "Ext",
        "com.coremedia.cms.editor.sdk.components.StudioDialog",
        "com.coremedia.ui.data.ConstantValueExpression",
        "com.coremedia.ui.data.beanFactory"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.actions.AbstractPublishAction",
        "com.coremedia.cms.editor.sdk.actions.ApprovePublishAction",
        "com.coremedia.cms.editor.sdk.actions.PublishAction",
        "com.coremedia.cms.editor.sdk.actions.WithdrawAction",
        "com.coremedia.cms.editor.sdk.bulkOperation.BulkResultPanelBase",
        "com.coremedia.cms.editor.sdk.publication.PublicationResultWindow"
      ]
    };
});
