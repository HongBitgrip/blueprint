Ext.define("com.coremedia.cms.editor.sdk.desktop.CloseTabsActionBase", function(CloseTabsActionBase) {/*package com.coremedia.cms.editor.sdk.desktop {
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.ui.actions.*;
import com.coremedia.ui.components.AsynchronouslyClosable;
import com.coremedia.ui.logging.Logger;

import ext.Ext;
import ext.panel.Panel;
import ext.tab.TabPanel;

public class CloseTabsActionBase extends AbstractTabContextMenuAction {

  private var excludedTypes:Array;
  private var mode:String;
  private var isShortcut:Boolean;

  public*/ function CloseTabsActionBase$(config/*:CloseTabsAction = null*/) {if(arguments.length<=0)config=null;
    this.excludedTypes$MTUn = AS3.getBindable(config,"excludedTypes") || null;
    this.mode$MTUn = AS3.getBindable(config,"mode");

    if(AS3.getBindable(config,"asShortcut")) {
      this.isShortcut$MTUn = AS3.getBindable(config,"asShortcut");
    }
    AS3.setBindable(config,"handler" ,AS3.bind( this,"_handler$MTUn"));
    this.super$MTUn(config);
  }/*

  private*/ function _handler()/*:void*/ {
    switch (this.mode$MTUn) {
      case com.coremedia.cms.editor.sdk.desktop.CloseTabsAction.CLOSE_TAB_MODE:
        this.onClose$MTUn();
        break;
      case com.coremedia.cms.editor.sdk.desktop.CloseTabsAction.CLOSE_OTHER_TABS_MODE:
        this.onCloseOthers$MTUn();
        break;
      case com.coremedia.cms.editor.sdk.desktop.CloseTabsAction.CLOSE_ALL_TABS_MODE:
        this.onCloseAll$MTUn();
    }
  }/*


  override public*/ function getContextClickedTab()/*:Panel*/ {
    if(!this.isShortcut$MTUn) {
      return com.coremedia.ui.actions.AbstractTabContextMenuAction.prototype.getContextClickedTab.call(this);
    }

    var workAreaTabProxies/*:TabPanel*/ = com.coremedia.cms.editor.sdk.editorContext.getWorkAreaTabProxies();
    return AS3.as( workAreaTabProxies.getActiveTab(),  Ext.panel.Panel);
  }/*

  override protected*/ function checkDisabled()/*:Boolean*/ {var this$=this;
    var disableAll/*:Boolean*/ = true;
    var disableOthers/*:Boolean*/ = true;

    if (this.mode$MTUn === com.coremedia.cms.editor.sdk.desktop.CloseTabsAction.CLOSE_TAB_MODE) {
      return !AS3.getBindable(this.getContextClickedTab(),"closable","DUMMY");
    } else {
      this.getContextClickedTabPanel().itemCollection.each(function (item/*:Panel*/)/*:Boolean*/ {
        if (AS3.getBindable(item,"closable","DUMMY")) {
          disableAll = false;
          if (item != this$.getContextClickedTab()) {
            disableOthers = false;
            return false;
          }
        }
        return true;
      });

      if (this.mode$MTUn === com.coremedia.cms.editor.sdk.desktop.CloseTabsAction.CLOSE_OTHER_TABS_MODE) {
        return disableOthers;
      }

      if (this.mode$MTUn === com.coremedia.cms.editor.sdk.desktop.CloseTabsAction.CLOSE_ALL_TABS_MODE) {
        return disableAll;
      }
    }

    return false;
  }/*


  override public*/ function getContextClickedTabPanel()/*:TabPanel*/ {
    if(!this.isShortcut$MTUn) {
      return com.coremedia.ui.actions.AbstractTabContextMenuAction.prototype.getContextClickedTabPanel.call(this);
    }

    return com.coremedia.cms.editor.sdk.editorContext.getWorkAreaTabProxies();
  }/*

  private*/ function onClose()/*:void*/ {
    this.closeTab([this.getContextClickedTab()], 0, this.getContextClickedTabPanel());
  }/*

  private*/ function onCloseOthers()/*:void*/ {
    this.doClose$MTUn(true);
  }/*

  private*/ function onCloseAll()/*:void*/ {
    this.doClose$MTUn(false);
  }/*

  private*/ function doClose(excludeRightClickedTab/*:Boolean*/)/*:void*/ {var this$=this;
    var tabs/*:Array*/ = [];
    var contextClickedTabPanel/*:TabPanel*/ = this.getContextClickedTabPanel();
    contextClickedTabPanel.itemCollection.each(function (item/*:Panel*/)/*:void*/ {
      if (!this$.excludedTypes$MTUn || this$.excludedTypes$MTUn.indexOf(item.xtype) === -1) {
        if (AS3.getBindable(item,"closable","DUMMY")) {
          //Not the active but the right-clicked tab is excluded.
          if (!excludeRightClickedTab || item != this$.getContextClickedTab()) {
            tabs.push(item);
          }
        }
      }
    });
    if (tabs.length > 0) {
      this.closeTabs$MTUn(tabs);
    }
  }/*

  private*/ function closeTabs(tabs/*:Array*/)/*:void*/ {
    Ext.suspendLayouts();
    try {
      this.closeTab(tabs, 0, this.getContextClickedTabPanel());
    } finally {
      Ext.resumeLayouts(true);
    }
  }/*

  private static*/ function registerAbortBeforeActivate$static(tab/*:Panel*/)/*:void*/ {
    if(tab) {
      unregisterAbortBeforeActivate$static(tab);
      tab.mon(tab, "beforeactivate", abortRender$static, null);
    }
  }/*

  private static*/ function unregisterAbortBeforeActivate$static(tab/*:Panel*/)/*:void*/ {
    if(tab) {
      tab.mun(tab, "beforeactivate", abortRender$static, null);
    }
  }/*

  private static*/ function abortRender$static()/*:Boolean*/ {
    return false;
  }/*

  public*/ function closeTab(tabs/*:Array*/, index/*:Number*/, tabPanel/*:TabPanel*/)/*:void*/ {var this$=this;
    if (index < tabs.length) {

      var tab/*:Panel*/ = tabs[index];
      registerAbortBeforeActivate$static(tab);

      var nextTabToClose/*:Panel*/;
      if(index + 1 < tabs.length){
        nextTabToClose = tabs[index+1];
        registerAbortBeforeActivate$static(nextTabToClose);
      }

      try {
        var handledSynchronously/*:Boolean*/;

        if (AS3.is(tab,  com.coremedia.ui.components.AsynchronouslyClosable)) {
          handledSynchronously = (AS3.as(tab,  com.coremedia.ui.components.AsynchronouslyClosable)).closeAsynchronously(function (continueClosing/*:Boolean*/)/*:void*/ {
            if (continueClosing) {
              this$.closeTab(tabs, index +1, tabPanel);
            }
          });
        } else {
          handledSynchronously = tab.fireEvent('beforeclose', tab);
        }
        if (handledSynchronously !== false) {
          tab.fireEvent('close', tab);
          tabPanel.remove(tab);
          this.closeTab(tabs, index + 1, tabPanel);
        } else {
          // Show edited tab
          unregisterAbortBeforeActivate$static(tab);
          if(nextTabToClose){
            unregisterAbortBeforeActivate$static(nextTabToClose);
          }
          tabPanel.setActiveTab(tab);
          tab.updateLayout();
        }
      } catch(e){if(AS3.is (e,AS3.Error)) {
        // When a synchronous error occurs on closing the tab (cannot handle asynchronous errors here):
        // 1. Get rid of the abortRender listener
        // 2. Continue with closing the following tab.
        tab && unregisterAbortBeforeActivate$static(tab);
        com.coremedia.ui.logging.Logger.error(e.message);
        this.closeTab(tabs, tabs.indexOf(tab) + 1, tabPanel);
      }else throw e;}
    }
  }/*

  override protected*/ function calculateHidden()/*:Boolean*/ {
    return false;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.actions.AbstractTabContextMenuAction",
      excludedTypes$MTUn: null,
      mode$MTUn: null,
      isShortcut$MTUn: false,
      constructor: CloseTabsActionBase$,
      super$MTUn: function() {
        com.coremedia.ui.actions.AbstractTabContextMenuAction.prototype.constructor.apply(this, arguments);
      },
      _handler$MTUn: _handler,
      getContextClickedTab: getContextClickedTab,
      checkDisabled: checkDisabled,
      getContextClickedTabPanel: getContextClickedTabPanel,
      onClose$MTUn: onClose,
      onCloseOthers$MTUn: onCloseOthers,
      onCloseAll$MTUn: onCloseAll,
      doClose$MTUn: doClose,
      closeTabs$MTUn: closeTabs,
      closeTab: closeTab,
      calculateHidden: calculateHidden,
      requires: [
        "AS3.Error",
        "Ext",
        "Ext.panel.Panel",
        "com.coremedia.ui.actions.AbstractTabContextMenuAction",
        "com.coremedia.ui.components.AsynchronouslyClosable",
        "com.coremedia.ui.logging.Logger"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.desktop.CloseTabsAction",
        "com.coremedia.cms.editor.sdk.editorContext"
      ]
    };
});
