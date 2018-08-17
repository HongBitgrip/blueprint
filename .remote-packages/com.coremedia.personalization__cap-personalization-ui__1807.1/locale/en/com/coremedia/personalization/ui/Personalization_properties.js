/**
 * Properties class for ResourceBundle "Personalization".
 */
Ext.define("com.coremedia.personalization.ui.Personalization_properties", {

  requires: [
    "com.coremedia.icons.CoreIcons_properties"
  ],
      /**
       * General i18n properties
      */
  "p13n_date_format": "m/d/Y",
  "p13n_time_format": "g:i A",
  "p13n_hour_format": "g",
  "p13n_date_time_format": "m/d/Y g:i A",
      /**
       * General UI Definitions
      */
  "p13n_confirm_yes": "Yes",
  "p13n_confirm_no": "No",
  "p13n_conditions_and": "and",
  "p13n_conditions_or": "or",
  "p13n_conditions_conjunction_and": "and",
  "p13n_conditions_conjunction_or": "or",
  "p13n_addCondition": "Add Condition",
  "p13n_deleteCondition_tooltip": "Delete the condition",
  "p13n_selectionRuleList_description": "Content selected by matching conditions",
  "p13n_newRule": "Add New Rule",
  "p13n_save": "Save",
  "p13n_deleteRule": "Delete This Rule",
  "p13n_confirmDeleteRule": "Do you really want to delete this rule?",
  "p13n_ruleDragDrop_tooltip": "Drag and drop this rule",
  "p13n_selectContent_tooltip": "Select content for this rule",
  "p13n_moveRuleUp_tooltip": "Move this rule upwards",
  "p13n_moveRuleDown_tooltip": "Move this rule downwards",
  "p13n_noRulesAvailable": "You haven't defined any conditions yet",
  "p13n_emptyContent": "Please select a content",
  "p13n_dropZone": "Drag a content item here from the Library.",
  "p13n_loadingInfo": "Loading data...",
  "p13n_expandAllButton": "Show All Conditions",
  "p13n_collapseAllButton": "Hide All Conditions",
      /**
       * Operator Definitions
      */
  "p13n_op_less": "less",
  "p13n_op_less_equal": "less or equal",
  "p13n_op_equal": "equal",
  "p13n_op_not_equal": "not equal",
  "p13n_op_greater_equal": "greater or equal",
  "p13n_op_greater": "greater",
  "p13n_op_contains": "contains",
  "p13n_op_contains_not": "contains not",
  "p13n_op_time_less": "before",
  "p13n_op_time_equal": "at",
  "p13n_op_date_time_equal": "on",
  "p13n_op_time_greater": "after",
  "p13n_op_invalid": "Please choose a valid operator",
  "p13n_op_segment_is": "is",
  "p13n_op_segment_is_not": "is not",
  "p13n_op_keyword": "Keyword",
  "p13n_op_operator": "Operator",
  "p13n_op_value": "Value",
  "p13n_op_booleanProperties_is": "is",
  "p13n_op_booleanProperties_isnot": "is not",
  "p13n_Action_deleteContentFromRule_text": "remove",
  "p13n_Action_deleteContentFromRule_tooltip": "Clear the rule's content slot",
      /**
       * RuleContentField
      */
  "p13n_ruleContentField_emptyText": "Drag a content item here from the Library.",
      /**
       * RulePanel
      */
  "p13n_rulePanel_collapse": "Hide Conditions",
  "p13n_rulePanel_expand": "Show Conditions",
  "p13n_rulePanel_deleteRule": "Delete This Rule",
      /**
       * Profile Debugger
      */
  "p13n_profileDebugger_title": "Context Information",
  "p13n_profileDebugger_nodata": "no context data available",
  "p13n_profileDebugger_property_title": "Property",
  "p13n_profileDebugger_value_title": "Value",
      /**
       * SearchQueryHelper
      */
  "p13n_searchQueryHelper_button_text": "Display Search Query Help",
  "p13n_searchQueryHelper_window_title": "Search Query Help",
  "p13n_searchQueryHelper_mouseover_text": "Here you can perform a personalized search query. The search query can be stated by standard search parameter (e.g. \"keyword:sport\") as well as by personalized search function (e.g. containsKeywords()). Search combinations with operators like \"AND/\"OR\" or bracketing are possible<br><b>For further information please click the link with help text below the search query field<\/b>",
      /**
       *#############################################################################################
 * Help text
 *#############################################################################################
      */
  "p13n_searchQueryHelper_window_html_content_key": "p13n_searchQueryHelper-help-en",
  "p13n_dialog_defaultCloseButton_text": "Close",
      /**
       * Errors
      */
  "p13n_warning_invalid_properties": "WARNING: invalid property prefix",
  "p13n_warning_invalid_properties_expected": "expected",
  "p13n_warning_invalid_removed": "Cannot find segment",
  "p13n_invalidConditions": "Invalid Conditions",
  "p13n_invalidConditions_help": "Some Conditions contain invalid or missing data, please make sure that you've filled in all fields of each condition.",
  "p13n_ruleParsingError": "The selected rule can't be properly represented. You can use the editor to modify it.",
  "p13n_rulePropertyMissing": "There is no property for storing rules in the document you've selected.",
  "p13n_error_beanValueExpression": "requires config.bindTo to be set to reference the bean containing the rules to be edited",
  "p13n_error_propertyName": "requires config.propertyName to be set to the name of the property (without the 'properties.' prefix) containing the rules to be edited",
  "p13n_error_conditionItems": "requires config.conditionItems to be supplied",
  "p13n_error_percentage_value": "Invalid value. Please provide a numeric value between 0 and 100.",
  "p13n_error_keywordText": "Invalid keyword. Please use only alphanumeric characters.",
  "p13n_error_valueText": "Invalid value. Please provide a number.",
  "p13n_error_valueText_int": "Invalid value. Please provide a integer number.",
  "p13n_error_propertyPrefix": "config.propertyPrefix must not be null",
  "p13n_error_EnumCondition_configValue": "supplied config.value must not be null",
  "p13n_error_EnumCondition_validValue": "Please choose a valid value.",
  "p13n_error_booleanProperties_validValue": "Please choose a valid value.",
  "p13n_error_ConditionSwitch_editor": "No suitable condition-editor found.",
  "p13n_error_ConditionSwitch_property": "No suitable editor found for property.",
  "p13n_error_ConditionsPanel_item": "ConditionsPanel requires conditionItems to be supplied.",
  "p13n_error_ConditionsPanel_dirtyFlag": "ConditionsPanel requires dirtyFlagExpr to be supplied.",
  "p13n_error_ConditionFrame_item": "supplied conditionItems must not be null or empty.",
  "p13n_error_ConditionsFrame_dirtyFlag": "supplied dirtyFlagExpr must not be null.",
  "p13n_error_ConditionsFrame_confInstance": "cannot create object instances from configuration.",
  "p13n_error_ConditionsFrame_confInstance_xtype": "Is the xtype property correct?",
  "p13n_error_ConditionsFrame_itemConditionName": "itemConditionName property is required in",
  "p13n_error_ConditionsFrame_itemPropertyPrefix": "either itemConditionPattern or itemConditionProperty is required in",
  "p13n_persona_popup_open_menu_button": "Open Persona Menu",
  "p13n_persona_error_screen_label": "Context-Error",
  "p13n_persona_error_screen_text": "The context data cannot be display due to syntactic error. You can use the textfield below to edit the data.",
  "p13n_persona_selector_nothing_selected_label": "No Persona",
  "p13n_persona_selector_close_button_text": "Close",
  "p13n_persona_selector_close_button_tooltip": "Close the persona selector",
  "p13n_persona_selector_open_info_button_tooltip": "Open persona info for {0}",
  "p13n_persona_selector_group_button_tooltip": "Show {0} persona in Library",
  "p13n_persona_popup_info_tab_label": "Overview",
  "p13n_persona_popup_settings_tab_label": "Details",
  "p13n_persona_popup_age": "Age {0}",
  "p13n_persona_popup_implicit_interest_label": "Implicit Interests",
  "p13n_persona_popup_explicit_interest_label": "Explicit Interests",
  "p13n_persona_popup_empty_age": "Age undefined",
  "p13n_persona_popup_empty_implicit": "Implicit interests undefined",
  "p13n_persona_popup_empty_explicit": "Explicit interests undefined",
  "p13n_persona_popup_empty_location": "Location undefined",
  "p13n_persona_popup_grid_grouping_title": "Category",
  "p13n_persona_popup_grid_nodata": "No context data available",
  "p13n_persona_popup_grid_property_title": "Property",
  "p13n_persona_popup_grid_value_title": "Value",
  "p13n_persona_popup_edit_button_text": "Open in Tab",
  "p13n_persona_popup_use_in_preview_button_text": "Activate Persona",
  "p13n_persona_popup_active_tooltip": "This Persona is currently active",
  "p13n_persona_popup_inactive_tooltip": "This Persona is currently inactive"
}, function() {
  this.prototype["p13n_conditions_and_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.add_special_size;
  this.prototype["p13n_conditions_or_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.add_special_size;
  this.prototype["p13n_deleteCondition_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.remove;
  this.prototype["p13n_dropZone_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.create_content;
  /**
   * DeleteContentFromRuleAction
  */
  this.prototype["p13n_Action_deleteContentFromRule_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.remove;

  com.coremedia.personalization.ui.Personalization_properties.INSTANCE = new com.coremedia.personalization.ui.Personalization_properties();
});