Ext.define("com.coremedia.cms.editor.sdk.dashboard.DashboardColumn", function(DashboardColumn) {/*package com.coremedia.cms.editor.sdk.dashboard{
import com.coremedia.cms.editor.sdk.dashboard.*;
import net.jangaroo.ext.Exml;
/**
 A single column of the dashboard, taking up one third of the horizontal space.
 * /
public class DashboardColumn extends DashboardColumnBase{

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.dashboardColumn";

    public*/function DashboardColumn$(config/*:DashboardColumn = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.dashboard.DashboardColumnBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.dashboard.DashboardColumnBase,{});
    var defaults_$1/*:DashboardColumn*/ =AS3.cast(DashboardColumn,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.columnWidth = 0.333333;
    var editor_WidgetSeparator_20_5_$1/*: com.coremedia.cms.editor.sdk.dashboard.WidgetSeparator*/ =AS3.cast(com.coremedia.cms.editor.sdk.dashboard.WidgetSeparator,{});
    AS3.setBindable(editor_WidgetSeparator_20_5_$1,"width" , "100%");
    config_$1.items = [editor_WidgetSeparator_20_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$nQrM(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.dashboard.DashboardColumnBase",
      alias: "widget.com.coremedia.cms.editor.sdk.config.dashboardColumn",
      constructor: DashboardColumn$,
      super$nQrM: function() {
        com.coremedia.cms.editor.sdk.dashboard.DashboardColumnBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.cms.editor.sdk.dashboard.DashboardColumnBase",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.cms.editor.sdk.dashboard.WidgetSeparator"]
    };
});
