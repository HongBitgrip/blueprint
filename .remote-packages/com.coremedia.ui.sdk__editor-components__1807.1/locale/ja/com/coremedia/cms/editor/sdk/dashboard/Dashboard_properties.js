/**
 * Localization properties for the dashboard and for default widgets
 */
Ext.define("com.coremedia.cms.editor.sdk.dashboard.Dashboard_properties_ja", {
  override: "com.coremedia.cms.editor.sdk.dashboard.Dashboard_properties",
      /**
       * the title of the dashboard
      */
  "tab_title": "ダッシュボード",
      /**
       * the tooltip of the add widget button
      */
  "header_addWidget_tooltip": "ウィジェットの追加",
      /**
       * the icon of the add widget button

      */
  "more_text": "その他",
  "Action_removeWidget_text": "ウィジェットの削除",
  "WidgetType_text": "ウィジェットの種類",
  "WidgetEditor_notConfigurable_text": "<p>この種類のウィジェットは、いかなる設定オプションもサポートしません。<\/p>",
      /**
       * the action text for the ToggleDashboardAction
 * @see com.coremedia.cms.editor.sdk.dashboard.ToggleDashboardAction
      */
  "Action_showDashboard_text": "ダッシュボード",
      /**
       * the action tooltip for the ToggleDashboardAction
 * @see com.coremedia.cms.editor.sdk.dashboard.ToggleDashboardAction
      */
  "Action_showDashboard_tooltip": "ダッシュボードの表示",
      /**
       * the action icon style class for the ToggleDashboardAction
 * @see com.coremedia.cms.editor.sdk.dashboard.ToggleDashboardAction

 * fixed search widget
      */
  "Widget_FixedSearch_name": "検索",
  "Widget_FixedSearch_description": "このウィジェットは、あらかじめ設定された検索の結果を表示します。",
      /**
       * simple search widget
      */
  "Widget_SimpleSearch_name": "簡易検索",
  "Widget_SimpleSearch_description": "このウィジェットは、カスタマイズ可能な検索の結果を表示します。",
  "Widget_SimpleSearch_contentType_text": "コンテンツの種類",
  "Widget_SimpleSearch_searchText_text": "テキスト検索",
      /**
       * quick search widget
      */
  "Widget_QuickSearch_name": "クイック検索",
  "Widget_QuickSearch_description": "このウィジェットは、検索用語とドキュメントの種類を指定することで、すばやく検索できます。"
}, function() {
});