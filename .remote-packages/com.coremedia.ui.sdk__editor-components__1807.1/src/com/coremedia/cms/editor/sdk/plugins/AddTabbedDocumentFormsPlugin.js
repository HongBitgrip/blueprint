Ext.define("com.coremedia.cms.editor.sdk.plugins.AddTabbedDocumentFormsPlugin", function(AddTabbedDocumentFormsPlugin) {/*package com.coremedia.cms.editor.sdk.plugins{
import com.coremedia.cms.editor.sdk.plugins.*;
import net.jangaroo.ext.Exml;
[PublicApi]
/**

 Adds the provided array of documentTabPanel definitions to the dispatcher.
 This plugin must be registered as a plugin of <code>&lt;editor:tabbedDocumentFormDispatcher/></code>.

 * /
public class AddTabbedDocumentFormsPlugin extends AddTabbedDocumentFormsPluginBase{

    public*/function AddTabbedDocumentFormsPlugin$(config/*:AddTabbedDocumentFormsPlugin = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.plugins.AddTabbedDocumentFormsPluginBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.plugins.AddTabbedDocumentFormsPluginBase,{});
    var defaults_$1/*:AddTabbedDocumentFormsPlugin*/ =AS3.cast(AddTabbedDocumentFormsPlugin,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$F512(config_$1);
  }/*

    /**

     The forms to register with the dispatcher. Each element of the array must be a &lt;code>documentTabPanel&lt;/code>.
     Each element of the array must declare an itemId directly. It is not enough that the itemId
     is set at instantiation time of the component, for example by specifying it in an EXML-defined
     subclass of &lt;code>documentTabPanel&lt;/code>.

     @see com.coremedia.cms.editor.sdk.config.documentTabPanel

     * /
    [Bindable]
    public var documentTabPanels:Array;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.plugins.AddTabbedDocumentFormsPluginBase",
      metadata: {"": ["PublicApi"]},
      constructor: AddTabbedDocumentFormsPlugin$,
      super$F512: function() {
        com.coremedia.cms.editor.sdk.plugins.AddTabbedDocumentFormsPluginBase.prototype.constructor.apply(this, arguments);
      },
      config: {documentTabPanels: null},
      requires: [
        "com.coremedia.cms.editor.sdk.plugins.AddTabbedDocumentFormsPluginBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
