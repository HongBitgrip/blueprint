Ext.define("com.coremedia.ui.components.IFrame", function(IFrame) {/*package com.coremedia.ui.components{
import com.coremedia.ui.components.*;
import net.jangaroo.ext.Exml;
public class IFrame extends IFrameComponent{

    public static const xtype:String = "com.coremedia.ui.config.iFrame";

    public*/function IFrame$(config/*:IFrame = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.ui.components.IFrameComponent*/ =AS3.cast(com.coremedia.ui.components.IFrameComponent,{});
    var defaults_$1/*:IFrame*/ =AS3.cast(IFrame,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$w$HO(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.components.IFrameComponent",
      alias: "widget.com.coremedia.ui.config.iFrame",
      constructor: IFrame$,
      super$w$HO: function() {
        com.coremedia.ui.components.IFrameComponent.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.ui.components.IFrameComponent",
        "net.jangaroo.ext.Exml"
      ]
    };
});
