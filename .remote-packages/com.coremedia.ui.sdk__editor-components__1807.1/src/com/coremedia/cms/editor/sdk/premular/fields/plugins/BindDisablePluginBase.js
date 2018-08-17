Ext.define("com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePluginBase", function(BindDisablePluginBase) {/*package com.coremedia.cms.editor.sdk.premular.fields.plugins {

/**
 * A plugin that controls the disabled state of a component based on the bound Content object.
 * The component is disabled when the Content cannot be modified by the current user, because
 * it is checked out by another user.
 * /
[PublicApi]
public class BindDisablePluginBase extends AbstractBindEditablePlugin {


  /**
   * Create a plugin that controls the disable state of a component based on the content object.
   *
   * @param config the config object
   * /
  public*/ function BindDisablePluginBase$(config/*:BindDisablePlugin = null*/) {if(arguments.length<=0)config=null;
    this.super$94kE(config);
  }/*


  override protected*/ function getDefaultProperty()/*:String*/ {
    return 'disabled';
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.premular.fields.plugins.AbstractBindEditablePlugin",
      metadata: {"": ["PublicApi"]},
      constructor: BindDisablePluginBase$,
      super$94kE: function() {
        com.coremedia.cms.editor.sdk.premular.fields.plugins.AbstractBindEditablePlugin.prototype.constructor.apply(this, arguments);
      },
      getDefaultProperty: getDefaultProperty,
      requires: ["com.coremedia.cms.editor.sdk.premular.fields.plugins.AbstractBindEditablePlugin"]
    };
});
