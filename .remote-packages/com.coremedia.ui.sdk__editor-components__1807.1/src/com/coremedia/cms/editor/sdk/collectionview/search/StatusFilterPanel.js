Ext.define("com.coremedia.cms.editor.sdk.collectionview.search.StatusFilterPanel", function(StatusFilterPanel) {/*package com.coremedia.cms.editor.sdk.collectionview.search{
import com.coremedia.cms.editor.sdk.collectionview.search.*;
import net.jangaroo.ext.Exml;
import ext.container.Container;
import ext.layout.container.HBoxLayout;
import ext.form.field.Checkbox;
import com.coremedia.ui.plugins.BindPropertyPlugin;
import com.coremedia.ui.exml.ValueExpression;
import com.coremedia.ui.components.MenuIconButton;
import ext.menu.Menu;
import ext.menu.CheckItem;
import ext.layout.container.VBoxLayout;

    [ResourceBundle('com.coremedia.cms.editor.Editor')]
public class StatusFilterPanel extends StatusFilterPanelBase{

    import com.coremedia.ui.skins.ButtonSkin;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.statusFilterPanel";

    /**
     * The filter ID for this filter. It is used as itemId and identifier in saved searches.
     * /
    public static const FILTER_ID:String = "status";

    public*/function StatusFilterPanel$(config/*:StatusFilterPanel = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.collectionview.search.StatusFilterPanelBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.collectionview.search.StatusFilterPanelBase,{});
    var defaults_$1/*:StatusFilterPanel*/ =AS3.cast(StatusFilterPanel,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.itemId =net.jangaroo.ext.Exml.asString( StatusFilterPanel.FILTER_ID);
    AS3.setBindable(config_$1,"title" , this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'Filter_status_text'));
    var container_29_5_$1/*:ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    var container_31_9_$1/*: ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    var layout_HBox_33_13_$1/*:ext.layout.container.HBoxLayout*/ =AS3.cast(Ext.layout.container.HBox,{});
    AS3.setBindable(container_31_9_$1,"layout" , layout_HBox_33_13_$1);
    var checkbox_36_13_$1/*:ext.form.field.Checkbox*/ =AS3.cast(Ext.form.field.Checkbox,{});
    checkbox_36_13_$1.itemId = "filterInProductionCheckbox";
    checkbox_36_13_$1.flex = 1.0;
    AS3.setBindable(checkbox_36_13_$1,"boxLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'Filter_inProduction_text')));
    checkbox_36_13_$1.hideLabel = true;
    var ui_BindPropertyPlugin_41_17_$1/*:com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_41_17_$1.bidirectional = true;
    var ui_ValueExpression_43_21_$1/*:com.coremedia.ui.exml.ValueExpression*/ =AS3.cast(com.coremedia.ui.exml.ValueExpression,{});
    AS3.setBindable(ui_ValueExpression_43_21_$1,"expression" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.collectionview.search.StatusFilterPanelBase.IN_PRODUCTION_FILTER_PROPERTY));
    AS3.setBindable(ui_ValueExpression_43_21_$1,"context" , this.getStateBean());
    ui_BindPropertyPlugin_41_17_$1.bindTo = new com.coremedia.ui.exml.ValueExpression(ui_ValueExpression_43_21_$1);
    checkbox_36_13_$1.plugins = [ui_BindPropertyPlugin_41_17_$1];
    var ui_MenuIconButton_49_13_$1/*:com.coremedia.ui.components.MenuIconButton*/ =AS3.cast(com.coremedia.ui.components.MenuIconButton,{});
    ui_MenuIconButton_49_13_$1.itemId = "filterInProductionSubMenu";
    AS3.setBindable(ui_MenuIconButton_49_13_$1,"arrowVisible" , false);
    AS3.setBindable(ui_MenuIconButton_49_13_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'Filter_status_dropdown_button_text')));
    AS3.setBindable(ui_MenuIconButton_49_13_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.icons.CoreIcons','arrow_down')));
    ui_MenuIconButton_49_13_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.TOOLBAR.getSkin());
    var menu_55_17_$1/*:ext.menu.Menu*/ =AS3.cast(Ext.menu.Menu,{});
    var menuCheckItem_57_21_$1/*:ext.menu.CheckItem*/ =AS3.cast(Ext.menu.CheckItem,{});
    menuCheckItem_57_21_$1.itemId = "filterCheckedOutByMeCheckbox";
    AS3.setBindable(menuCheckItem_57_21_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'Filter_checkedOutByMe_text')));
    var ui_BindPropertyPlugin_60_25_$1/*: com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_60_25_$1.componentProperty = "checked";
    ui_BindPropertyPlugin_60_25_$1.bidirectional = true;
    var ui_ValueExpression_63_29_$1/*: com.coremedia.ui.exml.ValueExpression*/ =AS3.cast(com.coremedia.ui.exml.ValueExpression,{});
    AS3.setBindable(ui_ValueExpression_63_29_$1,"expression" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.collectionview.search.StatusFilterPanelBase.EDITED_BY_ME_FILTER_PROPERTY));
    AS3.setBindable(ui_ValueExpression_63_29_$1,"context" , this.getStateBean());
    ui_BindPropertyPlugin_60_25_$1.bindTo = new com.coremedia.ui.exml.ValueExpression(ui_ValueExpression_63_29_$1);
    var ui_BindPropertyPlugin_67_25_$1/*: com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_67_25_$1.componentProperty = "disabled";
    ui_BindPropertyPlugin_67_25_$1.transformer = function(value/*:Boolean*/)/*:Boolean*/ { return !value; };
    var ui_ValueExpression_70_29_$1/*: com.coremedia.ui.exml.ValueExpression*/ =AS3.cast(com.coremedia.ui.exml.ValueExpression,{});
    AS3.setBindable(ui_ValueExpression_70_29_$1,"expression" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.collectionview.search.StatusFilterPanelBase.IN_PRODUCTION_FILTER_PROPERTY));
    AS3.setBindable(ui_ValueExpression_70_29_$1,"context" , this.getStateBean());
    ui_BindPropertyPlugin_67_25_$1.bindTo = new com.coremedia.ui.exml.ValueExpression(ui_ValueExpression_70_29_$1);
    menuCheckItem_57_21_$1.plugins = [ui_BindPropertyPlugin_60_25_$1, ui_BindPropertyPlugin_67_25_$1];
    var menuCheckItem_76_21_$1/*: ext.menu.CheckItem*/ =AS3.cast(Ext.menu.CheckItem,{});
    menuCheckItem_76_21_$1.itemId = "filterCheckOutByOthersCheckbox";
    AS3.setBindable(menuCheckItem_76_21_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'Filter_checkedOutByOthers_text')));
    var ui_BindPropertyPlugin_79_25_$1/*: com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_79_25_$1.componentProperty = "checked";
    ui_BindPropertyPlugin_79_25_$1.bidirectional = true;
    var ui_ValueExpression_82_29_$1/*: com.coremedia.ui.exml.ValueExpression*/ =AS3.cast(com.coremedia.ui.exml.ValueExpression,{});
    AS3.setBindable(ui_ValueExpression_82_29_$1,"expression" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.collectionview.search.StatusFilterPanelBase.EDITED_BY_OTHERS_FILTER_PROPERTY));
    AS3.setBindable(ui_ValueExpression_82_29_$1,"context" , this.getStateBean());
    ui_BindPropertyPlugin_79_25_$1.bindTo = new com.coremedia.ui.exml.ValueExpression(ui_ValueExpression_82_29_$1);
    var ui_BindPropertyPlugin_86_25_$1/*: com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_86_25_$1.componentProperty = "disabled";
    ui_BindPropertyPlugin_86_25_$1.transformer = function(value/*:Boolean*/)/*:Boolean*/ { return !value; };
    var ui_ValueExpression_89_29_$1/*: com.coremedia.ui.exml.ValueExpression*/ =AS3.cast(com.coremedia.ui.exml.ValueExpression,{});
    AS3.setBindable(ui_ValueExpression_89_29_$1,"expression" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.collectionview.search.StatusFilterPanelBase.IN_PRODUCTION_FILTER_PROPERTY));
    AS3.setBindable(ui_ValueExpression_89_29_$1,"context" , this.getStateBean());
    ui_BindPropertyPlugin_86_25_$1.bindTo = new com.coremedia.ui.exml.ValueExpression(ui_ValueExpression_89_29_$1);
    menuCheckItem_76_21_$1.plugins = [ui_BindPropertyPlugin_79_25_$1, ui_BindPropertyPlugin_86_25_$1];
    var menuCheckItem_95_21_$1/*: ext.menu.CheckItem*/ =AS3.cast(Ext.menu.CheckItem,{});
    menuCheckItem_95_21_$1.itemId = "filterNotCheckedOutCheckbox";
    AS3.setBindable(menuCheckItem_95_21_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'Filter_notCheckedOut_text')));
    var ui_BindPropertyPlugin_98_25_$1/*: com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_98_25_$1.componentProperty = "checked";
    ui_BindPropertyPlugin_98_25_$1.bidirectional = true;
    var ui_ValueExpression_101_29_$1/*: com.coremedia.ui.exml.ValueExpression*/ =AS3.cast(com.coremedia.ui.exml.ValueExpression,{});
    AS3.setBindable(ui_ValueExpression_101_29_$1,"expression" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.collectionview.search.StatusFilterPanelBase.NOT_EDITED_FILTER_PROPERTY));
    AS3.setBindable(ui_ValueExpression_101_29_$1,"context" , this.getStateBean());
    ui_BindPropertyPlugin_98_25_$1.bindTo = new com.coremedia.ui.exml.ValueExpression(ui_ValueExpression_101_29_$1);
    var ui_BindPropertyPlugin_105_25_$1/*: com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_105_25_$1.componentProperty = "disabled";
    ui_BindPropertyPlugin_105_25_$1.transformer = function(value/*:Boolean*/)/*:Boolean*/ { return !value; };
    var ui_ValueExpression_108_29_$1/*: com.coremedia.ui.exml.ValueExpression*/ =AS3.cast(com.coremedia.ui.exml.ValueExpression,{});
    AS3.setBindable(ui_ValueExpression_108_29_$1,"expression" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.collectionview.search.StatusFilterPanelBase.IN_PRODUCTION_FILTER_PROPERTY));
    AS3.setBindable(ui_ValueExpression_108_29_$1,"context" , this.getStateBean());
    ui_BindPropertyPlugin_105_25_$1.bindTo = new com.coremedia.ui.exml.ValueExpression(ui_ValueExpression_108_29_$1);
    menuCheckItem_95_21_$1.plugins = [ui_BindPropertyPlugin_98_25_$1, ui_BindPropertyPlugin_105_25_$1];
    menu_55_17_$1.items = [menuCheckItem_57_21_$1, menuCheckItem_76_21_$1, menuCheckItem_95_21_$1];
    ui_MenuIconButton_49_13_$1.menu = menu_55_17_$1;
    container_31_9_$1.items = [checkbox_36_13_$1, ui_MenuIconButton_49_13_$1];
    var checkbox_120_9_$1/*: ext.form.field.Checkbox*/ =AS3.cast(Ext.form.field.Checkbox,{});
    checkbox_120_9_$1.itemId = "filterApprovedCheckbox";
    AS3.setBindable(checkbox_120_9_$1,"boxLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'Filter_approved_text')));
    checkbox_120_9_$1.hideLabel = true;
    var ui_BindPropertyPlugin_124_13_$1/*: com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_124_13_$1.bidirectional = true;
    var ui_ValueExpression_126_17_$1/*: com.coremedia.ui.exml.ValueExpression*/ =AS3.cast(com.coremedia.ui.exml.ValueExpression,{});
    AS3.setBindable(ui_ValueExpression_126_17_$1,"expression" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.collectionview.search.StatusFilterPanelBase.APPROVED_FILTER_PROPERTY));
    AS3.setBindable(ui_ValueExpression_126_17_$1,"context" , this.getStateBean());
    ui_BindPropertyPlugin_124_13_$1.bindTo = new com.coremedia.ui.exml.ValueExpression(ui_ValueExpression_126_17_$1);
    checkbox_120_9_$1.plugins = [ui_BindPropertyPlugin_124_13_$1];
    var checkbox_132_9_$1/*: ext.form.field.Checkbox*/ =AS3.cast(Ext.form.field.Checkbox,{});
    checkbox_132_9_$1.itemId = "filterPublishedCheckbox";
    AS3.setBindable(checkbox_132_9_$1,"boxLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'Filter_published_text')));
    checkbox_132_9_$1.hideLabel = true;
    var ui_BindPropertyPlugin_136_13_$1/*: com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_136_13_$1.bidirectional = true;
    var ui_ValueExpression_138_17_$1/*: com.coremedia.ui.exml.ValueExpression*/ =AS3.cast(com.coremedia.ui.exml.ValueExpression,{});
    AS3.setBindable(ui_ValueExpression_138_17_$1,"expression" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.collectionview.search.StatusFilterPanelBase.PUBLISHED_FILTER_PROPERTY));
    AS3.setBindable(ui_ValueExpression_138_17_$1,"context" , this.getStateBean());
    ui_BindPropertyPlugin_136_13_$1.bindTo = new com.coremedia.ui.exml.ValueExpression(ui_ValueExpression_138_17_$1);
    checkbox_132_9_$1.plugins = [ui_BindPropertyPlugin_136_13_$1];
    var checkbox_144_9_$1/*: ext.form.field.Checkbox*/ =AS3.cast(Ext.form.field.Checkbox,{});
    checkbox_144_9_$1.itemId = "filterDeletedCheckbox";
    AS3.setBindable(checkbox_144_9_$1,"boxLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'Filter_deleted_text')));
    checkbox_144_9_$1.hideLabel = true;
    var ui_BindPropertyPlugin_148_13_$1/*: com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_148_13_$1.bidirectional = true;
    var ui_ValueExpression_150_17_$1/*: com.coremedia.ui.exml.ValueExpression*/ =AS3.cast(com.coremedia.ui.exml.ValueExpression,{});
    AS3.setBindable(ui_ValueExpression_150_17_$1,"expression" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.collectionview.search.StatusFilterPanelBase.DELETED_FILTER_PROPERTY));
    AS3.setBindable(ui_ValueExpression_150_17_$1,"context" , this.getStateBean());
    ui_BindPropertyPlugin_148_13_$1.bindTo = new com.coremedia.ui.exml.ValueExpression(ui_ValueExpression_150_17_$1);
    checkbox_144_9_$1.plugins = [ui_BindPropertyPlugin_148_13_$1];
    container_29_5_$1.items = [container_31_9_$1, checkbox_120_9_$1, checkbox_132_9_$1, checkbox_144_9_$1];
    var layout_VBox_158_9_$1/*:ext.layout.container.VBoxLayout*/ =AS3.cast(Ext.layout.container.VBox,{});
    AS3.setBindable(layout_VBox_158_9_$1,"align" , "stretch");
    AS3.setBindable(container_29_5_$1,"layout" , layout_VBox_158_9_$1);
    config_$1.items = [container_29_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$6$V5(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.collectionview.search.StatusFilterPanelBase",
      alias: "widget.com.coremedia.cms.editor.sdk.config.statusFilterPanel",
      constructor: StatusFilterPanel$,
      super$6$V5: function() {
        com.coremedia.cms.editor.sdk.collectionview.search.StatusFilterPanelBase.prototype.constructor.apply(this, arguments);
      },
      statics: {FILTER_ID: "status"},
      requires: [
        "Ext.container.Container",
        "Ext.form.field.Checkbox",
        "Ext.layout.container.HBox",
        "Ext.layout.container.VBox",
        "Ext.menu.CheckItem",
        "Ext.menu.Menu",
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.cms.editor.sdk.collectionview.search.StatusFilterPanelBase",
        "com.coremedia.ui.components.MenuIconButton",
        "com.coremedia.ui.exml.ValueExpression",
        "com.coremedia.ui.plugins.BindPropertyPlugin",
        "com.coremedia.ui.skins.ButtonSkin",
        "net.jangaroo.ext.Exml"
      ]
    };
});
