Ext.define("com.coremedia.elastic.social.studio.usermanagement.details.UserDetailsPanelBase", function(UserDetailsPanelBase) {/*package com.coremedia.elastic.social.studio.usermanagement.details {

import com.coremedia.cms.editor.sdk.util.MessageBoxUtil;
import com.coremedia.elastic.social.studio.email.EMailWindow;
import com.coremedia.elastic.social.studio.model.Moderation;
import com.coremedia.elastic.social.studio.model.User;
import com.coremedia.elastic.social.studio.model.UserAdministration;
import com.coremedia.elastic.social.studio.model.UserAdministrationPropertyNames;
import com.coremedia.elastic.social.studio.model.UserPropertyNames;
import com.coremedia.elastic.social.studio.model.utils.ElasticUtils;
import com.coremedia.elastic.social.studio.usermanagement.ValidationMessageBox;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.util.EncodingUtil;

import ext.ComponentManager;
import ext.Ext;
import ext.StringUtil;
import ext.button.Button;
import ext.form.field.DisplayField;
import ext.panel.Panel;
import ext.util.Format;
import ext.window.Window;

import js.Event;

import mx.resources.ResourceManager;

[ResourceBundle('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin')]
public class UserDetailsPanelBase extends Panel {
  public static const USER_DETAILS_DATA_ITEM_ID:String = "cm-elastic-social-user-details-data-panel";
  protected static const DELETE_BUTTON_ITEM_ID:String = "deleteButton";
  protected static const OPEN_EMAIL_WINDOW_BUTTON_ITEM_ID:String = "openEmailWindowButton";

  protected static const STATE_MESSAGES_CONTAINER_ITEM_ID:String = "stateMessagesContainer";
  protected static const SWITCH_ITEM_ID:String = "switchPanel";
  protected static const USER_META_DATA_ITEM_ID:String = "cm-elastic-social-user-meta-data-panel";
  protected static const USER_RESTRICTIONS_ITEM_ID:String = "cm-elastic-social-user-restrictions-panel";
  protected static const USER_DETAILS_APPROVE_BTN_ITEM_ID:String = "applyButton";
  protected static const RESEND_REGISTRATION_MESSAGE_DISPLAY_FIELD_ITEM_ID:String = "resendRegistrationMessageDisplayField";
  private static const*/var EVENT_ANONYMIZED$static/*:String*/ = "event_anonymized";/*

  private var moderation:Moderation;
  private var userAdministration:UserAdministration;
  private var modifiedDetails:Boolean = false;
  private var modifiedRestrictionChanges:Boolean = false;
  private var userRestrictionPanel:UserRestrictionPanel;
  private var userDetailsDataPanel:UserDetailsDataPanel;
  private var userValueExpression:ValueExpression;
  private var userDetailsChangedValueExpression:ValueExpression;
  private var userRestrictionModifiedValueExpression:ValueExpression;
  private var userStateValueExpression:ValueExpression;
  private var closeUserDetailView:Function;
  private var applyButton:Button;
  private var userToSearchSwitchPanel:UserToSearchSwitchPanel;
  private var stateMessageContainer:UserWarningContainer;
  private var resendRegistrationMessageDisplayField:DisplayField;
  private var resendTimer:*;

  public*/ function UserDetailsPanelBase$(config/*:UserDetailsPanel = undefined*/) {
    this.moderation$ehNa = AS3.getBindable(config,"moderation");
    this.userAdministration$ehNa = this.moderation$ehNa.getUserAdministration();
    this.closeUserDetailView$ehNa = AS3.getBindable(config,"closeUserDetailView");

    this.userValueExpression$ehNa = com.coremedia.ui.data.ValueExpressionFactory.create(com.coremedia.elastic.social.studio.model.UserAdministrationPropertyNames.EDITED, this.userAdministration$ehNa);
    this.userStateValueExpression$ehNa = this.userValueExpression$ehNa.extendBy(com.coremedia.elastic.social.studio.model.UserPropertyNames.STATE);
    this.userStateValueExpression$ehNa.addChangeListener(AS3.bind(this,"showMailIndicatorAtApproveButton$ehNa"));
    this.userValueExpression$ehNa.addChangeListener(AS3.bind(this,"refreshStateMessage$ehNa"));
    this.userStateValueExpression$ehNa.addChangeListener(AS3.bind(this,"refreshStateMessage$ehNa"));
    this.userValueExpression$ehNa.addChangeListener(AS3.bind(this,"resetRegistrationMailSentMessage$ehNa"));
    this.super$ehNa(config);
  }/*

  override protected*/ function afterRender()/*:void*/ {
    Ext.panel.Panel.prototype.afterRender.call(this);
    this.getStateMessageContainer$ehNa().hide();

    this.getDetailsChangedValueExpression$ehNa().addChangeListener(AS3.bind(this,"setModifiedDetails"));
    this.setModifiedDetails(this.getDetailsChangedValueExpression$ehNa());

    // create valueExpressions so we can listen to the panels modified event
    this.userRestrictionModifiedValueExpression$ehNa = com.coremedia.ui.data.ValueExpressionFactory.create("modified", this.getUserRestrictionPanel$ehNa());
    this.userRestrictionModifiedValueExpression$ehNa.addChangeListener(AS3.bind(this,"setModifiedRestrictions"));
    this.addListener("activate",AS3.bind( this,"broadcastActivate$ehNa"));
  }/*

  override protected*/ function beforeDestroy()/*:void*/ {
    this.modifiedDetails$ehNa = false;
    this.modifiedRestrictionChanges$ehNa = false;
    this.getDetailsChangedValueExpression$ehNa().removeChangeListener(AS3.bind(this,"setModifiedDetails"));
    this.userRestrictionModifiedValueExpression$ehNa.removeChangeListener(AS3.bind(this,"setModifiedRestrictions"));
    this.userValueExpression$ehNa.removeChangeListener(AS3.bind(this,"refreshStateMessage$ehNa"));
    this.userStateValueExpression$ehNa.removeChangeListener(AS3.bind(this,"refreshStateMessage$ehNa"));
    this.userValueExpression$ehNa.removeChangeListener(AS3.bind(this,"resetRegistrationMailSentMessage$ehNa"));
    this.userStateValueExpression$ehNa.removeChangeListener(AS3.bind(this,"showMailIndicatorAtApproveButton$ehNa"));
    this.removeListener("activate",AS3.bind( this,"broadcastActivate$ehNa"));
    Ext.panel.Panel.prototype.beforeDestroy.call(this);
  }/*

  private*/ function broadcastActivate()/*:void*/ {
    if (this.getUserToSearchSwitchPanel$ehNa()) {
      this.getUserToSearchSwitchPanel$ehNa().refreshStatus();
    }
    this.refreshStateMessage$ehNa(false);
    this.resetRegistrationMailSentMessage$ehNa();
  }/*

  public*/ function openEmailEditor()/*:void*/ {
    var emailWindow/*:EMailWindow*/ = (AS3.as(Ext.ComponentManager.get("cm-elastic-social-email-window"),  com.coremedia.elastic.social.studio.email.EMailWindow));
    if (emailWindow) {
      emailWindow.setVisible(true);
      if (AS3.getBindable(emailWindow,"collapsed","DUMMY")) {
        emailWindow.expand(true);
      }
    } else {
      emailWindow = Ext.create(com.coremedia.elastic.social.studio.email.EMailWindow, {emailProvider: this.moderation$ehNa.getUserAdministration()});
      emailWindow.expand(true);
      emailWindow.show();
    }
  }/*

  protected*/ function anonymized()/*:void*/ {
    this.fireEvent(EVENT_ANONYMIZED$static);
  }/*

  private*/ function isModified()/*:Boolean*/ {
    return this.modifiedRestrictionChanges$ehNa || this.modifiedDetails$ehNa;
  }/*

  public*/ function applyChangesIfNeeded(success/*:Function*/)/*:void*/ {var this$=this;
    if (this.isModified$ehNa()) {
      this.confirmChanges$ehNa(
              function ()/*:void*/ {
                this$.applyChanges(null, null, false, success);
              },
              function ()/*:void*/ {
                this$.cancel(false);
                success();
              });
    } else {
      if (success) {
        success();
      }
    }
  }/*

  protected*/ function resendRegistrationConfirmation()/*:void*/ {var this$=this;
    var user/*:User*/ = this.userAdministration$ehNa.getEdited();
    if (user) {
      user.resendRegistrationConfirmation(
              function ()/*:void*/ {
                this$.modifiedDetails$ehNa = false;
                this$.modifiedRestrictionChanges$ehNa = false;
                this$.getUserRestrictionPanel$ehNa().resetPanel();
                this$.getUserRestrictionPanel$ehNa().disableResendRegistrationButton();
                this$.setRegistrationSentMessage$ehNa();
                this$.getResendRegistrationMessageDisplayField$ehNa().show();
                this$.getResendRegistrationMessageDisplayField$ehNa().el.show(true);
                this$.resendTimer$ehNa = window.setTimeout(function ()/*:void*/ {
                  this$.getResendRegistrationMessageDisplayField$ehNa().el.hide(true);
                  window.setTimeout(function ()/*:void*/ {
                    this$.getResendRegistrationMessageDisplayField$ehNa().hide();
                    this$.getUserRestrictionPanel$ehNa().enableResendRegistrationButton();
                  }, 1000);
                }, 5000);
              },
              function (messages/*:Array*/)/*:void*/ {
                this$.resendRegistrationConfirmationFailed$ehNa(messages);
              });
    }
  }/*

  private*/ function refreshStateMessage(afterManualChange/*:Boolean = true*/)/*:void*/ {if(arguments.length<=0)afterManualChange=true;
    var author/*:User*/ = this.userAdministration$ehNa.getEdited();
    // we only have state messages for users that are ignored or blocked or not yet registered
    if (author && (author.isBlocked() || author.isIgnored() || author.isRegistrationRequested())) {
      this.setStateMessage$ehNa(author.getContributionState(), afterManualChange);
      this.getStateMessageContainer$ehNa().show();
    } else if (this.getStateMessageContainer$ehNa().isVisible(true)) {
      this.getStateMessageContainer$ehNa().hide();
    }
  }/*

  private*/ function getDetailsChangedValueExpression()/*:ValueExpression*/ {var this$=this;
    if (!this.userDetailsChangedValueExpression$ehNa) {
      this.userDetailsChangedValueExpression$ehNa = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:Boolean*/ {
        var user/*:User*/ =AS3.as( this$.userValueExpression$ehNa.getValue(),  com.coremedia.elastic.social.studio.model.User);
        var detailsChanged/*:Boolean*/ = false;
        if (user) {
          detailsChanged = user.hasLocalModificationValueExpression().getValue()
                  || user.hasStageChanges();
        }
        return detailsChanged;
      });
    }
    return this.userDetailsChangedValueExpression$ehNa;
  }/*

  private*/ function setStateMessage(state/*:String*/, afterManualChange/*:Boolean*/)/*:void*/ {
    if (state && this.userAdministration$ehNa.hasEdited()) {
      var author/*:User*/ = this.userAdministration$ehNa.getEdited();
      var messageTemplate/*:String*/;
      if (afterManualChange && !author.isRegistrationRequested()) {
        messageTemplate = this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'userdetail_state_message_onchange_' + state.toLowerCase());
      } else {
        messageTemplate = this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'userdetail_state_message_' + state.toLowerCase());
      }
      if (messageTemplate) {
        this.getStateMessageContainer$ehNa().setStatusMessage(Ext.String.format(messageTemplate, com.coremedia.ui.util.EncodingUtil.encodeForHTML(author.getName())));
      }
    }
  }/*

  private*/ function setRegistrationSentMessage()/*:String*/ {
    var author/*:User*/ = this.userAdministration$ehNa.getEdited();
    if (author) {
      this.getResendRegistrationMessageDisplayField$ehNa().setValue(
              Ext.String.format(this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'userdetail_resend_reg_confirmation_mail_message'),
                      com.coremedia.ui.util.EncodingUtil.encodeForHTML(author.getName())));
    }

    return "";
  }/*

  private*/ function resetRegistrationMailSentMessage()/*:void*/ {var this$=this;
    if (this.resendTimer$ehNa) {
      window.clearTimeout(this.resendTimer$ehNa);
    }
    this.getUserRestrictionPanel$ehNa().enableResendRegistrationButton();
    if (this.getResendRegistrationMessageDisplayField$ehNa()) {
      this.getResendRegistrationMessageDisplayField$ehNa().el.hide(true);
    }
    window.setTimeout(function ()/*:void*/ {
      if (this$.getResendRegistrationMessageDisplayField$ehNa()) {
        this$.getResendRegistrationMessageDisplayField$ehNa().hide();
      }
    }, 500);
  }/*

  private*/ function resendRegistrationConfirmationFailed(messages/*:Object*/)/*:void*/ {var this$=this;
    var message/*:String*/ = "";
    var i/*:uint*/ = 1;
    for (var property/*:String*/ in messages) {
      //noinspection JSUnfilteredForInLoop
      message = message + (i++) + ") " + this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', "userdetail_validate_" + messages[property]) + "<br/>";
      //noinspection JSUnfilteredForInLoop
      this.getUserDetailsDataPanel$ehNa().setInvalid(property, this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', "userdetail_validate_" + messages[property]));
    }
    var validationMessageBoxConfig/*:ValidationMessageBox*/ = AS3.cast(com.coremedia.elastic.social.studio.usermanagement.ValidationMessageBox,{});
    AS3.setBindable(validationMessageBoxConfig,"title" , this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'userdetail_validation_window_title'));
    AS3.setBindable(validationMessageBoxConfig,"message" , message);
    AS3.setBindable(validationMessageBoxConfig,"discardCallback" , function ()/*:void*/ {
      this$.cancel(false);
    });
    var messageBox/*:Window*/ = AS3.cast(Ext.window.Window,Ext.ComponentManager.create(validationMessageBoxConfig));
    messageBox.expand(true);
    messageBox.setSize(500, 150);
    messageBox.show();
  }/*

  public*/ function cancel(closeUserDetails/*:Boolean = true*/)/*:void*/ {if(arguments.length<=0)closeUserDetails=true;
    this.userAdministration$ehNa.cancelEditing(this.userAdministration$ehNa.getEdited(), null, this.isModified$ehNa());
    this.resetUserDetailsPanel$ehNa();
    if (closeUserDetails && this.closeUserDetailView$ehNa) {
      this.closeUserDetailView$ehNa();
      this.modifiedDetails$ehNa = false;
      this.modifiedRestrictionChanges$ehNa = false;
    }
  }/*

  private*/ function resetUserDetailsPanel()/*:void*/ {
    var userWindow/*:Window*/ =AS3.as( this.findParentByType("window"),  Ext.window.Window);
    if (userWindow) {
      this.getUserDetailsDataPanel$ehNa().reset();
      this.getUserRestrictionPanel$ehNa().resetPanel();
      this.getStateMessageContainer$ehNa().hide();
      this.getStateMessageContainer$ehNa().setStatusMessage(null);
    }
  }/*

  protected*/ function anonymizeUser()/*:void*/ {var this$=this;
    var title/*:String*/ = mx.resources.ResourceManager.getInstance().getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'userdetail_delete_user_confirmation_title');
    var message/*:String*/ = Ext.String.format(
            mx.resources.ResourceManager.getInstance().getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'userdetail_delete_user_confirmation_message'),
            Ext.util.Format.htmlEncode(this.userAdministration$ehNa.getEdited().getName()));
    var confirmationButtonText/*:String*/ = mx.resources.ResourceManager.getInstance().getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'btn_confirm');
    var callback/*:Function*/ = function (button/*:String*/)/*:void*/ {
      if (button === "ok") {
        var edited/*:User*/ = this$.userAdministration$ehNa.getEdited();
        edited.anonymize(this$.userAdministration$ehNa.getModerationEmail(edited.getDeleteUserMail().getType()),AS3.bind( this$,"anonymized"));
      }
    };
    com.coremedia.cms.editor.sdk.util.MessageBoxUtil.showConfirmation(title, message, confirmationButtonText, callback, false);
  }/*

  //noinspection JSUnusedLocalSymbols
  protected*/ function applyChanges(button/*:Button = null*/, event/*:Event = null*/, closeUserDetails/*:Boolean = true*/, success/*:Function = null*/)/*:void*/ {var this$=this;switch(arguments.length){case 0:button=null;case 1:event=null;case 2:closeUserDetails=true;case 3:success=null;}
    var user/*:User*/ = this.userAdministration$ehNa.getEdited();
    if (user) {
      this.userAdministration$ehNa.applyChanges(
              user,
              function ()/*:void*/ {
                this$.applySucceeded$ehNa(success, closeUserDetails);
              },
              function (messages/*:Array*/)/*:void*/ {
                this$.applyFailed$ehNa(messages, closeUserDetails);
              });
    }
  }/*

  private*/ function applySucceeded(success/*:Function*/, closeUserDetails/*:Boolean*/)/*:void*/ {
    this.getUserDetailsDataPanel$ehNa().reset();
    this.getUserRestrictionPanel$ehNa().resetPanel();
    this.userAdministration$ehNa.applyChanges();
    if (closeUserDetails && this.closeUserDetailView$ehNa) {
      this.closeUserDetailView$ehNa();
    }
    if (success) {
      success();
    }
  }/*

  private*/ function applyFailed(messages/*:Object*/, closeUserDetails/*:Boolean*/)/*:void*/ {var this$=this;
    var message/*:String*/ = "";
    var i/*:uint*/ = 1;
    for (var property/*:String*/ in messages) {
      //noinspection JSUnfilteredForInLoop
      message = message + (i++) + ") " + this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', "userdetail_validate_" + messages[property]) + "<br/>";
      //noinspection JSUnfilteredForInLoop
      this.getUserDetailsDataPanel$ehNa().setInvalid(property, this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', "userdetail_validate_" + messages[property]));
    }
    var validationMessageBoxConfig/*:ValidationMessageBox*/ = AS3.cast(com.coremedia.elastic.social.studio.usermanagement.ValidationMessageBox,{});
    AS3.setBindable(validationMessageBoxConfig,"message" , message);
    AS3.setBindable(validationMessageBoxConfig,"title" , this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'userdetail_validation_window_title'));
    AS3.setBindable(validationMessageBoxConfig,"discardCallback" , function ()/*:void*/ {
      this$.cancel(closeUserDetails);
      this$.modifiedDetails$ehNa = false;
      this$.modifiedRestrictionChanges$ehNa = false;
    });
    var msgBox/*:Window*/ = AS3.cast(Ext.window.Window,Ext.ComponentManager.create(validationMessageBoxConfig));
    msgBox.expand(true);
    msgBox.setSize(460, 150);
    msgBox.show();
  }/*

  internal*/ function setModifiedRestrictions(modifiedValueExpression/*:ValueExpression*/)/*:void*/ {
    this.modifiedRestrictionChanges$ehNa = modifiedValueExpression.getValue();
    this.getApplyButton$ehNa().setDisabled(!this.isModified$ehNa());
  }/*

  internal*/ function setModifiedDetails(modifiedValueExpression/*:ValueExpression*/)/*:void*/ {
    this.modifiedDetails$ehNa = modifiedValueExpression.getValue();
    this.getApplyButton$ehNa().setDisabled(!this.isModified$ehNa());
    this.getApplyButton$ehNa().setText(com.coremedia.elastic.social.studio.model.utils.ElasticUtils.toggleStarMarker(this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'btn_apply'), this.modifiedDetails$ehNa));
  }/*

  private*/ function showMailIndicatorAtApproveButton()/*:void*/ {
    var applyButton/*:Button*/ = this.getApplyButton$ehNa();
    if (applyButton) {
      var user/*:User*/ = this.userAdministration$ehNa.getEdited();
      if (user) {
        applyButton.setText(com.coremedia.elastic.social.studio.model.utils.ElasticUtils.toggleStarMarker(
                this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'btn_apply'), this.modifiedDetails$ehNa || user.isBlocked()));
      }
    }
  }/*

  private*/ function confirmChanges(apply/*:Function*/, discard/*:Function*/)/*:void*/ {
    var confirmationDialog/*:ChangedProfileConfirmationWindow*/ = (AS3.as(Ext.ComponentManager.get(com.coremedia.elastic.social.studio.usermanagement.details.ChangedProfileConfirmationWindowBase.ID),  com.coremedia.elastic.social.studio.usermanagement.details.ChangedProfileConfirmationWindow));
    if (confirmationDialog) {
      confirmationDialog.setApply(apply);
      confirmationDialog.setDiscard(discard);
      confirmationDialog.setVisible(true);
      if (AS3.getBindable(confirmationDialog,"collapsed","DUMMY")) {
        confirmationDialog.expand(true);
      }
    } else {
      var changedProfileConfirmationWindowCfg/*:ChangedProfileConfirmationWindow*/ = AS3.cast(com.coremedia.elastic.social.studio.usermanagement.details.ChangedProfileConfirmationWindow,{});
      AS3.setBindable(changedProfileConfirmationWindowCfg,"moderation" , this.moderation$ehNa);
      confirmationDialog = new com.coremedia.elastic.social.studio.usermanagement.details.ChangedProfileConfirmationWindow(changedProfileConfirmationWindowCfg);
      confirmationDialog.setApply(apply);
      confirmationDialog.setDiscard(discard);
      confirmationDialog.expand(true);
      confirmationDialog.setSize(460, 150);
      confirmationDialog.show();
    }
  }/*

  private*/ function getApplyButton()/*:Button*/ {
    if (!this.applyButton$ehNa) {
      this.applyButton$ehNa =AS3.as( this.queryById(UserDetailsPanelBase.USER_DETAILS_APPROVE_BTN_ITEM_ID),  Ext.button.Button);
    }
    return this.applyButton$ehNa;
  }/*

  private*/ function getUserDetailsDataPanel()/*:UserDetailsDataPanel*/ {
    if (!this.userDetailsDataPanel$ehNa) {
      this.userDetailsDataPanel$ehNa =AS3.as( this.queryById(UserDetailsPanelBase.USER_DETAILS_DATA_ITEM_ID),  com.coremedia.elastic.social.studio.usermanagement.details.UserDetailsDataPanel);
    }

    return this.userDetailsDataPanel$ehNa;
  }/*

  private*/ function getUserRestrictionPanel()/*:UserRestrictionPanel*/ {
    if (!this.userRestrictionPanel$ehNa) {
      this.userRestrictionPanel$ehNa =AS3.as( this.queryById(UserDetailsPanelBase.USER_RESTRICTIONS_ITEM_ID),  com.coremedia.elastic.social.studio.usermanagement.details.UserRestrictionPanel);
    }

    return this.userRestrictionPanel$ehNa;
  }/*

  private*/ function getUserToSearchSwitchPanel()/*:UserToSearchSwitchPanel*/ {
    if (!this.userToSearchSwitchPanel$ehNa) {
      this.userToSearchSwitchPanel$ehNa =AS3.as( this.queryById(UserDetailsPanelBase.SWITCH_ITEM_ID),  com.coremedia.elastic.social.studio.usermanagement.details.UserToSearchSwitchPanel);
    }
    return this.userToSearchSwitchPanel$ehNa;
  }/*


  private*/ function getStateMessageContainer()/*:UserWarningContainer*/ {
    if (!this.stateMessageContainer$ehNa) {
      this.stateMessageContainer$ehNa =AS3.as( this.queryById(UserDetailsPanelBase.STATE_MESSAGES_CONTAINER_ITEM_ID),  com.coremedia.elastic.social.studio.usermanagement.details.UserWarningContainer);
    }

    return this.stateMessageContainer$ehNa;
  }/*

  private*/ function getResendRegistrationMessageDisplayField()/*:DisplayField*/ {
    if (!this.resendRegistrationMessageDisplayField$ehNa) {
      this.resendRegistrationMessageDisplayField$ehNa =AS3.as( this.queryById(UserDetailsPanelBase.RESEND_REGISTRATION_MESSAGE_DISPLAY_FIELD_ITEM_ID),  Ext.form.field.Display);
    }

    return this.resendRegistrationMessageDisplayField$ehNa;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.panel.Panel",
      moderation$ehNa: null,
      userAdministration$ehNa: null,
      modifiedDetails$ehNa: false,
      modifiedRestrictionChanges$ehNa: false,
      userRestrictionPanel$ehNa: null,
      userDetailsDataPanel$ehNa: null,
      userValueExpression$ehNa: null,
      userDetailsChangedValueExpression$ehNa: null,
      userRestrictionModifiedValueExpression$ehNa: null,
      userStateValueExpression$ehNa: null,
      closeUserDetailView$ehNa: null,
      applyButton$ehNa: null,
      userToSearchSwitchPanel$ehNa: null,
      stateMessageContainer$ehNa: null,
      resendRegistrationMessageDisplayField$ehNa: null,
      resendTimer$ehNa: undefined,
      constructor: UserDetailsPanelBase$,
      super$ehNa: function() {
        Ext.panel.Panel.prototype.constructor.apply(this, arguments);
      },
      afterRender: afterRender,
      beforeDestroy: beforeDestroy,
      broadcastActivate$ehNa: broadcastActivate,
      openEmailEditor: openEmailEditor,
      anonymized: anonymized,
      isModified$ehNa: isModified,
      applyChangesIfNeeded: applyChangesIfNeeded,
      resendRegistrationConfirmation: resendRegistrationConfirmation,
      refreshStateMessage$ehNa: refreshStateMessage,
      getDetailsChangedValueExpression$ehNa: getDetailsChangedValueExpression,
      setStateMessage$ehNa: setStateMessage,
      setRegistrationSentMessage$ehNa: setRegistrationSentMessage,
      resetRegistrationMailSentMessage$ehNa: resetRegistrationMailSentMessage,
      resendRegistrationConfirmationFailed$ehNa: resendRegistrationConfirmationFailed,
      cancel: cancel,
      resetUserDetailsPanel$ehNa: resetUserDetailsPanel,
      anonymizeUser: anonymizeUser,
      applyChanges: applyChanges,
      applySucceeded$ehNa: applySucceeded,
      applyFailed$ehNa: applyFailed,
      setModifiedRestrictions: setModifiedRestrictions,
      setModifiedDetails: setModifiedDetails,
      showMailIndicatorAtApproveButton$ehNa: showMailIndicatorAtApproveButton,
      confirmChanges$ehNa: confirmChanges,
      getApplyButton$ehNa: getApplyButton,
      getUserDetailsDataPanel$ehNa: getUserDetailsDataPanel,
      getUserRestrictionPanel$ehNa: getUserRestrictionPanel,
      getUserToSearchSwitchPanel$ehNa: getUserToSearchSwitchPanel,
      getStateMessageContainer$ehNa: getStateMessageContainer,
      getResendRegistrationMessageDisplayField$ehNa: getResendRegistrationMessageDisplayField,
      statics: {
        USER_DETAILS_DATA_ITEM_ID: "cm-elastic-social-user-details-data-panel",
        DELETE_BUTTON_ITEM_ID: "deleteButton",
        OPEN_EMAIL_WINDOW_BUTTON_ITEM_ID: "openEmailWindowButton",
        STATE_MESSAGES_CONTAINER_ITEM_ID: "stateMessagesContainer",
        SWITCH_ITEM_ID: "switchPanel",
        USER_META_DATA_ITEM_ID: "cm-elastic-social-user-meta-data-panel",
        USER_RESTRICTIONS_ITEM_ID: "cm-elastic-social-user-restrictions-panel",
        USER_DETAILS_APPROVE_BTN_ITEM_ID: "applyButton",
        RESEND_REGISTRATION_MESSAGE_DISPLAY_FIELD_ITEM_ID: "resendRegistrationMessageDisplayField"
      },
      requires: [
        "Ext",
        "Ext.ComponentManager",
        "Ext.String",
        "Ext.button.Button",
        "Ext.form.field.Display",
        "Ext.panel.Panel",
        "Ext.util.Format",
        "Ext.window.Window",
        "com.coremedia.cms.editor.sdk.util.MessageBoxUtil",
        "com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin_properties",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.util.EncodingUtil",
        "mx.resources.ResourceManager"
      ],
      uses: [
        "com.coremedia.elastic.social.studio.email.EMailWindow",
        "com.coremedia.elastic.social.studio.model.User",
        "com.coremedia.elastic.social.studio.model.UserAdministrationPropertyNames",
        "com.coremedia.elastic.social.studio.model.UserPropertyNames",
        "com.coremedia.elastic.social.studio.model.utils.ElasticUtils",
        "com.coremedia.elastic.social.studio.usermanagement.ValidationMessageBox",
        "com.coremedia.elastic.social.studio.usermanagement.details.ChangedProfileConfirmationWindow",
        "com.coremedia.elastic.social.studio.usermanagement.details.ChangedProfileConfirmationWindowBase",
        "com.coremedia.elastic.social.studio.usermanagement.details.UserDetailsDataPanel",
        "com.coremedia.elastic.social.studio.usermanagement.details.UserRestrictionPanel",
        "com.coremedia.elastic.social.studio.usermanagement.details.UserToSearchSwitchPanel",
        "com.coremedia.elastic.social.studio.usermanagement.details.UserWarningContainer"
      ]
    };
});
