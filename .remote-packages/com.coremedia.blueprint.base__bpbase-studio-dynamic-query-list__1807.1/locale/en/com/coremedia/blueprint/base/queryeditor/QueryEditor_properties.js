/**
 * Properties class for ResourceBundle "QueryEditor".
 */
Ext.define("com.coremedia.blueprint.base.queryeditor.QueryEditor_properties", {

  "DCQE_label_general": "General",
  "DCQE_label_all": "All",
  "DCQE_label_conditions": "Conditions",
  "DCQE_label_query": "Query",
  "DCQE_label_number_of_results": "Number of Results",
  "DCQE_label_switch_to_expert_view": "Switch to Expert View",
  "DCQE_label_revert_expert_changes": "Revert Changes",
  "DCQE_label_switch_to_assistant_view": "Switch to Assistant View",
  "DCQE_label_delete_all_conditions": "Delete All Conditions",
  "DCQE_label_selection_of_document_types": "Selection of Content Types",
  "DCQE_label_sorting_search_query": "Sorting of the Search Results",
  "DCQE_label_code_errors": "Your Code Contains Errors.",
  "DCQE_label_show_help": "Show Help",
  "DCQE_label_possible_conditions": "Possible Conditions",
  "DCQE_title_condition_group_attributes": "Attributes",
  "DCQE_title_condition_group_reactions": "Reactions",
  "DCQE_title_document_types": "Selection of Content Types",
  "DCQE_label_document_types_CMVideo": "Videos",
  "DCQE_label_document_types_CMArticle": "Articles",
  "DCQE_label_document_types_CMPicture": "Pictures",
  "DCQE_label_document_types_CMGallery": "Galleries",
  "DCQE_label_document_types_CMChannel": "Pages",
  "DCQE_label_query_title": "Search Query",
  "DCQE_condition_target_title": "The Content Must Apply To:",
  "DCQE_tooltip_deletethis": "Delete this condition",
  "DCQE_text_how_many": "How many items should be displayed in the list?",
  "DCQE_text_add_condition": "Add Condition",
  "DCQE_option_default": "Choose",
      /**
       * Publication condition
      */
  "DCQE_label_condition_pubdate": "Time",
  "DCQE_label_publication_time": "The content items have been published",
  "DCQE_text_publication_date_same_day": "on the same day",
  "DCQE_text_publication_date_day_before": "on the day before",
  "DCQE_text_publication_date_week_before": "the week before",
  "DCQE_text_publication_date_last_month": "last month",
      /**
       * Modification condition
      */
  "DCQE_label_condition_freshness": "Modification Date",
  "DCQE_label_modification_time": "The content items have been modified",
  "DCQE_text_modification_date_same_day": "today",
  "DCQE_text_modification_date_seven_days": "the last 7 days",
  "DCQE_text_modification_date_thirty_days": "the last 30 days",
  "DCQE_text_sorting_field_freshness": "modification date",
  "DCQE_text_sorting_value_freshness_asc": "oldest",
  "DCQE_text_sorting_value_freshness_desc": "newest",
      /**
       * Taxonomies
      */
  "DCQE_label_condition_subjecttaxonomy": "Tag (Subject)",
  "DCQE_text_sorting_field_subjecttaxonomy": "subject tag",
  "DCQE_text_sorting_value_subjecttaxonomy_asc": "ascending",
  "DCQE_text_sorting_value_subjecttaxonomy_desc": "descending",
  "DCQE_label_condition_locationtaxonomy": "Tag (Location)",
  "DCQE_text_sorting_field_locationtaxonomy": "location tag",
  "DCQE_text_sorting_value_locationtaxonomy_asc": "ascending",
  "DCQE_text_sorting_value_locationtaxonomy_desc": "descending",
      /**
       * Linking Taxonomies
      */
  "DCQE_label_condition_contextTaxonomies": "Tag Context",
  "DCQE_text_linking_taxonomies_linked_by": "The content items should have the same tag like the context used for this query list.",
      /**
       * Document link list
      */
  "DCQE_label_condition_documents": "Context",
  "DCQE_label_add_document_by_drag": "Add a page context by dragging it from Library here.",
  "DCQE_text_sorting_field_documents": "content name",
  "DCQE_text_sorting_value_documents_asc": "oldest",
  "DCQE_text_sorting_value_documents_desc": "newest",
  "DCQE_tooltip_removedocument": "Remove content items from the list",
      /**
       * Keywords condition
      */
  "DCQE_label_condition_keywords": "Tags",
  "DCQE_text_docs_should_contain": "The content items should contain",
  "DCQE_text_following_keywords": "of the following tags:",
  "DCQE_text_enter_keywords": "Enter tags here.",
  "DCQE_option_all": "all",
  "DCQE_option_any": "any",
      /**
       * Comments condition
      */
  "DCQE_label_condition_comments": "Comments",
  "DCQE_text_docs_should_comment": "The content items should have been commented at least",
  "DCQE_text_times": "times.",
      /**
       * File path condition
      */
  "DCQE_label_condition_folderpath": "File Path",
  "DCQE_label_add_folder_by_drag": "Add a folder by dragging it from Library here.",
  "DCQE_text_docs_should_be_in_folders": "The content items should be in one of the following folders:",
  "DCQE_tooltip_removefolder": "Remove folder from the list",
      /**
       * Sorting

 * sorting field:
 * DCQE_text_sorting_field_
 *   + struct subproperty name (with dots replaced with underscore)
      */
  "DCQE_text_sorting_field_pubdate": "publication time",
  "DCQE_text_sorting_field_comments": "comments",
      /**
       * sorting direction:
 * DCQE_text_sorting_value_
 *   + struct subproperty name (with dots replaced with underscore)
 *   + asc/desc
      */
  "DCQE_text_sorting_value_pubdate_asc": "oldest",
  "DCQE_text_sorting_value_pubdate_desc": "newest",
  "DCQE_text_sorting_value_comments_asc": "least commented",
  "DCQE_text_sorting_value_comments_desc": "most commented",
  "DCQE_label_sort1": "By what should the search results be sorted?",
  "DCQE_label_sort2": "By which order should the search results be sorted?",
      /**
       *Delete all
      */
  "DCQE_delete_condition_title": "Delete All Conditions",
  "DCQE_delete_condition_msg": "Do you really want to delete all conditions?",
  "DCQE_delete_condition_buttonText": "Delete",
      /**
       *Help
      */
  "DCQE_help_title": "Help for Conditions",
  "DCQE_open_in_tab": "Open in Tab",
  "DCQE_read_only": "Element name not visible (ID: {0})",
  "DCQE_limit_min_value": "1"
}, function() {

  com.coremedia.blueprint.base.queryeditor.QueryEditor_properties.INSTANCE = new com.coremedia.blueprint.base.queryeditor.QueryEditor_properties();
});