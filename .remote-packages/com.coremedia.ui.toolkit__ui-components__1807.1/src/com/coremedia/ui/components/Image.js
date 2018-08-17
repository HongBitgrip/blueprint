Ext.define("com.coremedia.ui.components.Image", function(Image) {/*package com.coremedia.ui.components{
import com.coremedia.ui.components.*;
import net.jangaroo.ext.Exml;
[PublicApi]
/**
 A component to display an image.
 * /
public class Image extends ImageComponent{

    public static const xtype:String = "com.coremedia.ui.config.image";

    public*/function Image$(config/*:Image = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.ui.components.ImageComponent*/ =AS3.cast(com.coremedia.ui.components.ImageComponent,{});
    var defaults_$1/*:Image*/ =AS3.cast(Image,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$hRq7(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.components.ImageComponent",
      metadata: {"": ["PublicApi"]},
      alias: "widget.com.coremedia.ui.config.image",
      constructor: Image$,
      super$hRq7: function() {
        com.coremedia.ui.components.ImageComponent.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.ui.components.ImageComponent",
        "net.jangaroo.ext.Exml"
      ]
    };
});
