Ext.define("com.coremedia.elastic.social.studio.plugins.RegisterModeratedPropertiesPlugin", function(RegisterModeratedPropertiesPlugin) {/*package com.coremedia.elastic.social.studio.plugins{
import com.coremedia.elastic.social.studio.plugins.*;
import net.jangaroo.ext.Exml;
[PublicApi]
/**
 Registers additional properties to be moderated. Can be applied e.g. to CommentView, UserView.
 The plugin only informs the view that these are moderated properties so that they are
 taken into account when computing the local change state.
 * /
public class RegisterModeratedPropertiesPlugin extends RegisterModeratedPropertiesPluginBase{

    public*/function RegisterModeratedPropertiesPlugin$(config/*:RegisterModeratedPropertiesPlugin = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.elastic.social.studio.plugins.RegisterModeratedPropertiesPluginBase*/ =AS3.cast(com.coremedia.elastic.social.studio.plugins.RegisterModeratedPropertiesPluginBase,{});
    var defaults_$1/*:RegisterModeratedPropertiesPlugin*/ =AS3.cast(RegisterModeratedPropertiesPlugin,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$PNkG(config_$1);
  }/*

    /**
     The list of additional moderated properties.
     * /
    [Bindable]
    public var propertyNames:Array;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.elastic.social.studio.plugins.RegisterModeratedPropertiesPluginBase",
      metadata: {"": ["PublicApi"]},
      constructor: RegisterModeratedPropertiesPlugin$,
      super$PNkG: function() {
        com.coremedia.elastic.social.studio.plugins.RegisterModeratedPropertiesPluginBase.prototype.constructor.apply(this, arguments);
      },
      config: {propertyNames: null},
      requires: [
        "com.coremedia.elastic.social.studio.plugins.RegisterModeratedPropertiesPluginBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
