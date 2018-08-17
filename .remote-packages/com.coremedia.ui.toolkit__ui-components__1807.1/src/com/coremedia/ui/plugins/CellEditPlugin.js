Ext.define("com.coremedia.ui.plugins.CellEditPlugin", function(CellEditPlugin) {/*package com.coremedia.ui.plugins{
import com.coremedia.ui.plugins.*;
import net.jangaroo.ext.Exml;
[PublicApi]
/*
  Plugin is used to configure the editing behaviour grids
 * /
public class CellEditPlugin extends CellEditPluginBase{

    public*/function CellEditPlugin$(config/*:CellEditPlugin = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.ui.plugins.CellEditPluginBase*/ =AS3.cast(com.coremedia.ui.plugins.CellEditPluginBase,{});
    var defaults_$1/*:CellEditPlugin*/ =AS3.cast(CellEditPlugin,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$gHQn(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.plugins.CellEditPluginBase",
      metadata: {"": ["PublicApi"]},
      constructor: CellEditPlugin$,
      super$gHQn: function() {
        com.coremedia.ui.plugins.CellEditPluginBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.ui.plugins.CellEditPluginBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
