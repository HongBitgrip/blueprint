Ext.define("com.coremedia.cms.editor.sdk.sites.CloneSiteErrorDialog", function(CloneSiteErrorDialog) {/*package com.coremedia.cms.editor.sdk.sites{
import com.coremedia.cms.editor.sdk.sites.*;
import net.jangaroo.ext.Exml;
import ext.Component;
import ext.container.Container;
import com.coremedia.cms.editor.sdk.workflow.ProblemDescriptionButton;
import ext.button.Button;

    [ResourceBundle('com.coremedia.cms.editor.Editor')]
    [ResourceBundle('com.coremedia.cms.editor.sdk.sites.LocalizationManager')]
public class CloneSiteErrorDialog extends CloneSiteErrorDialogBase{

    import com.coremedia.cap.workflow.Task;
    import com.coremedia.ui.data.ValueExpressionFactory;
    import com.coremedia.ui.skins.ButtonSkin;
    import com.coremedia.ui.util.EncodingUtil;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.cloneSiteErrorDialog";

    public*/function CloneSiteErrorDialog$(config/*:CloneSiteErrorDialog = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.sites.CloneSiteErrorDialogBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.sites.CloneSiteErrorDialogBase,{});
    var defaults_$1/*:CloneSiteErrorDialog*/ =AS3.cast(CloneSiteErrorDialog,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"title" , this.resourceManager.getString('com.coremedia.cms.editor.sdk.sites.LocalizationManager', 'CloneSiteErrorDialog_title'));
    config_$1.stateId = "cloneSiteErrorDialogState";
    AS3.setBindable(config_$1,"stateful" , true);
    AS3.setBindable(config_$1,"width" , 300);
    config_$1.constrainHeader = true;
    config_$1.resizable = false;
    config_$1.draggable = true;
    AS3.setBindable(config_$1,"layout" , "hbox");
    config_$1.buttonAlign = "center";
    config_$1.modal = true;
    var component_44_5_$1/*:ext.Component*/ =AS3.cast(Ext.Component,{});
    AS3.setBindable(component_44_5_$1,"width" , 47);
    var container_45_5_$1/*:ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    container_45_5_$1.flex = 1.0;
    AS3.setBindable(container_45_5_$1,"layout" , "anchor");
    var box_48_9_$1/*: ext.Component*/ =AS3.cast(Ext.Component,{});
    box_48_9_$1.itemId = "messageBox";
    AS3.setBindable(box_48_9_$1,"html" , com.coremedia.ui.util.EncodingUtil.encodeForHTML(AS3.getBindable(config,"message")));
    var component_50_9_$1/*: ext.Component*/ =AS3.cast(Ext.Component,{});
    AS3.setBindable(component_50_9_$1,"height" , AS3.getBindable(config,"message") ? 8 : 0);
    var editor_ProblemDescriptionButton_51_9_$1/*:com.coremedia.cms.editor.sdk.workflow.ProblemDescriptionButton*/ =AS3.cast(com.coremedia.cms.editor.sdk.workflow.ProblemDescriptionButton,{});
    editor_ProblemDescriptionButton_51_9_$1.itemId = "problemDescriptionButton";
    AS3.setBindable(editor_ProblemDescriptionButton_51_9_$1,"problemDescriptionValueExpression" , com.coremedia.ui.data.ValueExpressionFactory.create('escalationException', AS3.getBindable(config,"task")));
    container_45_5_$1.items = [box_48_9_$1, component_50_9_$1, editor_ProblemDescriptionButton_51_9_$1];
    config_$1.items = [component_44_5_$1, container_45_5_$1];
    var button_57_5_$1/*:ext.button.Button*/ =AS3.cast(Ext.button.Button,{});
    button_57_5_$1.itemId = "okButton";
    button_57_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.FOOTER_SECONDARY.getSkin());
    AS3.setBindable(button_57_5_$1,"scale" , "small");
    AS3.setBindable(button_57_5_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'btn_ok')));
    AS3.setBindable(button_57_5_$1,"handler" ,AS3.bind( this,"close"));
    config_$1.buttons = [button_57_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$WqP8(config_$1);
  }/*

    [Bindable]
    public var task:Task;

    [Bindable]
    public var callback:Function;


    [Bindable]
    public var message:String;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.sites.CloneSiteErrorDialogBase",
      alias: "widget.com.coremedia.cms.editor.sdk.config.cloneSiteErrorDialog",
      constructor: CloneSiteErrorDialog$,
      super$WqP8: function() {
        com.coremedia.cms.editor.sdk.sites.CloneSiteErrorDialogBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        task: null,
        callback: null,
        message: null
      },
      requires: [
        "Ext.Component",
        "Ext.button.Button",
        "Ext.container.Container",
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.cms.editor.sdk.sites.CloneSiteErrorDialogBase",
        "com.coremedia.cms.editor.sdk.sites.LocalizationManager_properties",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.skins.ButtonSkin",
        "com.coremedia.ui.util.EncodingUtil",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.cms.editor.sdk.workflow.ProblemDescriptionButton"]
    };
});
