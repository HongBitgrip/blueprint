Ext.define("com.coremedia.ui.plugins.ResizablePlugin", function(ResizablePlugin) {/*package com.coremedia.ui.plugins{
import com.coremedia.ui.plugins.*;
import net.jangaroo.ext.Exml;
public class ResizablePlugin extends ResizablePluginBase{

    public*/function ResizablePlugin$(config/*:ResizablePlugin = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.ui.plugins.ResizablePluginBase*/ =AS3.cast(com.coremedia.ui.plugins.ResizablePluginBase,{});
    var defaults_$1/*:ResizablePlugin*/ =AS3.cast(ResizablePlugin,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$328i(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.plugins.ResizablePluginBase",
      constructor: ResizablePlugin$,
      super$328i: function() {
        com.coremedia.ui.plugins.ResizablePluginBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.ui.plugins.ResizablePluginBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
