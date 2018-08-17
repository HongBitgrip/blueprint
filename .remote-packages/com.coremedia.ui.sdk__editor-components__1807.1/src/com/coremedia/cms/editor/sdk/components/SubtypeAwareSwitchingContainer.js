Ext.define("com.coremedia.cms.editor.sdk.components.SubtypeAwareSwitchingContainer", function(SubtypeAwareSwitchingContainer) {/*package com.coremedia.cms.editor.sdk.components{
import com.coremedia.cms.editor.sdk.components.*;
import net.jangaroo.ext.Exml;
[PublicApi]
/**
 A special SwitchingContainer that switches its items based on the content type. It goes up the inheritance tree of a
 content type until it finds a parent type that has a item with the id like the content type name.
 * /
public class SubtypeAwareSwitchingContainer extends SubtypeAwareSwitchingContainerBase{

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.subtypeAwareSwitchingContainer";

    public*/function SubtypeAwareSwitchingContainer$(config/*:SubtypeAwareSwitchingContainer = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.components.SubtypeAwareSwitchingContainerBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.components.SubtypeAwareSwitchingContainerBase,{});
    var defaults_$1/*:SubtypeAwareSwitchingContainer*/ =AS3.cast(SubtypeAwareSwitchingContainer,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$W1VL(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.components.SubtypeAwareSwitchingContainerBase",
      metadata: {"": ["PublicApi"]},
      alias: "widget.com.coremedia.cms.editor.sdk.config.subtypeAwareSwitchingContainer",
      constructor: SubtypeAwareSwitchingContainer$,
      super$W1VL: function() {
        com.coremedia.cms.editor.sdk.components.SubtypeAwareSwitchingContainerBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.cms.editor.sdk.components.SubtypeAwareSwitchingContainerBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
