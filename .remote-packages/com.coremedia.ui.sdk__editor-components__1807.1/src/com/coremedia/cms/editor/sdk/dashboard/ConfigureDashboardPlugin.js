Ext.define("com.coremedia.cms.editor.sdk.dashboard.ConfigureDashboardPlugin", function(ConfigureDashboardPlugin) {/*package com.coremedia.cms.editor.sdk.dashboard{
import com.coremedia.cms.editor.sdk.dashboard.*;
import net.jangaroo.ext.Exml;
[PublicApi]
/**
 An editor plugin that adds widgets and widget types to the
 global configuration. If the replace property is set, the previous
 dashboard configuration is erased before registering the new
 widgets and widget types.

 @see com.coremedia.cms.editor.sdk.dashboard.DashboardConfiguration
 * /
public class ConfigureDashboardPlugin extends ConfigureDashboardPluginBase{

    public*/function ConfigureDashboardPlugin$(config/*:ConfigureDashboardPlugin = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.dashboard.ConfigureDashboardPluginBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.dashboard.ConfigureDashboardPluginBase,{});
    var defaults_$1/*:ConfigureDashboardPlugin*/ =AS3.cast(ConfigureDashboardPlugin,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$W0PL(config_$1);
  }/*

    /**
     whether to replace the current dashboard configuration entirely;
     if false (the default), the configuration is merged into the existing configuration
     * /
    [Bindable]
    public var replace:Boolean;


    /**
     The widgets to show. Each entry in this array
     must be an instance of WidgetState.

     @see com.coremedia.cms.editor.sdk.dashboard.WidgetState
     * /
    [Bindable]
    public var widgets:Array;


    /**
     The widget types that can be shown. Each entry in this array
     must be an instance of WidgetType.

     @see com.coremedia.cms.editor.sdk.dashboard.WidgetType
     * /
    [Bindable]
    public var types:Array;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.dashboard.ConfigureDashboardPluginBase",
      metadata: {"": ["PublicApi"]},
      constructor: ConfigureDashboardPlugin$,
      super$W0PL: function() {
        com.coremedia.cms.editor.sdk.dashboard.ConfigureDashboardPluginBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        replace: false,
        widgets: null,
        types: null
      },
      requires: [
        "com.coremedia.cms.editor.sdk.dashboard.ConfigureDashboardPluginBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
