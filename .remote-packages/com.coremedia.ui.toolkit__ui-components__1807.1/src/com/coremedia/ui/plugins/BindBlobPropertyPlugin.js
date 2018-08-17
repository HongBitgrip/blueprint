Ext.define("com.coremedia.ui.plugins.BindBlobPropertyPlugin", function(BindBlobPropertyPlugin) {/*package com.coremedia.ui.plugins{
import com.coremedia.ui.plugins.*;
import net.jangaroo.ext.Exml;
[PublicApi]
/**
 A plugin that binds with a BLOB property and allows to write them.
 * /
public class BindBlobPropertyPlugin extends BindBlobPropertyPluginBase{

    public*/function BindBlobPropertyPlugin$(config/*:BindBlobPropertyPlugin = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.ui.plugins.BindBlobPropertyPluginBase*/ =AS3.cast(com.coremedia.ui.plugins.BindBlobPropertyPluginBase,{});
    var defaults_$1/*:BindBlobPropertyPlugin*/ =AS3.cast(BindBlobPropertyPlugin,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.boundValueChanged =AS3.bind( this,"valueExpressionChanged");
    config_$1.componentChanged =AS3.bind( this,"componentChangedBlob");
    config_$1.componentEvent = "change";
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$JirK(config_$1);
  }/*

    /**
     The name of the component property that should be bound. Typical values are 'value'.
     * /
    [Bindable]
    public var componentProperty:String;


    /**
     The mime type of the blob property; default is 'text/xml'.
     * /
    [Bindable]
    public var mimeType:String;


    /**

     A function that transforms the value before it is passed to the component.
     Example function:
     &lt;code>function (value) { return value.toUpperCase(); }&lt;/code>

     * /
    [Bindable]
    public var transformer:Function;


    /**

     A function that transforms the value of the component property before it is passed to the bean.
     Example function:
     &lt;code>function (value) { return value.toUpperCase(); }&lt;/code>

     * /
    [Bindable]
    public var reverseTransformer:Function;


    /**

     States whether the component property is bound to a non-markup blob. This has
     impact on whether or not to respect blob size. Defaults to false.

     * /
    [Bindable]
    public var boundToNonMarkup:Boolean;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.plugins.BindBlobPropertyPluginBase",
      metadata: {"": ["PublicApi"]},
      constructor: BindBlobPropertyPlugin$,
      super$JirK: function() {
        com.coremedia.ui.plugins.BindBlobPropertyPluginBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        componentProperty: null,
        mimeType: null,
        transformer: null,
        reverseTransformer: null,
        boundToNonMarkup: false
      },
      requires: [
        "com.coremedia.ui.plugins.BindBlobPropertyPluginBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
