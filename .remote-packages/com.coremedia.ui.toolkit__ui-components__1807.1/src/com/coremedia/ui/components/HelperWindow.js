Ext.define("com.coremedia.ui.components.HelperWindow", function(HelperWindow) {/*package com.coremedia.ui.components{
import ext.window.Window;
import net.jangaroo.ext.Exml;
import ext.layout.container.FitLayout;
import com.coremedia.ui.plugins.BEMPlugin;
/**
 A Window that contains a a help text.
 * /
public class HelperWindow extends Window{

    import com.coremedia.ui.models.bem.BEMBlock;
    import com.coremedia.ui.models.bem.BEMElement;

    public static const xtype:String = "com.coremedia.ui.config.helperWindow";

    private static const*/var BLOCK$static/*:BEMBlock*/;/* =*/function BLOCK$static_(){BLOCK$static=( new com.coremedia.ui.models.bem.BEMBlock("cm-helper-window"));};/*
    private static const*/var ELEMENT_BODY$static/*:BEMElement*/;/* =*/function ELEMENT_BODY$static_(){ELEMENT_BODY$static=( BLOCK$static.createElement("body"));};/*

    public*/function HelperWindow$(config/*:HelperWindow = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:ext.window.Window*/ =AS3.cast(Ext.window.Window,{});
    var defaults_$1/*:HelperWindow*/ =AS3.cast(HelperWindow,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"scrollable" , true);
    config_$1.constrain = true;
    config_$1.constrainHeader = true;
    config_$1.closeAction = "close";
    AS3.setBindable(config_$1,"width" , 560);
    AS3.setBindable(config_$1,"minWidth" , 300.0);
    AS3.setBindable(config_$1,"height" , 300);
    AS3.setBindable(config_$1,"minHeight" , 275.0);
    var layout_Fit_37_5_$1/*:ext.layout.container.FitLayout*/ =AS3.cast(Ext.layout.container.Fit,{});
    AS3.setBindable(config_$1,"layout" , layout_Fit_37_5_$1);
    var object_40_5_$1/*:Object*/ = {};
    object_40_5_$1.url = AS3.getBindable(config,"helpTextUrl");
    object_40_5_$1.autoLoad = true;
    config_$1.loader = object_40_5_$1;
    var ui_BEMPlugin_44_5_$1/*:com.coremedia.ui.plugins.BEMPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BEMPlugin,{});
    AS3.setBindable(ui_BEMPlugin_44_5_$1,"block" , BLOCK$static);
    AS3.setBindable(ui_BEMPlugin_44_5_$1,"bodyElement" , ELEMENT_BODY$static);
    config_$1.plugins = [ui_BEMPlugin_44_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$gv0I(config_$1);
  }/*

    /*
      The url to retrieve the help txt from.
     * /
    [Bindable]
    public var helpTextUrl:String;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.window.Window",
      alias: "widget.com.coremedia.ui.config.helperWindow",
      constructor: HelperWindow$,
      super$gv0I: function() {
        Ext.window.Window.prototype.constructor.apply(this, arguments);
      },
      config: {helpTextUrl: null},
      statics: {
        BLOCK: undefined,
        ELEMENT_BODY: undefined,
        __initStatics__: function() {
          BLOCK$static_();
          ELEMENT_BODY$static_();
        }
      },
      requires: [
        "Ext.layout.container.Fit",
        "Ext.window.Window",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.ui.models.bem.BEMBlock",
        "com.coremedia.ui.plugins.BEMPlugin"
      ]
    };
});
