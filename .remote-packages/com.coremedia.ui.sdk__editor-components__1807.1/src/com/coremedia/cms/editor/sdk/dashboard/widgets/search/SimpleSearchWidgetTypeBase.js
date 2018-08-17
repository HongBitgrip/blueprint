Ext.define("com.coremedia.cms.editor.sdk.dashboard.widgets.search.SimpleSearchWidgetTypeBase", function(SimpleSearchWidgetTypeBase) {/*package com.coremedia.cms.editor.sdk.dashboard.widgets.search {

import com.coremedia.cms.editor.sdk.dashboard.ComponentBasedWidgetType;

import mx.resources.ResourceManager;

[PublicApi]
[ResourceBundle('com.coremedia.cms.editor.sdk.dashboard.Dashboard')]
public class SimpleSearchWidgetTypeBase extends ComponentBasedWidgetType {
  public*/ function SimpleSearchWidgetTypeBase$(config/*:ComponentBasedWidgetType = null*/) {if(arguments.length<=0)config=null;
    this.super$WwWy(config);
  }/*

  override public*/ function getTitle(untypedState/*:Object*/)/*:String*/ {
    return mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.sdk.dashboard.Dashboard', 'Widget_SimpleSearch_name') + ": " +
            com.coremedia.cms.editor.sdk.dashboard.widgets.search.SearchWidgetTitleFormatter.formatTextType(untypedState.searchText, untypedState.contentType, untypedState.preferredSite);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.dashboard.ComponentBasedWidgetType",
      metadata: {"": ["PublicApi"]},
      constructor: SimpleSearchWidgetTypeBase$,
      super$WwWy: function() {
        com.coremedia.cms.editor.sdk.dashboard.ComponentBasedWidgetType.prototype.constructor.apply(this, arguments);
      },
      getTitle: getTitle,
      requires: [
        "com.coremedia.cms.editor.sdk.dashboard.ComponentBasedWidgetType",
        "com.coremedia.cms.editor.sdk.dashboard.Dashboard_properties",
        "mx.resources.ResourceManager"
      ],
      uses: ["com.coremedia.cms.editor.sdk.dashboard.widgets.search.SearchWidgetTitleFormatter"]
    };
});
