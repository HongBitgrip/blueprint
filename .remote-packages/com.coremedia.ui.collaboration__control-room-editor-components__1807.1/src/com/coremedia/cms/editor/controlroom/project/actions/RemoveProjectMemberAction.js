Ext.define("com.coremedia.cms.editor.controlroom.project.actions.RemoveProjectMemberAction", function(RemoveProjectMemberAction) {/*package com.coremedia.cms.editor.controlroom.project.actions{
import com.coremedia.cms.editor.controlroom.project.actions.*;
import net.jangaroo.ext.Exml;
/**

 An Action that removes the given members from a given list of projects.
 If the member is still assigned to an open to-do a confirmation dialog is shown before the removal.

 * /
public class RemoveProjectMemberAction extends RemoveProjectMemberActionBase{

    import com.coremedia.cap.user.User;

    public*/function RemoveProjectMemberAction$(config/*:RemoveProjectMemberAction = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.controlroom.project.actions.RemoveProjectMemberActionBase*/ =AS3.cast(com.coremedia.cms.editor.controlroom.project.actions.RemoveProjectMemberActionBase,{});
    var defaults_$1/*:RemoveProjectMemberAction*/ =AS3.cast(RemoveProjectMemberAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$zTPZ(config_$1);
  }/*

    /**
     * The member to be removed from the given projects.
     * /
    [Bindable]
    public var member:User;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.controlroom.project.actions.RemoveProjectMemberActionBase",
      constructor: RemoveProjectMemberAction$,
      super$zTPZ: function() {
        com.coremedia.cms.editor.controlroom.project.actions.RemoveProjectMemberActionBase.prototype.constructor.apply(this, arguments);
      },
      config: {member: null},
      requires: [
        "com.coremedia.cms.editor.controlroom.project.actions.RemoveProjectMemberActionBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
