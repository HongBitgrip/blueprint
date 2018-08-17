Ext.define("com.coremedia.elastic.social.studio.moderation.shared.details.user.UserProfileDetailsViewBase", function(UserProfileDetailsViewBase) {/*package com.coremedia.elastic.social.studio.moderation.shared.details.user {

import com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames;
import com.coremedia.elastic.social.studio.model.Moderation;
import com.coremedia.elastic.social.studio.model.ModerationPropertyNames;
import com.coremedia.elastic.social.studio.model.User;
import com.coremedia.elastic.social.studio.model.UserPropertyNames;
import com.coremedia.elastic.social.studio.model.impl.ModerationContributionAdministration;
import com.coremedia.elastic.social.studio.model.utils.ValueExpressionUtil;
import com.coremedia.ui.components.ImageComponent;
import com.coremedia.ui.data.RemoteBean;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;

import ext.Ext;
import ext.button.Button;
import ext.container.Container;
import ext.form.field.TextField;
import ext.panel.Panel;

[ResourceBundle('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin')]
public class UserProfileDetailsViewBase extends Panel {
  public static const NAME_FIELD_ITEM_ID:String = "cm-elastic-social-moderation-tab-userdetails-name";
  public static const GIVEN_NAME_FIELD_ITEM_ID:String = "cm-elastic-social-moderation-tab-userdetails-givenname";
  public static const SURNAME_FIELD_ITEM_ID:String = "cm-elastic-social-moderation-tab-userdetails-surname";
  public static const EMAIL_FIELD_ITEM_ID:String = "cm-elastic-social-moderation-tab-userdetails-email";
  public static const DETAILS_FORM_ITEM_ID:String = "details-form";
  public static const MODIFIED_EVENT:String = "modified_user";
  protected static const DELETE_USER_IMAGE_BUTTON_ITEM_ID:String = "cm-elastic-social-user-toolbar-delete-user-image-button-id";

  protected static const IMAGE_ID:String = "image";
  protected static const NO_IMAGE_ID:String = "no-image";


  [Bindable]
  public var moderation:Moderation;

  private var moderationContributionAdministration:ModerationContributionAdministration;
  private var userValueExpression:ValueExpression;
  private var nameField:TextField;
  private var emailField:TextField;
  private var givenNameField:TextField;
  private var surNameField:TextField;
  private var detailsForm:Container;
  private var modified:Boolean;
  private var deleteUserImageButton:Button;
  private var userImageValueExpression:ValueExpression;

  public*/ function UserProfileDetailsViewBase$(config/*:UserProfileDetailsView = null*/) {if(arguments.length<=0)config=null;
    // moderation = config.moderation;
    this.moderationContributionAdministration$676g =AS3.as( AS3.getBindable(config,"moderation").getModerationContributionAdministration(),  com.coremedia.elastic.social.studio.model.impl.ModerationContributionAdministration);
    this.userValueExpression$676g = com.coremedia.ui.data.ValueExpressionFactory.create(com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames.DISPLAYED, this.moderationContributionAdministration$676g);
    this.userValueExpression$676g.addChangeListener(AS3.bind(this,"resetModified$676g"));

    this.super$676g(config);
  }/*

  override protected*/ function afterRender()/*:void*/ {
    Ext.panel.Panel.prototype.afterRender.call(this);
    this.userValueExpression$676g.addChangeListener(AS3.bind(this,"resetModified$676g"));
  }/*

  override protected*/ function onDestroy()/*:void*/ {
    Ext.panel.Panel.prototype.onDestroy.call(this);
    this.userValueExpression$676g.removeChangeListener(AS3.bind(this,"resetModified$676g"));
  }/*

  public*/ function setInvalid(propertyName/*:String*/, message/*:String*/)/*:void*/ {
    if (propertyName === com.coremedia.elastic.social.studio.model.UserPropertyNames.NAME) {
      this.getNameField().markInvalid(message);
    } else if (propertyName === com.coremedia.elastic.social.studio.model.UserPropertyNames.EMAIL) {
      this.getEmailField().markInvalid(message);
    }
  }/*

  public*/ function reset()/*:void*/ {
    this.getNameField().clearInvalid();
    this.getEmailField().clearInvalid();
  }/*

  protected*/ function getBlobUri(blob/*:RemoteBean*/)/*:String*/ {
    var blobUri/*:String*/ = Ext.BLANK_IMAGE_URL;

    var image/*:ImageComponent*/ =AS3.as( this.queryById(UserProfileDetailsViewBase.IMAGE_ID),  com.coremedia.ui.components.ImageComponent);
    var noImage/*:Container*/ =AS3.as( this.queryById(UserProfileDetailsViewBase.NO_IMAGE_ID),  Ext.container.Container);
    if (blob) {
      blobUri = blob.getUri();
      noImage.hide();
      image.show();
    } else {
      image.hide();
      noImage.show();
    }
    return blobUri;
  }/*

  protected*/ function trimMail(value/*:String*/)/*:String*/ {
    return AS3.getBindable(this,"moderation").getUserAdministration().trimMail(value);
  }/*

  protected*/ function focused()/*:void*/ {
    this.moderationContributionAdministration$676g.pausePolling();
  }/*

  protected*/ function blurred()/*:void*/ {
    var user/*:User*/ =AS3.as( this.moderationContributionAdministration$676g.getDisplayed(),  com.coremedia.elastic.social.studio.model.User);
    user.setName(this.getNameField().getValue());
    user.setGivenName(this.getGivenNameField$676g().getValue());
    user.setSurName(this.getSurNameField$676g().getValue());
    user.setEmailAddress(this.getEmailField().getValue());
    user.flush(AS3.bind(this.moderationContributionAdministration$676g,"startPolling"));
  }/*

  /**
   * Yes, this is realy, really ugly. But because right now we cannot configure
   * the bindpropertyplugin to be bidirectional and, at the same time, telling
   * us, if the component has changed, we are using the reverse transformer
   * for tracking the modified flag to reduce the lines of code.
   * /
  protected*/ function setModified(value/*:**/)/*:**/ {
    if (!this.modified$676g) {
      this.modified$676g = true;
      this.fireEvent(UserProfileDetailsViewBase.MODIFIED_EVENT, false, true);
    }

    return value;
  }/*

  private*/ function resetModified()/*:void*/ {
    if (this.modified$676g) {
      this.modified$676g = false;
      this.fireEvent(UserProfileDetailsViewBase.MODIFIED_EVENT, true, false);
    }
  }/*

  public*/ function getNameField()/*:TextField*/ {
    if (!this.nameField$676g) {
      this.nameField$676g =AS3.as( this.getDetailsForm$676g().queryById(UserProfileDetailsViewBase.NAME_FIELD_ITEM_ID),  Ext.form.field.Text);
    }

    return this.nameField$676g;
  }/*

  public*/ function getEmailField()/*:TextField*/ {
    if (!this.emailField$676g) {
      this.emailField$676g =AS3.as( this.getDetailsForm$676g().queryById(UserProfileDetailsViewBase.EMAIL_FIELD_ITEM_ID),  Ext.form.field.Text);
    }

    return this.emailField$676g;
  }/*

  private*/ function getDetailsForm()/*:Container*/ {
    if (!this.detailsForm$676g) {
      this.detailsForm$676g =AS3.as( this.queryById(UserProfileDetailsViewBase.DETAILS_FORM_ITEM_ID),  Ext.container.Container);
    }

    return this.detailsForm$676g;
  }/*

  private*/ function getGivenNameField()/*:TextField*/ {
    if (!this.givenNameField$676g) {
      this.givenNameField$676g =AS3.as( this.getDetailsForm$676g().queryById(UserProfileDetailsViewBase.GIVEN_NAME_FIELD_ITEM_ID),  Ext.form.field.Text);
    }

    return this.givenNameField$676g;
  }/*

  private*/ function getSurNameField()/*:TextField*/ {
    if (!this.surNameField$676g) {
      this.surNameField$676g =AS3.as( this.getDetailsForm$676g().queryById(UserProfileDetailsViewBase.SURNAME_FIELD_ITEM_ID),  Ext.form.field.Text);
    }

    return this.surNameField$676g;
  }/*

  private*/ function getDeleteUserImageButton()/*:Button*/ {
    if (!this.deleteUserImageButton$676g) {
      this.deleteUserImageButton$676g =AS3.as( this.queryById(UserProfileDetailsViewBase.DELETE_USER_IMAGE_BUTTON_ITEM_ID),  Ext.button.Button);
    }

    return this.deleteUserImageButton$676g;
  }/*

  public*/ function enableDeleteUserImageButton()/*:void*/ {
    this.getDeleteUserImageButton$676g().enable();
  }/*

  public*/ function disableDeleteUserImageButton()/*:void*/ {
    this.getDeleteUserImageButton$676g().disable();
  }/*

  protected*/ function getUserImageValueExpressionPath(moderation/*:Moderation*/)/*:ValueExpression*/ {
    if (!this.userImageValueExpression$676g) {
      this.userImageValueExpression$676g = com.coremedia.ui.data.ValueExpressionFactory.create(
              com.coremedia.elastic.social.studio.model.utils.ValueExpressionUtil.createPath([
                com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames.DISPLAYED,
                com.coremedia.elastic.social.studio.model.UserPropertyNames.IMAGE]), moderation.getModerationContributionAdministration());
    }

    return this.userImageValueExpression$676g;
  }/*

  protected static*/ function getUserValueExpressionFor$static(moderation/*:Moderation*/, property/*:String*/)/*:ValueExpression*/ {
    var ve/*:ValueExpression*/ = com.coremedia.ui.data.ValueExpressionFactory.create(com.coremedia.elastic.social.studio.model.utils.ValueExpressionUtil.createPath([com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames.DISPLAYED,
      property]), moderation.getModerationContributionAdministration());

    return ve;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.panel.Panel",
      moderationContributionAdministration$676g: null,
      userValueExpression$676g: null,
      nameField$676g: null,
      emailField$676g: null,
      givenNameField$676g: null,
      surNameField$676g: null,
      detailsForm$676g: null,
      modified$676g: false,
      deleteUserImageButton$676g: null,
      userImageValueExpression$676g: null,
      constructor: UserProfileDetailsViewBase$,
      super$676g: function() {
        Ext.panel.Panel.prototype.constructor.apply(this, arguments);
      },
      afterRender: afterRender,
      onDestroy: onDestroy,
      setInvalid: setInvalid,
      reset: reset,
      getBlobUri: getBlobUri,
      trimMail: trimMail,
      focused: focused,
      blurred: blurred,
      setModified: setModified,
      resetModified$676g: resetModified,
      getNameField: getNameField,
      getEmailField: getEmailField,
      getDetailsForm$676g: getDetailsForm,
      getGivenNameField$676g: getGivenNameField,
      getSurNameField$676g: getSurNameField,
      getDeleteUserImageButton$676g: getDeleteUserImageButton,
      enableDeleteUserImageButton: enableDeleteUserImageButton,
      disableDeleteUserImageButton: disableDeleteUserImageButton,
      getUserImageValueExpressionPath: getUserImageValueExpressionPath,
      config: {moderation: null},
      statics: {
        NAME_FIELD_ITEM_ID: "cm-elastic-social-moderation-tab-userdetails-name",
        GIVEN_NAME_FIELD_ITEM_ID: "cm-elastic-social-moderation-tab-userdetails-givenname",
        SURNAME_FIELD_ITEM_ID: "cm-elastic-social-moderation-tab-userdetails-surname",
        EMAIL_FIELD_ITEM_ID: "cm-elastic-social-moderation-tab-userdetails-email",
        DETAILS_FORM_ITEM_ID: "details-form",
        MODIFIED_EVENT: "modified_user",
        DELETE_USER_IMAGE_BUTTON_ITEM_ID: "cm-elastic-social-user-toolbar-delete-user-image-button-id",
        IMAGE_ID: "image",
        NO_IMAGE_ID: "no-image",
        getUserValueExpressionFor: getUserValueExpressionFor$static
      },
      requires: [
        "Ext",
        "Ext.button.Button",
        "Ext.container.Container",
        "Ext.form.field.Text",
        "Ext.panel.Panel",
        "com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin_properties",
        "com.coremedia.ui.components.ImageComponent",
        "com.coremedia.ui.data.ValueExpressionFactory"
      ],
      uses: [
        "com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames",
        "com.coremedia.elastic.social.studio.model.User",
        "com.coremedia.elastic.social.studio.model.UserPropertyNames",
        "com.coremedia.elastic.social.studio.model.impl.ModerationContributionAdministration",
        "com.coremedia.elastic.social.studio.model.utils.ValueExpressionUtil"
      ]
    };
});
