Ext.define("com.coremedia.cms.editor.sdk.validation.IssuesButton", function(IssuesButton) {/*package com.coremedia.cms.editor.sdk.validation{
import com.coremedia.cms.editor.sdk.validation.*;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.plugins.BindPropertyPlugin;
/**

 A button that shows validation issues.
 This component detects a surrounding td element, attaching
 an appropriate style class if issues were found.

 * /
public class IssuesButton extends IssuesButtonBase{

    import com.coremedia.ui.data.ValueExpression;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.issuesButton";

    public*/function IssuesButton$(config/*:IssuesButton = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.validation.IssuesButtonBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.validation.IssuesButtonBase,{});
    var defaults_$1/*:IssuesButton*/ =AS3.cast(IssuesButton,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.enableToggle = true;
    var ui_BindPropertyPlugin_33_5_$1/*:com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_33_5_$1.componentProperty = "validationState";
    ui_BindPropertyPlugin_33_5_$1.bindTo = AS3.getBindable(config,"issuesVE");
    ui_BindPropertyPlugin_33_5_$1.transformer =AS3.bind( this,"transformValidationState");
    var ui_BindPropertyPlugin_36_5_$1/*: com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_36_5_$1.componentProperty = "tooltip";
    ui_BindPropertyPlugin_36_5_$1.bindTo = AS3.getBindable(config,"issuesVE");
    ui_BindPropertyPlugin_36_5_$1.transformer =AS3.bind( this,"transformDescription");
    var ui_BindPropertyPlugin_39_5_$1/*: com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_39_5_$1.componentProperty = "ariaDescription";
    ui_BindPropertyPlugin_39_5_$1.bindTo = AS3.getBindable(config,"issuesVE");
    ui_BindPropertyPlugin_39_5_$1.transformer =AS3.bind( this,"transformDescription");
    var ui_BindPropertyPlugin_42_5_$1/*: com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_42_5_$1.componentProperty = "iconCls";
    ui_BindPropertyPlugin_42_5_$1.bindTo = AS3.getBindable(config,"issuesVE");
    ui_BindPropertyPlugin_42_5_$1.transformer =AS3.bind( this,"transformIconCls");
    config_$1.plugins = [ui_BindPropertyPlugin_33_5_$1, ui_BindPropertyPlugin_36_5_$1, ui_BindPropertyPlugin_39_5_$1, ui_BindPropertyPlugin_42_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$7Bb7(config_$1);
  }/*

    /**
     * (required)
     * The value expression providing the issues.
     * /
    [Bindable]
    public var issuesVE:ValueExpression;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.validation.IssuesButtonBase",
      alias: "widget.com.coremedia.cms.editor.sdk.config.issuesButton",
      constructor: IssuesButton$,
      super$7Bb7: function() {
        com.coremedia.cms.editor.sdk.validation.IssuesButtonBase.prototype.constructor.apply(this, arguments);
      },
      config: {issuesVE: null},
      requires: [
        "com.coremedia.cms.editor.sdk.validation.IssuesButtonBase",
        "com.coremedia.ui.plugins.BindPropertyPlugin",
        "net.jangaroo.ext.Exml"
      ]
    };
});
