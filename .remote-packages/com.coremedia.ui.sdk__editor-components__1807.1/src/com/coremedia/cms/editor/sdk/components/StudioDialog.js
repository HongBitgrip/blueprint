Ext.define("com.coremedia.cms.editor.sdk.components.StudioDialog", function(StudioDialog) {/*package com.coremedia.cms.editor.sdk.components{
import com.coremedia.cms.editor.sdk.components.*;
import net.jangaroo.ext.Exml;
import com.coremedia.cms.editor.sdk.actions.MoveDialogAction;

    [ResourceBundle('com.coremedia.cms.editor.Editor')]
public class StudioDialog extends StudioDialogBase{

    import com.coremedia.cms.editor.sdk.actions.MoveAction;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.studioDialog";

    public*/function StudioDialog$(config/*:StudioDialog = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.components.StudioDialogBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.components.StudioDialogBase,{});
    var defaults_$1/*:StudioDialog*/ =AS3.cast(StudioDialog,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    var editor_MoveDialogAction_21_5_$1/*:com.coremedia.cms.editor.sdk.actions.MoveDialogAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.MoveDialogAction,{});
    editor_MoveDialogAction_21_5_$1.actionId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.actions.MoveAction.UP);
    AS3.setBindable(editor_MoveDialogAction_21_5_$1,"command" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.actions.MoveAction.UP));
    AS3.setBindable(editor_MoveDialogAction_21_5_$1,"dialog" , this);
    var editor_MoveDialogAction_22_5_$1/*: com.coremedia.cms.editor.sdk.actions.MoveDialogAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.MoveDialogAction,{});
    editor_MoveDialogAction_22_5_$1.actionId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.actions.MoveAction.DOWN);
    AS3.setBindable(editor_MoveDialogAction_22_5_$1,"command" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.actions.MoveAction.DOWN));
    AS3.setBindable(editor_MoveDialogAction_22_5_$1,"dialog" , this);
    var editor_MoveDialogAction_23_5_$1/*: com.coremedia.cms.editor.sdk.actions.MoveDialogAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.MoveDialogAction,{});
    editor_MoveDialogAction_23_5_$1.actionId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.actions.MoveAction.LEFT);
    AS3.setBindable(editor_MoveDialogAction_23_5_$1,"command" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.actions.MoveAction.LEFT));
    AS3.setBindable(editor_MoveDialogAction_23_5_$1,"dialog" , this);
    var editor_MoveDialogAction_24_5_$1/*: com.coremedia.cms.editor.sdk.actions.MoveDialogAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.MoveDialogAction,{});
    editor_MoveDialogAction_24_5_$1.actionId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.actions.MoveAction.RIGHT);
    AS3.setBindable(editor_MoveDialogAction_24_5_$1,"command" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.actions.MoveAction.RIGHT));
    AS3.setBindable(editor_MoveDialogAction_24_5_$1,"dialog" , this);
    var editor_MoveDialogAction_25_5_$1/*: com.coremedia.cms.editor.sdk.actions.MoveDialogAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.MoveDialogAction,{});
    editor_MoveDialogAction_25_5_$1.actionId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.actions.MoveAction.INCREASE);
    AS3.setBindable(editor_MoveDialogAction_25_5_$1,"command" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.actions.MoveAction.INCREASE));
    AS3.setBindable(editor_MoveDialogAction_25_5_$1,"dialog" , this);
    var editor_MoveDialogAction_26_5_$1/*: com.coremedia.cms.editor.sdk.actions.MoveDialogAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.MoveDialogAction,{});
    editor_MoveDialogAction_26_5_$1.actionId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.actions.MoveAction.DECREASE);
    AS3.setBindable(editor_MoveDialogAction_26_5_$1,"command" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.actions.MoveAction.DECREASE));
    AS3.setBindable(editor_MoveDialogAction_26_5_$1,"dialog" , this);
    AS3.setBindable(config_$1,"actionList" , [new com.coremedia.cms.editor.sdk.actions.MoveDialogAction(editor_MoveDialogAction_21_5_$1), new com.coremedia.cms.editor.sdk.actions.MoveDialogAction(editor_MoveDialogAction_22_5_$1), new com.coremedia.cms.editor.sdk.actions.MoveDialogAction(editor_MoveDialogAction_23_5_$1), new com.coremedia.cms.editor.sdk.actions.MoveDialogAction(editor_MoveDialogAction_24_5_$1), new com.coremedia.cms.editor.sdk.actions.MoveDialogAction(editor_MoveDialogAction_25_5_$1), new com.coremedia.cms.editor.sdk.actions.MoveDialogAction(editor_MoveDialogAction_26_5_$1)]);
    config_$1["actionList$at"] = net.jangaroo.ext.Exml.APPEND;
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$Wgty(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.components.StudioDialogBase",
      alias: "widget.com.coremedia.cms.editor.sdk.config.studioDialog",
      constructor: StudioDialog$,
      super$Wgty: function() {
        com.coremedia.cms.editor.sdk.components.StudioDialogBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.cms.editor.sdk.components.StudioDialogBase",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.actions.MoveAction",
        "com.coremedia.cms.editor.sdk.actions.MoveDialogAction"
      ]
    };
});
