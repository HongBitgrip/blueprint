Ext.define("com.coremedia.blueprint.base.components.BlueprintBaseComponentsStudioPlugin", function(BlueprintBaseComponentsStudioPlugin) {/*package com.coremedia.blueprint.base.components{
import com.coremedia.cms.editor.configuration.StudioPlugin;
import net.jangaroo.ext.Exml;
import com.coremedia.cms.editor.configuration.CopyResourceBundleProperties;

    [ResourceBundle('com.coremedia.blueprint.base.components.Validation')]
    [ResourceBundle('com.coremedia.cms.editor.sdk.validation.Validators')]
public class BlueprintBaseComponentsStudioPlugin extends StudioPlugin{

    import mx.resources.ResourceManager;

    public static const xtype:String = "com.coremedia.blueprint.base.components.config.blueprintBaseComponentsStudioPlugin";

    public*/function BlueprintBaseComponentsStudioPlugin$(config/*:BlueprintBaseComponentsStudioPlugin = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:com.coremedia.cms.editor.configuration.StudioPlugin*/ =AS3.cast(com.coremedia.cms.editor.configuration.StudioPlugin,{});
    var defaults_$1/*:BlueprintBaseComponentsStudioPlugin*/ =AS3.cast(BlueprintBaseComponentsStudioPlugin,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"rules" , []);
    var editor_CopyResourceBundleProperties_23_5_$1/*:com.coremedia.cms.editor.configuration.CopyResourceBundleProperties*/ =AS3.cast(com.coremedia.cms.editor.configuration.CopyResourceBundleProperties,{});
    AS3.setBindable(editor_CopyResourceBundleProperties_23_5_$1,"destination" , mx.resources.ResourceManager.getInstance().getResourceBundle(null, 'com.coremedia.cms.editor.sdk.validation.Validators'));
    AS3.setBindable(editor_CopyResourceBundleProperties_23_5_$1,"source" , mx.resources.ResourceManager.getInstance().getResourceBundle(null, 'com.coremedia.blueprint.base.components.Validation'));
    AS3.setBindable(config_$1,"configuration" , [new com.coremedia.cms.editor.configuration.CopyResourceBundleProperties(editor_CopyResourceBundleProperties_23_5_$1)]);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$wNNt(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.configuration.StudioPlugin",
      alias: "widget.com.coremedia.blueprint.base.components.config.blueprintBaseComponentsStudioPlugin",
      constructor: BlueprintBaseComponentsStudioPlugin$,
      super$wNNt: function() {
        com.coremedia.cms.editor.configuration.StudioPlugin.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.blueprint.base.components.Validation_properties",
        "com.coremedia.cms.editor.configuration.CopyResourceBundleProperties",
        "com.coremedia.cms.editor.configuration.StudioPlugin",
        "com.coremedia.cms.editor.sdk.validation.Validators_properties",
        "mx.resources.ResourceManager",
        "net.jangaroo.ext.Exml"
      ]
    };
});
