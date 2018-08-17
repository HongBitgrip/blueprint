Ext.define("com.coremedia.cms.editor.sdk.desktop.sidepanel.SidePanelPlugin", function(SidePanelPlugin) {/*package com.coremedia.cms.editor.sdk.desktop.sidepanel {

import com.coremedia.cms.editor.sdk.EditorPlugin;
import com.coremedia.cms.editor.sdk.IEditorContext;

import ext.Component;

public class SidePanelPlugin implements EditorPlugin {

  /**
   * A list of SidePanelComponents to be registered at the SidePanelManager.
   * @see sidePanelManager
   * /
  [ExtConfig]
  [ArrayElementType("ext.Component")]
  public var components:Array;

  public*/ function SidePanelPlugin$(config/*:SidePanelPlugin = null*/) {if(arguments.length<=0)config=null;
    this.components = config.components;
  }/*

  public*/ function init(editorContext/*:IEditorContext*/)/*:void*/ {
    if (this.components) {
      for (var i/*:int*/ = 0; i < this.components.length; i++) {
        var component/*:Component*/ = this.components[i];
        component && com.coremedia.cms.editor.sdk.desktop.sidepanel.sidePanelManager.registerComponent(AS3.getBindable(component,"id","DUMMY"), component.xtype);
      }
    }
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.cms.editor.sdk.EditorPlugin"],
      components: null,
      constructor: SidePanelPlugin$,
      init: init,
      requires: ["com.coremedia.cms.editor.sdk.EditorPlugin"],
      uses: ["com.coremedia.cms.editor.sdk.desktop.sidepanel.sidePanelManager"]
    };
});
