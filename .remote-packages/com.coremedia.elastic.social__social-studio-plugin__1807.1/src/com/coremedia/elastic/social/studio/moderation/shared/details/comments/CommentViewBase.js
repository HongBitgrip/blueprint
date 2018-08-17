Ext.define("com.coremedia.elastic.social.studio.moderation.shared.details.comments.CommentViewBase", function(CommentViewBase) {/*package com.coremedia.elastic.social.studio.moderation.shared.details.comments {

import com.coremedia.elastic.social.studio.model.Comment;
import com.coremedia.elastic.social.studio.model.CommentPropertyNames;
import com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames;
import com.coremedia.elastic.social.studio.model.ContributionPropertyNames;
import com.coremedia.elastic.social.studio.model.User;
import com.coremedia.elastic.social.studio.model.UserPropertyNames;
import com.coremedia.elastic.social.studio.model.impl.AbstractContributionAdministration;
import com.coremedia.elastic.social.studio.moderation.moderationtab.Activatable;
import com.coremedia.elastic.social.studio.moderation.shared.details.base.ContributionStatusContainer;
import com.coremedia.elastic.social.studio.moderation.shared.details.base.ProcessContributionToolbar;
import com.coremedia.elastic.social.studio.moderation.shared.details.base.UserContributionAnnotationContainer;
import com.coremedia.ui.ckeditor.RichTextArea;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.data.util.PropertyChangeEventUtil;

import ext.StringUtil;
import ext.container.Container;
import ext.panel.Panel;

[ResourceBundle('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin')]
public class CommentViewBase extends Panel implements Activatable {
  protected static const EXTENSION_TAB_PANEL_ITEM_ID:String = "extension-tab-panel-comment";
  protected static const ID:String = "cm-elastic-social-comment-detail-view";
  protected static const META_DATA_VIEW_ITEM_ID:String = "cm-elastic-social-detail-view-meta-data";
  protected static const CURATED_CONTENT_PANEL_ITEM_ID:String = "cm-elastic-social-detail-view-curated-content";
  protected static const ATTACHMENT_CONTAINER_ITEM_ID:String = "cm-elastic-social-detail-view-attachment-container";
  protected static const PROCESS_CONTRIBUTION_VIEW_ITEM_ID:String = "cm-elastic-social-process-contribution-buttons-container";
  protected static const TOOLBAR_ITEM_ID:String = "cm-elastic-social-comment-detail-toolbar";
  protected static const RICHTEXT_AREA_ITEM_ID:String = "richtext-area";
  protected static const USER_ANNOTATION_CONTAINER_ITEM_ID:String = "userAnnotationContainer";
  protected static const STATUS_VIEW_ID:String = "cm-elastic-social-detail-status";

  private var contributionAdministration:AbstractContributionAdministration;
  private var displayedValueExpression:ValueExpression;
  private var displayedStateValueExpression:ValueExpression;
  private var authorStateValueExpression:ValueExpression;
  private var authorValueExpression:ValueExpression;
  private var numberOfContributionsValueExpression:ValueExpression;
  private var numberOfRejectedContributionsValueExpression:ValueExpression;
  private var numberOfComplaintsValueExpression:ValueExpression;
  private var lastComplaintDateValueExpression:ValueExpression;
  private var metaDataView:CommentMetaDataPanel;
  private var processContributionToolbar:ProcessContributionToolbar;
  private var active:Boolean = false;
  private var hideAttachmentContainerValueExpression:ValueExpression;
  private var commentExtensionTabPanel:CommentExtensionTabPanel;
  private var annotationContainer:UserContributionAnnotationContainer;
  private var curatedContentPanel:CuratedContentPanel;
  private var myRichTextArea:RichTextArea;
  private var statusView:ContributionStatusContainer;
  private var curatedContentsValueExpression:ValueExpression;

  public*/ function CommentViewBase$(config/*:CommentView = null*/) {if(arguments.length<=0)config=null;
    this.contributionAdministration$0WNE =AS3.as( AS3.getBindable(config,"abstractContributionAdministration"),  com.coremedia.elastic.social.studio.model.impl.AbstractContributionAdministration);
    this.displayedValueExpression$0WNE = com.coremedia.ui.data.ValueExpressionFactory.create(
            com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames.DISPLAYED, this.contributionAdministration$0WNE);
    this.displayedStateValueExpression$0WNE = this.displayedValueExpression$0WNE.extendBy(com.coremedia.elastic.social.studio.model.ContributionPropertyNames.STATE);
    this.numberOfComplaintsValueExpression$0WNE = this.displayedValueExpression$0WNE.extendBy(com.coremedia.elastic.social.studio.model.ContributionPropertyNames.NUMBER_OF_COMPLAINTS);
    this.lastComplaintDateValueExpression$0WNE = this.displayedValueExpression$0WNE.extendBy(com.coremedia.elastic.social.studio.model.ContributionPropertyNames.LAST_COMPLAINT_DATE);
    this.curatedContentsValueExpression$0WNE = this.displayedValueExpression$0WNE.extendBy(com.coremedia.elastic.social.studio.model.ContributionPropertyNames.CURATED_CONTENTS);
    this.authorValueExpression$0WNE = this.displayedValueExpression$0WNE.extendBy(com.coremedia.elastic.social.studio.model.CommentPropertyNames.AUTHOR);
    this.authorStateValueExpression$0WNE = this.authorValueExpression$0WNE.extendBy(com.coremedia.elastic.social.studio.model.ContributionPropertyNames.STATE);
    this.numberOfContributionsValueExpression$0WNE = this.authorValueExpression$0WNE.extendBy(com.coremedia.elastic.social.studio.model.UserPropertyNames.NUMBER_OF_CONTRIBUTIONS);
    this.numberOfRejectedContributionsValueExpression$0WNE = this.authorValueExpression$0WNE.extendBy(com.coremedia.elastic.social.studio.model.UserPropertyNames.REJECTED_CONTRIBUTIONS);
    this.super$0WNE(config);
    this.myRichTextArea$0WNE =AS3.as( this.queryById(CommentViewBase.RICHTEXT_AREA_ITEM_ID),  com.coremedia.ui.ckeditor.RichTextArea);
    this.mon(this.myRichTextArea$0WNE, com.coremedia.ui.ckeditor.RichTextArea.CKREADY_EVENT,AS3.bind( this,"ckEditorAvailable$0WNE"), null, { single: true });
  }/*

  private*/ function ckEditorAvailable()/*:void*/ {
    com.coremedia.ui.data.util.PropertyChangeEventUtil.fireEvent(this, "cKEditor", null, this.getCKEditor());
  }/*

  [ProvideToExtChildren]
  public*/ function getCKEditor()/*:**/ {
    return this.myRichTextArea$0WNE && this.myRichTextArea$0WNE.getCKEditor();
  }/*

  protected*/ function getVisibleExp()/*:ValueExpression*/ {
    if (!this.hideAttachmentContainerValueExpression$0WNE) {
      this.hideAttachmentContainerValueExpression$0WNE = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(AS3.bind(this,"containsAttachment$0WNE"));
    }
    return this.hideAttachmentContainerValueExpression$0WNE;
  }/*

  override protected*/ function onDestroy()/*:void*/ {
    Ext.panel.Panel.prototype.onDestroy.call(this);
    this.active$0WNE && this.removeAllListener$0WNE();
  }/*

  public*/ function activated(activator/*:Container*/)/*:void*/ {
    this.displayedValueExpression$0WNE.addChangeListener(AS3.bind(this,"toggleUserDetailsButton$0WNE"));
    this.displayedValueExpression$0WNE.addChangeListener(AS3.bind(this,"checkAuthor$0WNE"));
    this.displayedValueExpression$0WNE.addChangeListener(AS3.bind(this,"switchAwayFromAnnotationContainerIfAuthorIsAnonymous$0WNE"));
    this.displayedValueExpression$0WNE.addChangeListener(AS3.bind(this,"showNumberOfContributions$0WNE"));
    this.displayedValueExpression$0WNE.addChangeListener(AS3.bind(this,"refreshRejectButtonLabel$0WNE"));
    this.displayedValueExpression$0WNE.addChangeListener(AS3.bind(this,"showStatus$0WNE"));
    this.displayedValueExpression$0WNE.addChangeListener(AS3.bind(this,"showCreationDate$0WNE"));
    this.curatedContentsValueExpression$0WNE.addChangeListener(AS3.bind(this,"deactivateCuratedContentTab$0WNE"));
    this.curatedContentsValueExpression$0WNE.addChangeListener(AS3.bind(this,"updateCuratedContentTab$0WNE"));
    this.displayedStateValueExpression$0WNE.addChangeListener(AS3.bind(this,"showStatus$0WNE"));
    this.authorValueExpression$0WNE.addChangeListener(AS3.bind(this,"refreshRejectButtonLabel$0WNE"));
    this.authorValueExpression$0WNE.addChangeListener(AS3.bind(this,"loadUserNotes$0WNE"));
    this.authorValueExpression$0WNE.addChangeListener(AS3.bind(this,"deactivateUserAnnotationTab$0WNE"));
    this.authorValueExpression$0WNE.addChangeListener(AS3.bind(this,"toggleEMailWindowLink$0WNE"));
    this.authorStateValueExpression$0WNE.addChangeListener(AS3.bind(this,"refreshRejectButtonLabel$0WNE"));
    this.authorStateValueExpression$0WNE.addChangeListener(AS3.bind(this,"showNumberOfContributions$0WNE"));
    this.authorStateValueExpression$0WNE.addChangeListener(AS3.bind(this,"toggleUserDetailsButton$0WNE"));
    this.authorStateValueExpression$0WNE.addChangeListener(AS3.bind(this,"toggleEMailWindowLink$0WNE"));
    this.numberOfContributionsValueExpression$0WNE.addChangeListener(AS3.bind(this,"showNumberOfContributions$0WNE"));
    this.numberOfRejectedContributionsValueExpression$0WNE.addChangeListener(AS3.bind(this,"showNumberOfContributions$0WNE"));
    this.numberOfComplaintsValueExpression$0WNE.addChangeListener(AS3.bind(this,"showStatus$0WNE"));
    this.lastComplaintDateValueExpression$0WNE.addChangeListener(AS3.bind(this,"showStatus$0WNE"));
    this.toggleUserDetailsButton$0WNE();
    this.showNumberOfContributions$0WNE();
    this.checkAuthor$0WNE();
    this.refreshRejectButtonLabel$0WNE();
    this.showStatus$0WNE();
    this.showCreationDate$0WNE();
    this.loadUserNotes$0WNE();
    this.authorStateValueExpression$0WNE.loadValue(AS3.bind(this,"deactivateUserAnnotationTab$0WNE"));
    this.authorStateValueExpression$0WNE.loadValue(AS3.bind(this,"deactivateCuratedContentTab$0WNE"));
    this.active$0WNE = true;
  }/*

  public*/ function deactivated()/*:void*/ {
    this.active$0WNE && this.removeAllListener$0WNE();
    this.active$0WNE = false;
  }/*

  private*/ function removeAllListener()/*:void*/ {
    this.displayedValueExpression$0WNE.removeChangeListener(AS3.bind(this,"refreshRejectButtonLabel$0WNE"));
    this.displayedValueExpression$0WNE.removeChangeListener(AS3.bind(this,"toggleUserDetailsButton$0WNE"));
    this.displayedValueExpression$0WNE.removeChangeListener(AS3.bind(this,"checkAuthor$0WNE"));
    this.displayedValueExpression$0WNE.removeChangeListener(AS3.bind(this,"switchAwayFromAnnotationContainerIfAuthorIsAnonymous$0WNE"));
    this.displayedValueExpression$0WNE.removeChangeListener(AS3.bind(this,"showNumberOfContributions$0WNE"));
    this.displayedValueExpression$0WNE.removeChangeListener(AS3.bind(this,"showStatus$0WNE"));
    this.displayedValueExpression$0WNE.removeChangeListener(AS3.bind(this,"showCreationDate$0WNE"));
    this.curatedContentsValueExpression$0WNE.removeChangeListener(AS3.bind(this,"deactivateCuratedContentTab$0WNE"));
    this.curatedContentsValueExpression$0WNE.removeChangeListener(AS3.bind(this,"updateCuratedContentTab$0WNE"));
    this.displayedStateValueExpression$0WNE.removeChangeListener(AS3.bind(this,"showStatus$0WNE"));
    this.authorValueExpression$0WNE.removeChangeListener(AS3.bind(this,"refreshRejectButtonLabel$0WNE"));
    this.authorValueExpression$0WNE.removeChangeListener(AS3.bind(this,"loadUserNotes$0WNE"));
    this.authorValueExpression$0WNE.removeChangeListener(AS3.bind(this,"deactivateUserAnnotationTab$0WNE"));
    this.authorValueExpression$0WNE.removeChangeListener(AS3.bind(this,"toggleEMailWindowLink$0WNE"));
    this.authorStateValueExpression$0WNE.removeChangeListener(AS3.bind(this,"refreshRejectButtonLabel$0WNE"));
    this.authorStateValueExpression$0WNE.removeChangeListener(AS3.bind(this,"showNumberOfContributions$0WNE"));
    this.authorStateValueExpression$0WNE.removeChangeListener(AS3.bind(this,"toggleUserDetailsButton$0WNE"));
    this.authorStateValueExpression$0WNE.removeChangeListener(AS3.bind(this,"toggleEMailWindowLink$0WNE"));
    this.numberOfContributionsValueExpression$0WNE.removeChangeListener(AS3.bind(this,"showNumberOfContributions$0WNE"));
    this.numberOfRejectedContributionsValueExpression$0WNE.removeChangeListener(AS3.bind(this,"showNumberOfContributions$0WNE"));
    this.numberOfComplaintsValueExpression$0WNE.removeChangeListener(AS3.bind(this,"showStatus$0WNE"));
    this.lastComplaintDateValueExpression$0WNE.removeChangeListener(AS3.bind(this,"showStatus$0WNE"));
  }/*

  protected*/ function provideAuthor()/*:User*/ {
    var comment/*:Comment*/ =AS3.as( this.contributionAdministration$0WNE.getDisplayed(),  com.coremedia.elastic.social.studio.model.Comment);
    if (comment) {
      return comment.getAuthor();
    }

    return null;
  }/*

  private*/ function containsAttachment()/*:Boolean*/ {
    var comment/*:Comment*/ =AS3.as( this.contributionAdministration$0WNE.getDisplayed(),  com.coremedia.elastic.social.studio.model.Comment);
    return comment && comment.getAttachments() && comment.getAttachments().length > 0;
  }/*

  private*/ function deactivateUserAnnotationTab()/*:void*/ {
    var comment/*:Comment*/ =AS3.as( this.contributionAdministration$0WNE.getDisplayed(),  com.coremedia.elastic.social.studio.model.Comment);
    var hasAuthor/*:Boolean*/ = comment && comment.getAuthor();
    var hasAuthorName/*:Boolean*/ = hasAuthor && comment.getAuthor().getName();
    this.getUserAnnotationContainerPanel$0WNE().setDisabled(!(hasAuthor && hasAuthorName));
  }/*

  private*/ function deactivateCuratedContentTab()/*:void*/ {
    var comment/*:Comment*/ =AS3.as( this.contributionAdministration$0WNE.getDisplayed(),  com.coremedia.elastic.social.studio.model.Comment);
    var hasCuratedContent/*:Boolean*/ = comment && comment.getCuratedContents().length > 0;
    this.getCuratedContentPanel$0WNE().setDisabled(!(hasCuratedContent));
  }/*

  private*/ function updateCuratedContentTab()/*:void*/ {
    this.getCuratedContentPanel$0WNE().createCuratedContentList();
  }/*

  private*/ function showCreationDate()/*:void*/ {
    this.contributionAdministration$0WNE.getDisplayed() && this.setCreationDate$0WNE(this.contributionAdministration$0WNE.getDisplayed().getCreationDate());
  }/*

  private*/ function toggleUserDetailsButton()/*:void*/ {
    var comment/*:Comment*/ =AS3.as( this.contributionAdministration$0WNE.getDisplayed(),  com.coremedia.elastic.social.studio.model.Comment);
    if (comment) {
      this.getMetaDataView$0WNE().toggleUserDetailsButton(comment.getAuthor());
      var author/*:User*/ = comment.getAuthor();
      if (author && author.isAnonymous() || !author) {
        var commentAuthorName/*:String*/ = comment.getAuthorName();
        if (commentAuthorName) {
          this.getMetaDataView$0WNE().setUserDetailsButtonText(
                  commentAuthorName + " (" + this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'userdetail_anonymous') + ")");
        } else {
          this.getMetaDataView$0WNE().setUserDetailsButtonText(this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'userdetail_anonymous'));
        }
      } else {
        this.getMetaDataView$0WNE().setUserDetailsButtonText(author.getName());
      }
    } else {
      this.getMetaDataView$0WNE().toggleUserDetailsButton(null);
      this.getMetaDataView$0WNE().setUserDetailsButtonText(this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'userdetail_anonymous'));
    }
  }/*

  private*/ function checkAuthor()/*:void*/ {
    var comment/*:Comment*/ =AS3.as( this.contributionAdministration$0WNE.getDisplayed(),  com.coremedia.elastic.social.studio.model.Comment);
    if (comment) {
      this.getMetaDataView$0WNE().checkAuthor(comment.getAuthor());
    } else {
      this.getMetaDataView$0WNE().checkAuthor(null);
    }
  }/*

  private*/ function switchAwayFromAnnotationContainerIfAuthorIsAnonymous()/*:void*/ {
    var comment/*:Comment*/ =AS3.as( this.contributionAdministration$0WNE.getDisplayed(),  com.coremedia.elastic.social.studio.model.Comment);
    var needToSwitchToFirstTab/*:Boolean*/ = (comment && comment.getAuthor() && comment.getAuthor().isAnonymous() && this.getExtensionTabPanel$0WNE().getActiveTab().getItemId() === CommentViewBase.USER_ANNOTATION_CONTAINER_ITEM_ID);
    if (needToSwitchToFirstTab) {
      this.getExtensionTabPanel$0WNE().setActiveTab(0);
    }
  }/*

  private*/ function showNumberOfContributions()/*:void*/ {
    var comment/*:Comment*/ =AS3.as( this.contributionAdministration$0WNE.getDisplayed(),  com.coremedia.elastic.social.studio.model.Comment);
    if (comment) {
      this.getMetaDataView$0WNE().showNumberOfContributions(comment.getAuthor());
    } else {
      this.getMetaDataView$0WNE().showNumberOfContributions(null);
    }
  }/*

  private*/ function refreshRejectButtonLabel()/*:void*/ {
    var isEmailSent/*:Boolean*/ = true;
    var comment/*:Comment*/ =AS3.as( this.contributionAdministration$0WNE.getDisplayed(),  com.coremedia.elastic.social.studio.model.Comment);
    if (comment) {
      var author/*:User*/ = comment.getAuthor();
      if (!author || author.isAnonymous() || author.isIgnored() || author.isBlocked()) {
        isEmailSent = false;
      }
    }

    this.getProcessContributionToolbar$0WNE().setRejectButtonLabel(this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'btn_reject'), isEmailSent);
  }/*

  private*/ function toggleEMailWindowLink()/*:void*/ {
    var comment/*:Comment*/ =AS3.as( this.contributionAdministration$0WNE.getDisplayed(),  com.coremedia.elastic.social.studio.model.Comment);
    if (comment) {
      var author/*:User*/ = comment.getAuthor();
      if (author) {
        this.getProcessContributionToolbar$0WNE().toggleEMailWindowLink(author);
      }
    }
  }/*

  private*/ function showStatus()/*:void*/ {
    var message/*:String*/ = "";
    var error/*:String*/ = "";
    var complains/*:Number*/ = 0;
    var displayed/*:Comment*/ =AS3.as( this.contributionAdministration$0WNE.getDisplayed(),  com.coremedia.elastic.social.studio.model.Comment);

    if (displayed) {
      var state/*:String*/ = displayed.getContributionState();
      if (displayed.getLastComplaintDate()) {
        complains = displayed.getNumberOfComplaints();
        error = Ext.String.format(this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'detail_complaints'), complains);
        message = Ext.String.format(
                this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'contributiondetail_state_tooltip_complaint'),
                this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'contribution_type_prefix_comment'),
                this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'contribution_type_contribution'));
      } else {
        message = Ext.String.format(
                this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'contributiondetail_state_tooltip_' + state.toLowerCase()),
                this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'contribution_type_prefix_comment'),
                this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'contribution_type_contribution'));
      }
    }
    this.setStatus$0WNE(message, error);
  }/*

  private*/ function loadUserNotes()/*:void*/ {var this$=this;
    var displayed/*:Comment*/ =AS3.as( this.contributionAdministration$0WNE.getDisplayed(),  com.coremedia.elastic.social.studio.model.Comment);
    displayed && displayed.getAuthor() && displayed.getAuthor().load(function ()/*:void*/ {
      if (displayed.getAuthor().isAnonymous()) {
        displayed.loadUserNotes(this$.contributionAdministration$0WNE, null);
      }
      else {
        displayed.loadUserNotes(this$.contributionAdministration$0WNE, displayed.getAuthor());
      }
    });
  }/*

  private*/ function getMetaDataView()/*:CommentMetaDataPanel*/ {
    if (!this.metaDataView$0WNE) {
      this.metaDataView$0WNE =AS3.as( this.queryById(CommentViewBase.META_DATA_VIEW_ITEM_ID),  com.coremedia.elastic.social.studio.moderation.shared.details.comments.CommentMetaDataPanel);
    }

    return this.metaDataView$0WNE;
  }/*

  private*/ function getProcessContributionToolbar()/*:ProcessContributionToolbar*/ {
    if (!this.processContributionToolbar$0WNE) {
      this.processContributionToolbar$0WNE =AS3.as( this.queryById(CommentViewBase.PROCESS_CONTRIBUTION_VIEW_ITEM_ID),  com.coremedia.elastic.social.studio.moderation.shared.details.base.ProcessContributionToolbar);
    }

    return this.processContributionToolbar$0WNE;
  }/*

  private*/ function getExtensionTabPanel()/*:CommentExtensionTabPanel*/ {
    if (!this.commentExtensionTabPanel$0WNE) {
      this.commentExtensionTabPanel$0WNE =AS3.as( this.queryById(CommentViewBase.EXTENSION_TAB_PANEL_ITEM_ID),  com.coremedia.elastic.social.studio.moderation.shared.details.comments.CommentExtensionTabPanel);
    }
    return this.commentExtensionTabPanel$0WNE;
  }/*

  private*/ function getUserAnnotationContainerPanel()/*:UserContributionAnnotationContainer*/ {
    if (!this.annotationContainer$0WNE) {
      this.annotationContainer$0WNE =AS3.as( this.queryById(CommentViewBase.USER_ANNOTATION_CONTAINER_ITEM_ID),  com.coremedia.elastic.social.studio.moderation.shared.details.base.UserContributionAnnotationContainer);
    }
    return this.annotationContainer$0WNE;
  }/*

  private*/ function getCuratedContentPanel()/*:CuratedContentPanel*/ {
    if (!this.curatedContentPanel$0WNE) {
      this.curatedContentPanel$0WNE =AS3.as( this.queryById(CommentViewBase.CURATED_CONTENT_PANEL_ITEM_ID),  com.coremedia.elastic.social.studio.moderation.shared.details.comments.CuratedContentPanel);
    }
    return this.curatedContentPanel$0WNE;
  }/*

  private*/ function setStatus(message/*:String*/, error/*:String*/)/*:void*/ {
    this.getStatusToolbar$0WNE().setStatus(message, error);
  }/*

  private*/ function setCreationDate(creationDate/*:Date*/)/*:void*/ {
    this.getStatusToolbar$0WNE().setCreationDate(creationDate);
  }/*

  private*/ function getStatusToolbar()/*:ContributionStatusContainer*/ {
    if (!this.statusView$0WNE) {
      this.statusView$0WNE =AS3.as( this.queryById(CommentViewBase.STATUS_VIEW_ID),  com.coremedia.elastic.social.studio.moderation.shared.details.base.ContributionStatusContainer);
    }
    return this.statusView$0WNE;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.panel.Panel",
      mixins: ["com.coremedia.elastic.social.studio.moderation.moderationtab.Activatable"],
      metadata: {getCKEditor: ["ProvideToExtChildren"]},
      contributionAdministration$0WNE: null,
      displayedValueExpression$0WNE: null,
      displayedStateValueExpression$0WNE: null,
      authorStateValueExpression$0WNE: null,
      authorValueExpression$0WNE: null,
      numberOfContributionsValueExpression$0WNE: null,
      numberOfRejectedContributionsValueExpression$0WNE: null,
      numberOfComplaintsValueExpression$0WNE: null,
      lastComplaintDateValueExpression$0WNE: null,
      metaDataView$0WNE: null,
      processContributionToolbar$0WNE: null,
      active$0WNE: false,
      hideAttachmentContainerValueExpression$0WNE: null,
      commentExtensionTabPanel$0WNE: null,
      annotationContainer$0WNE: null,
      curatedContentPanel$0WNE: null,
      myRichTextArea$0WNE: null,
      statusView$0WNE: null,
      curatedContentsValueExpression$0WNE: null,
      constructor: CommentViewBase$,
      super$0WNE: function() {
        Ext.panel.Panel.prototype.constructor.apply(this, arguments);
      },
      ckEditorAvailable$0WNE: ckEditorAvailable,
      getCKEditor: getCKEditor,
      getVisibleExp: getVisibleExp,
      onDestroy: onDestroy,
      activated: activated,
      deactivated: deactivated,
      removeAllListener$0WNE: removeAllListener,
      provideAuthor: provideAuthor,
      containsAttachment$0WNE: containsAttachment,
      deactivateUserAnnotationTab$0WNE: deactivateUserAnnotationTab,
      deactivateCuratedContentTab$0WNE: deactivateCuratedContentTab,
      updateCuratedContentTab$0WNE: updateCuratedContentTab,
      showCreationDate$0WNE: showCreationDate,
      toggleUserDetailsButton$0WNE: toggleUserDetailsButton,
      checkAuthor$0WNE: checkAuthor,
      switchAwayFromAnnotationContainerIfAuthorIsAnonymous$0WNE: switchAwayFromAnnotationContainerIfAuthorIsAnonymous,
      showNumberOfContributions$0WNE: showNumberOfContributions,
      refreshRejectButtonLabel$0WNE: refreshRejectButtonLabel,
      toggleEMailWindowLink$0WNE: toggleEMailWindowLink,
      showStatus$0WNE: showStatus,
      loadUserNotes$0WNE: loadUserNotes,
      getMetaDataView$0WNE: getMetaDataView,
      getProcessContributionToolbar$0WNE: getProcessContributionToolbar,
      getExtensionTabPanel$0WNE: getExtensionTabPanel,
      getUserAnnotationContainerPanel$0WNE: getUserAnnotationContainerPanel,
      getCuratedContentPanel$0WNE: getCuratedContentPanel,
      setStatus$0WNE: setStatus,
      setCreationDate$0WNE: setCreationDate,
      getStatusToolbar$0WNE: getStatusToolbar,
      statics: {
        EXTENSION_TAB_PANEL_ITEM_ID: "extension-tab-panel-comment",
        ID: "cm-elastic-social-comment-detail-view",
        META_DATA_VIEW_ITEM_ID: "cm-elastic-social-detail-view-meta-data",
        CURATED_CONTENT_PANEL_ITEM_ID: "cm-elastic-social-detail-view-curated-content",
        ATTACHMENT_CONTAINER_ITEM_ID: "cm-elastic-social-detail-view-attachment-container",
        PROCESS_CONTRIBUTION_VIEW_ITEM_ID: "cm-elastic-social-process-contribution-buttons-container",
        TOOLBAR_ITEM_ID: "cm-elastic-social-comment-detail-toolbar",
        RICHTEXT_AREA_ITEM_ID: "richtext-area",
        USER_ANNOTATION_CONTAINER_ITEM_ID: "userAnnotationContainer",
        STATUS_VIEW_ID: "cm-elastic-social-detail-status"
      },
      requires: [
        "Ext.String",
        "Ext.panel.Panel",
        "com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin_properties",
        "com.coremedia.elastic.social.studio.moderation.moderationtab.Activatable",
        "com.coremedia.ui.ckeditor.RichTextArea",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.data.util.PropertyChangeEventUtil"
      ],
      uses: [
        "com.coremedia.elastic.social.studio.model.Comment",
        "com.coremedia.elastic.social.studio.model.CommentPropertyNames",
        "com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames",
        "com.coremedia.elastic.social.studio.model.ContributionPropertyNames",
        "com.coremedia.elastic.social.studio.model.UserPropertyNames",
        "com.coremedia.elastic.social.studio.model.impl.AbstractContributionAdministration",
        "com.coremedia.elastic.social.studio.moderation.shared.details.base.ContributionStatusContainer",
        "com.coremedia.elastic.social.studio.moderation.shared.details.base.ProcessContributionToolbar",
        "com.coremedia.elastic.social.studio.moderation.shared.details.base.UserContributionAnnotationContainer",
        "com.coremedia.elastic.social.studio.moderation.shared.details.comments.CommentExtensionTabPanel",
        "com.coremedia.elastic.social.studio.moderation.shared.details.comments.CommentMetaDataPanel",
        "com.coremedia.elastic.social.studio.moderation.shared.details.comments.CuratedContentPanel"
      ]
    };
});
