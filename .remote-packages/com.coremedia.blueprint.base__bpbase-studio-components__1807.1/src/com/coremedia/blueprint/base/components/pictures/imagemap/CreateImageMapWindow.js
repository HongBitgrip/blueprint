Ext.define("com.coremedia.blueprint.base.components.pictures.imagemap.CreateImageMapWindow", function(CreateImageMapWindow) {/*package com.coremedia.blueprint.base.components.pictures.imagemap{
import com.coremedia.blueprint.base.components.pictures.CreateFromPicturesWindow;
import net.jangaroo.ext.Exml;
import ext.button.Button;
import com.coremedia.blueprint.base.components.pictures.imagemap.CreateImageMapAction;
import com.coremedia.ui.plugins.BindPropertyPlugin;

    [ResourceBundle('com.coremedia.blueprint.base.components.pictures.imagemap.ImageMap')]
    [ResourceBundle('com.coremedia.cms.editor.Editor')]
/**
 A window for entering the name for a new image map containing the image
 that were previously selected in the library.
 When the ok button is pressed, the window is closed and the image map is created.
 * /
public class CreateImageMapWindow extends CreateFromPicturesWindow{

    import com.coremedia.ui.skins.ButtonSkin;

    public static const xtype:String = "com.coremedia.blueprint.base.components.config.createImageMapWindow";
    private var preferredName:String;
    private var targetFolder:String;

    // called by generated constructor code
    private*/ function __initialize__(config/*:CreateImageMapWindow*/)/*:void*/ {
      this.preferredName$04_j = this.resourceManager.getString('com.coremedia.blueprint.base.components.pictures.imagemap.ImageMap', 'ImageMap_dialog_new_image_map_name');
      this.targetFolder$04_j = this.resourceManager.getString('com.coremedia.blueprint.base.components.pictures.imagemap.ImageMap', 'ImageMap_action_target_folder');
    }/*

    public*/function CreateImageMapWindow$(config/*:CreateImageMapWindow = null*/){if(arguments.length<=0)config=null;this.__initialize__$04_j(config);
    var config_$1/*:com.coremedia.blueprint.base.components.pictures.CreateFromPicturesWindow*/ =AS3.cast(com.coremedia.blueprint.base.components.pictures.CreateFromPicturesWindow,{});
    var defaults_$1/*:CreateImageMapWindow*/ =AS3.cast(CreateImageMapWindow,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"title" , this.resourceManager.getString('com.coremedia.blueprint.base.components.pictures.imagemap.ImageMap', 'ImageMap_dialog_new_image_map_title'));
    config_$1["id"] = "imageMapWindow";
    AS3.setBindable(config_$1,"contentTypeName" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.blueprint.base.components.pictures.imagemap.ImageMap', 'ImageMap_action_target_content_type')));
    AS3.setBindable(config_$1,"targetFolder" ,net.jangaroo.ext.Exml.asString( this.targetFolder$04_j));
    AS3.setBindable(config_$1,"preferredName" ,net.jangaroo.ext.Exml.asString( this.preferredName$04_j));
    AS3.setBindable(config_$1,"textFieldLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.blueprint.base.components.pictures.imagemap.ImageMap', 'ImageMap_dialog_new_image_map_name_label')));
    AS3.setBindable(config_$1,"textFieldEmptyText" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.blueprint.base.components.pictures.imagemap.ImageMap', 'ImageMap_dialog_new_image_map_empty_text')));
    AS3.setBindable(config_$1,"dataviewLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.blueprint.base.components.pictures.imagemap.ImageMap', 'ImageMap_dialog_preview_label')));
    var button_44_5_$1/*:ext.button.Button*/ =AS3.cast(Ext.button.Button,{});
    button_44_5_$1.itemId = "okBtn";
    button_44_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.FOOTER_PRIMARY.getSkin());
    AS3.setBindable(button_44_5_$1,"scale" , "small");
    AS3.setBindable(button_44_5_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'CreateFolder_dialog_ok_button')));
    var bpb$components_CreateImageMapAction_49_9_$1/*:com.coremedia.blueprint.base.components.pictures.imagemap.CreateImageMapAction*/ =AS3.cast(com.coremedia.blueprint.base.components.pictures.imagemap.CreateImageMapAction,{});
    AS3.setBindable(bpb$components_CreateImageMapAction_49_9_$1,"viewModel" , this.getViewModel2(this.preferredName$04_j, this.targetFolder$04_j, AS3.getBindable(config,"selectedPictures")));
    AS3.setBindable(bpb$components_CreateImageMapAction_49_9_$1,"callback" ,AS3.bind( this,"close"));
    button_44_5_$1.baseAction = new com.coremedia.blueprint.base.components.pictures.imagemap.CreateImageMapAction(bpb$components_CreateImageMapAction_49_9_$1);
    var ui_BindPropertyPlugin_54_9_$1/*:com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_54_9_$1.componentProperty = "disabled";
    ui_BindPropertyPlugin_54_9_$1.bindTo = this.isDisabledValueExpression();
    button_44_5_$1.plugins = [ui_BindPropertyPlugin_54_9_$1];
    var button_58_5_$1/*: ext.button.Button*/ =AS3.cast(Ext.button.Button,{});
    button_58_5_$1.itemId = "cancelBtn";
    button_58_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.FOOTER_SECONDARY.getSkin());
    AS3.setBindable(button_58_5_$1,"scale" , "small");
    AS3.setBindable(button_58_5_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'dialog_defaultCancelButton_text')));
    AS3.setBindable(button_58_5_$1,"handler" ,AS3.bind( this,"close"));
    config_$1.buttons = [button_44_5_$1, button_58_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$04_j(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.blueprint.base.components.pictures.CreateFromPicturesWindow",
      alias: "widget.com.coremedia.blueprint.base.components.config.createImageMapWindow",
      preferredName$04_j: null,
      targetFolder$04_j: null,
      __initialize__$04_j: __initialize__,
      constructor: CreateImageMapWindow$,
      super$04_j: function() {
        com.coremedia.blueprint.base.components.pictures.CreateFromPicturesWindow.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "Ext.button.Button",
        "com.coremedia.blueprint.base.components.pictures.CreateFromPicturesWindow",
        "com.coremedia.blueprint.base.components.pictures.imagemap.ImageMap_properties",
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.ui.plugins.BindPropertyPlugin",
        "com.coremedia.ui.skins.ButtonSkin",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.blueprint.base.components.pictures.imagemap.CreateImageMapAction"]
    };
});
