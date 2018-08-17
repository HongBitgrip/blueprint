Ext.define("com.coremedia.cms.editor.sdk.premular.differencing.OpenDifferencesWindowButton", function(OpenDifferencesWindowButton) {/*package com.coremedia.cms.editor.sdk.premular.differencing{
import com.coremedia.cms.editor.sdk.premular.differencing.*;
import com.coremedia.cms.editor.sdk.premular.PremularBase;
import net.jangaroo.ext.Exml;
import com.coremedia.cms.editor.sdk.actions.OpenReferenceWindowAction;
import com.coremedia.ui.plugins.BindPropertyPlugin;

    [ResourceBundle('com.coremedia.cms.editor.Editor')]
    [ResourceBundle('com.coremedia.icons.CoreIcons')]
/**

 A button that can open a window showing a summary of all differences.

 * /
public class OpenDifferencesWindowButton extends OpenDifferencesWindowButtonBase{

    import com.coremedia.ui.skins.ButtonSkin;

    import mx.resources.ResourceManager;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.openDifferencesWindowButton";

    public*/function OpenDifferencesWindowButton$(config/*:OpenDifferencesWindowButton = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.premular.differencing.OpenDifferencesWindowButtonBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.differencing.OpenDifferencesWindowButtonBase,{});
    var defaults_$1/*:OpenDifferencesWindowButton*/ =AS3.cast(OpenDifferencesWindowButton,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"scale" , "medium");
    config_$1.enableToggle = true;
    config_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.WORKAREA.getSkin());
    config_$1.itemId = "openDifferencesButton";
    AS3.setBindable(config_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'OpenDifferencesWindow_text')));
    config_$1.hasIssuesText =net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'OpenDifferencesWindow_btn_changesMessage'));
    config_$1.hasNoIssuesText =net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'OpenDifferencesWindow_btn_tooltip'));
    AS3.setBindable(config_$1,"issuesVE" , this.getIssuesExpression(config));
    var editor_OpenReferenceWindowAction_49_5_$1/*:com.coremedia.cms.editor.sdk.actions.OpenReferenceWindowAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.OpenReferenceWindowAction,{});
    AS3.setBindable(editor_OpenReferenceWindowAction_49_5_$1,"toggleDialog" , true);
    AS3.setBindable(editor_OpenReferenceWindowAction_49_5_$1,"activateOnToggle" , true);
    AS3.setBindable(editor_OpenReferenceWindowAction_49_5_$1,"useActionAsAnimationTarget" , true);
    var editor_DifferencesWindow_53_9_$1/*: com.coremedia.cms.editor.sdk.premular.differencing.DifferencesWindow*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.differencing.DifferencesWindow,{});
    AS3.setBindable(editor_DifferencesWindow_53_9_$1,"diffManager" , AS3.getBindable(config,"diffManager"));
    AS3.setBindable(editor_DifferencesWindow_53_9_$1,"premular" , AS3.getBindable(config,"premular"));
    AS3.setBindable(editor_DifferencesWindow_53_9_$1,"issuesExpression" , this.getIssuesExpression(config));
    AS3.setBindable(editor_OpenReferenceWindowAction_49_5_$1,"dialog" , editor_DifferencesWindow_53_9_$1);
    config_$1.baseAction = new com.coremedia.cms.editor.sdk.actions.OpenReferenceWindowAction(editor_OpenReferenceWindowAction_49_5_$1);
    var ui_BindPropertyPlugin_60_5_$1/*:com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_60_5_$1.componentProperty = "disabled";
    ui_BindPropertyPlugin_60_5_$1.bindTo = AS3.getBindable(config,"diffManager").getPausedValueExpression();
    config_$1.plugins = [ui_BindPropertyPlugin_60_5_$1];
    config_$1["plugins$at"] = net.jangaroo.ext.Exml.APPEND;
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$46ey(config_$1);
  }/*

    /**
     * the diff manager
     * /
    [Bindable]
    public var diffManager:DiffManager;

    /** the premular * /
    [Bindable]
    public var premular:com.coremedia.cms.editor.sdk.premular.PremularBase;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.premular.differencing.OpenDifferencesWindowButtonBase",
      alias: "widget.com.coremedia.cms.editor.sdk.config.openDifferencesWindowButton",
      constructor: OpenDifferencesWindowButton$,
      super$46ey: function() {
        com.coremedia.cms.editor.sdk.premular.differencing.OpenDifferencesWindowButtonBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        diffManager: null,
        premular: null
      },
      requires: [
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.cms.editor.sdk.premular.differencing.OpenDifferencesWindowButtonBase",
        "com.coremedia.icons.CoreIcons_properties",
        "com.coremedia.ui.plugins.BindPropertyPlugin",
        "com.coremedia.ui.skins.ButtonSkin",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.actions.OpenReferenceWindowAction",
        "com.coremedia.cms.editor.sdk.premular.differencing.DifferencesWindow"
      ]
    };
});
