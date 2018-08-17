Ext.define("com.coremedia.cms.editor.sdk.desktop.TabStateManagerPluginBase", function(TabStateManagerPluginBase) {/*package com.coremedia.cms.editor.sdk.desktop {
import com.coremedia.cms.editor.sdk.EditorComponentsPreferencesPropertyNames;
import com.coremedia.cms.editor.sdk.desktop.reusability.ProxyTabState;
import com.coremedia.cms.editor.sdk.desktop.reusability.ReusableTabType;
import com.coremedia.cms.editor.sdk.desktop.reusability.WorkAreaTabProxy;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.cms.editor.sdk.util.PreferencesUtil;
import com.coremedia.ui.data.RemoteBean;
import com.coremedia.ui.data.RemoteBeanUtil;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.util.EventUtil;
import com.coremedia.ui.util.WindowUtil;

import ext.Component;
import ext.ComponentManager;
import ext.Ext;
import ext.Plugin;
import ext.panel.Panel;
import ext.tab.TabPanel;

/**
 * A plugin that saves and restores the state of all tabs in the WorkArea to the user preferences.
 * Must be plugged into the WorkArea.
 *
 * @see com.coremedia.cms.editor.sdk.desktop.WorkArea
 * @see com.coremedia.cms.editor.sdk.IEditorContext#getPreferences()
 * /
public class TabStateManagerPluginBase implements Plugin {

  /*
   * Parameters and hash parameters
   * /
  /**
   * Whether to restore the previously opened tabs. (Used to indicate
   * that the currently checked-out document should be opened.)
   * /
  private static const*/var HASH_PARAM_AUTO_OPEN_EDITED$static/*:String*/ = "autoOpenEdited";/*

  private var tabPanel:TabPanel;
  private var workArea:WorkArea;
  private var stateDirty:Boolean;

  //noinspection JSUnusedLocalSymbols
  public*/ function TabStateManagerPluginBase$(config/*:TabStateManagerPlugin = null*/) {if(arguments.length<=0)config=null;
  }/*

  public*/ function init(component/*:Component*/)/*:void*/ {var this$=this;
    if (com.coremedia.cms.editor.sdk.editorContext.isDefaultTabStateManagerEnabled()) {
      this.tabPanel$StNf =AS3.as( component,  Ext.tab.Panel);/*

      const*/var hashParamsModel/*:Object*/ = com.coremedia.ui.util.WindowUtil.getHashParamsAsObject();
      if ("false" !== hashParamsModel[HASH_PARAM_AUTO_OPEN_EDITED$static]) {
        // open previous tabs.
        // we have to listen to the after render on the main view because the layouting of the tabs would break
        // if listening to workarea#afterrender
        Ext.ComponentManager.onAvailable(com.coremedia.cms.editor.sdk.desktop.EditorMainView.ID, function (editorMainView/*:Component*/)/*:void*/ {
          editorMainView.addListener('afterrender',AS3.bind( this$,"deserializeState"), null, {
            single: true
          });
        });
      }

      this.tabPanel$StNf.addListener('tabchange',AS3.bind( this,"forceSerializeState$StNf"));
      this.tabPanel$StNf.itemCollection.addListener('add',AS3.bind( this,"tabAdded$StNf"));
      this.tabPanel$StNf.itemCollection.addListener('remove',AS3.bind( this,"tabRemoved$StNf"));
      // TODO: clear, replace - not used by us so far, but who knows?
    }
  }/*

  //noinspection JSUnusedLocalSymbols
  private*/ function tabAdded(index/*:int*/, tab/*:WorkAreaTabProxy*/)/*:void*/ {
    if (tab) {
      var stateValueExpression/*:ValueExpression*/ = tab.getStateValueExpression();
      if (stateValueExpression) {
        stateValueExpression.addChangeListener(AS3.bind(this,"forceSerializeState$StNf"));
      }
      this.forceSerializeState$StNf();
    }
  }/*

  private*/ function getWorkArea()/*:WorkArea*/ {
    if (!this.workArea$StNf) {
      this.workArea$StNf =AS3.as( Ext.getCmp("workarea"),  com.coremedia.cms.editor.sdk.desktop.WorkArea);
    }
    return this.workArea$StNf;
  }/*

  private*/ function tabRemoved(tab/*:WorkAreaTabProxy*/)/*:void*/ {
    if (tab) {
      var stateValueExpression/*:ValueExpression*/ = tab.getStateValueExpression();
      if (stateValueExpression) {
        stateValueExpression.removeChangeListener(AS3.bind(this,"forceSerializeState$StNf"));
      }
      this.forceSerializeState$StNf();
    }
  }/*

  private*/ function forceSerializeState()/*:void*/ {
    if (!this.stateDirty$StNf) {
      this.stateDirty$StNf = true;
      com.coremedia.ui.util.EventUtil.invokeLater(AS3.bind(this,"serializeState"));
    }
  }/*

  internal*/ function serializeState()/*:void*/ {
    if (this.stateDirty$StNf) {
      this.stateDirty$StNf = false;
      //noinspection JSMismatchedCollectionQueryUpdate
      var tabs/*:Array*/ = [];
      var activeTabIndex/*:int*/ = 0;
      var activeTab/*:Panel*/ = AS3.cast(Ext.panel.Panel,this.tabPanel$StNf.getActiveTab());
      this.tabPanel$StNf.itemCollection.each(function (tab/*:WorkAreaTabProxy*/, index/*:Number*/)/*:void*/ {
        if (tab) {
          if (tab === activeTab) {
            activeTabIndex = tabs.length;
          }
          var tabState/*:Object*/ = {
            typeId: AS3.getBindable(tab,"referenceTabType").getId()
          };
          var stateValueExpression/*:ValueExpression*/ = tab.getStateValueExpression();
          if (stateValueExpression) {
            tabState.state = stateValueExpression.getValue();
          }
          tabs.push(tabState);
        }
      });
      var stateProperties/*:Object*/ = {};
      stateProperties[com.coremedia.cms.editor.sdk.EditorComponentsPreferencesPropertyNames.WORK_AREA_STRUCT_TABS] = tabs;
      stateProperties[com.coremedia.cms.editor.sdk.EditorComponentsPreferencesPropertyNames.WORK_AREA_STRUCT_ACTIVE_TAB_INDEX] = activeTabIndex;
      com.coremedia.cms.editor.sdk.util.PreferencesUtil.updatePreferencesJSONProperty(stateProperties, com.coremedia.cms.editor.sdk.EditorComponentsPreferencesPropertyNames.WORK_AREA_STRUCT);
    }
  }/*

  internal*/ function deserializeState()/*:void*/ {var this$=this;
    var state/*:Object*/ = com.coremedia.cms.editor.sdk.util.PreferencesUtil.getPreferencesJSONProperty({tabs: com.coremedia.cms.editor.sdk.util.PreferencesUtil.decodeJsonString},
            com.coremedia.cms.editor.sdk.EditorComponentsPreferencesPropertyNames.WORK_AREA_STRUCT);
    if (!state) {
      return;
    }

    var tabs/*:Array*/ =AS3.as( state[com.coremedia.cms.editor.sdk.EditorComponentsPreferencesPropertyNames.WORK_AREA_STRUCT_TABS],  Array);
    if (!tabs) {
      return;
    }

    var remoteBeanEntities/*:Array*/ = tabs.map(AS3.bind(this,"extractRemoteBeanEntity$StNf"));
    com.coremedia.ui.data.RemoteBeanUtil.loadAll(function ()/*:void*/ {
      var activeTabIndex/*:int*/ =AS3.as( state[com.coremedia.cms.editor.sdk.EditorComponentsPreferencesPropertyNames.WORK_AREA_STRUCT_ACTIVE_TAB_INDEX],  AS3.int_);
      var validTabStates/*:Array*/ = [];

      //filter for tab typeIds that can actually be opened
      for (var i/*:int*/ = 0; i < tabs.length; i++) {
        var tabState/*:Object*/ = tabs[i];
        var tabType/*:WorkAreaTabType*/ = this$.getWorkArea$StNf().getTabTypeById(tabState.typeId);
        var remoteBean/*:RemoteBean*/ = remoteBeanEntities[i];
        // tab type may be gone or remote bean may not be accessible, then just don't open the tab
        if (tabType && (!remoteBean || com.coremedia.ui.data.RemoteBeanUtil.isAccessible(remoteBean))) {
          validTabStates.push(tabState);
        }
      }

      //open the tab afterwards, returning the
      this$.openValidTabs$StNf(validTabStates, activeTabIndex, function (tab/*:Panel*/, activeTab/*:Panel*/)/*:void*/ {
        if (this$.tabPanel$StNf.itemCollection.getCount() > activeTabIndex) {
          this$.tabPanel$StNf.setActiveTab(activeTabIndex);
        } else {
          this$.tabPanel$StNf.setActiveTab(this$.tabPanel$StNf.itemCollection.getCount() - 1);
        }
      });
    }, remoteBeanEntities);
  }/*


  /**
   * Open only those tabs that have been previously validated against inaccessible content.
   * @param validTabStates the list of validated tab states
   * @param activeTabIndex the active tab index stored in the settings
   * @param callback callback called with last opened tab and active tab
   * /
  private*/ function openValidTabs(validTabStates/*:Array*/, activeTabIndex/*:Number*/, callback/*:Function*/)/*:void*/ {var this$=this;
    var count/*:Number*/ = 0;
    for/* each*/(var $1=0;$1</* in*/ validTabStates.length;++$1) {var tabState/*:Object*/ =validTabStates[$1];
      var tabType/*:WorkAreaTabType*/ = this.getWorkArea$StNf().getTabTypeById(tabState.typeId);

      //may be undefined for start tab
      if(!tabState.state) {
        tabState.state = {};
      }

      if (AS3.is(tabType,  com.coremedia.cms.editor.sdk.desktop.reusability.ReusableTabType)) {
        // If we have a ReusableTabType, the type decides itself whether a new tab needs to be created or
        // whether an existing tab will be reused. In the latter case, only the transformed ProxyTabState
        // is passed on.
        (AS3.as(tabType,  com.coremedia.cms.editor.sdk.desktop.reusability.ReusableTabType)).transformTabState(tabState.state, function (transformedState/*:ProxyTabState*/, tab/*:Panel*/, originalTabState/*:Object*/, tabType/*:ReusableTabType*/)/*:void*/ {
          processResult(tab ? tab : transformedState, tabType, originalTabState);
        });
      } else {
        // Otherwise --> create new tab.
        tabType.createTab(tabState.state, function (newTab/*:Panel*/, tabType/*:WorkAreaTabType*/, originalState/*:Object*/)/*:void*/ {
          processResult(newTab, tabType, originalState);
        });
      }

      function processResult(tabOrState/*:Object*/, tabType/*:WorkAreaTabType*/, originalTabState/*:Object*/)/*:void*/ {
        count++;
        //the result object is used to ensure that the order is as expected
        var result/*:Object*/ = {};
        result.tab = tabOrState;
        result.tabType = tabType;
        originalTabState.result = result;

        //all tabs have been created, now we have to add them im the correct order
        if (count === validTabStates.length) {
          this$.updateTabStates$StNf(activeTabIndex, validTabStates, callback);
        }
      }
    }
  }/*

  /**
   * Adds the newly created tabs in the order of the original validated tab states.
   * We use the activeTabIndex here that has been read from the user settings to invoke
   * the callback with the active tab and the last opened tab.
   * @param activeTabIndex the tab index to activate
   * @param validTabStates the tab state the tabs have been created for
   * @param callback
   * /
  private*/ function updateTabStates(activeTabIndex/*:Number*/, validTabStates/*:Array*/, callback/*:Function*/)/*:void*/ {
    var tab/*:Panel*/;
    var activeTab/*:Panel*/ = null;
    for (var i/*:int*/ = 0; i < validTabStates.length; i++) {
      //use the original order to add the tabs
      var tabResult/*:Object*/ = validTabStates[i].state.result;
      if (tabResult) {
        tab = tabResult.tab;
        this.getWorkArea$StNf().addTab(tabResult.tabType, tabResult.tab);
        if (i === activeTabIndex) {
          activeTab = tab;
        }
        //not sure is this is necessary, anyway the result was only for opening the tab
        validTabStates[i].state.result = null;
      }
    }
    //we are finished with adding tabs, so finally update the active state
    callback(tab, activeTab);
  }/*

  private*/ function extractRemoteBeanEntity(tab/*:Object*/)/*:RemoteBean*/ {
    var tabType/*:WorkAreaTabType*/ = this.getWorkArea$StNf().getTabTypeById(tab.typeId);
    if (tabType) { // tab type may be gone, then just don't open the tab
      var entityTabType/*:EntityWorkAreaTabType*/ =AS3.as( tabType,  com.coremedia.cms.editor.sdk.desktop.EntityWorkAreaTabType);
      if (entityTabType) {
        return AS3.as( entityTabType.extractEntity(tab.state),  com.coremedia.ui.data.RemoteBean);
      }
    }

    return null;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["ext.Plugin"],
      tabPanel$StNf: null,
      workArea$StNf: null,
      stateDirty$StNf: false,
      constructor: TabStateManagerPluginBase$,
      init: init,
      tabAdded$StNf: tabAdded,
      getWorkArea$StNf: getWorkArea,
      tabRemoved$StNf: tabRemoved,
      forceSerializeState$StNf: forceSerializeState,
      serializeState: serializeState,
      deserializeState: deserializeState,
      openValidTabs$StNf: openValidTabs,
      updateTabStates$StNf: updateTabStates,
      extractRemoteBeanEntity$StNf: extractRemoteBeanEntity,
      requires: [
        "AS3.int_",
        "Ext",
        "Ext.ComponentManager",
        "Ext.panel.Panel",
        "Ext.tab.Panel",
        "com.coremedia.ui.data.RemoteBean",
        "com.coremedia.ui.data.RemoteBeanUtil",
        "com.coremedia.ui.util.EventUtil",
        "com.coremedia.ui.util.WindowUtil",
        "ext.Plugin"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.EditorComponentsPreferencesPropertyNames",
        "com.coremedia.cms.editor.sdk.desktop.EditorMainView",
        "com.coremedia.cms.editor.sdk.desktop.EntityWorkAreaTabType",
        "com.coremedia.cms.editor.sdk.desktop.WorkArea",
        "com.coremedia.cms.editor.sdk.desktop.reusability.ReusableTabType",
        "com.coremedia.cms.editor.sdk.editorContext",
        "com.coremedia.cms.editor.sdk.util.PreferencesUtil"
      ]
    };
});
