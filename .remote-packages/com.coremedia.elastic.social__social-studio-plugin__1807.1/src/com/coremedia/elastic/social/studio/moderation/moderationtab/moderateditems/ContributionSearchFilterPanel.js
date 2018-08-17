Ext.define("com.coremedia.elastic.social.studio.moderation.moderationtab.moderateditems.ContributionSearchFilterPanel", function(ContributionSearchFilterPanel) {/*package com.coremedia.elastic.social.studio.moderation.moderationtab.moderateditems{
import com.coremedia.elastic.social.studio.moderation.moderationtab.moderateditems.*;
import net.jangaroo.ext.Exml;
import ext.form.field.Checkbox;
import com.coremedia.ui.plugins.BindPropertyPlugin;
import com.coremedia.ui.exml.ValueExpression;
import ext.container.Container;
import ext.layout.container.HBoxLayout;
import ext.menu.MenuBar;
import ext.Component;
import com.coremedia.ui.components.MenuIconButton;
import com.coremedia.ui.plugins.BindVisibilityPlugin;
import ext.menu.Menu;
import ext.layout.container.VBoxLayout;
import com.coremedia.ui.plugins.BindComponentsPlugin;
import com.coremedia.ui.components.LocalComboBox;
import com.coremedia.ui.plugins.BindListPlugin;
import com.coremedia.ui.store.DataField;

    [ResourceBundle('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin')]
public class ContributionSearchFilterPanel extends ContributionSearchFilterPanelBase{

    import com.coremedia.ui.data.Bean;
    import com.coremedia.ui.skins.ButtonSkin;
    import com.coremedia.ui.skins.MenuSkin;

    public static const xtype:String = "com.coremedia.elastic.social.studio.config.contributionSearchFilterPanel";

    public static const CATEGORY_FILTER_CT_ITEM_ID:String = "categoryFilterCtItemId";

    public static const CATEGORY_SELECTOR_ITEM_ID:String = "categorySelectorItemId";

    public static const COMMENTS_FILTER_ITEM_ID:String = "commentsFilterItemId";

    public static const USERS_FILTER_ITEM_ID:String = "usersFilterItemId";

    public*/function ContributionSearchFilterPanel$(config/*:ContributionSearchFilterPanel = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.elastic.social.studio.moderation.moderationtab.moderateditems.ContributionSearchFilterPanelBase*/ =AS3.cast(com.coremedia.elastic.social.studio.moderation.moderationtab.moderateditems.ContributionSearchFilterPanelBase,{});
    var defaults_$1/*:ContributionSearchFilterPanel*/ =AS3.cast(ContributionSearchFilterPanel,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"title" , this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'moderation_contributionSearchFilterPanel_label_title'));
    var checkbox_35_5_$1/*:ext.form.field.Checkbox*/ =AS3.cast(Ext.form.field.Checkbox,{});
    checkbox_35_5_$1.itemId =net.jangaroo.ext.Exml.asString( ContributionSearchFilterPanel.USERS_FILTER_ITEM_ID);
    AS3.setBindable(checkbox_35_5_$1,"boxLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'moderation_contributionSearchFilterPanel_label_users')));
    checkbox_35_5_$1.hideLabel = true;
    var ui_BindPropertyPlugin_39_9_$1/*:com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_39_9_$1.bidirectional = true;
    var ui_ValueExpression_41_13_$1/*:com.coremedia.ui.exml.ValueExpression*/ =AS3.cast(com.coremedia.ui.exml.ValueExpression,{});
    AS3.setBindable(ui_ValueExpression_41_13_$1,"expression" ,net.jangaroo.ext.Exml.asString( this.INCLUDE_USERS_PROPERTY));
    AS3.setBindable(ui_ValueExpression_41_13_$1,"context" , this.getStateBean());
    ui_BindPropertyPlugin_39_9_$1.bindTo = new com.coremedia.ui.exml.ValueExpression(ui_ValueExpression_41_13_$1);
    checkbox_35_5_$1.plugins = [ui_BindPropertyPlugin_39_9_$1];
    var container_49_5_$1/*:ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    var layout_HBox_51_9_$1/*:ext.layout.container.HBoxLayout*/ =AS3.cast(Ext.layout.container.HBox,{});
    AS3.setBindable(container_49_5_$1,"layout" , layout_HBox_51_9_$1);
    var checkbox_54_9_$1/*: ext.form.field.Checkbox*/ =AS3.cast(Ext.form.field.Checkbox,{});
    checkbox_54_9_$1.itemId =net.jangaroo.ext.Exml.asString( ContributionSearchFilterPanel.COMMENTS_FILTER_ITEM_ID);
    AS3.setBindable(checkbox_54_9_$1,"boxLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'moderation_contributionSearchFilterPanel_label_comments')));
    checkbox_54_9_$1.hideLabel = true;
    checkbox_54_9_$1.flex = 1.0;
    var ui_BindPropertyPlugin_59_13_$1/*: com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_59_13_$1.bidirectional = true;
    var ui_ValueExpression_61_17_$1/*: com.coremedia.ui.exml.ValueExpression*/ =AS3.cast(com.coremedia.ui.exml.ValueExpression,{});
    AS3.setBindable(ui_ValueExpression_61_17_$1,"expression" ,net.jangaroo.ext.Exml.asString( this.INCLUDE_COMMENTS_PROPERTY));
    AS3.setBindable(ui_ValueExpression_61_17_$1,"context" , this.getStateBean());
    ui_BindPropertyPlugin_59_13_$1.bindTo = new com.coremedia.ui.exml.ValueExpression(ui_ValueExpression_61_17_$1);
    checkbox_54_9_$1.plugins = [ui_BindPropertyPlugin_59_13_$1];
    var menuBar_67_9_$1/*:ext.menu.MenuBar*/ =AS3.cast(Ext.menu.Bar,{});
    menuBar_67_9_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.MenuSkin.HEADER_MENUBAR.getSkin());
    menuBar_67_9_$1.plain = true;
    var component_70_13_$1/*:ext.Component*/ =AS3.cast(Ext.Component,{});
    component_70_13_$1["ariaRole"] = "menuitem";
    menuBar_67_9_$1["defaultType"] = component_70_13_$1['xtype'];
    delete component_70_13_$1['xtype'];
    delete component_70_13_$1['xclass'];
    menuBar_67_9_$1.defaults = component_70_13_$1;
    var ui_MenuIconButton_73_13_$1/*:com.coremedia.ui.components.MenuIconButton*/ =AS3.cast(com.coremedia.ui.components.MenuIconButton,{});
    AS3.setBindable(ui_MenuIconButton_73_13_$1,"arrowVisible" , false);
    AS3.setBindable(ui_MenuIconButton_73_13_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.icons.CoreIcons','arrow_down')));
    AS3.setBindable(ui_MenuIconButton_73_13_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin','moderation_contributionSearchFilterPanel_siteMenu_text')));
    ui_MenuIconButton_73_13_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.TOOLBAR.getSkin());
    var ui_BindVisibilityPlugin_78_17_$1/*:com.coremedia.ui.plugins.BindVisibilityPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindVisibilityPlugin,{});
    ui_BindVisibilityPlugin_78_17_$1.bindTo = this.getEnableSiteSpecificCommentsSwitchVE();
    ui_MenuIconButton_73_13_$1.plugins = [ui_BindVisibilityPlugin_78_17_$1];
    var menu_81_17_$1/*:ext.menu.Menu*/ =AS3.cast(Ext.menu.Menu,{});
    menu_81_17_$1["focusable"] = true;
    menu_81_17_$1.plain = true;
    var checkbox_84_21_$1/*: ext.form.field.Checkbox*/ =AS3.cast(Ext.form.field.Checkbox,{});
    AS3.setBindable(checkbox_84_21_$1,"boxLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'moderation_contributionSearchFilterPanel_label_site')));
    checkbox_84_21_$1.hideLabel = true;
    var ui_BindPropertyPlugin_88_25_$1/*: com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_88_25_$1.bidirectional = true;
    var ui_ValueExpression_90_29_$1/*: com.coremedia.ui.exml.ValueExpression*/ =AS3.cast(com.coremedia.ui.exml.ValueExpression,{});
    AS3.setBindable(ui_ValueExpression_90_29_$1,"expression" ,net.jangaroo.ext.Exml.asString( this.SHOW_COMMENTS_FOR_ALL_SITES_PROPERTY));
    AS3.setBindable(ui_ValueExpression_90_29_$1,"context" , this.getStateBean());
    ui_BindPropertyPlugin_88_25_$1.bindTo = new com.coremedia.ui.exml.ValueExpression(ui_ValueExpression_90_29_$1);
    checkbox_84_21_$1.plugins = [ui_BindPropertyPlugin_88_25_$1];
    menu_81_17_$1.items = [checkbox_84_21_$1];
    ui_MenuIconButton_73_13_$1.menu = menu_81_17_$1;
    menuBar_67_9_$1.items = [ui_MenuIconButton_73_13_$1];
    container_49_5_$1.items = [checkbox_54_9_$1, menuBar_67_9_$1];
    var container_105_5_$1/*: ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    container_105_5_$1.itemId =net.jangaroo.ext.Exml.asString( ContributionSearchFilterPanel.CATEGORY_FILTER_CT_ITEM_ID);
    container_105_5_$1.padding = "0 0 0 20";
    var ui_BindVisibilityPlugin_108_9_$1/*: com.coremedia.ui.plugins.BindVisibilityPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindVisibilityPlugin,{});
    ui_BindVisibilityPlugin_108_9_$1.bindTo = this.getIsCategoriesListConfiguredVE(AS3.getBindable(config,"categoriesListValueExpression"));
    container_105_5_$1.plugins = [ui_BindVisibilityPlugin_108_9_$1];
    var layout_VBox_111_9_$1/*:ext.layout.container.VBoxLayout*/ =AS3.cast(Ext.layout.container.VBox,{});
    AS3.setBindable(layout_VBox_111_9_$1,"align" , "stretch");
    AS3.setBindable(container_105_5_$1,"layout" , layout_VBox_111_9_$1);
    var container_114_9_$1/*: ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    container_114_9_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.moderation.moderationtab.moderateditems.ContributionSearchFilterPanelBase.CATEGORY_ELEMENTS_CT_ITEM_ID);
    var ui_BindComponentsPlugin_116_13_$1/*:com.coremedia.ui.plugins.BindComponentsPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindComponentsPlugin,{});
    AS3.setBindable(ui_BindComponentsPlugin_116_13_$1,"valueExpression" , this.getSelectedCategoriesAsBeansValueExpression());
    AS3.setBindable(ui_BindComponentsPlugin_116_13_$1,"getKey" , function (categoryBean/*:Bean*/)/*:String*/ {return com.coremedia.elastic.social.studio.moderation.moderationtab.moderateditems.ContributionSearchFilterPanelBase.getCategoryKeyWithoutWhiteSpaces(categoryBean);});
    AS3.setBindable(ui_BindComponentsPlugin_116_13_$1,"configBeanParameterName" , "categoryBean");
    var es_CategoryElement_120_17_$1/*: com.coremedia.elastic.social.studio.moderation.moderationtab.moderateditems.CategoryElement*/ =AS3.cast(com.coremedia.elastic.social.studio.moderation.moderationtab.moderateditems.CategoryElement,{});
    AS3.setBindable(es_CategoryElement_120_17_$1,"removeHandler" ,AS3.bind( this,"removeSelectedCategory"));
    AS3.setBindable(es_CategoryElement_120_17_$1,"disabledValueExpression" , this.getExcludeCommentsValueExpression());
    AS3.setBindable(ui_BindComponentsPlugin_116_13_$1,"template" , es_CategoryElement_120_17_$1);
    container_114_9_$1.plugins = [ui_BindComponentsPlugin_116_13_$1];
    var ui_LocalComboBox_127_9_$1/*:com.coremedia.ui.components.LocalComboBox*/ =AS3.cast(com.coremedia.ui.components.LocalComboBox,{});
    ui_LocalComboBox_127_9_$1.itemId =net.jangaroo.ext.Exml.asString( ContributionSearchFilterPanel.CATEGORY_SELECTOR_ITEM_ID);
    AS3.setBindable(ui_LocalComboBox_127_9_$1,"displayField" , "display");
    ui_LocalComboBox_127_9_$1.padding = "0 6 0 0";
    AS3.setBindable(ui_LocalComboBox_127_9_$1,"emptyText" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'moderation_contributionSearchFilterPanel_label_filter_emptyText')));
    var ui_BindListPlugin_132_13_$1/*:com.coremedia.ui.plugins.BindListPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindListPlugin,{});
    AS3.setBindable(ui_BindListPlugin_132_13_$1,"bindTo" , this.getSelectableCategoriesValueExpression(AS3.getBindable(config,"categoriesListValueExpression")));
    var ui_DataField_134_17_$1/*:com.coremedia.ui.store.DataField*/ =AS3.cast(com.coremedia.ui.store.DataField,{});
    ui_DataField_134_17_$1.name = "key";
    var ui_DataField_135_17_$1/*: com.coremedia.ui.store.DataField*/ =AS3.cast(com.coremedia.ui.store.DataField,{});
    ui_DataField_135_17_$1.name = "display";
    ui_DataField_135_17_$1.encode = false;
    AS3.setBindable(ui_BindListPlugin_132_13_$1,"fields" , [ui_DataField_134_17_$1, ui_DataField_135_17_$1]);
    var ui_BindPropertyPlugin_139_13_$1/*: com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_139_13_$1.componentProperty = "disabled";
    ui_BindPropertyPlugin_139_13_$1.bindTo = this.getDisabledCommentsValueExpression(AS3.getBindable(config,"categoriesListValueExpression"));
    ui_LocalComboBox_127_9_$1.plugins = [ui_BindListPlugin_132_13_$1, ui_BindPropertyPlugin_139_13_$1];
    ui_LocalComboBox_127_9_$1["plugins$at"] = net.jangaroo.ext.Exml.APPEND;
    container_105_5_$1.items = [container_114_9_$1, ui_LocalComboBox_127_9_$1];
    config_$1.items = [checkbox_35_5_$1, container_49_5_$1, container_105_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$7Woc(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.elastic.social.studio.moderation.moderationtab.moderateditems.ContributionSearchFilterPanelBase",
      alias: "widget.com.coremedia.elastic.social.studio.config.contributionSearchFilterPanel",
      constructor: ContributionSearchFilterPanel$,
      super$7Woc: function() {
        com.coremedia.elastic.social.studio.moderation.moderationtab.moderateditems.ContributionSearchFilterPanelBase.prototype.constructor.apply(this, arguments);
      },
      statics: {
        CATEGORY_FILTER_CT_ITEM_ID: "categoryFilterCtItemId",
        CATEGORY_SELECTOR_ITEM_ID: "categorySelectorItemId",
        COMMENTS_FILTER_ITEM_ID: "commentsFilterItemId",
        USERS_FILTER_ITEM_ID: "usersFilterItemId"
      },
      requires: [
        "Ext.Component",
        "Ext.container.Container",
        "Ext.form.field.Checkbox",
        "Ext.layout.container.HBox",
        "Ext.layout.container.VBox",
        "Ext.menu.Bar",
        "Ext.menu.Menu",
        "com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin_properties",
        "com.coremedia.elastic.social.studio.moderation.moderationtab.moderateditems.ContributionSearchFilterPanelBase",
        "com.coremedia.ui.components.LocalComboBox",
        "com.coremedia.ui.components.MenuIconButton",
        "com.coremedia.ui.exml.ValueExpression",
        "com.coremedia.ui.plugins.BindComponentsPlugin",
        "com.coremedia.ui.plugins.BindListPlugin",
        "com.coremedia.ui.plugins.BindPropertyPlugin",
        "com.coremedia.ui.plugins.BindVisibilityPlugin",
        "com.coremedia.ui.skins.ButtonSkin",
        "com.coremedia.ui.skins.MenuSkin",
        "com.coremedia.ui.store.DataField",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.elastic.social.studio.moderation.moderationtab.moderateditems.CategoryElement"]
    };
});
