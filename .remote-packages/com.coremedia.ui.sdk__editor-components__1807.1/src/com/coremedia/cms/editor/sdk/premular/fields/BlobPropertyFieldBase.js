Ext.define("com.coremedia.cms.editor.sdk.premular.fields.BlobPropertyFieldBase", function(BlobPropertyFieldBase) {/*package com.coremedia.cms.editor.sdk.premular.fields {

import com.coremedia.cap.content.Content;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.cms.editor.sdk.util.ImageUtil;
import com.coremedia.cms.editor.sdk.util.PropertyEditorUtil;
import com.coremedia.ui.components.IconDisplayField;
import com.coremedia.ui.data.Blob;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.mixins.IHighlightableMixin;
import com.coremedia.ui.mixins.IValidationStateMixin;
import com.coremedia.ui.mixins.ValidationState;

import ext.Component;
import ext.form.FieldContainer;
import ext.util.DelayedTask;
import ext.util.Observable;

[PublicApi]
public class BlobPropertyFieldBase extends FieldContainer implements IValidationStateMixin, IHighlightableMixin {

  public static const EMPTY_CONTAINER_ITEM_ID:String = "empty";
  public static const BLOB_CONTAINER_ITEM_ID:String = "blob";
  public static const IMAGE_CONTAINER_ITEM_ID:String = "image";
  public static const BLOB_DETAILS_ITEM_ID:String = "blobDetails";

  private var blobIconCls:String;

  private var restoreHighlighted:Boolean;
  private var prolongedHighlighting:Boolean;

  /**
   * Whether to show a preview image if the stored blob is an image. Defaults to true.
   * /
  [Bindable]
  public var showImageThumbnail:Boolean = true;

  public*/ function BlobPropertyFieldBase$(config/*:BlobPropertyField = null*/) {if(arguments.length<=0)config=null;
    this.super$bJlc(config);
    this.initValidationStateMixin();
    this.blobIconCls$bJlc = AS3.getBindable(config,"blobIconCls");
  }/*

  internal*/ function getIdFromMimeType(data/*:Blob*/)/*:String*/ {
    if (!data || data.getSize() === undefined) {
      return BlobPropertyFieldBase.EMPTY_CONTAINER_ITEM_ID;
    }

    var contentType/*:String*/ = data.getContentType();

    if ((AS3.getBindable(this,"showImageThumbnail") !== false) && (contentType === 'image/gif' || contentType === 'image/jpeg' || contentType === 'image/png')) {
      return BlobPropertyFieldBase.IMAGE_CONTAINER_ITEM_ID;
    }

    return BlobPropertyFieldBase.BLOB_CONTAINER_ITEM_ID;
  }/*

  /**
   * Handle focus from PBE.
   * /
  override public*/ function focus(selectText/*:* = undefined*/, delay/*:* = undefined*/, callback/*:Function = null*/, scope/*:Function = null*/)/*:Component*/ {var this$=this;arguments=Array.prototype.slice.call(arguments);switch(Math.max(arguments.length,2)){case 2:callback=null;case 3:scope=null;}
    // Workaround: check if focus is triggered by DocumentTabPanelBase#showPropertyFieldByName
    var isFromPBE/*:Boolean*/ = delay === 1;
    if(!this.prolongedHighlighting$bJlc && isFromPBE){
      this.prolongedHighlighting$bJlc = true;
      var highlightableContainer/*:IHighlightableMixin*/ =AS3.as( this.queryById(BlobPropertyFieldBase.IMAGE_CONTAINER_ITEM_ID),  com.coremedia.ui.mixins.HighlightableMixin);
      this.restoreHighlighted$bJlc = AS3.getBindable(highlightableContainer,"highlighted","DUMMY");
      AS3.setBindable(highlightableContainer,"highlighted" , true);
      var observable/*:Observable*/ =AS3.as( this,  Ext.util.Observable);
      observable.addListener("highlightedChanged",AS3.bind( this,"changeRestoreHighlighted$bJlc"));
      var task/*:DelayedTask*/ = new Ext.util.DelayedTask(function()/*:void*/ {
        observable.removeListener("highlightedChanged",AS3.bind( this$,"changeRestoreHighlighted$bJlc"));
        AS3.setBindable(highlightableContainer,"highlighted" , this$.restoreHighlighted$bJlc);
        this$.prolongedHighlighting$bJlc = false;
      });
      task.delay(3000);
    }
    return Ext.form.FieldContainer.prototype.focus.apply(this, arguments);
  }/*

  private*/ function changeRestoreHighlighted(obs/*:Observable*/, newHighlighted/*:Boolean*/, oldHighlighted/*:Boolean*/)/*:void*/{
    this.restoreHighlighted$bJlc = newHighlighted;
  }/*

  /** @private * /
  protected*/ function getBlobImage(uri/*:String*/, width/*:int*/, height/*:int*/)/*:String*/ {
    if (uri) {
      var content/*:Content*/ = this.initialConfig.bindTo.getValue();
      var url/*:String*/ = com.coremedia.cms.editor.sdk.editorContext.getThumbnailUri(content, com.coremedia.cms.editor.sdk.util.ImageUtil.getCroppingOperation(width, height));
      if (url) {
        return url;
      }
    }
    return uri;
  }/*

  internal*/ function getBlobImageTransformer(width/*:int*/, height/*:int*/)/*:Function*/ {var this$=this;
    return function (uri/*:String*/)/*:String*/ {
      return this$.getBlobImage(uri, width, height);
    };
  }/*

  internal*/ function updateIconClass(container/*:IconDisplayField*/, ve/*:ValueExpression*/)/*:void*/ {
    AS3.setBindable(container,"iconCls" , (this.blobIconCls$bJlc || com.coremedia.cms.editor.sdk.util.PropertyEditorUtil.getBlobContentTypeIconClass(ve.getValue())));
  }/*

  /** @inheritDoc * /
  public native function initValidationStateMixin():void;

  /** @private * /
  [Bindable]
  public native function set validationState(validationState:ValidationState):void;

  /** @inheritDoc * /
  [Bindable]
  public native function get validationState():ValidationState;

  /** @private * /
  [Bindable]
  public native function set validationMessage(validationMessage:String):void;

  /** @inheritDoc * /
  [Bindable]
  public native function get validationMessage():String;

  /** @private * /
  [Bindable]
  public native function set highlighted(newHighlighted:Boolean):void;

  /** @inheritDoc * /
  [Bindable]
  public native function get highlighted():Boolean;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.form.FieldContainer",
      mixins: [
        "com.coremedia.ui.mixins.ValidationStateMixin",
        "com.coremedia.ui.mixins.HighlightableMixin"
      ],
      metadata: {"": ["PublicApi"]},
      blobIconCls$bJlc: null,
      restoreHighlighted$bJlc: false,
      prolongedHighlighting$bJlc: false,
      constructor: BlobPropertyFieldBase$,
      super$bJlc: function() {
        Ext.form.FieldContainer.prototype.constructor.apply(this, arguments);
      },
      getIdFromMimeType: getIdFromMimeType,
      focus: focus,
      changeRestoreHighlighted$bJlc: changeRestoreHighlighted,
      getBlobImage: getBlobImage,
      getBlobImageTransformer: getBlobImageTransformer,
      updateIconClass: updateIconClass,
      config: {showImageThumbnail: true},
      statics: {
        EMPTY_CONTAINER_ITEM_ID: "empty",
        BLOB_CONTAINER_ITEM_ID: "blob",
        IMAGE_CONTAINER_ITEM_ID: "image",
        BLOB_DETAILS_ITEM_ID: "blobDetails"
      },
      requires: [
        "Ext.form.FieldContainer",
        "Ext.util.DelayedTask",
        "Ext.util.Observable",
        "com.coremedia.ui.mixins.HighlightableMixin",
        "com.coremedia.ui.mixins.ValidationStateMixin"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.editorContext",
        "com.coremedia.cms.editor.sdk.util.ImageUtil",
        "com.coremedia.cms.editor.sdk.util.PropertyEditorUtil"
      ]
    };
});
