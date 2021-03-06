/**
 * Properties class for ResourceBundle "QueryEditor" and Locale "ja".
 */
Ext.define("com.coremedia.blueprint.base.queryeditor.QueryEditor_properties_ja", {
  override: "com.coremedia.blueprint.base.queryeditor.QueryEditor_properties",
  "DCQE_label_general": "一般",
  "DCQE_label_all": "すべて",
  "DCQE_label_conditions": "条件",
  "DCQE_label_query": "クエリ",
  "DCQE_label_number_of_results": "結果件数",
  "DCQE_label_switch_to_expert_view": "エキスパートビューに切り替え",
  "DCQE_label_revert_expert_changes": "変更を元に戻す",
  "DCQE_label_switch_to_assistant_view": "アシスタントビューに切り替え",
  "DCQE_label_delete_all_conditions": "すべての条件を削除する",
  "DCQE_label_selection_of_document_types": "ドキュメントの種類の選択",
  "DCQE_label_sorting_search_query": "検索クエリの並べ替え",
  "DCQE_label_code_errors": "コードにエラーが存在します。",
  "DCQE_label_show_help": "ヘルプの表示",
  "DCQE_label_possible_conditions": "条件の種類",
  "DCQE_title_condition_group_attributes": "属性",
  "DCQE_title_condition_group_reactions": "処理",
  "DCQE_title_document_types": "ドキュメントの種類の選択",
  "DCQE_label_document_types_CMVideo": "ビデオ",
  "DCQE_label_document_types_CMArticle": "記事",
  "DCQE_label_document_types_CMPicture": "画像",
  "DCQE_label_query_title": "検索クエリ",
  "DCQE_condition_target_title": "ドキュメントの絞込条件：",
  "DCQE_tooltip_deletethis": "この条件を削除する",
  "DCQE_text_there_should_be": "リストに",
  "DCQE_text_results_in_the_list": "検索結果が表示されるはずです。",
  "DCQE_text_add_condition": "Add Condition",
  "DCQE_option_default": "選択してください",
      /**
       * Publication condition
      */
  "DCQE_label_condition_pubdate": "時刻",
  "DCQE_label_publication_time": "ドキュメントが発行されたのが",
  "DCQE_text_publication_date_same_day": "同日",
  "DCQE_text_publication_date_day_before": "1日前",
  "DCQE_text_publication_date_week_before": "1週間前",
  "DCQE_text_publication_date_last_month": "1か月前",
      /**
       * Modification condition
      */
  "DCQE_label_condition_freshness": "変更日",
  "DCQE_label_modification_time": "ドキュメントが変更されたのが",
  "DCQE_text_modification_date_same_day": "今日",
  "DCQE_text_modification_date_seven_days": "過去7日間",
  "DCQE_text_modification_date_thirty_days": "過去30日間",
  "DCQE_text_sorting_field_freshness": "変更日",
  "DCQE_text_sorting_value_freshness_asc": "古い順",
  "DCQE_text_sorting_value_freshness_desc": "新しい順",
      /**
       * Taxonomies
      */
  "DCQE_label_condition_subjecttaxonomy": "分類<br/>（主題）",
  "DCQE_text_sorting_field_subjecttaxonomy": "主題分類",
  "DCQE_text_sorting_value_subjecttaxonomy_asc": "昇順",
  "DCQE_text_sorting_value_subjecttaxonomy_desc": "降順",
  "DCQE_label_condition_locationtaxonomy": "分類<br/>（場所）",
  "DCQE_text_sorting_field_locationtaxonomy": "場所分類",
  "DCQE_text_sorting_value_locationtaxonomy_asc": "昇順",
  "DCQE_text_sorting_value_locationtaxonomy_desc": "降順",
      /**
       * Linking Taxonomies
      */
  "DCQE_label_condition_contextTaxonomies": "Taxonomy<br/>Context",
  "DCQE_text_linking_taxonomies_linked_by": "The documents should have the same keyword like the context used for this query list.",
      /**
       * Document link list
      */
  "DCQE_label_condition_documents": "コンテキスト",
  "DCQE_label_add_document_by_drag": "ライブラリからページコンテキストをドラッグして追加します",
  "DCQE_text_docs_should_be_linked_by": "ドキュメントは以下のコンテキスト内にいれてください：",
  "DCQE_text_sorting_field_documents": "ドキュメント名",
  "DCQE_text_sorting_value_documents_asc": "古い順",
  "DCQE_text_sorting_value_documents_desc": "新しい順",
  "DCQE_tooltip_removedocument": "リストからドキュメントを削除する",
      /**
       * Keywords condition
      */
  "DCQE_label_condition_keywords": "キーワード",
  "DCQE_text_docs_should_contain": "ドキュメントに含まれるべきキーワード数：",
  "DCQE_text_following_keywords": "対象キーワード：",
  "DCQE_text_enter_keywords": "ここにキーワードを入力します。",
  "DCQE_option_all": "すべて",
  "DCQE_option_any": "どれでも",
      /**
       * Comments condition
      */
  "DCQE_label_condition_comments": "コメント",
  "DCQE_text_docs_should_comment": "ドキュメントに対する最小コメント数：",
  "DCQE_text_times": "回",
      /**
       * File path condition
      */
  "DCQE_label_condition_folderpath": "ファイルパス",
  "DCQE_label_add_folder_by_drag": "ライブラリからフォルダをドラッグして追加します",
  "DCQE_text_docs_should_be_in_folders": "ドキュメントは次のフォルダのいずれかに含まれます。",
  "DCQE_tooltip_removefolder": "リストからフォルダを削除する",
      /**
       * Sorting

 * sorting field:
 * DCQE_text_sorting_field_
 *   + struct subproperty name (with dots replaced with underscore)
      */
  "DCQE_text_sorting_field_pubdate": "発行日時",
  "DCQE_text_sorting_field_comments": "コメント数",
      /**
       * sorting direction:
 * DCQE_text_sorting_value_
 *   + struct subproperty name (with dots replaced with underscore)
 *   + asc/desc
      */
  "DCQE_text_sorting_value_pubdate_asc": "古い順",
  "DCQE_text_sorting_value_pubdate_desc": "新しい順",
  "DCQE_text_sorting_value_comments_asc": "コメント数の少ない順",
  "DCQE_text_sorting_value_comments_desc": "コメント数の多い順",
  "DCQE_label_sort1": "リストの並べ替え基準：",
  "DCQE_label_sort2": "並べ替え方法：",
  "DCQE_label_sort3": "order.",
      /**
       *Delete all
      */
  "DCQE_delete_condition_title": "すべての条件を削除する",
  "DCQE_delete_condition_msg": "すべての条件を削除してもよろしいですか?",
      /**
       *Help
      */
  "DCQE_help_title": "条件についてのヘルプ",
  "DCQE_open_in_tab": "タブで開く",
  "DCQE_read_only": "要素名が表示されません（ID：{0}）"
}, function() {
});