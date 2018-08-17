Ext.define("com.coremedia.ui.plugins.BadgePlugin", function(BadgePlugin) {/*package com.coremedia.ui.plugins{
import com.coremedia.ui.plugins.*;
import net.jangaroo.ext.Exml;
/**
 A plugin that add a badge as a visual element to the top-right corner of the component.
 * /
public class BadgePlugin extends BadgePluginBase{

    public static const ptype:String = "badge-plugin";

    public*/function BadgePlugin$(config/*:BadgePlugin = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.ui.plugins.BadgePluginBase*/ =AS3.cast(com.coremedia.ui.plugins.BadgePluginBase,{});
    var defaults_$1/*:BadgePlugin*/ =AS3.cast(BadgePlugin,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$zIWa(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.plugins.BadgePluginBase",
      constructor: BadgePlugin$,
      super$zIWa: function() {
        com.coremedia.ui.plugins.BadgePluginBase.prototype.constructor.apply(this, arguments);
      },
      statics: {ptype: "badge-plugin"},
      requires: [
        "com.coremedia.ui.plugins.BadgePluginBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
