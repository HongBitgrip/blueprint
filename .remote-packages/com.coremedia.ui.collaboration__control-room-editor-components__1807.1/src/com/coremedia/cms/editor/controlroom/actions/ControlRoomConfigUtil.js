Ext.define("com.coremedia.cms.editor.controlroom.actions.ControlRoomConfigUtil", function(ControlRoomConfigUtil) {/*package com.coremedia.cms.editor.controlroom.actions {

import ext.Action;
import ext.Ext;
import ext.tip.QuickTip;

import mx.resources.ResourceManager;

[ResourceBundle('com.coremedia.cms.editor.controlroom.ControlRoom')]
public class ControlRoomConfigUtil {
  /**
   * Given a config object, clone the object and
   * add iconCls, text, and tooltip properties according to the given actionName, unless these properties are already present.
   * Afterwards, apply the given override config to the clone, if an override config is given..
   *
   * @param config the config object
   * @param actionName the name of the action
   * @param overrideConfig an optional config object, overriding even the localized properties
   * @param tooltipMouseOffset an optional setting, that moves the tooltip by specified values. The default value is 'undefined'.
   * @return the new config object
   * /
  public static*/ function extendConfig$static(config/*:Action*/, actionName/*:String*/, overrideConfig/*:Object = null*/, tooltipMouseOffset/*:Array = undefined*/)/*:Action*/ {if(arguments.length<=2)overrideConfig=null;
    var result/*:Action*/ = AS3.cast(Ext.Action,{});

    AS3.setBindable(result,"iconCls" , mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'Action_' + actionName + '_icon'));
    AS3.setBindable(result,"text" , mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'Action_' + actionName + '_text'));

    Ext.apply(result, overrideConfig, config);

    var tooltipText/*:String*/ = mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'Action_' + actionName + '_tooltip');

    var quickTip/*:QuickTip*/;

    // If result doesn't have a 'tooltip', create a new one and set the tooltipText as the text. If the result has a tooltip, set the new text.
    if (!result.tooltip) {
      quickTip = AS3.cast(Ext.tip.QuickTip,{});
      quickTip.text = tooltipText;
      AS3.setBindable(result,"tooltip" , quickTip);
    } else {
      quickTip =AS3.as( result.tooltip,  Ext.tip.QuickTip);
      if (quickTip) {
        quickTip.text = quickTip.text || tooltipText;
      }
    }

    // Move the tooltip, if tooltipMouseOffset was passed.
    if (tooltipMouseOffset) {
      quickTip.mouseOffset = tooltipMouseOffset;
    }

    return result;
  }/*
}*/function ControlRoomConfigUtil$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: ControlRoomConfigUtil$,
      statics: {extendConfig: extendConfig$static},
      requires: [
        "Ext",
        "Ext.Action",
        "Ext.tip.QuickTip",
        "com.coremedia.cms.editor.controlroom.ControlRoom_properties",
        "mx.resources.ResourceManager"
      ]
    };
});
