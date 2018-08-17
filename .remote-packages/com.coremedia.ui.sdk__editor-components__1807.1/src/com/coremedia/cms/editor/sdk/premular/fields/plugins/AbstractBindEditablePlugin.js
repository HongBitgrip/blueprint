Ext.define("com.coremedia.cms.editor.sdk.premular.fields.plugins.AbstractBindEditablePlugin", function(AbstractBindEditablePlugin) {/*package com.coremedia.cms.editor.sdk.premular.fields.plugins{
import com.coremedia.cms.editor.sdk.premular.fields.plugins.*;
import net.jangaroo.ext.Exml;
[PublicApi]
/**
 A plugin that controls the editable state of a component based on the bound Content object.
 Possible attributes of the component to be bound are disabled and readOnly.
 The component is editable when the Content can be modified by the current user.
 * /
public class AbstractBindEditablePlugin extends AbstractBindEditablePluginBase{

    import com.coremedia.ui.data.ValueExpression;

    public*/function AbstractBindEditablePlugin$(config/*:AbstractBindEditablePlugin = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.premular.fields.plugins.AbstractBindEditablePluginBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.plugins.AbstractBindEditablePluginBase,{});
    var defaults_$1/*:AbstractBindEditablePlugin*/ =AS3.cast(AbstractBindEditablePlugin,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$uIhN(config_$1);
  }/*

    /**
     * An optional ValueExpression which makes the component read-only if it is evaluated to true.
     * /
    [Bindable]
    public var forceReadOnlyValueExpression:ValueExpression;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.premular.fields.plugins.AbstractBindEditablePluginBase",
      metadata: {"": ["PublicApi"]},
      constructor: AbstractBindEditablePlugin$,
      super$uIhN: function() {
        com.coremedia.cms.editor.sdk.premular.fields.plugins.AbstractBindEditablePluginBase.prototype.constructor.apply(this, arguments);
      },
      config: {forceReadOnlyValueExpression: null},
      requires: [
        "com.coremedia.cms.editor.sdk.premular.fields.plugins.AbstractBindEditablePluginBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
