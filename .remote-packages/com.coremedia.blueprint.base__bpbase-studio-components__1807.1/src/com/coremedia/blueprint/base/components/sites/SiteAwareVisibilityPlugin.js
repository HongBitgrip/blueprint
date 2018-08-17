Ext.define("com.coremedia.blueprint.base.components.sites.SiteAwareVisibilityPlugin", function(SiteAwareVisibilityPlugin) {/*package com.coremedia.blueprint.base.components.sites{
import com.coremedia.blueprint.base.components.sites.*;
import net.jangaroo.ext.Exml;
/**
 Makes a component visible if the feature is activated in the site of the content provided
 in contentValueExpression. If no contentValueExpression is provided, the user's preferred site is used.
 * /
public class SiteAwareVisibilityPlugin extends SiteAwareVisibilityPluginBase{

    public*/function SiteAwareVisibilityPlugin$(config/*:SiteAwareVisibilityPlugin = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.blueprint.base.components.sites.SiteAwareVisibilityPluginBase*/ =AS3.cast(com.coremedia.blueprint.base.components.sites.SiteAwareVisibilityPluginBase,{});
    var defaults_$1/*:SiteAwareVisibilityPlugin*/ =AS3.cast(SiteAwareVisibilityPlugin,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.bindTo = this.getCalculateVisibilityValueExpression();
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$hb3k(config_$1);
  }/*

    /**
     Name of the feature to control the visibility of the component this plugin is bound to.
     * /
    [Bindable]
    public var feature:String;


    /**
     Value to evaluate to, if the state cannot be determined yet. Default: false
     * /
    [Bindable]
    public var ifUndefined:Boolean;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.blueprint.base.components.sites.SiteAwareVisibilityPluginBase",
      constructor: SiteAwareVisibilityPlugin$,
      super$hb3k: function() {
        com.coremedia.blueprint.base.components.sites.SiteAwareVisibilityPluginBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        feature: null,
        ifUndefined: false
      },
      requires: [
        "com.coremedia.blueprint.base.components.sites.SiteAwareVisibilityPluginBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
