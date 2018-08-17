Ext.define("com.coremedia.blueprint.base.components.pictures.imagemap.OpenCreateImageMapWindowAction", function(OpenCreateImageMapWindowAction) {/*package com.coremedia.blueprint.base.components.pictures.imagemap{
import com.coremedia.blueprint.base.components.pictures.OpenCreateFromPicturesWindowAction;
import net.jangaroo.ext.Exml;
import com.coremedia.blueprint.base.components.pictures.imagemap.CreateImageMapWindow;

    [ResourceBundle('com.coremedia.blueprint.base.components.pictures.imagemap.ImageMap')]
    [ResourceBundle('com.coremedia.icons.CoreIcons')]
/**
 Action for opening the image map window.
 The actions is only enabled if there is a single selection of an image.
 * /
public class OpenCreateImageMapWindowAction extends OpenCreateFromPicturesWindowAction{

    import mx.resources.ResourceManager;

    public*/function OpenCreateImageMapWindowAction$(config/*:OpenCreateImageMapWindowAction = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:com.coremedia.blueprint.base.components.pictures.OpenCreateFromPicturesWindowAction*/ =AS3.cast(com.coremedia.blueprint.base.components.pictures.OpenCreateFromPicturesWindowAction,{});
    var defaults_$1/*:OpenCreateImageMapWindowAction*/ =AS3.cast(OpenCreateImageMapWindowAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( mx.resources.ResourceManager.getInstance().getString('com.coremedia.icons.CoreIcons', 'create_type_image_map')));
    AS3.setBindable(config_$1,"text" ,net.jangaroo.ext.Exml.asString( mx.resources.ResourceManager.getInstance().getString('com.coremedia.blueprint.base.components.pictures.imagemap.ImageMap', 'ImageMap_library_btn_text')));
    AS3.setBindable(config_$1,"tooltip" , mx.resources.ResourceManager.getInstance().getString('com.coremedia.blueprint.base.components.pictures.imagemap.ImageMap', 'ImageMap_library_btn_tooltip'));
    AS3.setBindable(config_$1,"multiSelect" , false);
    var bpb$components_CreateImageMapWindow_27_5_$1/*:com.coremedia.blueprint.base.components.pictures.imagemap.CreateImageMapWindow*/ =AS3.cast(com.coremedia.blueprint.base.components.pictures.imagemap.CreateImageMapWindow,{});
    AS3.setBindable(config_$1,"windowConfig" , bpb$components_CreateImageMapWindow_27_5_$1);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$atuj(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.blueprint.base.components.pictures.OpenCreateFromPicturesWindowAction",
      constructor: OpenCreateImageMapWindowAction$,
      super$atuj: function() {
        com.coremedia.blueprint.base.components.pictures.OpenCreateFromPicturesWindowAction.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.blueprint.base.components.pictures.OpenCreateFromPicturesWindowAction",
        "com.coremedia.blueprint.base.components.pictures.imagemap.ImageMap_properties",
        "com.coremedia.icons.CoreIcons_properties",
        "mx.resources.ResourceManager",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.blueprint.base.components.pictures.imagemap.CreateImageMapWindow"]
    };
});
