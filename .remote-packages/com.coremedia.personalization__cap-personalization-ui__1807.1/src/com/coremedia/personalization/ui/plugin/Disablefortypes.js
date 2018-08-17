Ext.define("com.coremedia.personalization.ui.plugin.Disablefortypes", function(Disablefortypes) {/*package com.coremedia.personalization.ui.plugin{
import com.coremedia.personalization.ui.plugin.*;
import net.jangaroo.ext.Exml;
/**
 Plugin that disables a PersonaSelector if the content shown in the respective Studio tab is among a set of preconfigured types.
 * /
public class Disablefortypes extends DisableForTypesPlugin{

    public*/function Disablefortypes$(config/*:Disablefortypes = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.personalization.ui.plugin.DisableForTypesPlugin*/ =AS3.cast(com.coremedia.personalization.ui.plugin.DisableForTypesPlugin,{});
    var defaults_$1/*:Disablefortypes*/ =AS3.cast(Disablefortypes,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$uvct(config_$1);
  }/*

    /**
     array of content type names for which profile selection is to be disabled
     * /
    [Bindable]
    public var types:Array;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.personalization.ui.plugin.DisableForTypesPlugin",
      constructor: Disablefortypes$,
      super$uvct: function() {
        com.coremedia.personalization.ui.plugin.DisableForTypesPlugin.prototype.constructor.apply(this, arguments);
      },
      config: {types: null},
      requires: [
        "com.coremedia.personalization.ui.plugin.DisableForTypesPlugin",
        "net.jangaroo.ext.Exml"
      ]
    };
});
