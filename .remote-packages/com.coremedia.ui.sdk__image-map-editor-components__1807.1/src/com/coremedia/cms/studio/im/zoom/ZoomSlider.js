Ext.define("com.coremedia.cms.studio.im.zoom.ZoomSlider", function(ZoomSlider) {/*package com.coremedia.cms.studio.im.zoom{
import com.coremedia.cms.studio.im.zoom.*;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.plugins.BindPropertyPlugin;
/**
 Slider component that is used for preview scaling. The given value expression is expected
 to hold the zoom factor as a number between 0 and 1 with two decimal digit precision.
 * /
public class ZoomSlider extends ZoomSliderBase{

    import com.coremedia.ui.data.ValueExpression;

    public static const xtype:String = "com.coremedia.cms.studio.im.config.zoomSlider";

    /**
     * Minimum zoom value (percent).
     * /
    public static const MIN_VALUE:uint = 10;

    /**
     * Maximum zoom value (percent).
     * /
    public static const MAX_VALUE:uint = 100;

    public*/function ZoomSlider$(config/*:ZoomSlider = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.studio.im.zoom.ZoomSliderBase*/ =AS3.cast(com.coremedia.cms.studio.im.zoom.ZoomSliderBase,{});
    var defaults_$1/*:ZoomSlider*/ =AS3.cast(ZoomSlider,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"height" , 200);
    config_$1.vertical = true;
    AS3.setBindable(config_$1,"minValue" , ZoomSlider.MIN_VALUE);
    AS3.setBindable(config_$1,"maxValue" , ZoomSlider.MAX_VALUE);
    var ui_BindPropertyPlugin_45_5_$1/*:com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_45_5_$1.bidirectional = false;
    ui_BindPropertyPlugin_45_5_$1.bindTo = AS3.getBindable(config,"zoomValueExpression");
    ui_BindPropertyPlugin_45_5_$1.transformer = function(value/*:Number*/)/*:Number*/ {return value*100;};
    var im_ZoomSliderTip_48_5_$1/*: com.coremedia.cms.studio.im.zoom.ZoomSliderTip*/ =AS3.cast(com.coremedia.cms.studio.im.zoom.ZoomSliderTip,{});
    config_$1.plugins = [ui_BindPropertyPlugin_45_5_$1, im_ZoomSliderTip_48_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$Wy6Y(config_$1);
  }/*

    /**
     * Value expression holding the zoom factor. Expected value is a number between 0 and 1
     * with two decimal digit precision.
     * /
    [Bindable]
    public var zoomValueExpression:ValueExpression;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.studio.im.zoom.ZoomSliderBase",
      alias: "widget.com.coremedia.cms.studio.im.config.zoomSlider",
      constructor: ZoomSlider$,
      super$Wy6Y: function() {
        com.coremedia.cms.studio.im.zoom.ZoomSliderBase.prototype.constructor.apply(this, arguments);
      },
      config: {zoomValueExpression: null},
      statics: {
        MIN_VALUE: 10,
        MAX_VALUE: 100
      },
      requires: [
        "com.coremedia.cms.studio.im.zoom.ZoomSliderBase",
        "com.coremedia.ui.plugins.BindPropertyPlugin",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.cms.studio.im.zoom.ZoomSliderTip"]
    };
});
