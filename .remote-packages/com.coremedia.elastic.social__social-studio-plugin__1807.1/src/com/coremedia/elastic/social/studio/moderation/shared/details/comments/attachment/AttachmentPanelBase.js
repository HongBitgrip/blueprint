Ext.define("com.coremedia.elastic.social.studio.moderation.shared.details.comments.attachment.AttachmentPanelBase", function(AttachmentPanelBase) {/*package com.coremedia.elastic.social.studio.moderation.shared.details.comments.attachment {


import com.coremedia.elastic.social.studio.model.Comment;
import com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames;
import com.coremedia.elastic.social.studio.model.impl.AbstractContributionAdministration;
import com.coremedia.ui.data.Blob;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;

import ext.ComponentManager;
import ext.StringUtil;
import ext.panel.Panel;
import ext.toolbar.Toolbar;

[ResourceBundle('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin')]
public class AttachmentPanelBase extends Panel {

  public static const DETAIL_ATTACHMENT_TOOLBAR_ITEM_ID:String = "detailAttachmentToolbar";

  private var contributionAdministration:AbstractContributionAdministration;
  private var displayedValueExp:ValueExpression;
  private var attachments:Array;
  private var detailAttachmentToolbar:Toolbar;

  private var attachmentClickHandler:Function;

  public*/ function AttachmentPanelBase$(config/*:AttachmentPanel = null*/) {if(arguments.length<=0)config=null;
    this.super$c4ik(config);
    this.contributionAdministration$c4ik = AS3.getBindable(config,"contributionAdministration");
    this.attachmentClickHandler$c4ik = AS3.getBindable(config,"attachmentClickHandler");
    if (AS3.getBindable(config,"attachments")) {
      this.attachments$c4ik = AS3.getBindable(config,"attachments");
      this.updateMediaContainer$c4ik();
    }
    else {
      this.displayedValueExp$c4ik = com.coremedia.ui.data.ValueExpressionFactory.create(
              com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames.DISPLAYED, this.contributionAdministration$c4ik);
      this.displayedValueExp$c4ik.addChangeListener(AS3.bind(this,"updateMediaContainer$c4ik"));
    }
  }/*

  override protected*/ function onDestroy()/*:void*/ {
    Ext.panel.Panel.prototype.onDestroy.call(this);
    if (this.displayedValueExp$c4ik) {
      this.displayedValueExp$c4ik.removeChangeListener(AS3.bind(this,"updateMediaContainer$c4ik"));
    }
  }/*

  private*/ function clearMediaContainer()/*:void*/ {
    this.getDetailAttachmentContainer$c4ik().removeAll(true);
  }/*

  private*/ function updateMediaContainer()/*:void*/ {
    this.clearMediaContainer$c4ik();
    //noinspection JSMismatchedCollectionQueryUpdate
    var atts/*:Array*/ = this.attachments$c4ik || this.getAttachments$c4ik();
    if (atts && atts.length > 0) {
      for (var i/*:int*/ = 0; i < atts.length; i++) {
        var blob/*:Blob*/ = atts[i];
        var attachmentItemContainerCfg/*:AttachmentItemContainer*/ = AS3.cast(com.coremedia.elastic.social.studio.moderation.shared.details.comments.attachment.AttachmentItemContainer,{});
        AS3.setBindable(attachmentItemContainerCfg,"blob" , blob);
        AS3.setBindable(attachmentItemContainerCfg,"attachmentHandler" ,AS3.bind( this,"openAttachmentDetailWindow$c4ik"));
        // TODO Why is attachmentClickHandler ? attachmentClickHandler : openAttachmentDetailWindow not possible?
        if (this.attachmentClickHandler$c4ik) {
          AS3.setBindable(attachmentItemContainerCfg,"attachmentHandler" , this.attachmentClickHandler$c4ik);
        }
        this.getDetailAttachmentContainer$c4ik().add(attachmentItemContainerCfg);
      }
      // update title label
      this.setTitle(Ext.String.format(this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'attachment_container_title'), atts.length));
    }
  }/*


  private*/ function getAttachments()/*:Array*/ {
    if (this.contributionAdministration$c4ik) {
      var comment/*:Comment*/ =AS3.as( this.contributionAdministration$c4ik.getDisplayed(),  com.coremedia.elastic.social.studio.model.Comment);
      return comment && comment.getAttachments() ? comment.getAttachments() : null;
    }
    else {
      return this.attachments$c4ik;
    }
  }/*

  private*/ function getDetailAttachmentContainer()/*:Toolbar*/ {
    if (!this.detailAttachmentToolbar$c4ik) {
      this.detailAttachmentToolbar$c4ik =AS3.as( this.queryById(AttachmentPanelBase.DETAIL_ATTACHMENT_TOOLBAR_ITEM_ID),  Ext.toolbar.Toolbar);
    }
    return this.detailAttachmentToolbar$c4ik;
  }/*

  /**
   * Opens the AttachmentDetailWindow with the selected blob
   * @param currentBlob
   * /
  private*/ function openAttachmentDetailWindow(currentBlob/*:Blob*/)/*:void*/ {
    var attachDetailWindowConfig/*:AttachmentDetailWindow*/ = AS3.cast(com.coremedia.elastic.social.studio.moderation.shared.details.comments.attachment.AttachmentDetailWindow,{});
    AS3.setBindable(attachDetailWindowConfig,"blob" , currentBlob);
    AS3.setBindable(attachDetailWindowConfig,"attachments" , this.getAttachments$c4ik());

    var newAttachDetailWindow/*:AttachmentDetailWindow*/ = AS3.cast(com.coremedia.elastic.social.studio.moderation.shared.details.comments.attachment.AttachmentDetailWindow,Ext.ComponentManager.create(attachDetailWindowConfig));
    newAttachDetailWindow.show();
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.panel.Panel",
      contributionAdministration$c4ik: null,
      displayedValueExp$c4ik: null,
      attachments$c4ik: null,
      detailAttachmentToolbar$c4ik: null,
      attachmentClickHandler$c4ik: null,
      constructor: AttachmentPanelBase$,
      super$c4ik: function() {
        Ext.panel.Panel.prototype.constructor.apply(this, arguments);
      },
      onDestroy: onDestroy,
      clearMediaContainer$c4ik: clearMediaContainer,
      updateMediaContainer$c4ik: updateMediaContainer,
      getAttachments$c4ik: getAttachments,
      getDetailAttachmentContainer$c4ik: getDetailAttachmentContainer,
      openAttachmentDetailWindow$c4ik: openAttachmentDetailWindow,
      statics: {DETAIL_ATTACHMENT_TOOLBAR_ITEM_ID: "detailAttachmentToolbar"},
      requires: [
        "Ext.ComponentManager",
        "Ext.String",
        "Ext.panel.Panel",
        "Ext.toolbar.Toolbar",
        "com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin_properties",
        "com.coremedia.ui.data.ValueExpressionFactory"
      ],
      uses: [
        "com.coremedia.elastic.social.studio.model.Comment",
        "com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames",
        "com.coremedia.elastic.social.studio.moderation.shared.details.comments.attachment.AttachmentDetailWindow",
        "com.coremedia.elastic.social.studio.moderation.shared.details.comments.attachment.AttachmentItemContainer"
      ]
    };
});
