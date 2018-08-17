Ext.define("com.coremedia.personalization.ui.plugin.Addpathfromhomefolder", function(Addpathfromhomefolder) {/*package com.coremedia.personalization.ui.plugin{
import com.coremedia.personalization.ui.plugin.*;
import net.jangaroo.ext.Exml;
/**
 Adds a path to a ContentSelector or a SegmentCondition.
 * /
public class Addpathfromhomefolder extends AddPathFromHomeFolderPlugin{

    public*/function Addpathfromhomefolder$(config/*:Addpathfromhomefolder = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.personalization.ui.plugin.AddPathFromHomeFolderPlugin*/ =AS3.cast(com.coremedia.personalization.ui.plugin.AddPathFromHomeFolderPlugin,{});
    var defaults_$1/*:Addpathfromhomefolder*/ =AS3.cast(Addpathfromhomefolder,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$aeqy(config_$1);
  }/*

    /**
     relative path within the users home folder that will be added to a 'PersonaSelector'
     * /
    [Bindable]
    public var relativePath:String;


    /**
     optional suffix that will be appended to the labels of the content objects retrieved from the path
     * /
    [Bindable]
    public var labelSuffix:String;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.personalization.ui.plugin.AddPathFromHomeFolderPlugin",
      constructor: Addpathfromhomefolder$,
      super$aeqy: function() {
        com.coremedia.personalization.ui.plugin.AddPathFromHomeFolderPlugin.prototype.constructor.apply(this, arguments);
      },
      config: {
        relativePath: null,
        labelSuffix: null
      },
      requires: [
        "com.coremedia.personalization.ui.plugin.AddPathFromHomeFolderPlugin",
        "net.jangaroo.ext.Exml"
      ]
    };
});
