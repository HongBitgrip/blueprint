Ext.define("com.coremedia.cms.studio.imageeditor.FocusPointImageArea", function(FocusPointImageArea) {/*package com.coremedia.cms.studio.imageeditor{
import com.coremedia.cms.studio.imageeditor.*;
import net.jangaroo.ext.Exml;
public class FocusPointImageArea extends FocusPointImageAreaBase{

    public static const xtype:String = "com.coremedia.cms.studio.imageeditor.config.focusPointImageArea";
    public static const CLS:String = "cm-focus-point-image-area";

    public*/function FocusPointImageArea$(config/*:FocusPointImageArea = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.studio.imageeditor.FocusPointImageAreaBase*/ =AS3.cast(com.coremedia.cms.studio.imageeditor.FocusPointImageAreaBase,{});
    var defaults_$1/*:FocusPointImageArea*/ =AS3.cast(FocusPointImageArea,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.cls =net.jangaroo.ext.Exml.asString( "crop-container " + FocusPointImageArea.CLS + " x-border-box");
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$kK_j(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.studio.imageeditor.FocusPointImageAreaBase",
      alias: "widget.com.coremedia.cms.studio.imageeditor.config.focusPointImageArea",
      constructor: FocusPointImageArea$,
      super$kK_j: function() {
        com.coremedia.cms.studio.imageeditor.FocusPointImageAreaBase.prototype.constructor.apply(this, arguments);
      },
      statics: {CLS: "cm-focus-point-image-area"},
      requires: [
        "com.coremedia.cms.studio.imageeditor.FocusPointImageAreaBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
