Ext.define("com.coremedia.elastic.social.studio.usermanagement.details.UserRestrictionPanelBase", function(UserRestrictionPanelBase) {/*package com.coremedia.elastic.social.studio.usermanagement.details {

import com.coremedia.elastic.social.studio.model.User;
import com.coremedia.elastic.social.studio.model.UserAdministration;
import com.coremedia.elastic.social.studio.model.UserAdministrationPropertyNames;
import com.coremedia.elastic.social.studio.model.UserPropertyNames;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;

import ext.button.Button;
import ext.form.RadioGroup;
import ext.panel.Panel;

public class UserRestrictionPanelBase extends Panel {
  protected static const RESEND_REGISTRATION_MAIL_BUTTON_ITEM_ID:String = "resendRegistration";
  protected static const USER_STATE_RADIO_GROUP_ITEM_ID:String = "userStates";

  protected static const RADIO_STATE_IGNORED:String = "IGNORED";
  protected static const RADIO_STATE_BLOCKED:String = "BLOCKED";
  protected static const RADIO_STATE_ACTIVATED:String = "ACTIVATED";
  protected static const RADIO_STATE_MODERATION_REQUIRED:String = "MODERATION_REQUIRED";
  protected static const RADIO_STATE_ACTIVATED_MODERATION_REQUIRED:String = "ACTIVATED_MODERATION_REQUIRED";
  protected static const RADIO_STATE_ANONYMIZED:String = "ANONYMIZED";

  private var editedUserStateValueExpression:ValueExpression;
  private var userValueExpression:ValueExpression;
  private var resendRegistrationButton:Button;
  private var stateRadioGroup:RadioGroup;
  private var modified:Boolean = false;
  private var lastModerationState:String = undefined;

  [Bindable]
  public var userAdministration:UserAdministration;
  // start of config properties
  internal native function get cancel():Function;

  public*/ function UserRestrictionPanelBase$(config/*:UserRestrictionPanel = null*/) {if(arguments.length<=0)config=null;
    this.editedUserStateValueExpression$xRyQ = this.getEditedUserValueExpression(AS3.getBindable(config,"userAdministration")).extendBy(com.coremedia.elastic.social.studio.model.UserPropertyNames.STATE);
    this.lastModerationState$xRyQ = this.editedUserStateValueExpression$xRyQ.getValue();
    this.userValueExpression$xRyQ.addChangeListener(AS3.bind(this,"resetPanel"));
    this.editedUserStateValueExpression$xRyQ.addChangeListener(AS3.bind(this,"toggleResendButtonRadioGroup$xRyQ"));
    this.editedUserStateValueExpression$xRyQ.addChangeListener(AS3.bind(this,"notifyModification$xRyQ"));
    this.super$xRyQ(config);
  }/*

  override protected*/ function beforeDestroy()/*:void*/ {
    this.editedUserStateValueExpression$xRyQ.removeChangeListener(AS3.bind(this,"toggleResendButtonRadioGroup$xRyQ"));
    this.editedUserStateValueExpression$xRyQ.removeChangeListener(AS3.bind(this,"notifyModification$xRyQ"));
    this.userValueExpression$xRyQ.removeChangeListener(AS3.bind(this,"resetPanel"));
    this.modified$xRyQ = false;
    Ext.panel.Panel.prototype.beforeDestroy.call(this);
  }/*

  public*/ function resetPanel()/*:void*/ {
    this.getStateRadioGroup$xRyQ().setValue(null);
    this.modified$xRyQ = false;
    this.fireEvent("modified", true, false);
    this.lastModerationState$xRyQ = null;
  }/*

  /**
   * Notify modification when original state has changed
   * /
  private*/ function notifyModification()/*:void*/ {
    var state/*:String*/ = this.editedUserStateValueExpression$xRyQ.getValue();
    if(!state) {
      this.lastModerationState$xRyQ = undefined;
    }
    else if(state && !this.lastModerationState$xRyQ) {
      this.lastModerationState$xRyQ = state;
    }
    else if(state && this.lastModerationState$xRyQ && !this.matchingStates$xRyQ(state, this.lastModerationState$xRyQ)) {
      this.setModified();
      this.lastModerationState$xRyQ = state;
    }
  }/*

  //noinspection JSUnusedGlobalSymbols
  /**
   * This function shall mark the panel as modified if the selected radio button represents a
   * different state than the users current state.
   * /
  protected*/ function setModified()/*:void*/ {
    this.modified$xRyQ = true;
    this.fireEvent("modified", false, true);
  }/*

  //noinspection JSUnusedGlobalSymbols
  public*/ function isModified()/*:Boolean*/ {
    return this.modified$xRyQ;
  }/*

  /**
   * Show "Resend registration" Button and disable radio group if registration is requested.
   * /
  private*/ function toggleResendButtonRadioGroup()/*:void*/ {
    var editedUser/*:User*/ = AS3.getBindable(this,"userAdministration").getEdited();
    if (editedUser && editedUser.isRegistrationRequested()) {
      this.getResendRegistrationButton$xRyQ().setVisible(true);
      this.getStateRadioGroup$xRyQ().disable();
    } else {
      this.getResendRegistrationButton$xRyQ().setVisible(false);
      this.getStateRadioGroup$xRyQ().enable();
    }
  }/*

  public*/ function disableResendRegistrationButton()/*:void*/ {
    this.getResendRegistrationButton$xRyQ().setDisabled(true);
  }/*

  public*/ function enableResendRegistrationButton()/*:void*/ {
    this.getResendRegistrationButton$xRyQ().setDisabled(false);
  }/*

  protected*/ function getEditedUserValueExpression(userAdministration/*:UserAdministration*/)/*:ValueExpression*/ {
    if (!this.userValueExpression$xRyQ) {
      this.userValueExpression$xRyQ = com.coremedia.ui.data.ValueExpressionFactory.create(com.coremedia.elastic.social.studio.model.UserAdministrationPropertyNames.EDITED, userAdministration);
    }

    return this.userValueExpression$xRyQ;
  }/*

  private*/ function getResendRegistrationButton()/*:Button*/ {
    if (!this.resendRegistrationButton$xRyQ) {
      this.resendRegistrationButton$xRyQ =AS3.as( this.queryById(UserRestrictionPanelBase.RESEND_REGISTRATION_MAIL_BUTTON_ITEM_ID),  Ext.button.Button);
    }

    return this.resendRegistrationButton$xRyQ;
  }/*

  private*/ function getStateRadioGroup()/*:RadioGroup*/ {
    if (!this.stateRadioGroup$xRyQ) {
      this.stateRadioGroup$xRyQ =AS3.as( this.queryById(UserRestrictionPanelBase.USER_STATE_RADIO_GROUP_ITEM_ID),  Ext.form.RadioGroup);
    }

    return this.stateRadioGroup$xRyQ;
  }/*

  /**
   * This deals with the situation that we map 2x different states to one radio button
   * /
  private*/ function matchingStates(state1/*:String*/, state2/*:String*/)/*:Boolean*/ {
    if(state1 === UserRestrictionPanelBase.RADIO_STATE_ACTIVATED_MODERATION_REQUIRED) {
      state1 = UserRestrictionPanelBase.RADIO_STATE_MODERATION_REQUIRED;
    }
    if(state2 === UserRestrictionPanelBase.RADIO_STATE_ACTIVATED_MODERATION_REQUIRED) {
      state2 = UserRestrictionPanelBase.RADIO_STATE_MODERATION_REQUIRED;
    }
    return state1 === state2;
  }/*

  //--------------- Radio Group ----------------------------------

  protected*/ function toExpressionValue(item/*:Object*/)/*:**/ {
    return item[UserRestrictionPanelBase.USER_STATE_RADIO_GROUP_ITEM_ID];
  }/*

  protected*/ function toInputValue(value/*:**/)/*:Object*/ {
    var result/*:String*/ = null;

    if(!value || value === UserRestrictionPanelBase.RADIO_STATE_ACTIVATED_MODERATION_REQUIRED) {
      value = UserRestrictionPanelBase.RADIO_STATE_MODERATION_REQUIRED;
    }

    result = value;
    return makeObject$static(UserRestrictionPanelBase.USER_STATE_RADIO_GROUP_ITEM_ID, result);
  }/*

  private static*/ function makeObject$static(key/*:String*/, value/*:String*/)/*:Object*/ {
    var o/*:Object*/ = {};
    o[key] = value;
    return o;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.panel.Panel",
      editedUserStateValueExpression$xRyQ: null,
      userValueExpression$xRyQ: null,
      resendRegistrationButton$xRyQ: null,
      stateRadioGroup$xRyQ: null,
      modified$xRyQ: false,
      lastModerationState$xRyQ: undefined,
      constructor: UserRestrictionPanelBase$,
      super$xRyQ: function() {
        Ext.panel.Panel.prototype.constructor.apply(this, arguments);
      },
      beforeDestroy: beforeDestroy,
      resetPanel: resetPanel,
      notifyModification$xRyQ: notifyModification,
      setModified: setModified,
      isModified: isModified,
      toggleResendButtonRadioGroup$xRyQ: toggleResendButtonRadioGroup,
      disableResendRegistrationButton: disableResendRegistrationButton,
      enableResendRegistrationButton: enableResendRegistrationButton,
      getEditedUserValueExpression: getEditedUserValueExpression,
      getResendRegistrationButton$xRyQ: getResendRegistrationButton,
      getStateRadioGroup$xRyQ: getStateRadioGroup,
      matchingStates$xRyQ: matchingStates,
      toExpressionValue: toExpressionValue,
      toInputValue: toInputValue,
      config: {userAdministration: null},
      statics: {
        RESEND_REGISTRATION_MAIL_BUTTON_ITEM_ID: "resendRegistration",
        USER_STATE_RADIO_GROUP_ITEM_ID: "userStates",
        RADIO_STATE_IGNORED: "IGNORED",
        RADIO_STATE_BLOCKED: "BLOCKED",
        RADIO_STATE_ACTIVATED: "ACTIVATED",
        RADIO_STATE_MODERATION_REQUIRED: "MODERATION_REQUIRED",
        RADIO_STATE_ACTIVATED_MODERATION_REQUIRED: "ACTIVATED_MODERATION_REQUIRED",
        RADIO_STATE_ANONYMIZED: "ANONYMIZED"
      },
      requires: [
        "Ext.button.Button",
        "Ext.form.RadioGroup",
        "Ext.panel.Panel",
        "com.coremedia.ui.data.ValueExpressionFactory"
      ],
      uses: [
        "com.coremedia.elastic.social.studio.model.UserAdministrationPropertyNames",
        "com.coremedia.elastic.social.studio.model.UserPropertyNames"
      ]
    };
});
