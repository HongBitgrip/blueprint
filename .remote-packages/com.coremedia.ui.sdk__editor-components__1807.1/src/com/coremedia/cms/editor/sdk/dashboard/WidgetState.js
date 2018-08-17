Ext.define("com.coremedia.cms.editor.sdk.dashboard.WidgetState", function(WidgetState) {/*package com.coremedia.cms.editor.sdk.dashboard {

import ext.Ext;

import joo.JavaScriptObject;

/**
 * The state of a widget. Besides the properties mentioned in this
 * interface, a widget state may contain arbitrary many other properties
 * that are appropriate for the widget's type.
 * /
// By inheriting from JavaScriptObject, we can hide the meta-properties like $class,
// which would make the object difficult to serialize.
[PublicApi]
public class WidgetState extends JavaScriptObject {

  /**
   * an identifier of the column of the previous widget; this is the default
   * /
  public static const SAME:String = "same";

  /**
   * an identifier of the column to the right of the column of the previous widget
   * /
  public static const NEXT:String = "next";

  public*/ function WidgetState$(config/*:WidgetState = null*/) {this.super$supv();if(arguments.length<=0)config=null;
    Ext.apply(this, config);
  }/*

  /**
   * The widget type. This field does not belong to the state of any given widget,
   * but serves to select the correct widget type when restoring a widget.
   *
   * @see com.coremedia.cms.editor.sdk.dashboard.WidgetType#getId()
   * /
  public var widgetTypeId:String;

  /**
   * The column in which this widget should be placed. Use a column number
   * (starting with 0 for the leftmost column) or one of the constants SAME and NEXT.
   *
   * @see com.coremedia.cms.editor.sdk.dashboard.WidgetState#SAME
   * @see com.coremedia.cms.editor.sdk.dashboard.WidgetState#NEXT
   * /
  public var column:*;

  /**
   * The number of rows taken. Default 1.
   * /
  public var rowspan:Number;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "joo.JavaScriptObject",
      metadata: {"": ["PublicApi"]},
      constructor: WidgetState$,
      super$supv: function() {
        joo.JavaScriptObject.prototype.constructor.apply(this, arguments);
      },
      widgetTypeId: null,
      column: undefined,
      rowspan: NaN,
      statics: {
        SAME: "same",
        NEXT: "next"
      },
      requires: [
        "Ext",
        "joo.JavaScriptObject"
      ]
    };
});
