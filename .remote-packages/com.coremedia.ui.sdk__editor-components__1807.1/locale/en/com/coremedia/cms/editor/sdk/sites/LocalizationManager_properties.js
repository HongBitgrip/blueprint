/**
 *[PublicApi]
 * This class defines various localized texts used in the localization manager.
 */
Ext.define("com.coremedia.cms.editor.sdk.sites.LocalizationManager_properties", {

  requires: [
    "com.coremedia.icons.CoreIcons_properties"
  ],
  "Tab_LocalizationManager_title": "Sites",
  "LocalizationManager_close_button": "Close",
  "Action_showLocalizationManager_text": "Sites",
  "Action_showLocalizationManager_tooltip": "Open Sites tool",
  "Action_openInTab_text": "Open Home Page in Tab",
  "Action_openInTab_tooltip": "Open the site's home page in a tab",
  "Action_openMasterComparison_text": "Compare with Master",
  "Action_openSiteInRepository_text": "Show Site Folder in Library",
  "Action_openSiteInRepository_tooltip": "Show the site folder in the Library",
  "Action_cloneSite_text": "Derive a New Localized Site",
  "Action_cloneSite_tooltip": "Derive a new localized site",
  "Tree_site_topLevel_name_pattern": "{0} - {2}",
  "Tree_site_child_name_pattern": "{2}",
  "CloneSiteWindow_title": "Derive a New Localized Site",
  "CloneSiteWindow_name_field": "Name",
  "CloneSiteWindow_locale_field": "Locale",
  "CloneSiteWindow_uriSegment_field": "URL Segment",
  "CloneSiteWindow_siteManagerGroup_field": "Site Manager Group",
  "CloneSiteWindow_siteInSyncWithMaster_field": "Synchronization",
  "CloneSiteWindow_siteInSyncWithMaster_boxlabel": "Synchronize with Master",
  "CloneSiteWindow_invalid_name": "Site variants name must have a valid content name",
  "CloneSiteWindow_invalid_locale": "Locale must be unique for the current site hierarchy",
  "CloneSiteWindow_invalid_uriSegment": "URL segment must be unique for all sites",
  "CloneSiteWindow_invalid_siteManagerGroup": "Site Manager group must exist",
  "CloneSiteWindow_cloneErrorMsg": "Could not create local site variant",
  "CloneSiteWindow_processDefinitionMissing_title": "Could Not Derive Site",
  "CloneSiteWindow_processDefinitionMissing_text": "Process definition '{0}' not found",
  "CloneSiteWindow_ok_button": "OK",
  "CloneSiteWindow_cancel_button": "Cancel",
  "CloneSiteError_title": "Error Deriving Site",
  "CloneSiteError_aborted": "Deriving the site {0} into {1} has been aborted.",
  "CloneSiteError_escalated": "Could not derive the site {0} into {1}:",
  "CloneSiteErrorDialog_title": "Error Cloning Site"
}, function() {
  this.prototype["Action_showLocalizationManager_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.site;
  this.prototype["Action_openSiteInRepository_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.show_in_library;
  this.prototype["Action_cloneSite_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.create_local_site;

  com.coremedia.cms.editor.sdk.sites.LocalizationManager_properties.INSTANCE = new com.coremedia.cms.editor.sdk.sites.LocalizationManager_properties();
});