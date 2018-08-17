Ext.define("com.coremedia.cms.editor.sdk.premular.PropertyFieldPlugin", function(PropertyFieldPlugin) {/*package com.coremedia.cms.editor.sdk.premular{
import com.coremedia.cms.editor.sdk.premular.*;
import net.jangaroo.ext.Exml;
[PublicApi]
/**

 A plugin that has to be configured for a component that is intended to be used as a
 document form property field.
 It is also a replacement for the bindFocusPlugin.

 * /
public class PropertyFieldPlugin extends PropertyFieldPluginBase{

    public*/function PropertyFieldPlugin$(config/*:PropertyFieldPlugin = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.premular.PropertyFieldPluginBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.PropertyFieldPluginBase,{});
    var defaults_$1/*:PropertyFieldPlugin*/ =AS3.cast(PropertyFieldPlugin,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$gw9M(config_$1);
  }/*

    /**

     The name of the property that this field works on.
     It is assumed that the property is below the property 'properties'.

     * /
    [Bindable]
    public var propertyName:String;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.premular.PropertyFieldPluginBase",
      metadata: {"": ["PublicApi"]},
      constructor: PropertyFieldPlugin$,
      super$gw9M: function() {
        com.coremedia.cms.editor.sdk.premular.PropertyFieldPluginBase.prototype.constructor.apply(this, arguments);
      },
      config: {propertyName: null},
      requires: [
        "com.coremedia.cms.editor.sdk.premular.PropertyFieldPluginBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
