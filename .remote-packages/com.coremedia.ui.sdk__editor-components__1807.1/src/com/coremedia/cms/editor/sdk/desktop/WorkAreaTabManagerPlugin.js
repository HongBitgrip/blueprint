Ext.define("com.coremedia.cms.editor.sdk.desktop.WorkAreaTabManagerPlugin", function(WorkAreaTabManagerPlugin) {/*package com.coremedia.cms.editor.sdk.desktop{
import com.coremedia.cms.editor.sdk.desktop.*;
import net.jangaroo.ext.Exml;
/**

 TODO: A plugin that...

 @see com.coremedia.cms.editor.sdk.desktop.WorkArea
 @see com.coremedia.cms.editor.sdk.IEditorContext#getWorkAreaTabManager()

 * /
public class WorkAreaTabManagerPlugin extends WorkAreaTabManagerPluginBase{

    public*/function WorkAreaTabManagerPlugin$(config/*:WorkAreaTabManagerPlugin = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.desktop.WorkAreaTabManagerPluginBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.desktop.WorkAreaTabManagerPluginBase,{});
    var defaults_$1/*:WorkAreaTabManagerPlugin*/ =AS3.cast(WorkAreaTabManagerPlugin,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$9p0r(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.desktop.WorkAreaTabManagerPluginBase",
      constructor: WorkAreaTabManagerPlugin$,
      super$9p0r: function() {
        com.coremedia.cms.editor.sdk.desktop.WorkAreaTabManagerPluginBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.cms.editor.sdk.desktop.WorkAreaTabManagerPluginBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
