Ext.define("com.coremedia.ui.components.Anchor", function(Anchor) {/*package com.coremedia.ui.components{
import com.coremedia.ui.components.*;
import net.jangaroo.ext.Exml;
public class Anchor extends AnchorBase{

    public static const xtype:String = "com.coremedia.ui.config.anchor";

    public*/function Anchor$(config/*:Anchor = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.ui.components.AnchorBase*/ =AS3.cast(com.coremedia.ui.components.AnchorBase,{});
    var defaults_$1/*:Anchor*/ =AS3.cast(Anchor,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$SYI9(config_$1);
  }/*

    [Bindable]
    public var target:String;


    [Bindable]
    public var tooltip:String;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.components.AnchorBase",
      alias: "widget.com.coremedia.ui.config.anchor",
      constructor: Anchor$,
      super$SYI9: function() {
        com.coremedia.ui.components.AnchorBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        target: null,
        tooltip: null
      },
      requires: [
        "com.coremedia.ui.components.AnchorBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
