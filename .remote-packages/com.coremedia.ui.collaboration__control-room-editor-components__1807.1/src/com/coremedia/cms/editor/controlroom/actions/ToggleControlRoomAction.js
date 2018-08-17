Ext.define("com.coremedia.cms.editor.controlroom.actions.ToggleControlRoomAction", function(ToggleControlRoomAction) {/*package com.coremedia.cms.editor.controlroom.actions{
import com.coremedia.cms.editor.sdk.desktop.sidepanel.ToggleComponentInSidePanelAction;
import net.jangaroo.ext.Exml;
/**
 An action to toggle the control room.
 * /
public class ToggleControlRoomAction extends ToggleComponentInSidePanelAction{

    import com.coremedia.cms.editor.controlroom.ControlRoom;

    public static const ACTION_ID:String = "toggleControlRoomAction";

    public*/function ToggleControlRoomAction$(config/*:ToggleControlRoomAction = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:com.coremedia.cms.editor.sdk.desktop.sidepanel.ToggleComponentInSidePanelAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.desktop.sidepanel.ToggleComponentInSidePanelAction,{});
    var defaults_$1/*:ToggleControlRoomAction*/ =AS3.cast(ToggleControlRoomAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"componentId" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.controlroom.ControlRoom.CONTROL_ROOM_ID));
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$12Vj(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.desktop.sidepanel.ToggleComponentInSidePanelAction",
      constructor: ToggleControlRoomAction$,
      super$12Vj: function() {
        com.coremedia.cms.editor.sdk.desktop.sidepanel.ToggleComponentInSidePanelAction.prototype.constructor.apply(this, arguments);
      },
      statics: {ACTION_ID: "toggleControlRoomAction"},
      requires: [
        "com.coremedia.cms.editor.sdk.desktop.sidepanel.ToggleComponentInSidePanelAction",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.cms.editor.controlroom.ControlRoom"]
    };
});
