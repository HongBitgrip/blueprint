Ext.define("com.coremedia.cms.editor.sdk.actions.CopyContentAction", function(CopyContentAction) {/*package com.coremedia.cms.editor.sdk.actions {

import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.ContentType;
import com.coremedia.cms.editor.sdk.ContentTreeRelation;
import com.coremedia.cms.editor.sdk.collectionview.CollectionViewExtender;
import com.coremedia.cms.editor.sdk.collectionview.CollectionViewExtension;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.cms.editor.sdk.util.MessageBoxUtil;
import com.coremedia.ui.data.RemoteBeanUtil;
import com.coremedia.ui.data.ValueExpressionFactory;

import mx.resources.ResourceManager;

public class CopyContentAction {
  private var toCopy:Array;
  private var target:Content;
  private var onSuccess:Function;


  /**
   * @param toCopy array of content objects to copy
   * @param target the target folder below which the copies are created
   * /
  public*/ function CopyContentAction$(toCopy/*:Array*/, target/*:Content*/) {
    this.toCopy$HDMF = toCopy;
    this.target$HDMF = target;
  }/*

  public final*/ function execute(onSuccess/*:Function = null*/)/*:void*/ {if(arguments.length<=0)onSuccess=null;
    this.onSuccess$HDMF = onSuccess;
    var helper/*:LargeOperationHelper*/ = new com.coremedia.cms.editor.sdk.actions.LargeOperationHelper(this.toCopy$HDMF,AS3.bind( this,"loadContent$HDMF"),AS3.bind( this,"showConfirmationLargeOperation$HDMF"));
    helper.checkLargeOperation();
  }/*

  private*/ function loadContent()/*:void*/ {
    com.coremedia.ui.data.RemoteBeanUtil.loadAll(AS3.bind(this,"executeAfterLoadAffectedContents$HDMF"), this.toCopy$HDMF, this.target$HDMF);
  }/*

  private final*/ function executeAfterLoadAffectedContents()/*:void*/ {
    this.copyContent$HDMF();
  }/*

  private*/ function copyContent()/*:void*/ {var this$=this;
    com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:CollectionViewExtension*/ {
      var folderType/*:ContentType*/ = this$.target$HDMF.getType();
      if (folderType === undefined) {
        return undefined;
      }

      var collectionViewExtender/*:CollectionViewExtender*/ = com.coremedia.cms.editor.sdk.editorContext.getCollectionViewExtender();
      var collectionViewExtension/*:CollectionViewExtension*/ = collectionViewExtender.getExtension(this$.target$HDMF);
      if (collectionViewExtension === undefined) {
        return undefined;
      }

      return collectionViewExtension;
    }).loadValue(function (collectionViewExtension/*:CollectionViewExtension*/)/*:void*/ {
      if (collectionViewExtension) {
        var folderTreeRelation/*:ContentTreeRelation*/ = collectionViewExtension.getContentTreeRelation();
        folderTreeRelation.copy(this$.toCopy$HDMF, this$.target$HDMF, this$.onSuccess$HDMF);
      }
    });
  }/*

  private*/ function showConfirmationLargeOperation(documentCounter/*:Number*/)/*:void*/ {
    this.showConfirmationMessageBox$HDMF(mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'dialog_confirmLargeCopyOperationTitle_text'),
        mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'dialog_confirmLargeCopyOperationMessage_text', [documentCounter]),
        mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'dialog_confirmLargeCopyOperationOkButtonText_text'));
  }/*

  private*/ function showConfirmationMessageBox(title/*:String*/, message/*:String*/, okButtonText/*:String*/)/*:void*/ {var this$=this;
    com.coremedia.cms.editor.sdk.util.MessageBoxUtil.showConfirmation(title,
        message,
        okButtonText,
        function (btn/*:String*/)/*:void*/ {
          if ("ok" === btn) {
            this$.loadContent$HDMF();
          }
        });
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      toCopy$HDMF: null,
      target$HDMF: null,
      onSuccess$HDMF: null,
      constructor: CopyContentAction$,
      execute: execute,
      loadContent$HDMF: loadContent,
      executeAfterLoadAffectedContents$HDMF: executeAfterLoadAffectedContents,
      copyContent$HDMF: copyContent,
      showConfirmationLargeOperation$HDMF: showConfirmationLargeOperation,
      showConfirmationMessageBox$HDMF: showConfirmationMessageBox,
      requires: [
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
