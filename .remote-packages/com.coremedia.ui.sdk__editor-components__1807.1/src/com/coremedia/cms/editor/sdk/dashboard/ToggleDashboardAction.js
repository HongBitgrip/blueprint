Ext.define("com.coremedia.cms.editor.sdk.dashboard.ToggleDashboardAction", function(ToggleDashboardAction) {/*package com.coremedia.cms.editor.sdk.dashboard{
import com.coremedia.cms.editor.sdk.dashboard.*;
import net.jangaroo.ext.Exml;
/**
 An action to toggle the dashboard tab.
 * /
public class ToggleDashboardAction extends ToggleDashboardActionBase{

    public static const ACTION_ID:String = "toggleDashboardAction";

    public*/function ToggleDashboardAction$(config/*:ToggleDashboardAction = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.dashboard.ToggleDashboardActionBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.dashboard.ToggleDashboardActionBase,{});
    var defaults_$1/*:ToggleDashboardAction*/ =AS3.cast(ToggleDashboardAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$sTb2(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.dashboard.ToggleDashboardActionBase",
      constructor: ToggleDashboardAction$,
      super$sTb2: function() {
        com.coremedia.cms.editor.sdk.dashboard.ToggleDashboardActionBase.prototype.constructor.apply(this, arguments);
      },
      statics: {ACTION_ID: "toggleDashboardAction"},
      requires: [
        "com.coremedia.cms.editor.sdk.dashboard.ToggleDashboardActionBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
