Ext.define("com.coremedia.cms.studio.im.ImageMapPanel", function(ImageMapPanel) {/*package com.coremedia.cms.studio.im{
import com.coremedia.cms.studio.im.*;
import net.jangaroo.ext.Exml;

public class ImageMapPanel extends ImageMapPanelBase{

    public static const xtype:String = "com.coremedia.cms.studio.im.config.imageMapPanel";

    public*/function ImageMapPanel$(config/*:ImageMapPanel = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.studio.im.ImageMapPanelBase*/ =AS3.cast(com.coremedia.cms.studio.im.ImageMapPanelBase,{});
    var defaults_$1/*:ImageMapPanel*/ =AS3.cast(ImageMapPanel,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$X5yM(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.studio.im.ImageMapPanelBase",
      alias: "widget.com.coremedia.cms.studio.im.config.imageMapPanel",
      constructor: ImageMapPanel$,
      super$X5yM: function() {
        com.coremedia.cms.studio.im.ImageMapPanelBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.cms.studio.im.ImageMapPanelBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
