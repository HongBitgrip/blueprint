Ext.define("com.coremedia.elastic.social.studio.usermanagement.details.UserMetaDataPanelBase", function(UserMetaDataPanelBase) {/*package com.coremedia.elastic.social.studio.usermanagement.details {

import com.coremedia.elastic.social.studio.model.UserAdministration;
import com.coremedia.elastic.social.studio.model.UserAdministrationPropertyNames;
import com.coremedia.ui.data.Locale;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.data.dependencies.DependencyTracker;
import com.coremedia.ui.util.createComponentSelector;

import ext.DateUtil;
import ext.container.Container;
import ext.panel.Panel;

import mx.resources.ResourceManager;

[ResourceBundle('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin')]
public class UserMetaDataPanelBase extends Panel {
  protected static const CONTRIBUTIONS_ITEM_ID:String = "numberOfContributions";
  protected static const REJECTED_CONTRIBUTIONS_ITEM_ID:String = "numberOfRejectedContributions";
  protected static const LAST_LOGIN_DATE_ITEM_ID:String = "lastLoginDate";
  protected static const NUMBER_OF_LOGINS_ITEM_ID:String = "numberOfLogins";
  protected static const LOCALE_LANGUAGE_ITEM_ID:String = "localeLanguage";
  protected static const USER_ANNOTATION_CONTAINER_ITEM_ID:String = "userAnnotationContainer";
  protected static const ADDITIONAL_USER_INFO_CONTAINER_ITEM_ID:String = "additionalUserInfoContainerItemId";

  private var userValueExpression:ValueExpression;

  private var additionalUserInfoContainerVisibilityVE:ValueExpression;

  public*/ function UserMetaDataPanelBase$(config/*:UserMetaDataPanel = null*/) {if(arguments.length<=0)config=null;
    this.super$JGDr(config);
  }/*

  // start of config properties
  internal native function get cancel():Function;

  // end of config properties

  override protected*/ function afterRender()/*:void*/ {
    Ext.panel.Panel.prototype.afterRender.call(this);
    this.changeAdditionalUserInfoContainerVisibility$JGDr(this.getAdditionalUserInfoContainerVisibleVE$JGDr());
    this.getAdditionalUserInfoContainerVisibleVE$JGDr().addChangeListener(AS3.bind(this,"changeAdditionalUserInfoContainerVisibility$JGDr"));
  }/*

  override protected*/ function beforeDestroy()/*:void*/ {
    this.getAdditionalUserInfoContainerVisibleVE$JGDr().removeChangeListener(AS3.bind(this,"changeAdditionalUserInfoContainerVisibility$JGDr"));

    Ext.panel.Panel.prototype.beforeDestroy.call(this);
  }/*

  protected static*/ function formatDate$static(date/*:**/)/*:String*/ {
    if (date) {
      return Ext.Date.format(date, mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'shortDateFormat'));
    } else {
      return "";
    }
  }/*

  public static*/ function evaluateUserLocale$static(locale/*:Locale*/)/*:String*/ {
    if (locale == null || locale.getLanguage() == null || locale.getLanguage().length < 2) {
      return mx.resources.ResourceManager.getInstance().getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'userdetail_locale_empty');
    }
    var localeString/*:String*/ = mx.resources.ResourceManager.getInstance().getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', locale.getLanguage());
    if (localeString != null && localeString != "") {
      return localeString;
    }
    return locale.getLanguage();
  }/*


  protected*/ function getEditedUserValueExpression(userAdministration/*:UserAdministration*/)/*:ValueExpression*/ {
    if (!this.userValueExpression$JGDr) {
      this.userValueExpression$JGDr = com.coremedia.ui.data.ValueExpressionFactory.create(com.coremedia.elastic.social.studio.model.UserAdministrationPropertyNames.EDITED, userAdministration);
    }

    return this.userValueExpression$JGDr;
  }/*

  private*/ function getAdditionalUserInfoContainerVisibleVE()/*:ValueExpression*/ {var this$=this;
    if (!this.additionalUserInfoContainerVisibilityVE$JGDr) {
      this.additionalUserInfoContainerVisibilityVE$JGDr = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:Boolean*/ {
        var customUserInformationCt/*:Container*/ =AS3.as( this$.down(com.coremedia.ui.util.createComponentSelector()._xtype(com.coremedia.elastic.social.studio.usermanagement.details.CustomUserInformationContainer.xtype).build()),  Ext.container.Container);
        com.coremedia.ui.data.dependencies.DependencyTracker.dependOnObservable(customUserInformationCt, "add");
        com.coremedia.ui.data.dependencies.DependencyTracker.dependOnObservable(customUserInformationCt, "remove");
        return customUserInformationCt && customUserInformationCt.itemCollection.getCount() > 1; // > 1 because of spacer.
      });
    }
    return this.additionalUserInfoContainerVisibilityVE$JGDr;
  }/*

  private*/ function changeAdditionalUserInfoContainerVisibility(visibilityVE/*:ValueExpression*/)/*:void*/ {
    var additionalUserInfoContainer/*:Container*/ =AS3.as( this.queryById(UserMetaDataPanelBase.ADDITIONAL_USER_INFO_CONTAINER_ITEM_ID),  Ext.container.Container);
    if (additionalUserInfoContainer) {
      visibilityVE.getValue() ? additionalUserInfoContainer.show() : additionalUserInfoContainer.hide();
    }
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.panel.Panel",
      userValueExpression$JGDr: null,
      additionalUserInfoContainerVisibilityVE$JGDr: null,
      constructor: UserMetaDataPanelBase$,
      super$JGDr: function() {
        Ext.panel.Panel.prototype.constructor.apply(this, arguments);
      },
      afterRender: afterRender,
      beforeDestroy: beforeDestroy,
      getEditedUserValueExpression: getEditedUserValueExpression,
      getAdditionalUserInfoContainerVisibleVE$JGDr: getAdditionalUserInfoContainerVisibleVE,
      changeAdditionalUserInfoContainerVisibility$JGDr: changeAdditionalUserInfoContainerVisibility,
      statics: {
        CONTRIBUTIONS_ITEM_ID: "numberOfContributions",
        REJECTED_CONTRIBUTIONS_ITEM_ID: "numberOfRejectedContributions",
        LAST_LOGIN_DATE_ITEM_ID: "lastLoginDate",
        NUMBER_OF_LOGINS_ITEM_ID: "numberOfLogins",
        LOCALE_LANGUAGE_ITEM_ID: "localeLanguage",
        USER_ANNOTATION_CONTAINER_ITEM_ID: "userAnnotationContainer",
        ADDITIONAL_USER_INFO_CONTAINER_ITEM_ID: "additionalUserInfoContainerItemId",
        formatDate: formatDate$static,
        evaluateUserLocale: evaluateUserLocale$static
      },
      requires: [
        "Ext.Date",
        "Ext.container.Container",
        "Ext.panel.Panel",
        "com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin_properties",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.data.dependencies.DependencyTracker",
        "com.coremedia.ui.util.createComponentSelector",
        "mx.resources.ResourceManager"
      ],
      uses: [
        "com.coremedia.elastic.social.studio.model.UserAdministrationPropertyNames",
        "com.coremedia.elastic.social.studio.usermanagement.details.CustomUserInformationContainer"
      ]
    };
});
