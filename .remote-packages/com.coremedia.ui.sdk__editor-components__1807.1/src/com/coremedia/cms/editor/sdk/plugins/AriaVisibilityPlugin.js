Ext.define("com.coremedia.cms.editor.sdk.plugins.AriaVisibilityPlugin", function(AriaVisibilityPlugin) {/*package com.coremedia.cms.editor.sdk.plugins{
import com.coremedia.cms.editor.sdk.plugins.*;
import net.jangaroo.ext.Exml;
[PublicApi]
/**

 Checks if the given value expression contains a value.
 If no value could be resolved, the plugins changes the aria role to hidden.

 * /
public class AriaVisibilityPlugin extends AriaVisibilityPluginBase{

    import com.coremedia.ui.data.ValueExpression;

    /**
     * A ValueExpression whose value determines if the aria role is visible or not.
     * If undefined, the plugin will calculate the aria visibility depending on the collapse state.
     * /
    [Bindable]
    public var bindTo:ValueExpression;

    public*/function AriaVisibilityPlugin$(config/*:AriaVisibilityPlugin = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.plugins.AriaVisibilityPluginBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.plugins.AriaVisibilityPluginBase,{});
    var defaults_$1/*:AriaVisibilityPlugin*/ =AS3.cast(AriaVisibilityPlugin,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$Yc8s(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.plugins.AriaVisibilityPluginBase",
      metadata: {"": ["PublicApi"]},
      constructor: AriaVisibilityPlugin$,
      super$Yc8s: function() {
        com.coremedia.cms.editor.sdk.plugins.AriaVisibilityPluginBase.prototype.constructor.apply(this, arguments);
      },
      config: {bindTo: null},
      requires: [
        "com.coremedia.cms.editor.sdk.plugins.AriaVisibilityPluginBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
