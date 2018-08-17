Ext.define("com.coremedia.cms.editor.sdk.dashboard.ConfigureDashboardPluginBase", function(ConfigureDashboardPluginBase) {/*package com.coremedia.cms.editor.sdk.dashboard {

import com.coremedia.cms.editor.sdk.EditorPlugin;
import com.coremedia.cms.editor.sdk.IEditorContext;

/**
 * A plugin to configure the dashboard.
 * /
[PublicApi]
public class ConfigureDashboardPluginBase implements EditorPlugin {
  private var replace:Boolean;
  private var widgets:Array;
  private var types:Array;

  public*/ function ConfigureDashboardPluginBase$(config/*:ConfigureDashboardPlugin = null*/) {if(arguments.length<=0)config=null;
    this.replace$sax6 = AS3.getBindable(config,"replace");
    this.widgets$sax6 = AS3.getBindable(config,"widgets");
    this.types$sax6 = AS3.getBindable(config,"types");
  }/*

  public*/ function init(editorContext/*:IEditorContext*/)/*:void*/ {
    var masterConfiguration/*:DashboardConfiguration*/ = editorContext.getDashboardConfiguration();
    if (this.replace$sax6) {
      // Reset the existing configuration.
      AS3.getBindable(masterConfiguration,"widgets").length = 0;
      AS3.getBindable(masterConfiguration,"types").length = 0;
    }
    
    if (this.widgets$sax6 && this.widgets$sax6.length > 0) {
      // If the first widget does not specify its column, force it
      // into the leftmost column, so that additional widgets are
      // stacked below existing widgets, if any.
      var firstWidgetState/*:WidgetState*/ = AS3.cast(com.coremedia.cms.editor.sdk.dashboard.WidgetState,this.widgets$sax6[0]);
      if (firstWidgetState.column === undefined || firstWidgetState.column === null) {
        firstWidgetState['column'] = 0;
      }

      // Move all widget states to the master configuration.
      for (var i/*:int*/ = 0; i < this.widgets$sax6.length; i++) {
        AS3.getBindable(masterConfiguration,"widgets").push(this.widgets$sax6[i]);
      }
    }

    if (this.types$sax6 && this.types$sax6.length > 0) {
      // Move all widget types to the master configuration.
      for (var j/*:int*/ = 0; j < this.types$sax6.length; j++) {
        AS3.getBindable(masterConfiguration,"types").push(this.types$sax6[j]);
      }
    }
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.cms.editor.sdk.EditorPlugin"],
      metadata: {"": ["PublicApi"]},
      replace$sax6: false,
      widgets$sax6: null,
      types$sax6: null,
      constructor: ConfigureDashboardPluginBase$,
      init: init,
      requires: ["com.coremedia.cms.editor.sdk.EditorPlugin"],
      uses: ["com.coremedia.cms.editor.sdk.dashboard.WidgetState"]
    };
});
