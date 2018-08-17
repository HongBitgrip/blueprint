Ext.define("com.coremedia.cms.editor.sdk.actions.MoveContentAction", function(MoveContentAction) {/*package com.coremedia.cms.editor.sdk.actions {

import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.ContentType;
import com.coremedia.cms.editor.sdk.ContentTreeRelation;
import com.coremedia.cms.editor.sdk.collectionview.CollectionViewExtender;
import com.coremedia.cms.editor.sdk.collectionview.CollectionViewExtension;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.cms.editor.sdk.sites.SitesService;
import com.coremedia.cms.editor.sdk.util.MessageBoxUtil;
import com.coremedia.ui.data.RemoteBeanUtil;
import com.coremedia.ui.data.ValueExpressionFactory;

import mx.resources.ResourceManager;

[ResourceBundle('com.coremedia.cms.editor.Editor')]
public class MoveContentAction {
  private var toMove:Array;
  private var target:Content;
  private var onSuccess:Function;

  private var largeOperationConfirmed:Boolean = false;

  /**
   * @param toMove array of content objects to move
   * @param target the target folder for the move operation
   * /
  public*/ function MoveContentAction$(toMove/*:Array*/, target/*:Content*/) {
    this.toMove$k3wp = toMove;
    this.target$k3wp = target;
  }/*

  public final*/ function execute(onSuccess/*:Function = null*/)/*:void*/ {if(arguments.length<=0)onSuccess=null;
    this.onSuccess$k3wp = onSuccess;
    var helper/*:LargeOperationHelper*/ = new com.coremedia.cms.editor.sdk.actions.LargeOperationHelper(this.toMove$k3wp,AS3.bind( this,"loadContent$k3wp"),AS3.bind( this,"showConfirmationLargeOperation$k3wp"));
    helper.checkLargeOperation();
  }/*

  private*/ function loadContent()/*:void*/ {
    com.coremedia.ui.data.RemoteBeanUtil.loadAll(AS3.bind(this,"executeAfterLoadAffectedContents$k3wp"), this.toMove$k3wp, this.target$k3wp);
  }/*

  private final*/ function executeAfterLoadAffectedContents()/*:void*/ {
    if (this.mustConfirmCrossSiteMove()) {
      this.showConfirmationMessageBox$k3wp(mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'dialog_confirmCrossSiteMoveTitle_text'),
          mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'dialog_confirmCrossSiteMoveMessage_text'),
          mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'dialog_confirmCrossSiteMoveOkButtonText_text'),AS3.bind(
          this,"moveContent$k3wp"));
    } else if (!this.largeOperationConfirmed$k3wp && this.mustConfirmFolderMove()) {
      this.showConfirmationMessageBox$k3wp(mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'dialog_confirmFolderMoveTitle_text'),
          mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'dialog_confirmFolderMoveMessage_text'),
          mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'dialog_confirmFolderMoveOkButtonText_text'),AS3.bind(
          this,"moveContent$k3wp"));
    } else {
      this.moveContent$k3wp();
    }
  }/*

  private*/ function showConfirmationLargeOperation(documentCounter/*:Number*/)/*:void*/ {
    this.showConfirmationMessageBox$k3wp(mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'dialog_confirmLargeMoveOperationTitle_text'),
        mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'dialog_confirmLargeMoveOperationMessage_text', [documentCounter]),
        mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'dialog_confirmLargeMoveOperationOkButtonText_text'),AS3.bind(
        this,"loadContentAfterConfirmation$k3wp"));
  }/*

  private*/ function showConfirmationMessageBox(title/*:String*/, message/*:String*/, okButtonText/*:String*/, onConfirm/*:Function*/)/*:void*/ {
    com.coremedia.cms.editor.sdk.util.MessageBoxUtil.showConfirmation(title,
        message,
        okButtonText,
        function (btn/*:String*/)/*:void*/ {
          if ("ok" === btn) {
            onConfirm();
          }
        });
  }/*

  private*/ function loadContentAfterConfirmation()/*:void*/ {
    this.largeOperationConfirmed$k3wp = true;
    this.loadContent$k3wp();
  }/*


  protected*/ function mustConfirmFolderMove()/*:Boolean*/ {
    for/* each*/ (var $1=0;$1</* in*/ this.toMove$k3wp.length;++$1) {var content/*:Content*/ =this.toMove$k3wp[$1];
      if (content.isFolder()) {
        return true;
      }
    }
    return false;
  }/*

  protected*/ function mustConfirmCrossSiteMove()/*:Boolean*/ {
    var sitesService/*:SitesService*/ = com.coremedia.cms.editor.sdk.editorContext.getSitesService();
    var targetSiteId/*:String*/ = sitesService.getSiteIdFor(this.target$k3wp);
    for/* each*/ (var $1=0;$1</* in*/ this.toMove$k3wp.length;++$1) {var content/*:Content*/ =this.toMove$k3wp[$1];
      var contentSiteId/*:String*/ = sitesService.getSiteIdFor(content);
      if (contentSiteId !== targetSiteId) {
        return true;
      }
    }
    return false;
  }/*

  private*/ function moveContent()/*:void*/ {var this$=this;
    com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:CollectionViewExtension*/ {
      var folderType/*:ContentType*/ = this$.target$k3wp.getType();
      if (folderType === undefined) {
        return undefined;
      }

      var collectionViewExtender/*:CollectionViewExtender*/ = com.coremedia.cms.editor.sdk.editorContext.getCollectionViewExtender();
      var collectionViewExtension/*:CollectionViewExtension*/ = collectionViewExtender.getExtension(this$.target$k3wp);
      if (collectionViewExtension === undefined) {
        return undefined;
      }

      return collectionViewExtension;
    }).loadValue(function (collectionViewExtension/*:CollectionViewExtension*/)/*:void*/ {
      if (collectionViewExtension) {
        var folderTreeRelation/*:ContentTreeRelation*/ = collectionViewExtension.getContentTreeRelation();
        folderTreeRelation.move(this$.toMove$k3wp, this$.target$k3wp, this$.onSuccess$k3wp);
      }
    });
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      toMove$k3wp: null,
      target$k3wp: null,
      onSuccess$k3wp: null,
      largeOperationConfirmed$k3wp: false,
      constructor: MoveContentAction$,
      execute: execute,
      loadContent$k3wp: loadContent,
      executeAfterLoadAffectedContents$k3wp: executeAfterLoadAffectedContents,
      showConfirmationLargeOperation$k3wp: showConfirmationLargeOperation,
      showConfirmationMessageBox$k3wp: showConfirmationMessageBox,
      loadContentAfterConfirmation$k3wp: loadContentAfterConfirmation,
      mustConfirmFolderMove: mustConfirmFolderMove,
      mustConfirmCrossSiteMove: mustConfirmCrossSiteMove,
      moveContent$k3wp: moveContent,
      requires: [
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.ui.data.RemoteBeanUtil",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "mx.resources.ResourceManager"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.actions.LargeOperationHelper",
        "com.coremedia.cms.editor.sdk.editorContext",
        "com.coremedia.cms.editor.sdk.util.MessageBoxUtil"
      ]
    };
});
