Ext.define("com.coremedia.cms.editor.controlroom.project.actions.RenameProjectAction", function(RenameProjectAction) {/*package com.coremedia.cms.editor.controlroom.project.actions{
import com.coremedia.cms.editor.controlroom.project.actions.*;
import net.jangaroo.ext.Exml;
public class RenameProjectAction extends RenameProjectActionBase{

    public*/function RenameProjectAction$(config/*:RenameProjectAction = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.controlroom.project.actions.RenameProjectActionBase*/ =AS3.cast(com.coremedia.cms.editor.controlroom.project.actions.RenameProjectActionBase,{});
    var defaults_$1/*:RenameProjectAction*/ =AS3.cast(RenameProjectAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$6Apl(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.controlroom.project.actions.RenameProjectActionBase",
      constructor: RenameProjectAction$,
      super$6Apl: function() {
        com.coremedia.cms.editor.controlroom.project.actions.RenameProjectActionBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.cms.editor.controlroom.project.actions.RenameProjectActionBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
