/**
 * This file contains localization of issues reported by validators.
 *[PublicApi]
 */
Ext.define("com.coremedia.cms.editor.sdk.validation.Validators_properties", {

  requires: [
    "com.coremedia.icons.CoreIcons_properties"
  ],
  "Validator_internalError_text": "Validation was aborted due to an internal error: {0}",
  "Validator_EmailValidator_text": "Field must contain a valid email address.",
  "Validator_ListMaxLengthValidator_text": "List must not contain more than {0} entries.",
  "Validator_ListMinLengthValidator_text": "List must contain at least {0} entries.",
  "Validator_MaxIntegerValidator_text": "The value must be at most {0}.",
  "Validator_MaxLengthValidator_text": "Text must not be longer than {0} characters.",
  "Validator_MinIntegerValidator_text": "The value must be at least {0}.",
  "Validator_MinLengthValidator_text": "Text must not be shorter than {0} characters.",
  "Validator_NotEmptyValidator_text": "This field must not be empty.",
  "Validator_RegExpValidator_text": "Text must match the pattern '{0}'.",
  "Validator_UniqueListEntriesValidator_text": "The entries in the list must be unique.",
  "Validator_UriValidator_text": "Field must contain a valid URI.",
  "Validator_UrlValidator_text": "Field must contain a valid URL.",
  "Validator_LinkListMaxLengthValidator_text": "List must not contain more than {0} content items.",
  "Validator_LinkListMinLengthValidator_text": "List must contain at least {0} content items.",
  "Validator_MaxBlobSizeValidator_text": "Blob must not be larger than {0} bytes.",
  "Validator_DeadLinkValidator_text": "Field must not link to deleted content '{0}'.",
  "Validator_CropSizeValidator_text": "The resolution for crop {0} is less than {1}x{2}.",
  "Validator_NoImageDimensions_text": "The dimensions of the image could not be determined.",
  "Validator_MissingTransformDefinition_text": "Transform definition for {0} must not be empty.",
  "Validator_StructLinkListNotEmptyValidator_text": "This field must not be empty.",
  "Validator_StructLinkListMaxLengthValidator_text": "List must not contain more than {0} content items.",
  "Validator_StructLinkListMinLengthValidator_text": "List must contain at least {0} content items.",
  "Validator_struct_list_index_exceeded_text": "This field muss contain a position value between 1 and {0} for content '{1}'.",
  "Validator_struct_list_index_missing_text": "This field must contain a position value for content '{0}'.",
  "Validator_struct_list_index_duplicate_text": "This field contains the same position value {0} for content '{1}' and '{2}'.",
  "Validator_SiteManagerGroupValidator_text": "Site manager group does not exist.",
  "Validator_ImageWriteInterceptor.unreadableImage_text": "The image could not be read.",
  "Validator_ImageWriteInterceptor.noDimensions_text": "The dimensions of the uploaded image could not be determined.",
  "Validator_AvailableLocalesConfiguration.DUPLICATE_LOCALE_text": "Multiple definition of the same locale: '{0}' in line {1}",
  "Validator_AvailableLocalesConfiguration.DUPLICATE_LOCALE_DISPLAY_NAME_text": "Locale '{0}' (line {1}) has the same display name as locale '{2}' (line {3}): {4}",
  "Validator_AvailableLocalesConfiguration.INVALID_LOCALE_text": "Invalid locale: '{0}' in line {1} (did you mean: '{2}'?)",
  "Validator_master_version_property_invalid_text": "The master version must be greater than zero and less equal than the checked in version of the master.",
  "Validator_not_localized_text": "Content has not been localized and still contains original text from the master.",
  "Validator_undetermined_localization_state_text": "Localization state of content cannot be determined. Complete review required.",
  "Validator_cross_locale_link_text": "This field links to content '{0}' which is part of a site with a different locale: '{2}'.",
  "Validator_cross_site_link_text": "This field links to content '{0}' which is part of a different site: '{1}'.",
  "Validator_cross_site_locale_link_text": "This field links to content '{0}' which is part of a different site: '{1} - {2}'.",
  "Validator_image_map_image_missing_text": "This field must not be empty.",
  "Validator_image_map_area_link_missing_text": "A target must be set for all hot zones.",
  "Validator_image_map_overlay_configuration_insufficient_text": "At least one 'Display'-Overlay Configuration should be enabled.",
  "Validator_siteName_missing_text": "A site indicator has to define a site name.",
  "Validator_siteName_different_from_master_text": "A site indicator has to have the same site name as its master: '{0}'.",
  "Validator_archive_not_archive_file_text": "The uploaded file is not a zip or jar archive.",
  "Validator_validFrom_is_after_validTo_text": "The Valid From date is after the Valid To date.",
  "Validator_upload-limit-exceeded_text": "The Image size ({0} pixels) exceeds the upload limit of {1} pixels.",
  "Validator_insufficient-memory_text": "The required memory of {0} bytes exceeds the available free memory with {1} bytes. Try again or contact your system administrator.",
  "Validator_unsupported-mime-type_text": "The mime type {0} is not supported.",
  "Validator_cannot-transform-blob_text": "Failed to transform the image blob (see log file for details)."
}, function() {
  this.prototype["Validator_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.validator_check;
  this.prototype["Validator_error_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.validator_error;
  this.prototype["Validator_warn_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.validator_attention;
  this.prototype["Validator_info_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.validator_check;

  com.coremedia.cms.editor.sdk.validation.Validators_properties.INSTANCE = new com.coremedia.cms.editor.sdk.validation.Validators_properties();
});