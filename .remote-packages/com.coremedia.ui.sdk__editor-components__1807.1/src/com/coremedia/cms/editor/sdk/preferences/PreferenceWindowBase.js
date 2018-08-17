Ext.define("com.coremedia.cms.editor.sdk.preferences.PreferenceWindowBase", function(PreferenceWindowBase) {/*package com.coremedia.cms.editor.sdk.preferences {

import com.coremedia.cms.editor.sdk.EditorComponentsPreferencesPropertyNames;
import com.coremedia.cms.editor.sdk.components.StudioDialog;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.cms.editor.sdk.preview.PreviewPanelBase;
import com.coremedia.cms.editor.sdk.util.LocaleUtil;
import com.coremedia.cms.editor.sdk.util.LocaleUtilInternal;
import com.coremedia.cms.editor.sdk.util.PreferencesUtil;
import com.coremedia.ui.data.RemoteBean;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;

import ext.Ext;
import ext.container.Container;
import ext.panel.Panel;
import ext.tab.TabPanel;

import mx.resources.ResourceManager;

[ResourceBundle('com.coremedia.cms.editor.Editor')]
public class PreferenceWindowBase extends StudioDialog {
  private var localeValueExpression:ValueExpression;
  private var showPreviewHoverFramesValueExpression:ValueExpression;
  private var showPreviewScrollbarsValueExpression:ValueExpression;
  private var showAllTabsInFormValueExpression:ValueExpression;
  private var showSiteInUserMenuValueExpression:ValueExpression;
  private var showSiteLocaleInUserMenuValueExpression:ValueExpression;
  private var showUserNameInUserMenuValueExpression:ValueExpression;
  private var previewReloadDelayValueExpression:ValueExpression;

  private var preselectedTabItemId:String = undefined;

  public*/ function PreferenceWindowBase$(config/*:PreferenceWindow = null*/) {if(arguments.length<=0)config=null;
    this.super$Behi(config);
    this.preselectedTabItemId$Behi = AS3.getBindable(config,"selectedTabItemId");
  }/*


  override protected*/ function afterRender()/*:void*/ {
    com.coremedia.cms.editor.sdk.components.StudioDialog.prototype.afterRender.call(this);

    if(this.preselectedTabItemId$Behi) {
      var tabPanel/*:TabPanel*/ =AS3.as( Ext.getCmp('preferences-tab-panel'),  Ext.tab.Panel);
      var tab/*:Panel*/ =AS3.as( tabPanel.queryById(this.preselectedTabItemId$Behi),  Ext.panel.Panel);
      if(tab) {
        tabPanel.setActiveTab(tab);
      }
    }
  }/*

  protected static*/ function getLocaleStore$static()/*:Array*/ {
    var localStore/*:Array*/ = [];
    var supportedLocales/*:Array*/ = com.coremedia.cms.editor.sdk.util.LocaleUtil.getSupportedLocales();
    for (var i/*:int*/ = 0; i < supportedLocales.length; i++) {
      var supportedLocale/*:**/ = supportedLocales[i];
      localStore.push([ supportedLocale, mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', "Locale_" + supportedLocale + "_text") || supportedLocale]);
    }
    return localStore;
  }/*

  protected*/ function getLocaleValueExpression()/*:ValueExpression*/ {
    return this.localeValueExpression$Behi ||
            (this.localeValueExpression$Behi = com.coremedia.ui.data.ValueExpressionFactory.createFromValue(com.coremedia.cms.editor.sdk.util.LocaleUtil.getLocale()));
  }/*

  protected*/ function getShowSiteInUserMenuValueExpression()/*:ValueExpression*/ {
    return this.showSiteInUserMenuValueExpression$Behi ||
            (this.showSiteInUserMenuValueExpression$Behi = com.coremedia.ui.data.ValueExpressionFactory.createFromValue(
                    !com.coremedia.cms.editor.sdk.util.PreferencesUtil.getPreferencesProperty(com.coremedia.cms.editor.sdk.EditorComponentsPreferencesPropertyNames.USER_MENU_SUBSTRUCT,
                            com.coremedia.cms.editor.sdk.EditorComponentsPreferencesPropertyNames.DISABLE_SITE_NAME)));
  }/*

  protected*/ function getShowSiteLocaleInUserMenuValueExpression()/*:ValueExpression*/ {
    return this.showSiteLocaleInUserMenuValueExpression$Behi ||
            (this.showSiteLocaleInUserMenuValueExpression$Behi = com.coremedia.ui.data.ValueExpressionFactory.createFromValue(
                    !com.coremedia.cms.editor.sdk.util.PreferencesUtil.getPreferencesProperty(com.coremedia.cms.editor.sdk.EditorComponentsPreferencesPropertyNames.USER_MENU_SUBSTRUCT,
                            com.coremedia.cms.editor.sdk.EditorComponentsPreferencesPropertyNames.DISABLE_SITE_LOCALE)));
  }/*

  protected*/ function getShowUserNameInUserMenuValueExpression()/*:ValueExpression*/ {
    return this.showUserNameInUserMenuValueExpression$Behi ||
            (this.showUserNameInUserMenuValueExpression$Behi = com.coremedia.ui.data.ValueExpressionFactory.createFromValue(
                    !com.coremedia.cms.editor.sdk.util.PreferencesUtil.getPreferencesProperty(com.coremedia.cms.editor.sdk.EditorComponentsPreferencesPropertyNames.USER_MENU_SUBSTRUCT,
                            com.coremedia.cms.editor.sdk.EditorComponentsPreferencesPropertyNames.DISABLE_USER_NAME)));
  }/*

  protected*/ function getShowPreviewHoverFramesValueExpression()/*:ValueExpression*/ {
    return this.showPreviewHoverFramesValueExpression$Behi ||
            (this.showPreviewHoverFramesValueExpression$Behi = com.coremedia.ui.data.ValueExpressionFactory.createFromValue(
                    !com.coremedia.cms.editor.sdk.util.PreferencesUtil.getPreferencesProperty(com.coremedia.cms.editor.sdk.EditorComponentsPreferencesPropertyNames.DISABLE_PREVIEW_HOVER_FRAMES)));
  }/*

  protected*/ function getShowPreviewScrollbarsValueExpression()/*:ValueExpression*/ {
    return this.showPreviewScrollbarsValueExpression$Behi ||
            (this.showPreviewScrollbarsValueExpression$Behi = com.coremedia.ui.data.ValueExpressionFactory.createFromValue(
                    com.coremedia.cms.editor.sdk.util.PreferencesUtil.getPreferencesProperty(com.coremedia.cms.editor.sdk.EditorComponentsPreferencesPropertyNames.ENABLE_PREVIEW_SCROLLBARS)));
  }/*

  protected*/ function getShowAllTabsInFormValueExpression()/*:ValueExpression*/ {
    return this.showAllTabsInFormValueExpression$Behi ||
            (this.showAllTabsInFormValueExpression$Behi = com.coremedia.ui.data.ValueExpressionFactory.createFromValue(
                    com.coremedia.cms.editor.sdk.util.PreferencesUtil.getPreferencesProperty(com.coremedia.cms.editor.sdk.EditorComponentsPreferencesPropertyNames.SHOW_ALL_TABS_IN_FORM)));
  }/*

  protected*/ function getPreviewReloadDelayValueExpression()/*:ValueExpression*/ {
    if(!this.previewReloadDelayValueExpression$Behi) {
      var value/*:Number*/ = com.coremedia.cms.editor.sdk.util.PreferencesUtil.getPreferencesProperty(com.coremedia.cms.editor.sdk.EditorComponentsPreferencesPropertyNames.PREVIEW_RELOAD_DELAY);
      if(value === undefined) {
        value = com.coremedia.cms.editor.sdk.preview.PreviewPanelBase.DEFAULT_RELOAD_DELAY;
      }
      this.previewReloadDelayValueExpression$Behi = com.coremedia.ui.data.ValueExpressionFactory.createFromValue(value);
    }
    return this.previewReloadDelayValueExpression$Behi;
  }/*

  protected*/ function saveAndClose()/*:void*/ {

    com.coremedia.cms.editor.sdk.util.PreferencesUtil.updatePreferencesJSONProperty(!this.getShowSiteInUserMenuValueExpression().getValue(),
            com.coremedia.cms.editor.sdk.EditorComponentsPreferencesPropertyNames.USER_MENU_SUBSTRUCT, com.coremedia.cms.editor.sdk.EditorComponentsPreferencesPropertyNames.DISABLE_SITE_NAME);
    com.coremedia.cms.editor.sdk.util.PreferencesUtil.updatePreferencesJSONProperty(!this.getShowSiteLocaleInUserMenuValueExpression().getValue(),
            com.coremedia.cms.editor.sdk.EditorComponentsPreferencesPropertyNames.USER_MENU_SUBSTRUCT, com.coremedia.cms.editor.sdk.EditorComponentsPreferencesPropertyNames.DISABLE_SITE_LOCALE);
    com.coremedia.cms.editor.sdk.util.PreferencesUtil.updatePreferencesJSONProperty(!this.getShowUserNameInUserMenuValueExpression().getValue(),
            com.coremedia.cms.editor.sdk.EditorComponentsPreferencesPropertyNames.USER_MENU_SUBSTRUCT, com.coremedia.cms.editor.sdk.EditorComponentsPreferencesPropertyNames.DISABLE_USER_NAME);

    com.coremedia.cms.editor.sdk.util.PreferencesUtil.updatePreferencesJSONProperty(!this.getShowPreviewHoverFramesValueExpression().getValue(),
            com.coremedia.cms.editor.sdk.EditorComponentsPreferencesPropertyNames.DISABLE_PREVIEW_HOVER_FRAMES);
    com.coremedia.cms.editor.sdk.util.PreferencesUtil.updatePreferencesJSONProperty(! !this.getShowPreviewScrollbarsValueExpression().getValue(),
            com.coremedia.cms.editor.sdk.EditorComponentsPreferencesPropertyNames.ENABLE_PREVIEW_SCROLLBARS);
    
    com.coremedia.cms.editor.sdk.util.PreferencesUtil.updatePreferencesJSONProperty(this.getShowAllTabsInFormValueExpression().getValue(),
            com.coremedia.cms.editor.sdk.EditorComponentsPreferencesPropertyNames.SHOW_ALL_TABS_IN_FORM);

    com.coremedia.cms.editor.sdk.util.PreferencesUtil.updatePreferencesJSONProperty(this.getPreviewReloadDelayValueExpression().getValue(),
            com.coremedia.cms.editor.sdk.EditorComponentsPreferencesPropertyNames.PREVIEW_RELOAD_DELAY);

    var tabPanel/*:TabPanel*/ =AS3.as( Ext.getCmp('preferences-tab-panel'),  Ext.tab.Panel);
    //where is the getTabs() method?
    var tabs/*:Array*/ = tabPanel.itemCollection['items'];
    for/* each*/(var $1=0;$1</* in*/ tabs.length;++$1) {var panel/*:Container*/ =tabs[$1];
      if(AS3.is(panel,  com.coremedia.cms.editor.sdk.preferences.PreferencePanel)) {
        (AS3.as(panel,  com.coremedia.cms.editor.sdk.preferences.PreferencePanel)).updatePreferences();
      }
    }

    var locale/*:String*/ = this.getLocaleValueExpression().getValue();
    AS3.cast(com.coremedia.ui.data.RemoteBean,com.coremedia.cms.editor.sdk.editorContext.getPreferences()).flush(function()/*:void*/ {
      com.coremedia.cms.editor.sdk.util.LocaleUtilInternal.setLocale(locale);
    });

    this.el.blur();
    this.close();
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.components.StudioDialog",
      localeValueExpression$Behi: null,
      showPreviewHoverFramesValueExpression$Behi: null,
      showPreviewScrollbarsValueExpression$Behi: null,
      showAllTabsInFormValueExpression$Behi: null,
      showSiteInUserMenuValueExpression$Behi: null,
      showSiteLocaleInUserMenuValueExpression$Behi: null,
      showUserNameInUserMenuValueExpression$Behi: null,
      previewReloadDelayValueExpression$Behi: null,
      preselectedTabItemId$Behi: undefined,
      constructor: PreferenceWindowBase$,
      super$Behi: function() {
        com.coremedia.cms.editor.sdk.components.StudioDialog.prototype.constructor.apply(this, arguments);
      },
      afterRender: afterRender,
      getLocaleValueExpression: getLocaleValueExpression,
      getShowSiteInUserMenuValueExpression: getShowSiteInUserMenuValueExpression,
      getShowSiteLocaleInUserMenuValueExpression: getShowSiteLocaleInUserMenuValueExpression,
      getShowUserNameInUserMenuValueExpression: getShowUserNameInUserMenuValueExpression,
      getShowPreviewHoverFramesValueExpression: getShowPreviewHoverFramesValueExpression,
      getShowPreviewScrollbarsValueExpression: getShowPreviewScrollbarsValueExpression,
      getShowAllTabsInFormValueExpression: getShowAllTabsInFormValueExpression,
      getPreviewReloadDelayValueExpression: getPreviewReloadDelayValueExpression,
      saveAndClose: saveAndClose,
      statics: {getLocaleStore: getLocaleStore$static},
      requires: [
        "Ext",
        "Ext.panel.Panel",
        "Ext.tab.Panel",
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.cms.editor.sdk.components.StudioDialog",
        "com.coremedia.ui.data.RemoteBean",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "mx.resources.ResourceManager"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.EditorComponentsPreferencesPropertyNames",
        "com.coremedia.cms.editor.sdk.editorContext",
        "com.coremedia.cms.editor.sdk.preferences.PreferencePanel",
        "com.coremedia.cms.editor.sdk.preview.PreviewPanelBase",
        "com.coremedia.cms.editor.sdk.util.LocaleUtil",
        "com.coremedia.cms.editor.sdk.util.LocaleUtilInternal",
        "com.coremedia.cms.editor.sdk.util.PreferencesUtil"
      ]
    };
});
