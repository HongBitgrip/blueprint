Ext.define("com.coremedia.cms.editor.sdk.dashboard.widgets.translate.TranslationStatusWidget", function(TranslationStatusWidget) {/*package com.coremedia.cms.editor.sdk.dashboard.widgets.translate{
import com.coremedia.cms.editor.sdk.dashboard.widgets.translate.*;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.components.ExtendedDisplayField;
import com.coremedia.ui.plugins.BindPropertyPlugin;
import com.coremedia.ui.plugins.AddQuickTipPlugin;
import ext.layout.container.BorderLayout;

    [ResourceBundle('com.coremedia.cms.editor.sdk.dashboard.Dashboard')]
public class TranslationStatusWidget extends TranslationStatusWidgetBase{

    import com.coremedia.cms.editor.sdk.translate.TranslationStatusUtil;
    import com.coremedia.ui.components.ExtendedDisplayField;
    import com.coremedia.ui.data.ValueExpression;
    import com.coremedia.ui.mixins.OverflowBehaviour;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.translationStatusWidget";

    public*/function TranslationStatusWidget$(config/*:TranslationStatusWidget = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.dashboard.widgets.translate.TranslationStatusWidgetBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.dashboard.widgets.translate.TranslationStatusWidgetBase,{});
    var defaults_$1/*:TranslationStatusWidget*/ =AS3.cast(TranslationStatusWidget,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"height" , "100%");
    AS3.setBindable(config_$1,"properties" , "targetSiteId,title");
    var ui_ExtendedDisplayField_27_5_$1/*:com.coremedia.ui.components.ExtendedDisplayField*/ =AS3.cast(com.coremedia.ui.components.ExtendedDisplayField,{});
    AS3.setBindable(ui_ExtendedDisplayField_27_5_$1,"region" , "north");
    AS3.setBindable(ui_ExtendedDisplayField_27_5_$1,"fieldLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.sdk.dashboard.Dashboard', 'Widget_TranslationStatus_masterSiteLabel_text')));
    AS3.setBindable(ui_ExtendedDisplayField_27_5_$1,"overflowBehaviour" , com.coremedia.ui.mixins.OverflowBehaviour.ELLIPSIS);
    var ui_BindPropertyPlugin_31_9_$1/*:com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_31_9_$1.boundValueChanged = function(l/*:ExtendedDisplayField*/, ve/*:ValueExpression*/)/*:void*/ { l.setValue(ve.getValue()); };
    ui_BindPropertyPlugin_31_9_$1.bindTo = this.getMasterSiteDisplayNameValueExpression();
    var ui_AddQuickTipPlugin_34_9_$1/*:com.coremedia.ui.plugins.AddQuickTipPlugin*/ =AS3.cast(com.coremedia.ui.plugins.AddQuickTipPlugin,{});
    AS3.setBindable(ui_AddQuickTipPlugin_34_9_$1,"bindTo" , this.getMasterSiteDisplayNameValueExpression());
    ui_ExtendedDisplayField_27_5_$1.plugins = [ui_BindPropertyPlugin_31_9_$1, ui_AddQuickTipPlugin_34_9_$1];
    var editor_TranslationStatusChart_38_5_$1/*: com.coremedia.cms.editor.sdk.dashboard.widgets.translate.TranslationStatusChart*/ =AS3.cast(com.coremedia.cms.editor.sdk.dashboard.widgets.translate.TranslationStatusChart,{});
    editor_TranslationStatusChart_38_5_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.dashboard.widgets.translate.TranslationStatusWidgetBase.CHART_ITEM_ID);
    AS3.setBindable(editor_TranslationStatusChart_38_5_$1,"region" , "center");
    AS3.setBindable(editor_TranslationStatusChart_38_5_$1,"targetSiteId" ,net.jangaroo.ext.Exml.asString( config.targetSiteId));
    AS3.setBindable(editor_TranslationStatusChart_38_5_$1,"highlightedTranslationStates" , [
                                         com.coremedia.cms.editor.sdk.translate.TranslationStatusUtil.NEW_IN_MASTER,
                                         com.coremedia.cms.editor.sdk.translate.TranslationStatusUtil.NOT_UP_TO_DATE,
                                         com.coremedia.cms.editor.sdk.translate.TranslationStatusUtil.NOT_LOCALIZED_YET]);
    config_$1.items = [ui_ExtendedDisplayField_27_5_$1, editor_TranslationStatusChart_38_5_$1];
    var layout_Border_48_5_$1/*:ext.layout.container.BorderLayout*/ =AS3.cast(Ext.layout.container.Border,{});
    AS3.setBindable(config_$1,"layout" , layout_Border_48_5_$1);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$vsLK(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.dashboard.widgets.translate.TranslationStatusWidgetBase",
      alias: "widget.com.coremedia.cms.editor.sdk.config.translationStatusWidget",
      constructor: TranslationStatusWidget$,
      super$vsLK: function() {
        com.coremedia.cms.editor.sdk.dashboard.widgets.translate.TranslationStatusWidgetBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "Ext.layout.container.Border",
        "com.coremedia.cms.editor.sdk.dashboard.Dashboard_properties",
        "com.coremedia.cms.editor.sdk.dashboard.widgets.translate.TranslationStatusWidgetBase",
        "com.coremedia.ui.components.ExtendedDisplayField",
        "com.coremedia.ui.mixins.OverflowBehaviour",
        "com.coremedia.ui.plugins.AddQuickTipPlugin",
        "com.coremedia.ui.plugins.BindPropertyPlugin",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.dashboard.widgets.translate.TranslationStatusChart",
        "com.coremedia.cms.editor.sdk.translate.TranslationStatusUtil"
      ]
    };
});
