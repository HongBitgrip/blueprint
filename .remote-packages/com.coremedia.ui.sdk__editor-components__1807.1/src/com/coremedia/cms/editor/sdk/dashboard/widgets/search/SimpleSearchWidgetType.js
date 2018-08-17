Ext.define("com.coremedia.cms.editor.sdk.dashboard.widgets.search.SimpleSearchWidgetType", function(SimpleSearchWidgetType) {/*package com.coremedia.cms.editor.sdk.dashboard.widgets.search{
import com.coremedia.cms.editor.sdk.dashboard.widgets.search.*;
import net.jangaroo.ext.Exml;

    [PublicApi]
    [ResourceBundle('com.coremedia.cms.editor.sdk.dashboard.Dashboard')]
/**
 A widget type for a widget that allows very simple searches
 to be edited directly in the dashboard.
 You can specify search terms and limit the search
 to a specific document type.
 * /
public class SimpleSearchWidgetType extends SimpleSearchWidgetTypeBase{

    import mx.resources.ResourceManager;

    public*/function SimpleSearchWidgetType$(config/*:SimpleSearchWidgetType = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.dashboard.widgets.search.SimpleSearchWidgetTypeBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.dashboard.widgets.search.SimpleSearchWidgetTypeBase,{});
    var defaults_$1/*:SimpleSearchWidgetType*/ =AS3.cast(SimpleSearchWidgetType,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"name" ,net.jangaroo.ext.Exml.asString( mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.sdk.dashboard.Dashboard', 'Widget_SimpleSearch_name')));
    AS3.setBindable(config_$1,"description" ,net.jangaroo.ext.Exml.asString( mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.sdk.dashboard.Dashboard', 'Widget_SimpleSearch_description')));
    AS3.setBindable(config_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.sdk.dashboard.Dashboard', 'Widget_SimpleSearch_icon')));
    var editor_SimpleSearchWidget_29_5_$1/*: com.coremedia.cms.editor.sdk.dashboard.widgets.search.SimpleSearchWidget*/ =AS3.cast(com.coremedia.cms.editor.sdk.dashboard.widgets.search.SimpleSearchWidget,{});
    AS3.setBindable(config_$1,"widgetComponent" , editor_SimpleSearchWidget_29_5_$1);
    var editor_SimpleSearchWidgetEditor_32_5_$1/*: com.coremedia.cms.editor.sdk.dashboard.widgets.search.SimpleSearchWidgetEditor*/ =AS3.cast(com.coremedia.cms.editor.sdk.dashboard.widgets.search.SimpleSearchWidgetEditor,{});
    AS3.setBindable(config_$1,"editorComponent" , editor_SimpleSearchWidgetEditor_32_5_$1);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$Z8hB(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.dashboard.widgets.search.SimpleSearchWidgetTypeBase",
      metadata: {"": ["PublicApi"]},
      constructor: SimpleSearchWidgetType$,
      super$Z8hB: function() {
        com.coremedia.cms.editor.sdk.dashboard.widgets.search.SimpleSearchWidgetTypeBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.cms.editor.sdk.dashboard.Dashboard_properties",
        "com.coremedia.cms.editor.sdk.dashboard.widgets.search.SimpleSearchWidgetTypeBase",
        "mx.resources.ResourceManager",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.dashboard.widgets.search.SimpleSearchWidget",
        "com.coremedia.cms.editor.sdk.dashboard.widgets.search.SimpleSearchWidgetEditor"
      ]
    };
});
