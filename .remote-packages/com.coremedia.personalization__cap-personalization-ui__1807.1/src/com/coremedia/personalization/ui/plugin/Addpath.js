Ext.define("com.coremedia.personalization.ui.plugin.Addpath", function(Addpath) {/*package com.coremedia.personalization.ui.plugin{
import com.coremedia.personalization.ui.plugin.*;
import net.jangaroo.ext.Exml;
/**
 Adds a path to a ContentSelector or a SegmentCondition.
 * /
public class Addpath extends AddPathPlugin{

    public*/function Addpath$(config/*:Addpath = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.personalization.ui.plugin.AddPathPlugin*/ =AS3.cast(com.coremedia.personalization.ui.plugin.AddPathPlugin,{});
    var defaults_$1/*:Addpath*/ =AS3.cast(Addpath,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$en35(config_$1);
  }/*

    /**
     the repository paths that is to be added
     * /
    [Bindable]
    public var path:String;


    /**
     suffix to be added to the label of documents retrieved from the path when rendered
     * /
    [Bindable]
    public var labelSuffix:String;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.personalization.ui.plugin.AddPathPlugin",
      constructor: Addpath$,
      super$en35: function() {
        com.coremedia.personalization.ui.plugin.AddPathPlugin.prototype.constructor.apply(this, arguments);
      },
      config: {
        path: null,
        labelSuffix: null
      },
      requires: [
        "com.coremedia.personalization.ui.plugin.AddPathPlugin",
        "net.jangaroo.ext.Exml"
      ]
    };
});
