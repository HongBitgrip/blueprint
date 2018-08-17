Ext.define("com.coremedia.blueprint.base.components.previewdate.PreviewDateSelectorDialog", function(PreviewDateSelectorDialog) {/*package com.coremedia.blueprint.base.components.previewdate{
import com.coremedia.blueprint.base.components.previewdate.*;
import com.coremedia.cms.editor.sdk.preview.*;
import net.jangaroo.ext.Exml;
import ext.layout.container.AnchorLayout;
import ext.button.Button;
import com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePlugin;

    [ResourceBundle('com.coremedia.blueprint.base.components.previewdate.PreviewDate')]
    [ResourceBundle('com.coremedia.cms.editor.Editor')]
/**
 Configures the preview date and time.
 * /
public class PreviewDateSelectorDialog extends PreviewDateSelectorDialogBase{

    import com.coremedia.ui.data.ValueExpression;
    import com.coremedia.ui.skins.ButtonSkin;
    import com.coremedia.ui.skins.WindowSkin;

    public static const xtype:String = "com.coremedia.blueprint.base.components.config.previewDateSelectorDialog";

    public*/function PreviewDateSelectorDialog$(config/*:PreviewDateSelectorDialog = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.blueprint.base.components.previewdate.PreviewDateSelectorDialogBase*/ =AS3.cast(com.coremedia.blueprint.base.components.previewdate.PreviewDateSelectorDialogBase,{});
    var defaults_$1/*:PreviewDateSelectorDialog*/ =AS3.cast(PreviewDateSelectorDialog,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"title" , this.resourceManager.getString('com.coremedia.blueprint.base.components.previewdate.PreviewDate', 'DateTimeSelector_title'));
    AS3.setBindable(config_$1,"width" , 500);
    config_$1.stateId = "previewDataSelectorDialogState";
    AS3.setBindable(config_$1,"stateful" , true);
    config_$1.modal = true;
    config_$1.resizable = false;
    config_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.WindowSkin.GRID_200.getSkin());
    config_$1.constrainHeader = true;
    var bpb$components_PreviewDateSelector_48_5_$1/*: com.coremedia.blueprint.base.components.previewdate.PreviewDateSelector*/ =AS3.cast(com.coremedia.blueprint.base.components.previewdate.PreviewDateSelector,{});
    bpb$components_PreviewDateSelector_48_5_$1.itemId = "previewDateSelector";
    AS3.setBindable(bpb$components_PreviewDateSelector_48_5_$1,"previewPanel" , AS3.getBindable(config,"previewPanel"));
    AS3.setBindable(bpb$components_PreviewDateSelector_48_5_$1,"dateValueExpression" , AS3.getBindable(config,"dateValueExpression"));
    AS3.setBindable(bpb$components_PreviewDateSelector_48_5_$1,"dummyValueExpression" , AS3.getBindable(config,"dummyValueExpression"));
    AS3.setBindable(bpb$components_PreviewDateSelector_48_5_$1,"dateTimePropertyFieldValidValueExpression" , this.getPreviewDateSelectorValidValueExpression());
    config_$1.items = [bpb$components_PreviewDateSelector_48_5_$1];
    var layout_Anchor_55_5_$1/*:ext.layout.container.AnchorLayout*/ =AS3.cast(Ext.layout.container.Anchor,{});
    AS3.setBindable(config_$1,"layout" , layout_Anchor_55_5_$1);
    var button_58_5_$1/*:ext.button.Button*/ =AS3.cast(Ext.button.Button,{});
    button_58_5_$1.itemId = "okBtn";
    button_58_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.FOOTER_PRIMARY.getSkin());
    AS3.setBindable(button_58_5_$1,"scale" , "small");
    AS3.setBindable(button_58_5_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'btn_ok')));
    AS3.setBindable(button_58_5_$1,"handler" ,AS3.bind( this,"okPressed"));
    var editor_BindDisablePlugin_64_9_$1/*:com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePlugin,{});
    AS3.setBindable(editor_BindDisablePlugin_64_9_$1,"forceReadOnlyValueExpression" , this.getPreviewDateSelectorValidValueExpression());
    editor_BindDisablePlugin_64_9_$1.transformer = function(value/*:Boolean*/)/*:Boolean*/ { return !value; };
    button_58_5_$1.plugins = [editor_BindDisablePlugin_64_9_$1];
    config_$1.buttons = [button_58_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$h$Ev(config_$1);
  }/*

    [Bindable]
    public var dateValueExpression:ValueExpression;

    [Bindable]
    public var dummyValueExpression:ValueExpression;

    [Bindable]
    public var previewPanel:com.coremedia.cms.editor.sdk.preview.PreviewPanel;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.blueprint.base.components.previewdate.PreviewDateSelectorDialogBase",
      alias: "widget.com.coremedia.blueprint.base.components.config.previewDateSelectorDialog",
      constructor: PreviewDateSelectorDialog$,
      super$h$Ev: function() {
        com.coremedia.blueprint.base.components.previewdate.PreviewDateSelectorDialogBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        dateValueExpression: null,
        dummyValueExpression: null,
        previewPanel: null
      },
      requires: [
        "Ext.button.Button",
        "Ext.layout.container.Anchor",
        "com.coremedia.blueprint.base.components.previewdate.PreviewDateSelectorDialogBase",
        "com.coremedia.blueprint.base.components.previewdate.PreviewDate_properties",
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePlugin",
        "com.coremedia.ui.skins.ButtonSkin",
        "com.coremedia.ui.skins.WindowSkin",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.blueprint.base.components.previewdate.PreviewDateSelector"]
    };
});
