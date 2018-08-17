Ext.define("com.coremedia.cms.editor.sdk.EditorComponentsPreferencesPropertyNames", function(EditorComponentsPreferencesPropertyNames) {/*package com.coremedia.cms.editor.sdk {

/**
 * The property names of the preferences used in editor-components.
 * /
public class EditorComponentsPreferencesPropertyNames {
  /**
   * @private
   * This class only defines constants.
   * /
  public*/ function EditorComponentsPreferencesPropertyNames$() {
  }/*

  /**
   * Stores the id of the preferred site.
   * /
  public static const PREFERRED_SITE:String = "preferredSite";

  /**
   * Stores the state of the dashboard.
   * /
  public static const DASHBOARD_STRUCT:String = 'dashboard';

  /**
   * Path to the dashboard widgets inside the dashboard struct property.
   * /
  public static const DASHBOARD_STRUCT_WIDGETS:String = 'widgets';

  /**
   * Stores the state of the work area.
   * /
  public static const WORK_AREA_STRUCT:String = 'workarea';

  /**
   * Path to the open tabs inside the work area struct property.
   * /
  public static const WORK_AREA_STRUCT_TABS:String = 'tabs';

  /**
   * Path to the active tab index inside the work area struct property.
   * /
  public static const WORK_AREA_STRUCT_ACTIVE_TAB_INDEX:String = 'activeTabIndex';

  /**
   * Substruct for user menu configuration.
   * /
  public static const USER_MENU_SUBSTRUCT:String = 'userMenu';

  /**
   * Disables showing the preferred site's name in the user menu.
   * Property below USER_MENU_SUBSTRUCT.
   * /
  public static const DISABLE_SITE_NAME:String = 'disableSiteName';

  /**
   * Disables showing the preferred site's locale in the user menu.
   * Property below USER_MENU_SUBSTRUCT.
   * /
  public static const DISABLE_SITE_LOCALE:String = 'disableSiteLocale';

  /**
   * Disables showing the user's name in the user menu.
   * Property below USER_MENU_SUBSTRUCT.
   * /
  public static const DISABLE_USER_NAME:String = 'disableUserName';

  /**
   * Disables the highlighting of PDE elements in the Preview on mouse hover.
   * /
  public static const DISABLE_PREVIEW_HOVER_FRAMES:String = 'disablePreviewHoverFrames';

  /**
   * Disables the device scrollbars in the Preview.
   * /
  public static const ENABLE_PREVIEW_SCROLLBARS:String = 'enablePreviewScrollbars';

  /**
   * Stores whether all tabs are always visible in the form.
   * /
  public static const SHOW_ALL_TABS_IN_FORM:String = 'showAllTabsInForm';

  /**
   * Stores the delay to be used for reloading the preview.
   * Value '0' will skip the automatic reload at all.
   * /
  public static const PREVIEW_RELOAD_DELAY:String = 'previewReloadDelay';
}
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: EditorComponentsPreferencesPropertyNames$,
      statics: {
        PREFERRED_SITE: "preferredSite",
        DASHBOARD_STRUCT: 'dashboard',
        DASHBOARD_STRUCT_WIDGETS: 'widgets',
        WORK_AREA_STRUCT: 'workarea',
        WORK_AREA_STRUCT_TABS: 'tabs',
        WORK_AREA_STRUCT_ACTIVE_TAB_INDEX: 'activeTabIndex',
        USER_MENU_SUBSTRUCT: 'userMenu',
        DISABLE_SITE_NAME: 'disableSiteName',
        DISABLE_SITE_LOCALE: 'disableSiteLocale',
        DISABLE_USER_NAME: 'disableUserName',
        DISABLE_PREVIEW_HOVER_FRAMES: 'disablePreviewHoverFrames',
        ENABLE_PREVIEW_SCROLLBARS: 'enablePreviewScrollbars',
        SHOW_ALL_TABS_IN_FORM: 'showAllTabsInForm',
        PREVIEW_RELOAD_DELAY: 'previewReloadDelay'
      }
    };
});
