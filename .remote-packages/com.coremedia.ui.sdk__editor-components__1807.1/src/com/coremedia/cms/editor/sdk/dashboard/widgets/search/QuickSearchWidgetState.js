Ext.define("com.coremedia.cms.editor.sdk.dashboard.widgets.search.QuickSearchWidgetState", function(QuickSearchWidgetState) {/*package com.coremedia.cms.editor.sdk.dashboard.widgets.search{
import com.coremedia.cms.editor.sdk.dashboard.WidgetState;
import net.jangaroo.ext.Exml;
[PublicApi]
/**
 A widget state for adding quick search widgets to the dashboard
 default view.
 * /
public class QuickSearchWidgetState extends WidgetState{

    public*/function QuickSearchWidgetState$(config/*:QuickSearchWidgetState = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:com.coremedia.cms.editor.sdk.dashboard.WidgetState*/ =AS3.cast(com.coremedia.cms.editor.sdk.dashboard.WidgetState,{});
    var defaults_$1/*:QuickSearchWidgetState*/ =AS3.cast(QuickSearchWidgetState,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.widgetTypeId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.dashboard.widgets.search.QuickSearchWidget.xtype);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$fCqB(config_$1);
  }/*

    /**
     The search text that is used for the collection view.
     Default "".
     * /
    [Bindable]
    public var searchText:String;


    /**
     The content type that is used in the content type filter.
     Default "Document_".
     * /
    [Bindable]
    public var contentType:String;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.dashboard.WidgetState",
      metadata: {"": ["PublicApi"]},
      constructor: QuickSearchWidgetState$,
      super$fCqB: function() {
        com.coremedia.cms.editor.sdk.dashboard.WidgetState.prototype.constructor.apply(this, arguments);
      },
      config: {
        searchText: null,
        contentType: null
      },
      requires: [
        "com.coremedia.cms.editor.sdk.dashboard.WidgetState",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.cms.editor.sdk.dashboard.widgets.search.QuickSearchWidget"]
    };
});
