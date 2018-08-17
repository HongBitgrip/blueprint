Ext.define("com.coremedia.ui.plugins.BindTooltipPlugin", function(BindTooltipPlugin) {/*package com.coremedia.ui.plugins{
import com.coremedia.ui.plugins.*;
import net.jangaroo.ext.Exml;
/**

 A plugin to bind the tooltip of a button to a value expression.

 * /
public class BindTooltipPlugin extends BindTooltipPluginBase{

    public*/function BindTooltipPlugin$(config/*:BindTooltipPlugin = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.ui.plugins.BindTooltipPluginBase*/ =AS3.cast(com.coremedia.ui.plugins.BindTooltipPluginBase,{});
    var defaults_$1/*:BindTooltipPlugin*/ =AS3.cast(BindTooltipPlugin,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.boundValueChanged =AS3.bind( this,"updateTooltip");
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$Ec37(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.plugins.BindTooltipPluginBase",
      constructor: BindTooltipPlugin$,
      super$Ec37: function() {
        com.coremedia.ui.plugins.BindTooltipPluginBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.ui.plugins.BindTooltipPluginBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
