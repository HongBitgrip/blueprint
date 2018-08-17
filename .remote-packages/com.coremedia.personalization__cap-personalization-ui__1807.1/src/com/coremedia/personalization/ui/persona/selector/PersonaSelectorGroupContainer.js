Ext.define("com.coremedia.personalization.ui.persona.selector.PersonaSelectorGroupContainer", function(PersonaSelectorGroupContainer) {/*package com.coremedia.personalization.ui.persona.selector{
import com.coremedia.personalization.ui.persona.selector.*;
import net.jangaroo.ext.Exml;
import ext.layout.container.VBoxLayout;
import ext.container.Container;
import ext.layout.container.HBoxLayout;
import ext.form.field.DisplayField;
import com.coremedia.ui.components.IconButton;
import com.coremedia.cms.editor.sdk.actions.ShowRepositoryAction;
import ext.Component;

    [ResourceBundle('com.coremedia.personalization.ui.Personalization')]
    [ResourceBundle('com.coremedia.icons.CoreIcons')]
public class PersonaSelectorGroupContainer extends PersonaSelectorGroupContainerBase{

    import com.coremedia.cap.content.Content;
    import com.coremedia.ui.skins.DisplayFieldSkin;

    import ext.StringUtil;

    public static const xtype:String = "com.coremedia.personalization.ui.config.personaSelectorGroupContainer";

    public*/function PersonaSelectorGroupContainer$(config/*:PersonaSelectorGroupContainer = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.personalization.ui.persona.selector.PersonaSelectorGroupContainerBase*/ =AS3.cast(com.coremedia.personalization.ui.persona.selector.PersonaSelectorGroupContainerBase,{});
    var defaults_$1/*:PersonaSelectorGroupContainer*/ =AS3.cast(PersonaSelectorGroupContainer,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    var layout_VBox_37_5_$1/*:ext.layout.container.VBoxLayout*/ =AS3.cast(Ext.layout.container.VBox,{});
    AS3.setBindable(layout_VBox_37_5_$1,"pack" , "center");
    AS3.setBindable(layout_VBox_37_5_$1,"align" , "stretch");
    AS3.setBindable(config_$1,"layout" , layout_VBox_37_5_$1);
    var container_40_5_$1/*:ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    var layout_HBox_42_9_$1/*:ext.layout.container.HBoxLayout*/ =AS3.cast(Ext.layout.container.HBox,{});
    AS3.setBindable(layout_HBox_42_9_$1,"align" , "middle");
    AS3.setBindable(container_40_5_$1,"layout" , layout_HBox_42_9_$1);
    var displayField_45_9_$1/*:ext.form.field.DisplayField*/ =AS3.cast(Ext.form.field.Display,{});
    displayField_45_9_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.DisplayFieldSkin.BOLD.getSkin());
    AS3.setBindable(displayField_45_9_$1,"value" , AS3.getBindable(config,"groupLabel"));
    var ui_IconButton_48_9_$1/*:com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    AS3.setBindable(ui_IconButton_48_9_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.icons.CoreIcons', 'search')));
    AS3.setBindable(ui_IconButton_48_9_$1,"text" ,net.jangaroo.ext.Exml.asString( Ext.String.format(this.resourceManager.getString('com.coremedia.personalization.ui.Personalization', 'p13n_persona_selector_group_button_tooltip'), AS3.getBindable(config,"groupLabel"))));
    AS3.setBindable(ui_IconButton_48_9_$1,"tooltip" , Ext.String.format(this.resourceManager.getString('com.coremedia.personalization.ui.Personalization', 'p13n_persona_selector_group_button_tooltip'), AS3.getBindable(config,"groupLabel")));
    var editor_ShowRepositoryAction_52_13_$1/*:com.coremedia.cms.editor.sdk.actions.ShowRepositoryAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.ShowRepositoryAction,{});
    AS3.setBindable(editor_ShowRepositoryAction_52_13_$1,"preserveFolder" , true);
    AS3.setBindable(editor_ShowRepositoryAction_52_13_$1,"folder" , AS3.getBindable(config,"folder"));
    ui_IconButton_48_9_$1.baseAction = new com.coremedia.cms.editor.sdk.actions.ShowRepositoryAction(editor_ShowRepositoryAction_52_13_$1);
    var component_56_9_$1/*:ext.Component*/ =AS3.cast(Ext.Component,{});
    AS3.setBindable(component_56_9_$1,"width" , 10);
    container_40_5_$1.items = [displayField_45_9_$1, ui_IconButton_48_9_$1, component_56_9_$1];
    config_$1.items = [container_40_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$g_Gw(config_$1);
  }/*

    /**
     * The library will be visible at that folder, when the groupLabel is clicked.
     * /
    [Bindable]
    public var folder:Content;

    /** This text is used to label the pesonas from the provided folder.  * /
    [Bindable]
    public var groupLabel:String;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.personalization.ui.persona.selector.PersonaSelectorGroupContainerBase",
      alias: "widget.com.coremedia.personalization.ui.config.personaSelectorGroupContainer",
      constructor: PersonaSelectorGroupContainer$,
      super$g_Gw: function() {
        com.coremedia.personalization.ui.persona.selector.PersonaSelectorGroupContainerBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        folder: null,
        groupLabel: null
      },
      requires: [
        "Ext.Component",
        "Ext.String",
        "Ext.container.Container",
        "Ext.form.field.Display",
        "Ext.layout.container.HBox",
        "Ext.layout.container.VBox",
        "com.coremedia.cms.editor.sdk.actions.ShowRepositoryAction",
        "com.coremedia.icons.CoreIcons_properties",
        "com.coremedia.personalization.ui.Personalization_properties",
        "com.coremedia.personalization.ui.persona.selector.PersonaSelectorGroupContainerBase",
        "com.coremedia.ui.components.IconButton",
        "com.coremedia.ui.skins.DisplayFieldSkin",
        "net.jangaroo.ext.Exml"
      ]
    };
});
