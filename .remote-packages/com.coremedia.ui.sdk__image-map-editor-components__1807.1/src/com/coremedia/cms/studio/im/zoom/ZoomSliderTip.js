Ext.define("com.coremedia.cms.studio.im.zoom.ZoomSliderTip", function(ZoomSliderTip) {/*package com.coremedia.cms.studio.im.zoom{
import com.coremedia.cms.studio.im.zoom.*;
import net.jangaroo.ext.Exml;
public class ZoomSliderTip extends ZoomSliderTipBase{

    public*/function ZoomSliderTip$(config/*:ZoomSliderTip = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.studio.im.zoom.ZoomSliderTipBase*/ =AS3.cast(com.coremedia.cms.studio.im.zoom.ZoomSliderTipBase,{});
    var defaults_$1/*:ZoomSliderTip*/ =AS3.cast(ZoomSliderTip,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$eukP(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.studio.im.zoom.ZoomSliderTipBase",
      constructor: ZoomSliderTip$,
      super$eukP: function() {
        com.coremedia.cms.studio.im.zoom.ZoomSliderTipBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.cms.studio.im.zoom.ZoomSliderTipBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
