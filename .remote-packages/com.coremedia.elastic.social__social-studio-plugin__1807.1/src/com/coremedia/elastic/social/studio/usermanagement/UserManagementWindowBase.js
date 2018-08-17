Ext.define("com.coremedia.elastic.social.studio.usermanagement.UserManagementWindowBase", function(UserManagementWindowBase) {/*package com.coremedia.elastic.social.studio.usermanagement {

import com.coremedia.cms.editor.sdk.components.StudioDialog;
import com.coremedia.elastic.social.studio.model.User;
import com.coremedia.elastic.social.studio.model.UserAdministration;
import com.coremedia.elastic.social.studio.model.UserAdministrationPropertyNames;
import com.coremedia.elastic.social.studio.model.UserPropertyNames;
import com.coremedia.elastic.social.studio.model.utils.ValueExpressionUtil;
import com.coremedia.elastic.social.studio.usermanagement.details.UserDetailsPanel;
import com.coremedia.elastic.social.studio.usermanagement.list.UserListContainer;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.util.EventUtil;

import ext.Ext;
import ext.layout.container.CardLayout;

public class UserManagementWindowBase extends StudioDialog {
  protected static const ID:String = "cm-user-management-window";
  protected static const USER_LIST_ITEM_ID:String = "userList";
  protected static const USER_DETAILS_ITEM_ID:String = "cm-user-details-container";
  protected static const USER_DETAILS_PANEL_INDEX:int = 0;
  protected static const USER_LIST_PANEL_INDEX:int = 1;

  private var userAdministration:UserAdministration;
  private var userStateValueExpression:ValueExpression;
  private var detailWindowOpenedViaList:Boolean;
  private var userDetailsPanel:UserDetailsPanel;
  private var userListContainer:UserListContainer;

  /**
   * The UserManagementWindow can switch between the UserList and the UserDetailPanel.
   * /
  public*/ function UserManagementWindowBase$(config/*:UserManagementWindow = null*/) {if(arguments.length<=0)config=null;
    this.userAdministration$h2tf = AS3.getBindable(config,"moderation").getUserAdministration();
    this.detailWindowOpenedViaList$h2tf =AS3.as( AS3.getBindable(config,"detailWindowOpenedViaList"),  Boolean);
    this.userStateValueExpression$h2tf = com.coremedia.ui.data.ValueExpressionFactory.create(
            com.coremedia.elastic.social.studio.model.utils.ValueExpressionUtil.createPath([com.coremedia.elastic.social.studio.model.UserAdministrationPropertyNames.EDITED, com.coremedia.elastic.social.studio.model.UserPropertyNames.STATE]), this.userAdministration$h2tf);
    this.userStateValueExpression$h2tf.addChangeListener(AS3.bind(this,"stateChanged$h2tf"));

    if (!this.detailWindowOpenedViaList$h2tf && this.userAdministration$h2tf.hasEdited()) {
      this.userAdministration$h2tf.getSearchHistory().add(this.userAdministration$h2tf.getEdited().getName());
    }

    this.super$h2tf(config);
  }/*

  override public*/ function close()/*:void*/ {
    if (this.getUserDetailsPanel$h2tf() && AS3.cast(Ext.layout.container.Card,this.getLayout()).getActiveItem() === this.getUserDetailsPanel$h2tf()) {
      this.getUserDetailsPanel$h2tf().applyChangesIfNeeded(AS3.bind(this,"destroy"));
    } else {
      this.destroy();
    }
  }/*

  //noinspection JSUnusedLocalSymbols
  override public*/ function destroy(/*...params*/)/*:void*/ {var params=Array.prototype.slice.call(arguments);
    this.userStateValueExpression$h2tf.removeChangeListener(AS3.bind(this,"stateChanged$h2tf"));
    com.coremedia.cms.editor.sdk.components.StudioDialog.prototype.destroy.call(this);
  }/*

  override protected*/ function afterRender()/*:void*/ {
    com.coremedia.cms.editor.sdk.components.StudioDialog.prototype.afterRender.call(this);
    this.handleResize$h2tf();
    this.switchToSearchList();
  }/*

  /**
   * UserList and UserDetails are displayed within a card layout. Basically the list is
   * a gridpanel, which calculates its height dependent on its content. But we do not want
   * the user management window to change its size when switching from userdetails to
   * the userlist and vice versa. Thus, we simply set the user lists height to a fixed
   * value, which is the height of the user detail panel. Because the user detail panels
   * height is calculated automatically we need to set it as the active item for the
   * card layout first just to switch back to the list after setting its height.
   *
   * Use maxHeight if its viewed on a small screen
   * /
  private*/ function handleResize()/*:void*/ {

    var height/*:Number*/ = this.getUserDetailsPanel$h2tf().getHeight();
    var maxHeight/*:Object*/ = Ext.getBody().getViewSize();
    var calcMaxHeight/*:Number*/ = maxHeight.height -50;

    if(calcMaxHeight > height){
      this.getUserListContainer$h2tf().setHeight(height);
      this.getUserDetailsPanel$h2tf().setHeight(height);
    }
    else {
      this.getUserListContainer$h2tf().setHeight(calcMaxHeight);
      this.getUserDetailsPanel$h2tf().setHeight(calcMaxHeight);
    }
  }/*

  private*/ function stateChanged()/*:void*/ {
    if (this.userAdministration$h2tf.hasEdited()) {
      var author/*:User*/ = this.userAdministration$h2tf.getEdited();
      if (author && author.isAnonymous()) {
        this.switchToSearchList();
      }
    }
  }/*

  public*/ function switchToSearchListAndRefresh()/*:void*/ {
    this.switchToSearchList();
    this.getUserListContainer$h2tf().getSearchBar().search(false);
  }/*

  public*/ function switchToSearchList()/*:void*/ {
    AS3.cast(Ext.layout.container.Card,this.getLayout()).setActiveItem(UserManagementWindowBase.USER_LIST_PANEL_INDEX);
    this.getUserListContainer$h2tf().getUserList().initSelection();
  }/*

  /**
   * Switching the view to the UserDetailPanel
   *
   * @param openViaList - true if the details view is opened via userList, otherwise false
   * @param userAdmin
   * /
  public*/ function switchToUserDetailPanel(openViaList/*:Boolean*/, userAdmin/*:UserAdministration*/)/*:void*/ {var this$=this;
    this.detailWindowOpenedViaList$h2tf = openViaList;
    if (!this.detailWindowOpenedViaList$h2tf) {
      this.userAdministration$h2tf = userAdmin;
      if (!this.detailWindowOpenedViaList$h2tf && this.userAdministration$h2tf.hasEdited()) {
        this.userAdministration$h2tf.getSearchHistory().add(this.userAdministration$h2tf.getEdited().getName());
      }
    }
    if (this.userAdministration$h2tf.hasEdited()) {
      var author/*:User*/ = this.userAdministration$h2tf.getEdited();
      if (!author.isAnonymous()) {
        com.coremedia.ui.util.EventUtil.invokeLater(function()/*:void*/ {
          AS3.cast(Ext.layout.container.Card,this$.getLayout()).setActiveItem(UserManagementWindowBase.USER_DETAILS_PANEL_INDEX);
        });
      }
    }
  }/*

  public*/ function isDetailWindowOpenedViaList()/*:Boolean*/ {
    return this.detailWindowOpenedViaList$h2tf;
  }/*

  private*/ function getUserDetailsPanel()/*:UserDetailsPanel*/ {
    if (!this.userDetailsPanel$h2tf) {
      this.userDetailsPanel$h2tf =AS3.as( this.getComponent(UserManagementWindowBase.USER_DETAILS_ITEM_ID),  com.coremedia.elastic.social.studio.usermanagement.details.UserDetailsPanel);
    }

    return this.userDetailsPanel$h2tf;
  }/*

  private*/ function getUserListContainer()/*:UserListContainer*/ {
    if (!this.userListContainer$h2tf) {
      this.userListContainer$h2tf =AS3.as( this.getComponent(UserManagementWindowBase.USER_LIST_ITEM_ID),  com.coremedia.elastic.social.studio.usermanagement.list.UserListContainer);
    }

    return this.userListContainer$h2tf;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.components.StudioDialog",
      userAdministration$h2tf: null,
      userStateValueExpression$h2tf: null,
      detailWindowOpenedViaList$h2tf: false,
      userDetailsPanel$h2tf: null,
      userListContainer$h2tf: null,
      constructor: UserManagementWindowBase$,
      super$h2tf: function() {
        com.coremedia.cms.editor.sdk.components.StudioDialog.prototype.constructor.apply(this, arguments);
      },
      close: close,
      destroy: destroy,
      afterRender: afterRender,
      handleResize$h2tf: handleResize,
      stateChanged$h2tf: stateChanged,
      switchToSearchListAndRefresh: switchToSearchListAndRefresh,
      switchToSearchList: switchToSearchList,
      switchToUserDetailPanel: switchToUserDetailPanel,
      isDetailWindowOpenedViaList: isDetailWindowOpenedViaList,
      getUserDetailsPanel$h2tf: getUserDetailsPanel,
      getUserListContainer$h2tf: getUserListContainer,
      statics: {
        ID: "cm-user-management-window",
        USER_LIST_ITEM_ID: "userList",
        USER_DETAILS_ITEM_ID: "cm-user-details-container",
        USER_DETAILS_PANEL_INDEX: 0,
        USER_LIST_PANEL_INDEX: 1
      },
      requires: [
        "Ext",
        "Ext.layout.container.Card",
        "com.coremedia.cms.editor.sdk.components.StudioDialog",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.util.EventUtil"
      ],
      uses: [
        "com.coremedia.elastic.social.studio.model.UserAdministrationPropertyNames",
        "com.coremedia.elastic.social.studio.model.UserPropertyNames",
        "com.coremedia.elastic.social.studio.model.utils.ValueExpressionUtil",
        "com.coremedia.elastic.social.studio.usermanagement.details.UserDetailsPanel",
        "com.coremedia.elastic.social.studio.usermanagement.list.UserListContainer"
      ]
    };
});
