Ext.define("com.coremedia.blueprint.base.components.pictures.gallery.CreateImageGalleryWindow", function(CreateImageGalleryWindow) {/*package com.coremedia.blueprint.base.components.pictures.gallery{
import com.coremedia.blueprint.base.components.pictures.CreateFromPicturesWindow;
import net.jangaroo.ext.Exml;
import ext.button.Button;
import com.coremedia.blueprint.base.components.pictures.gallery.CreateImageGalleryAction;
import com.coremedia.ui.plugins.BindPropertyPlugin;

    [ResourceBundle('com.coremedia.blueprint.base.components.pictures.gallery.ImageGallery')]
    [ResourceBundle('com.coremedia.cms.editor.Editor')]
/**
 A window for entering the name for a new image gallery containing the images
 that were previously selected in the library.
 When the ok button is pressed, the window is closed and the gallery is created.
 * /
public class CreateImageGalleryWindow extends CreateFromPicturesWindow{

    import com.coremedia.ui.skins.ButtonSkin;

    public static const xtype:String = "com.coremedia.blueprint.base.components.config.createImageGalleryWindow";
    private var preferredName:String;
    private var targetFolder:String;

    // called by generated constructor code
    private*/ function __initialize__(config/*:CreateImageGalleryWindow*/)/*:void*/ {
      this.preferredName$EmnC = this.resourceManager.getString('com.coremedia.blueprint.base.components.pictures.gallery.ImageGallery', 'ImageGalleryDialog_new_gallery');
      this.targetFolder$EmnC = this.resourceManager.getString('com.coremedia.blueprint.base.components.pictures.gallery.ImageGallery', 'image_gallery_action_target_folder');
    }/*

    public*/function CreateImageGalleryWindow$(config/*:CreateImageGalleryWindow = null*/){if(arguments.length<=0)config=null;this.__initialize__$EmnC(config);
    var config_$1/*:com.coremedia.blueprint.base.components.pictures.CreateFromPicturesWindow*/ =AS3.cast(com.coremedia.blueprint.base.components.pictures.CreateFromPicturesWindow,{});
    var defaults_$1/*:CreateImageGalleryWindow*/ =AS3.cast(CreateImageGalleryWindow,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"title" , this.resourceManager.getString('com.coremedia.blueprint.base.components.pictures.gallery.ImageGallery', 'ImageGalleryDialog_new_gallery'));
    config_$1["id"] = "imageGalleryWindow";
    AS3.setBindable(config_$1,"contentTypeName" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.blueprint.base.components.pictures.gallery.ImageGallery', 'image_gallery_action_target_content_type')));
    AS3.setBindable(config_$1,"targetFolder" ,net.jangaroo.ext.Exml.asString( this.targetFolder$EmnC));
    AS3.setBindable(config_$1,"preferredName" ,net.jangaroo.ext.Exml.asString( this.preferredName$EmnC));
    AS3.setBindable(config_$1,"textFieldLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.blueprint.base.components.pictures.gallery.ImageGallery', 'ImageGalleryDialog_new_image_gallery')));
    AS3.setBindable(config_$1,"textFieldEmptyText" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.blueprint.base.components.pictures.gallery.ImageGallery', 'ImageGalleryDialog_new_image_gallery_empty_text')));
    AS3.setBindable(config_$1,"dataviewLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.blueprint.base.components.pictures.gallery.ImageGallery', 'ImageGalleryDialog_preview_label')));
    var button_44_5_$1/*:ext.button.Button*/ =AS3.cast(Ext.button.Button,{});
    button_44_5_$1.itemId = "okBtn";
    button_44_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.FOOTER_PRIMARY.getSkin());
    AS3.setBindable(button_44_5_$1,"scale" , "small");
    AS3.setBindable(button_44_5_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'CreateFolder_dialog_ok_button')));
    var bpb$components_CreateImageGalleryAction_49_9_$1/*:com.coremedia.blueprint.base.components.pictures.gallery.CreateImageGalleryAction*/ =AS3.cast(com.coremedia.blueprint.base.components.pictures.gallery.CreateImageGalleryAction,{});
    AS3.setBindable(bpb$components_CreateImageGalleryAction_49_9_$1,"viewModel" , this.getViewModel2(this.preferredName$EmnC, this.targetFolder$EmnC, AS3.getBindable(config,"selectedPictures")));
    AS3.setBindable(bpb$components_CreateImageGalleryAction_49_9_$1,"callback" ,AS3.bind( this,"close"));
    button_44_5_$1.baseAction = new com.coremedia.blueprint.base.components.pictures.gallery.CreateImageGalleryAction(bpb$components_CreateImageGalleryAction_49_9_$1);
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
    this.super$EmnC(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.blueprint.base.components.pictures.CreateFromPicturesWindow",
      alias: "widget.com.coremedia.blueprint.base.components.config.createImageGalleryWindow",
      preferredName$EmnC: null,
      targetFolder$EmnC: null,
      __initialize__$EmnC: __initialize__,
      constructor: CreateImageGalleryWindow$,
      super$EmnC: function() {
        com.coremedia.blueprint.base.components.pictures.CreateFromPicturesWindow.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "Ext.button.Button",
        "com.coremedia.blueprint.base.components.pictures.CreateFromPicturesWindow",
        "com.coremedia.blueprint.base.components.pictures.gallery.ImageGallery_properties",
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.ui.plugins.BindPropertyPlugin",
        "com.coremedia.ui.skins.ButtonSkin",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.blueprint.base.components.pictures.gallery.CreateImageGalleryAction"]
    };
});
