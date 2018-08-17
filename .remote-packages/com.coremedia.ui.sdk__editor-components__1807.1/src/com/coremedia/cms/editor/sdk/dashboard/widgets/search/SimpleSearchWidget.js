Ext.define("com.coremedia.cms.editor.sdk.dashboard.widgets.search.SimpleSearchWidget", function(SimpleSearchWidget) {/*package com.coremedia.cms.editor.sdk.dashboard.widgets.search{
import com.coremedia.cms.editor.sdk.dashboard.widgets.search.*;
import net.jangaroo.ext.Exml;
public class SimpleSearchWidget extends SimpleSearchWidgetBase{

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.simpleSearchWidget";

    public*/function SimpleSearchWidget$(config/*:SimpleSearchWidget = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.dashboard.widgets.search.SimpleSearchWidgetBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.dashboard.widgets.search.SimpleSearchWidgetBase,{});
    var defaults_$1/*:SimpleSearchWidget*/ =AS3.cast(SimpleSearchWidget,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$Q_Vn(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.dashboard.widgets.search.SimpleSearchWidgetBase",
      alias: "widget.com.coremedia.cms.editor.sdk.config.simpleSearchWidget",
      constructor: SimpleSearchWidget$,
      super$Q_Vn: function() {
        com.coremedia.cms.editor.sdk.dashboard.widgets.search.SimpleSearchWidgetBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.cms.editor.sdk.dashboard.widgets.search.SimpleSearchWidgetBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
