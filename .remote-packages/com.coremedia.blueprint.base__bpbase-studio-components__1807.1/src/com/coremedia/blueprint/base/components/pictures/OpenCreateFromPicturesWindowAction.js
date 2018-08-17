Ext.define("com.coremedia.blueprint.base.components.pictures.OpenCreateFromPicturesWindowAction", function(OpenCreateFromPicturesWindowAction) {/*package com.coremedia.blueprint.base.components.pictures{
import com.coremedia.blueprint.base.components.pictures.*;
import net.jangaroo.ext.Exml;
public class OpenCreateFromPicturesWindowAction extends OpenCreateFromPicturesWindowActionBase{

    public*/function OpenCreateFromPicturesWindowAction$(config/*:OpenCreateFromPicturesWindowAction = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.blueprint.base.components.pictures.OpenCreateFromPicturesWindowActionBase*/ =AS3.cast(com.coremedia.blueprint.base.components.pictures.OpenCreateFromPicturesWindowActionBase,{});
    var defaults_$1/*:OpenCreateFromPicturesWindowAction*/ =AS3.cast(OpenCreateFromPicturesWindowAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$nwPu(config_$1);
  }/*

    [Bindable]
    public var multiSelect:Boolean;


    [Bindable]
    public var windowConfig:com.coremedia.blueprint.base.components.pictures.CreateFromPicturesWindow;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.blueprint.base.components.pictures.OpenCreateFromPicturesWindowActionBase",
      constructor: OpenCreateFromPicturesWindowAction$,
      super$nwPu: function() {
        com.coremedia.blueprint.base.components.pictures.OpenCreateFromPicturesWindowActionBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        multiSelect: false,
        windowConfig: null
      },
      requires: [
        "com.coremedia.blueprint.base.components.pictures.OpenCreateFromPicturesWindowActionBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
