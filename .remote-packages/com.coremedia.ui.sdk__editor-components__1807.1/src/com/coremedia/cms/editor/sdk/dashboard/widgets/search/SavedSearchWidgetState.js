Ext.define("com.coremedia.cms.editor.sdk.dashboard.widgets.search.SavedSearchWidgetState", function(SavedSearchWidgetState) {/*package com.coremedia.cms.editor.sdk.dashboard.widgets.search{
import com.coremedia.cms.editor.sdk.dashboard.WidgetState;
import net.jangaroo.ext.Exml;
public class SavedSearchWidgetState extends WidgetState{

    public*/function SavedSearchWidgetState$(config/*:SavedSearchWidgetState = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:com.coremedia.cms.editor.sdk.dashboard.WidgetState*/ =AS3.cast(com.coremedia.cms.editor.sdk.dashboard.WidgetState,{});
    var defaults_$1/*:SavedSearchWidgetState*/ =AS3.cast(SavedSearchWidgetState,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.widgetTypeId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.dashboard.widgets.search.SavedSearchWidgetType.WIDGET_TYPE_ID);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$J8kn(config_$1);
  }/*

    /**
     The collection view model state.
     * /
    [Bindable]
    public var search:Object;


    /**
     The title to use for this widget.
     * /
    [Bindable]
    public var title:String;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.dashboard.WidgetState",
      constructor: SavedSearchWidgetState$,
      super$J8kn: function() {
        com.coremedia.cms.editor.sdk.dashboard.WidgetState.prototype.constructor.apply(this, arguments);
      },
      config: {
        search: null,
        title: null
      },
      requires: [
        "com.coremedia.cms.editor.sdk.dashboard.WidgetState",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.cms.editor.sdk.dashboard.widgets.search.SavedSearchWidgetType"]
    };
});
