Ext.define("com.coremedia.elastic.social.studio.usermanagement.list.UserListContainer", function(UserListContainer) {/*package com.coremedia.elastic.social.studio.usermanagement.list{
import com.coremedia.elastic.social.studio.usermanagement.list.*;
import net.jangaroo.ext.Exml;
import ext.layout.container.FitLayout;
public class UserListContainer extends UserListContainerBase{

    import com.coremedia.elastic.social.studio.model.Moderation;

    public static const xtype:String = "com.coremedia.elastic.social.studio.config.userListContainer";

    public*/function UserListContainer$(config/*:UserListContainer = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.elastic.social.studio.usermanagement.list.UserListContainerBase*/ =AS3.cast(com.coremedia.elastic.social.studio.usermanagement.list.UserListContainerBase,{});
    var defaults_$1/*:UserListContainer*/ =AS3.cast(UserListContainer,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    var es_UserSearchBar_26_5_$1/*: com.coremedia.elastic.social.studio.usermanagement.list.UserSearchBar*/ =AS3.cast(com.coremedia.elastic.social.studio.usermanagement.list.UserSearchBar,{});
    es_UserSearchBar_26_5_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.usermanagement.list.UserListContainerBase.SEARCH_BAR_ITEM_ID);
    AS3.setBindable(es_UserSearchBar_26_5_$1,"moderation" , AS3.getBindable(config,"moderation"));
    AS3.setBindable(es_UserSearchBar_26_5_$1,"isDetailWindowOpenedViaList" , AS3.getBindable(config,"isDetailWindowOpenedViaList"));
    config_$1.tbar = es_UserSearchBar_26_5_$1;
    var es_UserList_32_5_$1/*: com.coremedia.elastic.social.studio.usermanagement.list.UserList*/ =AS3.cast(com.coremedia.elastic.social.studio.usermanagement.list.UserList,{});
    es_UserList_32_5_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.usermanagement.list.UserListContainerBase.SEARCH_RESULT_VIEW_ITEM_ID);
    AS3.setBindable(es_UserList_32_5_$1,"moderation" , AS3.getBindable(config,"moderation"));
    AS3.setBindable(es_UserList_32_5_$1,"openUserDetailView" , AS3.getBindable(config,"openUserDetailView"));
    config_$1.items = [es_UserList_32_5_$1];
    var layout_Fit_37_5_$1/*:ext.layout.container.FitLayout*/ =AS3.cast(Ext.layout.container.Fit,{});
    AS3.setBindable(config_$1,"layout" , layout_Fit_37_5_$1);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$BUfY(config_$1);
  }/*

    [Bindable]
    public var moderation:Moderation;

    [Bindable]
    public var isDetailWindowOpenedViaList:Function;


    [Bindable]
    public var openUserDetailView:Function;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.elastic.social.studio.usermanagement.list.UserListContainerBase",
      alias: "widget.com.coremedia.elastic.social.studio.config.userListContainer",
      constructor: UserListContainer$,
      super$BUfY: function() {
        com.coremedia.elastic.social.studio.usermanagement.list.UserListContainerBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        moderation: null,
        isDetailWindowOpenedViaList: null,
        openUserDetailView: null
      },
      requires: [
        "Ext.layout.container.Fit",
        "com.coremedia.elastic.social.studio.usermanagement.list.UserListContainerBase",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.elastic.social.studio.usermanagement.list.UserList",
        "com.coremedia.elastic.social.studio.usermanagement.list.UserSearchBar"
      ]
    };
});
