Ext.define("com.coremedia.cms.editor.sdk.desktop.SelectTabAction", function(SelectTabAction) {/*package com.coremedia.cms.editor.sdk.desktop{
import com.coremedia.cms.editor.sdk.desktop.*;
import net.jangaroo.ext.Exml;
public class SelectTabAction extends SelectTabActionBase{

    public static const ACTION_ID:String = "selectTab";

    public static const DIRECTION_NEXT:String = "next";
    public static const DIRECTION_PREVIOUS:String = "previous";

    [Bindable]
    public var tabId:Number;

    [Bindable]
    public var direction:String;

    public*/function SelectTabAction$(config/*:SelectTabAction= null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.desktop.SelectTabActionBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.desktop.SelectTabActionBase,{});
    var defaults_$1/*:SelectTabAction*/ =AS3.cast(SelectTabAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$ZBtZ(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.desktop.SelectTabActionBase",
      constructor: SelectTabAction$,
      super$ZBtZ: function() {
        com.coremedia.cms.editor.sdk.desktop.SelectTabActionBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        tabId: NaN,
        direction: null
      },
      statics: {
        ACTION_ID: "selectTab",
        DIRECTION_NEXT: "next",
        DIRECTION_PREVIOUS: "previous"
      },
      requires: [
        "com.coremedia.cms.editor.sdk.desktop.SelectTabActionBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
