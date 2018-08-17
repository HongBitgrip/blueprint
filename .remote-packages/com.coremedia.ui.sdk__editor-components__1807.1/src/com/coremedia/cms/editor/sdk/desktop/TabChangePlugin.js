Ext.define("com.coremedia.cms.editor.sdk.desktop.TabChangePlugin", function(TabChangePlugin) {/*package com.coremedia.cms.editor.sdk.desktop{
import com.coremedia.cms.editor.sdk.desktop.*;
/**
 Hook that provides tab change events for the WorkArea and DocumentTabPanel.
 * /
public class TabChangePlugin extends TabChangePluginBase{

    public*/function TabChangePlugin$(config/*:TabChangePlugin = null*/){this.super$GzYC();if(arguments.length<=0)config=null;
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.desktop.TabChangePluginBase",
      constructor: TabChangePlugin$,
      super$GzYC: function() {
        com.coremedia.cms.editor.sdk.desktop.TabChangePluginBase.prototype.constructor.apply(this, arguments);
      },
      requires: ["com.coremedia.cms.editor.sdk.desktop.TabChangePluginBase"]
    };
});
