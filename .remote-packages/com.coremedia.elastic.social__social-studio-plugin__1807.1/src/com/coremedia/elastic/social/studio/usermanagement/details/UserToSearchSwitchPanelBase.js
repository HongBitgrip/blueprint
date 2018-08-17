Ext.define("com.coremedia.elastic.social.studio.usermanagement.details.UserToSearchSwitchPanelBase", function(UserToSearchSwitchPanelBase) {/*package com.coremedia.elastic.social.studio.usermanagement.details {

import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.elastic.social.studio.model.User;
import com.coremedia.elastic.social.studio.model.UserAdministration;
import com.coremedia.elastic.social.studio.model.UserAdministrationPropertyNames;
import com.coremedia.elastic.social.studio.model.UserPropertyNames;
import com.coremedia.ui.data.Bean;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.util.EventUtil;

import ext.container.Container;
import ext.form.field.DisplayField;

[ResourceBundle('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin')]
public class UserToSearchSwitchPanelBase extends Container {
  protected static const STATUS_DISPLAY_FIELD:String = "statusDisplayField";
  protected static const NEXT_USER_PROPERTY:String = "enableNextUser";
  protected static const PREVIOUS_USER_PROPERTY:String = "enablePreviousUser";
  protected static const USER_NAME_FIELD_ITEM_ID:String = "userNameField";

  private var userNavigationValueExpression:ValueExpression;
  protected var localUserNavigationBean:Bean;
  private var statusDisplayField:DisplayField;
  private var userNameDisplayField:DisplayField;
  private var editedUserValueExpression:ValueExpression;
  private var editedUserNameValueExpression:ValueExpression;
  private var editedUserStateValueExpression:ValueExpression;

  [Bindable]
  public var userAdministration:UserAdministration;

  [Bindable]
  /**
   * This function gets called whenever someone triggers switching the user. It is passed
   a function which has to called after applying the changes successfully.
   * /
  public var applyChanges:Function;

  public*/ function UserToSearchSwitchPanelBase$(config/*:UserToSearchSwitchPanel = undefined*/) {
    this.super$27zj(config);

    this.editedUserStateValueExpression$27zj = this.getEditedUserValueExpression$27zj(AS3.getBindable(config,"userAdministration")).extendBy(com.coremedia.elastic.social.studio.model.UserPropertyNames.STATE);
    this.editedUserNameValueExpression$27zj = this.getEditedUserValueExpression$27zj(AS3.getBindable(config,"userAdministration")).extendBy(com.coremedia.elastic.social.studio.model.UserPropertyNames.NAME);
    this.editedUserStateValueExpression$27zj.addChangeListener(AS3.bind(this,"refreshStatus"));
    this.editedUserNameValueExpression$27zj.addChangeListener(AS3.bind(this,"refreshUserName"));

    if (this.getUserNavigationValueExpression().getValue() == null) {
      //noinspection JSUnusedGlobalSymbols
      this.localUserNavigationBean = com.coremedia.cms.editor.sdk.editorContext.getBeanFactory().createLocalBean({
        enablePreviousUser: false,
        enableNextUser: false
      });
      this.getUserNavigationValueExpression().setValue(this.localUserNavigationBean);
    } else {
      this.localUserNavigationBean = this.getUserNavigationValueExpression().getValue();
    }

    this.refreshUserName();
    // update buttons (enable/disable) on every layoutchange (on "show" event doesn't work as expected)
    this.addListener("afterlayout",AS3.bind( this,"updateButtons$27zj"));
  }/*

  // start of config properties
  internal native function get closeUserDetailView():Function;

  // end of config properties

  override protected*/ function onDestroy()/*:void*/ {
    Ext.container.Container.prototype.onDestroy.call(this);
    this.removeListener("afterlayout",AS3.bind( this,"updateButtons$27zj"));
    this.editedUserStateValueExpression$27zj.removeChangeListener(AS3.bind(this,"refreshStatus"));
    this.editedUserNameValueExpression$27zj.removeChangeListener(AS3.bind(this,"refreshUserName"));
  }/*

  protected*/ function refreshUserName()/*:void*/ {
    //refresh the username by updating the value of the display field
    this.getUserNameDisplayField$27zj().setValue(AS3.as(this.editedUserNameValueExpression$27zj.getValue(),  String));
  }/*

  protected*/ function getCurrentStatusMessage()/*:String*/ {
    var displayed/*:User*/ = AS3.getBindable(this,"userAdministration").getEdited();

    var result/*:String*/ = "";
    if (displayed) {
      if (displayed.hasChangedSinceLastModeration()) {
        result = '<span class="toolbar-sep"></span>' + this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'contributiondetail_state_message_edited');
      } else {
        var state/*:String*/ = displayed.getContributionState().toLowerCase();
        state = state.replace("-", "_");
        result = '<span class="toolbar-sep"></span>' + this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'contributiondetail_state_message_' + state);
      }
    }

    return result;
  }/*

  public*/ function refreshStatus()/*:void*/ {
    if (this.getStatusDisplayField$27zj()) {
      this.getStatusDisplayField$27zj().setValue(this.getCurrentStatusMessage());
    }
  }/*

  /**
   * If there is more than just one search result from the user search list, the detail information from the previous
   * user gets visible with this function (if there is one).
   * /
  protected*/ function showPreviousUser()/*:void*/ {var this$=this;
    AS3.getBindable(this,"applyChanges")(function ()/*:void*/ {
      if (AS3.getBindable(this$,"userAdministration").hasSearchResult()) {
        var users/*:Array*/ = AS3.getBindable(this$,"userAdministration").getSearchResult();
        var activeUserIndex/*:int*/ = this$.getActiveUserIndex$27zj();
        if (users != null && activeUserIndex > 0) {
          AS3.getBindable(this$,"userAdministration").set(com.coremedia.elastic.social.studio.model.UserAdministrationPropertyNames.EDITED, null);
          com.coremedia.ui.util.EventUtil.invokeLater(function()/*:void*/ {
            AS3.getBindable(this$,"userAdministration").startEditing(AS3.as(users[activeUserIndex - 1],  com.coremedia.elastic.social.studio.model.User));
          });
        }
      }
      this$.updateButtons$27zj();
    });
  }/*

  /**
   * If there is more than just one search result from the user search list, the detail information from the next
   * user gets visible with this function (if there is one).
   * /
  protected*/ function showNextUser()/*:void*/ {var this$=this;
    AS3.getBindable(this,"applyChanges")(function ()/*:void*/ {
      if (AS3.getBindable(this$,"userAdministration").hasSearchResult()) {
        var activeUserIndex/*:int*/ = this$.getActiveUserIndex$27zj();
        var users/*:Array*/ = AS3.getBindable(this$,"userAdministration").getSearchResult();
        if (users && activeUserIndex < users.length - 1) {
          AS3.getBindable(this$,"userAdministration").set(com.coremedia.elastic.social.studio.model.UserAdministrationPropertyNames.EDITED, null);
          com.coremedia.ui.util.EventUtil.invokeLater(function()/*:void*/ {
            AS3.getBindable(this$,"userAdministration").startEditing(users[activeUserIndex + 1]);
          });
        }
      }
      this$.updateButtons$27zj();
    });
  }/*

  protected*/ function switchToSearchList()/*:void*/ {
    AS3.getBindable(this,"applyChanges")(this.closeUserDetailView);
  }/*

  private*/ function getActiveUserIndex()/*:int*/ {
    if (!AS3.getBindable(this,"userAdministration").hasSearchResult() || !AS3.getBindable(this,"userAdministration").hasEdited()) {
      return -1;
    }

    return AS3.getBindable(this,"userAdministration").getSearchResult().indexOf(AS3.getBindable(this,"userAdministration").getEdited());
  }/*

  protected*/ function getUserNavigationValueExpression()/*:ValueExpression*/ {
    if (!this.userNavigationValueExpression$27zj) {
      this.userNavigationValueExpression$27zj = com.coremedia.ui.data.ValueExpressionFactory.create("userDetailNavigation");
    }

    return this.userNavigationValueExpression$27zj;
  }/*

  /**
   * Updates the back and forward buttons.
   * /
  private*/ function updateButtons()/*:void*/ {
    var activeUserIndex/*:int*/ = this.getActiveUserIndex$27zj();
    var isIndexValid/*:Boolean*/ = activeUserIndex != -1;
    var isArrayNotEmpty/*:Boolean*/ = (AS3.getBindable(this,"userAdministration").hasSearchResult()) &&
            (AS3.getBindable(this,"userAdministration").getSearchResult().length != 0);
    var isUserNotFirstInArray/*:Boolean*/ = activeUserIndex != 0;
    var isUserNotLastInArray/*:Boolean*/ =
            activeUserIndex != (AS3.getBindable(this,"userAdministration").hasSearchResult() ? AS3.getBindable(this,"userAdministration").getSearchResult().length - 1 : 0);

    this.localUserNavigationBean.set(UserToSearchSwitchPanelBase.NEXT_USER_PROPERTY, (isUserNotLastInArray && isArrayNotEmpty && isIndexValid));
    this.localUserNavigationBean.set(UserToSearchSwitchPanelBase.PREVIOUS_USER_PROPERTY, (isUserNotFirstInArray && isIndexValid));
  }/*

  private*/ function getStatusDisplayField()/*:DisplayField*/ {
    if (!this.statusDisplayField$27zj) {
      this.statusDisplayField$27zj =AS3.as( this.getComponent(UserToSearchSwitchPanelBase.STATUS_DISPLAY_FIELD),  Ext.form.field.Display);
    }
    return this.statusDisplayField$27zj;
  }/*

  private*/ function getUserNameDisplayField()/*:DisplayField*/ {
    if (!this.userNameDisplayField$27zj) {
      this.userNameDisplayField$27zj =AS3.as( this.getComponent(UserToSearchSwitchPanelBase.USER_NAME_FIELD_ITEM_ID),  Ext.form.field.Display);
    }
    return this.userNameDisplayField$27zj;
  }/*

  private*/ function getEditedUserValueExpression(userAdministration/*:UserAdministration*/)/*:ValueExpression*/ {
    if (!this.editedUserValueExpression$27zj) {
      this.editedUserValueExpression$27zj = com.coremedia.ui.data.ValueExpressionFactory.create(com.coremedia.elastic.social.studio.model.UserAdministrationPropertyNames.EDITED, userAdministration);
    }

    return this.editedUserValueExpression$27zj;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.container.Container",
      userNavigationValueExpression$27zj: null,
      localUserNavigationBean: null,
      statusDisplayField$27zj: null,
      userNameDisplayField$27zj: null,
      editedUserValueExpression$27zj: null,
      editedUserNameValueExpression$27zj: null,
      editedUserStateValueExpression$27zj: null,
      constructor: UserToSearchSwitchPanelBase$,
      super$27zj: function() {
        Ext.container.Container.prototype.constructor.apply(this, arguments);
      },
      onDestroy: onDestroy,
      refreshUserName: refreshUserName,
      getCurrentStatusMessage: getCurrentStatusMessage,
      refreshStatus: refreshStatus,
      showPreviousUser: showPreviousUser,
      showNextUser: showNextUser,
      switchToSearchList: switchToSearchList,
      getActiveUserIndex$27zj: getActiveUserIndex,
      getUserNavigationValueExpression: getUserNavigationValueExpression,
      updateButtons$27zj: updateButtons,
      getStatusDisplayField$27zj: getStatusDisplayField,
      getUserNameDisplayField$27zj: getUserNameDisplayField,
      getEditedUserValueExpression$27zj: getEditedUserValueExpression,
      config: {
        userAdministration: null,
        applyChanges: null
      },
      statics: {
        STATUS_DISPLAY_FIELD: "statusDisplayField",
        NEXT_USER_PROPERTY: "enableNextUser",
        PREVIOUS_USER_PROPERTY: "enablePreviousUser",
        USER_NAME_FIELD_ITEM_ID: "userNameField"
      },
      requires: [
        "Ext.container.Container",
        "Ext.form.field.Display",
        "com.coremedia.cms.editor.sdk.editorContext",
        "com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin_properties",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.util.EventUtil"
      ],
      uses: [
        "com.coremedia.elastic.social.studio.model.User",
        "com.coremedia.elastic.social.studio.model.UserAdministrationPropertyNames",
        "com.coremedia.elastic.social.studio.model.UserPropertyNames"
      ]
    };
});
