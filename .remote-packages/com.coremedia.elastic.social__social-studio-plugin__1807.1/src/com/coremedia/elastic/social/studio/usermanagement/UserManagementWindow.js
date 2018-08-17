Ext.define("com.coremedia.elastic.social.studio.usermanagement.UserManagementWindow", function(UserManagementWindow) {/*package com.coremedia.elastic.social.studio.usermanagement{
import com.coremedia.elastic.social.studio.usermanagement.*;
import net.jangaroo.ext.Exml;
import ext.layout.container.CardLayout;
import com.coremedia.elastic.social.studio.usermanagement.details.UserDetailsPanel;
import com.coremedia.elastic.social.studio.usermanagement.list.UserListContainer;

    [ResourceBundle('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin')]
    [ResourceBundle('com.coremedia.icons.CoreIcons')]
public class UserManagementWindow extends UserManagementWindowBase{

    import com.coremedia.elastic.social.studio.model.Moderation;
    import com.coremedia.ui.skins.PanelSkin;

    public static const xtype:String = "com.coremedia.elastic.social.studio.config.userManagementWindow";

    public*/function UserManagementWindow$(config/*:UserManagementWindow = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.elastic.social.studio.usermanagement.UserManagementWindowBase*/ =AS3.cast(com.coremedia.elastic.social.studio.usermanagement.UserManagementWindowBase,{});
    var defaults_$1/*:UserManagementWindow*/ =AS3.cast(UserManagementWindow,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.stateId = "userManagementWindowState";
    AS3.setBindable(config_$1,"stateful" , true);
    config_$1["id"] = com.coremedia.elastic.social.studio.usermanagement.UserManagementWindowBase.ID;
    config_$1.modal = false;
    config_$1.closeAction = "close";
    AS3.setBindable(config_$1,"activeItem" , com.coremedia.elastic.social.studio.usermanagement.UserManagementWindowBase.USER_DETAILS_PANEL_INDEX);
    AS3.setBindable(config_$1,"height" , 750);
    AS3.setBindable(config_$1,"width" , 650);
    AS3.setBindable(config_$1,"scrollable" , true);
    config_$1.resizable = false;
    config_$1.constrainHeader = true;
    AS3.setBindable(config_$1,"title" , this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'userdetail_window_title'));
    var layout_Card_40_5_$1/*:ext.layout.container.CardLayout*/ =AS3.cast(Ext.layout.container.Card,{});
    AS3.setBindable(config_$1,"layout" , layout_Card_40_5_$1);
    var es_UserDetailsPanel_43_5_$1/*:com.coremedia.elastic.social.studio.usermanagement.details.UserDetailsPanel*/ =AS3.cast(com.coremedia.elastic.social.studio.usermanagement.details.UserDetailsPanel,{});
    es_UserDetailsPanel_43_5_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.usermanagement.UserManagementWindowBase.USER_DETAILS_ITEM_ID);
    AS3.setBindable(es_UserDetailsPanel_43_5_$1,"moderation" , AS3.getBindable(config,"moderation"));
    AS3.setBindable(es_UserDetailsPanel_43_5_$1,"closeUserDetailView" ,AS3.bind( this,"switchToSearchList"));
    AS3.setBindable(es_UserDetailsPanel_43_5_$1,"listeners" , {
                                    'event_anonymized':AS3.bind(this,"switchToSearchListAndRefresh")
                                  });
    es_UserDetailsPanel_43_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.PanelSkin.DARK_200.getSkin());
    var es_UserListContainer_50_5_$1/*:com.coremedia.elastic.social.studio.usermanagement.list.UserListContainer*/ =AS3.cast(com.coremedia.elastic.social.studio.usermanagement.list.UserListContainer,{});
    es_UserListContainer_50_5_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.usermanagement.UserManagementWindowBase.USER_LIST_ITEM_ID);
    AS3.setBindable(es_UserListContainer_50_5_$1,"moderation" , AS3.getBindable(config,"moderation"));
    AS3.setBindable(es_UserListContainer_50_5_$1,"openUserDetailView" ,AS3.bind( this,"switchToUserDetailPanel"));
    AS3.setBindable(es_UserListContainer_50_5_$1,"isDetailWindowOpenedViaList" ,AS3.bind( this,"isDetailWindowOpenedViaList"));
    config_$1.items = [es_UserDetailsPanel_43_5_$1, es_UserListContainer_50_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$3Exu(config_$1);
  }/*

    [Bindable]
    public var moderation:Moderation;

    [Bindable]
    public var detailWindowOpenedViaList:Boolean;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.elastic.social.studio.usermanagement.UserManagementWindowBase",
      alias: "widget.com.coremedia.elastic.social.studio.config.userManagementWindow",
      constructor: UserManagementWindow$,
      super$3Exu: function() {
        com.coremedia.elastic.social.studio.usermanagement.UserManagementWindowBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        moderation: null,
        detailWindowOpenedViaList: false
      },
      requires: [
        "Ext.layout.container.Card",
        "com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin_properties",
        "com.coremedia.elastic.social.studio.usermanagement.UserManagementWindowBase",
        "com.coremedia.icons.CoreIcons_properties",
        "com.coremedia.ui.skins.PanelSkin",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.elastic.social.studio.usermanagement.details.UserDetailsPanel",
        "com.coremedia.elastic.social.studio.usermanagement.list.UserListContainer"
      ]
    };
});
