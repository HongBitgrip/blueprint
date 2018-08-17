Ext.define("com.coremedia.cms.editor.sdk.actions.RenameTabContentActionBase", function(RenameTabContentActionBase) {/*package com.coremedia.cms.editor.sdk.actions {
import com.coremedia.cap.content.Content;
import com.coremedia.cms.editor.sdk.ContentTreeRelation;
import com.coremedia.cms.editor.sdk.collectionview.CollectionViewExtender;
import com.coremedia.cms.editor.sdk.collectionview.CollectionViewExtension;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.cms.editor.sdk.util.MessageBoxUtil;

import ext.StringUtil;

import mx.resources.ResourceManager;

/**
 * An action to rename the target content in a pop-up dialog.
 * /
[ResourceBundle('com.coremedia.cms.editor.sdk.actions.Actions')]
public class RenameTabContentActionBase extends AbstractTabContextMenuContentAction {
  public*/ function RenameTabContentActionBase$(config/*:RenameTabContentAction = null*/) {if(arguments.length<=0)config=null;
    AS3.setBindable(config,"handler" ,AS3.bind( this,"doRename$XQrq"));
    this.super$XQrq(config);
  }/*

  private*/ function doRename()/*:void*/ {
    var title/*:String*/ = mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.sdk.actions.Actions', 'Action_renameTabContentAction_title_text');
    var message/*:String*/ = mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.sdk.actions.Actions', 'Action_renameTabContentAction_message_text');
    var clickedContent/*:Content*/ = this.getContextClickedContent();
    var callback/*:Function*/ = function (btn/*:String*/, newName/*:String*/)/*:void*/ {
      if (btn === 'ok') {
        var collectionViewExtender/*:CollectionViewExtender*/ = com.coremedia.cms.editor.sdk.editorContext.getCollectionViewExtender();
        collectionViewExtender.findExtension(clickedContent, function(extension/*:CollectionViewExtension*/)/*:void*/ {
          if (extension) {
            var treeRelation/*:ContentTreeRelation*/ = extension.getContentTreeRelation();
            treeRelation.rename(clickedContent, Ext.String.trim(newName));
          }
        });
      }
    };
    var value/*:String*/ = clickedContent.getName();
    com.coremedia.cms.editor.sdk.util.MessageBoxUtil.prompt(title, message, callback, value);
  }/*

  override protected*/ function checkHidden()/*:Boolean*/ {
    return !this.getContextClickedContent();
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.actions.AbstractTabContextMenuContentAction",
      constructor: RenameTabContentActionBase$,
      super$XQrq: function() {
        com.coremedia.cms.editor.sdk.actions.AbstractTabContextMenuContentAction.prototype.constructor.apply(this, arguments);
      },
      doRename$XQrq: doRename,
      checkHidden: checkHidden,
      requires: [
        "Ext.String",
        "com.coremedia.cms.editor.sdk.actions.AbstractTabContextMenuContentAction",
        "com.coremedia.cms.editor.sdk.actions.Actions_properties",
        "mx.resources.ResourceManager"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.editorContext",
        "com.coremedia.cms.editor.sdk.util.MessageBoxUtil"
      ]
    };
});
