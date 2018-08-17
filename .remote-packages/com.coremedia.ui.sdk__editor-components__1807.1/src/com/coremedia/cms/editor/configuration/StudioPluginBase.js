Ext.define("com.coremedia.cms.editor.configuration.StudioPluginBase", function(StudioPluginBase) {/*package com.coremedia.cms.editor.configuration {
import com.coremedia.cms.editor.sdk.EditorPlugin;
import com.coremedia.cms.editor.sdk.IEditorContext;
import com.coremedia.ui.PluginRules;

[PublicApi]
public class StudioPluginBase extends PluginRules implements EditorPlugin {

  private var configuration:Array;

  public*/ function StudioPluginBase$(config/*:StudioPlugin = null*/) {if(arguments.length<=0)config=null;
    this.super$KANu(config);
    this.configuration$KANu = AS3.getBindable(config,"configuration") || [];
  }/*

  public*/ function init(editorContext/*:IEditorContext*/)/*:void*/ {
    for (var i/*:int*/ = 0; i < this.configuration$KANu.length; i++) {
      var editorPlugin/*:EditorPlugin*/ =AS3.as( this.configuration$KANu[i],  com.coremedia.cms.editor.sdk.EditorPlugin);
      if (!editorPlugin) {
        throw new AS3.Error("<editor:studioPlugin><editor:configuration> must contain EditorPlugins, not " + this.configuration$KANu[i]);
      }
      editorPlugin.init(editorContext);
    }
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.PluginRules",
      mixins: ["com.coremedia.cms.editor.sdk.EditorPlugin"],
      metadata: {"": ["PublicApi"]},
      configuration$KANu: null,
      constructor: StudioPluginBase$,
      super$KANu: function() {
        com.coremedia.ui.PluginRules.prototype.constructor.apply(this, arguments);
      },
      init: init,
      requires: [
        "AS3.Error",
        "com.coremedia.cms.editor.sdk.EditorPlugin",
        "com.coremedia.ui.PluginRules"
      ]
    };
});
