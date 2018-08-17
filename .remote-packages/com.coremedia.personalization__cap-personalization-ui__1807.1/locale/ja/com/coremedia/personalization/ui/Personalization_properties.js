/**
 * Properties class for ResourceBundle "Personalization" and Locale "ja".
 */
Ext.define("com.coremedia.personalization.ui.Personalization_properties_ja", {
  override: "com.coremedia.personalization.ui.Personalization_properties",
      /**
       * General i18n properties
      */
  "p13n_date_format": "Y年m月d日",
  "p13n_time_format": "H:i",
  "p13n_hour_format": "H",
  "p13n_date_time_format": "Y年m月d日 H:i",
      /**
       * General UI Definitions
      */
  "p13n_confirm_yes": "はい",
  "p13n_confirm_no": "いいえ",
  "p13n_conditions_and": "AND",
  "p13n_conditions_or": "OR",
  "p13n_conditions_conjunction_and": "AND",
  "p13n_conditions_conjunction_or": "OR",
  "p13n_addCondition": "条件の追加",
  "p13n_selectionRuleList_description": "条件一致で選択されたコンテンツ",
  "p13n_newRule": "新しいルールの追加",
  "p13n_save": "保存",
  "p13n_deleteRule": "このルールを削除する",
  "p13n_confirmDeleteRule": "このルールを削除してもよろしいですか?",
  "p13n_ruleDragDrop_tooltip": "このルールをドラッグアンドドロップ",
  "p13n_selectContent_tooltip": "このルールを適用するコンテンツを選択する",
  "p13n_moveRuleUp_tooltip": "このルールを上に移動する",
  "p13n_moveRuleDown_tooltip": "このルールを下に移動する",
  "p13n_noRulesAvailable": "条件をまだ定義していません",
  "p13n_emptyContent": "コンテンツを選択してください",
  "p13n_dropZone": "ライブラリからここにドキュメントをドラッグします。",
  "p13n_loadingInfo": "データを読み込み中...",
  "p13n_expandAllButton": "すべての条件を表示する",
  "p13n_collapseAllButton": "すべての条件を非表示にする",
      /**
       * Operator Definitions
      */
  "p13n_op_less": "次より小さい",
  "p13n_op_less_equal": "次より小さいか等しい",
  "p13n_op_equal": "次と等しい",
  "p13n_op_not_equal": "次と等しくない",
  "p13n_op_greater_equal": "次より大きいか等しい",
  "p13n_op_greater": "次より大きい",
  "p13n_op_contains": "次を含む",
  "p13n_op_contains_not": "次を含まない",
  "p13n_op_time_less": "次より前",
  "p13n_op_time_equal": "次と等しい",
  "p13n_op_date_time_equal": "次と等しい",
  "p13n_op_time_greater": "次より後",
  "p13n_op_invalid": "有効な演算子を選択してください",
  "p13n_op_segment_is": "次と等しい",
  "p13n_op_segment_is_not": "次に含まれない",
  "p13n_op_keyword": "キーワード",
  "p13n_op_operator": "演算子",
  "p13n_op_value": "値",
  "p13n_op_booleanProperties_is": "次と等しい",
  "p13n_op_booleanProperties_isnot": "次に含まれない",
      /**
       * DeleteContentFromRuleAction
      */
  "p13n_Action_deleteContentFromRule_text": "削除",
  "p13n_Action_deleteContentFromRule_tooltip": "ルールのコンテンツスロットをクリアするには、ここをクリックします。",
      /**
       * RuleContentField
      */
  "p13n_ruleContentField_emptyText": "ライブラリからここにドキュメントをドラッグします。",
      /**
       * RulePanel
      */
  "p13n_rulePanel_collapse": "条件を非表示にする",
  "p13n_rulePanel_expand": "条件を表示する",
  "p13n_rulePanel_deleteRule": "このルールを削除する",
      /**
       * Profile Debugger
      */
  "p13n_profileDebugger_title": "コンテキスト情報",
  "p13n_profileDebugger_nodata": "コンテキストデータがありません",
  "p13n_profileDebugger_property_title": "プロパティ",
  "p13n_profileDebugger_value_title": "値",
      /**
       * SearchQueryHelper
      */
  "p13n_searchQueryHelper_button_text": "検索クエリのヘルプを表示する",
  "p13n_searchQueryHelper_window_title": "検索クエリのヘルプ",
  "p13n_searchQueryHelper_mouseover_text": "ここでは、カスマイズされた検索クエリを実行できます。検索クエリは、標準の検索パラメータ（「keyword:sport」など）をはじめ、カスタマイズされた検索関数（containsKeywords()など）で記述できます。「AND/OR」などの演算子や括弧を組み合わせた検索も可能です。<br><b>詳細については、検索クエリフィールドの下のヘルプテキストのリンクをクリックしてください。<\/b>",
  "p13n_searchQueryHelper_window_htmlContentURL": "joo/resources/html-includes/SearchFunctionsHelp.html",
      /**
       * Errors
      */
  "p13n_warning_invalid_properties": "警告：無効なプロパティプレフィックス",
  "p13n_warning_invalid_properties_expected": "予期される",
  "p13n_warning_invalid_removed": "セグメントが見つかりません。",
  "p13n_invalidConditions": "無効な条件",
  "p13n_invalidConditions_help": "一部の条件に無効なデータが含まれるか、データが欠落しています。各条件のすべてのフィールドに入力するようにしてください。",
  "p13n_ruleParsingError": "選択したルールを適切に表せません。エディターを使用して変更できます。",
  "p13n_rulePropertyMissing": "選択したドキュメントにルールを保存するプロパティが見つかりません",
  "p13n_error_beanValueExpression": "config.bindToを、編集対象のルールを含むBeanを参照するように設定する必要があります",
  "p13n_error_propertyName": "config.propertyNameを、編集対象のルールを含むプロパティの名前に（「properties.」のプレフィックスを除いて）設定する必要があります。",
  "p13n_error_conditionItems": "config.conditionItemsを追加する必要があります",
  "p13n_error_percentage_value": "無効な値。0〜100の数値を入力してください。",
  "p13n_error_keywordText": "無効なキーワード。英数字のみを使用してください。",
  "p13n_error_valueText": "無効な値。数値を入力してください。",
  "p13n_error_valueText_int": "無効な値。整数を入力してください。",
  "p13n_error_propertyPrefix": "config.propertyPrefixはNULLにできません",
  "p13n_error_EnumCondition_configValue": "supplied config.valueはNULLにできません",
  "p13n_error_EnumCondition_validValue": "有効な値を選択してください",
  "p13n_error_booleanProperties_validValue": "有効な値を選択してください",
  "p13n_error_ConditionSwitch_editor": "適切な条件エディターが見つかりません。",
  "p13n_error_ConditionSwitch_property": "適切なプロパティエディターが見つかりません。",
  "p13n_error_ConditionsPanel_item": "ConditionsPanelはconditionItemsを必要としています",
  "p13n_error_ConditionsPanel_dirtyFlag": "ConditionsPanelはdirtyFlagExprを必要としています",
  "p13n_error_ConditionFrame_item": "指定したconditionItemsはNullまたは空にできません",
  "p13n_error_ConditionsFrame_dirtyFlag": "指定したdirtyFlagExprはNULLにできません",
  "p13n_error_ConditionsFrame_confInstance": "設定からオブジェクトインスタンスを作成できません",
  "p13n_error_ConditionsFrame_confInstance_xtype": "xtypeのプロパティは正しいですか?",
  "p13n_error_ConditionsFrame_itemConditionName": "itemConditionNameのプロパティが必要です",
  "p13n_error_ConditionsFrame_itemPropertyPrefix": "itemConditionPatternまたはitemConditionPropertyのいずれかが必要です",
  "p13n_persona_selector_nothing_selected_label": "ペルソナなし",
  "p13n_persona_selector_close_button_text": "閉じる",
  "p13n_persona_selector_close_button_tooltip": "ペルソナセレクターを閉じる",
  "p13n_persona_selector_open_info_button_tooltip": "{0}のペルソナ情報を開く",
  "p13n_persona_selector_group_button_tooltip": "ライブラリに{0}のペルソナを表示する",
  "p13n_persona_popup_title": "ペルソナ情報：{0}",
  "p13n_persona_popup_info_tab_label": "概要",
  "p13n_persona_popup_settings_tab_label": "詳細",
  "p13n_persona_popup_age": "年齢 {0}",
  "p13n_persona_popup_implicit_interest_label": "潜在的な興味・関心",
  "p13n_persona_popup_explicit_interest_label": "明示的な興味・関心",
  "p13n_persona_popup_empty_age": "[年齢が未定義]",
  "p13n_persona_popup_empty_implicit": "[潜在的な興味・関心が未定義]",
  "p13n_persona_popup_empty_explicit": "[明示的な興味・関心が未定義]",
  "p13n_persona_popup_empty_location": "[場所が未定義]",
  "p13n_persona_popup_grid_grouping_title": "カテゴリ",
  "p13n_persona_popup_grid_nodata": "コンテキストデータがありません",
  "p13n_persona_popup_grid_property_title": "プロパティ",
  "p13n_persona_popup_grid_value_title": "値",
  "p13n_persona_popup_edit_button_text": "タブで開く",
  "p13n_persona_popup_use_in_preview_button_text": "ペルソナをアクティベートにする",
  "p13n_persona_popup_active_tooltip": "このペルソナは現在アクティブです",
  "p13n_persona_popup_inactive_tooltip": "このペルソナは現在アクティブではありません"
}, function() {
});