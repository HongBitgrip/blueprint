Ext.define("com.coremedia.cms.editor.sdk.dashboard.widgets.search.SimpleSearchWidgetState", function(SimpleSearchWidgetState) {/*package com.coremedia.cms.editor.sdk.dashboard.widgets.search{
import com.coremedia.cms.editor.sdk.dashboard.WidgetState;
import net.jangaroo.ext.Exml;
[PublicApi]
/**
 A widget state for adding simple search widgets to the dashboard
 default view.
 * /
public class SimpleSearchWidgetState extends WidgetState{

    public*/function SimpleSearchWidgetState$(config/*:SimpleSearchWidgetState = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:com.coremedia.cms.editor.sdk.dashboard.WidgetState*/ =AS3.cast(com.coremedia.cms.editor.sdk.dashboard.WidgetState,{});
    var defaults_$1/*:SimpleSearchWidgetState*/ =AS3.cast(SimpleSearchWidgetState,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.widgetTypeId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.dashboard.widgets.search.SimpleSearchWidget.xtype);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$z3iW(config_$1);
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
    public var contentType:String;


    /**
     Whether to restrict the search to the preferred site.
     Default true.
     * /
    [Bindable]
    public var preferredSite:Boolean;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.dashboard.WidgetState",
      metadata: {"": ["PublicApi"]},
      constructor: SimpleSearchWidgetState$,
      super$z3iW: function() {
        com.coremedia.cms.editor.sdk.dashboard.WidgetState.prototype.constructor.apply(this, arguments);
      },
      config: {
        searchText: null,
        contentType: null,
        preferredSite: false
      },
      requires: [
        "com.coremedia.cms.editor.sdk.dashboard.WidgetState",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.cms.editor.sdk.dashboard.widgets.search.SimpleSearchWidget"]
    };
});
