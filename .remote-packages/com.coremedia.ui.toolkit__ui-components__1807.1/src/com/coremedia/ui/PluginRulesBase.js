Ext.define("com.coremedia.ui.PluginRulesBase", function(PluginRulesBase) {/*package com.coremedia.ui {
import com.coremedia.ui.util.ArrayUtils;

import mx.resources.IResourceManager;
import mx.resources.ResourceManager;

/**
 * A container that can be used to specify Plugin rules for the PluginRulesMgr in EXML.
 * To activate these plugin rules, all you have to do is call the static <code>main()</code> method of the class generated from your EXML.
 *
 * @see com.coremedia.ui.PluginRules
 * /
[PublicApi]
public class PluginRulesBase {


  /**
   * @param config The configuration options. See the config class for details.
   *
   * @see com.coremedia.ui.PluginRules
   * /
  public*/ function PluginRulesBase$(config/*:PluginRules = null*/) {if(arguments.length<=0)config=null;
    com.coremedia.ui.util.ArrayUtils.asArray(AS3.getBindable(config,"rules")).forEach(registerRule$static);
  }/*

  protected static*/ function  get$resourceManager$static()/*:IResourceManager*/ {
    return mx.resources.ResourceManager.getInstance();
  }/*

  private static*/ function registerRule$static(rule/*:Object*/)/*:void*/ {
    com.coremedia.ui.util.ArrayUtils.asArray(rule.plugins).forEach(
      function(pluginConfig/*:Object*/)/*:void*/ {
        if (rule.id) {
          com.coremedia.ui.PluginRulesMgr.registerForId(rule.id, pluginConfig);
        } else {
          com.coremedia.ui.PluginRulesMgr.registerForXtype(rule.xtype, pluginConfig);
        }
      });
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      metadata: {"": ["PublicApi"]},
      constructor: PluginRulesBase$,
      __accessors__: {statics: {resourceManager: {get: get$resourceManager$static}}},
      requires: [
        "com.coremedia.ui.util.ArrayUtils",
        "mx.resources.ResourceManager"
      ],
      uses: ["com.coremedia.ui.PluginRulesMgr"]
    };
});
