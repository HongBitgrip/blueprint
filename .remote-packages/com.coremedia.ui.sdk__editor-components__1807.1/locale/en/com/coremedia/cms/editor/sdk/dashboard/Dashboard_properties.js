/**
 * Localization properties for the dashboard and for default widgets
 */
Ext.define("com.coremedia.cms.editor.sdk.dashboard.Dashboard_properties", {

  requires: [
    "com.coremedia.icons.CoreIcons_properties"
  ],
      /**
       * the title of the dashboard
      */
  "tab_title": "Dashboard",
      /**
       * the tooltip of the add widget button
      */
  "header_addWidget_tooltip": "Add widget",
  "show_all_text": "Show All",
  "Action_removeWidget_text": "Remove Widget",
  "Action_saveWidget_text": "Save",
  "WidgetSeparator_addWidget_tooltip": "Add widget at current position",
  "WidgetType_text": "Widget Type",
  "WidgetEditor_notConfigurable_text": "<p>A widget of this type does not support any configuration options.<\/p>",
      /**
       * the action text for the ToggleDashboardAction
 * @see com.coremedia.cms.editor.sdk.dashboard.ToggleDashboardAction
      */
  "Action_showDashboard_text": "Dashboard",
      /**
       * the action tooltip for the ToggleDashboardAction
 * @see com.coremedia.cms.editor.sdk.dashboard.ToggleDashboardAction
      */
  "Action_showDashboard_tooltip": "Show dashboard",
      /**
       * fixed search widget
      */
  "Widget_FixedSearch_name": "Search",
  "Widget_FixedSearch_description": "This widget shows the results of a preconfigured search.",
  "Widget_FixedSearch_icon": "search-widget-icon",
      /**
       * saved search widget
      */
  "Widget_SavedSearch_description": "This widget shows the results of a saved search.",
  "Widget_SavedSearch_icon": "search-widget-icon",
      /**
       * simple search widget
      */
  "Widget_SimpleSearch_name": "Simple Search",
  "Widget_SimpleSearch_description": "This widget shows the results of a customizable search.",
  "Widget_SimpleSearch_icon": "search-widget-icon",
  "Widget_SimpleSearch_contentType_text": "Content Type",
  "Widget_SimpleSearch_searchText_text": "Search Text",
  "Widget_SimpleSearch_site_text": "Site",
  "Widget_SimpleSearch_site_preferredSite_text": "Preferred Site",
  "Widget_SimpleSearch_site_allContent_text": "All Content",
  "Widget_SearchWidgetTitleFormatter_entireRepository_text": "in all Content",
      /**
       * quick search widget
      */
  "Widget_QuickSearch_name": "Quick Search",
  "Widget_QuickSearch_description": "This widget allows the user to execute a quick search, specifying a search term and a content type.",
  "Widget_QuickSearch_icon": "search-widget-icon",
      /**
       * widget buttons
      */
  "Widget_Button_Reload_tooltip_text": "Reload Widget",
  "Widget_Button_Edit_tooltip_text": "Edit Widget",
      /**
       * translation state widget
      */
  "Widget_TranslationStatus_name": "Translation State",
  "Widget_TranslationStatus_description": "This widget shows the translation state of the selected site.",
  "Widget_TranslationStatus_icon": "search-widget-icon",
  "Widget_TranslationStatus_masterSiteLabel_text": "Master Site",
  "Widget_TranslationStatus_noMasterSite_text": "—",
  "Widget_TranslationStatus_extIntegerFormat": ",.",
  "Widget_TranslationStatus_extDecimalFormat": ",.0",
  "Widget_TranslationStatus_kiloSuffix": "k",
  "Widget_TranslationStatus_megaSuffix": "M"
}, function() {
  /**
   * the icon of the add widget button
  */
  this.prototype["header_addWidget_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.add;
  /**
   * the action icon style class for the ToggleDashboardAction
 * @see com.coremedia.cms.editor.sdk.dashboard.ToggleDashboardAction
  */
  this.prototype["Action_showDashboard_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.pencil;

  com.coremedia.cms.editor.sdk.dashboard.Dashboard_properties.INSTANCE = new com.coremedia.cms.editor.sdk.dashboard.Dashboard_properties();
});