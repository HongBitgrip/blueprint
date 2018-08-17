Ext.define("com.coremedia.personalization.ui.persona.selector.PersonaSelectorMenu", function(PersonaSelectorMenu) {/*package com.coremedia.personalization.ui.persona.selector{
import com.coremedia.personalization.ui.persona.selector.*;
import net.jangaroo.ext.Exml;
import ext.layout.container.VBoxLayout;
import ext.form.field.Radio;
import com.coremedia.ui.plugins.BindPropertyPlugin;
import ext.container.Container;

    [ResourceBundle('com.coremedia.personalization.ui.Personalization')]
public class PersonaSelectorMenu extends PersonaSelectorMenuBase{

    import com.coremedia.ui.data.ValueExpression;

    import ext.mixin.AdvancedFocusableContainerMixin;

    public static const xtype:String = "com.coremedia.personalization.ui.config.personaSelectorMenu";

    public*/function PersonaSelectorMenu$(config/*:PersonaSelectorMenu = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.personalization.ui.persona.selector.PersonaSelectorMenuBase*/ =AS3.cast(com.coremedia.personalization.ui.persona.selector.PersonaSelectorMenuBase,{});
    var defaults_$1/*:PersonaSelectorMenu*/ =AS3.cast(PersonaSelectorMenu,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.ignoreParentClicks = true;
    config_$1.itemId = "personaSelectorMenu";
    AS3.setBindable(config_$1,"width" , 300);
    config_$1.plain = true;
    config_$1.ignoreInputFields = false;
    config_$1.tabNavigationMode = ext.mixin.AdvancedFocusableContainerMixin.TAB_NAVIGATION_MODE_ONLY;
    var layout_VBox_49_5_$1/*:ext.layout.container.VBoxLayout*/ =AS3.cast(Ext.layout.container.VBox,{});
    AS3.setBindable(layout_VBox_49_5_$1,"align" , "stretch");
    AS3.setBindable(config_$1,"layout" , layout_VBox_49_5_$1);
    var radio_52_5_$1/*:ext.form.field.Radio*/ =AS3.cast(Ext.form.field.Radio,{});
    radio_52_5_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.personalization.ui.persona.selector.PersonaSelectorMenuBase.NO_PERSONA_RADIO_BUTTON_ITEM_ID);
    AS3.setBindable(radio_52_5_$1,"boxLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.personalization.ui.Personalization', 'p13n_persona_selector_nothing_selected_label')));
    var ui_BindPropertyPlugin_55_9_$1/*:com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_55_9_$1.componentProperty = "name";
    ui_BindPropertyPlugin_55_9_$1.transformer = com.coremedia.personalization.ui.persona.selector.PersonaSelectorMenuBase.transformToNumericId;
    ui_BindPropertyPlugin_55_9_$1.bindTo = AS3.getBindable(config,"contentValueExpression");
    radio_52_5_$1.plugins = [ui_BindPropertyPlugin_55_9_$1];
    var container_61_5_$1/*:ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    container_61_5_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.personalization.ui.persona.selector.PersonaSelectorMenuBase.ITEMS_CONTAINER_ITEM_ID);
    config_$1.items = [radio_52_5_$1, container_61_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$znhN(config_$1);
  }/*

    /**
     * The value expression evaluating to the content to be used.
     * /
    [Bindable]
    public var contentValueExpression:ValueExpression;

    /** Name of the CMS document type representing personas. Default is 'CMUserProfile'. * /
    [Bindable]
    public var docType:String;


    /** repository paths that contain personas. paths are '/'-separated folder names * /
    [Bindable]
    public var paths:Array;


    /** The label that as persona group header * /
    [Bindable]
    public var defaultGroupHeaderLabel:String;


    /** This activator instance handles the persona activation stuff
   (setting a persona active by setting the url params to the persona content id)  * /
    [Bindable]
    public var personaActivatorFn:Function;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.personalization.ui.persona.selector.PersonaSelectorMenuBase",
      alias: "widget.com.coremedia.personalization.ui.config.personaSelectorMenu",
      constructor: PersonaSelectorMenu$,
      super$znhN: function() {
        com.coremedia.personalization.ui.persona.selector.PersonaSelectorMenuBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        contentValueExpression: null,
        docType: null,
        paths: null,
        defaultGroupHeaderLabel: null,
        personaActivatorFn: null
      },
      requires: [
        "Ext.container.Container",
        "Ext.form.field.Radio",
        "Ext.layout.container.VBox",
        "com.coremedia.personalization.ui.Personalization_properties",
        "com.coremedia.personalization.ui.persona.selector.PersonaSelectorMenuBase",
        "com.coremedia.ui.plugins.BindPropertyPlugin",
        "ext.mixin.AdvancedFocusableContainerMixin",
        "net.jangaroo.ext.Exml"
      ]
    };
});
