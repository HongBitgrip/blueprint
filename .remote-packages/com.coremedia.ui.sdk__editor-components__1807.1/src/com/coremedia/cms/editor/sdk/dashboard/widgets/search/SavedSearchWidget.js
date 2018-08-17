Ext.define("com.coremedia.cms.editor.sdk.dashboard.widgets.search.SavedSearchWidget", function(SavedSearchWidget) {/*package com.coremedia.cms.editor.sdk.dashboard.widgets.search{
import com.coremedia.cms.editor.sdk.dashboard.widgets.search.*;
import net.jangaroo.ext.Exml;
public class SavedSearchWidget extends SavedSearchWidgetBase{

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.savedSearchWidget";

    public*/function SavedSearchWidget$(config/*:SavedSearchWidget = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.dashboard.widgets.search.SavedSearchWidgetBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.dashboard.widgets.search.SavedSearchWidgetBase,{});
    var defaults_$1/*:SavedSearchWidget*/ =AS3.cast(SavedSearchWidget,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.header = false;
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$jS30(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.dashboard.widgets.search.SavedSearchWidgetBase",
      alias: "widget.com.coremedia.cms.editor.sdk.config.savedSearchWidget",
      constructor: SavedSearchWidget$,
      super$jS30: function() {
        com.coremedia.cms.editor.sdk.dashboard.widgets.search.SavedSearchWidgetBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.cms.editor.sdk.dashboard.widgets.search.SavedSearchWidgetBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
