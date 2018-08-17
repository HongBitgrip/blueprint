Ext.define("com.coremedia.personalization.ui.persona.popup.PersonaPopupOverviewPanel", function(PersonaPopupOverviewPanel) {/*package com.coremedia.personalization.ui.persona.popup{
import com.coremedia.personalization.ui.persona.popup.*;
import net.jangaroo.ext.Exml;
import ext.layout.container.VBoxLayout;
import ext.container.Container;
import ext.layout.container.HBoxLayout;
import com.coremedia.ui.plugins.HorizontalSpacingPlugin;
import com.coremedia.ui.components.Image;
import com.coremedia.ui.plugins.BindPropertyPlugin;
import com.coremedia.ui.exml.ValueExpression;
import ext.form.field.DisplayField;
import com.coremedia.ui.components.IconButton;
import ext.form.field.BaseField;
import ext.form.FieldContainer;
import com.coremedia.ui.plugins.VerticalSpacingPlugin;

    [ResourceBundle('com.coremedia.personalization.ui.Personalization')]
    [ResourceBundle('com.coremedia.icons.CoreIcons')]
public class PersonaPopupOverviewPanel extends PersonaPopupOverviewPanelBase{

    import com.coremedia.cap.content.Content;
    import com.coremedia.cms.editor.sdk.editorContext;
    import com.coremedia.personalization.ui.persona.helper.PersonaActivator;
    import com.coremedia.personalization.ui.persona.selector.PersonaModel;
    import com.coremedia.ui.bem.SpacingBEMEntities;
    import com.coremedia.ui.skins.PanelSkin;
    import com.coremedia.ui.util.EncodingUtil;

    import ext.StringUtil;

    public static const xtype:String = "com.coremedia.personalization.ui.config.personaPopupOverviewPanel";

    public static const PERSONA_IMAGE_ITEM_ID:String = "personaImage";

    public static const PERSONA_FULLNAME_FIELD_ITEM_ID:String = "personaFullnameField";

    public static const PERSONA_AGE_FIELD_ITEM_ID:String = "personaAgeField";

    public static const PERSONA_LOCATION_FIELD_ITEM_ID:String = "personaLocationField";

    public static const PERSONA_EDIT_BUTTON_ITEM_ID:String = "personaEditButton";

    public static const PERSONA_PANEL_ITEM_ID:String = "personaPanel";

    public static const PERSONA_EXPLICIT_INTEREST_LABEL_ITEM_ID:String = "personaExplicitInterestLabel";

    public*/function PersonaPopupOverviewPanel$(config/*:PersonaPopupOverviewPanel = null*/){var this$=this;if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.personalization.ui.persona.popup.PersonaPopupOverviewPanelBase*/ =AS3.cast(com.coremedia.personalization.ui.persona.popup.PersonaPopupOverviewPanelBase,{});
    var defaults_$1/*:PersonaPopupOverviewPanel*/ =AS3.cast(PersonaPopupOverviewPanel,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"scrollable" , true);
    config_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.PanelSkin.GRID_200.getSkin());
    var layout_VBox_65_5_$1/*:ext.layout.container.VBoxLayout*/ =AS3.cast(Ext.layout.container.VBox,{});
    AS3.setBindable(layout_VBox_65_5_$1,"align" , "stretch");
    AS3.setBindable(config_$1,"layout" , layout_VBox_65_5_$1);
    var container_68_5_$1/*:ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    var layout_HBox_70_9_$1/*:ext.layout.container.HBoxLayout*/ =AS3.cast(Ext.layout.container.HBox,{});
    AS3.setBindable(container_68_5_$1,"layout" , layout_HBox_70_9_$1);
    var ui_HorizontalSpacingPlugin_73_9_$1/*:com.coremedia.ui.plugins.HorizontalSpacingPlugin*/ =AS3.cast(com.coremedia.ui.plugins.HorizontalSpacingPlugin,{});
    AS3.setBindable(ui_HorizontalSpacingPlugin_73_9_$1,"modifier" , com.coremedia.ui.bem.SpacingBEMEntities.HORIZONTAL_SPACING_MODIFIER_200);
    container_68_5_$1.plugins = [ui_HorizontalSpacingPlugin_73_9_$1];
    var ui_Image_76_9_$1/*:com.coremedia.ui.components.Image*/ =AS3.cast(com.coremedia.ui.components.Image,{});
    ui_Image_76_9_$1.itemId =net.jangaroo.ext.Exml.asString( PersonaPopupOverviewPanel.PERSONA_IMAGE_ITEM_ID);
    AS3.setBindable(ui_Image_76_9_$1,"height" , 50);
    AS3.setBindable(ui_Image_76_9_$1,"width" , 50);
    var ui_BindPropertyPlugin_80_13_$1/*:com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_80_13_$1.componentProperty = "src";
    ui_BindPropertyPlugin_80_13_$1.ifUndefined = com.coremedia.personalization.ui.persona.popup.PersonaPopupOverviewPanelBase.EMPTY_PERSONA_PIC_BIG_SRC;
    var ui_ValueExpression_83_17_$1/*:com.coremedia.ui.exml.ValueExpression*/ =AS3.cast(com.coremedia.ui.exml.ValueExpression,{});
    AS3.setBindable(ui_ValueExpression_83_17_$1,"context" , AS3.getBindable(config,"personaModel"));
    AS3.setBindable(ui_ValueExpression_83_17_$1,"expression" , "personaProfileBean.image");
    ui_BindPropertyPlugin_80_13_$1.bindTo = new com.coremedia.ui.exml.ValueExpression(ui_ValueExpression_83_17_$1);
    ui_Image_76_9_$1.plugins = [ui_BindPropertyPlugin_80_13_$1];
    var container_89_9_$1/*: ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    container_89_9_$1.flex = 1.0;
    var layout_VBox_91_13_$1/*: ext.layout.container.VBoxLayout*/ =AS3.cast(Ext.layout.container.VBox,{});
    AS3.setBindable(container_89_9_$1,"layout" , layout_VBox_91_13_$1);
    var displayField_95_13_$1/*:ext.form.field.DisplayField*/ =AS3.cast(Ext.form.field.Display,{});
    displayField_95_13_$1.itemId =net.jangaroo.ext.Exml.asString( PersonaPopupOverviewPanel.PERSONA_FULLNAME_FIELD_ITEM_ID);
    var ui_BindPropertyPlugin_97_17_$1/*: com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_97_17_$1.transformer = com.coremedia.ui.util.EncodingUtil.encodeForHTML;
    var ui_ValueExpression_99_21_$1/*: com.coremedia.ui.exml.ValueExpression*/ =AS3.cast(com.coremedia.ui.exml.ValueExpression,{});
    AS3.setBindable(ui_ValueExpression_99_21_$1,"context" , AS3.getBindable(config,"personaModel"));
    AS3.setBindable(ui_ValueExpression_99_21_$1,"expression" , "personaProfileBean.displayName");
    ui_BindPropertyPlugin_97_17_$1.bindTo = new com.coremedia.ui.exml.ValueExpression(ui_ValueExpression_99_21_$1);
    displayField_95_13_$1.plugins = [ui_BindPropertyPlugin_97_17_$1];
    var displayField_106_13_$1/*: ext.form.field.DisplayField*/ =AS3.cast(Ext.form.field.Display,{});
    displayField_106_13_$1.itemId =net.jangaroo.ext.Exml.asString( PersonaPopupOverviewPanel.PERSONA_AGE_FIELD_ITEM_ID);
    var ui_BindPropertyPlugin_108_17_$1/*: com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_108_17_$1.transformer = 
                                                   function(value/*:**/)/*:String*/ {
                                                      return Ext.String.format(this$.resourceManager.getString('com.coremedia.personalization.ui.Personalization', 'p13n_persona_popup_age'), Number(value));
                                                   };
    ui_BindPropertyPlugin_108_17_$1.ifUndefined = this.resourceManager.getString('com.coremedia.personalization.ui.Personalization', 'p13n_persona_popup_empty_age');
    var ui_ValueExpression_114_21_$1/*: com.coremedia.ui.exml.ValueExpression*/ =AS3.cast(com.coremedia.ui.exml.ValueExpression,{});
    AS3.setBindable(ui_ValueExpression_114_21_$1,"context" , AS3.getBindable(config,"personaModel"));
    AS3.setBindable(ui_ValueExpression_114_21_$1,"expression" , "personaProfileBean.age");
    ui_BindPropertyPlugin_108_17_$1.bindTo = new com.coremedia.ui.exml.ValueExpression(ui_ValueExpression_114_21_$1);
    var ui_BindPropertyPlugin_118_17_$1/*: com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_118_17_$1.componentProperty = "disabled";
    ui_BindPropertyPlugin_118_17_$1.transformer = function(value/*:**/)/*:Boolean*/{ return !value; };
    ui_BindPropertyPlugin_118_17_$1.ifUndefined = true;
    var ui_ValueExpression_122_21_$1/*: com.coremedia.ui.exml.ValueExpression*/ =AS3.cast(com.coremedia.ui.exml.ValueExpression,{});
    AS3.setBindable(ui_ValueExpression_122_21_$1,"context" , AS3.getBindable(config,"personaModel"));
    AS3.setBindable(ui_ValueExpression_122_21_$1,"expression" , "personaProfileBean.age");
    ui_BindPropertyPlugin_118_17_$1.bindTo = new com.coremedia.ui.exml.ValueExpression(ui_ValueExpression_122_21_$1);
    displayField_106_13_$1.plugins = [ui_BindPropertyPlugin_108_17_$1, ui_BindPropertyPlugin_118_17_$1];
    var displayField_129_13_$1/*: ext.form.field.DisplayField*/ =AS3.cast(Ext.form.field.Display,{});
    displayField_129_13_$1.itemId =net.jangaroo.ext.Exml.asString( PersonaPopupOverviewPanel.PERSONA_LOCATION_FIELD_ITEM_ID);
    var ui_BindPropertyPlugin_131_17_$1/*: com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_131_17_$1.ifUndefined = this.resourceManager.getString('com.coremedia.personalization.ui.Personalization', 'p13n_persona_popup_empty_location');
    ui_BindPropertyPlugin_131_17_$1.transformer = com.coremedia.personalization.ui.persona.popup.PersonaPopupOverviewPanelBase.replaceQuotesAndEncode;
    var ui_ValueExpression_135_21_$1/*: com.coremedia.ui.exml.ValueExpression*/ =AS3.cast(com.coremedia.ui.exml.ValueExpression,{});
    AS3.setBindable(ui_ValueExpression_135_21_$1,"context" , AS3.getBindable(config,"personaModel"));
    AS3.setBindable(ui_ValueExpression_135_21_$1,"expression" , "personaProfileBean.location!city");
    ui_BindPropertyPlugin_131_17_$1.bindTo = new com.coremedia.ui.exml.ValueExpression(ui_ValueExpression_135_21_$1);
    var ui_BindPropertyPlugin_139_17_$1/*: com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_139_17_$1.componentProperty = "disabled";
    ui_BindPropertyPlugin_139_17_$1.transformer = function(value/*:**/)/*:Boolean*/{ return !value;};
    ui_BindPropertyPlugin_139_17_$1.ifUndefined = true;
    var ui_ValueExpression_143_21_$1/*: com.coremedia.ui.exml.ValueExpression*/ =AS3.cast(com.coremedia.ui.exml.ValueExpression,{});
    AS3.setBindable(ui_ValueExpression_143_21_$1,"context" , AS3.getBindable(config,"personaModel"));
    AS3.setBindable(ui_ValueExpression_143_21_$1,"expression" , "personaProfileBean.location!city");
    ui_BindPropertyPlugin_139_17_$1.bindTo = new com.coremedia.ui.exml.ValueExpression(ui_ValueExpression_143_21_$1);
    displayField_129_13_$1.plugins = [ui_BindPropertyPlugin_131_17_$1, ui_BindPropertyPlugin_139_17_$1];
    container_89_9_$1.items = [displayField_95_13_$1, displayField_106_13_$1, displayField_129_13_$1];
    var container_151_9_$1/*: ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    var layout_HBox_153_13_$1/*: ext.layout.container.HBoxLayout*/ =AS3.cast(Ext.layout.container.HBox,{});
    AS3.setBindable(container_151_9_$1,"layout" , layout_HBox_153_13_$1);
    var ui_IconButton_156_13_$1/*:com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    ui_IconButton_156_13_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.personalization.ui.persona.popup.PersonaPopupOverviewPanelBase.PERSONA_USE_IN_PREVIEW_BUTTON_ITEM_ID);
    AS3.setBindable(ui_IconButton_156_13_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.personalization.ui.Personalization', 'p13n_persona_popup_use_in_preview_button_text')));
    AS3.setBindable(ui_IconButton_156_13_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.icons.CoreIcons', 'persona_in_preview')));
    AS3.setBindable(ui_IconButton_156_13_$1,"handler" , function()/*:void*/ {
                                     AS3.getBindable(config,"personaActivator").getUrlParameterBean().set(com.coremedia.personalization.ui.persona.helper.PersonaActivator.P13N_TESTCONTEXT_PARAM, (AS3.as(AS3.getBindable(config,"personaContent"),  Object)).getNumericId());
                                     });
    AS3.setBindable(ui_IconButton_156_13_$1,"tooltip" , this.resourceManager.getString('com.coremedia.personalization.ui.Personalization', 'p13n_persona_popup_use_in_preview_button_text'));
    var ui_IconButton_163_13_$1/*: com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    ui_IconButton_163_13_$1.itemId =net.jangaroo.ext.Exml.asString( PersonaPopupOverviewPanel.PERSONA_EDIT_BUTTON_ITEM_ID);
    AS3.setBindable(ui_IconButton_163_13_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.personalization.ui.Personalization', 'p13n_persona_popup_edit_button_text')));
    AS3.setBindable(ui_IconButton_163_13_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.icons.CoreIcons', 'pencil')));
    AS3.setBindable(ui_IconButton_163_13_$1,"handler" , function()/*:void*/ {
                                      com.coremedia.cms.editor.sdk.editorContext.getContentTabManager().openDocument(AS3.getBindable(config,"personaContent"));
                                     });
    AS3.setBindable(ui_IconButton_163_13_$1,"tooltip" , this.resourceManager.getString('com.coremedia.personalization.ui.Personalization', 'p13n_persona_popup_edit_button_text'));
    container_151_9_$1.items = [ui_IconButton_156_13_$1, ui_IconButton_163_13_$1];
    container_68_5_$1.items = [ui_Image_76_9_$1, container_89_9_$1, container_151_9_$1];
    var container_175_5_$1/*: ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    container_175_5_$1.itemId =net.jangaroo.ext.Exml.asString( PersonaPopupOverviewPanel.PERSONA_PANEL_ITEM_ID);
    var layout_VBox_177_9_$1/*: ext.layout.container.VBoxLayout*/ =AS3.cast(Ext.layout.container.VBox,{});
    AS3.setBindable(layout_VBox_177_9_$1,"align" , "stretch");
    AS3.setBindable(container_175_5_$1,"layout" , layout_VBox_177_9_$1);
    var field_181_9_$1/*:ext.form.field.BaseField*/ =AS3.cast(Ext.form.field.Base,{});
    field_181_9_$1["personaModel"] = AS3.getBindable(config,"personaModel");
    field_181_9_$1["personaContent"] = AS3.getBindable(config,"personaContent");
    field_181_9_$1.labelAlign = "top";
    field_181_9_$1.labelSeparator = "";
    container_175_5_$1["defaultType"] = field_181_9_$1['xtype'];
    delete field_181_9_$1['xtype'];
    delete field_181_9_$1['xclass'];
    container_175_5_$1.defaults = field_181_9_$1;
    var fieldContainer_188_9_$1/*:ext.form.FieldContainer*/ =AS3.cast(Ext.form.FieldContainer,{});
    fieldContainer_188_9_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.personalization.ui.persona.popup.PersonaPopupOverviewPanelBase.IMPLICIT_ITEM_CONTAINER_ITEM_ID);
    AS3.setBindable(fieldContainer_188_9_$1,"fieldLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.personalization.ui.Personalization', 'p13n_persona_popup_implicit_interest_label')));
    var layout_VBox_191_13_$1/*: ext.layout.container.VBoxLayout*/ =AS3.cast(Ext.layout.container.VBox,{});
    AS3.setBindable(layout_VBox_191_13_$1,"align" , "stretch");
    AS3.setBindable(fieldContainer_188_9_$1,"layout" , layout_VBox_191_13_$1);
    var ui_VerticalSpacingPlugin_194_13_$1/*:com.coremedia.ui.plugins.VerticalSpacingPlugin*/ =AS3.cast(com.coremedia.ui.plugins.VerticalSpacingPlugin,{});
    fieldContainer_188_9_$1.plugins = [ui_VerticalSpacingPlugin_194_13_$1];
    var displayField_198_13_$1/*: ext.form.field.DisplayField*/ =AS3.cast(Ext.form.field.Display,{});
    displayField_198_13_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.personalization.ui.persona.popup.PersonaPopupOverviewPanelBase.PERSONA_IMPLICIT_INTEREST_EMPTY_FIELD_ITEM_ID);
    AS3.setBindable(displayField_198_13_$1,"value" , this.resourceManager.getString('com.coremedia.personalization.ui.Personalization', 'p13n_persona_popup_empty_implicit'));
    fieldContainer_188_9_$1.items = [displayField_198_13_$1];
    var displayField_204_9_$1/*: ext.form.field.DisplayField*/ =AS3.cast(Ext.form.field.Display,{});
    displayField_204_9_$1.itemId =net.jangaroo.ext.Exml.asString( PersonaPopupOverviewPanel.PERSONA_EXPLICIT_INTEREST_LABEL_ITEM_ID);
    displayField_204_9_$1.htmlEncode = true;
    AS3.setBindable(displayField_204_9_$1,"fieldLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.personalization.ui.Personalization', 'p13n_persona_popup_explicit_interest_label')));
    var ui_BindPropertyPlugin_208_13_$1/*: com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_208_13_$1.componentProperty = "value";
    ui_BindPropertyPlugin_208_13_$1.ifUndefined = this.resourceManager.getString('com.coremedia.personalization.ui.Personalization', 'p13n_persona_popup_empty_explicit');
    ui_BindPropertyPlugin_208_13_$1.bindTo = AS3.getBindable(config,"personaModel").getExplicitInterestValueExpression();
    var ui_BindPropertyPlugin_211_13_$1/*: com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_211_13_$1.componentProperty = "disabled";
    ui_BindPropertyPlugin_211_13_$1.transformer = function(value/*:**/)/*:Boolean*/{ return !value; };
    ui_BindPropertyPlugin_211_13_$1.ifUndefined = true;
    ui_BindPropertyPlugin_211_13_$1.bindTo = AS3.getBindable(config,"personaModel").getExplicitInterestValueExpression();
    displayField_204_9_$1.plugins = [ui_BindPropertyPlugin_208_13_$1, ui_BindPropertyPlugin_211_13_$1];
    container_175_5_$1.items = [fieldContainer_188_9_$1, displayField_204_9_$1];
    config_$1.items = [container_68_5_$1, container_175_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$rVjD(config_$1);
  }/*

    /**
     * The content (document) of the persona
     * /
    [Bindable]
    public var personaContent:Content;

    /**
     * The already loaded personaModel object
     * /
    [Bindable]
    public var personaModel:PersonaModel;

    /**
     * This activator instance handles the persona activation stuff
     * (setting a persona active by setting the url params to the persona content id)
     * /
    [Bindable]
    public var personaActivator:PersonaActivator;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.personalization.ui.persona.popup.PersonaPopupOverviewPanelBase",
      alias: "widget.com.coremedia.personalization.ui.config.personaPopupOverviewPanel",
      constructor: PersonaPopupOverviewPanel$,
      super$rVjD: function() {
        com.coremedia.personalization.ui.persona.popup.PersonaPopupOverviewPanelBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        personaContent: null,
        personaModel: null,
        personaActivator: null
      },
      statics: {
        PERSONA_IMAGE_ITEM_ID: "personaImage",
        PERSONA_FULLNAME_FIELD_ITEM_ID: "personaFullnameField",
        PERSONA_AGE_FIELD_ITEM_ID: "personaAgeField",
        PERSONA_LOCATION_FIELD_ITEM_ID: "personaLocationField",
        PERSONA_EDIT_BUTTON_ITEM_ID: "personaEditButton",
        PERSONA_PANEL_ITEM_ID: "personaPanel",
        PERSONA_EXPLICIT_INTEREST_LABEL_ITEM_ID: "personaExplicitInterestLabel"
      },
      requires: [
        "Ext.String",
        "Ext.container.Container",
        "Ext.form.FieldContainer",
        "Ext.form.field.Base",
        "Ext.form.field.Display",
        "Ext.layout.container.HBox",
        "Ext.layout.container.VBox",
        "com.coremedia.cms.editor.sdk.editorContext",
        "com.coremedia.icons.CoreIcons_properties",
        "com.coremedia.personalization.ui.Personalization_properties",
        "com.coremedia.personalization.ui.persona.popup.PersonaPopupOverviewPanelBase",
        "com.coremedia.ui.bem.SpacingBEMEntities",
        "com.coremedia.ui.components.IconButton",
        "com.coremedia.ui.components.Image",
        "com.coremedia.ui.exml.ValueExpression",
        "com.coremedia.ui.plugins.BindPropertyPlugin",
        "com.coremedia.ui.plugins.HorizontalSpacingPlugin",
        "com.coremedia.ui.plugins.VerticalSpacingPlugin",
        "com.coremedia.ui.skins.PanelSkin",
        "com.coremedia.ui.util.EncodingUtil",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.personalization.ui.persona.helper.PersonaActivator"]
    };
});
