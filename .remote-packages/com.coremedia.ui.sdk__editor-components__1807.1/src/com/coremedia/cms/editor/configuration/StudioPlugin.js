Ext.define("com.coremedia.cms.editor.configuration.StudioPlugin", function(StudioPlugin) {/*package com.coremedia.cms.editor.configuration{
import com.coremedia.cms.editor.configuration.*;
import net.jangaroo.ext.Exml;
[PublicApi]
public class StudioPlugin extends StudioPluginBase{

    public*/function StudioPlugin$(config/*:StudioPlugin = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.configuration.StudioPluginBase*/ =AS3.cast(com.coremedia.cms.editor.configuration.StudioPluginBase,{});
    var defaults_$1/*:StudioPlugin*/ =AS3.cast(StudioPlugin,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$5SQ7(config_$1);
  }/*

    /**

     A list of EditorPlugins that use the &lt;code>editingContext&lt;/code> to configure CoreMedia Studio.
     @see com.coremedia.cms.editor.sdk.#editorContext

     * /
    [Bindable]
    public var configuration:Array;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.configuration.StudioPluginBase",
      metadata: {"": ["PublicApi"]},
      constructor: StudioPlugin$,
      super$5SQ7: function() {
        com.coremedia.cms.editor.configuration.StudioPluginBase.prototype.constructor.apply(this, arguments);
      },
      config: {configuration: null},
      requires: [
        "com.coremedia.cms.editor.configuration.StudioPluginBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
