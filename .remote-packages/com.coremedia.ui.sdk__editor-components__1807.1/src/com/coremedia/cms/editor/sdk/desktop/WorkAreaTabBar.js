Ext.define("com.coremedia.cms.editor.sdk.desktop.WorkAreaTabBar", function(WorkAreaTabBar) {/*package com.coremedia.cms.editor.sdk.desktop{
import ext.tab.TabBar;
import net.jangaroo.ext.Exml;
[PublicApi]
public class WorkAreaTabBar extends TabBar{

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.workAreaTabBar";

    public*/function WorkAreaTabBar$(config/*:WorkAreaTabBar = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:ext.tab.TabBar*/ =AS3.cast(Ext.tab.Bar,{});
    var defaults_$1/*:WorkAreaTabBar*/ =AS3.cast(WorkAreaTabBar,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.defaultFocus = ":focusable";
    config_$1["ariaRole"] = "region";
    config_$1["focusable"] = true;
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$VhL8(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.tab.Bar",
      metadata: {"": ["PublicApi"]},
      alias: "widget.com.coremedia.cms.editor.sdk.config.workAreaTabBar",
      constructor: WorkAreaTabBar$,
      super$VhL8: function() {
        Ext.tab.Bar.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "Ext.tab.Bar",
        "net.jangaroo.ext.Exml"
      ]
    };
});
