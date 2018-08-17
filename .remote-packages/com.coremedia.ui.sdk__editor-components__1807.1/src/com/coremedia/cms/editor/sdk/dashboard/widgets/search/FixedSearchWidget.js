Ext.define("com.coremedia.cms.editor.sdk.dashboard.widgets.search.FixedSearchWidget", function(FixedSearchWidget) {/*package com.coremedia.cms.editor.sdk.dashboard.widgets.search{
import com.coremedia.cms.editor.sdk.dashboard.widgets.search.*;
import net.jangaroo.ext.Exml;
public class FixedSearchWidget extends FixedSearchWidgetBase{

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.fixedSearchWidget";

    public*/function FixedSearchWidget$(config/*:FixedSearchWidget = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.dashboard.widgets.search.FixedSearchWidgetBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.dashboard.widgets.search.FixedSearchWidgetBase,{});
    var defaults_$1/*:FixedSearchWidget*/ =AS3.cast(FixedSearchWidget,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$Mpuj(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.dashboard.widgets.search.FixedSearchWidgetBase",
      alias: "widget.com.coremedia.cms.editor.sdk.config.fixedSearchWidget",
      constructor: FixedSearchWidget$,
      super$Mpuj: function() {
        com.coremedia.cms.editor.sdk.dashboard.widgets.search.FixedSearchWidgetBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.cms.editor.sdk.dashboard.widgets.search.FixedSearchWidgetBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
