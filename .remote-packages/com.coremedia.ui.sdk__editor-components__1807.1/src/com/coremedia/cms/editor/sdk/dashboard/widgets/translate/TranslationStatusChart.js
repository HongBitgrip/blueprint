Ext.define("com.coremedia.cms.editor.sdk.dashboard.widgets.translate.TranslationStatusChart", function(TranslationStatusChart) {/*package com.coremedia.cms.editor.sdk.dashboard.widgets.translate{
import com.coremedia.cms.editor.sdk.dashboard.widgets.translate.*;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.plugins.BindItemsPlugin;
import ext.layout.container.AnchorLayout;
public class TranslationStatusChart extends TranslationStatusChartBase{

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.translationStatusChart";

    public*/function TranslationStatusChart$(config/*:TranslationStatusChart = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.dashboard.widgets.translate.TranslationStatusChartBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.dashboard.widgets.translate.TranslationStatusChartBase,{});
    var defaults_$1/*:TranslationStatusChart*/ =AS3.cast(TranslationStatusChart,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    var ui_BindItemsPlugin_19_5_$1/*:com.coremedia.ui.plugins.BindItemsPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindItemsPlugin,{});
    AS3.setBindable(ui_BindItemsPlugin_19_5_$1,"valueExpression" , this.getRowConfigsValueExpression());
    AS3.setBindable(ui_BindItemsPlugin_19_5_$1,"reuseComponents" , false);
    config_$1.plugins = [ui_BindItemsPlugin_19_5_$1];
    var layout_Anchor_24_5_$1/*:ext.layout.container.AnchorLayout*/ =AS3.cast(Ext.layout.container.Anchor,{});
    AS3.setBindable(config_$1,"layout" , layout_Anchor_24_5_$1);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$3YhE(config_$1);
  }/*

    [Bindable]
    public var visibleTranslationStates:Array;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.dashboard.widgets.translate.TranslationStatusChartBase",
      alias: "widget.com.coremedia.cms.editor.sdk.config.translationStatusChart",
      constructor: TranslationStatusChart$,
      super$3YhE: function() {
        com.coremedia.cms.editor.sdk.dashboard.widgets.translate.TranslationStatusChartBase.prototype.constructor.apply(this, arguments);
      },
      config: {visibleTranslationStates: null},
      requires: [
        "Ext.layout.container.Anchor",
        "com.coremedia.cms.editor.sdk.dashboard.widgets.translate.TranslationStatusChartBase",
        "com.coremedia.ui.plugins.BindItemsPlugin",
        "net.jangaroo.ext.Exml"
      ]
    };
});
