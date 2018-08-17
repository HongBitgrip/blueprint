Ext.define("com.coremedia.cms.editor.sdk.desktop.TabStateManagerPlugin", function(TabStateManagerPlugin) {/*package com.coremedia.cms.editor.sdk.desktop{
import com.coremedia.cms.editor.sdk.desktop.*;
import net.jangaroo.ext.Exml;
/**

 A plugin that saves and restores the state of all tabs in the WorkArea to the user preferences.
 Must be plugged into the WorkArea.

 <p>This class serves as a typed config object for the constructor of the plugin class <code>TabStateManagerPlugin</code>.
 Instantiating this class for the first time also registers the corresponding plugin class under the ptype
 "com.coremedia.cms.editor.sdk.config.workAreaTabStateManagerPlugin" with ExtJS.</p>

 @see com.coremedia.cms.editor.sdk.desktop.WorkArea
 @see com.coremedia.cms.editor.sdk.IEditorContext#getPreferences()

 * /
public class TabStateManagerPlugin extends TabStateManagerPluginBase{

    public*/function TabStateManagerPlugin$(config/*:TabStateManagerPlugin = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.desktop.TabStateManagerPluginBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.desktop.TabStateManagerPluginBase,{});
    var defaults_$1/*:TabStateManagerPlugin*/ =AS3.cast(TabStateManagerPlugin,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$k3Ru(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.desktop.TabStateManagerPluginBase",
      constructor: TabStateManagerPlugin$,
      super$k3Ru: function() {
        com.coremedia.cms.editor.sdk.desktop.TabStateManagerPluginBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.cms.editor.sdk.desktop.TabStateManagerPluginBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
