/**
 * Properties class for ResourceBundle "Personalization" and Locale "de".
 */
Ext.define("com.coremedia.personalization.ui.Personalization_properties_de", {
  override: "com.coremedia.personalization.ui.Personalization_properties",
      /**
       * General i18n properties
      */
  "p13n_date_format": "d.m.Y",
  "p13n_time_format": "H:i",
  "p13n_hour_format": "H",
  "p13n_date_time_format": "d.m.Y H:i",
      /**
       * General UI Definitions
      */
  "p13n_confirm_yes": "Ja",
  "p13n_confirm_no": "Nein",
  "p13n_conditions_and": "und",
  "p13n_conditions_or": "oder",
  "p13n_conditions_conjunction_and": "und",
  "p13n_conditions_conjunction_or": "oder",
  "p13n_addCondition": "Bedingung hinzufügen",
  "p13n_deleteCondition_tooltip": "Bedingung löschen",
  "p13n_selectionRuleList_description": "Inhalte werden anhand der ersten passenden Bedingung ausgewählt",
  "p13n_newRule": "Neue Regel",
  "p13n_save": "Speichern",
  "p13n_deleteRule": "Regel löschen",
  "p13n_confirmDeleteRule": "Wollen Sie diese Regel wirklich löschen?",
  "p13n_ruleDragDrop_tooltip": "Diese Regel verschieben",
  "p13n_selectContent_tooltip": "Inhalt auswählen",
  "p13n_moveRuleUp_tooltip": "Regel nach oben verschieben",
  "p13n_moveRuleDown_tooltip": "Regel nach unten verschieben",
  "p13n_noRulesAvailable": "Sie haben noch keine Bedingung definiert",
  "p13n_emptyContent": "Bitte wählen Sie einen Inhalt aus",
  "p13n_dropZone": "Ziehen Sie Inhalte aus der Bibliothek hierher.",
  "p13n_loadingInfo": "Lade Daten...",
  "p13n_expandAllButton": "Alle Bedingungen einblenden",
  "p13n_collapseAllButton": "Alle Bedingungen ausblenden",
      /**
       * Operator Definitions
      */
  "p13n_op_less": "weniger",
  "p13n_op_less_equal": "weniger oder gleich",
  "p13n_op_equal": "gleich",
  "p13n_op_not_equal": "nicht gleich",
  "p13n_op_greater_equal": "größer oder gleich",
  "p13n_op_greater": "größer",
  "p13n_op_contains": "enthält",
  "p13n_op_contains_not": "enthält nicht",
  "p13n_op_time_less": "vor",
  "p13n_op_time_equal": "um",
  "p13n_op_date_time_equal": "am",
  "p13n_op_time_greater": "nach",
  "p13n_op_invalid": "Bitte wählen Sie einen gültigen Operator",
  "p13n_op_segment_is": "ist",
  "p13n_op_segment_is_not": "ist nicht",
  "p13n_op_keyword": "Keyword",
  "p13n_op_operator": "Operator",
  "p13n_op_value": "Wert",
  "p13n_op_booleanProperties_is": "ist",
  "p13n_op_booleanProperties_isnot": "ist nicht",
      /**
       * DeleteContentFromRuleAction
      */
  "p13n_Action_deleteContentFromRule_text": "Löschen",
  "p13n_Action_deleteContentFromRule_tooltip": "Klicken Sie hier, um den Inhaltsbereich dieser Regel zu leeren.",
      /**
       * RuleContentField
      */
  "p13n_ruleContentField_emptyText": "Ziehen Sie Inhalte aus der Bibliothek hierher.",
      /**
       * RulePanel
      */
  "p13n_rulePanel_collapse": "Bedingungen ausblenden",
  "p13n_rulePanel_expand": "Bedingungen einblenden",
  "p13n_rulePanel_deleteRule": "Regel löschen",
      /**
       * Profile Debugger
      */
  "p13n_profileDebugger_title": "Kontextinformation",
  "p13n_profileDebugger_nodata": "keine Kontextinformation vorhanden",
  "p13n_profileDebugger_property_title": "Eigenschaft",
  "p13n_profileDebugger_value_title": "Wert",
      /**
       * SearchQueryHelper
      */
  "p13n_searchQueryHelper_button_text": "Hilfe zur Suchanfrage anzeigen",
  "p13n_searchQueryHelper_window_title": "Hilfe zur Suchanfrage",
  "p13n_searchQueryHelper_mouseover_text": "Geben Sie hier die personalisierte Suchanfrage an. Die Suchanfrage kann sowohl Standard-Suchanfrageparameter (z.B. \"keyword:Sport\") als auch personalisierte Suchfunktionen (z.B. containsKeywords())) enthalten. Verknüpfungen mit \"AND\"/\"OR\" oder Klammerung sind möglich.<br><b>Für weitere Information klicken Sie bitte auf den Hilfelink unterhalb der Suchanfrage.<\/b>",
      /**
       *#############################################################################################
 * Help text
 *#############################################################################################
      */
  "p13n_searchQueryHelper_window_html_content_key": "p13n_searchQueryHelper-help-de",
  "p13n_dialog_defaultCloseButton_text": "Schließen",
      /**
       * Errors
      */
  "p13n_warning_invalid_properties": "ACHTUNG: ungültiger Property Präfix",
  "p13n_warning_invalid_properties_expected": "erwartet",
  "p13n_warning_invalid_removed": "Segment wurde nicht gefunden.",
  "p13n_invalidConditions": "Ungültige Bedingungen",
  "p13n_invalidConditions_help": "Einige Bedingungen fehlen oder sind ungültig, bitte korrigieren Sie die fehlerhaften Bedingungen.",
  "p13n_ruleParsingError": "Die gespeicherte Regel kann nicht dargestellt werden. Sie können das Textfeld nutzen um die Regel zu bearbeiten.",
  "p13n_rulePropertyMissing": "Fehler, es konnte keine passende Eigenschaft im aktuellen Inhalt zur Speicherung der Personalisierungsregel gefunden werden.",
  "p13n_error_beanValueExpression": "Benötigt config.bindTo, um die Bean zu referenzieren, die die zu bearbeitenden Regeln enthält.",
  "p13n_error_propertyName": "Benötigt config.propertyName, um mit dem Namen der Property gesetzt werden zu können (ohne 'properties.' Präfix), die die zu bearbeitenden Regeln enthält.",
  "p13n_error_conditionItems": "benötigt config.conditionItems um übergeben zu werden",
  "p13n_error_percentage_value": "Ungültiger Wert. Geben Sie eine numerische Zahl zwischen 0 und 100 ein.",
  "p13n_error_keywordText": "Ungültiges Keyword. Bitte verwenden Sie nur alphanumerische Buchstaben.",
  "p13n_error_valueText": "Ungültiger Wert. Bitte geben Sie eine Zahl ein.",
  "p13n_error_valueText_int": "Ungültiger Wert. Bitte geben Sie nur ganze Zahlen ein.",
  "p13n_error_propertyPrefix": "Die config.propertyPrefix darf nicht null gesetzt sein.",
  "p13n_error_EnumCondition_configValue": "Die übergebene config.value darf nicht null gesetzt sein.",
  "p13n_error_EnumCondition_validValue": "Bitte wählen Sie einen gültigen Wert.",
  "p13n_error_booleanProperties_validValue": "Bitte wählen Sie einen gültigen Wert.",
  "p13n_error_ConditionSwitch_editor": "Keinen passenden condition-editor gefunden.",
  "p13n_error_ConditionSwitch_property": "Keinen Editor für die Property gefunden.",
  "p13n_error_ConditionsPanel_item": "ConditionsPanel benötigt conditionItems um übergeben zu werden.",
  "p13n_error_ConditionsPanel_dirtyFlag": "ConditionsPanel benötigt dirtyFlagExpr um übergeben zu werden.",
  "p13n_error_ConditionFrame_item": "Die übergebenen conditionItems dürfen nicht leer sein oder null enthalten.",
  "p13n_error_ConditionsFrame_dirtyFlag": "Die übergebene dirtyFlagExpr darf nicht null gesetzt sein.",
  "p13n_error_ConditionsFrame_confInstance": "Es können keine Objektinstanzen von der Konfiguration erzeugt werden.",
  "p13n_error_ConditionsFrame_confInstance_xtype": "Ist die xtype Property korrekt?",
  "p13n_error_ConditionsFrame_itemConditionName": "Die itemConditionName Property wird benötigt in",
  "p13n_error_ConditionsFrame_itemPropertyPrefix": "Es wird entweder die itemConditionPattern oder die itemConditionProperty benötigt in",
  "p13n_persona_popup_open_menu_button": "Persona Menü öffnen",
  "p13n_persona_error_screen_label": "Kontext-Fehler",
  "p13n_persona_error_screen_text": "Die gespeicherten Kontext Daten können nicht dargestellt werden. Sie können das Textfeld nutzen um die Daten zu bearbeiten.",
  "p13n_persona_selector_nothing_selected_label": "Keine Persona",
  "p13n_persona_selector_close_button_text": "Schließen",
  "p13n_persona_selector_close_button_tooltip": "Schließt das Persona Auswahlmenü",
  "p13n_persona_selector_open_info_button_tooltip": "Persona Fenster für {0} öffnen",
  "p13n_persona_selector_group_button_tooltip": "Öffne Personas in Bibliothek ({0})",
  "p13n_persona_popup_info_tab_label": "Überblick",
  "p13n_persona_popup_settings_tab_label": "Details",
  "p13n_persona_popup_age": "{0} Jahre",
  "p13n_persona_popup_implicit_interest_label": "Implizite Interessen",
  "p13n_persona_popup_explicit_interest_label": "Explizite Interessen",
  "p13n_persona_popup_empty_age": "Kein Alter definiert",
  "p13n_persona_popup_empty_implicit": "Keine impliziten Interessen definiert",
  "p13n_persona_popup_empty_explicit": "Keine expliziten Interessen definiert",
  "p13n_persona_popup_empty_location": "Kein Ort definiert",
  "p13n_persona_popup_grid_grouping_title": "Kategorie",
  "p13n_persona_popup_grid_nodata": "keine Kontextinformation vorhanden",
  "p13n_persona_popup_grid_property_title": "Eigenschaft",
  "p13n_persona_popup_grid_value_title": "Wert",
  "p13n_persona_popup_edit_button_text": "Im Tab öffnen",
  "p13n_persona_popup_use_in_preview_button_text": "Aktiviere Persona",
  "p13n_persona_popup_active_tooltip": "Diese Persona ist zur Zeit aktiviert.",
  "p13n_persona_popup_inactive_tooltip": "Diese Persona ist zur Zeit nicht aktiviert."
}, function() {
});