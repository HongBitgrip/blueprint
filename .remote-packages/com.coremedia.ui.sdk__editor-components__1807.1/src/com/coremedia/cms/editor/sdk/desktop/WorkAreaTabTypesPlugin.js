Ext.define("com.coremedia.cms.editor.sdk.desktop.WorkAreaTabTypesPlugin", function(WorkAreaTabTypesPlugin) {/*package com.coremedia.cms.editor.sdk.desktop{
import com.coremedia.cms.editor.sdk.desktop.*;
import net.jangaroo.ext.Exml;
/**

 A plugin that adds the given <code>WorkAreaTabType</code>s to the Studio's work area.

 <p>This class serves as a typed config object for the constructor of the plugin class <code>WorkAreaTabTypesPlugin</code>.
 Instantiating this class for the first time also registers the corresponding plugin class under the ptype
 "com.coremedia.cms.editor.sdk.config.usePremularsPlugin" with ExtJS.</p>

 @see com.coremedia.cms.editor.sdk.config.workArea
 @see com.coremedia.cms.editor.sdk.config.componentBasedWorkAreaTabType
 @see com.coremedia.cms.editor.sdk.desktop.WorkAreaTabType

 * /
public class WorkAreaTabTypesPlugin extends WorkAreaTabTypesPluginBase{

    public*/function WorkAreaTabTypesPlugin$(config/*:WorkAreaTabTypesPlugin = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.desktop.WorkAreaTabTypesPluginBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.desktop.WorkAreaTabTypesPluginBase,{});
    var defaults_$1/*:WorkAreaTabTypesPlugin*/ =AS3.cast(WorkAreaTabTypesPlugin,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$bkb1(config_$1);
  }/*

    /**

     An array of tab types to register at the &lt;code>WorkArea&lt;/code>.

     @see com.coremedia.cms.editor.sdk.config.workArea
     @see com.coremedia.cms.editor.sdk.config.componentBasedWorkAreaTabType
     @see com.coremedia.cms.editor.sdk.desktop.WorkAreaTabType
     @see com.coremedia.cms.editor.sdk.desktop.WorkAreaBase#registerTabType()

     * /
    [Bindable]
    public var tabTypes:Array;


    /**
     The work area tab type ID of the default tab type, usually the start tab type.
     A tab of the default tab type is shown whenever no other tabs are open.
     * /
    [Bindable]
    public var defaultTabTypeId:String;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.desktop.WorkAreaTabTypesPluginBase",
      constructor: WorkAreaTabTypesPlugin$,
      super$bkb1: function() {
        com.coremedia.cms.editor.sdk.desktop.WorkAreaTabTypesPluginBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        tabTypes: null,
        defaultTabTypeId: null
      },
      requires: [
        "com.coremedia.cms.editor.sdk.desktop.WorkAreaTabTypesPluginBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
