Ext.define("com.coremedia.ui.plugins.ckeditor.RemoveCKEditorPluginsPlugin", function(RemoveCKEditorPluginsPlugin) {/*package com.coremedia.ui.plugins.ckeditor{
import com.coremedia.ui.plugins.ckeditor.*;
import net.jangaroo.ext.Exml;
[PublicApi]
/**

 A Plugin that removes CKEditor plugins from the CKEditor of a <code>richTextArea</code>.
 The plugin takes a comma separated list of plugin names.
 @example Example configuration in EXML:
 <listing version="3.0">
 &lt;ui:richTextArea&gt;
 &lt;plugins&gt;
 &lt;ui:removeCKEditorPluginsPlugin plugins="pluginToRemoveName"/&gt;
 &lt;/plugins&gt;
 &lt;/ui:richTextArea&gt;
 </listing>

 @see com.coremedia.ui.config.richTextArea
 @see com.coremedia.ui.config.customizeCKEditorPlugin
 @see com.coremedia.ui.config.addCKEditorPluginsPlugin

 * /
public class RemoveCKEditorPluginsPlugin extends RemoveCKEditorPluginsPluginBase{

    public*/function RemoveCKEditorPluginsPlugin$(config/*:RemoveCKEditorPluginsPlugin = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.ui.plugins.ckeditor.RemoveCKEditorPluginsPluginBase*/ =AS3.cast(com.coremedia.ui.plugins.ckeditor.RemoveCKEditorPluginsPluginBase,{});
    var defaults_$1/*:RemoveCKEditorPluginsPlugin*/ =AS3.cast(RemoveCKEditorPluginsPlugin,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$Jq1p(config_$1);
  }/*

    /**
     Comma-separated list of names of plugins to remove.
     * /
    [Bindable]
    public var plugins:Array;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.plugins.ckeditor.RemoveCKEditorPluginsPluginBase",
      metadata: {"": ["PublicApi"]},
      constructor: RemoveCKEditorPluginsPlugin$,
      super$Jq1p: function() {
        com.coremedia.ui.plugins.ckeditor.RemoveCKEditorPluginsPluginBase.prototype.constructor.apply(this, arguments);
      },
      config: {plugins: null},
      requires: [
        "com.coremedia.ui.plugins.ckeditor.RemoveCKEditorPluginsPluginBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
