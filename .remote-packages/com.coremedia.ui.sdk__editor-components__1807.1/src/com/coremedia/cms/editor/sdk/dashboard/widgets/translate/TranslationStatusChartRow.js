Ext.define("com.coremedia.cms.editor.sdk.dashboard.widgets.translate.TranslationStatusChartRow", function(TranslationStatusChartRow) {/*package com.coremedia.cms.editor.sdk.dashboard.widgets.translate{
import com.coremedia.cms.editor.sdk.dashboard.widgets.translate.*;
import net.jangaroo.ext.Exml;
import ext.form.field.DisplayField;
import com.coremedia.ui.plugins.AddQuickTipPlugin;
import ext.container.Container;
import ext.layout.container.HBoxLayout;

    [ResourceBundle('com.coremedia.cms.editor.Editor')]
public class TranslationStatusChartRow extends TranslationStatusChartRowBase{

    import com.coremedia.ui.util.BEMUtils;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.translationStatusChartRow";

    public static const TRANSLATION_STATUS_CHART_BAR_BLOCK:String = "translation-status-chart-bar";
    public static const TRANSLATION_STATUS_CHART_BAR_HIGHLIGHTED:String =*/function TRANSLATION_STATUS_CHART_BAR_HIGHLIGHTED$static_(){TranslationStatusChartRow.TRANSLATION_STATUS_CHART_BAR_HIGHLIGHTED=( com.coremedia.ui.util.BEMUtils.getModifierClassName(TranslationStatusChartRow.TRANSLATION_STATUS_CHART_BAR_BLOCK, "highlighted"));}/*;
    public static const TRANSLATION_STATUS_CHART_BAR_ANIMATED:String =*/function TRANSLATION_STATUS_CHART_BAR_ANIMATED$static_(){TranslationStatusChartRow.TRANSLATION_STATUS_CHART_BAR_ANIMATED=( com.coremedia.ui.util.BEMUtils.getModifierClassName(TranslationStatusChartRow.TRANSLATION_STATUS_CHART_BAR_BLOCK, "animated"));}/*;

    public*/function TranslationStatusChartRow$(config/*:TranslationStatusChartRow = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.dashboard.widgets.translate.TranslationStatusChartRowBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.dashboard.widgets.translate.TranslationStatusChartRowBase,{});
    var defaults_$1/*:TranslationStatusChartRow*/ =AS3.cast(TranslationStatusChartRow,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.handler =AS3.bind( this,"showLibrary");
    var displayField_30_5_$1/*:ext.form.field.DisplayField*/ =AS3.cast(Ext.form.field.Display,{});
    AS3.setBindable(displayField_30_5_$1,"width" , com.coremedia.cms.editor.sdk.dashboard.widgets.translate.TranslationStatusChartRowBase.TEXT_LABEL_WIDTH);
    AS3.setBindable(displayField_30_5_$1,"value" , this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'Filter_TranslationStatus_status_' + AS3.getBindable(config,"translationState") + '_text'));
    var ui_AddQuickTipPlugin_33_9_$1/*:com.coremedia.ui.plugins.AddQuickTipPlugin*/ =AS3.cast(com.coremedia.ui.plugins.AddQuickTipPlugin,{});
    AS3.setBindable(ui_AddQuickTipPlugin_33_9_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'Filter_TranslationStatus_status_' + AS3.getBindable(config,"translationState") + '_tooltip')));
    displayField_30_5_$1.plugins = [ui_AddQuickTipPlugin_33_9_$1];
    var displayField_38_5_$1/*: ext.form.field.DisplayField*/ =AS3.cast(Ext.form.field.Display,{});
    displayField_38_5_$1.itemId = "countDisplayField";
    AS3.setBindable(displayField_38_5_$1,"width" , com.coremedia.cms.editor.sdk.dashboard.widgets.translate.TranslationStatusChartRowBase.COUNT_LABEL_WIDTH);
    AS3.setBindable(displayField_38_5_$1,"margin" , "0 " + com.coremedia.cms.editor.sdk.dashboard.widgets.translate.TranslationStatusChartRowBase.COUNT_LABEL_MARGIN_RIGHT + " 0 0");
    AS3.setBindable(displayField_38_5_$1,"value" , com.coremedia.cms.editor.sdk.dashboard.widgets.translate.TranslationStatusChartRowBase.abbreviateCount(AS3.getBindable(config,"count")));
    var ui_AddQuickTipPlugin_43_9_$1/*: com.coremedia.ui.plugins.AddQuickTipPlugin*/ =AS3.cast(com.coremedia.ui.plugins.AddQuickTipPlugin,{});
    AS3.setBindable(ui_AddQuickTipPlugin_43_9_$1,"text" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.dashboard.widgets.translate.TranslationStatusChartRowBase.formatCount(AS3.getBindable(config,"count"))));
    displayField_38_5_$1.plugins = [ui_AddQuickTipPlugin_43_9_$1];
    var container_47_5_$1/*:ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    container_47_5_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.dashboard.widgets.translate.TranslationStatusChartRowBase.BAR_ITEM_ID);
    AS3.setBindable(container_47_5_$1,"width" , 0);
    AS3.setBindable(container_47_5_$1,"margin" , "4 0 0");
    AS3.setBindable(container_47_5_$1,"height" , "15px");
    container_47_5_$1.cls =net.jangaroo.ext.Exml.asString( TranslationStatusChartRow.TRANSLATION_STATUS_CHART_BAR_ANIMATED + ' ' + TranslationStatusChartRow.TRANSLATION_STATUS_CHART_BAR_BLOCK + ' ' + (AS3.getBindable(config,"highlighted") ? TranslationStatusChartRow.TRANSLATION_STATUS_CHART_BAR_HIGHLIGHTED : ''));
    var ui_AddQuickTipPlugin_53_9_$1/*: com.coremedia.ui.plugins.AddQuickTipPlugin*/ =AS3.cast(com.coremedia.ui.plugins.AddQuickTipPlugin,{});
    AS3.setBindable(ui_AddQuickTipPlugin_53_9_$1,"text" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.dashboard.widgets.translate.TranslationStatusChartRowBase.formatPercentage(100 * AS3.getBindable(config,"count") / AS3.getBindable(config,"total"))));
    container_47_5_$1.plugins = [ui_AddQuickTipPlugin_53_9_$1];
    config_$1.items = [displayField_30_5_$1, displayField_38_5_$1, container_47_5_$1];
    var layout_HBox_59_5_$1/*:ext.layout.container.HBoxLayout*/ =AS3.cast(Ext.layout.container.HBox,{});
    AS3.setBindable(config_$1,"layout" , layout_HBox_59_5_$1);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$g7mi(config_$1);
  }/*

    [Bindable]
    public var highlighted:Boolean;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.dashboard.widgets.translate.TranslationStatusChartRowBase",
      alias: "widget.com.coremedia.cms.editor.sdk.config.translationStatusChartRow",
      constructor: TranslationStatusChartRow$,
      super$g7mi: function() {
        com.coremedia.cms.editor.sdk.dashboard.widgets.translate.TranslationStatusChartRowBase.prototype.constructor.apply(this, arguments);
      },
      config: {highlighted: false},
      statics: {
        TRANSLATION_STATUS_CHART_BAR_BLOCK: "translation-status-chart-bar",
        TRANSLATION_STATUS_CHART_BAR_HIGHLIGHTED: undefined,
        TRANSLATION_STATUS_CHART_BAR_ANIMATED: undefined,
        __initStatics__: function() {
          TRANSLATION_STATUS_CHART_BAR_HIGHLIGHTED$static_();
          TRANSLATION_STATUS_CHART_BAR_ANIMATED$static_();
        }
      },
      requires: [
        "Ext.container.Container",
        "Ext.form.field.Display",
        "Ext.layout.container.HBox",
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.cms.editor.sdk.dashboard.widgets.translate.TranslationStatusChartRowBase",
        "com.coremedia.ui.plugins.AddQuickTipPlugin",
        "com.coremedia.ui.util.BEMUtils",
        "net.jangaroo.ext.Exml"
      ]
    };
});
