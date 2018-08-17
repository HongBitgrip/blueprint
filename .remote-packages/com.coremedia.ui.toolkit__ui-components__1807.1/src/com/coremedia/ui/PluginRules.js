Ext.define("com.coremedia.ui.PluginRules", function(PluginRules) {/*package com.coremedia.ui{
import com.coremedia.ui.*;
import net.jangaroo.ext.Exml;
[PublicApi]
/**

 A container that can be used to specify plugin rules in EXML. See the example below for the
 EXML syntax to use.
 <p>To activate these plugin rules, all you have to do is call the static <code>main()</code> method of the class
 generated from your EXML.</p>
 <p>The pluginRules container allows to add plugins to components implicitly, based on the
 component's EXML element or <code>id</code>:</p>
 <ul>
 <li>To add a plugin for a well-known EXML element, e.g. <code>actionsToolbar</code> from namespace <code>studio</code>,
 simply use <code>&lt;studio:actionsToolbar&gt;</code>. The plugin will also be applied to all components of
 subclasses of the class corresponding to the given EXML component.</li>
 <li>To add a plugin for a well-known component <code>id</code>, use <code>&lt;component id="..."&gt;</code>.</li>
 </ul>
 <p>Multiple plugins for one component are initialized from general to specific: first plugins registered for
 the most general class, then more concrete classes, then plugins registered for the component's
 <code>id</code>. If two plugins are registered for the same class or <code>id</code>, they are applied in the order
 in which they were registered.</p>
 <p>Plugin rules are applied after plugins that are configured directly in the component's definition.</p>

 <p>This class serves as a typed config object for the constructor of <code>PluginRules</code>.</p>

 @example To create plugin rules that a) use an <code>id</code> extension point "wellKnownId" and
 b) use a component type (EXML) extension point &lt;custom:someComponent&gt;, use the following EXML:
 <listing version="3.0">
 &lt;?xml version="1.0" encoding="UTF-8"?>
 &lt;exml:component xmlns:exml="http://www.jangaroo.net/exml/0.8"
 xmlns="exml:ext.config"
 xmlns:ui="exml:com.coremedia.ui.config"
 xmlns:custom="custom.config">
 &lt;ui:pluginRules>
 &lt;ui:rules>
 &lt;component id="wellKnownId">
 &lt;plugins>
 ...
 &lt;/plugins>
 &lt;/component>

 &lt;custom:someComponent>
 &lt;plugins>
 ...
 &lt;/plugins>
 &lt;/custom:someComponent>

 &lt;/ui:rules>
 &lt;/ui:pluginRules>
 &lt;/exml:component>
 </listing>

 @see ext.Component
 @see ext.ComponentManager
 @see ext.Plugin
 @see com.coremedia.ui.PluginRules

 * /
public class PluginRules extends PluginRulesBase{

    public*/function PluginRules$(config/*:PluginRules = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.ui.PluginRulesBase*/ =AS3.cast(com.coremedia.ui.PluginRulesBase,{});
    var defaults_$1/*:PluginRules*/ =AS3.cast(PluginRules,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$vmP0(config_$1);
  }/*

    /**
     A list of Components with Plugins. Each Component serves as a pattern, and for each Component created by
     ComponentManager, if it matches this pattern, all plugins will be applied. So far, only the type of the pattern
     Component and its id are matched.
     * /
    [Bindable]
    public var rules:Array;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.PluginRulesBase",
      metadata: {"": ["PublicApi"]},
      constructor: PluginRules$,
      super$vmP0: function() {
        com.coremedia.ui.PluginRulesBase.prototype.constructor.apply(this, arguments);
      },
      config: {rules: null},
      requires: [
        "com.coremedia.ui.PluginRulesBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
