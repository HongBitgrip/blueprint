Ext.define("com.coremedia.blueprint.base.pagegrid.PlacementInheritStateButton", function(PlacementInheritStateButton) {/*package com.coremedia.blueprint.base.pagegrid{
import ext.container.Container;
import net.jangaroo.ext.Exml;
import ext.layout.container.HBoxLayout;
import com.coremedia.ui.components.IconDisplayField;
import ext.layout.container.VBoxLayout;
import ext.button.Button;
import com.coremedia.ui.plugins.BindPropertyPlugin;
import com.coremedia.cms.editor.sdk.actions.OpenInTabAction;
public class PlacementInheritStateButton extends Container{

    import com.coremedia.ui.data.ValueExpression;
    import com.coremedia.ui.skins.ButtonSkin;

    public static const xtype:String = "com.coremedia.blueprint.base.pagegrid.config.placementInheritStateButton";

    public*/function PlacementInheritStateButton$(config/*:PlacementInheritStateButton = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    var defaults_$1/*:PlacementInheritStateButton*/ =AS3.cast(PlacementInheritStateButton,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    var layout_HBox_26_5_$1/*:ext.layout.container.HBoxLayout*/ =AS3.cast(Ext.layout.container.HBox,{});
    AS3.setBindable(layout_HBox_26_5_$1,"pack" , "start");
    AS3.setBindable(config_$1,"layout" , layout_HBox_26_5_$1);
    var ui_IconDisplayField_29_5_$1/*:com.coremedia.ui.components.IconDisplayField*/ =AS3.cast(com.coremedia.ui.components.IconDisplayField,{});
    ui_IconDisplayField_29_5_$1.tooltipOnValue = true;
    AS3.setBindable(ui_IconDisplayField_29_5_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"labelIconCls")));
    ui_IconDisplayField_29_5_$1.hideEmptyLabel = true;
    var container_32_5_$1/*: ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    var layout_VBox_34_9_$1/*:ext.layout.container.VBoxLayout*/ =AS3.cast(Ext.layout.container.VBox,{});
    AS3.setBindable(container_32_5_$1,"layout" , layout_VBox_34_9_$1);
    var ui_IconDisplayField_37_9_$1/*: com.coremedia.ui.components.IconDisplayField*/ =AS3.cast(com.coremedia.ui.components.IconDisplayField,{});
    AS3.setBindable(ui_IconDisplayField_37_9_$1,"iconPosition" ,net.jangaroo.ext.Exml.asString( com.coremedia.ui.components.IconDisplayField.ICON_POSITION_AFTER_VALUE));
    ui_IconDisplayField_37_9_$1.tooltipOnValue = true;
    AS3.setBindable(ui_IconDisplayField_37_9_$1,"iconCls" , "");
    AS3.setBindable(ui_IconDisplayField_37_9_$1,"value" , AS3.getBindable(config,"label"));
    var button_41_9_$1/*:ext.button.Button*/ =AS3.cast(Ext.button.Button,{});
    button_41_9_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.LINK.getSkin());
    var ui_BindPropertyPlugin_43_13_$1/*:com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_43_13_$1.componentProperty = "text";
    ui_BindPropertyPlugin_43_13_$1.bindTo = AS3.getBindable(config,"storingContentValueExpression").extendBy('name');
    button_41_9_$1.plugins = [ui_BindPropertyPlugin_43_13_$1];
    var editor_OpenInTabAction_48_13_$1/*:com.coremedia.cms.editor.sdk.actions.OpenInTabAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.OpenInTabAction,{});
    AS3.setBindable(editor_OpenInTabAction_48_13_$1,"contentValueExpression" , AS3.getBindable(config,"storingContentValueExpression"));
    button_41_9_$1.baseAction = new com.coremedia.cms.editor.sdk.actions.OpenInTabAction(editor_OpenInTabAction_48_13_$1);
    container_32_5_$1.items = [ui_IconDisplayField_37_9_$1, button_41_9_$1];
    config_$1.items = [ui_IconDisplayField_29_5_$1, container_32_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$EJQW(config_$1);
  }/*

    [Bindable]
    public var storingContentValueExpression:ValueExpression;

    [Bindable]
    public var label:String;


    [Bindable]
    public var labelIconCls:String;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.container.Container",
      alias: "widget.com.coremedia.blueprint.base.pagegrid.config.placementInheritStateButton",
      constructor: PlacementInheritStateButton$,
      super$EJQW: function() {
        Ext.container.Container.prototype.constructor.apply(this, arguments);
      },
      config: {
        storingContentValueExpression: null,
        label: null,
        labelIconCls: null
      },
      requires: [
        "Ext.button.Button",
        "Ext.container.Container",
        "Ext.layout.container.HBox",
        "Ext.layout.container.VBox",
        "com.coremedia.cms.editor.sdk.actions.OpenInTabAction",
        "com.coremedia.ui.components.IconDisplayField",
        "com.coremedia.ui.plugins.BindPropertyPlugin",
        "com.coremedia.ui.skins.ButtonSkin",
        "net.jangaroo.ext.Exml"
      ]
    };
});
