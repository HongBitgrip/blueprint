Ext.define("com.coremedia.cms.editor.controlroom.project.components.ProjectMembersPanel", function(ProjectMembersPanel) {/*package com.coremedia.cms.editor.controlroom.project.components{
import com.coremedia.cms.editor.controlroom.project.components.*;
import net.jangaroo.ext.Exml;
import com.coremedia.cms.editor.sdk.member.MembersContainer;
import ext.toolbar.Toolbar;
import ext.toolbar.Fill;
import ext.button.Button;
import com.coremedia.cms.editor.controlroom.project.actions.LeaveProjectsAction;
import com.coremedia.cms.editor.controlroom.project.actions.ShowAddProjectMemberDialogAction;

    [ResourceBundle('com.coremedia.cms.editor.controlroom.ControlRoom')]
public class ProjectMembersPanel extends ProjectMembersPanelBase{

    import com.coremedia.ui.skins.ButtonSkin;
    import com.coremedia.ui.skins.ToolbarSkin;

    public static const xtype:String = "com.coremedia.cms.editor.controlroom.config.projectMembersPanel";

    public static const LEAVE_BTN_ITEM_ID:String = "leaveBtnItemId";

    public static const ADD_BTN_ITEM_ID:String = "addBtnItemId";

    public*/function ProjectMembersPanel$(config/*:ProjectMembersPanel = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.controlroom.project.components.ProjectMembersPanelBase*/ =AS3.cast(com.coremedia.cms.editor.controlroom.project.components.ProjectMembersPanelBase,{});
    var defaults_$1/*:ProjectMembersPanel*/ =AS3.cast(ProjectMembersPanel,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    var editor_MembersContainer_29_5_$1/*:com.coremedia.cms.editor.sdk.member.MembersContainer*/ =AS3.cast(com.coremedia.cms.editor.sdk.member.MembersContainer,{});
    AS3.setBindable(editor_MembersContainer_29_5_$1,"memberDisplayTransformer" , com.coremedia.cms.editor.controlroom.project.components.ProjectMembersPanelBase.getUserNameOrMe);
    AS3.setBindable(editor_MembersContainer_29_5_$1,"memberReadOnlyPredicate" , com.coremedia.cms.editor.controlroom.project.components.ProjectMembersPanelBase.isMemberReadOnly);
    AS3.setBindable(editor_MembersContainer_29_5_$1,"memberRemovedHandler" ,AS3.bind( this,"removeProjectMember"));
    AS3.setBindable(editor_MembersContainer_29_5_$1,"membersValueExpression" , this.getProjectMembersVE());
    config_$1.items = [editor_MembersContainer_29_5_$1];
    var toolbar_35_5_$1/*:ext.toolbar.Toolbar*/ =AS3.cast(Ext.toolbar.Toolbar,{});
    toolbar_35_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ToolbarSkin.EMBEDDED_FOOTER_GRID_100.getSkin());
    AS3.setBindable(toolbar_35_5_$1,"dock" , "bottom");
    toolbar_35_5_$1["focusableContainer"] = false;
    var tbFill_39_9_$1/*:ext.toolbar.Fill*/ =AS3.cast(Ext.toolbar.Fill,{});
    var button_41_9_$1/*:ext.button.Button*/ =AS3.cast(Ext.button.Button,{});
    button_41_9_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.SIMPLE.getSkin());
    button_41_9_$1.itemId =net.jangaroo.ext.Exml.asString( ProjectMembersPanel.LEAVE_BTN_ITEM_ID);
    AS3.setBindable(button_41_9_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'Project_leaveProject_text')));
    AS3.setBindable(button_41_9_$1,"tooltip" , this.resourceManager.getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'Project_leaveProject_tooltip'));
    AS3.setBindable(button_41_9_$1,"iconCls" , "");
    var collab_LeaveProjectsAction_47_13_$1/*:com.coremedia.cms.editor.controlroom.project.actions.LeaveProjectsAction*/ =AS3.cast(com.coremedia.cms.editor.controlroom.project.actions.LeaveProjectsAction,{});
    AS3.setBindable(collab_LeaveProjectsAction_47_13_$1,"projects" , [AS3.getBindable(config,"project")]);
    button_41_9_$1.baseAction = new com.coremedia.cms.editor.controlroom.project.actions.LeaveProjectsAction(collab_LeaveProjectsAction_47_13_$1);
    var button_51_9_$1/*: ext.button.Button*/ =AS3.cast(Ext.button.Button,{});
    button_51_9_$1.itemId =net.jangaroo.ext.Exml.asString( ProjectMembersPanel.ADD_BTN_ITEM_ID);
    button_51_9_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.INLINE.getSkin());
    AS3.setBindable(button_51_9_$1,"scale" , "small");
    AS3.setBindable(button_51_9_$1,"iconCls" , "");
    var collab_ShowAddProjectMemberDialogAction_56_13_$1/*:com.coremedia.cms.editor.controlroom.project.actions.ShowAddProjectMemberDialogAction*/ =AS3.cast(com.coremedia.cms.editor.controlroom.project.actions.ShowAddProjectMemberDialogAction,{});
    AS3.setBindable(collab_ShowAddProjectMemberDialogAction_56_13_$1,"projects" , [AS3.getBindable(config,"project")]);
    button_51_9_$1.baseAction = new com.coremedia.cms.editor.controlroom.project.actions.ShowAddProjectMemberDialogAction(collab_ShowAddProjectMemberDialogAction_56_13_$1);
    toolbar_35_5_$1.items = [tbFill_39_9_$1, button_41_9_$1, button_51_9_$1];
    config_$1.dockedItems = [toolbar_35_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$vyrT(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.controlroom.project.components.ProjectMembersPanelBase",
      alias: "widget.com.coremedia.cms.editor.controlroom.config.projectMembersPanel",
      constructor: ProjectMembersPanel$,
      super$vyrT: function() {
        com.coremedia.cms.editor.controlroom.project.components.ProjectMembersPanelBase.prototype.constructor.apply(this, arguments);
      },
      statics: {
        LEAVE_BTN_ITEM_ID: "leaveBtnItemId",
        ADD_BTN_ITEM_ID: "addBtnItemId"
      },
      requires: [
        "Ext.button.Button",
        "Ext.toolbar.Fill",
        "Ext.toolbar.Toolbar",
        "com.coremedia.cms.editor.controlroom.ControlRoom_properties",
        "com.coremedia.cms.editor.controlroom.project.components.ProjectMembersPanelBase",
        "com.coremedia.cms.editor.sdk.member.MembersContainer",
        "com.coremedia.ui.skins.ButtonSkin",
        "com.coremedia.ui.skins.ToolbarSkin",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.controlroom.project.actions.LeaveProjectsAction",
        "com.coremedia.cms.editor.controlroom.project.actions.ShowAddProjectMemberDialogAction"
      ]
    };
});
