Ext.define("com.coremedia.cms.editor.sdk.plugins.AddDocumentFormsPluginBase", function(AddDocumentFormsPluginBase) {/*package com.coremedia.cms.editor.sdk.plugins {

import com.coremedia.cms.editor.sdk.premular.DocumentFormDispatcher;
import com.coremedia.cms.editor.sdk.premular.DocumentMetaDataFormDispatcher;
import com.coremedia.ui.components.SwitchingContainer;
import com.coremedia.ui.logging.Logger;
import com.coremedia.ui.util.ArrayUtils;

import ext.Component;
import ext.Plugin;

/**
 * Adds the provided array of document form definitions to the dispatcher.
 * This plugin must be registered as a plugin of <code>&lt;editor:documentFormDispatcher/></code>
 * or <code>&lt;editor:documentMetaDataFormDispatcher/></code>.
 *
 * @see com.coremedia.cms.editor.sdk.plugins.AddDocumentFormsPlugin
 * /
public class AddDocumentFormsPluginBase implements Plugin {

  private var documentForms:Array;

  /**
   * @param config The configuration options. See the config class for details.
   *
   * @see com.coremedia.ui.plugins.AddArrayItemsPlugin
   * /
  public*/ function AddDocumentFormsPluginBase$(config/*:AddDocumentFormsPlugin = null*/) {if(arguments.length<=0)config=null;
    this.documentForms$o57V = com.coremedia.ui.util.ArrayUtils.asArray(AS3.getBindable(config,"documentForms"));
  }/*

  public*/ function init(component/*:Component*/)/*:void*/ {
    var container/*:SwitchingContainer*/ =AS3.as( component,  com.coremedia.cms.editor.sdk.premular.DocumentFormDispatcher) ||AS3.as(
            component,  com.coremedia.cms.editor.sdk.premular.DocumentMetaDataFormDispatcher);
    if (container) {
      com.coremedia.cms.editor.sdk.plugins.DocumentFormPluginHelper.addOrReplaceItems(container, this.documentForms$o57V);
    } else {
      com.coremedia.ui.logging.Logger.error("AddDocumentFormsPlugin can only configure a documentFormDispatcher or a documentMetaDataFormDispatcher, " +
              "but was used with a " + component.xtype);
    }
  }/*


}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["ext.Plugin"],
      documentForms$o57V: null,
      constructor: AddDocumentFormsPluginBase$,
      init: init,
      requires: [
        "com.coremedia.ui.logging.Logger",
        "com.coremedia.ui.util.ArrayUtils",
        "ext.Plugin"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.plugins.DocumentFormPluginHelper",
        "com.coremedia.cms.editor.sdk.premular.DocumentFormDispatcher",
        "com.coremedia.cms.editor.sdk.premular.DocumentMetaDataFormDispatcher"
      ]
    };
});
