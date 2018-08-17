Ext.define("com.coremedia.cms.editor.sdk.actions.MoveDialogAction", function(MoveDialogAction) {/*package com.coremedia.cms.editor.sdk.actions{
import com.coremedia.cms.editor.sdk.actions.*;
import net.jangaroo.ext.Exml;
[PublicApi]
public class MoveDialogAction extends MoveDialogActionBase{

    import ext.window.Window;


    [Bindable]
    public var command:String;

    [Bindable]
    public var dialog:Window;

    public*/function MoveDialogAction$(config/*:MoveDialogAction = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.actions.MoveDialogActionBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.MoveDialogActionBase,{});
    var defaults_$1/*:MoveDialogAction*/ =AS3.cast(MoveDialogAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$gqvw(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.actions.MoveDialogActionBase",
      metadata: {"": ["PublicApi"]},
      constructor: MoveDialogAction$,
      super$gqvw: function() {
        com.coremedia.cms.editor.sdk.actions.MoveDialogActionBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        command: null,
        dialog: null
      },
      requires: [
        "com.coremedia.cms.editor.sdk.actions.MoveDialogActionBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
