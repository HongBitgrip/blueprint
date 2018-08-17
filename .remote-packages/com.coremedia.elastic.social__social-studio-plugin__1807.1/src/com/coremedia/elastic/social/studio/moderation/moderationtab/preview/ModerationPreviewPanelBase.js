Ext.define("com.coremedia.elastic.social.studio.moderation.moderationtab.preview.ModerationPreviewPanelBase", function(ModerationPreviewPanelBase) {/*package com.coremedia.elastic.social.studio.moderation.moderationtab.preview {

import com.coremedia.cms.editor.sdk.preview.InnerPreviewPanel;
import com.coremedia.cms.editor.sdk.preview.InnerPreviewPanelBase;
import com.coremedia.cms.editor.sdk.preview.MetadataHelper;
import com.coremedia.cms.editor.sdk.preview.PreviewIFrame;
import com.coremedia.cms.editor.sdk.preview.PreviewPanel;
import com.coremedia.cms.editor.sdk.preview.metadata.MetadataTreeNode;
import com.coremedia.elastic.social.studio.model.Comment;
import com.coremedia.elastic.social.studio.model.Contribution;
import com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames;
import com.coremedia.elastic.social.studio.model.impl.ContributionImpl;
import com.coremedia.elastic.social.studio.model.impl.ModerationContributionAdministration;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.util.EventUtil;
import com.coremedia.ui.util.createComponentSelector;

public class ModerationPreviewPanelBase extends PreviewPanel {
  private var displayedContributionVE:ValueExpression;
  private var previewUrlContributionVE:ValueExpression;
  private var moderatedContributionAdministration:ModerationContributionAdministration;
  private var metadataNodeForDisplayedCommentVE:ValueExpression;
  private var previewIFrame:PreviewIFrame;
  private var showPreviewForcedVE:ValueExpression;

  public*/ function ModerationPreviewPanelBase$(config/*:ModerationPreviewPanel = null*/) {if(arguments.length<=0)config=null;
    this.moderatedContributionAdministration$Im7w =AS3.as( AS3.getBindable(config,"moderation").getModerationContributionAdministration(),  com.coremedia.elastic.social.studio.model.impl.ModerationContributionAdministration);
    this.displayedContributionVE$Im7w = com.coremedia.ui.data.ValueExpressionFactory.create(
            com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames.DISPLAYED, this.moderatedContributionAdministration$Im7w);
    this.displayedContributionVE$Im7w.addChangeListener(AS3.bind(this,"detailChanged$Im7w"));
    this.previewUrlContributionVE$Im7w = com.coremedia.ui.data.ValueExpressionFactory.create(
            com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames.DISPLAYED + ".previewUrl", this.moderatedContributionAdministration$Im7w);
    this.previewUrlContributionVE$Im7w.addChangeListener(AS3.bind(this,"detailChanged$Im7w"));

    this.super$Im7w(config);

    this.setupPreviewHandling$Im7w();
  }/*

  private*/ function setupPreviewHandling()/*:void*/ {
    this.getShowPreviewForcedValueExpression$Im7w().setValue(false);

    var innerPreviewPanelCmp/*:InnerPreviewPanel*/ =AS3.as( this.down(com.coremedia.ui.util.createComponentSelector()._xtype(com.coremedia.cms.editor.sdk.preview.InnerPreviewPanel.xtype).build()),  com.coremedia.cms.editor.sdk.preview.InnerPreviewPanel);
    if (!innerPreviewPanelCmp) {
      throw new AS3.Error("required child component '" + innerPreviewPanelCmp.xtype + "' not found");
    }

    this.mon(innerPreviewPanelCmp, com.coremedia.cms.editor.sdk.preview.InnerPreviewPanel.DOCUMENT_DIMENSIONS_CHANGED_EVENT,AS3.bind( this,"highlightComment$Im7w"));
    this.getMetadataNodeForDisplayedCommentVE$Im7w().addChangeListener(AS3.bind(this,"highlightComment$Im7w"));

    this.previewIFrame$Im7w =AS3.as( this.queryById(com.coremedia.cms.editor.sdk.preview.InnerPreviewPanelBase.IFRAME_ITEM_ID),  com.coremedia.cms.editor.sdk.preview.PreviewIFrame);
  }/*

  private*/ function getShowPreviewForcedValueExpression()/*:ValueExpression*/ {
    if (!this.showPreviewForcedVE$Im7w) {
      this.showPreviewForcedVE$Im7w = com.coremedia.ui.data.ValueExpressionFactory.createFromValue(false);
    }

    return this.showPreviewForcedVE$Im7w;
  }/*

  private*/ function highlightComment()/*:void*/ {var this$=this;
    // Set scale mode as late as possible to stop persisted mode from overruling explicitly set value.
    var innerPreviewPanelCmp/*:InnerPreviewPanel*/ =AS3.as( this.down(com.coremedia.ui.util.createComponentSelector()._xtype(com.coremedia.cms.editor.sdk.preview.InnerPreviewPanel.xtype).build()),  com.coremedia.cms.editor.sdk.preview.InnerPreviewPanel);
    innerPreviewPanelCmp.setScaleMode(true);

    var displayedCommentMetadataNode/*:MetadataTreeNode*/ = this.getMetadataNodeForDisplayedCommentVE$Im7w().getValue();
    if (displayedCommentMetadataNode) {
      com.coremedia.ui.util.EventUtil.invokeLater(function ()/*:void*/ {
        this$.highlightMetadataIds([displayedCommentMetadataNode.getId()], true);
      });
    }
  }/*

  private*/ function detailChanged()/*:void*/ {var this$=this;
    this.getShowPreviewForcedValueExpression$Im7w().setValue(false);

    var contribution/*:Contribution*/ =AS3.as( this.moderatedContributionAdministration$Im7w.getDisplayed(),  com.coremedia.elastic.social.studio.model.Contribution);
    if (contribution) {
      contribution.load(function ()/*:void*/ {
        var previewUrl/*:String*/ = contribution.getPreviewUrl();
        this$.setIFrameUrl$Im7w(previewUrl);
        if (previewUrl !== com.coremedia.elastic.social.studio.model.impl.ContributionImpl.BLANK_PREVIEW_URL) {
          this$.getShowPreviewForcedValueExpression$Im7w().setValue(true);
        }
      });
    }
  }/*

  private*/ function setIFrameUrl(url/*:String*/)/*:void*/ {
    // (Re-)set URL if new URL is different or if metadata node is not present.
    if (this.previewIFrame$Im7w.url !== url || !this.getMetadataNodeForDisplayedCommentVE$Im7w().getValue()) {
      this.previewIFrame$Im7w.setUrl(url);
    }
  }/*

  /**
   * Returns a ValueExpression pointing to the MetadataTreeNode that corresponds
   * to the currently displayed/selected comment. This helps to cope with the
   * asynchronous nature of page loading in the PreviewPanel. As soon as the
   * ValueExpression returns something different than 'undefined' it is possible
   * to highlight the comment in the PreviewPanel.
   *
   * @return
   * /
  private*/ function getMetadataNodeForDisplayedCommentVE()/*:ValueExpression*/ {var this$=this;
    if (!this.metadataNodeForDisplayedCommentVE$Im7w) {
      this.metadataNodeForDisplayedCommentVE$Im7w = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:MetadataTreeNode*/ {
        var comment/*:Comment*/ =AS3.as( this$.displayedContributionVE$Im7w.getValue(),  com.coremedia.elastic.social.studio.model.Comment);
        if (comment) {

          var metadataTreeRoot/*:MetadataTreeNode*/ = this$.getMetadataService().getMetadataTree().getRoot();

          if (metadataTreeRoot) {
            return metadataTreeRoot.findChildrenBy(function (node/*:MetadataTreeNode*/)/*:Boolean*/ {
              return node.getProperty(com.coremedia.cms.editor.sdk.preview.MetadataHelper.METADATA_DEFAULT_PROPERTY) === comment;
            })[0];
          }
        }

        return undefined;
      });
    }

    return this.metadataNodeForDisplayedCommentVE$Im7w;
  }/*

  override protected*/ function beforeDestroy()/*:void*/ {
    this.previewUrlContributionVE$Im7w.removeChangeListener(AS3.bind(this,"detailChanged$Im7w"));
    this.displayedContributionVE$Im7w.removeChangeListener(AS3.bind(this,"detailChanged$Im7w"));
    this.getMetadataNodeForDisplayedCommentVE$Im7w().removeChangeListener(AS3.bind(this,"highlightComment$Im7w"));
    com.coremedia.cms.editor.sdk.preview.PreviewPanel.prototype.beforeDestroy.call(this);
  }/*

  override protected*/ function isShowPreviewForced()/*:Boolean*/ {
    return this.getShowPreviewForcedValueExpression$Im7w().getValue();
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.preview.PreviewPanel",
      displayedContributionVE$Im7w: null,
      previewUrlContributionVE$Im7w: null,
      moderatedContributionAdministration$Im7w: null,
      metadataNodeForDisplayedCommentVE$Im7w: null,
      previewIFrame$Im7w: null,
      showPreviewForcedVE$Im7w: null,
      constructor: ModerationPreviewPanelBase$,
      super$Im7w: function() {
        com.coremedia.cms.editor.sdk.preview.PreviewPanel.prototype.constructor.apply(this, arguments);
      },
      setupPreviewHandling$Im7w: setupPreviewHandling,
      getShowPreviewForcedValueExpression$Im7w: getShowPreviewForcedValueExpression,
      highlightComment$Im7w: highlightComment,
      detailChanged$Im7w: detailChanged,
      setIFrameUrl$Im7w: setIFrameUrl,
      getMetadataNodeForDisplayedCommentVE$Im7w: getMetadataNodeForDisplayedCommentVE,
      beforeDestroy: beforeDestroy,
      isShowPreviewForced: isShowPreviewForced,
      requires: [
        "AS3.Error",
        "com.coremedia.cms.editor.sdk.preview.InnerPreviewPanel",
        "com.coremedia.cms.editor.sdk.preview.InnerPreviewPanelBase",
        "com.coremedia.cms.editor.sdk.preview.MetadataHelper",
        "com.coremedia.cms.editor.sdk.preview.PreviewIFrame",
        "com.coremedia.cms.editor.sdk.preview.PreviewPanel",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.util.EventUtil",
        "com.coremedia.ui.util.createComponentSelector"
      ],
      uses: [
        "com.coremedia.elastic.social.studio.model.Comment",
        "com.coremedia.elastic.social.studio.model.Contribution",
        "com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames",
        "com.coremedia.elastic.social.studio.model.impl.ContributionImpl",
        "com.coremedia.elastic.social.studio.model.impl.ModerationContributionAdministration"
      ]
    };
});
