Ext.define("com.coremedia.cms.editor.sdk.actions.ActionConfigUtil", function(ActionConfigUtil) {/*package com.coremedia.cms.editor.sdk.actions {

import ext.Ext;

import mx.resources.ResourceManager;

[ResourceBundle('com.coremedia.cms.editor.sdk.actions.Actions')]
public class ActionConfigUtil {
  /**
   * Given a config object, clone the object and
   * add iconCls, text, and tooltip properties according to the given actionName, unless these properties are already present.
   * Afterwards, apply the given override config to the clone, if an override config is given..
   *
   * @param properties the properties to load the action properties from
   * @param config the config object
   * @param actionName the name of the action
   * @param overrideConfig an optional config object, overriding even the localized properties
   * @return the new config object
   * /
  public static*/ function extendConfiguration$static(properties/*:Object*/, config/*:Object*/, actionName/*:String*/, overrideConfig/*:Object = undefined*/)/*:Object*/ {
    var result/*:Object*/ = Ext.apply({
      iconCls: properties['Action_' + actionName + '_icon'],
      text: properties['Action_' + actionName + '_text'],
      //magic happens here: set the text of a action on a content proxy entity
      textForContextProxy: properties['Action_' + actionName + 'ContentProxy_text'],
      tooltip: properties['Action_' + actionName + '_tooltip'],
      //magic happens here: set the tooltip of a action on a content proxy entity
      tooltipForContextProxy: properties['Action_' + actionName + 'ContentProxy_tooltip']
    }, config);
    if (overrideConfig) {
      Ext.apply(result, overrideConfig);
    }
    return result;
  }/*

  /**
   * Delegation call to the extendConfiguration method, using the Actions.properties as resource bundle.
   * /
  public static*/ function extendConfig$static(config/*:Object*/, actionName/*:String*/, overrideConfig/*:Object = undefined*/)/*:Object*/ {
    return ActionConfigUtil.extendConfiguration(mx.resources.ResourceManager.getInstance().getResourceBundle(null, 'com.coremedia.cms.editor.sdk.actions.Actions').content, config, actionName, overrideConfig);
  }/*
}*/function ActionConfigUtil$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: ActionConfigUtil$,
      statics: {
        extendConfiguration: extendConfiguration$static,
        extendConfig: extendConfig$static
      },
      requires: [
        "Ext",
        "com.coremedia.cms.editor.sdk.actions.Actions_properties",
        "mx.resources.ResourceManager"
      ]
    };
});
