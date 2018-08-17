Ext.define("com.coremedia.cms.editor.sdk.dashboard.ToggleDashboardActionBase", function(ToggleDashboardActionBase) {/*package com.coremedia.cms.editor.sdk.dashboard {

import com.coremedia.cms.editor.sdk.desktop.WorkArea;
import com.coremedia.cms.editor.sdk.desktop.WorkAreaBase;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.ui.actions.ToggleComponentAction;

import ext.Component;
import ext.ComponentManager;
import ext.Ext;
import ext.tab.TabPanel;

import mx.resources.ResourceManager;

/**
 * An action to toggle the dashboard tab.
 * /
[ResourceBundle('com.coremedia.cms.editor.sdk.dashboard.Dashboard')]
public class ToggleDashboardActionBase extends ToggleComponentAction {

  public*/ function ToggleDashboardActionBase$(config/*:ToggleDashboardActionBase = null*/) {if(arguments.length<=0)config=null;
    this.super$1kCp(AS3.cast(ToggleDashboardActionBase,Ext.apply({
      iconCls: mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.sdk.dashboard.Dashboard', 'Action_showDashboard_icon'),
      text: mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.sdk.dashboard.Dashboard', 'Action_showDashboard_text'),
      tooltip: mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.sdk.dashboard.Dashboard', 'Action_showDashboard_tooltip')
    }, config)));

    this.monitorWorkArea$1kCp(true);
  }/*

  override protected*/ function pressHandler()/*:void*/ {
    com.coremedia.ui.actions.ToggleComponentAction.prototype.pressHandler.call(this);
    var workArea/*:WorkArea*/ =AS3.as( com.coremedia.cms.editor.sdk.editorContext.getWorkArea(),  com.coremedia.cms.editor.sdk.desktop.WorkArea);
    if (!(AS3.is(workArea.getActiveTab(),  com.coremedia.cms.editor.sdk.dashboard.Dashboard))) {
      workArea.toggleSingletonTab(com.coremedia.cms.editor.sdk.dashboard.Dashboard.xtype);
      var dashboard/*:Dashboard*/ =AS3.as( workArea.getActiveTab(),  com.coremedia.cms.editor.sdk.dashboard.Dashboard);
      if (this.triggeredByUser) {
        dashboard && dashboard.isFocusable(true) && dashboard.focus();
      }
    }
  }/*

  override protected*/ function unpressHandler()/*:void*/ {
    com.coremedia.ui.actions.ToggleComponentAction.prototype.unpressHandler.call(this);
    var workArea/*:WorkArea*/ =AS3.as( com.coremedia.cms.editor.sdk.editorContext.getWorkArea(),  com.coremedia.cms.editor.sdk.desktop.WorkArea);
    if (AS3.is(workArea.getActiveTab(),  com.coremedia.cms.editor.sdk.dashboard.Dashboard)) {
      workArea.toggleSingletonTab(com.coremedia.cms.editor.sdk.dashboard.Dashboard.xtype);
    }
  }/*

  private*/ function monitorWorkArea(attachListenerIfNotCreated/*:Boolean = false*/)/*:void*/ {if(arguments.length<=0)attachListenerIfNotCreated=false;
    var workArea/*:WorkArea*/ =AS3.as( com.coremedia.cms.editor.sdk.editorContext.getWorkArea(),  com.coremedia.cms.editor.sdk.desktop.WorkArea);
    if (workArea) {
      workArea.mon(workArea, 'tabchange',AS3.bind( this,"updateToggleState$1kCp"));
      this.updateToggleState$1kCp(workArea, workArea.getActiveTab());
    } else {
      if (attachListenerIfNotCreated) {
        Ext.ComponentManager.onAvailable(com.coremedia.cms.editor.sdk.desktop.WorkAreaBase.COMPONENT_ID,AS3.bind( this,"monitorWorkArea$1kCp"));
      }
    }
  }/*

  private*/ function updateToggleState(tabPanel/*:TabPanel*/, tab/*:Component*/)/*:void*/ {
    AS3.setBindable(this,"pressed" ,AS3.is( tab,  com.coremedia.cms.editor.sdk.dashboard.Dashboard));
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.actions.ToggleComponentAction",
      constructor: ToggleDashboardActionBase$,
      super$1kCp: function() {
        com.coremedia.ui.actions.ToggleComponentAction.prototype.constructor.apply(this, arguments);
      },
      pressHandler: pressHandler,
      unpressHandler: unpressHandler,
      monitorWorkArea$1kCp: monitorWorkArea,
      updateToggleState$1kCp: updateToggleState,
      requires: [
        "Ext",
        "Ext.ComponentManager",
        "com.coremedia.cms.editor.sdk.dashboard.Dashboard_properties",
        "com.coremedia.ui.actions.ToggleComponentAction",
        "mx.resources.ResourceManager"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.dashboard.Dashboard",
        "com.coremedia.cms.editor.sdk.desktop.WorkArea",
        "com.coremedia.cms.editor.sdk.desktop.WorkAreaBase",
        "com.coremedia.cms.editor.sdk.editorContext"
      ]
    };
});
