Ext.define("com.coremedia.elastic.social.studio.email.EMailWindowBase", function(EMailWindowBase) {/*package com.coremedia.elastic.social.studio.email {

import com.coremedia.cms.editor.sdk.components.StudioDialog;
import com.coremedia.elastic.social.studio.model.ModerationEmail;
import com.coremedia.elastic.social.studio.model.ModerationEmailProvider;
import com.coremedia.elastic.social.studio.model.UserAdministrationPropertyNames;
import com.coremedia.elastic.social.studio.model.impl.ModerationEmailImpl;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;

import ext.Ext;
import ext.button.Button;
import ext.data.AbstractStore;
import ext.data.Store;
import ext.form.field.ComboBox;

import mx.resources.ResourceManager;

[ResourceBundle('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin')]
public class EMailWindowBase extends StudioDialog {
  public static const EMAIL_WINDOW_ID:String = "cm-elastic-social-email-window";
  public static const SELECT_EMAIL_COMBO_ID:String = "cm-elastic-social-email-window-mail-selector";
  public static const TEXT_AREA_ID:String = "cm-elastic-social-email-window-text-area";
  public static const APPLY_BUTTON_ID:String = "cm-elastic-social-email-window-apply-button";
  public static const CANCEL_BUTTON_ID:String = "cm-elastic-social-email-window-cancel-button";

  private var selectedEmailTypeValueExpression:ValueExpression;
  private var editedEmailValueExpression:ValueExpression;
  private var emailTypeCombo:ComboBox;
  private var emails:Array;
  private var currentEmail:ModerationEmail;
  private var modified:Boolean;
  private var applyButton:Button;

  [Bindable]
  public var emailProvider:ModerationEmailProvider;

  public*/ function EMailWindowBase$(config/*:EMailWindow = null*/) {if(arguments.length<=0)config=null;
    this.super$_zu5(config);
    this.emails$_zu5 = cloneArray$static(AS3.getBindable(this,"emailProvider").getModerationEmails());
    this.fireEvent(com.coremedia.elastic.social.studio.model.UserAdministrationPropertyNames.MODERATION_EMAILS);
    this.modified$_zu5 = false;
    this.getApplyButton$_zu5().setDisabled(!this.modified$_zu5);
  }/*

  override protected*/ function afterRender()/*:void*/ {
    this.getSelectedEmailTypeValueExpression().setValue(undefined);
    this.getSelectedEmailTypeValueExpression().addChangeListener(AS3.bind(this,"startEditing"));

    com.coremedia.cms.editor.sdk.components.StudioDialog.prototype.afterRender.call(this);
    this.initEmailTypeCombo$_zu5();
  }/*

  override protected*/ function beforeDestroy()/*:void*/ {
    this.getSelectedEmailTypeValueExpression().removeChangeListener(AS3.bind(this,"startEditing"));
    com.coremedia.cms.editor.sdk.components.StudioDialog.prototype.beforeDestroy.call(this);
  }/*

  protected*/ function apply()/*:void*/ {
    var store/*:AbstractStore*/ = this.getEmailTypeCombo$_zu5().getStore();

    var newEmails/*:Array*/ = [];
    (AS3.as(store,  Ext.data.Store)).each(function (record/*:Object*/)/*:void*/ {
      newEmails.push(AS3.as(record.getBean(),  com.coremedia.elastic.social.studio.model.ModerationEmail));
    });

    AS3.getBindable(this,"emailProvider").setModerationEmails(newEmails);
    this.close();
  }/*

  protected*/ function setModified(value/*:**/)/*:**/ {
    if (!this.modified$_zu5) {
      this.modified$_zu5 = true;
      this.getApplyButton$_zu5().setDisabled(!this.modified$_zu5);
    }

    return value;
  }/*

  private*/ function getApplyButton()/*:Button*/ {
    if (!this.applyButton$_zu5) {
      this.applyButton$_zu5 =AS3.as( Ext.getCmp(EMailWindowBase.APPLY_BUTTON_ID),  Ext.button.Button);
    }
    return this.applyButton$_zu5;
  }/*

  protected*/ function cancel()/*:void*/ {
    this.close();
  }/*

  // is used by valueexpressions
  //noinspection JSUnusedGlobalSymbols
  public*/ function getCurrentEmail()/*:ModerationEmail*/ {
    return this.currentEmail$_zu5;
  }/*

  // is used by by valueexpressions
  //noinspection JSUnusedGlobalSymbols
  public*/ function setCurrentEmail(email/*:ModerationEmail*/)/*:void*/ {
    var oldEmail/*:ModerationEmail*/ = this.currentEmail$_zu5;
    this.currentEmail$_zu5 = email;
    this.fireEvent("currentEmail", oldEmail, email);
  }/*

  // is used by valueexpressions
  //noinspection JSUnusedGlobalSymbols
  public*/ function getModerationEmails()/*:Array*/ {
    return this.emails$_zu5;
  }/*

  protected static*/ function convertMailType$static(typeKey/*:String*/)/*:String*/ {
    return mx.resources.ResourceManager.getInstance().getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', "email_window_type_" + typeKey);
  }/*

  protected*/ function startEditing(emailTypeValueExpression/*:ValueExpression*/)/*:void*/ {
    var newEmail/*:ModerationEmail*/;

    var emailType/*:String*/ = emailTypeValueExpression.getValue();
    if (emailType) {
      var store/*:AbstractStore*/ = this.getEmailTypeCombo$_zu5().getStore();
      var emailData/*:Object*/ = store.getAt(store.find("type", emailType));
      if (emailData) {
        newEmail =AS3.as( emailData.getBean(),  com.coremedia.elastic.social.studio.model.ModerationEmail);
      }
    }

    this.getEditedEmailValueExpression().setValue(newEmail);
  }/*

  private*/ function initEmailTypeCombo()/*:void*/ {
    var emailTypeCombo/*:ComboBox*/ = this.getEmailTypeCombo$_zu5();
    if (emailTypeCombo) {
      var emailRecord/*:Object*/ = emailTypeCombo.getStore().getAt(0);
      var email/*:Object*/ =AS3.as( emailRecord.getBean(),  com.coremedia.elastic.social.studio.model.ModerationEmail);
      emailTypeCombo.setValue(email.getType());
      this.getSelectedEmailTypeValueExpression().setValue(email.getType());
    }
  }/*

  private*/ function getEmailTypeCombo()/*:ComboBox*/ {
    if (!this.emailTypeCombo$_zu5) {
      this.emailTypeCombo$_zu5 =AS3.as( Ext.getCmp(EMailWindowBase.SELECT_EMAIL_COMBO_ID),  Ext.form.field.ComboBox);
    }

    return this.emailTypeCombo$_zu5;
  }/*

  private static*/ function cloneArray$static(source/*:Array*/)/*:Array*/ {
    var clonedArray/*:Array*/ = null;

    if (source) {
      clonedArray = [];
      var i/*:int*/;
      for (i = 0; i < source.length; i++) {
        var sourceEmail/*:ModerationEmail*/ =AS3.as( source[i],  com.coremedia.elastic.social.studio.model.ModerationEmail);
        clonedArray.push(new com.coremedia.elastic.social.studio.model.impl.ModerationEmailImpl(sourceEmail.getType(), sourceEmail.getText()));
      }
    }

    return clonedArray;
  }/*

  protected*/ function getSelectedEmailTypeValueExpression()/*:ValueExpression*/ {
    if (!this.selectedEmailTypeValueExpression$_zu5) {
      this.selectedEmailTypeValueExpression$_zu5 = com.coremedia.ui.data.ValueExpressionFactory.create("selectedEMailType");
    }

    return this.selectedEmailTypeValueExpression$_zu5;
  }/*

  protected*/ function getEditedEmailValueExpression()/*:ValueExpression*/ {
    if (!this.editedEmailValueExpression$_zu5) {
      this.editedEmailValueExpression$_zu5 = com.coremedia.ui.data.ValueExpressionFactory.create("currentEmail", this);
    }

    return this.editedEmailValueExpression$_zu5;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.components.StudioDialog",
      selectedEmailTypeValueExpression$_zu5: null,
      editedEmailValueExpression$_zu5: null,
      emailTypeCombo$_zu5: null,
      emails$_zu5: null,
      currentEmail$_zu5: null,
      modified$_zu5: false,
      applyButton$_zu5: null,
      constructor: EMailWindowBase$,
      super$_zu5: function() {
        com.coremedia.cms.editor.sdk.components.StudioDialog.prototype.constructor.apply(this, arguments);
      },
      afterRender: afterRender,
      beforeDestroy: beforeDestroy,
      apply: apply,
      setModified: setModified,
      getApplyButton$_zu5: getApplyButton,
      cancel: cancel,
      getCurrentEmail: getCurrentEmail,
      setCurrentEmail: setCurrentEmail,
      getModerationEmails: getModerationEmails,
      startEditing: startEditing,
      initEmailTypeCombo$_zu5: initEmailTypeCombo,
      getEmailTypeCombo$_zu5: getEmailTypeCombo,
      getSelectedEmailTypeValueExpression: getSelectedEmailTypeValueExpression,
      getEditedEmailValueExpression: getEditedEmailValueExpression,
      config: {emailProvider: null},
      statics: {
        EMAIL_WINDOW_ID: "cm-elastic-social-email-window",
        SELECT_EMAIL_COMBO_ID: "cm-elastic-social-email-window-mail-selector",
        TEXT_AREA_ID: "cm-elastic-social-email-window-text-area",
        APPLY_BUTTON_ID: "cm-elastic-social-email-window-apply-button",
        CANCEL_BUTTON_ID: "cm-elastic-social-email-window-cancel-button",
        convertMailType: convertMailType$static
      },
      requires: [
        "Ext",
        "Ext.button.Button",
        "Ext.data.Store",
        "Ext.form.field.ComboBox",
        "com.coremedia.cms.editor.sdk.components.StudioDialog",
        "com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin_properties",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "mx.resources.ResourceManager"
      ],
      uses: [
        "com.coremedia.elastic.social.studio.model.ModerationEmail",
        "com.coremedia.elastic.social.studio.model.UserAdministrationPropertyNames",
        "com.coremedia.elastic.social.studio.model.impl.ModerationEmailImpl"
      ]
    };
});
