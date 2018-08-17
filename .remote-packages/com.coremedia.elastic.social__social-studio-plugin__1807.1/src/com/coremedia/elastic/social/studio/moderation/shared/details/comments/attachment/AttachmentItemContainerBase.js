Ext.define("com.coremedia.elastic.social.studio.moderation.shared.details.comments.attachment.AttachmentItemContainerBase", function(AttachmentItemContainerBase) {/*package com.coremedia.elastic.social.studio.moderation.shared.details.comments.attachment {


import com.coremedia.ui.data.Blob;

import ext.container.Container;
import ext.form.field.DisplayField;
import ext.util.Format;

public class AttachmentItemContainerBase extends Container {

  protected static const IMAGE_ITEM_ID:String = "image";
  protected static const FILE_NAME_FIELD_ITEM_ID:String = "fileNameField";

  private var showAttachmentInDetailWindow:Function;
  private var currentBlob:Blob;
  private var highlightedInWindow:Boolean;
  private var fileNameField:DisplayField;

  public*/ function AttachmentItemContainerBase$(config/*:AttachmentItemContainer = null*/) {if(arguments.length<=0)config=null;
    this.super$wadO(config);
    this.showAttachmentInDetailWindow$wadO = AS3.getBindable(config,"attachmentHandler");
    this.currentBlob$wadO = AS3.getBindable(config,"blob");
    this.highlightedInWindow$wadO = AS3.getBindable(config,"highlightedInWindow");
  }/*

  override protected*/ function afterRender()/*:void*/ {
    Ext.container.Container.prototype.afterRender.call(this);
    this.getFileNameField$wadO().setValue(Ext.util.Format.htmlEncode(this.currentBlob$wadO.getContentType()));

    var attr/*:String*/ = "data-qtip";
    this.getEl().dom.setAttribute(attr, Ext.util.Format.htmlEncode(this.currentBlob$wadO.getContentType()) + " (" + this.getFileSizeInKB$wadO() + ")");
  }/*

  protected*/ function clickOnAttachmentThumbnail()/*:void*/ {
    this.showAttachmentInDetailWindow$wadO(this.currentBlob$wadO);
  }/*

  private*/ function getFileSizeInKB()/*:String*/ {
    return Math.round(this.currentBlob$wadO.getSize() / 1024) + " KB";
  }/*

  private*/ function getFileNameField()/*:DisplayField*/ {
    if (!this.fileNameField$wadO) {
      this.fileNameField$wadO =AS3.as( this.queryById(AttachmentItemContainerBase.FILE_NAME_FIELD_ITEM_ID),  Ext.form.field.Display);
    }
    return this.fileNameField$wadO;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.container.Container",
      showAttachmentInDetailWindow$wadO: null,
      currentBlob$wadO: null,
      highlightedInWindow$wadO: false,
      fileNameField$wadO: null,
      constructor: AttachmentItemContainerBase$,
      super$wadO: function() {
        Ext.container.Container.prototype.constructor.apply(this, arguments);
      },
      afterRender: afterRender,
      clickOnAttachmentThumbnail: clickOnAttachmentThumbnail,
      getFileSizeInKB$wadO: getFileSizeInKB,
      getFileNameField$wadO: getFileNameField,
      statics: {
        IMAGE_ITEM_ID: "image",
        FILE_NAME_FIELD_ITEM_ID: "fileNameField"
      },
      requires: [
        "Ext.container.Container",
        "Ext.form.field.Display",
        "Ext.util.Format"
      ]
    };
});
