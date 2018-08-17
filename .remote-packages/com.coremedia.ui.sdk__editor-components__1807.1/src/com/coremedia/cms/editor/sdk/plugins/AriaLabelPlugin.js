Ext.define("com.coremedia.cms.editor.sdk.plugins.AriaLabelPlugin", function(AriaLabelPlugin) {/*package com.coremedia.cms.editor.sdk.plugins{
import com.coremedia.cms.editor.sdk.plugins.*;
import net.jangaroo.ext.Exml;
[PublicApi]
/**



 * /
public class AriaLabelPlugin extends AriaLabelPluginBase{

    /**
     * The xtype of the parent to use as a aria label reference or a function to resolve it
     * If not defined, the component itself will be used.
     * /
    [Bindable]
    public var parent:Object;

    /**
     * The optional component property to use as aria label prefix for the given component.
     * When this property is not set, the 'ariaLabel' property and the 'title' property of the parent
     * will be used to apply an aria label.
     * /
    [Bindable]
    public var parentProperty:String;

    /**
     * The optional suffix to append when the aria label for the component is set
     * /
    [Bindable]
    public var suffix:String;

    /**
     * Apply this plugin even if an aria label is already set, defaults to true
     * /
    [Bindable]
    public var overrideLabel:Boolean;

    public*/function AriaLabelPlugin$(config/*:AriaLabelPlugin= null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.plugins.AriaLabelPluginBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.plugins.AriaLabelPluginBase,{});
    var defaults_$1/*:AriaLabelPlugin*/ =AS3.cast(AriaLabelPlugin,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$AyjM(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.plugins.AriaLabelPluginBase",
      metadata: {"": ["PublicApi"]},
      constructor: AriaLabelPlugin$,
      super$AyjM: function() {
        com.coremedia.cms.editor.sdk.plugins.AriaLabelPluginBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        parent: null,
        parentProperty: null,
        suffix: null,
        overrideLabel: false
      },
      requires: [
        "com.coremedia.cms.editor.sdk.plugins.AriaLabelPluginBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
