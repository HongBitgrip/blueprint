Ext.define("com.coremedia.cms.editor.controlroom.workflow.ProcessInfoWindow", function(ProcessInfoWindow) {/*package com.coremedia.cms.editor.controlroom.workflow{
import com.coremedia.cms.editor.controlroom.workflow.*;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.plugins.BindPropertyPlugin;
import ext.button.Button;
import com.coremedia.ui.plugins.BindVisibilityPlugin;
import ext.layout.container.FitLayout;

    [ResourceBundle('com.coremedia.cms.editor.controlroom.ControlRoom')]
public class ProcessInfoWindow extends ProcessInfoWindowBase{

    import com.coremedia.cap.workflow.Process;
    import com.coremedia.ui.skins.ButtonSkin;
    import com.coremedia.ui.util.EncodingUtil;

    public static const xtype:String = "com.coremedia.cms.editor.controlroom.config.processInfoWindow";

    public static const ABORT_BUTTON_ITEM_ID:String = "abortButtonItemId";

    public static const CANCEL_BUTTON_ITEM_ID:String = "cancelButtonItemId";

    public*/function ProcessInfoWindow$(config/*:ProcessInfoWindow = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.controlroom.workflow.ProcessInfoWindowBase*/ =AS3.cast(com.coremedia.cms.editor.controlroom.workflow.ProcessInfoWindowBase,{});
    var defaults_$1/*:ProcessInfoWindow*/ =AS3.cast(ProcessInfoWindow,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.stateId = "processInfoWindowState";
    AS3.setBindable(config_$1,"stateful" , true);
    AS3.setBindable(config_$1,"width" , 360);
    AS3.setBindable(config_$1,"height" , 518);
    AS3.setBindable(config_$1,"minWidth" , 200.0);
    AS3.setBindable(config_$1,"minHeight" , 300.0);
    config_$1.constrainHeader = true;
    var ui_BindPropertyPlugin_38_5_$1/*:com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_38_5_$1.componentProperty = "title";
    ui_BindPropertyPlugin_38_5_$1.transformer = com.coremedia.ui.util.EncodingUtil.encodeForHTML;
    ui_BindPropertyPlugin_38_5_$1.bindTo = this.getTitleVE();
    config_$1.plugins = [ui_BindPropertyPlugin_38_5_$1];
    var button_43_5_$1/*:ext.button.Button*/ =AS3.cast(Ext.button.Button,{});
    button_43_5_$1.itemId =net.jangaroo.ext.Exml.asString( ProcessInfoWindow.ABORT_BUTTON_ITEM_ID);
    button_43_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.FOOTER_PRIMARY.getSkin());
    AS3.setBindable(button_43_5_$1,"scale" , "small");
    AS3.setBindable(button_43_5_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'WorkflowInfoWindow_abortButton_label')));
    AS3.setBindable(button_43_5_$1,"handler" ,AS3.bind( this,"abortWorkflow"));
    var ui_BindVisibilityPlugin_49_9_$1/*:com.coremedia.ui.plugins.BindVisibilityPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindVisibilityPlugin,{});
    ui_BindVisibilityPlugin_49_9_$1.bindTo = this.createAbortButtonVisibilityValueExpression();
    button_43_5_$1.plugins = [ui_BindVisibilityPlugin_49_9_$1];
    var button_52_5_$1/*: ext.button.Button*/ =AS3.cast(Ext.button.Button,{});
    button_52_5_$1.itemId =net.jangaroo.ext.Exml.asString( ProcessInfoWindow.CANCEL_BUTTON_ITEM_ID);
    button_52_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.FOOTER_SECONDARY.getSkin());
    AS3.setBindable(button_52_5_$1,"scale" , "small");
    AS3.setBindable(button_52_5_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'WorkflowInfoWindow_closeButton_label')));
    AS3.setBindable(button_52_5_$1,"handler" ,AS3.bind( this,"close"));
    config_$1.buttons = [button_43_5_$1, button_52_5_$1];
    var layout_Fit_59_5_$1/*:ext.layout.container.FitLayout*/ =AS3.cast(Ext.layout.container.Fit,{});
    AS3.setBindable(config_$1,"layout" , layout_Fit_59_5_$1);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$zOmw(config_$1);
  }/*

    [Bindable]
    public var process:Process;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.controlroom.workflow.ProcessInfoWindowBase",
      alias: "widget.com.coremedia.cms.editor.controlroom.config.processInfoWindow",
      constructor: ProcessInfoWindow$,
      super$zOmw: function() {
        com.coremedia.cms.editor.controlroom.workflow.ProcessInfoWindowBase.prototype.constructor.apply(this, arguments);
      },
      config: {process: null},
      statics: {
        ABORT_BUTTON_ITEM_ID: "abortButtonItemId",
        CANCEL_BUTTON_ITEM_ID: "cancelButtonItemId"
      },
      requires: [
        "Ext.button.Button",
        "Ext.layout.container.Fit",
        "com.coremedia.cms.editor.controlroom.ControlRoom_properties",
        "com.coremedia.cms.editor.controlroom.workflow.ProcessInfoWindowBase",
        "com.coremedia.ui.plugins.BindPropertyPlugin",
        "com.coremedia.ui.plugins.BindVisibilityPlugin",
        "com.coremedia.ui.skins.ButtonSkin",
        "com.coremedia.ui.util.EncodingUtil",
        "net.jangaroo.ext.Exml"
      ]
    };
});
