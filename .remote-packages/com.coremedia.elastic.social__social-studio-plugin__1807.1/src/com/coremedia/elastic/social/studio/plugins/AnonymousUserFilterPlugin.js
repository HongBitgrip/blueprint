Ext.define("com.coremedia.elastic.social.studio.plugins.AnonymousUserFilterPlugin", function(AnonymousUserFilterPlugin) {/*package com.coremedia.elastic.social.studio.plugins{
import com.coremedia.elastic.social.studio.plugins.*;
import net.jangaroo.ext.Exml;
public class AnonymousUserFilterPlugin extends AnonymousUserFilterPluginBase{

    import com.coremedia.ui.data.ValueExpression;

    public*/function AnonymousUserFilterPlugin$(config/*:AnonymousUserFilterPlugin = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.elastic.social.studio.plugins.AnonymousUserFilterPluginBase*/ =AS3.cast(com.coremedia.elastic.social.studio.plugins.AnonymousUserFilterPluginBase,{});
    var defaults_$1/*:AnonymousUserFilterPlugin*/ =AS3.cast(AnonymousUserFilterPlugin,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$zB_F(config_$1);
  }/*

    /**
     * The value expression that holds an array of user objects, which will be
     * filtered by the plugin.
     * /
    [Bindable]
    public var valueExpression:ValueExpression;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.elastic.social.studio.plugins.AnonymousUserFilterPluginBase",
      constructor: AnonymousUserFilterPlugin$,
      super$zB_F: function() {
        com.coremedia.elastic.social.studio.plugins.AnonymousUserFilterPluginBase.prototype.constructor.apply(this, arguments);
      },
      config: {valueExpression: null},
      requires: [
        "com.coremedia.elastic.social.studio.plugins.AnonymousUserFilterPluginBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
