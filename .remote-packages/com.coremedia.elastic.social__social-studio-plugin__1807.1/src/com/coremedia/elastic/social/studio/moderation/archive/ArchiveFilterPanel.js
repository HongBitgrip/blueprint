Ext.define("com.coremedia.elastic.social.studio.moderation.archive.ArchiveFilterPanel", function(ArchiveFilterPanel) {/*package com.coremedia.elastic.social.studio.moderation.archive{
import com.coremedia.elastic.social.studio.moderation.archive.*;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.components.IconButton;
import com.coremedia.ui.plugins.UpdateEnabledPlugin;
import ext.container.Container;
import com.coremedia.ui.components.LocalComboBox;
import com.coremedia.ui.plugins.BEMMixin;
import ext.data.JsonStore;
import ext.form.field.TextField;
import ext.layout.container.HBoxLayout;
import com.coremedia.ui.plugins.BEMPlugin;
import ext.form.field.DisplayField;
import com.coremedia.elastic.social.studio.usermanagement.list.SearchField;
import ext.view.BoundListView;
import com.coremedia.ui.components.StatefulDateField;
import ext.button.Button;

    [ResourceBundle('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin')]
    [ResourceBundle('com.coremedia.icons.CoreIcons')]
public class ArchiveFilterPanel extends ArchiveFilterPanelBase{

    import com.coremedia.elastic.social.studio.model.Moderation;
    import com.coremedia.elastic.social.studio.model.impl.AbstractContributionAdministration;
    import com.coremedia.elastic.social.studio.usermanagement.list.SearchFieldKeyNav;
    import com.coremedia.icons.CoreIcons_properties;
    import com.coremedia.ui.bem.GroupBEMEntities;
    import com.coremedia.ui.skins.ButtonSkin;
    import com.coremedia.ui.skins.ContainerSkin;
    import com.coremedia.ui.skins.DisplayFieldSkin;

    import ext.form.field.Field;

    public static const xtype:String = "com.coremedia.elastic.social.studio.config.archiveFilterPanel";

    public*/function ArchiveFilterPanel$(config/*:ArchiveFilterPanel = null*/){var this$=this;if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.elastic.social.studio.moderation.archive.ArchiveFilterPanelBase*/ =AS3.cast(com.coremedia.elastic.social.studio.moderation.archive.ArchiveFilterPanelBase,{});
    var defaults_$1/*:ArchiveFilterPanel*/ =AS3.cast(ArchiveFilterPanel,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ContainerSkin.CARD_200.getSkin());
    AS3.setBindable(config_$1,"scrollable" , true);
    config_$1.padding = 0;
    var ui_IconButton_42_5_$1/*:com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    AS3.setBindable(ui_IconButton_42_5_$1,"scale" , "medium");
    ui_IconButton_42_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.SIMPLE_HIGHLIGHT.getSkin());
    AS3.setBindable(ui_IconButton_42_5_$1,"tooltip" , this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'archive_filter_panel_back_btn_tooltip'));
    AS3.setBindable(ui_IconButton_42_5_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'archive_filter_panel_back_btn_tooltip')));
    AS3.setBindable(ui_IconButton_42_5_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.icons.CoreIcons', 'backward')));
    AS3.setBindable(ui_IconButton_42_5_$1,"disabled" , false);
    ui_IconButton_42_5_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.moderation.archive.ArchiveFilterPanelBase.BACK_BUTTON_ITEM_ID);
    AS3.setBindable(ui_IconButton_42_5_$1,"handler" ,AS3.bind( this,"back"));
    var ui_UpdateEnabledPlugin_51_9_$1/*:com.coremedia.ui.plugins.UpdateEnabledPlugin*/ =AS3.cast(com.coremedia.ui.plugins.UpdateEnabledPlugin,{});
    AS3.setBindable(ui_UpdateEnabledPlugin_51_9_$1,"valueExpression" , this.getBackwardValueExpression(AS3.getBindable(config,"contributionAdministration")));
    ui_IconButton_42_5_$1.plugins = [ui_UpdateEnabledPlugin_51_9_$1];
    var ui_IconButton_54_5_$1/*: com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    AS3.setBindable(ui_IconButton_54_5_$1,"scale" , "medium");
    ui_IconButton_54_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.SIMPLE_HIGHLIGHT.getSkin());
    AS3.setBindable(ui_IconButton_54_5_$1,"tooltip" , this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'archive_filter_panel_forward_btn_tooltip'));
    AS3.setBindable(ui_IconButton_54_5_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'archive_filter_panel_forward_btn_tooltip')));
    AS3.setBindable(ui_IconButton_54_5_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.icons.CoreIcons', 'forward')));
    AS3.setBindable(ui_IconButton_54_5_$1,"disabled" , false);
    ui_IconButton_54_5_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.moderation.archive.ArchiveFilterPanelBase.FORWARD_BUTTON_ITEM_ID);
    AS3.setBindable(ui_IconButton_54_5_$1,"handler" ,AS3.bind( this,"forward"));
    var ui_UpdateEnabledPlugin_63_9_$1/*: com.coremedia.ui.plugins.UpdateEnabledPlugin*/ =AS3.cast(com.coremedia.ui.plugins.UpdateEnabledPlugin,{});
    AS3.setBindable(ui_UpdateEnabledPlugin_63_9_$1,"valueExpression" , this.getForwardValueExpression(AS3.getBindable(config,"contributionAdministration")));
    ui_IconButton_54_5_$1.plugins = [ui_UpdateEnabledPlugin_63_9_$1];
    var container_67_5_$1/*:ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    var ui_LocalComboBox_69_9_$1/*:com.coremedia.ui.components.LocalComboBox*/ =AS3.cast(com.coremedia.ui.components.LocalComboBox,{});
    ui_LocalComboBox_69_9_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.moderation.archive.ArchiveFilterPanelBase.SEARCH_TYPE_COMBO_ITEM_ID);
    AS3.setBindable(ui_LocalComboBox_69_9_$1,"displayField" , "value");
    ui_LocalComboBox_69_9_$1.valueField = "id";
    AS3.setBindable(ui_LocalComboBox_69_9_$1,"encodeItems" , true);
    AS3.setBindable(ui_LocalComboBox_69_9_$1,"value" , com.coremedia.elastic.social.studio.moderation.archive.ArchiveFilterPanelBase.COMBO_TYPE_ANY);
    ui_LocalComboBox_69_9_$1.hideLabel = true;
    AS3.setBindable(ui_LocalComboBox_69_9_$1,"width" , 150);
    var ui_BEMMixin_77_13_$1/*:com.coremedia.ui.plugins.BEMMixin*/ =AS3.cast(com.coremedia.ui.plugins.BEMMixin,{});
    AS3.setBindable(ui_BEMMixin_77_13_$1,"bemElement" , com.coremedia.ui.bem.GroupBEMEntities.ELEMENT_LEFT);

    delete ui_BEMMixin_77_13_$1['xtype'];
    delete ui_BEMMixin_77_13_$1['xclass'];
    net.jangaroo.ext.Exml.apply(ui_LocalComboBox_69_9_$1, ui_BEMMixin_77_13_$1);
    var object_80_13_$1/*:Object*/ = {};
    object_80_13_$1.select = function()/*:void*/ { this$.proceedFilter(); };
    AS3.setBindable(ui_LocalComboBox_69_9_$1,"listeners" , object_80_13_$1);
    var store_Json_83_13_$1/*:ext.data.JsonStore*/ =AS3.cast(Ext.data.JsonStore,{});
    AS3.setBindable(store_Json_83_13_$1,"fields" , ['id', 'value']);
    AS3.setBindable(store_Json_83_13_$1,"data" , [
                       { id : com.coremedia.elastic.social.studio.moderation.archive.ArchiveFilterPanelBase.COMBO_TYPE_ANY, value: this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'archive_filter_panel_scope_all_text') },
                       { id : com.coremedia.elastic.social.studio.moderation.archive.ArchiveFilterPanelBase.COMBO_TYPE_COMMENTS, value: this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'archive_filter_panel_scope_comment_text') },
                       { id : com.coremedia.elastic.social.studio.moderation.archive.ArchiveFilterPanelBase.COMBO_TYPE_REVIEWS, value: this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'archive_filter_panel_scope_review_text') },
                       { id : com.coremedia.elastic.social.studio.moderation.archive.ArchiveFilterPanelBase.COMBO_TYPE_COMMENTS_WITH_MEDIA, value: this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'archive_filter_panel_scope_comment_with_media_text') }
                      ]);
    AS3.setBindable(ui_LocalComboBox_69_9_$1,"store" , new Ext.data.JsonStore(store_Json_83_13_$1));
    var textField_93_9_$1/*:ext.form.field.TextField*/ =AS3.cast(Ext.form.field.Text,{});
    textField_93_9_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.moderation.archive.ArchiveFilterPanelBase.SEARCH_FIELD_ITEM_ID);
    AS3.setBindable(textField_93_9_$1,"width" , 300);
    AS3.setBindable(textField_93_9_$1,"margin" , "0 0 0 6");
    AS3.setBindable(textField_93_9_$1,"emptyText" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'archive_filter_panel_search_field_empty_text')));
    var ui_BEMMixin_98_13_$1/*: com.coremedia.ui.plugins.BEMMixin*/ =AS3.cast(com.coremedia.ui.plugins.BEMMixin,{});
    AS3.setBindable(ui_BEMMixin_98_13_$1,"bemElement" , com.coremedia.ui.bem.GroupBEMEntities.ELEMENT_RIGHT);

    delete ui_BEMMixin_98_13_$1['xtype'];
    delete ui_BEMMixin_98_13_$1['xclass'];
    net.jangaroo.ext.Exml.apply(textField_93_9_$1, ui_BEMMixin_98_13_$1);
    var object_101_13_$1/*:Object*/ = {};
    object_101_13_$1.specialkey = 
                    function(field/*:Field*/, e/*:**/)/*:void*/ {
                      if (e.getKey() === e.ENTER) {
                        e.stopPropagation();
                        e.preventDefault();
                        this$.proceedFilter();
                      }
                    };
    AS3.setBindable(textField_93_9_$1,"listeners" , object_101_13_$1);
    container_67_5_$1.items = [ui_LocalComboBox_69_9_$1, textField_93_9_$1];
    var layout_HBox_114_9_$1/*:ext.layout.container.HBoxLayout*/ =AS3.cast(Ext.layout.container.HBox,{});
    AS3.setBindable(container_67_5_$1,"layout" , layout_HBox_114_9_$1);
    var ui_BEMPlugin_117_9_$1/*:com.coremedia.ui.plugins.BEMPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BEMPlugin,{});
    AS3.setBindable(ui_BEMPlugin_117_9_$1,"block" , com.coremedia.ui.bem.GroupBEMEntities.BLOCK);
    container_67_5_$1.plugins = [ui_BEMPlugin_117_9_$1];
    var ui_IconButton_120_5_$1/*: com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    ui_IconButton_120_5_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.moderation.archive.ArchiveFilterPanelBase.MAGNIFIER_BUTTON_ITEM_ID);
    AS3.setBindable(ui_IconButton_120_5_$1,"scale" , "small");
    ui_IconButton_120_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.SIMPLE.getSkin());
    AS3.setBindable(ui_IconButton_120_5_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'archive_filter_panel_search_button_tooltip')));
    AS3.setBindable(ui_IconButton_120_5_$1,"tooltip" , this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'archive_filter_panel_search_button_tooltip'));
    AS3.setBindable(ui_IconButton_120_5_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.icons.CoreIcons', 'search')));
    AS3.setBindable(ui_IconButton_120_5_$1,"disabled" , false);
    AS3.setBindable(ui_IconButton_120_5_$1,"handler" ,AS3.bind( this,"proceedFilter"));
    var container_129_5_$1/*: ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    AS3.setBindable(container_129_5_$1,"width" , 20);
    var displayField_131_5_$1/*:ext.form.field.DisplayField*/ =AS3.cast(Ext.form.field.Display,{});
    AS3.setBindable(displayField_131_5_$1,"value" , this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'archive_filter_panel_state_label'));
    displayField_131_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.DisplayFieldSkin.BOLD);
    AS3.setBindable(displayField_131_5_$1,"margin" , "0 6 0 0");
    var ui_LocalComboBox_135_5_$1/*: com.coremedia.ui.components.LocalComboBox*/ =AS3.cast(com.coremedia.ui.components.LocalComboBox,{});
    ui_LocalComboBox_135_5_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.moderation.archive.ArchiveFilterPanelBase.STATE_FILTER_ITEM_ID);
    AS3.setBindable(ui_LocalComboBox_135_5_$1,"width" , 200);
    ui_LocalComboBox_135_5_$1.hideLabel = true;
    AS3.setBindable(ui_LocalComboBox_135_5_$1,"displayField" , "value");
    ui_LocalComboBox_135_5_$1.valueField = "id";
    AS3.setBindable(ui_LocalComboBox_135_5_$1,"encodeItems" , true);
    AS3.setBindable(ui_LocalComboBox_135_5_$1,"value" , com.coremedia.elastic.social.studio.moderation.archive.ArchiveFilterPanelBase.COMBO_STATE_ALL);
    var object_143_9_$1/*:Object*/ = {};
    object_143_9_$1.select = function()/*:void*/ {
            this$.proceedFilter();
          };
    AS3.setBindable(ui_LocalComboBox_135_5_$1,"listeners" , object_143_9_$1);
    var store_Json_148_9_$1/*: ext.data.JsonStore*/ =AS3.cast(Ext.data.JsonStore,{});
    AS3.setBindable(store_Json_148_9_$1,"fields" , ['id', 'value']);
    AS3.setBindable(store_Json_148_9_$1,"data" , [
                         { id : com.coremedia.elastic.social.studio.moderation.archive.ArchiveFilterPanelBase.COMBO_STATE_ALL, value: this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'archive_filter_panel_state_combo_all_text') },
                         { id : com.coremedia.elastic.social.studio.moderation.archive.ArchiveFilterPanelBase.COMBO_STATE_NEW, value: this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'archive_filter_panel_state_combo_new_text') },
                         { id : com.coremedia.elastic.social.studio.moderation.archive.ArchiveFilterPanelBase.COMBO_STATE_APPROVED, value: this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'archive_filter_panel_state_combo_approved_text')},
                         { id : com.coremedia.elastic.social.studio.moderation.archive.ArchiveFilterPanelBase.COMBO_STATE_REJECTED, value: this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'archive_filter_panel_state_combo_rejected_text') }
                        ]);
    AS3.setBindable(ui_LocalComboBox_135_5_$1,"store" , new Ext.data.JsonStore(store_Json_148_9_$1));
    var container_159_5_$1/*: ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    AS3.setBindable(container_159_5_$1,"width" , 20);
    var displayField_161_5_$1/*: ext.form.field.DisplayField*/ =AS3.cast(Ext.form.field.Display,{});
    AS3.setBindable(displayField_161_5_$1,"value" , this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'archive_filter_panel_user_label'));
    displayField_161_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.DisplayFieldSkin.BOLD);
    AS3.setBindable(displayField_161_5_$1,"margin" , "0 6 0 0");
    var es_SearchField_165_5_$1/*:com.coremedia.elastic.social.studio.usermanagement.list.SearchField*/ =AS3.cast(com.coremedia.elastic.social.studio.usermanagement.list.SearchField,{});
    es_SearchField_165_5_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.moderation.archive.ArchiveFilterPanelBase.AUTHOR_COMBO_ITEM_ID);
    AS3.setBindable(es_SearchField_165_5_$1,"moderation" , AS3.getBindable(config,"moderation"));
    AS3.setBindable(es_SearchField_165_5_$1,"width" , 200);
    es_SearchField_165_5_$1.forceSelection = false;
    es_SearchField_165_5_$1.autoSelect = false;
    es_SearchField_165_5_$1.enableKeyEvents = true;
    es_SearchField_165_5_$1.queryMode = "remote";
    es_SearchField_165_5_$1["lastQuery"] = "";
    es_SearchField_165_5_$1.typeAhead = false;
    AS3.setBindable(es_SearchField_165_5_$1,"hideTrigger" , true);
    es_SearchField_165_5_$1.triggerAction = "all";
    es_SearchField_165_5_$1.minChars = 1.0;
    es_SearchField_165_5_$1.queryDelay = 200.0;
    es_SearchField_165_5_$1.queryParam = "query";
    es_SearchField_165_5_$1.pageSize = 0.0;
    AS3.setBindable(es_SearchField_165_5_$1,"displayField" , "value");
    es_SearchField_165_5_$1.selectOnFocus = true;
    AS3.setBindable(es_SearchField_165_5_$1,"emptyText" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'archive_filter_panel_user_textfield_emtpy_text')));
    es_SearchField_165_5_$1.suggestionSegment =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.moderation.archive.ArchiveFilterPanelBase.SUGGESTION_SEGMENT);
    var object_185_9_$1/*:Object*/ = {};
    object_185_9_$1.specialkey = 
                            function(field/*:Field*/, e/*:**/)/*:void*/ {
                              if (e.getKey() === e.ENTER) {
                                e.stopPropagation();
                                e.preventDefault();
                                this$.proceedFilter();
                              }
                            };
    object_185_9_$1.select = 
                           function(field/*:Field*/, e/*:**/)/*:void*/ {
                             this$.proceedFilter();
                          };
    AS3.setBindable(es_SearchField_165_5_$1,"listeners" , object_185_9_$1);
    var boundList_201_9_$1/*:ext.view.BoundListView*/ =AS3.cast(Ext.view.BoundList,{});
    boundList_201_9_$1.loadingText = "";
    boundList_201_9_$1["navigationModel"] = AS3.cast(com.coremedia.elastic.social.studio.usermanagement.list.SearchFieldKeyNav,{});
    boundList_201_9_$1.itemSelector = "div.search-item";
    es_SearchField_165_5_$1.listConfig = boundList_201_9_$1;
    var container_207_5_$1/*: ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    AS3.setBindable(container_207_5_$1,"width" , 20);
    var displayField_209_5_$1/*: ext.form.field.DisplayField*/ =AS3.cast(Ext.form.field.Display,{});
    AS3.setBindable(displayField_209_5_$1,"value" , this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'archive_filter_panel_from_date_label'));
    displayField_209_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.DisplayFieldSkin.BOLD);
    AS3.setBindable(displayField_209_5_$1,"margin" , "0 6 0 0");
    var ui_StatefulDateField_213_5_$1/*:com.coremedia.ui.components.StatefulDateField*/ =AS3.cast(com.coremedia.ui.components.StatefulDateField,{});
    ui_StatefulDateField_213_5_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.moderation.archive.ArchiveFilterPanelBase.FROM_DATE_FIELD_ID);
    ui_StatefulDateField_213_5_$1.ariaLabel =net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'Date_property_field'));
    ui_StatefulDateField_213_5_$1.format =net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'shortDateFormat'));
    ui_StatefulDateField_213_5_$1.enableKeyEvents = true;
    ui_StatefulDateField_213_5_$1.formatText = "";
    var object_218_21_$1/*:Object*/ = {};
    object_218_21_$1.select = function()/*:void*/ {
            this$.proceedFilter();
          };
    AS3.setBindable(ui_StatefulDateField_213_5_$1,"listeners" , object_218_21_$1);
    var ui_IconButton_222_5_$1/*: com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    AS3.setBindable(ui_IconButton_222_5_$1,"scale" , "small");
    ui_IconButton_222_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.SIMPLE.getSkin());
    AS3.setBindable(ui_IconButton_222_5_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( com.coremedia.icons.CoreIcons_properties.INSTANCE.remove_small));
    ui_IconButton_222_5_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.moderation.archive.ArchiveFilterPanelBase.RESET_FROM_DATE_FIELD_ID);
    AS3.setBindable(ui_IconButton_222_5_$1,"handler" ,AS3.bind( this,"resetFromDate"));
    AS3.setBindable(ui_IconButton_222_5_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'DateTimePropertyField_dateReset_text')));
    var container_229_5_$1/*: ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    AS3.setBindable(container_229_5_$1,"width" , 20);
    var displayField_231_5_$1/*: ext.form.field.DisplayField*/ =AS3.cast(Ext.form.field.Display,{});
    AS3.setBindable(displayField_231_5_$1,"value" , this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'archive_filter_panel_to_date_label'));
    displayField_231_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.DisplayFieldSkin.BOLD);
    AS3.setBindable(displayField_231_5_$1,"margin" , "0 6 0 0");
    var ui_StatefulDateField_235_5_$1/*: com.coremedia.ui.components.StatefulDateField*/ =AS3.cast(com.coremedia.ui.components.StatefulDateField,{});
    ui_StatefulDateField_235_5_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.moderation.archive.ArchiveFilterPanelBase.TO_DATE_FIELD_ID);
    ui_StatefulDateField_235_5_$1.format =net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'shortDateFormat'));
    ui_StatefulDateField_235_5_$1.enableKeyEvents = true;
    ui_StatefulDateField_235_5_$1.formatText = "";
    var object_239_21_$1/*:Object*/ = {};
    object_239_21_$1.select = function()/*:void*/ {
            this$.proceedFilter();
          };
    AS3.setBindable(ui_StatefulDateField_235_5_$1,"listeners" , object_239_21_$1);
    var ui_IconButton_243_5_$1/*: com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    AS3.setBindable(ui_IconButton_243_5_$1,"scale" , "small");
    ui_IconButton_243_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.SIMPLE.getSkin());
    AS3.setBindable(ui_IconButton_243_5_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( com.coremedia.icons.CoreIcons_properties.INSTANCE.remove_small));
    ui_IconButton_243_5_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.moderation.archive.ArchiveFilterPanelBase.RESET_TO_DATE_FIELD_ID);
    AS3.setBindable(ui_IconButton_243_5_$1,"handler" ,AS3.bind( this,"resetToDate"));
    AS3.setBindable(ui_IconButton_243_5_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'DateTimePropertyField_dateReset_text')));
    var container_250_5_$1/*: ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    AS3.setBindable(container_250_5_$1,"width" , 20);
    var button_252_5_$1/*:ext.button.Button*/ =AS3.cast(Ext.button.Button,{});
    button_252_5_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.moderation.archive.ArchiveFilterPanelBase.RESET_FILTER_BUTTON_ITEM_ID);
    button_252_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.SIMPLE.getSkin());
    AS3.setBindable(button_252_5_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'archive_filter_panel_reset_filter_text')));
    AS3.setBindable(button_252_5_$1,"handler" ,AS3.bind( this,"resetFilter"));
    config_$1.items = [ui_IconButton_42_5_$1, ui_IconButton_54_5_$1, container_67_5_$1, ui_IconButton_120_5_$1, container_129_5_$1, displayField_131_5_$1, ui_LocalComboBox_135_5_$1, container_159_5_$1, displayField_161_5_$1, es_SearchField_165_5_$1, container_207_5_$1, displayField_209_5_$1, ui_StatefulDateField_213_5_$1, ui_IconButton_222_5_$1, container_229_5_$1, displayField_231_5_$1, ui_StatefulDateField_235_5_$1, ui_IconButton_243_5_$1, container_250_5_$1, button_252_5_$1];
    var layout_HBox_259_5_$1/*: ext.layout.container.HBoxLayout*/ =AS3.cast(Ext.layout.container.HBox,{});
    AS3.setBindable(layout_HBox_259_5_$1,"align" , "middle");
    AS3.setBindable(config_$1,"layout" , layout_HBox_259_5_$1);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$iSgO(config_$1);
  }/*

    [Bindable]
    public var moderation:Moderation;

    [Bindable]
    public var contributionAdministration:AbstractContributionAdministration;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.elastic.social.studio.moderation.archive.ArchiveFilterPanelBase",
      alias: "widget.com.coremedia.elastic.social.studio.config.archiveFilterPanel",
      constructor: ArchiveFilterPanel$,
      super$iSgO: function() {
        com.coremedia.elastic.social.studio.moderation.archive.ArchiveFilterPanelBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        moderation: null,
        contributionAdministration: null
      },
      requires: [
        "Ext.button.Button",
        "Ext.container.Container",
        "Ext.data.JsonStore",
        "Ext.form.field.Display",
        "Ext.form.field.Text",
        "Ext.layout.container.HBox",
        "Ext.view.BoundList",
        "com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin_properties",
        "com.coremedia.elastic.social.studio.moderation.archive.ArchiveFilterPanelBase",
        "com.coremedia.icons.CoreIcons_properties",
        "com.coremedia.ui.bem.GroupBEMEntities",
        "com.coremedia.ui.components.IconButton",
        "com.coremedia.ui.components.LocalComboBox",
        "com.coremedia.ui.components.StatefulDateField",
        "com.coremedia.ui.plugins.BEMMixin",
        "com.coremedia.ui.plugins.BEMPlugin",
        "com.coremedia.ui.plugins.UpdateEnabledPlugin",
        "com.coremedia.ui.skins.ButtonSkin",
        "com.coremedia.ui.skins.ContainerSkin",
        "com.coremedia.ui.skins.DisplayFieldSkin",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.elastic.social.studio.usermanagement.list.SearchField",
        "com.coremedia.elastic.social.studio.usermanagement.list.SearchFieldKeyNav"
      ]
    };
});
