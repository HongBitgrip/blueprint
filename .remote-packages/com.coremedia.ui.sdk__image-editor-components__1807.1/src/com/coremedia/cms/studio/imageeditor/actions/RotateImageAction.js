Ext.define("com.coremedia.cms.studio.imageeditor.actions.RotateImageAction", function(RotateImageAction) {/*package com.coremedia.cms.studio.imageeditor.actions{
import com.coremedia.cms.studio.imageeditor.actions.*;
import net.jangaroo.ext.Exml;


/* Decide weather angle or direction should be given* /
public class RotateImageAction extends RotateImageActionBase{

    import com.coremedia.cms.studio.imageeditor.history.UndoHistory;
    import com.coremedia.ui.data.ValueExpression;

    public*/function RotateImageAction$(config/*:RotateImageAction = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.studio.imageeditor.actions.RotateImageActionBase*/ =AS3.cast(com.coremedia.cms.studio.imageeditor.actions.RotateImageActionBase,{});
    var defaults_$1/*:RotateImageAction*/ =AS3.cast(RotateImageAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$tzQ2(config_$1);
  }/*

    [Bindable]
    public var orientedImageDimensionsValueExpression:ValueExpression;

    [Bindable]
    public var undoHistory:UndoHistory;

    [Bindable]
    public var angle:int;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.studio.imageeditor.actions.RotateImageActionBase",
      constructor: RotateImageAction$,
      super$tzQ2: function() {
        com.coremedia.cms.studio.imageeditor.actions.RotateImageActionBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        orientedImageDimensionsValueExpression: null,
        undoHistory: null,
        angle: 0
      },
      requires: [
        "com.coremedia.cms.studio.imageeditor.actions.RotateImageActionBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
