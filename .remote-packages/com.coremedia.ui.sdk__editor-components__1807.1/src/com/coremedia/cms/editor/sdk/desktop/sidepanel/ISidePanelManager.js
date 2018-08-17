Ext.define("com.coremedia.cms.editor.sdk.desktop.sidepanel.ISidePanelManager", function(ISidePanelManager) {/*package com.coremedia.cms.editor.sdk.desktop.sidepanel {

import ext.Component;

/**
 * <p>
 *   This interface declares the public functions of the <code>sidePanelManager</code> singleton.
 *   The <code>sidePanelManager</code> manages the side panels and side panel windows and the components that should
 *   be displayed in a side panel or window. While side panels and windows register themselves, components have to be
 *   registered with an id and their xtype by the client.
 *
 *   A registered component is created lazily on first access. This means you should always use the
 *   <code>sidePanelManager</code> to access registered components and not <code>Ext.getCmp('id')</code> and the like.
 *
 *   The visibility states of the components are maintained, so that you can use the show and hide methods and events of
 *   a component as usual.
 * </p>
 *
 * <p>
 *   The following config options of registered components are considered:
 *   <ul>
 *     <li><code>minWidth, minHeight : Number</code> - the minimum width and height</li>
 *     <li><code>width, height : Number</code> - the default width and height</li>
 *     <li><code>docked : Boolean</code> - if the component should be created in a side panel (true)
 *                                         or a floating window (false)</li>
 *   </ul>
 *
 *   The following properties of registered components are considered:
 *   <ul>
 *     <li><code>title : String (read)</code> - the title of the component is displayed in the header
 *                                              of the side panel / window</li>
 *   </ul>
 *
 *   The following events of registered components are considered:
 *   <ul>
 *     <li><code>added, show, hide, titlechange</code></li>
 *   </ul>
 * </p>
 *
 * @see sidePanelManager
 * /
public interface ISidePanelManager {

  /**
   * Register a component, so that it can be displayed in a side panel or side panel window.
   * A registered component is created lazily on first access.
   *
   * @param id the id will be set as the component id
   * @param xtype the xtype of the component is needed for creation
   * /
  function registerComponent(id:String, xtype:String):void;

  /**
   * Return the component registered with the given id if the component is already created, null otherwise.
   *
   * @param id the id with which the component has been registered
   * @return the component if already created, else null
   * /
  function getComponent(id:String):Component;

  /**
   * Return the component registered with the given id. If the component has not been created yet, it is created now.
   *
   * @param id the id with which the component has been registered
   * @return the component
   * /
  function getOrCreateComponent(id:String):Component;

  /**
   * Calls the given callback with the component as single argument when the component is created.
   * If the component already exists the callback is called immediately but always asynchronously.
   *
   * @param id the id with which the component has been registered
   * @param callback a function with the signature: <code>function(comp:Component):void</code>
   * /
  function getComponentOnCreation(id:String, callback:Function):void;
}
}

============================================== Jangaroo part ==============================================*/
    return {};
});
