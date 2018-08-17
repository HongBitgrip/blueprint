Ext.define("com.coremedia.cms.editor.controlroom.ControlRoomButton", function(ControlRoomButton) {/*package com.coremedia.cms.editor.controlroom{
import com.coremedia.cms.editor.controlroom.*;
import net.jangaroo.ext.Exml;
import ext.ActionRef;
import com.coremedia.ui.plugins.BindTooltipPlugin;

    [ResourceBundle('com.coremedia.cms.editor.controlroom.ControlRoom')]
    [ResourceBundle('com.coremedia.icons.CollaborationIcons')]
/**
 A button to toggle the control room.
 * /
public class ControlRoomButton extends ControlRoomButtonBase{

    import com.coremedia.cms.editor.controlroom.actions.ToggleControlRoomAction;
    import com.coremedia.ui.skins.ButtonSkin;

    public static const xtype:String = "com.coremedia.cms.editor.controlroom.config.controlRoomButton";

    public static const ID:String = "controlRoomButtonId";

    public static const CONTROL_ROOM_VISIBLE:String = "controlRoomVisible";

    public*/function ControlRoomButton$(config/*:ControlRoomButton = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.controlroom.ControlRoomButtonBase*/ =AS3.cast(com.coremedia.cms.editor.controlroom.ControlRoomButtonBase,{});
    var defaults_$1/*:ControlRoomButton*/ =AS3.cast(ControlRoomButton,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1["id"] = ControlRoomButton.ID;
    AS3.setBindable(config_$1,"scale" , "medium");
    config_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.MAIN_NAVIGATION.getSkin());
    AS3.setBindable(config_$1,"stateful" , true);
    config_$1.stateId =net.jangaroo.ext.Exml.asString( ControlRoomButton.ID);
    config_$1.stateEvents = [ControlRoomButton.CONTROL_ROOM_VISIBLE];
    AS3.setBindable(config_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.icons.CollaborationIcons', 'control_room')));
    AS3.setBindable(config_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'ControlRoom_label')));
    AS3.setBindable(config_$1,"tooltip" , this.resourceManager.getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'ControlRoomPlugin_btn_show_tooltip'));
    var actionRef_40_5_$1/*:ext.ActionRef*/ =AS3.cast(ext.ActionRef,{});
    actionRef_40_5_$1.actionId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.controlroom.actions.ToggleControlRoomAction.ACTION_ID);
    config_$1.baseAction = actionRef_40_5_$1;
    var ui_BindTooltipPlugin_43_5_$1/*:com.coremedia.ui.plugins.BindTooltipPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindTooltipPlugin,{});
    ui_BindTooltipPlugin_43_5_$1.bindTo = this.getTooltipValueExpression();
    config_$1.plugins = [ui_BindTooltipPlugin_43_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$87hE(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.controlroom.ControlRoomButtonBase",
      alias: "widget.com.coremedia.cms.editor.controlroom.config.controlRoomButton",
      constructor: ControlRoomButton$,
      super$87hE: function() {
        com.coremedia.cms.editor.controlroom.ControlRoomButtonBase.prototype.constructor.apply(this, arguments);
      },
      statics: {
        ID: "controlRoomButtonId",
        CONTROL_ROOM_VISIBLE: "controlRoomVisible"
      },
      requires: [
        "com.coremedia.cms.editor.controlroom.ControlRoomButtonBase",
        "com.coremedia.cms.editor.controlroom.ControlRoom_properties",
        "com.coremedia.icons.CollaborationIcons_properties",
        "com.coremedia.ui.plugins.BindTooltipPlugin",
        "com.coremedia.ui.skins.ButtonSkin",
        "ext.ActionRef",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.cms.editor.controlroom.actions.ToggleControlRoomAction"]
    };
});
