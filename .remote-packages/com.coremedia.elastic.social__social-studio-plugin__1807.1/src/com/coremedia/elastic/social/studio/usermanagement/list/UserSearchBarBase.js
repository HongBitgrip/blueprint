Ext.define("com.coremedia.elastic.social.studio.usermanagement.list.UserSearchBarBase", function(UserSearchBarBase) {/*package com.coremedia.elastic.social.studio.usermanagement.list {

import com.coremedia.elastic.social.studio.model.HistoryPropertyNames;
import com.coremedia.elastic.social.studio.model.UserAdministration;
import com.coremedia.elastic.social.studio.model.UserAdministrationPropertyNames;
import com.coremedia.elastic.social.studio.model.utils.ValueExpressionUtil;
import com.coremedia.elastic.social.studio.usermanagement.list.UserList;
import com.coremedia.elastic.social.studio.usermanagement.list.UserListContainer;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;

import ext.form.field.ComboBox;
import ext.toolbar.Toolbar;

public class UserSearchBarBase extends Toolbar {
  protected static const USER_SEARCH_BAR_ID:String = "cm-elastic-social-user-search-bar";
  protected static const SEARCH_FIELD_ID:String = "cm-elastic-social-user-search-field";
  protected static const FORWARD_BUTTON_ITEM_ID:String = "forward";
  protected static const BACK_BUTTON_ITEM_ID:String = "back";
  protected static const MAGNIFIER_BUTTON_ITEM_ID:String = "magnifier";
  protected static const SUGGESTION_SEGMENT:String = "/user/suggestions";

  private var searchField:ComboBox;
  private var backwardValueExpression:ValueExpression;
  private var forwardValueExpression:ValueExpression;
  private var userAdministration:UserAdministration;

  public*/ function UserSearchBarBase$(config/*:UserSearchBar = null*/) {if(arguments.length<=0)config=null;
    this.super$cXUR(config);
    this.userAdministration$cXUR = AS3.getBindable(config,"moderation").getUserAdministration();
  }/*

  /**
   * Search for users. The value from the ComboBox with <code>SEARCH_FIELD_ID</code> as itemId
   * will be used as query.
   * @param newSearch if <code>true</code>, the search term will be added to the search history (available via the "previous" and "next" buttons)
   * /
  public*/ function search(newSearch/*:Boolean = true*/)/*:void*/ {if(arguments.length<=0)newSearch=true;
    // the trim regExp to remove spaces from start and end of a string
    var trim/*:RegExp*/ = /^\s+|\s+$/g;
    var searchTerm/*:String*/ = this.getSearchField$cXUR().getValue();
    this.setBusy$cXUR(true);
    if (searchTerm) {
      this.userAdministration$cXUR.search(searchTerm.toString().replace(trim, ""), newSearch,AS3.bind( this,"searchSuccess$cXUR"));
      this.getSearchField$cXUR().collapse();
    }
    else {
      this.userAdministration$cXUR.search("*", newSearch,AS3.bind( this,"searchSuccess$cXUR"));
    }
  }/*

  private*/ function setBusy(busy/*:Boolean*/)/*:void*/ {
    var parent/*:UserListContainer*/ =AS3.as( this.findParentByType(com.coremedia.elastic.social.studio.usermanagement.list.UserListContainer.xtype),  com.coremedia.elastic.social.studio.usermanagement.list.UserListContainer);
    var userList/*:UserList*/ = parent.getUserList();
    userList.setBusy(busy);
  }/*

  private*/ function searchSuccess()/*:void*/ {
    this.setBusy$cXUR(false);
  }/*

  /**
   * Show the previous Search Query and its result if it exist.
   * /
  protected*/ function back()/*:void*/ {
    var query/*:String*/ = this.userAdministration$cXUR.getSearchHistory().backward()["queryString"];
    if (query) {
      this.getSearchField$cXUR().setValue(query);
      this.search(false);
    }
  }/*

  /**
   * Show the next Search Query and its result if it exist.
   * /
  protected*/ function forward()/*:void*/ {
    var query/*:String*/ = this.userAdministration$cXUR.getSearchHistory().forward()["queryString"];
    if (query) {
      this.getSearchField$cXUR().setValue(query);
      this.search(false);
    }
  }/*

  /**
   * Get The searchField as ComboBox
   * @return ext.form.field.ComboBox - the ComboBox that holds the queryString
   * /
  private*/ function getSearchField()/*:ComboBox*/ {
    if (!this.searchField$cXUR) {
      this.searchField$cXUR =AS3.as( this.getComponent(UserSearchBarBase.SEARCH_FIELD_ID),  Ext.form.field.ComboBox);
    }
    return this.searchField$cXUR;
  }/*

  protected*/ function getBackwardValueExpression(userAdmin/*:UserAdministration*/)/*:ValueExpression*/ {
    if (!this.backwardValueExpression$cXUR) {
      this.backwardValueExpression$cXUR = com.coremedia.ui.data.ValueExpressionFactory.create(
              com.coremedia.elastic.social.studio.model.utils.ValueExpressionUtil.createPath([
                com.coremedia.elastic.social.studio.model.UserAdministrationPropertyNames.SEARCH_HISTORY,
                com.coremedia.elastic.social.studio.model.HistoryPropertyNames.BACKWARD_ENABLED]), userAdmin);
    }

    return this.backwardValueExpression$cXUR;
  }/*

  protected*/ function getForwardValueExpression(userAdmin/*:UserAdministration*/)/*:ValueExpression*/ {
    if (!this.forwardValueExpression$cXUR) {
      this.forwardValueExpression$cXUR = com.coremedia.ui.data.ValueExpressionFactory.create(
              com.coremedia.elastic.social.studio.model.utils.ValueExpressionUtil.createPath([
                com.coremedia.elastic.social.studio.model.UserAdministrationPropertyNames.SEARCH_HISTORY,
                com.coremedia.elastic.social.studio.model.HistoryPropertyNames.FORWARD_ENABLED]), userAdmin);
    }

    return this.forwardValueExpression$cXUR;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.toolbar.Toolbar",
      searchField$cXUR: null,
      backwardValueExpression$cXUR: null,
      forwardValueExpression$cXUR: null,
      userAdministration$cXUR: null,
      constructor: UserSearchBarBase$,
      super$cXUR: function() {
        Ext.toolbar.Toolbar.prototype.constructor.apply(this, arguments);
      },
      search: search,
      setBusy$cXUR: setBusy,
      searchSuccess$cXUR: searchSuccess,
      back: back,
      forward: forward,
      getSearchField$cXUR: getSearchField,
      getBackwardValueExpression: getBackwardValueExpression,
      getForwardValueExpression: getForwardValueExpression,
      statics: {
        USER_SEARCH_BAR_ID: "cm-elastic-social-user-search-bar",
        SEARCH_FIELD_ID: "cm-elastic-social-user-search-field",
        FORWARD_BUTTON_ITEM_ID: "forward",
        BACK_BUTTON_ITEM_ID: "back",
        MAGNIFIER_BUTTON_ITEM_ID: "magnifier",
        SUGGESTION_SEGMENT: "/user/suggestions"
      },
      requires: [
        "Ext.form.field.ComboBox",
        "Ext.toolbar.Toolbar",
        "com.coremedia.ui.data.ValueExpressionFactory"
      ],
      uses: [
        "com.coremedia.elastic.social.studio.model.HistoryPropertyNames",
        "com.coremedia.elastic.social.studio.model.UserAdministrationPropertyNames",
        "com.coremedia.elastic.social.studio.model.utils.ValueExpressionUtil",
        "com.coremedia.elastic.social.studio.usermanagement.list.UserListContainer"
      ]
    };
});
