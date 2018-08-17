Ext.define("com.coremedia.cms.editor.sdk.plugins.AddTabbedDocumentFormsPluginBase", function(AddTabbedDocumentFormsPluginBase) {/*package com.coremedia.cms.editor.sdk.plugins {

import com.coremedia.cms.editor.sdk.premular.TabbedDocumentFormDispatcher;
import com.coremedia.ui.components.SwitchingContainer;
import com.coremedia.ui.logging.Logger;
import com.coremedia.ui.util.ArrayUtils;

import ext.Component;
import ext.plugin.AbstractPlugin;

/**
 * Adds the provided array of documentTabPanel definitions to the dispatcher.
 * This plugin must be registered as a plugin of <code>&lt;editor:tabbedDocumentFormDispatcher/></code>
 *
 * @see com.coremedia.cms.editor.sdk.plugins.AddTabbedDocumentFormsPlugin
 * /
[PublicApi]
public class AddTabbedDocumentFormsPluginBase extends AbstractPlugin {

  private var documentTabPanels:Array;

  /**
   * @param config The configuration options. See the config class for details.
   *
   * @see com.coremedia.ui.plugins.AddArrayItemsPlugin
   * /
  public*/ function AddTabbedDocumentFormsPluginBase$(config/*:AddTabbedDocumentFormsPlugin = null*/) {if(arguments.length<=0)config=null;
    this.documentTabPanels$LTep = com.coremedia.ui.util.ArrayUtils.asArray(AS3.getBindable(config,"documentTabPanels"));
    this.super$LTep(config);
  }/*

  override public*/ function init(component/*:Component*/)/*:void*/ {
    var container/*:SwitchingContainer*/ =AS3.as( component,  com.coremedia.cms.editor.sdk.premular.TabbedDocumentFormDispatcher);
    if (container) {
      com.coremedia.cms.editor.sdk.plugins.DocumentFormPluginHelper.addOrReplaceItems(container, this.documentTabPanels$LTep);
    } else {
      com.coremedia.ui.logging.Logger.error("addTabbedDocumentFormsPlugin can only configure a tabbedDocumentFormDispatcher, " +
              "but was used with a " + component.xtype);
    }
  }/*


}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.plugin.Abstract",
      metadata: {"": ["PublicApi"]},
      documentTabPanels$LTep: null,
      constructor: AddTabbedDocumentFormsPluginBase$,
      super$LTep: function() {
        Ext.plugin.Abstract.prototype.constructor.apply(this, arguments);
      },
      init: init,
      requires: [
        "Ext.plugin.Abstract",
        "com.coremedia.ui.logging.Logger",
        "com.coremedia.ui.util.ArrayUtils"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.plugins.DocumentFormPluginHelper",
        "com.coremedia.cms.editor.sdk.premular.TabbedDocumentFormDispatcher"
      ]
    };
});
