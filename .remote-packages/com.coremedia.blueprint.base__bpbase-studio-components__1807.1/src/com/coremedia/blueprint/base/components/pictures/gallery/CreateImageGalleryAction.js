Ext.define("com.coremedia.blueprint.base.components.pictures.gallery.CreateImageGalleryAction", function(CreateImageGalleryAction) {/*package com.coremedia.blueprint.base.components.pictures.gallery{
import com.coremedia.blueprint.base.components.pictures.gallery.*;
import net.jangaroo.ext.Exml;
public class CreateImageGalleryAction extends CreateImageGalleryActionBase{

    public*/function CreateImageGalleryAction$(config/*:CreateImageGalleryAction = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.blueprint.base.components.pictures.gallery.CreateImageGalleryActionBase*/ =AS3.cast(com.coremedia.blueprint.base.components.pictures.gallery.CreateImageGalleryActionBase,{});
    var defaults_$1/*:CreateImageGalleryAction*/ =AS3.cast(CreateImageGalleryAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$NgwI(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.blueprint.base.components.pictures.gallery.CreateImageGalleryActionBase",
      constructor: CreateImageGalleryAction$,
      super$NgwI: function() {
        com.coremedia.blueprint.base.components.pictures.gallery.CreateImageGalleryActionBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.blueprint.base.components.pictures.gallery.CreateImageGalleryActionBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
