Ext.define("com.coremedia.cms.editor.sdk.dragdrop.RichTextDropTargetPlugin", function(RichTextDropTargetPlugin) {/*package com.coremedia.cms.editor.sdk.dragdrop{
import com.coremedia.cms.editor.sdk.dragdrop.*;
import net.jangaroo.ext.Exml;
/**
 A plugin to create a drop target for the richtext shim.
 * /
public class RichTextDropTargetPlugin extends RichTextDropTargetPluginBase{

    public*/function RichTextDropTargetPlugin$(config/*:RichTextDropTargetPlugin = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.dragdrop.RichTextDropTargetPluginBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.dragdrop.RichTextDropTargetPluginBase,{});
    var defaults_$1/*:RichTextDropTargetPlugin*/ =AS3.cast(RichTextDropTargetPlugin,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$pP1D(config_$1);
  }/*

    /**
     The name of the allowed image target type.
     * /
    [Bindable]
    public var imageContentType:String;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.dragdrop.RichTextDropTargetPluginBase",
      constructor: RichTextDropTargetPlugin$,
      super$pP1D: function() {
        com.coremedia.cms.editor.sdk.dragdrop.RichTextDropTargetPluginBase.prototype.constructor.apply(this, arguments);
      },
      config: {imageContentType: null},
      requires: [
        "com.coremedia.cms.editor.sdk.dragdrop.RichTextDropTargetPluginBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
