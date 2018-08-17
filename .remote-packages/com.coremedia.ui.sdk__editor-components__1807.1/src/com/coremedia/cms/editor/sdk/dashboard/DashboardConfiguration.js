Ext.define("com.coremedia.cms.editor.sdk.dashboard.DashboardConfiguration", function(DashboardConfiguration) {/*package com.coremedia.cms.editor.sdk.dashboard {

import ext.Base;

/**
 * A configuration for the dashboard tab. The configuration specifies both the
 * default configuration of the dashboard and the set of widget types that can
 * be added to the dashboard.
 * /
[PublicApi]
public class DashboardConfiguration extends Base {

  public static const xtype:String = "com.coremedia.cms.editor.sdk.config.dashboardConfiguration";

  /**
   * The default widgets to show. Each entry in this array
   * must be an instance of <code>WidgetState</code>.
   *
   * @see WidgetState
   * /
  [Bindable]
  public var widgets:Array;

  /**
   * The widget types that can be added to the dashboard. Each entry in this array
   * must be an instance of <code>WidgetType</code>.
   *
   * @see WidgetType
   * /
  [Bindable]
  public var types:Array;

  /**
   * Use this constructor to create a typed config object for the dashboard.
   * /
  public*/ function DashboardConfiguration$(config/*:DashboardConfiguration = null*/) {this.super$8rhs();if(arguments.length<=0)config=null;
    this.initConfig(config);
  }/*

  /**
   * Return the list of widget types that a user can add to the dashboard.
   * Each entry in this array is an instance of <code>WidgetType</code>.
   *
   * @return the manually creatable widget types
   * /
  public*/ function getManuallyCreatableTypes()/*:Array*/ {
    return AS3.getBindable(this,"types").filter(function(widgetType/*:WidgetType*/)/*:Boolean*/ {
      return widgetType.isManuallyCreatable();
    });
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.Base",
      metadata: {"": ["PublicApi"]},
      alias: "widget.com.coremedia.cms.editor.sdk.config.dashboardConfiguration",
      constructor: DashboardConfiguration$,
      super$8rhs: function() {
        Ext.Base.prototype.constructor.apply(this, arguments);
      },
      getManuallyCreatableTypes: getManuallyCreatableTypes,
      config: {
        widgets: null,
        types: null
      }
    };
});
