Ext.define("com.coremedia.cms.editor.sdk.dashboard.WidgetSeparator", function(WidgetSeparator) {/*package com.coremedia.cms.editor.sdk.dashboard{
import com.coremedia.cms.editor.sdk.dashboard.*;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.plugins.BEMPlugin;

    [ResourceBundle('com.coremedia.cms.editor.sdk.dashboard.Dashboard')]
    [ResourceBundle('com.coremedia.icons.CoreIcons')]
public class WidgetSeparator extends WidgetSeparatorBase{

    import com.coremedia.ui.models.bem.BEMBlock;
    import com.coremedia.ui.models.bem.BEMElement;
    import com.coremedia.ui.skins.ButtonSkin;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.widgetSeparator";

    private static const*/var BLOCK$static/*:BEMBlock*/;/* =*/function BLOCK$static_(){BLOCK$static=( new com.coremedia.ui.models.bem.BEMBlock("cm-widget-separator"));};/*
    private static const*/var ELEMENT_ICON$static/*:BEMElement*/;/* =*/function ELEMENT_ICON$static_(){ELEMENT_ICON$static=( BLOCK$static.createElement("icon"));};/*

    public*/function WidgetSeparator$(config/*:WidgetSeparator = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.dashboard.WidgetSeparatorBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.dashboard.WidgetSeparatorBase,{});
    var defaults_$1/*:WidgetSeparator*/ =AS3.cast(WidgetSeparator,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.ariaLabel =net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.sdk.dashboard.Dashboard', 'WidgetSeparator_addWidget_tooltip'));
    config_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.SIMPLE_INVERTED.getSkin());
    AS3.setBindable(config_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( ELEMENT_ICON$static.getCSSClass()));
    AS3.setBindable(config_$1,"handler" ,AS3.bind( this,"addWidget"));
    var ui_BEMPlugin_31_5_$1/*:com.coremedia.ui.plugins.BEMPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BEMPlugin,{});
    AS3.setBindable(ui_BEMPlugin_31_5_$1,"block" , BLOCK$static);
    config_$1.plugins = [ui_BEMPlugin_31_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$hpTD(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.dashboard.WidgetSeparatorBase",
      alias: "widget.com.coremedia.cms.editor.sdk.config.widgetSeparator",
      constructor: WidgetSeparator$,
      super$hpTD: function() {
        com.coremedia.cms.editor.sdk.dashboard.WidgetSeparatorBase.prototype.constructor.apply(this, arguments);
      },
      statics: {
        BLOCK: undefined,
        ELEMENT_ICON: undefined,
        __initStatics__: function() {
          BLOCK$static_();
          ELEMENT_ICON$static_();
        }
      },
      requires: [
        "com.coremedia.cms.editor.sdk.dashboard.Dashboard_properties",
        "com.coremedia.cms.editor.sdk.dashboard.WidgetSeparatorBase",
        "com.coremedia.icons.CoreIcons_properties",
        "com.coremedia.ui.models.bem.BEMBlock",
        "com.coremedia.ui.plugins.BEMPlugin",
        "com.coremedia.ui.skins.ButtonSkin",
        "net.jangaroo.ext.Exml"
      ]
    };
});
