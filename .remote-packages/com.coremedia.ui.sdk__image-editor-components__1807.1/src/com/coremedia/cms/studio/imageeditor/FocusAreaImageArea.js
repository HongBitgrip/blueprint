Ext.define("com.coremedia.cms.studio.imageeditor.FocusAreaImageArea", function(FocusAreaImageArea) {/*package com.coremedia.cms.studio.imageeditor{
import com.coremedia.cms.studio.imageeditor.*;
import net.jangaroo.ext.Exml;
public class FocusAreaImageArea extends FocusAreaImageAreaBase{

    public static const xtype:String = "com.coremedia.cms.studio.imageeditor.config.focusAreaImageArea";
    public static const CLS:String = "focus-area";

    public*/function FocusAreaImageArea$(config/*:FocusAreaImageArea = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.studio.imageeditor.FocusAreaImageAreaBase*/ =AS3.cast(com.coremedia.cms.studio.imageeditor.FocusAreaImageAreaBase,{});
    var defaults_$1/*:FocusAreaImageArea*/ =AS3.cast(FocusAreaImageArea,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.cls =net.jangaroo.ext.Exml.asString( "crop-container " + FocusAreaImageArea.CLS + " x-resizable x-component-resizable x-component-default-resizable x-border-box x-resizable-pinned");
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$1Rq6(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.studio.imageeditor.FocusAreaImageAreaBase",
      alias: "widget.com.coremedia.cms.studio.imageeditor.config.focusAreaImageArea",
      constructor: FocusAreaImageArea$,
      super$1Rq6: function() {
        com.coremedia.cms.studio.imageeditor.FocusAreaImageAreaBase.prototype.constructor.apply(this, arguments);
      },
      statics: {CLS: "focus-area"},
      requires: [
        "com.coremedia.cms.studio.imageeditor.FocusAreaImageAreaBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
