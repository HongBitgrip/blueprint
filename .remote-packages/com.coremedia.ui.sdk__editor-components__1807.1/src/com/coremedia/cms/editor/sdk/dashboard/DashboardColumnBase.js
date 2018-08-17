Ext.define("com.coremedia.cms.editor.sdk.dashboard.DashboardColumnBase", function(DashboardColumnBase) {/*package com.coremedia.cms.editor.sdk.dashboard {
import com.coremedia.cms.editor.sdk.editorContext;

import ext.Component;
import ext.container.Container;
import ext.dom.Element;

public class DashboardColumnBase extends Container {
  public*/ function DashboardColumnBase$(config/*:DashboardColumn = null*/) {if(arguments.length<=0)config=null;
    this.super$0er7(config);
  }/*

  public*/ function reload()/*:void*/ {
    this.itemCollection.each(function (item/*:Component*/)/*:void*/ {
      var wrapper/*:WidgetWrapper*/ =AS3.as( item,  com.coremedia.cms.editor.sdk.dashboard.WidgetWrapper);
      var widget/*:Reloadable*/ = wrapper &&AS3.as( wrapper.getWidgetComponent(),  com.coremedia.cms.editor.sdk.dashboard.Reloadable);
      widget && widget.reload();
    });
  }/*

  internal*/ function addWidgetWrapper(wrapper/*:WidgetWrapper*/)/*:void*/ {
    this.add(wrapper);
  }/*

  internal*/ function getTotalRowSpan()/*:int*/ {
    var result/*:int*/ = 0;
    for (var j/*:int*/ = 0; j < this.itemCollection.length; j++) {
      var widgetWrapper/*:WidgetWrapper*/ =AS3.as( this.itemCollection.get(j),  com.coremedia.cms.editor.sdk.dashboard.WidgetWrapper);
      if (widgetWrapper) {
        result = result + widgetWrapper.getRowSpan();
      }
    }
    return result;
  }/*

  internal*/ function insertWidgetAfter(state/*:WidgetState = null*/, referenceComponent/*:Component = null*/, inEditMode/*:Boolean = true*/)/*:WidgetWrapper*/ {var this$=this;switch(arguments.length){case 0:state=null;case 1:referenceComponent=null;case 2:inEditMode=true;}
    if (!state) {
      var stateConfig/*:WidgetState*/ = AS3.cast(com.coremedia.cms.editor.sdk.dashboard.WidgetState,{});
      var dashboardConfiguration/*:DashboardConfiguration*/ = com.coremedia.cms.editor.sdk.editorContext.getDashboardConfiguration();
      var manuallyCreatableTypes/*:Array*/ = dashboardConfiguration.getManuallyCreatableTypes();
      if (manuallyCreatableTypes.length === 0) {
        return null;
      }
      var defaultWidgetType/*:WidgetType*/ = manuallyCreatableTypes[0];
      stateConfig.widgetTypeId = defaultWidgetType.getId();
      state = AS3.cast(com.coremedia.cms.editor.sdk.dashboard.WidgetState,stateConfig);
    }

    var newWrapper/*:WidgetWrapper*/ = com.coremedia.cms.editor.sdk.dashboard.DashboardBase.createWrappedWidget(state, inEditMode);
    var insertPos/*:Number*/ = referenceComponent ? this.itemCollection.indexOf(referenceComponent) + 1 : this.itemCollection.length;
    this.on("afterlayout", function()/*:void*/ {
      var scrollParent/*:Element*/ = this$.getEl();
      while (scrollParent && !scrollParent.isScrollable()) {
        scrollParent = scrollParent.parent();
      }
      if (scrollParent) {
        newWrapper.getEl().scrollIntoView(scrollParent);
      }
    }, null, {single:true});
    var widget/*:WidgetWrapper*/ =AS3.as( this.insert(insertPos, newWrapper),  com.coremedia.cms.editor.sdk.dashboard.WidgetWrapper);
    // EXT6_PERFORMANCE updateLayout();
    return widget;
  }/*

  internal*/ function removeWidget(wrapper/*:WidgetWrapper*/)/*:void*/ {
    this.remove(wrapper, true);
    // EXT6_PERFORMANCE updateLayout();
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.container.Container",
      constructor: DashboardColumnBase$,
      super$0er7: function() {
        Ext.container.Container.prototype.constructor.apply(this, arguments);
      },
      reload: reload,
      addWidgetWrapper: addWidgetWrapper,
      getTotalRowSpan: getTotalRowSpan,
      insertWidgetAfter: insertWidgetAfter,
      removeWidget: removeWidget,
      requires: ["Ext.container.Container"],
      uses: [
        "com.coremedia.cms.editor.sdk.dashboard.DashboardBase",
        "com.coremedia.cms.editor.sdk.dashboard.Reloadable",
        "com.coremedia.cms.editor.sdk.dashboard.WidgetState",
        "com.coremedia.cms.editor.sdk.dashboard.WidgetWrapper",
        "com.coremedia.cms.editor.sdk.editorContext"
      ]
    };
});
