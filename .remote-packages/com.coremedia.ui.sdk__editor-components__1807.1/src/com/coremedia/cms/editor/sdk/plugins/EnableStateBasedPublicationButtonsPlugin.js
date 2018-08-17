Ext.define("com.coremedia.cms.editor.sdk.plugins.EnableStateBasedPublicationButtonsPlugin", function(EnableStateBasedPublicationButtonsPlugin) {/*package com.coremedia.cms.editor.sdk.plugins{
import com.coremedia.cms.editor.sdk.plugins.*;
import net.jangaroo.ext.Exml;
[PublicApi]
/**
 Enables all document-state based publication buttons (approve, publish, approveAndPublish).
 * /
public class EnableStateBasedPublicationButtonsPlugin extends EnableStateBasedPublicationButtonsPluginBase{

    public*/function EnableStateBasedPublicationButtonsPlugin$(config/*:EnableStateBasedPublicationButtonsPlugin = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.plugins.EnableStateBasedPublicationButtonsPluginBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.plugins.EnableStateBasedPublicationButtonsPluginBase,{});
    var defaults_$1/*:EnableStateBasedPublicationButtonsPlugin*/ =AS3.cast(EnableStateBasedPublicationButtonsPlugin,{});
    AS3.setBindable(defaults_$1,"adminOnly" , false);
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$JGuL(config_$1);
  }/*

    /**
     Enable the buttons only if the logged-in user has administrative rights.
     * /
    [Bindable]
    public var adminOnly:Boolean;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.plugins.EnableStateBasedPublicationButtonsPluginBase",
      metadata: {"": ["PublicApi"]},
      constructor: EnableStateBasedPublicationButtonsPlugin$,
      super$JGuL: function() {
        com.coremedia.cms.editor.sdk.plugins.EnableStateBasedPublicationButtonsPluginBase.prototype.constructor.apply(this, arguments);
      },
      config: {adminOnly: false},
      requires: [
        "com.coremedia.cms.editor.sdk.plugins.EnableStateBasedPublicationButtonsPluginBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
