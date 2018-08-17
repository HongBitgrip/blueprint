Ext.define("com.coremedia.cms.editor.sdk.desktop.AriaMainRegionPlugin", function(AriaMainRegionPlugin) {/*package com.coremedia.cms.editor.sdk.desktop{
import com.coremedia.cms.editor.sdk.desktop.*;
/**
 Hook that provides tab change events for the WorkArea and DocumentTabPanel.
 * /
public class AriaMainRegionPlugin extends AriaMainRegionPluginBase{

    public*/function AriaMainRegionPlugin$(config/*:AriaMainRegionPlugin = null*/){this.super$oGtr();if(arguments.length<=0)config=null;
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.desktop.AriaMainRegionPluginBase",
      constructor: AriaMainRegionPlugin$,
      super$oGtr: function() {
        com.coremedia.cms.editor.sdk.desktop.AriaMainRegionPluginBase.prototype.constructor.apply(this, arguments);
      },
      requires: ["com.coremedia.cms.editor.sdk.desktop.AriaMainRegionPluginBase"]
    };
});
