Ext.define("com.coremedia.elastic.social.studio.plugins.CuratedTransferExtensionPoint", function(CuratedTransferExtensionPoint) {/*package com.coremedia.elastic.social.studio.plugins{
import com.coremedia.elastic.social.studio.plugins.*;
import net.jangaroo.ext.Exml;
public class CuratedTransferExtensionPoint extends CuratedTransferExtensionPointBase{

    import com.coremedia.elastic.social.studio.model.Moderation;

    public static const xtype:String = "com.coremedia.elastic.social.studio.config.curatedTransferExtensionPoint";

    public*/function CuratedTransferExtensionPoint$(config/*:CuratedTransferExtensionPoint = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.elastic.social.studio.plugins.CuratedTransferExtensionPointBase*/ =AS3.cast(com.coremedia.elastic.social.studio.plugins.CuratedTransferExtensionPointBase,{});
    var defaults_$1/*:CuratedTransferExtensionPoint*/ =AS3.cast(CuratedTransferExtensionPoint,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$a0aQ(config_$1);
  }/*

    [Bindable]
    public var moderation:Moderation;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.elastic.social.studio.plugins.CuratedTransferExtensionPointBase",
      alias: "widget.com.coremedia.elastic.social.studio.config.curatedTransferExtensionPoint",
      constructor: CuratedTransferExtensionPoint$,
      super$a0aQ: function() {
        com.coremedia.elastic.social.studio.plugins.CuratedTransferExtensionPointBase.prototype.constructor.apply(this, arguments);
      },
      config: {moderation: null},
      requires: [
        "com.coremedia.elastic.social.studio.plugins.CuratedTransferExtensionPointBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
