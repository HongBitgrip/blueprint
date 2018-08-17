/**
 * Properties class for ResourceBundle "QuickCreateSettings".
 */
Ext.define("com.coremedia.blueprint.base.components.quickcreate.QuickCreateSettings_properties", {

      /**
       *#######################################################################################################################
 * The default content types to apply for the link lists create menu.
 *#######################################################################################################################
      */
  "default_link_list_contentTypes": "CMArticle,CMTeaser,CMPicture,CMVideo,CMDownload,CMQueryList,CMCollection",
  "default_properties": "name,folder",
      /**
       *#######################################################################################################################
 * The default paths used for the folder combo, depending on the content type name prefix.
 * If not defined the site path value is applied.
 *#######################################################################################################################
      */
  "CMArticle_home_folder": "Editorial/Content",
  "CMAudio_home_folder": "Editorial/Content",
  "CMTeaser_home_folder": "Editorial/Content",
  "CMSegment_home_folder": "\/System/personalization/segments",
  "CMPicture_home_folder": "Editorial/Content",
  "CMProductTeaser_home_folder": "Editorial/Products",
  "CMProductList_home_folder": "Editorial/Products",
  "CMMarketingSpot_home_folder": "Navigation/e-Marketing Spots",
  "CMExternalChannel_home_folder": "Navigation/Categories",
  "CMSite_home_folder": "Editorial",
  "CMChannel_home_folder": "Navigation",
  "CMUserProfile_home_folder": "Options/Personalization/Profiles",
  "CMSelectionRules_home_folder": "Editorial/Personalization",
  "CMTaxonomy_home_folder": "\/Settings/Taxonomies/Subject",
  "CMLocTaxonomy_home_folder": "\/Settings/Taxonomies/Location",
  "CMVideo_home_folder": "Editorial/Content",
  "CMImageMap_home_folder": "Editorial/Content",
  "CMQueryList_home_folder": "Editorial/Content",
  "CMCollection_home_folder": "Editorial/Content",
  "CMGallery_home_folder": "Editorial/Content",
  "CMP13NSearch_home_folder": "Editorial/Personalization",
  "CMDownload_home_folder": "Editorial/Content"
}, function() {

  com.coremedia.blueprint.base.components.quickcreate.QuickCreateSettings_properties.INSTANCE = new com.coremedia.blueprint.base.components.quickcreate.QuickCreateSettings_properties();
});