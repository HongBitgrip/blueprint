Ext.define("com.coremedia.cms.editor.sdk.desktop.SelectTabActionBase", function(SelectTabActionBase) {/*package com.coremedia.cms.editor.sdk.desktop {
import com.coremedia.cms.editor.sdk.editorContext;

import ext.Action;
import ext.Component;
import ext.panel.Panel;
import ext.tab.TabPanel;

public class SelectTabActionBase extends Action {
  private var tabId:Number;
  private var direction:String;

  public*/ function SelectTabActionBase$(config/*:SelectTabAction = null*/) {if(arguments.length<=0)config=null;
    this.super$X8zK(config);
    this.tabId$X8zK = AS3.getBindable(config,"tabId");
    this.direction$X8zK = AS3.getBindable(config,"direction");
    this.setHandler(AS3.bind(this,"handleAction$X8zK"), this);
  }/*

  private*/ function handleAction()/*:void*/ {
    var workAreaTabProxies/*:TabPanel*/ = com.coremedia.cms.editor.sdk.editorContext.getWorkAreaTabProxies();

    var tab/*:Panel*/ = null;

    if(this.tabId$X8zK) {
      if(this.tabId$X8zK < 9) {
        tab = workAreaTabProxies.itemCollection['items'][this.tabId$X8zK-1];
      }
      else {
        var tabsOpened/*:Number*/ = workAreaTabProxies.itemCollection.getCount();
        tab =AS3.as( workAreaTabProxies.itemCollection.getAt(tabsOpened-1),  Ext.panel.Panel);
      }
    }
    else if(this.direction$X8zK) {
      var tabIndex/*:Number*/ = getActiveTabIndex$static();

      if(this.direction$X8zK === com.coremedia.cms.editor.sdk.desktop.SelectTabAction.DIRECTION_NEXT) {
        tabIndex++;
      }
      else if(this.direction$X8zK === com.coremedia.cms.editor.sdk.desktop.SelectTabAction.DIRECTION_PREVIOUS) {
        tabIndex--;
      }

      tab =AS3.as( workAreaTabProxies.itemCollection.getAt(tabIndex),  Ext.panel.Panel);
    }

    if(tab) {
      workAreaTabProxies.setActiveTab(tab);
      workAreaTabProxies.focus();
    }
  }/*

  private static*/ function getActiveTabIndex$static()/*:Number*/ {
    var workAreaTabProxies/*:TabPanel*/ = com.coremedia.cms.editor.sdk.editorContext.getWorkAreaTabProxies();
    var tab/*:Component*/ = workAreaTabProxies.getActiveTab();
    var index/*:Number*/ = workAreaTabProxies.itemCollection.indexOf(tab);
    return index;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.Action",
      tabId$X8zK: NaN,
      direction$X8zK: null,
      constructor: SelectTabActionBase$,
      super$X8zK: function() {
        Ext.Action.prototype.constructor.apply(this, arguments);
      },
      handleAction$X8zK: handleAction,
      requires: [
        "Ext.Action",
        "Ext.panel.Panel"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.desktop.SelectTabAction",
        "com.coremedia.cms.editor.sdk.editorContext"
      ]
    };
});
