Ext.define("com.coremedia.ui.plugins.ckeditor.RemoveCKEditorPluginsPluginBase", function(RemoveCKEditorPluginsPluginBase) {/*package com.coremedia.ui.plugins.ckeditor {
import com.coremedia.ui.ckeditor.RichTextArea;

import ext.Component;
import ext.plugin.AbstractPlugin;

/**
 * A Plugin that removes CKEditor plugins to the CKEditor of a
 * <code>RichTextArea</code>. The plugin takes a comma separated
 * list of plugin names.
 *
 * @see com.coremedia.ui.ckeditor.RichTextArea
 * /
[PublicApi]
public class RemoveCKEditorPluginsPluginBase extends AbstractPlugin {

  private var pluginNames:Array;

  /**
   * @param config
   * /
  public*/ function RemoveCKEditorPluginsPluginBase$(config/*:RemoveCKEditorPluginsPlugin = null*/) {if(arguments.length<=0)config=null;
    this.pluginNames$8qda = (String(AS3.getBindable(config,"plugins"))).split(',');
    this.super$8qda(config);
  }/*

  override public*/ function init(component/*:Component*/)/*:void*/ {
    if (AS3.is(component,  com.coremedia.ui.ckeditor.RichTextArea)) {
      var richTextArea/*:RichTextArea*/ =AS3.as( component,  com.coremedia.ui.ckeditor.RichTextArea);
      for (var i/*:Number*/ = 0; i < this.pluginNames$8qda.length; i++) {
        richTextArea.removeCKEditorPlugin(this.pluginNames$8qda[i].trim());
      }
    }
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.plugin.Abstract",
      metadata: {"": ["PublicApi"]},
      pluginNames$8qda: null,
      constructor: RemoveCKEditorPluginsPluginBase$,
      super$8qda: function() {
        Ext.plugin.Abstract.prototype.constructor.apply(this, arguments);
      },
      init: init,
      requires: ["Ext.plugin.Abstract"],
      uses: ["com.coremedia.ui.ckeditor.RichTextArea"]
    };
});
