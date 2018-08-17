Ext.define("com.coremedia.elastic.social.studio.usermanagement.details.UserDetailsDataPanelBase", function(UserDetailsDataPanelBase) {/*package com.coremedia.elastic.social.studio.usermanagement.details {

import com.coremedia.elastic.social.studio.model.Moderation;
import com.coremedia.elastic.social.studio.model.User;
import com.coremedia.elastic.social.studio.model.UserAdministration;
import com.coremedia.elastic.social.studio.model.UserAdministrationPropertyNames;
import com.coremedia.elastic.social.studio.model.UserPropertyNames;
import com.coremedia.elastic.social.studio.model.utils.ValueExpressionUtil;
import com.coremedia.ui.components.ImageComponent;
import com.coremedia.ui.data.RemoteBean;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;

import ext.Ext;
import ext.form.field.TextField;
import ext.panel.Panel;

[ResourceBundle('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin')]
public class UserDetailsDataPanelBase extends Panel {
  protected static const NAME_FIELD_ITEM_ID:String = "cm-userdetails-panel-name";
  protected static const GIVEN_NAME_FIELD_ITEM_ID:String = "cm-userdetails-panel-givenname";
  protected static const SURNAME_FIELD_ITEM_ID:String = "cm-userdetails-panel-surname";
  protected static const EMAIL_FIELD_ITEM_ID:String = "cm-userdetails-panel-email";
  protected static const IMAGE_ID:String = "image";
  protected static const NO_IMAGE_ID:String = "no-image";
  protected static const REMOVE_PROFILE_IMAGE_BUTTON_ITEM_ID:String = "cm-elastic-social-user-detail-remove-image-button";

  private var userAdministration:UserAdministration;
  private var userImageValueExpression:ValueExpression;
  private var emailTextField:TextField;
  private var userNameTextField:TextField;
  private var modified:Boolean;
  private var image:ImageComponent;

  public*/ function UserDetailsDataPanelBase$(config/*:UserDetailsDataPanel = null*/) {if(arguments.length<=0)config=null;
    this.userAdministration$zjNQ = AS3.getBindable(config,"moderation").getUserAdministration();
    this.getUserImageValueExpression(AS3.getBindable(config,"moderation")).addChangeListener(AS3.bind(this,"toggleUserImageBackground$zjNQ"));

    this.modified$zjNQ = false;
    this.super$zjNQ(config);
  }/*

  override protected*/ function afterRender()/*:void*/ {
    Ext.panel.Panel.prototype.afterRender.call(this);
    this.toggleUserImageBackground$zjNQ();
  }/*

  override protected*/ function beforeDestroy()/*:void*/ {
    this.userImageValueExpression$zjNQ.removeChangeListener(AS3.bind(this,"toggleUserImageBackground$zjNQ"));
    Ext.panel.Panel.prototype.beforeDestroy.call(this);
  }/*

  protected static*/ function transformBlobUri$static(blob/*:RemoteBean*/)/*:String*/ {
    if (blob) {
      return blob.getUri();
    }
    return "";
  }/*

  private*/ function toggleUserImageBackground()/*:void*/ {
    var image/*:ImageComponent*/ = this.getImage$zjNQ();
    if (image) {
      var user/*:User*/ = this.userAdministration$zjNQ.getEdited();
      if (user && user.getImage()) {
        this.queryById(UserDetailsDataPanelBase.NO_IMAGE_ID).hide();
        image.show();
      } else {
        image.setSrc(Ext.BLANK_IMAGE_URL);
        image.hide();
        this.queryById(UserDetailsDataPanelBase.NO_IMAGE_ID).show();
      }
    }
  }/*


  public*/ function reset()/*:void*/ {
    if (this.getEMailTextField()) {
      this.getEMailTextField().clearInvalid();
    }
    if (this.getUserNameTextField()) {
      this.getUserNameTextField().clearInvalid();
    }
    if (this.modified$zjNQ) {
      this.modified$zjNQ = false;
      this.fireEvent("modified", true, false);
    }
  }/*

  /**
   * Yes, this is realy, really ugly. But because right now we cannot configure
   * the bindpropertyplugin to be bidirectional and, at the same time, telling
   * us, if the component has changed, we are using the reverse transformer
   * for tracking the modified flag to reduce the lines of code.
   * /
  protected*/ function setModified(value/*:**/)/*:**/ {
    if (!this.modified$zjNQ) {
      this.modified$zjNQ = true;
      this.fireEvent("modified", false, true);
    }

    return value;
  }/*

  public*/ function setInvalid(propertyName/*:String*/, message/*:String*/)/*:void*/ {
    if (propertyName === com.coremedia.elastic.social.studio.model.UserPropertyNames.NAME) {
      this.getUserNameTextField().markInvalid(message);
    } else if (propertyName === com.coremedia.elastic.social.studio.model.UserPropertyNames.EMAIL) {
      this.getEMailTextField().markInvalid(message);
    }
  }/*

  protected*/ function trimMail(value/*:String*/)/*:String*/ {
    return this.userAdministration$zjNQ.trimMail(value);
  }/*

  protected*/ function getUserImageValueExpression(moderation/*:Moderation*/)/*:ValueExpression*/ {
    if (!this.userImageValueExpression$zjNQ) {
      this.userImageValueExpression$zjNQ = com.coremedia.ui.data.ValueExpressionFactory.create(
              com.coremedia.elastic.social.studio.model.utils.ValueExpressionUtil.createPath([
                com.coremedia.elastic.social.studio.model.UserAdministrationPropertyNames.EDITED,
                com.coremedia.elastic.social.studio.model.UserPropertyNames.IMAGE]), moderation.getUserAdministration());
    }

    return this.userImageValueExpression$zjNQ;
  }/*

  protected static*/ function getExtendedEditedUserValueExpressionPath$static(context/*:Moderation*/, extendBy/*:String = null*/)/*:ValueExpression*/ {if(arguments.length<=1)extendBy=null;
    return com.coremedia.ui.data.ValueExpressionFactory.create(com.coremedia.elastic.social.studio.model.utils.ValueExpressionUtil.createPath([com.coremedia.elastic.social.studio.model.UserAdministrationPropertyNames.EDITED, extendBy]),
            context.getUserAdministration());
  }/*

  public*/ function getEMailTextField()/*:TextField*/ {
    if (!this.emailTextField$zjNQ) {
      this.emailTextField$zjNQ =AS3.as( this.queryById(UserDetailsDataPanelBase.EMAIL_FIELD_ITEM_ID),  Ext.form.field.Text);
    }

    return this.emailTextField$zjNQ;
  }/*

  public*/ function getUserNameTextField()/*:TextField*/ {
    if (!this.userNameTextField$zjNQ) {
      this.userNameTextField$zjNQ =AS3.as( this.queryById(UserDetailsDataPanelBase.NAME_FIELD_ITEM_ID),  Ext.form.field.Text);
    }

    return this.userNameTextField$zjNQ;
  }/*

  private*/ function getImage()/*:ImageComponent*/ {
    if (!this.image$zjNQ) {
      this.image$zjNQ =AS3.as( this.queryById(UserDetailsDataPanelBase.IMAGE_ID),  com.coremedia.ui.components.ImageComponent);
    }

    return this.image$zjNQ;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.panel.Panel",
      userAdministration$zjNQ: null,
      userImageValueExpression$zjNQ: null,
      emailTextField$zjNQ: null,
      userNameTextField$zjNQ: null,
      modified$zjNQ: false,
      image$zjNQ: null,
      constructor: UserDetailsDataPanelBase$,
      super$zjNQ: function() {
        Ext.panel.Panel.prototype.constructor.apply(this, arguments);
      },
      afterRender: afterRender,
      beforeDestroy: beforeDestroy,
      toggleUserImageBackground$zjNQ: toggleUserImageBackground,
      reset: reset,
      setModified: setModified,
      setInvalid: setInvalid,
      trimMail: trimMail,
      getUserImageValueExpression: getUserImageValueExpression,
      getEMailTextField: getEMailTextField,
      getUserNameTextField: getUserNameTextField,
      getImage$zjNQ: getImage,
      statics: {
        NAME_FIELD_ITEM_ID: "cm-userdetails-panel-name",
        GIVEN_NAME_FIELD_ITEM_ID: "cm-userdetails-panel-givenname",
        SURNAME_FIELD_ITEM_ID: "cm-userdetails-panel-surname",
        EMAIL_FIELD_ITEM_ID: "cm-userdetails-panel-email",
        IMAGE_ID: "image",
        NO_IMAGE_ID: "no-image",
        REMOVE_PROFILE_IMAGE_BUTTON_ITEM_ID: "cm-elastic-social-user-detail-remove-image-button",
        transformBlobUri: transformBlobUri$static,
        getExtendedEditedUserValueExpressionPath: getExtendedEditedUserValueExpressionPath$static
      },
      requires: [
        "Ext",
        "Ext.form.field.Text",
        "Ext.panel.Panel",
        "com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin_properties",
        "com.coremedia.ui.components.ImageComponent",
        "com.coremedia.ui.data.ValueExpressionFactory"
      ],
      uses: [
        "com.coremedia.elastic.social.studio.model.UserAdministrationPropertyNames",
        "com.coremedia.elastic.social.studio.model.UserPropertyNames",
        "com.coremedia.elastic.social.studio.model.utils.ValueExpressionUtil"
      ]
    };
});
