Ext.define("com.coremedia.cms.studio.imageeditor.actions.FlipImageAction", function(FlipImageAction) {/*package com.coremedia.cms.studio.imageeditor.actions{
import com.coremedia.cms.studio.imageeditor.actions.*;
import net.jangaroo.ext.Exml;
public class FlipImageAction extends FlipImageActionBase{

    import com.coremedia.cms.studio.imageeditor.history.UndoHistory;

    public*/function FlipImageAction$(config/*:FlipImageAction = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.studio.imageeditor.actions.FlipImageActionBase*/ =AS3.cast(com.coremedia.cms.studio.imageeditor.actions.FlipImageActionBase,{});
    var defaults_$1/*:FlipImageAction*/ =AS3.cast(FlipImageAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$5Lym(config_$1);
  }/*

    [Bindable]
    public var undoHistory:UndoHistory;

    [Bindable]
    public var flipDirection:String;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.studio.imageeditor.actions.FlipImageActionBase",
      constructor: FlipImageAction$,
      super$5Lym: function() {
        com.coremedia.cms.studio.imageeditor.actions.FlipImageActionBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        undoHistory: null,
        flipDirection: null
      },
      requires: [
        "com.coremedia.cms.studio.imageeditor.actions.FlipImageActionBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
