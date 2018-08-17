Ext.define("com.coremedia.blueprint.base.components.pictures.gallery.OpenCreateImageGalleryWindowAction", function(OpenCreateImageGalleryWindowAction) {/*package com.coremedia.blueprint.base.components.pictures.gallery{
import com.coremedia.blueprint.base.components.pictures.OpenCreateFromPicturesWindowAction;
import net.jangaroo.ext.Exml;
import com.coremedia.blueprint.base.components.pictures.gallery.CreateImageGalleryWindow;

    [ResourceBundle('com.coremedia.blueprint.base.components.pictures.gallery.ImageGallery')]
    [ResourceBundle('com.coremedia.icons.CoreIcons')]
/**
 Action for opening the image gallery window.
 * /
public class OpenCreateImageGalleryWindowAction extends OpenCreateFromPicturesWindowAction{

    import mx.resources.ResourceManager;

    public*/function OpenCreateImageGalleryWindowAction$(config/*:OpenCreateImageGalleryWindowAction = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:com.coremedia.blueprint.base.components.pictures.OpenCreateFromPicturesWindowAction*/ =AS3.cast(com.coremedia.blueprint.base.components.pictures.OpenCreateFromPicturesWindowAction,{});
    var defaults_$1/*:OpenCreateImageGalleryWindowAction*/ =AS3.cast(OpenCreateImageGalleryWindowAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( mx.resources.ResourceManager.getInstance().getString('com.coremedia.icons.CoreIcons', 'create_type_image_gallery')));
    AS3.setBindable(config_$1,"text" ,net.jangaroo.ext.Exml.asString( mx.resources.ResourceManager.getInstance().getString('com.coremedia.blueprint.base.components.pictures.gallery.ImageGallery', 'CreateImageGalleryAction_text')));
    AS3.setBindable(config_$1,"tooltip" , mx.resources.ResourceManager.getInstance().getString('com.coremedia.blueprint.base.components.pictures.gallery.ImageGallery', 'CreateImageGalleryAction_tooltip'));
    AS3.setBindable(config_$1,"multiSelect" , true);
    var bpb$components_CreateImageGalleryWindow_26_5_$1/*:com.coremedia.blueprint.base.components.pictures.gallery.CreateImageGalleryWindow*/ =AS3.cast(com.coremedia.blueprint.base.components.pictures.gallery.CreateImageGalleryWindow,{});
    AS3.setBindable(config_$1,"windowConfig" , bpb$components_CreateImageGalleryWindow_26_5_$1);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$q6OC(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.blueprint.base.components.pictures.OpenCreateFromPicturesWindowAction",
      constructor: OpenCreateImageGalleryWindowAction$,
      super$q6OC: function() {
        com.coremedia.blueprint.base.components.pictures.OpenCreateFromPicturesWindowAction.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.blueprint.base.components.pictures.OpenCreateFromPicturesWindowAction",
        "com.coremedia.blueprint.base.components.pictures.gallery.ImageGallery_properties",
        "com.coremedia.icons.CoreIcons_properties",
        "mx.resources.ResourceManager",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.blueprint.base.components.pictures.gallery.CreateImageGalleryWindow"]
    };
});
