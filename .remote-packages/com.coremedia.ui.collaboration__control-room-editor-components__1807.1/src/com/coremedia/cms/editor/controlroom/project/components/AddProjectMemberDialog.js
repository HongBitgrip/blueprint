Ext.define("com.coremedia.cms.editor.controlroom.project.components.AddProjectMemberDialog", function(AddProjectMemberDialog) {/*package com.coremedia.cms.editor.controlroom.project.components{
import com.coremedia.cms.editor.controlroom.project.components.*;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.plugins.BindPropertyPlugin;
import com.coremedia.cms.editor.sdk.member.SelectMembersContainer;
import ext.button.Button;

    [ResourceBundle('com.coremedia.cms.editor.Editor')]
    [ResourceBundle('com.coremedia.cms.editor.controlroom.ControlRoom')]
public class AddProjectMemberDialog extends AddProjectMemberDialogBase{

    import com.coremedia.ui.skins.ButtonSkin;
    import com.coremedia.ui.skins.WindowSkin;

    public static const xtype:String = "com.coremedia.cms.editor.controlroom.config.addProjectMemberDialog";

    public static const MEMBER_SELECTION_PANEL_ITEM_ID:String = "memberSelectionPanelItemId";

    public static const ADD_BUTTON_ITEM_ID:String = "addButtonItemId";

    public static const CANCEL_BUTTON_ITEM_ID:String = "cancelButtonItemId";

    public*/function AddProjectMemberDialog$(config/*:AddProjectMemberDialog = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.controlroom.project.components.AddProjectMemberDialogBase*/ =AS3.cast(com.coremedia.cms.editor.controlroom.project.components.AddProjectMemberDialogBase,{});
    var defaults_$1/*:AddProjectMemberDialog*/ =AS3.cast(AddProjectMemberDialog,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.modal = true;
    AS3.setBindable(config_$1,"width" , 400);
    config_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.WindowSkin.GRID_200.getSkin());
    config_$1.stateId = "addProjectMemberDialogState";
    AS3.setBindable(config_$1,"stateful" , true);
    config_$1.constrainHeader = true;
    config_$1.resizable = false;
    var ui_BindPropertyPlugin_38_5_$1/*:com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_38_5_$1.bindTo = this.getTitleVE();
    ui_BindPropertyPlugin_38_5_$1.componentProperty = "title";
    config_$1.plugins = [ui_BindPropertyPlugin_38_5_$1];
    var editor_SelectMembersContainer_42_5_$1/*:com.coremedia.cms.editor.sdk.member.SelectMembersContainer*/ =AS3.cast(com.coremedia.cms.editor.sdk.member.SelectMembersContainer,{});
    editor_SelectMembersContainer_42_5_$1.itemId =net.jangaroo.ext.Exml.asString( AddProjectMemberDialog.MEMBER_SELECTION_PANEL_ITEM_ID);
    editor_SelectMembersContainer_42_5_$1.afterUpdateCallback =AS3.bind( this,"afterUpdateCallback");
    AS3.setBindable(editor_SelectMembersContainer_42_5_$1,"maxMembersCtHeight" , 200);
    AS3.setBindable(editor_SelectMembersContainer_42_5_$1,"fieldLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'AddProjectMemberDialog_label_text')));
    AS3.setBindable(editor_SelectMembersContainer_42_5_$1,"membersValueExpression" , this.getTheSelectedMembersValueExpression());
    config_$1.items = [editor_SelectMembersContainer_42_5_$1];
    var button_49_5_$1/*:ext.button.Button*/ =AS3.cast(Ext.button.Button,{});
    button_49_5_$1.itemId =net.jangaroo.ext.Exml.asString( AddProjectMemberDialog.ADD_BUTTON_ITEM_ID);
    button_49_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.FOOTER_PRIMARY.getSkin());
    AS3.setBindable(button_49_5_$1,"scale" , "small");
    AS3.setBindable(button_49_5_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'AddProjectMemberDialog_button_text')));
    AS3.setBindable(button_49_5_$1,"handler" ,AS3.bind( this,"share"));
    var ui_BindPropertyPlugin_55_9_$1/*: com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_55_9_$1.bindTo = this.getShareButtonDisabledValueExpression();
    ui_BindPropertyPlugin_55_9_$1.componentProperty = "disabled";
    button_49_5_$1.plugins = [ui_BindPropertyPlugin_55_9_$1];
    var button_59_5_$1/*: ext.button.Button*/ =AS3.cast(Ext.button.Button,{});
    button_59_5_$1.itemId =net.jangaroo.ext.Exml.asString( AddProjectMemberDialog.CANCEL_BUTTON_ITEM_ID);
    button_59_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.FOOTER_SECONDARY.getSkin());
    AS3.setBindable(button_59_5_$1,"scale" , "small");
    AS3.setBindable(button_59_5_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'dialog_defaultCancelButton_text')));
    AS3.setBindable(button_59_5_$1,"handler" ,AS3.bind( this,"close"));
    config_$1.fbar = [button_49_5_$1, button_59_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$T981(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.controlroom.project.components.AddProjectMemberDialogBase",
      alias: "widget.com.coremedia.cms.editor.controlroom.config.addProjectMemberDialog",
      constructor: AddProjectMemberDialog$,
      super$T981: function() {
        com.coremedia.cms.editor.controlroom.project.components.AddProjectMemberDialogBase.prototype.constructor.apply(this, arguments);
      },
      statics: {
        MEMBER_SELECTION_PANEL_ITEM_ID: "memberSelectionPanelItemId",
        ADD_BUTTON_ITEM_ID: "addButtonItemId",
        CANCEL_BUTTON_ITEM_ID: "cancelButtonItemId"
      },
      requires: [
        "Ext.button.Button",
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.cms.editor.controlroom.ControlRoom_properties",
        "com.coremedia.cms.editor.controlroom.project.components.AddProjectMemberDialogBase",
        "com.coremedia.cms.editor.sdk.member.SelectMembersContainer",
        "com.coremedia.ui.plugins.BindPropertyPlugin",
        "com.coremedia.ui.skins.ButtonSkin",
        "com.coremedia.ui.skins.WindowSkin",
        "net.jangaroo.ext.Exml"
      ]
    };
});
