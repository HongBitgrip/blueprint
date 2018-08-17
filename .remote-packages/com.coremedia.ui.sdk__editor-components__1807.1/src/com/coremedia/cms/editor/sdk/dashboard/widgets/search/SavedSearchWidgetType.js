Ext.define("com.coremedia.cms.editor.sdk.dashboard.widgets.search.SavedSearchWidgetType", function(SavedSearchWidgetType) {/*package com.coremedia.cms.editor.sdk.dashboard.widgets.search{
import com.coremedia.cms.editor.sdk.dashboard.ComponentBasedWidgetType;
import net.jangaroo.ext.Exml;
import com.coremedia.cms.editor.sdk.dashboard.widgets.search.SavedSearchWidget;

    [PublicApi]
    [ResourceBundle('com.coremedia.cms.editor.sdk.dashboard.Dashboard')]
/**
 A widget type for displaying saved searches. If this widget type is configured (the default),
 searches in the library can be saved to the dashboard.
 * /
public class SavedSearchWidgetType extends ComponentBasedWidgetType{

    import mx.resources.ResourceManager;

    public static const WIDGET_TYPE_ID:String = "com.coremedia.cms.editor.sdk.dashboard.widgets.search.savedSearchWidget";

    public*/function SavedSearchWidgetType$(config/*:SavedSearchWidgetType = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:com.coremedia.cms.editor.sdk.dashboard.ComponentBasedWidgetType*/ =AS3.cast(com.coremedia.cms.editor.sdk.dashboard.ComponentBasedWidgetType,{});
    var defaults_$1/*:SavedSearchWidgetType*/ =AS3.cast(SavedSearchWidgetType,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"id_" ,net.jangaroo.ext.Exml.asString( SavedSearchWidgetType.WIDGET_TYPE_ID));
    AS3.setBindable(config_$1,"description" ,net.jangaroo.ext.Exml.asString( mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.sdk.dashboard.Dashboard', 'Widget_SavedSearch_description')));
    AS3.setBindable(config_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.sdk.dashboard.Dashboard', 'Widget_SavedSearch_icon')));
    AS3.setBindable(config_$1,"manuallyCreatable" , false);
    var editor_SavedSearchWidget_29_5_$1/*:com.coremedia.cms.editor.sdk.dashboard.widgets.search.SavedSearchWidget*/ =AS3.cast(com.coremedia.cms.editor.sdk.dashboard.widgets.search.SavedSearchWidget,{});
    AS3.setBindable(config_$1,"widgetComponent" , editor_SavedSearchWidget_29_5_$1);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$ZsGQ(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.dashboard.ComponentBasedWidgetType",
      metadata: {"": ["PublicApi"]},
      constructor: SavedSearchWidgetType$,
      super$ZsGQ: function() {
        com.coremedia.cms.editor.sdk.dashboard.ComponentBasedWidgetType.prototype.constructor.apply(this, arguments);
      },
      statics: {WIDGET_TYPE_ID: "com.coremedia.cms.editor.sdk.dashboard.widgets.search.savedSearchWidget"},
      requires: [
        "com.coremedia.cms.editor.sdk.dashboard.ComponentBasedWidgetType",
        "com.coremedia.cms.editor.sdk.dashboard.Dashboard_properties",
        "mx.resources.ResourceManager",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.cms.editor.sdk.dashboard.widgets.search.SavedSearchWidget"]
    };
});
