/**
 * Properties class for ResourceBundle "QueryEditor" and Locale "de".
 */
Ext.define("com.coremedia.blueprint.base.queryeditor.QueryEditor_properties_de", {
  override: "com.coremedia.blueprint.base.queryeditor.QueryEditor_properties",
  "DCQE_label_general": "Allgemein",
  "DCQE_label_all": "Alle",
  "DCQE_label_conditions": "Bedingungen",
  "DCQE_label_query": "Suchanfrage",
  "DCQE_label_number_of_results": "Anzahl der Ergebnisse",
  "DCQE_label_switch_to_expert_view": "Zur Expertenansicht wechseln",
  "DCQE_label_revert_expert_changes": "Änderungen verwerfen",
  "DCQE_label_switch_to_assistant_view": "Zur Assistenzansicht wechseln",
  "DCQE_label_delete_all_conditions": "Alle Bedingungen löschen",
  "DCQE_label_selection_of_document_types": "Auswahl der Inhaltstypen",
  "DCQE_label_sorting_search_query": "Sortierung der Suchergebnisse",
  "DCQE_label_code_errors": "Ihre Suchanfrage enthält Fehler",
  "DCQE_label_show_help": "Hilfe zu Bedingungen anzeigen",
  "DCQE_label_possible_conditions": "Mögliche Bedingungen",
  "DCQE_title_condition_group_attributes": "Merkmale",
  "DCQE_title_condition_group_reactions": "Reaktionen",
  "DCQE_title_document_types": "Auswahl der Inhaltstypen",
  "DCQE_label_document_types_CMVideo": "Videos",
  "DCQE_label_document_types_CMArticle": "Artikel",
  "DCQE_label_document_types_CMPicture": "Bilder",
  "DCQE_label_document_types_CMGallery": "Galerien",
  "DCQE_label_document_types_CMChannel": "Seiten",
  "DCQE_label_query_title": "Suchanfrage",
  "DCQE_condition_target_title": "Für die Inhalte muss gelten:",
  "DCQE_tooltip_deletethis": "Diese Bedingung löschen",
  "DCQE_text_how_many": "Wie viele Elemente sollen angezeigt werden?",
  "DCQE_text_add_condition": "Bedingung hinzufügen",
      /**
       * Publication condition
      */
  "DCQE_label_condition_pubdate": "Publikationszeit",
  "DCQE_label_publication_time": "Die Inhalte wurden publiziert:",
  "DCQE_text_publication_date_same_day": "heute",
  "DCQE_text_publication_date_day_before": "seit gestern",
  "DCQE_text_publication_date_week_before": "in der letzten Woche",
  "DCQE_text_publication_date_last_month": "im letzten Monat",
      /**
       * Keywords condition
      */
  "DCQE_label_condition_keywords": "Schlagworte",
  "DCQE_text_docs_should_contain": "Die Inhalte müssen",
  "DCQE_text_following_keywords": "der folgenden Schlagworte enthalten:",
  "DCQE_text_enter_keywords": "Geben Sie hier die Schlagworte ein.",
      /**
       * Comments condition
      */
  "DCQE_label_condition_comments": "Kommentare",
  "DCQE_text_docs_should_comment": "Die Inhalte müssen wenigstens",
  "DCQE_text_times": "mal kommentiert worden sein.",
      /**
       * File path condition
      */
  "DCQE_label_condition_folderpath": "Ablageort",
  "DCQE_label_add_folder_by_drag": "Ziehen Sie einen Ordner aus der Bibliothek hierher.",
  "DCQE_text_docs_should_be_in_folders": "Die Inhalte liegen in einem oder unterhalb eines der folgenden Ordner:",
  "DCQE_tooltip_removefolder": "Ordner aus der Liste entfernen",
      /**
       * DCQE_text_sorting_value_
 *   + struct subproperty name (with dots replaced with underscore)
 *   + asc/desc
      */
  "DCQE_text_sorting_value_pubdate_asc": "ältesten",
  "DCQE_text_sorting_value_pubdate_desc": "neuesten",
  "DCQE_text_sorting_value_comments_asc": "meistkommentierten",
  "DCQE_text_sorting_value_comments_desc": "am wenigsten kommentierten",
  "DCQE_label_sort1": "Wonach soll die Liste sortiert sein?",
  "DCQE_label_sort2": "In welcher Reihenfolge soll die Liste sortiert sein?",
  "DCQE_option_all": "alle",
  "DCQE_option_any": "eines",
  "DCQE_option_default": "auswählen…",
  "DCQE_text_sorting_field_comments": "Kommentaren",
  "DCQE_text_sorting_field_pubdate": "Publikationszeit",
  "DCQE_label_condition_freshness": "Änderungsdatum",
  "DCQE_label_modification_time": "Die Inhalte wurden geändert:",
  "DCQE_text_modification_date_same_day": "heute",
  "DCQE_text_modification_date_seven_days": "in letzten 7 Tage",
  "DCQE_text_modification_date_thirty_days": "in letzten 30 Tage",
  "DCQE_text_sorting_field_freshness": "Änderungsdatum",
  "DCQE_text_sorting_value_freshness_asc": "ältesten",
  "DCQE_text_sorting_value_freshness_desc": "neuesten",
      /**
       * Taxonomies
      */
  "DCQE_label_condition_subjecttaxonomy": "Schlagwort (Themen)",
  "DCQE_text_sorting_field_subjecttaxonomy": "Themen",
  "DCQE_text_sorting_value_subjecttaxonomy_asc": "absteigend",
  "DCQE_text_sorting_value_subjecttaxonomy_desc": "aufsteigend",
  "DCQE_label_condition_locationtaxonomy": "Schlagwort (Orte)",
  "DCQE_text_sorting_field_locationtaxonomy": "Orte",
  "DCQE_text_sorting_value_locationtaxonomy_asc": "aufsteigend",
  "DCQE_text_sorting_value_locationtaxonomy_desc": "absteigend",
      /**
       * Linking Taxonomies
      */
  "DCQE_text_linking_taxonomies_linked_by": "Die Inhalte sollten dieselben Schlagworte haben wie der Kontext dieser Suche.",
  "DCQE_label_condition_contextTaxonomies": "Schlagwort-Kontext",
      /**
       * Document link list
      */
  "DCQE_label_condition_documents": "Kontext",
  "DCQE_label_add_document_by_drag": "Ziehen Sie einen Kontext aus der Bibliothek hierher.",
  "DCQE_text_docs_should_be_linked_by": "Die Inhalte befinden sich in einem der Kontexte:",
  "DCQE_text_sorting_field_documents": "Inhaltsname",
  "DCQE_text_sorting_value_documents_asc": "älteste",
  "DCQE_text_sorting_value_documents_desc": "neueste",
  "DCQE_tooltip_removedocument": "Alle Inhalte entfernen",
      /**
       *Delete all
      */
  "DCQE_delete_condition_title": "Alle Bedingungen löschen",
  "DCQE_delete_condition_msg": "Möchten Sie wirklich alle Bedingungen löschen?",
  "DCQE_delete_condition_buttonText": "Löschen",
      /**
       *Help
      */
  "DCQE_help_title": "Hilfe zu Bedingungen",
  "DCQE_open_in_tab": "Im Tab öffnen",
  "DCQE_read_only": "Name des Elements nicht sichtbar (ID: {0})"
}, function() {
});