/**
 * Properties class for ResourceBundle "ImageEditor" and Locale "ja".
 */
Ext.define("com.coremedia.cms.studio.imageeditor.ImageEditor_properties_ja", {
  override: "com.coremedia.cms.studio.imageeditor.ImageEditor_properties",
      /**
       * title of overview panel
      */
  "IEC_overview_title": "概要",
      /**
       * key names of variants -> constructed by concatenating "IEC_variants_" and the variant key from the variants configuration in the document form
 * e.g. variant with key "thumbnail" would have a property key "IEC_variants_thumbnail"
      */
  "IEC_variants_big": "大型",
  "IEC_variants_normal": "標準",
  "IEC_variants_thumbnail": "サムネイル",
      /**
       * message displayed above ImageEditor
      */
  "IEC_label_non_valid_variants": "トリミングされた一部の解像度が低すぎます!",
  "IEC_label_article_image": "記事画像",
  "IEC_label_teaser_images": "ティーザー画像",
  "IEC_label_caption": "キャプション",
      /**
       * information displayed below ImageEditor on Overview panel
      */
  "IEC_label_dimensions_original_size": "元のサイズ",
  "IEC_label_dimensions_width": "幅",
  "IEC_label_dimensions_height": "高さ",
      /**
       * Overview toolbar buttons tooltips and icon css classes
      */
  "IEC_label_reset": "リセット",
  "IEC_action_undo_toolTip": "元に戻す",
  "IEC_action_redo_toolTip": "やり直し",
  "IEC_action_deleteblob_toolTip": "削除",
  "IEC_action_viewcrops_on_toolTip": "トリミング部分の非表示",
  "IEC_action_viewcrops_off_toolTip": "トリミング部分の表示",
  "IEC_action_resetfocal_toolTip": "トリミング部分のサイズを最大化して、すべての焦点をリセットする",
  "IEC_action_fliph_toolTip": "左右反転",
  "IEC_action_flipv_toolTip": "上下反転",
  "IEC_label_rotate": "回転",
  "IEC_label_left": "左へ",
  "IEC_label_right": "右へ",
  "IEC_label_align": "配置指定",
  "IEC_label_color": "露出の変更",
  "IEC_label_brightness": "明るさ",
  "IEC_label_contrast": "コントラスト",
      /**
       * button displayed in VariantToolbar - for individual variant crop editing
      */
  "IEC_action_resetvariant_toolTip": "トリミング部分のサイズを最大化して、焦点をリセットする",
      /**
       * labels for history drop down menu (image transformations)
      */
  "IEC_history_color_brightness": "明るさ",
  "IEC_history_color_contrast": "コントラスト",
  "IEC_history_color_reset_brightness": "明るさのリセット",
  "IEC_history_color_reset_contrast": "コントラストのリセット",
  "IEC_history_reflect_h": "左右反転",
  "IEC_history_reflect_v": "上下反転",
  "IEC_history_rotated_crude": "90°回転",
  "IEC_history_rotated_fine": "適用した微回転",
  "IEC_history_rotated_reset": "回転のリセット",
  "IEC_history_crops_changed_overview": "概要のトリミングの変更",
  "IEC_history_crops_changed_variant": "バリエーションのトリミングの変更",
  "IEC_history_reset": "すべての変更を元に戻す",
  "IEC_history_confirm_title": "変更を元に戻す",
  "IEC_history_confirm_msg": "アップロード以降、この画像に適用した変更をすべて元に戻してもよろしいですか?"
}, function() {
});