Ext.define("com.coremedia.cms.editor.sdk.dashboard.widgets.search.QuickSearchWidgetTypeBase", function(QuickSearchWidgetTypeBase) {/*package com.coremedia.cms.editor.sdk.dashboard.widgets.search {

import com.coremedia.cms.editor.sdk.dashboard.ComponentBasedWidgetType;

import mx.resources.ResourceManager;

[PublicApi]
[ResourceBundle('com.coremedia.cms.editor.sdk.dashboard.Dashboard')]
public class QuickSearchWidgetTypeBase extends ComponentBasedWidgetType {
  public*/ function QuickSearchWidgetTypeBase$(config/*:ComponentBasedWidgetType = null*/) {if(arguments.length<=0)config=null;
    this.super$A4fn(config);
  }/*

  override public*/ function getTitle(untypedState/*:Object*/)/*:String*/ {
    var state/*:QuickSearchWidgetState*/ = AS3.cast(com.coremedia.cms.editor.sdk.dashboard.widgets.search.QuickSearchWidgetState,untypedState);
    return mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.sdk.dashboard.Dashboard', 'Widget_QuickSearch_name') + ": " +
            com.coremedia.cms.editor.sdk.dashboard.widgets.search.SearchWidgetTitleFormatter.formatTextType(AS3.getBindable(state,"searchText"), AS3.getBindable(state,"contentType"));
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.dashboard.ComponentBasedWidgetType",
      metadata: {"": ["PublicApi"]},
      constructor: QuickSearchWidgetTypeBase$,
      super$A4fn: function() {
        com.coremedia.cms.editor.sdk.dashboard.ComponentBasedWidgetType.prototype.constructor.apply(this, arguments);
      },
      getTitle: getTitle,
      requires: [
        "com.coremedia.cms.editor.sdk.dashboard.ComponentBasedWidgetType",
        "com.coremedia.cms.editor.sdk.dashboard.Dashboard_properties",
        "mx.resources.ResourceManager"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.dashboard.widgets.search.QuickSearchWidgetState",
        "com.coremedia.cms.editor.sdk.dashboard.widgets.search.SearchWidgetTitleFormatter"
      ]
    };
});
