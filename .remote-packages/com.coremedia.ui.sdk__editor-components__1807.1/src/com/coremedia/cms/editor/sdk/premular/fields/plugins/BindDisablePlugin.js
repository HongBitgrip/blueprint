Ext.define("com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePlugin", function(BindDisablePlugin) {/*package com.coremedia.cms.editor.sdk.premular.fields.plugins{
import com.coremedia.cms.editor.sdk.premular.fields.plugins.*;
import net.jangaroo.ext.Exml;
[PublicApi]
/**

 plugin that controls the disabled state of a component based on the bound Content object.
 The component is disabled when the Content cannot be modified by the current user, e.g. because
 it is checked out by another user, or when the content is forced to be read only by the
 property <code>forceReadOnlyValueExpression</code>
 The name of the component property that should be bound defaults to 'disabled'.

 * /
public class BindDisablePlugin extends BindDisablePluginBase{

    public*/function BindDisablePlugin$(config/*:BindDisablePlugin = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePluginBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePluginBase,{});
    var defaults_$1/*:BindDisablePlugin*/ =AS3.cast(BindDisablePlugin,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$bwST(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePluginBase",
      metadata: {"": ["PublicApi"]},
      constructor: BindDisablePlugin$,
      super$bwST: function() {
        com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePluginBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePluginBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
