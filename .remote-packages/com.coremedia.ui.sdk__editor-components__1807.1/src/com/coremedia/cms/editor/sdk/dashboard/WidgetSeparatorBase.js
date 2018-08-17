Ext.define("com.coremedia.cms.editor.sdk.dashboard.WidgetSeparatorBase", function(WidgetSeparatorBase) {/*package com.coremedia.cms.editor.sdk.dashboard {

import com.coremedia.cms.editor.sdk.editorContext;

import ext.button.Button;

public class WidgetSeparatorBase extends Button {
  public*/ function WidgetSeparatorBase$(config/*:WidgetSeparator = null*/) {if(arguments.length<=0)config=null;
    this.super$c4E_(config);
  }/*

  protected*/ function addWidget()/*:void*/ {
    if (mayAdd$static()) {
      var column/*:DashboardColumn*/ = AS3.cast(com.coremedia.cms.editor.sdk.dashboard.DashboardColumn,this.findParentByType(com.coremedia.cms.editor.sdk.dashboard.DashboardColumn.xtype));
      var widgetWrp/*:WidgetWrapper*/ =AS3.as( this.findParentByType(com.coremedia.cms.editor.sdk.dashboard.WidgetWrapper.xtype),  com.coremedia.cms.editor.sdk.dashboard.WidgetWrapper);

      // If a widget wrapper as parent is found, the new widget is inserted after it.
      // If not, the separator is the initial widget separator of the column and the new widget
      // is inserted directly after the separator.
      var widget/*:WidgetWrapper*/ = column.insertWidgetAfter(null, widgetWrp ? widgetWrp : this);
      // widget was added via user interface, focus it
      widget && widget.focus();
    }
  }/*

  private static*/ function mayAdd$static()/*:Boolean*/ {
    return com.coremedia.cms.editor.sdk.editorContext.getDashboardConfiguration().getManuallyCreatableTypes().length > 0;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.button.Button",
      constructor: WidgetSeparatorBase$,
      super$c4E_: function() {
        Ext.button.Button.prototype.constructor.apply(this, arguments);
      },
      addWidget: addWidget,
      requires: ["Ext.button.Button"],
      uses: [
        "com.coremedia.cms.editor.sdk.dashboard.DashboardColumn",
        "com.coremedia.cms.editor.sdk.dashboard.WidgetWrapper",
        "com.coremedia.cms.editor.sdk.editorContext"
      ]
    };
});
