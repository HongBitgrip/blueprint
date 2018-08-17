Ext.define("com.coremedia.elastic.social.studio.usermanagement.list.UserSearchBar", function(UserSearchBar) {/*package com.coremedia.elastic.social.studio.usermanagement.list{
import com.coremedia.elastic.social.studio.usermanagement.list.*;
import net.jangaroo.ext.Exml;
import ext.layout.container.HBoxLayout;
import com.coremedia.ui.components.IconButton;
import com.coremedia.ui.plugins.UpdateEnabledPlugin;

    [ResourceBundle('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin')]
    [ResourceBundle('com.coremedia.icons.CoreIcons')]
public class UserSearchBar extends UserSearchBarBase{

    import com.coremedia.cap.content.search.SearchSuggestionsParameters;
    import com.coremedia.elastic.social.studio.model.Moderation;
    import com.coremedia.ui.skins.ButtonSkin;
    import com.coremedia.ui.skins.TextfieldSkin;
    import com.coremedia.ui.skins.ToolbarSkin;

    import ext.form.field.Field;

    public static const xtype:String = "com.coremedia.elastic.social.studio.config.userSearchBar";

    public*/function UserSearchBar$(config/*:UserSearchBar = null*/){var this$=this;if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.elastic.social.studio.usermanagement.list.UserSearchBarBase*/ =AS3.cast(com.coremedia.elastic.social.studio.usermanagement.list.UserSearchBarBase,{});
    var defaults_$1/*:UserSearchBar*/ =AS3.cast(UserSearchBar,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ToolbarSkin.WINDOW_HEADER.getSkin());
    config_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.usermanagement.list.UserSearchBarBase.USER_SEARCH_BAR_ID);
    var layout_HBox_38_5_$1/*:ext.layout.container.HBoxLayout*/ =AS3.cast(Ext.layout.container.HBox,{});
    AS3.setBindable(config_$1,"layout" , layout_HBox_38_5_$1);
    var ui_IconButton_41_5_$1/*:com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    AS3.setBindable(ui_IconButton_41_5_$1,"scale" , "medium");
    ui_IconButton_41_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.INVERTED.getSkin());
    AS3.setBindable(ui_IconButton_41_5_$1,"tooltip" , this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'userlist_btn_back'));
    AS3.setBindable(ui_IconButton_41_5_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'userlist_btn_back')));
    AS3.setBindable(ui_IconButton_41_5_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.icons.CoreIcons', 'backward')));
    AS3.setBindable(ui_IconButton_41_5_$1,"disabled" , false);
    ui_IconButton_41_5_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.usermanagement.list.UserSearchBarBase.BACK_BUTTON_ITEM_ID);
    AS3.setBindable(ui_IconButton_41_5_$1,"handler" ,AS3.bind( this,"back"));
    var ui_UpdateEnabledPlugin_50_9_$1/*:com.coremedia.ui.plugins.UpdateEnabledPlugin*/ =AS3.cast(com.coremedia.ui.plugins.UpdateEnabledPlugin,{});
    AS3.setBindable(ui_UpdateEnabledPlugin_50_9_$1,"valueExpression" , this.getBackwardValueExpression(AS3.getBindable(config,"moderation").getUserAdministration()));
    ui_IconButton_41_5_$1.plugins = [ui_UpdateEnabledPlugin_50_9_$1];
    var ui_IconButton_53_5_$1/*: com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    AS3.setBindable(ui_IconButton_53_5_$1,"scale" , "medium");
    ui_IconButton_53_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.INVERTED.getSkin());
    AS3.setBindable(ui_IconButton_53_5_$1,"tooltip" , this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'userlist_btn_forward'));
    AS3.setBindable(ui_IconButton_53_5_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'userlist_btn_forward')));
    AS3.setBindable(ui_IconButton_53_5_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.icons.CoreIcons', 'forward')));
    AS3.setBindable(ui_IconButton_53_5_$1,"disabled" , false);
    ui_IconButton_53_5_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.usermanagement.list.UserSearchBarBase.FORWARD_BUTTON_ITEM_ID);
    AS3.setBindable(ui_IconButton_53_5_$1,"handler" ,AS3.bind( this,"forward"));
    var ui_UpdateEnabledPlugin_62_9_$1/*: com.coremedia.ui.plugins.UpdateEnabledPlugin*/ =AS3.cast(com.coremedia.ui.plugins.UpdateEnabledPlugin,{});
    AS3.setBindable(ui_UpdateEnabledPlugin_62_9_$1,"valueExpression" , this.getForwardValueExpression(AS3.getBindable(config,"moderation").getUserAdministration()));
    ui_IconButton_53_5_$1.plugins = [ui_UpdateEnabledPlugin_62_9_$1];
    var es_SearchField_65_5_$1/*: com.coremedia.elastic.social.studio.usermanagement.list.SearchField*/ =AS3.cast(com.coremedia.elastic.social.studio.usermanagement.list.SearchField,{});
    es_SearchField_65_5_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.usermanagement.list.UserSearchBarBase.SEARCH_FIELD_ID);
    AS3.setBindable(es_SearchField_65_5_$1,"moderation" , AS3.getBindable(config,"moderation"));
    es_SearchField_65_5_$1.flex = 1.0;
    es_SearchField_65_5_$1["lastQuery"] = "";
    AS3.setBindable(es_SearchField_65_5_$1,"hideTrigger" , true);
    AS3.setBindable(es_SearchField_65_5_$1,"emptyText" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'userlist_search_bar_empty_text')));
    es_SearchField_65_5_$1.suggestionSegment =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.usermanagement.list.UserSearchBarBase.SUGGESTION_SEGMENT);
    es_SearchField_65_5_$1.selectOnTab = false;
    es_SearchField_65_5_$1.autoSelect = false;
    es_SearchField_65_5_$1.enableKeyEvents = false;
    es_SearchField_65_5_$1.queryMode = "remote";
    es_SearchField_65_5_$1.triggerAction = "all";
    es_SearchField_65_5_$1.minChars = 1.0;
    es_SearchField_65_5_$1.pageSize = 0.0;
    es_SearchField_65_5_$1.queryDelay = 200.0;
    es_SearchField_65_5_$1.queryParam = "query";
    es_SearchField_65_5_$1.selectOnFocus = true;
    es_SearchField_65_5_$1.collapseOnSelect = true;
    AS3.setBindable(es_SearchField_65_5_$1,"displayField" ,net.jangaroo.ext.Exml.asString( com.coremedia.cap.content.search.SearchSuggestionsParameters.SUGGESTION_VALUE));
    es_SearchField_65_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.TextfieldSkin.WINDOW_HEADER.getSkin());
    var object_86_9_$1/*:Object*/ = {};
    object_86_9_$1.specialkey = function(field/*:Field*/, e/*:**/)/*:void*/ {
              if (e.getKey() === e.ENTER) {
                e.stopPropagation();
                e.preventDefault();
                this$.search();
              }
            };
    object_86_9_$1.select = function(field/*:Field*/, e/*:**/)/*:void*/ {this$.search();};
    AS3.setBindable(es_SearchField_65_5_$1,"listeners" , object_86_9_$1);
    var ui_IconButton_96_5_$1/*: com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    AS3.setBindable(ui_IconButton_96_5_$1,"tooltip" , this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'userlist_btn_search'));
    AS3.setBindable(ui_IconButton_96_5_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'userlist_btn_search')));
    AS3.setBindable(ui_IconButton_96_5_$1,"scale" , "small");
    ui_IconButton_96_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.INVERTED.getSkin());
    AS3.setBindable(ui_IconButton_96_5_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.icons.CoreIcons', 'search')));
    AS3.setBindable(ui_IconButton_96_5_$1,"disabled" , false);
    ui_IconButton_96_5_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.usermanagement.list.UserSearchBarBase.MAGNIFIER_BUTTON_ITEM_ID);
    AS3.setBindable(ui_IconButton_96_5_$1,"handler" ,AS3.bind( this,"search"));
    config_$1.items = [ui_IconButton_41_5_$1, ui_IconButton_53_5_$1, es_SearchField_65_5_$1, ui_IconButton_96_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$nu6g(config_$1);
  }/*

    [Bindable]
    public var moderation:Moderation;

    [Bindable]
    public var isDetailWindowOpenedViaList:Function;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.elastic.social.studio.usermanagement.list.UserSearchBarBase",
      alias: "widget.com.coremedia.elastic.social.studio.config.userSearchBar",
      constructor: UserSearchBar$,
      super$nu6g: function() {
        com.coremedia.elastic.social.studio.usermanagement.list.UserSearchBarBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        moderation: null,
        isDetailWindowOpenedViaList: null
      },
      requires: [
        "Ext.layout.container.HBox",
        "com.coremedia.cap.content.search.SearchSuggestionsParameters",
        "com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin_properties",
        "com.coremedia.elastic.social.studio.usermanagement.list.UserSearchBarBase",
        "com.coremedia.icons.CoreIcons_properties",
        "com.coremedia.ui.components.IconButton",
        "com.coremedia.ui.plugins.UpdateEnabledPlugin",
        "com.coremedia.ui.skins.ButtonSkin",
        "com.coremedia.ui.skins.TextfieldSkin",
        "com.coremedia.ui.skins.ToolbarSkin",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.elastic.social.studio.usermanagement.list.SearchField"]
    };
});
