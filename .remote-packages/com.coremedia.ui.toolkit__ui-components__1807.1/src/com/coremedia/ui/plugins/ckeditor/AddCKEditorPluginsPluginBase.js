Ext.define("com.coremedia.ui.plugins.ckeditor.AddCKEditorPluginsPluginBase", function(AddCKEditorPluginsPluginBase) {/*package com.coremedia.ui.plugins.ckeditor {
import com.coremedia.ui.ckeditor.RichTextArea;

import ext.Component;
import ext.plugin.AbstractPlugin;

/**
 * A Plugin that adds CKEditor plugins to the CKEditor of a
 * <code>RichTextArea</code>. The plugin takes a comma separated
 * list of plugin names.
 *
 * @see com.coremedia.ui.ckeditor.RichTextArea
 * /
[PublicApi]
public class AddCKEditorPluginsPluginBase extends AbstractPlugin {

  private var pluginNames:Array;

  /**
   * @param config the config object
   * /
  public*/ function AddCKEditorPluginsPluginBase$(config/*:AddCKEditorPluginsPlugin = null*/) {if(arguments.length<=0)config=null;
    this.pluginNames$jpqL = (String(AS3.getBindable(config,"plugins"))).split(',');
    this.super$jpqL(config);
  }/*

  override public*/ function init(component/*:Component*/)/*:void*/ {
    if (AS3.is(component,  com.coremedia.ui.ckeditor.RichTextArea)) {
      var richTextArea/*:RichTextArea*/ =AS3.as( component,  com.coremedia.ui.ckeditor.RichTextArea);
      for (var i/*:Number*/ = 0; i < this.pluginNames$jpqL.length; i++) {
        richTextArea.addCKEditorPlugin(this.pluginNames$jpqL[i].trim());
      }
    }
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.plugin.Abstract",
      metadata: {"": ["PublicApi"]},
      pluginNames$jpqL: null,
      constructor: AddCKEditorPluginsPluginBase$,
      super$jpqL: function() {
        Ext.plugin.Abstract.prototype.constructor.apply(this, arguments);
      },
      init: init,
      requires: ["Ext.plugin.Abstract"],
      uses: ["com.coremedia.ui.ckeditor.RichTextArea"]
    };
});
