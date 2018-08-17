Ext.define("com.coremedia.cms.editor.sdk.util.RegionShortcutAction", function(RegionShortcutAction) {/*package com.coremedia.cms.editor.sdk.util{
import com.coremedia.cms.editor.sdk.util.*;
import net.jangaroo.ext.Exml;
public class RegionShortcutAction extends RegionShortcutActionBase{

    public*/function RegionShortcutAction$(config/*:RegionShortcutAction = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.util.RegionShortcutActionBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.util.RegionShortcutActionBase,{});
    var defaults_$1/*:RegionShortcutAction*/ =AS3.cast(RegionShortcutAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$wtA2(config_$1);
  }/*

    public static const DIRECTION_FORWARDS:String = "forwards";
    public static const DIRECTION_BACKWARDS:String = "backwards";

    [Bindable]
    public var direction:String;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.util.RegionShortcutActionBase",
      constructor: RegionShortcutAction$,
      super$wtA2: function() {
        com.coremedia.cms.editor.sdk.util.RegionShortcutActionBase.prototype.constructor.apply(this, arguments);
      },
      config: {direction: null},
      statics: {
        DIRECTION_FORWARDS: "forwards",
        DIRECTION_BACKWARDS: "backwards"
      },
      requires: [
        "com.coremedia.cms.editor.sdk.util.RegionShortcutActionBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
