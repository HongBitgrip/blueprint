Ext.define("com.coremedia.ui.plugins.BindActiveTabPlugin", function(BindActiveTabPlugin) {/*package com.coremedia.ui.plugins{
import com.coremedia.ui.plugins.BindPropertyPlugin;
import net.jangaroo.ext.Exml;
public class BindActiveTabPlugin extends BindPropertyPlugin{

    import ext.Component;
    import ext.tab.TabPanel;
    private var tabPanel:TabPanel;

    // called by generated constructor code
    private*/ function __initialize__(config/*:BindActiveTabPlugin*/)/*:void*/ {
      this.tabPanel$Djep =AS3.as( AS3.getBindable(config,"cmp","DUMMY"),  Ext.tab.Panel);
    }/*

    public*/function BindActiveTabPlugin$(config/*:BindActiveTabPlugin = null*/){if(arguments.length<=0)config=null;this.__initialize__$Djep(config);
    var config_$1/*:com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    var defaults_$1/*:BindActiveTabPlugin*/ =AS3.cast(BindActiveTabPlugin,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.componentProperty = "activeTab";
    config_$1.componentEvent = "tabchange";
    config_$1.transformer =AS3.bind( this.tabPanel$Djep,"getComponent");
    config_$1.reverseTransformer = function(c/*:Component*/)/*:String*/ { return c.getItemId(); };
    config_$1.bidirectional = true;
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$Djep(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.plugins.BindPropertyPlugin",
      tabPanel$Djep: null,
      __initialize__$Djep: __initialize__,
      constructor: BindActiveTabPlugin$,
      super$Djep: function() {
        com.coremedia.ui.plugins.BindPropertyPlugin.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "Ext.tab.Panel",
        "com.coremedia.ui.plugins.BindPropertyPlugin",
        "net.jangaroo.ext.Exml"
      ]
    };
});
