Ext.define("com.coremedia.cms.editor.sdk.premular.fields.plugins.BindReadOnlyPluginBase", function(BindReadOnlyPluginBase) {/*package com.coremedia.cms.editor.sdk.premular.fields.plugins {

/**
 * A plugin that controls the read only state of a component based on the bound Content object.
 * The component is disabled when the Content cannot be modified by the current user, because
 * it is checked out by another user.
 * /
[PublicApi]
public class BindReadOnlyPluginBase extends AbstractBindEditablePlugin {


  /**
   * Create a plugin that controls the read only state of a component based on the content object.
   *
   * @param config the config object
   * /
  public*/ function BindReadOnlyPluginBase$(config/*:BindReadOnlyPlugin = null*/) {if(arguments.length<=0)config=null;
    this.super$$Xi4(config);
  }/*


  override protected*/ function getDefaultProperty()/*:String*/ {
    return 'readOnly';
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.premular.fields.plugins.AbstractBindEditablePlugin",
      metadata: {"": ["PublicApi"]},
      constructor: BindReadOnlyPluginBase$,
      super$$Xi4: function() {
        com.coremedia.cms.editor.sdk.premular.fields.plugins.AbstractBindEditablePlugin.prototype.constructor.apply(this, arguments);
      },
      getDefaultProperty: getDefaultProperty,
      requires: ["com.coremedia.cms.editor.sdk.premular.fields.plugins.AbstractBindEditablePlugin"]
    };
});
