Ext.define("com.coremedia.cms.editor.controlroom.actions.DeleteEditedContentsAction", function(DeleteEditedContentsAction) {/*package com.coremedia.cms.editor.controlroom.actions{
import com.coremedia.cms.editor.controlroom.actions.*;
import net.jangaroo.ext.Exml;
/**

 A <code>contentAction</code> that removes the selected or all contents from the EditedContentsGridPanel depending on the mode.

 * /
public class DeleteEditedContentsAction extends DeleteEditedContentsActionBase{

    public*/function DeleteEditedContentsAction$(config/*:DeleteEditedContentsAction = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.controlroom.actions.DeleteEditedContentsActionBase*/ =AS3.cast(com.coremedia.cms.editor.controlroom.actions.DeleteEditedContentsActionBase,{});
    var defaults_$1/*:DeleteEditedContentsAction*/ =AS3.cast(DeleteEditedContentsAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$EWin(config_$1);
  }/*

    [Bindable]
    public var mode:String;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.controlroom.actions.DeleteEditedContentsActionBase",
      constructor: DeleteEditedContentsAction$,
      super$EWin: function() {
        com.coremedia.cms.editor.controlroom.actions.DeleteEditedContentsActionBase.prototype.constructor.apply(this, arguments);
      },
      config: {mode: null},
      requires: [
        "com.coremedia.cms.editor.controlroom.actions.DeleteEditedContentsActionBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
