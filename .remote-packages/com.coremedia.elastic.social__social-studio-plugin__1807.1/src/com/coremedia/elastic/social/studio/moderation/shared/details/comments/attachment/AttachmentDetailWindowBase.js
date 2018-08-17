Ext.define("com.coremedia.elastic.social.studio.moderation.shared.details.comments.attachment.AttachmentDetailWindowBase", function(AttachmentDetailWindowBase) {/*package com.coremedia.elastic.social.studio.moderation.shared.details.comments.attachment {


import com.coremedia.cms.editor.sdk.components.StudioDialog;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.ui.data.Bean;
import com.coremedia.ui.data.Blob;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.skins.ContainerSkin;

import ext.Component;
import ext.event.Event;
import ext.toolbar.Toolbar;
import ext.util.MixedCollection;

public class AttachmentDetailWindowBase extends StudioDialog {

  private var attachments:Array;
  private var currentBlob:Blob;

  public static const ID:String = "attachmentDetailWindow";

  public static const ATTACHMENT_SLIDER_ITEM_ID:String = "attachmentWindowSlider";
  public static const ATTACHMENT_NAV_PREVIOUS_BUTTON_ITEM_ID:String = "prevNavButton";
  public static const ATTACHMENT_NAV_NEXT_BUTTON_ITEM_ID:String = "nextNavButton";

  protected static const ENABLE_PREVIOUS_ATTACHMENT_NAVIGATION_BUTTON:String = "enablePreviousNavigation";
  protected static const ENABLE_NEXT_ATTACHMENT_NAVIGATION_BUTTON:String = "enableNextNavigation";

  protected static const BLOB_URI_PROPERTY:String = "uri";
  protected static const BLOB_FILE_NAME_PROPERTY:String = "fileName";
  protected static const BLOB_FILE_SIZE_PROPERTY:String = "size";

  private var attachmentWindowNavigationButtonsValExp:ValueExpression;
  private var currentAttachmentBlobValExp:ValueExpression;
  private var attachmentSliderItems:MixedCollection;

  protected var localNavigationButtonBean:Bean;
  protected var localAttachmentBean:Bean;

  public*/ function AttachmentDetailWindowBase$(config/*:AttachmentDetailWindow = null*/) {if(arguments.length<=0)config=null;
    this.super$blUv(config);
    this.attachments$blUv = AS3.getBindable(config,"attachments");
    this.currentBlob$blUv = AS3.getBindable(config,"blob");

    if (!this.getNavigationButtonValueExpression().getValue()) {
      //noinspection JSUnusedGlobalSymbols
      this.localNavigationButtonBean = com.coremedia.cms.editor.sdk.editorContext.getBeanFactory().createLocalBean();
      this.getNavigationButtonValueExpression().setValue(this.localNavigationButtonBean);
    } else {
      this.localNavigationButtonBean = this.getNavigationButtonValueExpression().getValue();
    }

    if (!this.getCurrentAttachmentBlobValueExpression().getValue()) {
      //noinspection JSUnusedGlobalSymbols
      this.localAttachmentBean = com.coremedia.cms.editor.sdk.editorContext.getBeanFactory().createLocalBean();
      this.getCurrentAttachmentBlobValueExpression().setValue(this.localAttachmentBean);
    } else {
      this.localAttachmentBean = this.getCurrentAttachmentBlobValueExpression().getValue();
    }

    //add the class that indicates that this blob is selected
    this.getAttachmentContainer$blUv().setUI(com.coremedia.ui.skins.ContainerSkin.SELECTED_100.getSkin());
    this.updateNavigationButtons$blUv();
    this.localAttachmentBean.set(AttachmentDetailWindowBase.BLOB_URI_PROPERTY, this.currentBlob$blUv.getUri());
    this.localAttachmentBean.set(AttachmentDetailWindowBase.BLOB_FILE_NAME_PROPERTY, this.currentBlob$blUv.getContentType());
    this.localAttachmentBean.set(AttachmentDetailWindowBase.BLOB_FILE_SIZE_PROPERTY, this.currentBlob$blUv.getSize());
  }/*

  override protected*/ function afterRender()/*:void*/ {var this$=this;
    com.coremedia.cms.editor.sdk.components.StudioDialog.prototype.afterRender.call(this);
    this.updateNavigationButtons$blUv();
    this.mon(this.getEl(), 'keydown', function (e/*:Event*/)/*:void*/ {
      if (e.getKey() === Ext.event.Event.LEFT && this$.localNavigationButtonBean.get(AttachmentDetailWindowBase.ENABLE_PREVIOUS_ATTACHMENT_NAVIGATION_BUTTON)) {
        this$.showPreviousAttachment();
      }
    }, this);
    this.mon(this.getEl(), 'keydown', function (e/*:Event*/)/*:void*/ {
      if (e.getKey() === Ext.event.Event.RIGHT && this$.localNavigationButtonBean.get(AttachmentDetailWindowBase.ENABLE_NEXT_ATTACHMENT_NAVIGATION_BUTTON)) {
        this$.showNextAttachment();
      }
    }, this);
  }/*

  protected*/ function showNextAttachment()/*:void*/ {
    var nextBlob/*:Blob*/ = (AS3.as((this.attachments$blUv[this.findCurrentBlobPositionInAttachment$blUv() + 1]),  com.coremedia.ui.data.Blob));
    this.updateCurrentBlob(nextBlob);
  }/*

  protected*/ function updateAttachment(selected/*:Blob*/)/*:void*/ {
    this.updateCurrentBlob(selected);
  }/*

  protected*/ function showPreviousAttachment()/*:void*/ {
    var prevBlob/*:Blob*/ = (AS3.as((this.attachments$blUv[this.findCurrentBlobPositionInAttachment$blUv() - 1]),  com.coremedia.ui.data.Blob));
    this.updateCurrentBlob(prevBlob);
  }/*

  private*/ function findCurrentBlobPositionInAttachment()/*:int*/ {
    return this.attachments$blUv.indexOf(this.currentBlob$blUv);
  }/*

  private*/ function updateNavigationButtons()/*:void*/ {
    // update previous button property
    this.localNavigationButtonBean.set(AttachmentDetailWindowBase.ENABLE_PREVIOUS_ATTACHMENT_NAVIGATION_BUTTON, (this.findCurrentBlobPositionInAttachment$blUv() !== 0));
    // update next button property
    this.localNavigationButtonBean.set(AttachmentDetailWindowBase.ENABLE_NEXT_ATTACHMENT_NAVIGATION_BUTTON, (this.findCurrentBlobPositionInAttachment$blUv() !== this.attachments$blUv.length - 1));
  }/*

  protected*/ function getNavigationButtonValueExpression()/*:ValueExpression*/ {
    if (!this.attachmentWindowNavigationButtonsValExp$blUv) {
      this.attachmentWindowNavigationButtonsValExp$blUv = com.coremedia.ui.data.ValueExpressionFactory.create("attachmentWindowNavigation");
    }

    return this.attachmentWindowNavigationButtonsValExp$blUv;
  }/*

  protected*/ function getCurrentAttachmentBlobValueExpression()/*:ValueExpression*/ {
    if (!this.currentAttachmentBlobValExp$blUv) {
      this.currentAttachmentBlobValExp$blUv = com.coremedia.ui.data.ValueExpressionFactory.create("currentAttachmentBlob");
    }

    return this.currentAttachmentBlobValExp$blUv;
  }/*

  public*/ function updateCurrentBlob(newCurrentBlob/*:Blob*/)/*:void*/ {
    this.localAttachmentBean.set(AttachmentDetailWindowBase.BLOB_URI_PROPERTY, newCurrentBlob.getUri());
    this.localAttachmentBean.set(AttachmentDetailWindowBase.BLOB_FILE_NAME_PROPERTY, newCurrentBlob.getContentType());
    this.localAttachmentBean.set(AttachmentDetailWindowBase.BLOB_FILE_SIZE_PROPERTY, newCurrentBlob.getSize());
    this.currentBlob$blUv = newCurrentBlob;
    this.updateNavigationButtons$blUv();

    //remove the blue selection marker from the item inside the slider menu
    this.getAttachmentSliderItems$blUv().each(function (item/*:Component*/, index/*:Number*/, length/*:Number*/)/*:void*/ {
      item.setUI(com.coremedia.ui.skins.ContainerSkin.GRID_100.getSkin());
    });
    //add the class that indicates that this blob is selected
    this.getAttachmentContainer$blUv().setUI(com.coremedia.ui.skins.ContainerSkin.SELECTED_100.getSkin());
  }/*

  private*/ function getAttachmentSliderItems()/*:MixedCollection*/ {
    if (!this.attachmentSliderItems$blUv) {
      this.attachmentSliderItems$blUv = (AS3.as(this.queryById(com.coremedia.elastic.social.studio.moderation.shared.details.comments.attachment.AttachmentPanelBase.DETAIL_ATTACHMENT_TOOLBAR_ITEM_ID),  Ext.toolbar.Toolbar)).itemCollection;
    }
    return this.attachmentSliderItems$blUv;
  }/*

  protected*/ function openImageInNewBrowserTab()/*:void*/ {
    window.open(this.currentBlob$blUv.getUri(), '_blank');
  }/*

  private*/ function getAttachmentContainer()/*:AttachmentItemContainer*/ {
    var position/*:Number*/ = this.findCurrentBlobPositionInAttachment$blUv();
    return AS3.as( this.getAttachmentSliderItems$blUv().get(position),  com.coremedia.elastic.social.studio.moderation.shared.details.comments.attachment.AttachmentItemContainer);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.components.StudioDialog",
      attachments$blUv: null,
      currentBlob$blUv: null,
      attachmentWindowNavigationButtonsValExp$blUv: null,
      currentAttachmentBlobValExp$blUv: null,
      attachmentSliderItems$blUv: null,
      localNavigationButtonBean: null,
      localAttachmentBean: null,
      constructor: AttachmentDetailWindowBase$,
      super$blUv: function() {
        com.coremedia.cms.editor.sdk.components.StudioDialog.prototype.constructor.apply(this, arguments);
      },
      afterRender: afterRender,
      showNextAttachment: showNextAttachment,
      updateAttachment: updateAttachment,
      showPreviousAttachment: showPreviousAttachment,
      findCurrentBlobPositionInAttachment$blUv: findCurrentBlobPositionInAttachment,
      updateNavigationButtons$blUv: updateNavigationButtons,
      getNavigationButtonValueExpression: getNavigationButtonValueExpression,
      getCurrentAttachmentBlobValueExpression: getCurrentAttachmentBlobValueExpression,
      updateCurrentBlob: updateCurrentBlob,
      getAttachmentSliderItems$blUv: getAttachmentSliderItems,
      openImageInNewBrowserTab: openImageInNewBrowserTab,
      getAttachmentContainer$blUv: getAttachmentContainer,
      statics: {
        ID: "attachmentDetailWindow",
        ATTACHMENT_SLIDER_ITEM_ID: "attachmentWindowSlider",
        ATTACHMENT_NAV_PREVIOUS_BUTTON_ITEM_ID: "prevNavButton",
        ATTACHMENT_NAV_NEXT_BUTTON_ITEM_ID: "nextNavButton",
        ENABLE_PREVIOUS_ATTACHMENT_NAVIGATION_BUTTON: "enablePreviousNavigation",
        ENABLE_NEXT_ATTACHMENT_NAVIGATION_BUTTON: "enableNextNavigation",
        BLOB_URI_PROPERTY: "uri",
        BLOB_FILE_NAME_PROPERTY: "fileName",
        BLOB_FILE_SIZE_PROPERTY: "size"
      },
      requires: [
        "Ext.event.Event",
        "Ext.toolbar.Toolbar",
        "com.coremedia.cms.editor.sdk.components.StudioDialog",
        "com.coremedia.cms.editor.sdk.editorContext",
        "com.coremedia.ui.data.Blob",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.skins.ContainerSkin"
      ],
      uses: [
        "com.coremedia.elastic.social.studio.moderation.shared.details.comments.attachment.AttachmentItemContainer",
        "com.coremedia.elastic.social.studio.moderation.shared.details.comments.attachment.AttachmentPanelBase"
      ]
    };
});
