Ext.define("com.coremedia.ui.plugins.StopEventPropagationPlugin", function(StopEventPropagationPlugin) {/*package com.coremedia.ui.plugins{
import com.coremedia.ui.plugins.*;
/*
 A plugin to stop event propagation for certain keyboard key combinations (ctrl/meta-c, ctrl/meta-v, ctrl/meta-x, delete).
 * /
public class StopEventPropagationPlugin extends StopEventPropagationPluginBase{

    public*/function StopEventPropagationPlugin$(config/*:StopEventPropagationPlugin = null*/){this.super$zBeP();if(arguments.length<=0)config=null;
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.plugins.StopEventPropagationPluginBase",
      constructor: StopEventPropagationPlugin$,
      super$zBeP: function() {
        com.coremedia.ui.plugins.StopEventPropagationPluginBase.prototype.constructor.apply(this, arguments);
      },
      requires: ["com.coremedia.ui.plugins.StopEventPropagationPluginBase"]
    };
});
