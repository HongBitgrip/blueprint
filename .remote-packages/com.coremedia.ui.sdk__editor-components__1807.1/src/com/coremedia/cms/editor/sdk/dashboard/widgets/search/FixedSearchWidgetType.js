Ext.define("com.coremedia.cms.editor.sdk.dashboard.widgets.search.FixedSearchWidgetType", function(FixedSearchWidgetType) {/*package com.coremedia.cms.editor.sdk.dashboard.widgets.search{
import com.coremedia.cms.editor.sdk.dashboard.ComponentBasedWidgetType;
import com.coremedia.cms.editor.sdk.collectionview.SearchState;
import net.jangaroo.ext.Exml;
import com.coremedia.cms.editor.sdk.dashboard.widgets.search.FixedSearchWidget;

    [PublicApi]
    [ResourceBundle('com.coremedia.cms.editor.sdk.dashboard.Dashboard')]
/**
 A widget type for displaying complex preconfigured searches.
 Unlike many other widget types, this type does not define a fixed widget type id
 or provide a specific WidgetState subclass.
 Instead, you specify a widget type id when defining a fixed search widget type,
 provide a search state object in the widget type definition
 and use a plain WidgetState with your own widget type id for placing a
 widget on the default dashboard.
 Besides the search state specification, you will typically provide a name and description
 for your new widget type.

 @see com.coremedia.cms.editor.sdk.collectionview.SearchState
 @see com.coremedia.cms.editor.sdk.config.searchState
 @see com.coremedia.cms.editor.sdk.dashboard.WidgetState
 * /
public class FixedSearchWidgetType extends ComponentBasedWidgetType{

    import mx.resources.ResourceManager;

    public*/function FixedSearchWidgetType$(config/*:FixedSearchWidgetType = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:com.coremedia.cms.editor.sdk.dashboard.ComponentBasedWidgetType*/ =AS3.cast(com.coremedia.cms.editor.sdk.dashboard.ComponentBasedWidgetType,{});
    var defaults_$1/*:FixedSearchWidgetType*/ =AS3.cast(FixedSearchWidgetType,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"name" ,net.jangaroo.ext.Exml.asString( mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.sdk.dashboard.Dashboard', 'Widget_FixedSearch_name')));
    AS3.setBindable(config_$1,"description" ,net.jangaroo.ext.Exml.asString( mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.sdk.dashboard.Dashboard', 'Widget_FixedSearch_description')));
    AS3.setBindable(config_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.sdk.dashboard.Dashboard', 'Widget_FixedSearch_icon')));
    var editor_FixedSearchWidget_43_5_$1/*:com.coremedia.cms.editor.sdk.dashboard.widgets.search.FixedSearchWidget*/ =AS3.cast(com.coremedia.cms.editor.sdk.dashboard.widgets.search.FixedSearchWidget,{});
    editor_FixedSearchWidget_43_5_$1.search = AS3.getBindable(config,"search");
    AS3.setBindable(config_$1,"widgetComponent" , editor_FixedSearchWidget_43_5_$1);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$BcC7(config_$1);
  }/*

    /**
     The search state to use for widgets of this type.
     * /
    [Bindable]
    public var search:com.coremedia.cms.editor.sdk.collectionview.SearchState;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.dashboard.ComponentBasedWidgetType",
      metadata: {"": ["PublicApi"]},
      constructor: FixedSearchWidgetType$,
      super$BcC7: function() {
        com.coremedia.cms.editor.sdk.dashboard.ComponentBasedWidgetType.prototype.constructor.apply(this, arguments);
      },
      config: {search: null},
      requires: [
        "com.coremedia.cms.editor.sdk.dashboard.ComponentBasedWidgetType",
        "com.coremedia.cms.editor.sdk.dashboard.Dashboard_properties",
        "mx.resources.ResourceManager",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.cms.editor.sdk.dashboard.widgets.search.FixedSearchWidget"]
    };
});
