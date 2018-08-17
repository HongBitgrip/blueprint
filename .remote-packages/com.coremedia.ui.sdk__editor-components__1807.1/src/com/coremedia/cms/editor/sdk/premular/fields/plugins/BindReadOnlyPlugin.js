Ext.define("com.coremedia.cms.editor.sdk.premular.fields.plugins.BindReadOnlyPlugin", function(BindReadOnlyPlugin) {/*package com.coremedia.cms.editor.sdk.premular.fields.plugins{
import com.coremedia.cms.editor.sdk.premular.fields.plugins.*;
import net.jangaroo.ext.Exml;
[PublicApi]
/**
 plugin that controls the read only state of a component based on the bound Content object.
 The component is read only when the Content cannot be modified by the current user, e.g. because
 it is checked out by another user, or when the content is forced to be read only by the
 property <code>forceReadOnlyValueExpression</code>
 The name of the component property that should be bound defaults to 'readOnly'.
 * /
public class BindReadOnlyPlugin extends BindReadOnlyPluginBase{

    public*/function BindReadOnlyPlugin$(config/*:BindReadOnlyPlugin = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.premular.fields.plugins.BindReadOnlyPluginBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.plugins.BindReadOnlyPluginBase,{});
    var defaults_$1/*:BindReadOnlyPlugin*/ =AS3.cast(BindReadOnlyPlugin,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$Vw6J(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.premular.fields.plugins.BindReadOnlyPluginBase",
      metadata: {"": ["PublicApi"]},
      constructor: BindReadOnlyPlugin$,
      super$Vw6J: function() {
        com.coremedia.cms.editor.sdk.premular.fields.plugins.BindReadOnlyPluginBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.cms.editor.sdk.premular.fields.plugins.BindReadOnlyPluginBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
