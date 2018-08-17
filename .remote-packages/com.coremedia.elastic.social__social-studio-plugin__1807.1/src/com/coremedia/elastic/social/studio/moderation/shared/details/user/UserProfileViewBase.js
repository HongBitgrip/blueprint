Ext.define("com.coremedia.elastic.social.studio.moderation.shared.details.user.UserProfileViewBase", function(UserProfileViewBase) {/*package com.coremedia.elastic.social.studio.moderation.shared.details.user {

import com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames;
import com.coremedia.elastic.social.studio.model.ContributionPropertyNames;
import com.coremedia.elastic.social.studio.model.User;
import com.coremedia.elastic.social.studio.model.UserPropertyNames;
import com.coremedia.elastic.social.studio.model.impl.ModerationContributionAdministration;
import com.coremedia.elastic.social.studio.moderation.moderationtab.Activatable;
import com.coremedia.elastic.social.studio.moderation.shared.details.base.ContributionUserInformationPanel;
import com.coremedia.elastic.social.studio.moderation.shared.details.base.ProcessContributionToolbar;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.util.EventUtil;

import ext.Component;
import ext.StringUtil;
import ext.container.Container;
import ext.panel.Panel;

[ResourceBundle('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin')]
public class UserProfileViewBase extends Panel implements Activatable {
  public static const META_DATA_VIEW_ITEM_ID:String = "cm-elastic-social-detail-view-meta-data";
  public static const PROCESS_CONTRIBUTION_VIEW_ITEM_ID:String = "cm-elastic-social-process-contribution-buttons-container";
  public static const USER_DETAIL_VIEW_ITEM_ID:String = "cm-elastic-social-moderation-tab-userdetails-container";
  protected static const EXTENSION_TAB_PANEL_ITEM_ID:String = "extension-tab-panel-profile";
  protected static const TOOLBAR_ITEM_ID:String = "cm-elastic-social-detail-view-toolbar";
  protected static const USER_ANNOTATION_CONTAINER_ITEM_ID:String = "userAnnotationContainer";

  private var moderationContributionAdministration:ModerationContributionAdministration;
  private var userValueExpression:ValueExpression;
  private var userStateValueExpression:ValueExpression;
  private var userNameValueExpression:ValueExpression;
  private var numberOfContributionsValueExpression:ValueExpression;
  private var numberOfRejectedContributionsValueExpression:ValueExpression;
  private var numberOfComplaintsValueExpression:ValueExpression;
  private var userInformationContainer:ContributionUserInformationPanel;
  private var processContributionToolbar:ProcessContributionToolbar;
  private var userDetailView:UserProfileDetailsView;
  private var detailToolbar:UserProfileHeader;
  private var active:Boolean = false;

  public*/ function UserProfileViewBase$(config/*:UserProfileView = null*/) {if(arguments.length<=0)config=null;
    this.moderationContributionAdministration$4sqa =AS3.as( AS3.getBindable(config,"moderation").getModerationContributionAdministration(),  com.coremedia.elastic.social.studio.model.impl.ModerationContributionAdministration);

    this.userValueExpression$4sqa = com.coremedia.ui.data.ValueExpressionFactory.create(
            com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames.DISPLAYED, this.moderationContributionAdministration$4sqa);
    this.numberOfComplaintsValueExpression$4sqa = this.userValueExpression$4sqa.extendBy(com.coremedia.elastic.social.studio.model.ContributionPropertyNames.NUMBER_OF_COMPLAINTS);
    this.userStateValueExpression$4sqa = this.userValueExpression$4sqa.extendBy(com.coremedia.elastic.social.studio.model.ContributionPropertyNames.STATE);
    this.userNameValueExpression$4sqa = this.userValueExpression$4sqa.extendBy(com.coremedia.elastic.social.studio.model.UserPropertyNames.NAME);
    this.numberOfContributionsValueExpression$4sqa = this.userValueExpression$4sqa.extendBy(com.coremedia.elastic.social.studio.model.UserPropertyNames.NUMBER_OF_CONTRIBUTIONS);
    this.numberOfRejectedContributionsValueExpression$4sqa = this.userValueExpression$4sqa.extendBy(com.coremedia.elastic.social.studio.model.UserPropertyNames.REJECTED_CONTRIBUTIONS);

    this.super$4sqa(config);
  }/*

  override protected*/ function onDestroy()/*:void*/ {
    Ext.panel.Panel.prototype.onDestroy.call(this);
    this.active$4sqa && this.removeAllListener$4sqa();
  }/*

  override protected*/ function afterRender()/*:void*/ {
    Ext.panel.Panel.prototype.afterRender.call(this);
    this.toggleDeleteUserImageButton$4sqa();
  }/*

  public*/ function activated(activator/*:Container*/)/*:void*/ {var this$=this;
    this.userValueExpression$4sqa.addChangeListener(AS3.bind(this,"toggleUserDetailsButton$4sqa"));
    this.userValueExpression$4sqa.addChangeListener(AS3.bind(this,"checkAuthor$4sqa"));
    this.userValueExpression$4sqa.addChangeListener(AS3.bind(this,"showStatus$4sqa"));
    this.userValueExpression$4sqa.addChangeListener(AS3.bind(this,"showCreationDate$4sqa"));
    this.userValueExpression$4sqa.addChangeListener(AS3.bind(this,"showNumberOfContributions$4sqa"));
    this.userValueExpression$4sqa.addChangeListener(AS3.bind(this,"toggleDeleteUserImageButton$4sqa"));
    this.userValueExpression$4sqa.addChangeListener(AS3.bind(this,"updateApproveButtonFromValueExp$4sqa"));
    this.userValueExpression$4sqa.addChangeListener(AS3.bind(this,"loadUserNotes$4sqa"));
    this.userValueExpression$4sqa.addChangeListener(AS3.bind(this,"refreshRejectButtonLabel$4sqa"));
    this.numberOfContributionsValueExpression$4sqa.addChangeListener(AS3.bind(this,"showNumberOfContributions$4sqa"));
    this.numberOfRejectedContributionsValueExpression$4sqa.addChangeListener(AS3.bind(this,"showNumberOfContributions$4sqa"));
    this.numberOfComplaintsValueExpression$4sqa.addChangeListener(AS3.bind(this,"showStatus$4sqa"));
    this.userNameValueExpression$4sqa.addChangeListener(AS3.bind(this,"selectNextContributionIfUserIsAnonymized$4sqa"));
    this.userStateValueExpression$4sqa.addChangeListener(AS3.bind(this,"showNumberOfContributions$4sqa"));
    this.userStateValueExpression$4sqa.addChangeListener(AS3.bind(this,"toggleUserDetailsButton$4sqa"));
    this.userStateValueExpression$4sqa.addChangeListener(AS3.bind(this,"refreshRejectButtonLabel$4sqa"));
    this.userStateValueExpression$4sqa.addChangeListener(AS3.bind(this,"showStatus$4sqa"));
    this.getUserDetailView$4sqa().addListener(com.coremedia.elastic.social.studio.moderation.shared.details.user.UserProfileDetailsViewBase.MODIFIED_EVENT,AS3.bind( this,"updateApproveButtonFromValueExp$4sqa"));

    com.coremedia.ui.util.EventUtil.invokeLater(function ()/*:void*/ {
      this$.toggleUserDetailsButton$4sqa();
      this$.checkAuthor$4sqa();
      this$.toggleUserDetailsButton$4sqa();
      this$.showNumberOfContributions$4sqa();
      this$.refreshRejectButtonLabel$4sqa();
      this$.showStatus$4sqa();
      this$.showCreationDate$4sqa();
      this$.refreshApproveButtonLabel$4sqa();
      this$.loadUserNotes$4sqa();

      this$.itemCollection.each(function (component/*:Component*/)/*:void*/ {
        var activatable/*:Activatable*/ =AS3.as( component,  com.coremedia.elastic.social.studio.moderation.moderationtab.Activatable);
        if (activatable) {
          this$.activate$4sqa(activatable);
        }
      });
    });

    this.active$4sqa = true;
  }/*

  private*/ function activate(activatable/*:Activatable*/)/*:void*/ {
    activatable.activated(this);
  }/*

  public*/ function deactivated()/*:void*/ {
    this.active$4sqa && this.removeAllListener$4sqa();
    this.itemCollection.each(function (component/*:Component*/)/*:void*/ {
      var activatable/*:Activatable*/ =AS3.as( component,  com.coremedia.elastic.social.studio.moderation.moderationtab.Activatable);
      if (activatable) {
        activatable.deactivated();
      }
    });
    this.active$4sqa = false;
  }/*

  private*/ function removeAllListener()/*:void*/ {
    this.userValueExpression$4sqa.removeChangeListener(AS3.bind(this,"toggleUserDetailsButton$4sqa"));
    this.userValueExpression$4sqa.removeChangeListener(AS3.bind(this,"checkAuthor$4sqa"));
    this.userValueExpression$4sqa.removeChangeListener(AS3.bind(this,"showNumberOfContributions$4sqa"));
    this.userValueExpression$4sqa.removeChangeListener(AS3.bind(this,"showCreationDate$4sqa"));
    this.userValueExpression$4sqa.removeChangeListener(AS3.bind(this,"showStatus$4sqa"));
    this.userValueExpression$4sqa.removeChangeListener(AS3.bind(this,"toggleDeleteUserImageButton$4sqa"));
    this.userValueExpression$4sqa.removeChangeListener(AS3.bind(this,"updateApproveButtonFromValueExp$4sqa"));
    this.userValueExpression$4sqa.removeChangeListener(AS3.bind(this,"loadUserNotes$4sqa"));
    this.userValueExpression$4sqa.removeChangeListener(AS3.bind(this,"refreshRejectButtonLabel$4sqa"));
    this.numberOfContributionsValueExpression$4sqa.removeChangeListener(AS3.bind(this,"showNumberOfContributions$4sqa"));
    this.numberOfComplaintsValueExpression$4sqa.removeChangeListener(AS3.bind(this,"showStatus$4sqa"));
    this.numberOfRejectedContributionsValueExpression$4sqa.removeChangeListener(AS3.bind(this,"showNumberOfContributions$4sqa"));
    this.userNameValueExpression$4sqa.removeChangeListener(AS3.bind(this,"selectNextContributionIfUserIsAnonymized$4sqa"));
    this.userStateValueExpression$4sqa.removeChangeListener(AS3.bind(this,"showNumberOfContributions$4sqa"));
    this.userStateValueExpression$4sqa.removeChangeListener(AS3.bind(this,"toggleUserDetailsButton$4sqa"));
    this.userStateValueExpression$4sqa.removeChangeListener(AS3.bind(this,"refreshRejectButtonLabel$4sqa"));
    this.userStateValueExpression$4sqa.removeChangeListener(AS3.bind(this,"showStatus$4sqa"));
    this.getUserDetailView$4sqa().removeListener(com.coremedia.elastic.social.studio.moderation.shared.details.user.UserProfileDetailsViewBase.MODIFIED_EVENT,AS3.bind( this,"updateApproveButtonFromValueExp$4sqa"));
  }/*

  private*/ function toggleDeleteUserImageButton()/*:void*/ {
    var user/*:User*/ =AS3.as( this.moderationContributionAdministration$4sqa.getDisplayed(),  com.coremedia.elastic.social.studio.model.User);
    if (user && user.getImage()) {
      this.getUserDetailView$4sqa().enableDeleteUserImageButton();
    } else {
      this.getUserDetailView$4sqa().disableDeleteUserImageButton();
    }
  }/*

  /**
   * The first item in contributionList will be selected when the userName changed
   * AND the contributionState is anonymized.
   * This only happen in an unusual case:
   *  - accept a user via contributionList
   *  - click the last moderated button
   *  - open the userManagement for that profile and delete it
   * /
  private*/ function selectNextContributionIfUserIsAnonymized()/*:void*/ {
    var displayed/*:User*/ =AS3.as( this.moderationContributionAdministration$4sqa.getDisplayed(),  com.coremedia.elastic.social.studio.model.User);

    if (displayed && displayed.getContributionState() === "ANONYMIZED") {
      this.moderationContributionAdministration$4sqa.setSelectedContribution(this.moderationContributionAdministration$4sqa.getModeratedItems()["items"][0]);
    }
  }/*

  private*/ function toggleUserDetailsButton()/*:void*/ {
    var user/*:User*/ =AS3.as( this.moderationContributionAdministration$4sqa.getDisplayed(),  com.coremedia.elastic.social.studio.model.User);
    this.getUserInformationView$4sqa().toggleUserDetailsButton(user);
    if (user) {
      this.getUserInformationView$4sqa().setUserDetailsButtonText(user.getName());
    } else {
      this.getUserInformationView$4sqa().setUserDetailsButtonText(this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'userdetail_anonymous'));
    }
  }/*

  private*/ function updateApproveButtonFromValueExp(value/*:**/)/*:void*/ {
    if (value.newValue) {
      this.refreshApproveButtonLabel$4sqa(value.newValue);
    } else {
      this.refreshApproveButtonLabel$4sqa(false);
    }
  }/*


  private*/ function checkAuthor()/*:void*/ {
    this.getUserInformationView$4sqa().checkAuthor(AS3.as(this.moderationContributionAdministration$4sqa.getDisplayed(),  com.coremedia.elastic.social.studio.model.User));
  }/*

  private*/ function showNumberOfContributions()/*:void*/ {
    this.getUserInformationView$4sqa().showNumberOfContributions(AS3.as(this.moderationContributionAdministration$4sqa.getDisplayed(),  com.coremedia.elastic.social.studio.model.User));
  }/*

  private*/ function showCreationDate()/*:void*/ {
    var displayed/*:User*/ =AS3.as( this.moderationContributionAdministration$4sqa.getDisplayed(),  com.coremedia.elastic.social.studio.model.User);
    if (displayed) {
      this.getToolbar$4sqa().setCreationDate(displayed.getRegistrationDate());
    } else {
      this.getToolbar$4sqa().setCreationDate(null);
    }
  }/*

  protected*/ function provideAuthor()/*:User*/ {
    return AS3.as( this.moderationContributionAdministration$4sqa.getDisplayed(),  com.coremedia.elastic.social.studio.model.User);
  }/*

  private*/ function refreshRejectButtonLabel()/*:void*/ {
    var user/*:User*/ =AS3.as( this.moderationContributionAdministration$4sqa.getDisplayed(),  com.coremedia.elastic.social.studio.model.User);
    this.getProcessContributionToolbar$4sqa().setRejectButtonLabel(
            this.getRejectButtonLabel(), (user && !user.isAnonymous() && !user.isIgnored() && !user.isBlocked()));
  }/*

  private*/ function refreshApproveButtonLabel(modified/*:Boolean = false*/)/*:void*/ {if(arguments.length<=0)modified=false;
    var user/*:User*/ =AS3.as( this.moderationContributionAdministration$4sqa.getDisplayed(),  com.coremedia.elastic.social.studio.model.User);

    var showEditedFlag/*:Boolean*/ = modified;
    if (user && !showEditedFlag) {
      showEditedFlag = user.hasStageChanges();
    }

    this.getProcessContributionToolbar$4sqa().setApproveButtonLabel(this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'btn_approve'), showEditedFlag);
  }/*

  protected*/ function getRejectButtonLabel()/*:String*/ {
    var label/*:String*/ = this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'btn_reject');

    if (this.moderationContributionAdministration$4sqa && this.moderationContributionAdministration$4sqa.hasDisplayed()) {
      var user/*:User*/ =AS3.as( this.moderationContributionAdministration$4sqa.getDisplayed(),  com.coremedia.elastic.social.studio.model.User);
      if (user && user.hasChangedSinceLastModeration() ||
              user && user.hasStageChanges() && user.hasLastModeratedProperties()) {
        label = this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'btn_reset_and_send');
      } else {
        label = this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'btn_delete_and_send');
      }
    }

    return label;
  }/*

  private*/ function showStatus()/*:void*/ {
    var message/*:String*/ = "";
    var error/*:String*/ = "";
    var complains/*:Number*/ = 0;
    var displayed/*:User*/ =AS3.as( this.moderationContributionAdministration$4sqa.getDisplayed(),  com.coremedia.elastic.social.studio.model.User);

    if (displayed) {
      var state/*:String*/ = displayed.getContributionState();
      if (displayed.getNumberOfComplaints() > 0) {
        complains = displayed.getNumberOfComplaints();
        error = Ext.String.format(this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', "detail_complaints"), complains);
      } else {
        message = Ext.String.format(
                this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'contributiondetail_state_tooltip_' + state.toLowerCase()),
                this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', "contribution_type_prefix_user"),
                this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', "contribution_type_user"));
      }

      if (displayed.hasChangedSinceLastModeration()) {
        if (complains > 0) {
          error = " \u0026 " + Ext.String.format(this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', "detail_complaints"), complains);
        }
        message = Ext.String.format(
                this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'contributiondetail_state_tooltip_edited'),
                this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', "contribution_type_prefix_user"),
                this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', "contribution_type_user"));
      }
    }
    this.getToolbar$4sqa().setStatus(message, error);
  }/*

  private*/ function loadUserNotes()/*:void*/ {var this$=this;
    var displayed/*:User*/ =AS3.as( this.moderationContributionAdministration$4sqa.getDisplayed(),  com.coremedia.elastic.social.studio.model.User);
    displayed && displayed.load(function ()/*:void*/ {
      displayed.loadUserNotes(this$.moderationContributionAdministration$4sqa, displayed);
    });
  }/*

  private*/ function getUserInformationView()/*:ContributionUserInformationPanel*/ {
    if (!this.userInformationContainer$4sqa) {
      this.userInformationContainer$4sqa =AS3.as( this.queryById(UserProfileViewBase.META_DATA_VIEW_ITEM_ID),  com.coremedia.elastic.social.studio.moderation.shared.details.base.ContributionUserInformationPanel);
    }

    return this.userInformationContainer$4sqa;
  }/*

  private*/ function getProcessContributionToolbar()/*:ProcessContributionToolbar*/ {
    if (!this.processContributionToolbar$4sqa) {
      this.processContributionToolbar$4sqa =AS3.as( this.queryById(UserProfileViewBase.PROCESS_CONTRIBUTION_VIEW_ITEM_ID),  com.coremedia.elastic.social.studio.moderation.shared.details.base.ProcessContributionToolbar);
    }

    return this.processContributionToolbar$4sqa;
  }/*

  private*/ function getUserDetailView()/*:UserProfileDetailsView*/ {
    if (!this.userDetailView$4sqa) {
      this.userDetailView$4sqa =AS3.as( this.queryById(UserProfileViewBase.USER_DETAIL_VIEW_ITEM_ID),  com.coremedia.elastic.social.studio.moderation.shared.details.user.UserProfileDetailsView);
    }

    return this.userDetailView$4sqa;
  }/*


  private*/ function getToolbar()/*:UserProfileHeader*/ {
    if (!this.detailToolbar$4sqa) {
      this.detailToolbar$4sqa =AS3.as( this.queryById(UserProfileViewBase.TOOLBAR_ITEM_ID),  com.coremedia.elastic.social.studio.moderation.shared.details.user.UserProfileHeader);
    }

    return this.detailToolbar$4sqa;
  }/*

  protected*/ function invalidPropertyCallback(property/*:String*/, message/*:String*/)/*:void*/ {
    this.getUserDetailView$4sqa().setInvalid(property, message);
  }/*

  protected*/ function changesDiscardedCallback()/*:void*/ {
    this.getUserDetailView$4sqa().reset();
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.panel.Panel",
      mixins: ["com.coremedia.elastic.social.studio.moderation.moderationtab.Activatable"],
      moderationContributionAdministration$4sqa: null,
      userValueExpression$4sqa: null,
      userStateValueExpression$4sqa: null,
      userNameValueExpression$4sqa: null,
      numberOfContributionsValueExpression$4sqa: null,
      numberOfRejectedContributionsValueExpression$4sqa: null,
      numberOfComplaintsValueExpression$4sqa: null,
      userInformationContainer$4sqa: null,
      processContributionToolbar$4sqa: null,
      userDetailView$4sqa: null,
      detailToolbar$4sqa: null,
      active$4sqa: false,
      constructor: UserProfileViewBase$,
      super$4sqa: function() {
        Ext.panel.Panel.prototype.constructor.apply(this, arguments);
      },
      onDestroy: onDestroy,
      afterRender: afterRender,
      activated: activated,
      activate$4sqa: activate,
      deactivated: deactivated,
      removeAllListener$4sqa: removeAllListener,
      toggleDeleteUserImageButton$4sqa: toggleDeleteUserImageButton,
      selectNextContributionIfUserIsAnonymized$4sqa: selectNextContributionIfUserIsAnonymized,
      toggleUserDetailsButton$4sqa: toggleUserDetailsButton,
      updateApproveButtonFromValueExp$4sqa: updateApproveButtonFromValueExp,
      checkAuthor$4sqa: checkAuthor,
      showNumberOfContributions$4sqa: showNumberOfContributions,
      showCreationDate$4sqa: showCreationDate,
      provideAuthor: provideAuthor,
      refreshRejectButtonLabel$4sqa: refreshRejectButtonLabel,
      refreshApproveButtonLabel$4sqa: refreshApproveButtonLabel,
      getRejectButtonLabel: getRejectButtonLabel,
      showStatus$4sqa: showStatus,
      loadUserNotes$4sqa: loadUserNotes,
      getUserInformationView$4sqa: getUserInformationView,
      getProcessContributionToolbar$4sqa: getProcessContributionToolbar,
      getUserDetailView$4sqa: getUserDetailView,
      getToolbar$4sqa: getToolbar,
      invalidPropertyCallback: invalidPropertyCallback,
      changesDiscardedCallback: changesDiscardedCallback,
      statics: {
        META_DATA_VIEW_ITEM_ID: "cm-elastic-social-detail-view-meta-data",
        PROCESS_CONTRIBUTION_VIEW_ITEM_ID: "cm-elastic-social-process-contribution-buttons-container",
        USER_DETAIL_VIEW_ITEM_ID: "cm-elastic-social-moderation-tab-userdetails-container",
        EXTENSION_TAB_PANEL_ITEM_ID: "extension-tab-panel-profile",
        TOOLBAR_ITEM_ID: "cm-elastic-social-detail-view-toolbar",
        USER_ANNOTATION_CONTAINER_ITEM_ID: "userAnnotationContainer"
      },
      requires: [
        "Ext.String",
        "Ext.panel.Panel",
        "com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin_properties",
        "com.coremedia.elastic.social.studio.moderation.moderationtab.Activatable",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.util.EventUtil"
      ],
      uses: [
        "com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames",
        "com.coremedia.elastic.social.studio.model.ContributionPropertyNames",
        "com.coremedia.elastic.social.studio.model.User",
        "com.coremedia.elastic.social.studio.model.UserPropertyNames",
        "com.coremedia.elastic.social.studio.model.impl.ModerationContributionAdministration",
        "com.coremedia.elastic.social.studio.moderation.shared.details.base.ContributionUserInformationPanel",
        "com.coremedia.elastic.social.studio.moderation.shared.details.base.ProcessContributionToolbar",
        "com.coremedia.elastic.social.studio.moderation.shared.details.user.UserProfileDetailsView",
        "com.coremedia.elastic.social.studio.moderation.shared.details.user.UserProfileDetailsViewBase",
        "com.coremedia.elastic.social.studio.moderation.shared.details.user.UserProfileHeader"
      ]
    };
});
