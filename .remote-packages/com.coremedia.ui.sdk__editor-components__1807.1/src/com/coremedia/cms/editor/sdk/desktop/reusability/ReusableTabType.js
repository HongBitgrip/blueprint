Ext.define("com.coremedia.cms.editor.sdk.desktop.reusability.ReusableTabType", function(ReusableTabType) {/*package com.coremedia.cms.editor.sdk.desktop.reusability {
import com.coremedia.cms.editor.sdk.desktop.*;

import ext.Component;

/**
 * Tabs of ReusableTabType are a special kind of EntityWorkAreaTabType.
 *
 * Existing tabs can be reused for new entities to be shown instead of having to create new tabs
 * over and over again for each new entity.
 *
 * Reusable tabs are managed by the WorkArea in conjunction with the IReusableComponentsService.
 * The WorkArea holds all tabs including reusable ones. It has its TabBar hidden. In its place,
 * the WorkAreaTabProxiesTabPanel holds light-weight WorkAreaTabProxy tabs for each tab entity.
 * When WorkAreaTabProxies belonging to different entities are activated, the WorkArea takes care
 * of activating and preparing the associated reusable tabs. For example, there might be just
 * 2 reusable WorkArea tabs that are subsequently reused to display the entities of 10
 * WorkAreaTabProxy tabs. For this purpose, each WorkAreaTabProxy tab holds a ProxyTabState
 * that is used to setup a reusable tab on activation.
 *
 * @see IReusableComponentsService
 * @see WorkArea
 * @see WorkAreaTabProxiesTabPanel
 * @see WorkAreaTabProxy
 * @see ProxyTabState
 * /
public interface ReusableTabType extends EntityWorkAreaTabType {

  /**
   * Given a ProxyTabState, compute a reusability key (this key will be used for
   * registering / requesting reused tabs at the IReusableComponentsService).
   *
   * @see ProxyTabState
   *
   * @param tabState the ProxyTabState.
   * @return the reusability key to use with the IReusableComponentsService.
   * /
  function computeReusabilityKey(tabState:ProxyTabState):String;

  /**
   * Given a ProxyTabState, use it to setup a reusable tab. This method is called
   * by the WorkArea when an existing tab is to be reused to display a different
   * tab content, namely that belonging to the ProxyTabState.
   *
   * @param tabState the ProxyTabState.
   * @param reusedTab the already existing tab to be reused.
   * /
  function setupReusedTab(tabState:ProxyTabState, reusedTab:Component):void;

  /**
   * Given a tab state object, it is transformed into a ProxyTabState and possibly into an
   * instantiated tab.
   *
   * Concerning the format of the given tab state object, the only assumption made here
   * is that it contains a property 'entity' that holds the tab's underlying entity.
   *
   * This tab state object has to be transformed into a TabProxyState for further processing.
   *
   * In addition, this method is supposed to work with the IReusableComponentsService.
   * If the reusability limit for the reusability key computed from the TabProxyState
   * is not yet reached, a new tab must be created and registered with
   * the IReusableComponentsService.
   *
   * The given callback is supposed to comply with the following signature:
   *
   * function (preparedTabState:ProxyTabState, createdTab:Panel, originalState:Object, tabType:ReusableTabType)
   *
   * The preparedTabState is the created ProxyTabState and must always be passed. For
   * createdTab a Panel is passed iff a new tab was created, null otherwise. The
   * originalState is the original state that this method was called with. The
   * tabType is this tab type.
   *
   * @see ProxyTabState
   * @see IReusableComponentsService
   *
   * @param tabState the original tab state object to be transformed.
   * @param callback the callback with she signature described above.
   * /
  function transformTabState(tabState:Object, callback:Function):void;

  /**
   * Given a ProxyTabState, computes a serialization object with just the
   * minimal information necessary for persisting the tab state.
   *
   * Concerning the format of the serialization object, it is required that it
   * contains a property 'entity' that holds the tab's underlying entity.
   *
   * @return the serialization object.
   * /
  function computeStateSerialization(tabState:ProxyTabState):Object;

  /**
   * Given a ProxyTabState, determines whether the tab represented by the state is directly
   * closable.
   *
   * @see ProxyTabState
   *
   * @param tabState the ProxyTabState
   * @return true if the tab represented by the ProxyTabState is directly closable, false otherwise.
   * /
  function isDirectlyClosable(tabState:ProxyTabState):Boolean;

  /**
   * Given a ProxyTabState, compute the title of the tab represented by the state.
   *
   * @see ProxyTabState
   *
   * @param tabState the ProxyTabState
   * @return the title of the tab represented by the ProxyTabState
   * /
  function computeTabTitle(tabState:ProxyTabState):String;

  /**
   * Given a ProxyTabState, compute the icon class of the tab represented by the state.
   *
   * @see ProxyTabState
   *
   * @param tabState the ProxyTabState
   * @return the icon class of the tab represented by the ProxyTabState
   * /
  function computeTabIconCls(tabState:ProxyTabState):String;

  /**
   * Notifies that a WorkAreaTabProxy for a WorkArea tab of this
   * tab type has been set up. This gives the ReusableTabType the
   * opportunity to set up additional tab or entity management
   * (e.g. by calling WorkAreaTabProxy#registerEntityChangeHandler).
   *
   * @see WorkAreaTabProxy
   *
   * @param tabProxy the new WorkAreaTabProxy.
   * /
  function notifyTabProxyReady(tabProxy:WorkAreaTabProxy):void;

  /**
   * Given a ProxyTabState, compute the tab tooltip info of the tab represented by the state.
   *
   * @see ProxyTabState
   *
   * @param tabState the ProxyTabState
   * @return the tooltip info of the tab represented by the ProxyTabState
   * /
  function computeTooltipInfo(tabState:ProxyTabState):TabTooltipInfo;

}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.cms.editor.sdk.desktop.EntityWorkAreaTabType"],
      requires: ["com.coremedia.cms.editor.sdk.desktop.EntityWorkAreaTabType"]
    };
});
