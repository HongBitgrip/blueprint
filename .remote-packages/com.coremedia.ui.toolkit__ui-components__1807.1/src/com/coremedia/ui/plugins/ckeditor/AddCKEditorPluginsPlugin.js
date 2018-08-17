Ext.define("com.coremedia.ui.plugins.ckeditor.AddCKEditorPluginsPlugin", function(AddCKEditorPluginsPlugin) {/*package com.coremedia.ui.plugins.ckeditor{
import com.coremedia.ui.plugins.ckeditor.*;
import net.jangaroo.ext.Exml;
[PublicApi]
/**

 A Plugin that adds CKEditor plugins to the CKEditor of a <code>richTextArea</code>.
 The plugin takes a comma separated list of plugin names.

 @see com.coremedia.ui.config.richTextArea
 @see com.coremedia.ui.config.removeCKEditorPluginsPlugin
 @see com.coremedia.ui.config.customizeCKEditorPlugin

 @example Example configuration in EXML
 <listing version="3.0">
 &lt;ui:richTextArea&gt;
 &lt;plugins&gt;
 &lt;ui:addCKEditorPlugins plugins="pluginToAddName"/&gt;
 &lt;/plugins&gt;
 &lt;/ui:richTextArea&gt;
 </listing>

 * /
public class AddCKEditorPluginsPlugin extends AddCKEditorPluginsPluginBase{

    public*/function AddCKEditorPluginsPlugin$(config/*:AddCKEditorPluginsPlugin = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.ui.plugins.ckeditor.AddCKEditorPluginsPluginBase*/ =AS3.cast(com.coremedia.ui.plugins.ckeditor.AddCKEditorPluginsPluginBase,{});
    var defaults_$1/*:AddCKEditorPluginsPlugin*/ =AS3.cast(AddCKEditorPluginsPlugin,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$zdGa(config_$1);
  }/*

    /**
     Comma-separated list of names of plugins to add.
     * /
    [Bindable]
    public var plugins:Array;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.plugins.ckeditor.AddCKEditorPluginsPluginBase",
      metadata: {"": ["PublicApi"]},
      constructor: AddCKEditorPluginsPlugin$,
      super$zdGa: function() {
        com.coremedia.ui.plugins.ckeditor.AddCKEditorPluginsPluginBase.prototype.constructor.apply(this, arguments);
      },
      config: {plugins: null},
      requires: [
        "com.coremedia.ui.plugins.ckeditor.AddCKEditorPluginsPluginBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
