/**
 * Properties class for ResourceBundle "StructPropertyField".
 */
Ext.define("com.coremedia.cms.editor.sdk.premular.fields.struct.StructPropertyField_properties", {

  requires: [
    "com.coremedia.icons.CoreIcons_properties"
  ],
  "Action_addStructProperty_tooltip": "Add {0}",
  "property_text": "Property",
  "property_type_text": "Type",
  "property_value_text": "Value",
  "empty_link_text": "---",
  "empty_string_text": "Enter a string here.",
  "empty_integer_text": "Enter a number here.",
  "empty_date_text": "Enter a date here.",
  "link_drop_zone_text": "Add a content item by dragging it from the Library here.",
  "links_drop_zone_text": "Add content by dragging it from the Library here.",
  "struct_property_count_0": "Struct (empty)",
  "struct_property_count_1": "Struct with 1 property",
  "struct_property_count_pattern_n": "Struct with {0} properties",
  "struct_collection_item_count_pattern_0": "0 {1} elements (empty)",
  "struct_collection_item_count_pattern_1": "1 {1} element",
  "struct_collection_item_count_pattern_n": "{0} {1} elements",
  "nth_item_pattern": "#{0}",
  "propertyType_string_text": "String",
  "propertyType_strings_text": "String List",
  "propertyType_integer_text": "Integer",
  "propertyType_integers_text": "Integer List",
  "propertyType_boolean_text": "Boolean",
  "propertyType_booleans_text": "Boolean List",
  "propertyType_link_text": "Link",
  "propertyType_links_text": "Link List",
  "propertyType_date_text": "Date",
  "propertyType_dates_text": "Date List",
  "propertyType_struct_text": "Struct",
  "propertyType_structs_text": "Struct List",
  "linkProperty_description": "Link to",
  "new_property_text": "new property",
  "property_description_type_text": "Type"
}, function() {
  this.prototype["Action_addStructProperty_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.add;

  com.coremedia.cms.editor.sdk.premular.fields.struct.StructPropertyField_properties.INSTANCE = new com.coremedia.cms.editor.sdk.premular.fields.struct.StructPropertyField_properties();
});