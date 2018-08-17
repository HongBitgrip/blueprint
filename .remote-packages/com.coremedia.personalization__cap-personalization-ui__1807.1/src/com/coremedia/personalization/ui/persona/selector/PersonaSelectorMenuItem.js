Ext.define("com.coremedia.personalization.ui.persona.selector.PersonaSelectorMenuItem", function(PersonaSelectorMenuItem) {/*package com.coremedia.personalization.ui.persona.selector{
import com.coremedia.personalization.ui.persona.selector.*;
import com.coremedia.personalization.ui.persona.popup.*;
import net.jangaroo.ext.Exml;
import ext.layout.container.VBoxLayout;
import ext.menu.Separator;
import ext.container.Container;
import com.coremedia.ui.plugins.HorizontalSpacingPlugin;
import ext.layout.container.HBoxLayout;
import ext.form.field.Radio;
import com.coremedia.ui.components.Image;
import com.coremedia.ui.plugins.BindPropertyPlugin;
import ext.layout.container.AnchorLayout;
import ext.form.field.DisplayField;
import com.coremedia.ui.components.ExtendedDisplayField;
import com.coremedia.ui.components.IconButton;

    [ResourceBundle('com.coremedia.personalization.ui.Personalization')]
    [ResourceBundle('com.coremedia.icons.CoreIcons')]
public class PersonaSelectorMenuItem extends PersonaSelectorMenuItemBase{

    import com.coremedia.cap.content.Content;
    import com.coremedia.personalization.ui.persona.helper.PersonaActivator;
    import com.coremedia.ui.data.ValueExpression;
    import com.coremedia.ui.mixins.OverflowBehaviour;
    import com.coremedia.ui.skins.DisplayFieldSkin;
    import com.coremedia.ui.util.EncodingUtil;

    import ext.Ext;
    import ext.StringUtil;
    import ext.button.Button;

    public static const xtype:String = "com.coremedia.personalization.ui.config.personaSelectorMenuItem";

    public static const PERSONA_IMAGE_ITEM_ID:String = "personaImage";

    public*/function PersonaSelectorMenuItem$(config/*:PersonaSelectorMenuItem = null*/){var this$=this;if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.personalization.ui.persona.selector.PersonaSelectorMenuItemBase*/ =AS3.cast(com.coremedia.personalization.ui.persona.selector.PersonaSelectorMenuItemBase,{});
    var defaults_$1/*:PersonaSelectorMenuItem*/ =AS3.cast(PersonaSelectorMenuItem,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    var layout_VBox_63_5_$1/*:ext.layout.container.VBoxLayout*/ =AS3.cast(Ext.layout.container.VBox,{});
    AS3.setBindable(layout_VBox_63_5_$1,"align" , "stretch");
    AS3.setBindable(config_$1,"layout" , layout_VBox_63_5_$1);
    var menuSeparator_66_5_$1/*:ext.menu.Separator*/ =AS3.cast(Ext.menu.Separator,{});
    var container_67_5_$1/*:ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    var ui_HorizontalSpacingPlugin_69_9_$1/*:com.coremedia.ui.plugins.HorizontalSpacingPlugin*/ =AS3.cast(com.coremedia.ui.plugins.HorizontalSpacingPlugin,{});
    container_67_5_$1.plugins = [ui_HorizontalSpacingPlugin_69_9_$1];
    var layout_HBox_72_9_$1/*:ext.layout.container.HBoxLayout*/ =AS3.cast(Ext.layout.container.HBox,{});
    AS3.setBindable(layout_HBox_72_9_$1,"align" , "middle");
    AS3.setBindable(container_67_5_$1,"layout" , layout_HBox_72_9_$1);
    var radio_75_9_$1/*:ext.form.field.Radio*/ =AS3.cast(Ext.form.field.Radio,{});
    radio_75_9_$1.name =net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"previewDocumentId")+com.coremedia.personalization.ui.persona.selector.PersonaSelectorMenuItemBase.RADIO_BUTTON_NAME_SUFFIX);
    radio_75_9_$1.ariaLabel =net.jangaroo.ext.Exml.asString( com.coremedia.personalization.ui.persona.selector.PersonaModels.forContent(AS3.getBindable(config,"personaContent")).getDisplayName());
    radio_75_9_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.personalization.ui.persona.selector.PersonaSelectorMenuItemBase.RADIO_BUTTON_ITEM_ID_PREFIX + (AS3.as(AS3.getBindable(config,"personaContent"),  Object)).getNumericId());
    radio_75_9_$1.inputValue =net.jangaroo.ext.Exml.asString( (AS3.as(AS3.getBindable(config,"personaContent"),  Object)).getNumericId()+com.coremedia.personalization.ui.persona.selector.PersonaSelectorMenuItemBase.RADIO_BUTTON_VALUE_SUFFIX);
    var ui_Image_80_9_$1/*:com.coremedia.ui.components.Image*/ =AS3.cast(com.coremedia.ui.components.Image,{});
    AS3.setBindable(ui_Image_80_9_$1,"height" , 50);
    ui_Image_80_9_$1.itemId =net.jangaroo.ext.Exml.asString( PersonaSelectorMenuItem.PERSONA_IMAGE_ITEM_ID);
    AS3.setBindable(ui_Image_80_9_$1,"width" , 50);
    AS3.setBindable(ui_Image_80_9_$1,"handler" ,AS3.bind( this,"selectRadioButton"));
    var ui_BindPropertyPlugin_85_13_$1/*:com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_85_13_$1.componentProperty = "src";
    ui_BindPropertyPlugin_85_13_$1.bindTo = com.coremedia.personalization.ui.persona.selector.PersonaModels.forContent(AS3.getBindable(config,"personaContent")).getPersonaImageValueExpression();
    ui_BindPropertyPlugin_85_13_$1.ifUndefined = Ext.getResourcePath(com.coremedia.personalization.ui.persona.selector.PersonaSelectorMenuItemBase.EMPTY_PERSONA_PIC_SRC, null, com.coremedia.personalization.ui.persona.selector.PersonaSelectorMenuItemBase.EMPTY_PERSONA_PIC_PACKAGE_NAME);
    ui_Image_80_9_$1.plugins = [ui_BindPropertyPlugin_85_13_$1];
    var container_91_9_$1/*: ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    container_91_9_$1.flex = 1.0;
    container_91_9_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.personalization.ui.persona.selector.PersonaSelectorMenuItemBase.PERSONA_INFO_ITEM_ID);
    var layout_Anchor_93_13_$1/*:ext.layout.container.AnchorLayout*/ =AS3.cast(Ext.layout.container.Anchor,{});
    AS3.setBindable(container_91_9_$1,"layout" , layout_Anchor_93_13_$1);
    var displayField_97_13_$1/*:ext.form.field.DisplayField*/ =AS3.cast(Ext.form.field.Display,{});
    displayField_97_13_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.DisplayFieldSkin.BOLD.getSkin());
    var ui_BindPropertyPlugin_99_17_$1/*: com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_99_17_$1.componentProperty = "value";
    ui_BindPropertyPlugin_99_17_$1.transformer = com.coremedia.ui.util.EncodingUtil.encodeForHTML;
    ui_BindPropertyPlugin_99_17_$1.bindTo = this.getDisplayNameAndAgeValueExpression(config);
    displayField_97_13_$1.plugins = [ui_BindPropertyPlugin_99_17_$1];
    var ui_ExtendedDisplayField_105_13_$1/*:com.coremedia.ui.components.ExtendedDisplayField*/ =AS3.cast(com.coremedia.ui.components.ExtendedDisplayField,{});
    ui_ExtendedDisplayField_105_13_$1.htmlEncode = true;
    AS3.setBindable(ui_ExtendedDisplayField_105_13_$1,"overflowBehaviour" , com.coremedia.ui.mixins.OverflowBehaviour.ELLIPSIS);
    AS3.setBindable(ui_ExtendedDisplayField_105_13_$1,"width" , 160);
    var ui_BindPropertyPlugin_109_17_$1/*: com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_109_17_$1.componentProperty = "value";
    ui_BindPropertyPlugin_109_17_$1.bindTo = com.coremedia.personalization.ui.persona.selector.PersonaModels.forContent(AS3.getBindable(config,"personaContent")).getExplicitInterestValueExpression();
    ui_ExtendedDisplayField_105_13_$1.plugins = [ui_BindPropertyPlugin_109_17_$1];
    container_91_9_$1.items = [displayField_97_13_$1, ui_ExtendedDisplayField_105_13_$1];
    var ui_IconButton_116_9_$1/*:com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    AS3.setBindable(ui_IconButton_116_9_$1,"scale" , "small");
    ui_IconButton_116_9_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.personalization.ui.persona.selector.PersonaSelectorMenuItemBase.EDIT_BUTTON_ITEM_ID);
    AS3.setBindable(ui_IconButton_116_9_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.icons.CoreIcons', 'information')));
    AS3.setBindable(ui_IconButton_116_9_$1,"handler" , function(b/*:Button*/)/*:void*/ {
                                   AS3.getBindable(config,"personaPopupManager").showPersonaPopupForPersonaContent(AS3.getBindable(config,"entityExpression"), AS3.getBindable(config,"personaContent"), this$.getPersonaModel(), (AS3.as(b.findParentByType(AS3.cast(com.coremedia.personalization.ui.persona.selector.PersonaSelector,{}).xtype),  com.coremedia.personalization.ui.persona.selector.PersonaSelector)), AS3.getBindable(config,"personaActivator"));
                                   this$.getParentMenu().hide();
                                 });
    var ui_BindPropertyPlugin_124_13_$1/*: com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_124_13_$1.componentProperty = "tooltip";
    ui_BindPropertyPlugin_124_13_$1.transformer = function(value/*:String*/)/*:String*/{
                                                return Ext.String.format(this$.resourceManager.getString('com.coremedia.personalization.ui.Personalization', 'p13n_persona_selector_open_info_button_tooltip'), value);
                                             };
    ui_BindPropertyPlugin_124_13_$1.bindTo = this.getDisplayNameAndAgeValueExpression(config);
    var ui_BindPropertyPlugin_129_13_$1/*: com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_129_13_$1.componentProperty = "ariaLabel";
    ui_BindPropertyPlugin_129_13_$1.transformer = function(value/*:String*/)/*:String*/{
                                                return Ext.String.format(this$.resourceManager.getString('com.coremedia.personalization.ui.Personalization', 'p13n_persona_selector_open_info_button_tooltip'), value);
                                             };
    ui_BindPropertyPlugin_129_13_$1.bindTo = this.getDisplayNameAndAgeValueExpression(config);
    ui_IconButton_116_9_$1.plugins = [ui_BindPropertyPlugin_124_13_$1, ui_BindPropertyPlugin_129_13_$1];
    container_67_5_$1.items = [radio_75_9_$1, ui_Image_80_9_$1, container_91_9_$1, ui_IconButton_116_9_$1];
    config_$1.items = [menuSeparator_66_5_$1, container_67_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$qiQA(config_$1);
  }/*

    /**
     * ValueExpression which points to the entity which the persona selection belongs to.
     * /
    [Bindable]
    public var entityExpression:ValueExpression;

    /**
     * The actual persona Content
     * /
    [Bindable]
    public var personaContent:Content;

    /**
     * This activator instance handles the persona activation stuff
     * (setting a persona active by setting the url params to the persona content id)
     * /
    [Bindable]
    public var personaActivator:PersonaActivator;

    /** The previewDocumentId is used to group the radioButtons to the right document * /
    [Bindable]
    public var previewDocumentId:String;


    /** The personaPopupManager coordinates the instantiation of personaPopups. A PersonaPopup should only
   * be displayed, if a popup for the same personaContent isn't already visible to the user. A PersonaPopup displays
   * detailed information about a persona.  * /
    [Bindable]
    public var personaPopupManager:com.coremedia.personalization.ui.persona.popup.PersonaPopupManager;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.personalization.ui.persona.selector.PersonaSelectorMenuItemBase",
      alias: "widget.com.coremedia.personalization.ui.config.personaSelectorMenuItem",
      constructor: PersonaSelectorMenuItem$,
      super$qiQA: function() {
        com.coremedia.personalization.ui.persona.selector.PersonaSelectorMenuItemBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        entityExpression: null,
        personaContent: null,
        personaActivator: null,
        previewDocumentId: null,
        personaPopupManager: null
      },
      statics: {PERSONA_IMAGE_ITEM_ID: "personaImage"},
      requires: [
        "Ext",
        "Ext.String",
        "Ext.container.Container",
        "Ext.form.field.Display",
        "Ext.form.field.Radio",
        "Ext.layout.container.Anchor",
        "Ext.layout.container.HBox",
        "Ext.layout.container.VBox",
        "Ext.menu.Separator",
        "com.coremedia.icons.CoreIcons_properties",
        "com.coremedia.personalization.ui.Personalization_properties",
        "com.coremedia.personalization.ui.persona.selector.PersonaSelectorMenuItemBase",
        "com.coremedia.ui.components.ExtendedDisplayField",
        "com.coremedia.ui.components.IconButton",
        "com.coremedia.ui.components.Image",
        "com.coremedia.ui.mixins.OverflowBehaviour",
        "com.coremedia.ui.plugins.BindPropertyPlugin",
        "com.coremedia.ui.plugins.HorizontalSpacingPlugin",
        "com.coremedia.ui.skins.DisplayFieldSkin",
        "com.coremedia.ui.util.EncodingUtil",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.personalization.ui.persona.selector.PersonaModels",
        "com.coremedia.personalization.ui.persona.selector.PersonaSelector"
      ]
    };
});
