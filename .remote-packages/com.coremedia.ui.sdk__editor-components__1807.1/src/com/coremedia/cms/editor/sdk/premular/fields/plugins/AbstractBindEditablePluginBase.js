Ext.define("com.coremedia.cms.editor.sdk.premular.fields.plugins.AbstractBindEditablePluginBase", function(AbstractBindEditablePluginBase) {/*package com.coremedia.cms.editor.sdk.premular.fields.plugins {

import com.coremedia.cms.editor.sdk.util.PropertyEditorUtil;
import com.coremedia.ui.plugins.BindPropertyPlugin;

import ext.Component;
import ext.Ext;

/**
 * A plugin that controls the editable state of a component based on the bound Content object.
 * Possible attributes of the component to be bound are disabled and readOnly.
 * The component is editable when the Content can be modified by the current user.
 * /
[PublicApi]
public class AbstractBindEditablePluginBase extends BindPropertyPlugin {
  /**
   * Create a plugin that controls the editable state of a component based on the content object.
   *
   * @param config the config object
   * /
  public*/ function AbstractBindEditablePluginBase$(config/*:AbstractBindEditablePlugin = null*/) {if(arguments.length<=0)config=null;
    var superConfig/*:BindPropertyPlugin*/ = AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,Ext.apply({}, config));
    superConfig.bindTo = com.coremedia.cms.editor.sdk.util.PropertyEditorUtil.createReadOnlyValueExpression(config.bindTo, AS3.getBindable(config,"forceReadOnlyValueExpression"));
    delete superConfig['forceReadOnlyValueExpression'];

    superConfig.componentProperty = config.componentProperty ? config.componentProperty : this.getDefaultProperty();

    superConfig.skipIfUndefined = true;
    this.super$CM98(superConfig);
  }/*

  /**
   * Returns the default property that must be set to true when this Field is not editable.
   * @return  The default property
   * /
  protected*/ function getDefaultProperty ()/*:String*/ {
    throw new AS3.Error("Function must be overwritten in subclass!");
  }/*

  override public*/ function init(component/*:Component*/)/*:void*/ {
    // If component is initially disabled (why use a bindDisablePlugin then, anyway?!), do not even bother to
    // listen to value expression changes:
    if (!component.disabled) {
      com.coremedia.ui.plugins.BindPropertyPlugin.prototype.init.call(this,component);
    }
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.plugins.BindPropertyPlugin",
      metadata: {"": ["PublicApi"]},
      constructor: AbstractBindEditablePluginBase$,
      super$CM98: function() {
        com.coremedia.ui.plugins.BindPropertyPlugin.prototype.constructor.apply(this, arguments);
      },
      getDefaultProperty: getDefaultProperty,
      init: init,
      requires: [
        "AS3.Error",
        "Ext",
        "com.coremedia.ui.plugins.BindPropertyPlugin"
      ],
      uses: ["com.coremedia.cms.editor.sdk.util.PropertyEditorUtil"]
    };
});
