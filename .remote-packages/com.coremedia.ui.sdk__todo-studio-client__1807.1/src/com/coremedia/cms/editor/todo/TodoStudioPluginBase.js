Ext.define("com.coremedia.cms.editor.todo.TodoStudioPluginBase", function(TodoStudioPluginBase) {/*package com.coremedia.cms.editor.todo {
import com.coremedia.cms.editor.configuration.StudioPlugin;
import com.coremedia.ui.i18n.ResourceBundle;

import mx.resources.IResourceBundle;

import mx.resources.ResourceManager;

[ResourceBundle('com.coremedia.cms.editor.todo.Todo')]
public class TodoStudioPluginBase extends StudioPlugin {

  public*/ function TodoStudioPluginBase$(config/*:TodoStudioPlugin = null*/) {if(arguments.length<=0)config=null;
    this.super$xbl2(config);

    addAdditionalResourceBundles$static(AS3.getBindable(config,"resourceBundles"));
  }/*

  private static*/ function addAdditionalResourceBundles$static(resourceBundles/*:Array*/)/*:void*/ {
    if (resourceBundles &&AS3.is( resourceBundles,  Array)) {
      resourceBundles.forEach(function (bundle/*:IResourceBundle*/)/*:void*/ {
        com.coremedia.ui.i18n.ResourceBundle.overrideProperties(mx.resources.ResourceManager.getInstance().getResourceBundle(null, 'com.coremedia.cms.editor.todo.Todo'), bundle);
      });
    }
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.configuration.StudioPlugin",
      constructor: TodoStudioPluginBase$,
      super$xbl2: function() {
        com.coremedia.cms.editor.configuration.StudioPlugin.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.cms.editor.configuration.StudioPlugin",
        "com.coremedia.cms.editor.todo.Todo_properties",
        "com.coremedia.ui.i18n.ResourceBundle",
        "mx.resources.ResourceManager"
      ]
    };
});
