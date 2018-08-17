Ext.define("com.coremedia.ui.plugins.Binding", function(Binding) {/*package com.coremedia.ui.plugins{
import com.coremedia.ui.plugins.*;
import net.jangaroo.ext.Exml;
public class Binding extends BindingBase{

    public*/function Binding$(config/*:Binding = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.ui.plugins.BindingBase*/ =AS3.cast(com.coremedia.ui.plugins.BindingBase,{});
    var defaults_$1/*:Binding*/ =AS3.cast(Binding,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$F4pp(config_$1);
  }/*

    [Bindable]
    public var source:Object;


    [Bindable]
    public var destination:Object;


    /** Default value to set on the destination if the source value is undefined. * /
    [Bindable]
    public var ifUndefined:Object;


    /** Update the source after the destination value has changed. * /
    [Bindable]
    public var twoWay:Boolean;


    /** Optional function that is used to transform the source value before it is written to the destination * /
    [Bindable]
    public var transformer:Function;


    /** An optional reverse transformer * /
    [Bindable]
    public var reverseTransformer:Function;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.plugins.BindingBase",
      constructor: Binding$,
      super$F4pp: function() {
        com.coremedia.ui.plugins.BindingBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        source: null,
        destination: null,
        ifUndefined: null,
        twoWay: false,
        transformer: null,
        reverseTransformer: null
      },
      requires: [
        "com.coremedia.ui.plugins.BindingBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
