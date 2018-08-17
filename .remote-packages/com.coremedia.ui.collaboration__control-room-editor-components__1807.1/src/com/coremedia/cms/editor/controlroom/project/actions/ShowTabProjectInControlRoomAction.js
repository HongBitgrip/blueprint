Ext.define("com.coremedia.cms.editor.controlroom.project.actions.ShowTabProjectInControlRoomAction", function(ShowTabProjectInControlRoomAction) {/*package com.coremedia.cms.editor.controlroom.project.actions{
import com.coremedia.cms.editor.controlroom.project.actions.*;
import net.jangaroo.ext.Exml;
public class ShowTabProjectInControlRoomAction extends ShowTabProjectInControlRoomActionBase{

    public*/function ShowTabProjectInControlRoomAction$(config/*:ShowTabProjectInControlRoomAction = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.controlroom.project.actions.ShowTabProjectInControlRoomActionBase*/ =AS3.cast(com.coremedia.cms.editor.controlroom.project.actions.ShowTabProjectInControlRoomActionBase,{});
    var defaults_$1/*:ShowTabProjectInControlRoomAction*/ =AS3.cast(ShowTabProjectInControlRoomAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$pCk6(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.controlroom.project.actions.ShowTabProjectInControlRoomActionBase",
      constructor: ShowTabProjectInControlRoomAction$,
      super$pCk6: function() {
        com.coremedia.cms.editor.controlroom.project.actions.ShowTabProjectInControlRoomActionBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.cms.editor.controlroom.project.actions.ShowTabProjectInControlRoomActionBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
