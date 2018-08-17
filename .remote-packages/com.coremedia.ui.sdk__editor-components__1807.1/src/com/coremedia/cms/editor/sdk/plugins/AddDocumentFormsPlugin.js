Ext.define("com.coremedia.cms.editor.sdk.plugins.AddDocumentFormsPlugin", function(AddDocumentFormsPlugin) {/*package com.coremedia.cms.editor.sdk.plugins{
import com.coremedia.cms.editor.sdk.plugins.*;
import net.jangaroo.ext.Exml;
[PublicApi]
/**

 Adds the provided array of document form definitions to the dispatcher.
 This plugin must be registered as a plugin of <code>&lt;editor:documentFormDispatcher/></code>
 or <code>&lt;editor:documentMetaDataFormDispatcher/></code>.

 * /
public class AddDocumentFormsPlugin extends AddDocumentFormsPluginBase{

    public*/function AddDocumentFormsPlugin$(config/*:AddDocumentFormsPlugin = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.plugins.AddDocumentFormsPluginBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.plugins.AddDocumentFormsPluginBase,{});
    var defaults_$1/*:AddDocumentFormsPlugin*/ =AS3.cast(AddDocumentFormsPlugin,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$bNtk(config_$1);
  }/*

    /**

     The forms to register with the dispatcher. Each element of the array must be a &lt;code>documentForm&lt;/code>.
     Each element of the array must declare an itemId directly. It is not enough that the itemId
     is set at instantiation time of the component, for example by  specifying it in an EXML-defined
     subclass of &lt;code>documentForm&lt;/code>.

     @see com.coremedia.cms.editor.sdk.config.documentForm

     * /
    [Bindable]
    public var documentForms:Array;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.plugins.AddDocumentFormsPluginBase",
      metadata: {"": ["PublicApi"]},
      constructor: AddDocumentFormsPlugin$,
      super$bNtk: function() {
        com.coremedia.cms.editor.sdk.plugins.AddDocumentFormsPluginBase.prototype.constructor.apply(this, arguments);
      },
      config: {documentForms: null},
      requires: [
        "com.coremedia.cms.editor.sdk.plugins.AddDocumentFormsPluginBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
