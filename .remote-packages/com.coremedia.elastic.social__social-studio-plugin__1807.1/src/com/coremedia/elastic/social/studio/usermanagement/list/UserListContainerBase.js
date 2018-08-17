Ext.define("com.coremedia.elastic.social.studio.usermanagement.list.UserListContainerBase", function(UserListContainerBase) {/*package com.coremedia.elastic.social.studio.usermanagement.list {

import ext.panel.Panel;

public class UserListContainerBase extends Panel {
  protected static const SEARCH_BAR_ITEM_ID:String = "searchBar";
  protected static const SEARCH_RESULT_VIEW_ITEM_ID:String = "searchResult";

  public*/ function UserListContainerBase$(config/*:UserListContainer = null*/) {if(arguments.length<=0)config=null;
    this.super$hMHJ(config);
  }/*

  public*/ function getUserList()/*:UserList*/ {
    return AS3.as( this.queryById(UserListContainerBase.SEARCH_RESULT_VIEW_ITEM_ID),  com.coremedia.elastic.social.studio.usermanagement.list.UserList);
  }/*

  public*/ function getSearchBar()/*:UserSearchBar*/ {
    return AS3.as( this.queryById(UserListContainerBase.SEARCH_BAR_ITEM_ID),  com.coremedia.elastic.social.studio.usermanagement.list.UserSearchBar);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.panel.Panel",
      constructor: UserListContainerBase$,
      super$hMHJ: function() {
        Ext.panel.Panel.prototype.constructor.apply(this, arguments);
      },
      getUserList: getUserList,
      getSearchBar: getSearchBar,
      statics: {
        SEARCH_BAR_ITEM_ID: "searchBar",
        SEARCH_RESULT_VIEW_ITEM_ID: "searchResult"
      },
      requires: ["Ext.panel.Panel"],
      uses: [
        "com.coremedia.elastic.social.studio.usermanagement.list.UserList",
        "com.coremedia.elastic.social.studio.usermanagement.list.UserSearchBar"
      ]
    };
});
