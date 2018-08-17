Ext.define("com.coremedia.cms.editor.sdk.desktop.WorkAreaTabManagerPluginBase", function(WorkAreaTabManagerPluginBase) {/*package com.coremedia.cms.editor.sdk.desktop {

import com.coremedia.cms.editor.sdk.EditorContextImpl;
import com.coremedia.cms.editor.sdk.desktop.reusability.ReusableTabType;
import com.coremedia.cms.editor.sdk.desktop.reusability.WorkAreaTabProxiesTabPanel;
import com.coremedia.cms.editor.sdk.desktop.reusability.WorkAreaTabProxy;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.ui.data.StateHolder;
import com.coremedia.ui.logging.Logger;
import com.coremedia.ui.util.ExecuteEventually;
import com.coremedia.ui.util.ObjectUtils;
import com.coremedia.ui.util.ShimmableUtil;

import ext.Component;
import ext.Plugin;
import ext.dom.Element;
import ext.panel.Panel;

public class WorkAreaTabManagerPluginBase implements WorkAreaTabManager, Plugin {

  private var workArea:WorkAreaBase;
  private var openingInProgress:Array =*/function openingInProgress_(){this.openingInProgress$6OYc=( []);}/*;

  //noinspection JSUnusedLocalSymbols
  public*/ function WorkAreaTabManagerPluginBase$(config/*:ContentTabManagerPlugin = null*/) {openingInProgress_.call(this);if(arguments.length<=0)config=null;
  }/*

  public*/ function init(component/*:Component*/)/*:void*/ {
    this.workArea$6OYc =AS3.as( component,  com.coremedia.cms.editor.sdk.desktop.WorkAreaBase);
    AS3.cast(com.coremedia.cms.editor.sdk.EditorContextImpl,com.coremedia.cms.editor.sdk.editorContext).setWorkAreaTabManager(this);
  }/*

  public*/ function findTabForEntity(entity/*:Object*/)/*:Panel*/ {
    return this.findTab(this.createTabState$6OYc(entity));
  }/*

  public*/ function findTabProxyForEntity(entity/*:Object*/)/*:Panel*/ {
    return com.coremedia.cms.editor.sdk.editorContext.getWorkAreaTabProxies().getWorkAreaTabProxyForEntity(entity);
  }/*

  public*/ function findTab(tabState/*:Object*/)/*:Panel*/ {
    return this.workArea$6OYc.findTab(tabState);
  }/*

  public*/ function openTabForEntity(entity/*:Object*/, background/*:Boolean = false*/)/*:void*/ {if(arguments.length<=1)background=false;
    this.openTabsForEntities([entity], background);
  }/*

  public*/ function openTabsForEntities(entities/*:Array*/, background/*:Boolean = false*/)/*:void*/ {var this$=this;if(arguments.length<=1)background=false;
    //remember tab are in progress for opening, otherwise a multi-click may open the same tab n-times.
    var filteredEntities/*:Array*/ = [];
    for/* each*/(var $1=0;$1</* in*/ entities.length;++$1) {var entityToOpen/*:Object*/ =entities[$1];
      if(!this.isOpeningInProgress$6OYc(entityToOpen)) {
        filteredEntities.push(entityToOpen);
      }
    }

    //mark entities that are in progress
    this.openingInProgress$6OYc = this.openingInProgress$6OYc.concat(filteredEntities);

    //we cannot call createTabState directly as map function.
    //then the index of entities would be the second parameter of createTabState
    this.openTabs(filteredEntities.map(function(entity/*:Object*/)/*:Object*/ {
      return this$.createTabState$6OYc(entity);
    }), background);
  }/*

  public*/ function openTab(tabState/*:Object*/, background/*:Boolean = false*/)/*:void*/ {if(arguments.length<=1)background=false;
    this.openTabs([tabState], background);
  }/*

  public*/ function openTabs(tabStates/*:Array*/, background/*:Boolean = false*/)/*:void*/ {var this$=this;if(arguments.length<=1)background=false;
    if (!tabStates) {
      return;
    }
    tabStates = tabStates.filter(notFalsy$static);
    if (tabStates.length === 0) {
      return;
    }
    //collect all tab or states
    var tabAndTabStates/*:Array*/ = this.collectTabsAndStates$6OYc(tabStates);

    //replace states with tabs
    this.createAndAddMissingTabs$6OYc(tabAndTabStates, function (tabs/*:Array*/)/*:void*/ {
      //apply state for last opened one
      if (tabs.length > 0) {
        var t/*:Panel*/ = tabs[tabs.length - 1];
        this$.updateTabState$6OYc(t, background);
      }

      //remove the opened tab from the list of tabs in progress
      for/* each*/(var $1=0;$1</* in*/ tabStates.length;++$1) {var tabState/*:**/ =tabStates[$1];
        this$.openingInProgress$6OYc.splice(tabState.entity);
      }
    });
  }/*

  /**
   * Checks if the given entity is currently loaded for opening
   * @param entity the entity to check
   * @return true if the entity marked for opening
   * /
  private*/ function isOpeningInProgress(entity/*:Object*/)/*:Boolean*/ {
    for/* each*/(var $1=0;$1</* in*/ this.openingInProgress$6OYc.length;++$1) {var inProgress/*:Object*/ =this.openingInProgress$6OYc[$1];
      if(inProgress === entity) {
        return true;
      }
    }
    return false;
  }/*

  /**
   * Creates the tabs for those elements in the given array that are only tabState objects and not a tab yet.
   * /
  private*/ function createAndAddMissingTabs(tabAndtabStates/*:Array*/, callback/*:Function*/)/*:void*/ {var this$=this;
    // Fill up the result array with 'undefined' values that are to be replaced with the actual tabs
    var tabs/*:Array*/ = tabAndtabStates.concat([]).map(function ()/*:**/ {return undefined;});

    // Wait until all tabs are created (asynchronously) before adding them to the WorkArea to avoid confused order.
    var execEvt/*:ExecuteEventually*/ = new com.coremedia.ui.util.ExecuteEventually(function ()/*:void*/ {
      if(tabs.length == tabAndtabStates.length) {
        this$.allTabsCreated$6OYc(tabs, callback);
      } else {
        com.coremedia.ui.logging.Logger.error("Some tabs could not be created.");
        callback([]);
      }
    });

    for(var i/*:int*/ =0; i < tabAndtabStates.length; i++) {
      execEvt.delay();

      var tabOrState/*:Object*/ = tabAndtabStates[i];

      //isInstance checks if we already have a 'real' panel or only a config object
      if(tabOrState.isInstance) {
        //immediately add tab
        tabs[i] = tabOrState;
        execEvt.proceed();
      }
      else {
        this.createTabForIndex$6OYc(tabAndtabStates[i], tabs, i, execEvt);
      }
    }

    execEvt.proceed();
  }/*

  private*/ function allTabsCreated(tabs/*:Array*/, callback/*:Function*/)/*:void*/ {
    var workAreaProxies/*:WorkAreaTabProxiesTabPanel*/ = com.coremedia.cms.editor.sdk.editorContext.getWorkAreaTabProxies();
    var startingIndex/*:int*/ = workAreaProxies.itemCollection.indexOf(workAreaProxies.getActiveTab()) + 1;

    var result/*:Array*/ = [];

    for (var i/*:int*/ = 0; i < tabs.length; i++) {
      var tab/*:Panel*/ = tabs[i];
      if (tab) {
        var tabType/*:WorkAreaTabType*/ = this.getEntityTabTypeForTabState$6OYc(tab);
        if (this.workArea$6OYc.itemCollection.indexOf(tab) === -1) {
          result.push(this.workArea$6OYc.addTab(tabType, tab, startingIndex + i));
        } else {
          result.push(tab);
        }
      }
    }

    callback(result);
  }/*

  /**
   * Creates a new tab and adds it to the list of existing tab.
   * We invoke the callback once we don't have any tabState object anymore.
   * @param index the WorkArea index the tab should be opened in
   * @param tabState the tab state to create the tab from.
   * @param tabs the existing result of created tabs.
   * @param execEvt the ExecuteEventually to proceed.
   * /
  private*/ function createTabForIndex(tabState/*:Object*/, tabs/*:Array*/, index/*:int*/, execEvt/*:ExecuteEventually*/)/*:void*/ {
    this.createTab$6OYc(tabState, function (tab/*:Panel*/)/*:void*/ {
      tabs[index] = tab;
      execEvt.proceed();
    });
  }/*

  /**
   * Creates an array with tabs or tab states depending on
   * if the tab must be created or exists.
   * @param tabStates
   * /
  private*/ function collectTabsAndStates(tabStates/*:Array*/)/*:Array*/ {
    var result/*:Array*/ = [];
    for (var i/*:int*/ = 0; i < tabStates.length; i++) {
      var tabState/*:Object*/ = tabStates[i];

      var tab/*:Panel*/ = this.findTab(tabState);
      if (tab) {
        result.push(tab);
        if (AS3.is(tab,  com.coremedia.ui.data.StateHolder)) {
          try {
            AS3.cast(com.coremedia.ui.data.StateHolder,tab).getStateValueExpression().setValue(tabState);
          } catch(e){if(AS3.is (e,AS3.Error)) {
            // not settable: leave as-is
          }else throw e;}
        }
      } else {
        result.push(tabState);
      }
    }
    return result;
  }/*

  /**
   * Update highlighting and selection.
   * @param lastOpenedTab
   * @param background
   * /
  private*/ function updateTabState(lastOpenedTab/*:Panel*/, background/*:Boolean*/)/*:void*/ {
    if (lastOpenedTab) {
      if (!background) {
        var proxy/*:WorkAreaTabProxy*/ = com.coremedia.cms.editor.sdk.editorContext.getWorkAreaTabProxies().getWorkAreaTabProxyForEntity(AS3.is(lastOpenedTab,  com.coremedia.cms.editor.sdk.desktop.WorkAreaTab) ? (AS3.as(lastOpenedTab,  com.coremedia.cms.editor.sdk.desktop.WorkAreaTab)).getEntity(): lastOpenedTab);

        if (proxy && proxy.getTitle()
                && proxy.getTitle() !== ""
                && proxy.getTitle() !== lastOpenedTab.getTitle()) {
          this.workArea$6OYc.setActiveTab(lastOpenedTab);
          var shim/*:Element*/ = com.coremedia.ui.util.ShimmableUtil.createShimForElement(lastOpenedTab.getEl());
          com.coremedia.ui.util.ShimmableUtil.toggleShim(shim, true, true);
          shim.dom.setAttribute("style", "background:white;opacity:0.9");
          lastOpenedTab.on("titlechange", function ()/*:void*/ {
            shim.destroy();
          }, null, {single:true});
        } else {
          this.workArea$6OYc.setActiveTab(lastOpenedTab);
        }
      } else {
        this.workArea$6OYc.highlightTab(lastOpenedTab);
      }
    }
  }/*

  public*/ function closeTab(tabState/*:Object*/)/*:void*/ {
    var tab/*:Panel*/ = this.findTab(tabState);
    if (tab) {
      // TODO: see PremularBase#closeTab(true)
      this.workArea$6OYc.remove(tab);
    }
  }/*

  public*/ function closeTabForEntity(entity/*:Object*/)/*:void*/ {
    this.closeTab(this.createTabState$6OYc(entity));
  }/*

  public*/ function replaceTab(oldEntity/*:Object*/, newEntity/*:Object*/)/*:void*/ {var this$=this;
    //we have to create the tab state in strictly mode
    //otherwise the tab state of a augmented category(not content) will be the same as the tab state of the content.
    //todo: refactor createTabState
    var oldTabState/*:Object*/ = this.createTabState$6OYc(oldEntity, true);
    var newTabState/*:Object*/ = this.createTabState$6OYc(newEntity, true);

    var newTabType/*:WorkAreaTabType*/ = this.getEntityTabTypeForTabState$6OYc(newTabState);
    if (newTabType) {
      // the new tab should be active by default but...
      var isNewTabActive/*:Boolean*/ = true;
      var newTabIndex/*:int*/ = -1;
      var oldTab/*:Panel*/ = this.findTab(oldTabState);
      if (oldTab) {
        //... the active state of the new tab should reflect that of the old tab
        isNewTabActive = oldTab === this.workArea$6OYc.getActiveTab();
        newTabIndex = this.workArea$6OYc.itemCollection.indexOf(oldTab);
        this.workArea$6OYc.remove(oldTab);
      }

      var newTab/*:Panel*/ = this.findTab(newTabState);
      if (!newTab) {
        this.createTab$6OYc(newTabState, function(newTab/*:Panel*/)/*:void*/ {
          newTab = this$.workArea$6OYc.addTab(newTabType, newTab, newTabIndex);
          if (isNewTabActive) {
            this$.workArea$6OYc.setActiveTab(newTab);
          }
        });
      } else if (isNewTabActive) {
        this.workArea$6OYc.setActiveTab(newTab);
      }
    }
  }/*

  private static*/ function notFalsy$static(any/*:**/)/*:Boolean*/ {
    return ! !any;
  }/*

  private*/ function createTabState(entity/*:Object*/, strictly/*:Boolean=false*/)/*:Object*/ {if(arguments.length<=1)strictly=false;
    var tabTypes/*:Vector.<EntityWorkAreaTabType>*/ = this.workArea$6OYc.getEntityTabTypes();
    for/* each*/ (var $1=0;$1</* in*/ tabTypes.length;++$1) {var tabType/*:EntityWorkAreaTabType*/ =tabTypes[$1];
      var tabState/*:Object*/ = tabType.createTabState(entity);
      //we remember the entity here to remove it from the opening-progress list
      if (tabState) {
        tabState.entity = entity;
        if (!strictly || entity === tabType.extractEntity(tabState)) {
          return tabState;
        }
      }
    }
    return null;
  }/*

  /**
   * Creates a new tab for the given tab state and invokes
   * the given callback passing the newly created tab.
   * @param tabState the tabState to create the tab for
   * @param callback the callback called with the new tab as parameter
   * /
  private*/ function createTab(tabState/*:Object*/, callback/*:Function*/)/*:void*/ {
    var tabType/*:WorkAreaTabType*/ = this.getEntityTabTypeForTabState$6OYc(tabState);
    if (tabType) {

      if (AS3.is(tabType,  com.coremedia.cms.editor.sdk.desktop.reusability.ReusableTabType)) {
        // If we have a ReusableTabType, the type decides itself whether a new tab needs to be created or
        // whether an existing tab will be reused. In the latter case, only the transformed ProxyTabState
        // is passed on.
        (AS3.as(tabType,  com.coremedia.cms.editor.sdk.desktop.reusability.ReusableTabType)).transformTabState(tabState, function (transformedState/*:Object*/, tab/*:Panel*/)/*:void*/ {
          callback(tab ? tab : transformedState);
        });
      } else {
        // Otherwise --> create new tab.
        tabType.createTab(tabState, function(tab/*:Panel*/)/*:void*/ {
          callback(tab);
        });
      }
    }
    else {
      //empty callback
      callback();
    }
  }/*

  /**
   * Returns the tabType object out of the tabState.
   * /
  private*/ function getEntityTabTypeForTabState(tabState/*:Object*/)/*:EntityWorkAreaTabType*/ {
    var tabTypes/*:Vector.<EntityWorkAreaTabType>*/ = this.workArea$6OYc.getEntityTabTypes();
    for/* each*/ (var $1=0;$1</* in*/ tabTypes.length;++$1) {var tabType/*:EntityWorkAreaTabType*/ =tabTypes[$1];
      if (tabType.extractEntity(tabState)) {
        return tabType;
      }
    }
    return null;
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: [
        "com.coremedia.cms.editor.sdk.desktop.WorkAreaTabManager",
        "ext.Plugin"
      ],
      workArea$6OYc: null,
      constructor: WorkAreaTabManagerPluginBase$,
      init: init,
      findTabForEntity: findTabForEntity,
      findTabProxyForEntity: findTabProxyForEntity,
      findTab: findTab,
      openTabForEntity: openTabForEntity,
      openTabsForEntities: openTabsForEntities,
      openTab: openTab,
      openTabs: openTabs,
      isOpeningInProgress$6OYc: isOpeningInProgress,
      createAndAddMissingTabs$6OYc: createAndAddMissingTabs,
      allTabsCreated$6OYc: allTabsCreated,
      createTabForIndex$6OYc: createTabForIndex,
      collectTabsAndStates$6OYc: collectTabsAndStates,
      updateTabState$6OYc: updateTabState,
      closeTab: closeTab,
      closeTabForEntity: closeTabForEntity,
      replaceTab: replaceTab,
      createTabState$6OYc: createTabState,
      createTab$6OYc: createTab,
      getEntityTabTypeForTabState$6OYc: getEntityTabTypeForTabState,
      requires: [
        "AS3.Error",
        "com.coremedia.cms.editor.sdk.desktop.WorkAreaTabManager",
        "com.coremedia.ui.data.StateHolder",
        "com.coremedia.ui.logging.Logger",
        "com.coremedia.ui.util.ExecuteEventually",
        "com.coremedia.ui.util.ShimmableUtil",
        "ext.Plugin"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.EditorContextImpl",
        "com.coremedia.cms.editor.sdk.desktop.WorkAreaBase",
        "com.coremedia.cms.editor.sdk.desktop.WorkAreaTab",
        "com.coremedia.cms.editor.sdk.desktop.reusability.ReusableTabType",
        "com.coremedia.cms.editor.sdk.editorContext"
      ]
    };
});
