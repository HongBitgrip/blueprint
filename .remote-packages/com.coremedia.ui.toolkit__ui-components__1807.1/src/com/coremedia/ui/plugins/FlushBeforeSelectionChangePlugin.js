Ext.define("com.coremedia.ui.plugins.FlushBeforeSelectionChangePlugin", function(FlushBeforeSelectionChangePlugin) {/*package com.coremedia.ui.plugins{
import com.coremedia.ui.plugins.*;
import net.jangaroo.ext.Exml;
/**

 A plugin to flush the change before changing the selection.
 It currently applies only to a grid panel

 * /
public class FlushBeforeSelectionChangePlugin extends FlushBeforeSelectionChangePluginBase{

    public*/function FlushBeforeSelectionChangePlugin$(config/*:FlushBeforeSelectionChangePlugin = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.ui.plugins.FlushBeforeSelectionChangePluginBase*/ =AS3.cast(com.coremedia.ui.plugins.FlushBeforeSelectionChangePluginBase,{});
    var defaults_$1/*:FlushBeforeSelectionChangePlugin*/ =AS3.cast(FlushBeforeSelectionChangePlugin,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$J8WU(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.plugins.FlushBeforeSelectionChangePluginBase",
      constructor: FlushBeforeSelectionChangePlugin$,
      super$J8WU: function() {
        com.coremedia.ui.plugins.FlushBeforeSelectionChangePluginBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.ui.plugins.FlushBeforeSelectionChangePluginBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
