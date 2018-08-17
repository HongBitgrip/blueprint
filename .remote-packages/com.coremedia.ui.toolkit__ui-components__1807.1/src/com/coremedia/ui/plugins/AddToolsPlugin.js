Ext.define("com.coremedia.ui.plugins.AddToolsPlugin", function(AddToolsPlugin) {/*package com.coremedia.ui.plugins{
import com.coremedia.ui.plugins.*;
import net.jangaroo.ext.Exml;
/**

 A Plugin that adds a list of tools to an ext.Panel.
 It does not make much sense to use this plugin explicitly.
 Rather add a Plugin Rule to add a tool to any panel of a
 certain xtype, like so:
 <pre>
 &lt;some:panel>
 &lt;plugins>
 &lt;ui:addToolsPlugin>
 &lt;ui:tools>
 &lt;exml:object
 id="close"
 handler="{function(e:*, target:*, panel:Panel):void {
                panel.ownerCt.remove(panel, true);
              }}"/>
 &lt;/ui:tools>
 &lt;/ui:addToolsPlugin>
 &lt;/plugins>
 &lt;/some:panel>
 </pre>

 * /
public class AddToolsPlugin extends AddToolsPluginBase{

    public*/function AddToolsPlugin$(config/*:AddToolsPlugin = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.ui.plugins.AddToolsPluginBase*/ =AS3.cast(com.coremedia.ui.plugins.AddToolsPluginBase,{});
    var defaults_$1/*:AddToolsPlugin*/ =AS3.cast(AddToolsPlugin,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$9ozV(config_$1);
  }/*

    /**
     The tools to add to the Panel.
     * /
    [Bindable]
    public var tools:Array;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.plugins.AddToolsPluginBase",
      constructor: AddToolsPlugin$,
      super$9ozV: function() {
        com.coremedia.ui.plugins.AddToolsPluginBase.prototype.constructor.apply(this, arguments);
      },
      config: {tools: null},
      requires: [
        "com.coremedia.ui.plugins.AddToolsPluginBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
