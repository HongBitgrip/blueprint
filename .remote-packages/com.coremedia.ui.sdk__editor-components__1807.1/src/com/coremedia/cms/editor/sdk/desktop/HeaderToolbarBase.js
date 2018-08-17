Ext.define("com.coremedia.cms.editor.sdk.desktop.HeaderToolbarBase", function(HeaderToolbarBase) {/*package com.coremedia.cms.editor.sdk.desktop {

import com.coremedia.cap.common.SESSION;
import com.coremedia.cms.editor.sdk.EditorComponentsPreferencesPropertyNames;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.cms.editor.sdk.sites.Site;
import com.coremedia.cms.editor.sdk.util.PreferencesUtil;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;

import ext.Component;
import ext.menu.MenuBar;

public class HeaderToolbarBase extends MenuBar {
  private var userMenuTextValueExpression:ValueExpression;

  public*/ function HeaderToolbarBase$(config/*:HeaderToolbar = null*/) {if(arguments.length<=0)config=null;
    this.super$n$Xp(config);
  }/*

  internal*/ function getUserMenuTextValueExpression()/*:ValueExpression*/ {
    if (!this.userMenuTextValueExpression$n$Xp) {
      this.userMenuTextValueExpression$n$Xp = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(calcUserMenuText$static);
    }
    return this.userMenuTextValueExpression$n$Xp;
  }/*

  private static*/ function calcUserMenuText$static()/*:String*/ {
    var userName/*:String*/ = com.coremedia.cap.common.SESSION.getUser().getName();
    var site/*:Site*/ = com.coremedia.cms.editor.sdk.editorContext.getSitesService().getPreferredSite();

    var disableUserName/*:Boolean*/ = com.coremedia.cms.editor.sdk.util.PreferencesUtil.getPreferencesProperty(com.coremedia.cms.editor.sdk.EditorComponentsPreferencesPropertyNames.USER_MENU_SUBSTRUCT,
            com.coremedia.cms.editor.sdk.EditorComponentsPreferencesPropertyNames.DISABLE_USER_NAME);
    var disableSiteName/*:Boolean*/ = com.coremedia.cms.editor.sdk.util.PreferencesUtil.getPreferencesProperty(com.coremedia.cms.editor.sdk.EditorComponentsPreferencesPropertyNames.USER_MENU_SUBSTRUCT,
            com.coremedia.cms.editor.sdk.EditorComponentsPreferencesPropertyNames.DISABLE_SITE_NAME);
    var disableSiteLocale/*:Boolean*/ = com.coremedia.cms.editor.sdk.util.PreferencesUtil.getPreferencesProperty(com.coremedia.cms.editor.sdk.EditorComponentsPreferencesPropertyNames.USER_MENU_SUBSTRUCT,
            com.coremedia.cms.editor.sdk.EditorComponentsPreferencesPropertyNames.DISABLE_SITE_LOCALE);

    var userMenuElements/*:Array*/ = [];

    if (!disableUserName) {
      userMenuElements.push(userName);
    }
    if (! !site) {
      if (!disableSiteName) {
        userMenuElements.push(site.getName());
      }
      if (!disableSiteLocale) {
        userMenuElements.push(site.getLocale().getDisplayName());
      }
    }
    if (!site) {
      return disableUserName ? "" : userName;
    }

    return userMenuElements.join(' | ');
  }/*

  protected*/ function customGetFocusables()/*:Array*/ {
    var me/*:HeaderToolbarBase*/ = this;
    return this.query().filter(function (item/*:Component*/)/*:Boolean*/ {
      var itemsFocusableOwner/*:**/ = item['ownerFocusableContainer'];
      return !itemsFocusableOwner || itemsFocusableOwner === me;
    });
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.menu.Bar",
      userMenuTextValueExpression$n$Xp: null,
      constructor: HeaderToolbarBase$,
      super$n$Xp: function() {
        Ext.menu.Bar.prototype.constructor.apply(this, arguments);
      },
      getUserMenuTextValueExpression: getUserMenuTextValueExpression,
      customGetFocusables: customGetFocusables,
      requires: [
        "Ext.menu.Bar",
        "com.coremedia.cap.common.SESSION",
        "com.coremedia.ui.data.ValueExpressionFactory"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.EditorComponentsPreferencesPropertyNames",
        "com.coremedia.cms.editor.sdk.editorContext",
        "com.coremedia.cms.editor.sdk.util.PreferencesUtil"
      ]
    };
});
