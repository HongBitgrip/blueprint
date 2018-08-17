Ext.define("com.coremedia.blueprint.base.components.previewdate.PreviewDateSelectorButton", function(PreviewDateSelectorButton) {/*package com.coremedia.blueprint.base.components.previewdate{
import com.coremedia.blueprint.base.components.previewdate.*;
import com.coremedia.cms.editor.sdk.preview.*;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.actions.OpenDialogAction;
import com.coremedia.ui.plugins.BindPropertyPlugin;
import com.coremedia.cms.editor.sdk.desktop.reusability.ReusabilityComponentStatePlugin;

    [ResourceBundle('com.coremedia.blueprint.base.components.previewdate.PreviewDate')]
    [ResourceBundle('com.coremedia.icons.CoreIcons')]
public class PreviewDateSelectorButton extends PreviewDateSelectorButtonBase{

    import com.coremedia.ui.skins.ButtonSkin;

    public static const xtype:String = "com.coremedia.blueprint.base.components.config.previewDateSelectorButton";

    public*/function PreviewDateSelectorButton$(config/*:PreviewDateSelectorButton = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.blueprint.base.components.previewdate.PreviewDateSelectorButtonBase*/ =AS3.cast(com.coremedia.blueprint.base.components.previewdate.PreviewDateSelectorButtonBase,{});
    var defaults_$1/*:PreviewDateSelectorButton*/ =AS3.cast(PreviewDateSelectorButton,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"scale" , "medium");
    config_$1.enableToggle = true;
    config_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.WORKAREA.getSkin());
    AS3.setBindable(config_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.icons.CoreIcons', 'time')));
    AS3.setBindable(config_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.blueprint.base.components.previewdate.PreviewDate', 'DateTimeSelector_tooltip')));
    AS3.setBindable(config_$1,"tooltip" , this.resourceManager.getString('com.coremedia.blueprint.base.components.previewdate.PreviewDate', 'DateTimeSelector_tooltip'));
    var ui_OpenDialogAction_38_5_$1/*:com.coremedia.ui.actions.OpenDialogAction*/ =AS3.cast(com.coremedia.ui.actions.OpenDialogAction,{});
    AS3.setBindable(ui_OpenDialogAction_38_5_$1,"useActionAsAnimationTarget" , true);
    var bpb$components_PreviewDateSelectorDialog_40_9_$1/*: com.coremedia.blueprint.base.components.previewdate.PreviewDateSelectorDialog*/ =AS3.cast(com.coremedia.blueprint.base.components.previewdate.PreviewDateSelectorDialog,{});
    AS3.setBindable(bpb$components_PreviewDateSelectorDialog_40_9_$1,"previewPanel" , AS3.getBindable(config,"previewPanel"));
    AS3.setBindable(bpb$components_PreviewDateSelectorDialog_40_9_$1,"dateValueExpression" , this.getDateExpression());
    AS3.setBindable(bpb$components_PreviewDateSelectorDialog_40_9_$1,"dummyValueExpression" , this.getDummyExpression());
    AS3.setBindable(ui_OpenDialogAction_38_5_$1,"dialog" , bpb$components_PreviewDateSelectorDialog_40_9_$1);
    config_$1.baseAction = new com.coremedia.ui.actions.OpenDialogAction(ui_OpenDialogAction_38_5_$1);
    var ui_BindPropertyPlugin_47_5_$1/*:com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_47_5_$1.componentProperty = "disabled";
    ui_BindPropertyPlugin_47_5_$1.bindTo = com.coremedia.blueprint.base.components.previewdate.PreviewDateSelectorButtonBase.getDisabledValueExpression(AS3.getBindable(config,"previewPanel"));
    var editor_ReusabilityComponentStatePlugin_49_5_$1/*:com.coremedia.cms.editor.sdk.desktop.reusability.ReusabilityComponentStatePlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.desktop.reusability.ReusabilityComponentStatePlugin,{});
    editor_ReusabilityComponentStatePlugin_49_5_$1.stateId =net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"itemId","DUMMY"));
    editor_ReusabilityComponentStatePlugin_49_5_$1.bindTo = AS3.getBindable(AS3.getBindable(config,"previewPanel"),"bindTo","DUMMY");
    editor_ReusabilityComponentStatePlugin_49_5_$1.events = [com.coremedia.blueprint.base.components.previewdate.PreviewDateSelectorButtonBase.DATE_CHANGED_EVENT];
    editor_ReusabilityComponentStatePlugin_49_5_$1.applyStateFn =AS3.bind( this,"applyReusabilityState");
    editor_ReusabilityComponentStatePlugin_49_5_$1.saveStateFn =AS3.bind( this,"saveReusabilityState");
    config_$1.plugins = [ui_BindPropertyPlugin_47_5_$1, editor_ReusabilityComponentStatePlugin_49_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$_1sZ(config_$1);
  }/*

    /**
     The preview panel into whose toolbar this button is plugged.
     * /
    [Bindable]
    public var previewPanel:com.coremedia.cms.editor.sdk.preview.PreviewPanel;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.blueprint.base.components.previewdate.PreviewDateSelectorButtonBase",
      alias: "widget.com.coremedia.blueprint.base.components.config.previewDateSelectorButton",
      constructor: PreviewDateSelectorButton$,
      super$_1sZ: function() {
        com.coremedia.blueprint.base.components.previewdate.PreviewDateSelectorButtonBase.prototype.constructor.apply(this, arguments);
      },
      config: {previewPanel: null},
      requires: [
        "com.coremedia.blueprint.base.components.previewdate.PreviewDateSelectorButtonBase",
        "com.coremedia.blueprint.base.components.previewdate.PreviewDate_properties",
        "com.coremedia.cms.editor.sdk.desktop.reusability.ReusabilityComponentStatePlugin",
        "com.coremedia.icons.CoreIcons_properties",
        "com.coremedia.ui.actions.OpenDialogAction",
        "com.coremedia.ui.plugins.BindPropertyPlugin",
        "com.coremedia.ui.skins.ButtonSkin",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.blueprint.base.components.previewdate.PreviewDateSelectorDialog"]
    };
});
