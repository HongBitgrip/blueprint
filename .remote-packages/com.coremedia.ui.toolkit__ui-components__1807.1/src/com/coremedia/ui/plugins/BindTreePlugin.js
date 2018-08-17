Ext.define("com.coremedia.ui.plugins.BindTreePlugin", function(BindTreePlugin) {/*package com.coremedia.ui.plugins{
import com.coremedia.ui.plugins.*;
import net.jangaroo.ext.Exml;
/**

 A plugin that binds TreeNodes to Beans. The TreeLoader that comes with ExtJS does not update nodes properly.

 * /
public class BindTreePlugin extends BindTreePluginBase{

    import com.coremedia.ui.models.TreeModel;

    public*/function BindTreePlugin$(config/*:BindTreePlugin = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.ui.plugins.BindTreePluginBase*/ =AS3.cast(com.coremedia.ui.plugins.BindTreePluginBase,{});
    var defaults_$1/*:BindTreePlugin*/ =AS3.cast(BindTreePlugin,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$7g9W(config_$1);
  }/*

    [Bindable]
    public var treeModel:TreeModel;

    [ExtConfig]
    /**
     * Whether to encode the text values before inserting them into the store. Defaults to true.
     * /
    public var encode:Boolean = true;

    /** whether or not to expand all tree node initially; default to false * /
    [Bindable]
    public var expandInitially:Boolean;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.plugins.BindTreePluginBase",
      constructor: BindTreePlugin$,
      super$7g9W: function() {
        com.coremedia.ui.plugins.BindTreePluginBase.prototype.constructor.apply(this, arguments);
      },
      encode: true,
      config: {
        treeModel: null,
        expandInitially: false
      },
      requires: [
        "com.coremedia.ui.plugins.BindTreePluginBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
