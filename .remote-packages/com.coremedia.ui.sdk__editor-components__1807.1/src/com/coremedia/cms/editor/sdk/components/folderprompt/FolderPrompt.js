Ext.define("com.coremedia.cms.editor.sdk.components.folderprompt.FolderPrompt", function(FolderPrompt) {/*package com.coremedia.cms.editor.sdk.components.folderprompt{
import com.coremedia.cms.editor.sdk.components.folderprompt.*;
import net.jangaroo.ext.Exml;
import ext.container.Container;
import ext.form.field.DisplayField;
import ext.menu.Separator;
import ext.layout.container.AnchorLayout;
import com.coremedia.ui.plugins.VerticalSpacingPlugin;
import ext.button.Button;

    [ResourceBundle('com.coremedia.cms.editor.Editor')]
public class FolderPrompt extends FolderPromptBase{

    import com.coremedia.cap.content.Content;
    import com.coremedia.ui.skins.ButtonSkin;
    import com.coremedia.ui.skins.WindowSkin;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.folderPrompt";

    public*/function FolderPrompt$(config/*:FolderPrompt = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.components.folderprompt.FolderPromptBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.components.folderprompt.FolderPromptBase,{});
    var defaults_$1/*:FolderPrompt*/ =AS3.cast(FolderPrompt,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"title" , this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'CreateFolder_dialog_title'));
    config_$1.stateId = "folderPromptWindowState";
    AS3.setBindable(config_$1,"stateful" , true);
    AS3.setBindable(config_$1,"layout" , "fit");
    config_$1["id"] = "createFolderPrompt";
    config_$1.modal = true;
    AS3.setBindable(config_$1,"width" , 450);
    AS3.setBindable(config_$1,"minWidth" , 450.0);
    AS3.setBindable(config_$1,"minHeight" , 155.0);
    AS3.setBindable(config_$1,"closable" , true);
    config_$1.resizable = true;
    config_$1.constrainHeader = true;
    config_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.WindowSkin.GRID_200.getSkin());
    var container_49_5_$1/*:ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    AS3.setBindable(container_49_5_$1,"layout" , "anchor");
    AS3.setBindable(container_49_5_$1,"scrollable" , true);
    var displayField_52_9_$1/*:ext.form.field.DisplayField*/ =AS3.cast(Ext.form.field.Display,{});
    AS3.setBindable(displayField_52_9_$1,"value" , this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'CreateFolder_dialog_title_message'));
    var container_54_9_$1/*: ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    container_54_9_$1.itemId = "folder-list";
    container_54_9_$1.anchor = "100%";
    var menuSeparator_57_13_$1/*:ext.menu.Separator*/ =AS3.cast(Ext.menu.Separator,{});
    container_54_9_$1.items = [menuSeparator_57_13_$1];
    var layout_Anchor_60_13_$1/*:ext.layout.container.AnchorLayout*/ =AS3.cast(Ext.layout.container.Anchor,{});
    AS3.setBindable(container_54_9_$1,"layout" , layout_Anchor_60_13_$1);
    var displayField_63_9_$1/*: ext.form.field.DisplayField*/ =AS3.cast(Ext.form.field.Display,{});
    AS3.setBindable(displayField_63_9_$1,"value" , this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'CreateFolder_dialog_confirm_question'));
    container_49_5_$1.items = [displayField_52_9_$1, container_54_9_$1, displayField_63_9_$1];
    var ui_VerticalSpacingPlugin_67_9_$1/*:com.coremedia.ui.plugins.VerticalSpacingPlugin*/ =AS3.cast(com.coremedia.ui.plugins.VerticalSpacingPlugin,{});
    container_49_5_$1.plugins = [ui_VerticalSpacingPlugin_67_9_$1];
    config_$1.items = [container_49_5_$1];
    var button_72_5_$1/*:ext.button.Button*/ =AS3.cast(Ext.button.Button,{});
    button_72_5_$1.itemId = "okButton";
    button_72_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.FOOTER_PRIMARY.getSkin());
    AS3.setBindable(button_72_5_$1,"scale" , "small");
    AS3.setBindable(button_72_5_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'dialog_defaultSubmitButton_text')));
    AS3.setBindable(button_72_5_$1,"handler" ,AS3.bind( this,"okPressed"));
    var button_77_5_$1/*: ext.button.Button*/ =AS3.cast(Ext.button.Button,{});
    button_77_5_$1.itemId = "cancelButton";
    button_77_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.FOOTER_SECONDARY.getSkin());
    AS3.setBindable(button_77_5_$1,"scale" , "small");
    AS3.setBindable(button_77_5_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'dialog_defaultCancelButton_text')));
    AS3.setBindable(button_77_5_$1,"handler" ,AS3.bind( this,"cancelPressed"));
    config_$1.buttons = [button_72_5_$1, button_77_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$OE9G(config_$1);
  }/*

    /**
     * The base folder where the subfolders should be created into.
     * /
    [Bindable]
    public var baseFolder:Content;

    /** The folders to create. * /
    [Bindable]
    public var folders:Array;


    /** Callback function to call when ok or cancel is pressed. * /
    [Bindable]
    public var callback:Function;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.components.folderprompt.FolderPromptBase",
      alias: "widget.com.coremedia.cms.editor.sdk.config.folderPrompt",
      constructor: FolderPrompt$,
      super$OE9G: function() {
        com.coremedia.cms.editor.sdk.components.folderprompt.FolderPromptBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        baseFolder: null,
        folders: null,
        callback: null
      },
      requires: [
        "Ext.button.Button",
        "Ext.container.Container",
        "Ext.form.field.Display",
        "Ext.layout.container.Anchor",
        "Ext.menu.Separator",
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.cms.editor.sdk.components.folderprompt.FolderPromptBase",
        "com.coremedia.ui.plugins.VerticalSpacingPlugin",
        "com.coremedia.ui.skins.ButtonSkin",
        "com.coremedia.ui.skins.WindowSkin",
        "net.jangaroo.ext.Exml"
      ]
    };
});
