Ext.define("com.coremedia.cms.editor.sdk.dashboard.widgets.search.QuickSearchWidgetType", function(QuickSearchWidgetType) {/*package com.coremedia.cms.editor.sdk.dashboard.widgets.search{
import com.coremedia.cms.editor.sdk.dashboard.widgets.search.*;
import net.jangaroo.ext.Exml;

    [PublicApi]
    [ResourceBundle('com.coremedia.cms.editor.sdk.dashboard.Dashboard')]
/**
 A widget type for displaying a search dialog directly in the dashboard.
 * /
public class QuickSearchWidgetType extends QuickSearchWidgetTypeBase{

    import mx.resources.ResourceManager;

    public*/function QuickSearchWidgetType$(config/*:QuickSearchWidgetType = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.dashboard.widgets.search.QuickSearchWidgetTypeBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.dashboard.widgets.search.QuickSearchWidgetTypeBase,{});
    var defaults_$1/*:QuickSearchWidgetType*/ =AS3.cast(QuickSearchWidgetType,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"name" ,net.jangaroo.ext.Exml.asString( mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.sdk.dashboard.Dashboard', 'Widget_QuickSearch_name')));
    AS3.setBindable(config_$1,"description" ,net.jangaroo.ext.Exml.asString( mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.sdk.dashboard.Dashboard', 'Widget_QuickSearch_description')));
    AS3.setBindable(config_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.sdk.dashboard.Dashboard', 'Widget_QuickSearch_icon')));
    var editor_QuickSearchWidget_26_5_$1/*: com.coremedia.cms.editor.sdk.dashboard.widgets.search.QuickSearchWidget*/ =AS3.cast(com.coremedia.cms.editor.sdk.dashboard.widgets.search.QuickSearchWidget,{});
    AS3.setBindable(config_$1,"widgetComponent" , editor_QuickSearchWidget_26_5_$1);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$t8_0(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.dashboard.widgets.search.QuickSearchWidgetTypeBase",
      metadata: {"": ["PublicApi"]},
      constructor: QuickSearchWidgetType$,
      super$t8_0: function() {
        com.coremedia.cms.editor.sdk.dashboard.widgets.search.QuickSearchWidgetTypeBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.cms.editor.sdk.dashboard.Dashboard_properties",
        "com.coremedia.cms.editor.sdk.dashboard.widgets.search.QuickSearchWidgetTypeBase",
        "mx.resources.ResourceManager",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.cms.editor.sdk.dashboard.widgets.search.QuickSearchWidget"]
    };
});
