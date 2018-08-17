Ext.define("com.coremedia.cms.editor.controlroom.workflow.AssignMembersPanel", function(AssignMembersPanel) {/*package com.coremedia.cms.editor.controlroom.workflow{
import com.coremedia.cms.editor.controlroom.workflow.*;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.components.BoundRadioGroup;
import ext.form.field.Radio;
import com.coremedia.ui.plugins.BindPropertyPlugin;
import com.coremedia.cms.editor.sdk.member.SelectMembersContainer;

    [ResourceBundle('com.coremedia.cms.editor.Editor')]
    [ResourceBundle('com.coremedia.cms.editor.controlroom.ControlRoom')]
public class AssignMembersPanel extends AssignMembersPanelBase{

    public static const xtype:String = "com.coremedia.cms.editor.controlroom.config.assignMembersPanel";

    public static const RADIO_GROUP_ITEM_ID:String = "radioGroupItemId";

    public static const SELECT_MEMBERS_PANEL_ITEM_ID:String = "selectMembersPanelItemId";

    public*/function AssignMembersPanel$(config/*:AssignMembersPanel = null*/){if(arguments.length<=0)config=null;this.__initialize__$eAPj(config);
    var config_$1/*: com.coremedia.cms.editor.controlroom.workflow.AssignMembersPanelBase*/ =AS3.cast(com.coremedia.cms.editor.controlroom.workflow.AssignMembersPanelBase,{});
    var defaults_$1/*:AssignMembersPanel*/ =AS3.cast(AssignMembersPanel,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.ariaLabel =net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'AssignMembersPanel_title'));
    AS3.setBindable(config_$1,"title" , this.resourceManager.getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'AssignMembersPanel_title'));
    AS3.setBindable(config_$1,"layout" , "auto");
    var ui_BoundRadioGroup_34_5_$1/*:com.coremedia.ui.components.BoundRadioGroup*/ =AS3.cast(com.coremedia.ui.components.BoundRadioGroup,{});
    ui_BoundRadioGroup_34_5_$1.itemId =net.jangaroo.ext.Exml.asString( AssignMembersPanel.RADIO_GROUP_ITEM_ID);
    ui_BoundRadioGroup_34_5_$1.columns = 1;
    ui_BoundRadioGroup_34_5_$1.hideLabel = true;
    ui_BoundRadioGroup_34_5_$1.name =net.jangaroo.ext.Exml.asString( this.getRadioGroupName());
    ui_BoundRadioGroup_34_5_$1.toValue = com.coremedia.cms.editor.controlroom.workflow.AssignMembersPanelBase.transformIsModeOffer;
    ui_BoundRadioGroup_34_5_$1.defaultValue = com.coremedia.cms.editor.controlroom.workflow.AssignMembersPanelBase.RADIO_GROUP_OFFER;
    AS3.setBindable(ui_BoundRadioGroup_34_5_$1,"bindTo" , this.getIsModeOfferVE());
    var radio_42_9_$1/*:ext.form.field.Radio*/ =AS3.cast(Ext.form.field.Radio,{});
    radio_42_9_$1.inputValue =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.controlroom.workflow.AssignMembersPanelBase.RADIO_GROUP_OFFER);
    AS3.setBindable(radio_42_9_$1,"boxLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'SelectedMemberElement_offer')));
    radio_42_9_$1.hideLabel = true;
    var radio_45_9_$1/*: ext.form.field.Radio*/ =AS3.cast(Ext.form.field.Radio,{});
    radio_45_9_$1.inputValue =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.controlroom.workflow.AssignMembersPanelBase.RADIO_GROUP_ASSIGNMENT);
    AS3.setBindable(radio_45_9_$1,"boxLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'SelectedMemberElement_assign')));
    radio_45_9_$1.hideLabel = true;
    ui_BoundRadioGroup_34_5_$1.items = [radio_42_9_$1, radio_45_9_$1];
    var ui_BindPropertyPlugin_50_9_$1/*:com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_50_9_$1.bindTo = this.getRadioGroupDisabledVE();
    ui_BindPropertyPlugin_50_9_$1.componentProperty = "disabled";
    ui_BoundRadioGroup_34_5_$1.plugins = [ui_BindPropertyPlugin_50_9_$1];
    ui_BoundRadioGroup_34_5_$1["plugins$at"] = net.jangaroo.ext.Exml.APPEND;
    var editor_SelectMembersContainer_55_5_$1/*:com.coremedia.cms.editor.sdk.member.SelectMembersContainer*/ =AS3.cast(com.coremedia.cms.editor.sdk.member.SelectMembersContainer,{});
    editor_SelectMembersContainer_55_5_$1.itemId =net.jangaroo.ext.Exml.asString( AssignMembersPanel.SELECT_MEMBERS_PANEL_ITEM_ID);
    AS3.setBindable(editor_SelectMembersContainer_55_5_$1,"margin" , "12 0 0 12");
    AS3.setBindable(editor_SelectMembersContainer_55_5_$1,"fieldLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'AssignMembersPanel_label')));
    AS3.setBindable(editor_SelectMembersContainer_55_5_$1,"hideLabel" , true);
    AS3.setBindable(editor_SelectMembersContainer_55_5_$1,"membersValueExpression" , this.getSelectedMembersVE());
    AS3.setBindable(editor_SelectMembersContainer_55_5_$1,"disabledValueExpression" , this.getSelectMembersContainerDisabledVE());
    config_$1.items = [ui_BoundRadioGroup_34_5_$1, editor_SelectMembersContainer_55_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$eAPj(config_$1);
  }/*

    // Enable getId method used in getRadioGroupName
    private*/ function __initialize__(config/*:AssignMembersPanel*/)/*:void*/ {
      this['initialConfig'] = config || {};
    }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.controlroom.workflow.AssignMembersPanelBase",
      alias: "widget.com.coremedia.cms.editor.controlroom.config.assignMembersPanel",
      constructor: AssignMembersPanel$,
      super$eAPj: function() {
        com.coremedia.cms.editor.controlroom.workflow.AssignMembersPanelBase.prototype.constructor.apply(this, arguments);
      },
      __initialize__$eAPj: __initialize__,
      statics: {
        RADIO_GROUP_ITEM_ID: "radioGroupItemId",
        SELECT_MEMBERS_PANEL_ITEM_ID: "selectMembersPanelItemId"
      },
      requires: [
        "Ext.form.field.Radio",
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.cms.editor.controlroom.ControlRoom_properties",
        "com.coremedia.cms.editor.controlroom.workflow.AssignMembersPanelBase",
        "com.coremedia.cms.editor.sdk.member.SelectMembersContainer",
        "com.coremedia.ui.components.BoundRadioGroup",
        "com.coremedia.ui.plugins.BindPropertyPlugin",
        "net.jangaroo.ext.Exml"
      ]
    };
});
