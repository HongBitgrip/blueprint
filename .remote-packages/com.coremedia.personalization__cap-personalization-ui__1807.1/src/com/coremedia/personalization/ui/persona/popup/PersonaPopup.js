Ext.define("com.coremedia.personalization.ui.persona.popup.PersonaPopup", function(PersonaPopup) {/*package com.coremedia.personalization.ui.persona.popup{
import com.coremedia.personalization.ui.persona.popup.*;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.plugins.BindPropertyPlugin;
import com.coremedia.ui.exml.ValueExpression;
import ext.tab.TabPanel;
import ext.panel.Panel;
import ext.grid.GridPanel;
import ext.grid.column.Column;
import ext.data.Store;
import ext.view.TableView;
import ext.button.Button;

    [ResourceBundle('com.coremedia.personalization.ui.Personalization')]
public class PersonaPopup extends PersonaPopupBase{

    import com.coremedia.cap.content.Content;
    import com.coremedia.personalization.ui.persona.helper.PersonaActivator;
    import com.coremedia.personalization.ui.persona.selector.PersonaModel;
    import com.coremedia.ui.data.ValueExpression;
    import com.coremedia.ui.skins.ButtonSkin;
    import com.coremedia.ui.skins.TabBarSkin;
    import com.coremedia.ui.util.EncodingUtil;

    import ext.util.Format;

    public static const xtype:String = "com.coremedia.personalization.ui.config.personaPopup";

    public static const WINDOW_ITEM_ID:String = "personaPopupWindow";

    public*/function PersonaPopup$(config/*:PersonaPopup = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.personalization.ui.persona.popup.PersonaPopupBase*/ =AS3.cast(com.coremedia.personalization.ui.persona.popup.PersonaPopupBase,{});
    var defaults_$1/*:PersonaPopup*/ =AS3.cast(PersonaPopup,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.itemId =net.jangaroo.ext.Exml.asString( PersonaPopup.WINDOW_ITEM_ID + '-'+(AS3.as(AS3.getBindable(config,"personaContent"),  Object)).getNumericId());
    config_$1["id"] = PersonaPopup.WINDOW_ITEM_ID + '-'+(AS3.as(AS3.getBindable(config,"personaContent"),  Object)).getNumericId() + '-'+ this.getMyId(config);
    config_$1.constrain = true;
    config_$1.closeAction = "close";
    AS3.setBindable(config_$1,"height" , 500);
    AS3.setBindable(config_$1,"width" , 530);
    config_$1.stateId = "personaPopupWindowState";
    AS3.setBindable(config_$1,"stateful" , true);
    AS3.setBindable(config_$1,"minWidth" , 430.0);
    AS3.setBindable(config_$1,"layout" , "fit");
    var ui_BindPropertyPlugin_67_5_$1/*:com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_67_5_$1.componentProperty = "title";
    ui_BindPropertyPlugin_67_5_$1.transformer = com.coremedia.ui.util.EncodingUtil.encodeForHTML;
    var ui_ValueExpression_70_9_$1/*:com.coremedia.ui.exml.ValueExpression*/ =AS3.cast(com.coremedia.ui.exml.ValueExpression,{});
    AS3.setBindable(ui_ValueExpression_70_9_$1,"context" , AS3.getBindable(config,"personaModel"));
    AS3.setBindable(ui_ValueExpression_70_9_$1,"expression" , "personaProfileBean.displayName");
    ui_BindPropertyPlugin_67_5_$1.bindTo = new com.coremedia.ui.exml.ValueExpression(ui_ValueExpression_70_9_$1);
    config_$1.plugins = [ui_BindPropertyPlugin_67_5_$1];
    var tabPanel_76_5_$1/*:ext.tab.TabPanel*/ =AS3.cast(Ext.tab.Panel,{});
    AS3.setBindable(tabPanel_76_5_$1,"activeItem" , 0);
    tabPanel_76_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.TabBarSkin.WORKAREA_PANEL.getSkin());
    var perso_PersonaPopupOverviewPanel_80_9_$1/*: com.coremedia.personalization.ui.persona.popup.PersonaPopupOverviewPanel*/ =AS3.cast(com.coremedia.personalization.ui.persona.popup.PersonaPopupOverviewPanel,{});
    AS3.setBindable(perso_PersonaPopupOverviewPanel_80_9_$1,"personaContent" , AS3.getBindable(config,"personaContent"));
    AS3.setBindable(perso_PersonaPopupOverviewPanel_80_9_$1,"personaModel" , AS3.getBindable(config,"personaModel"));
    AS3.setBindable(perso_PersonaPopupOverviewPanel_80_9_$1,"personaActivator" , AS3.getBindable(config,"personaActivator"));
    AS3.setBindable(perso_PersonaPopupOverviewPanel_80_9_$1,"title" , this.resourceManager.getString('com.coremedia.personalization.ui.Personalization', 'p13n_persona_popup_info_tab_label'));
    var panel_85_9_$1/*:ext.panel.Panel*/ =AS3.cast(Ext.panel.Panel,{});
    AS3.setBindable(panel_85_9_$1,"layout" , "fit");
    AS3.setBindable(panel_85_9_$1,"title" , this.resourceManager.getString('com.coremedia.personalization.ui.Personalization', 'p13n_persona_popup_settings_tab_label'));
    AS3.setBindable(panel_85_9_$1,"autoScroll" , false);
    var grid_89_13_$1/*:ext.grid.GridPanel*/ =AS3.cast(Ext.grid.Panel,{});
    grid_89_13_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.personalization.ui.persona.popup.PersonaPopupBase.GRID_ITEM_ID);
    grid_89_13_$1.header = false;
    var gridColumn_92_17_$1/*:ext.grid.column.Column*/ =AS3.cast(Ext.grid.column.Column,{});
    gridColumn_92_17_$1.stateId = "property";
    gridColumn_92_17_$1.header =net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.personalization.ui.Personalization', 'p13n_persona_popup_grid_property_title'));
    gridColumn_92_17_$1.flex = 1.0;
    gridColumn_92_17_$1.dataIndex = "property";
    gridColumn_92_17_$1.renderer = function(value/*:**/)/*:String*/ {return Ext.util.Format.htmlEncode(value);};
    var gridColumn_97_17_$1/*: ext.grid.column.Column*/ =AS3.cast(Ext.grid.column.Column,{});
    gridColumn_97_17_$1.stateId = "value";
    gridColumn_97_17_$1.header =net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.personalization.ui.Personalization', 'p13n_persona_popup_grid_value_title'));
    gridColumn_97_17_$1.flex = 1.0;
    gridColumn_97_17_$1.dataIndex = "value";
    gridColumn_97_17_$1.renderer = function(value/*:**/)/*:String*/ {return Ext.util.Format.htmlEncode(value);};
    var gridColumn_102_17_$1/*: ext.grid.column.Column*/ =AS3.cast(Ext.grid.column.Column,{});
    gridColumn_102_17_$1.stateId = "profiles";
    gridColumn_102_17_$1.header =net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.personalization.ui.Personalization', 'p13n_persona_popup_grid_grouping_title'));
    gridColumn_102_17_$1.dataIndex = "profiles";
    grid_89_13_$1.columns = [gridColumn_92_17_$1, gridColumn_97_17_$1, gridColumn_102_17_$1];
    var store_Store_107_17_$1/*:ext.data.Store*/ =AS3.cast(Ext.data.Store,{});
    AS3.setBindable(store_Store_107_17_$1,"data" , []);
    AS3.setBindable(store_Store_107_17_$1,"fields" , ['profiles', 'property', 'value']);
    AS3.setBindable(grid_89_13_$1,"store" , new Ext.data.Store(store_Store_107_17_$1));
    var gridView_111_17_$1/*:ext.view.TableView*/ =AS3.cast(Ext.view.Table,{});
    AS3.setBindable(gridView_111_17_$1,"emptyText" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.personalization.ui.Personalization', 'p13n_persona_popup_grid_nodata')));
    gridView_111_17_$1.stripeRows = false;
    gridView_111_17_$1.deferEmptyText = false;
    grid_89_13_$1["viewConfig"] = gridView_111_17_$1;
    panel_85_9_$1.items = [grid_89_13_$1];
    tabPanel_76_5_$1.items = [perso_PersonaPopupOverviewPanel_80_9_$1, panel_85_9_$1];
    config_$1.items = [tabPanel_76_5_$1];
    var button_122_5_$1/*:ext.button.Button*/ =AS3.cast(Ext.button.Button,{});
    button_122_5_$1.itemId = "closeBtn";
    button_122_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.FOOTER_SECONDARY.getSkin());
    AS3.setBindable(button_122_5_$1,"scale" , "small");
    AS3.setBindable(button_122_5_$1,"handler" ,AS3.bind( this,"close"));
    AS3.setBindable(button_122_5_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'dialog_defaultCloseButton_text')));
    config_$1.buttons = [button_122_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$6GrU(config_$1);
  }/*

    /**
     * ValueExpression which points to the entity which the persona selection belongs to.
     * /
    [Bindable]
    public var entityExpression:com.coremedia.ui.data.ValueExpression;

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
      extend: "com.coremedia.personalization.ui.persona.popup.PersonaPopupBase",
      alias: "widget.com.coremedia.personalization.ui.config.personaPopup",
      constructor: PersonaPopup$,
      super$6GrU: function() {
        com.coremedia.personalization.ui.persona.popup.PersonaPopupBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        entityExpression: null,
        personaContent: null,
        personaModel: null,
        personaActivator: null
      },
      statics: {WINDOW_ITEM_ID: "personaPopupWindow"},
      requires: [
        "Ext.button.Button",
        "Ext.data.Store",
        "Ext.grid.Panel",
        "Ext.grid.column.Column",
        "Ext.panel.Panel",
        "Ext.tab.Panel",
        "Ext.util.Format",
        "Ext.view.Table",
        "com.coremedia.personalization.ui.Personalization_properties",
        "com.coremedia.personalization.ui.persona.popup.PersonaPopupBase",
        "com.coremedia.ui.exml.ValueExpression",
        "com.coremedia.ui.plugins.BindPropertyPlugin",
        "com.coremedia.ui.skins.ButtonSkin",
        "com.coremedia.ui.skins.TabBarSkin",
        "com.coremedia.ui.util.EncodingUtil",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.personalization.ui.persona.popup.PersonaPopupOverviewPanel"]
    };
});
