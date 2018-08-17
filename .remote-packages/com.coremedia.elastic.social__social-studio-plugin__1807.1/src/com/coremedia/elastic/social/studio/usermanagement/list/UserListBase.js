Ext.define("com.coremedia.elastic.social.studio.usermanagement.list.UserListBase", function(UserListBase) {/*package com.coremedia.elastic.social.studio.usermanagement.list {

import com.coremedia.elastic.social.studio.model.Moderation;
import com.coremedia.elastic.social.studio.model.User;
import com.coremedia.elastic.social.studio.model.UserAdministration;
import com.coremedia.elastic.social.studio.model.UserAdministrationPropertyNames;
import com.coremedia.elastic.social.studio.model.UserPropertyNames;
import com.coremedia.elastic.social.studio.model.utils.ElasticUtils;
import com.coremedia.ui.data.RemoteBean;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.store.BeanRecord;
import com.coremedia.ui.util.EventUtil;

import ext.LoadMask;

import ext.data.Model;
import ext.data.Store;
import ext.grid.GridPanel;
import ext.selection.RowSelectionModel;
import ext.util.Format;

import mx.resources.ResourceManager;

[ResourceBundle('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin')]
public class UserListBase extends GridPanel {
  private var userStateValueExpression:ValueExpression;
  private var searchResultValueExpression:ValueExpression;
  private var editedUserValueExpression:ValueExpression;
  private var userAdministration:UserAdministration;
  private var loadMask:LoadMask;
  private var moderation:Moderation;

  public*/ function UserListBase$(config/*:UserList = null*/) {if(arguments.length<=0)config=null;
    this.moderation$N81G = AS3.getBindable(config,"moderation");
    this.userAdministration$N81G = AS3.getBindable(config,"moderation").getUserAdministration();
    this.userStateValueExpression$N81G = this.getEditedUserValueExpression(AS3.getBindable(config,"moderation")).extendBy(com.coremedia.elastic.social.studio.model.UserPropertyNames.STATE);
    this.userStateValueExpression$N81G.addChangeListener(AS3.bind(this,"removeAnonymizededUser$N81G"));

    this.super$N81G(config);
    this.addListener('rowdblclick',AS3.bind( this,"doubleClick$N81G"));
  }/*

  public*/ function initSelection()/*:void*/ {
    var user/*:User*/ = this.getEditedUserValueExpression(this.moderation$N81G).getValue();
    (AS3.as(this.getSelectionModel(),  Ext.selection.RowModel)).select(com.coremedia.elastic.social.studio.model.utils.ElasticUtils.findBeanRecordIndex(this.getStore(), user));
  }/*


  override protected*/ function afterRender()/*:void*/ {
    Ext.grid.Panel.prototype.afterRender.call(this);

    var loadMaskCfg/*:LoadMask*/ = AS3.cast(Ext.LoadMask,{
      target: this
    });
    loadMaskCfg.msg = this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'userlist_search_loading_text');
    this.loadMask$N81G = new Ext.LoadMask(loadMaskCfg);
    this.loadMask$N81G.disable();
  }/*

  public*/ function setBusy(busy/*:Boolean*/)/*:void*/ {var this$=this;
    if(busy) {
      this.loadMask$N81G.show();
    }
    else {
      com.coremedia.ui.util.EventUtil.invokeLater(function()/*:void*/ {
        this$.loadMask$N81G.hide();
      });
    }
  }/*

// start of config properties
  internal native function get openUserDetailView():Function;

  // end of config properties

  override protected*/ function beforeDestroy()/*:void*/ {
    this.userStateValueExpression$N81G.removeChangeListener(AS3.bind(this,"removeAnonymizededUser$N81G"));
    this.removeListener('rowdblclick',AS3.bind( this,"doubleClick$N81G"));
    Ext.grid.Panel.prototype.beforeDestroy.call(this);
  }/*


  //noinspection JSUnusedLocalSymbols
  private*/ function doubleClick(grid/*:GridPanel*/, rowElement/*:BeanRecord*/)/*:void*/ {
    this.userAdministration$N81G.set(com.coremedia.elastic.social.studio.model.UserAdministrationPropertyNames.EDITED, null);
    this.userAdministration$N81G.startEditing(AS3.cast(com.coremedia.elastic.social.studio.model.User,rowElement.getBean()));
    this.openUserDetailView(true, this.userAdministration$N81G);
  }/*

  private*/ function removeAnonymizededUser()/*:void*/ {
    if (this.userAdministration$N81G.hasEdited()) {
      var author/*:User*/ = this.userAdministration$N81G.getEdited();
      if (author.isAnonymous()) {
        this.userAdministration$N81G.removeFromSearchResult(author);
      }
    }
  }/*

  //noinspection JSUnusedLocalSymbols
  public static*/ function nameRenderer$static(value/*:**/, metaData/*:**/, record/*:Model*/, rowIndex/*:int*/, colIndex/*:int*/, store/*:Store*/)/*:String*/ {
    var givenName/*:String*/ = record.data.givenName ? record.data.givenName : "";
    var surName/*:String*/ = record.data.surName ? record.data.surName : "";
    return Ext.util.Format.htmlEncode(givenName + " " + surName);
  }/*

  protected static*/ function imageRenderer$static(blob/*:RemoteBean*/)/*:Object*/ {
    var blobUri/*:String*/;
    if (blob) {
      blobUri = blob.getUri();
    }
    return com.coremedia.elastic.social.studio.usermanagement.list.ImageGridColumnRenderer.thumbnailFor(blobUri);
  }/*

  protected static*/ function stateRenderer$static(value/*:String*/)/*:String*/ {
    var state/*:String*/ = value;
    if (value) {
      state = value.toLowerCase();
      state = state.replace("-", "_");
      return mx.resources.ResourceManager.getInstance().getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', "userlist_state_" + state);
    }
    return "";
  }/*

  protected*/ function getEditedUserValueExpression(moderation/*:Moderation*/)/*:ValueExpression*/ {
    if (!this.editedUserValueExpression$N81G) {
      this.editedUserValueExpression$N81G = com.coremedia.ui.data.ValueExpressionFactory.create(
              com.coremedia.elastic.social.studio.model.UserAdministrationPropertyNames.EDITED, moderation.getUserAdministration());
    }

    return this.editedUserValueExpression$N81G;
  }/*

  protected*/ function getSearchResultValueExpression(moderation/*:Moderation*/)/*:ValueExpression*/ {
    if (!this.searchResultValueExpression$N81G) {
      this.searchResultValueExpression$N81G = com.coremedia.ui.data.ValueExpressionFactory.create(
              com.coremedia.elastic.social.studio.model.UserAdministrationPropertyNames.SEARCH_RESULT, moderation.getUserAdministration());
    }

    return this.searchResultValueExpression$N81G;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.grid.Panel",
      userStateValueExpression$N81G: null,
      searchResultValueExpression$N81G: null,
      editedUserValueExpression$N81G: null,
      userAdministration$N81G: null,
      loadMask$N81G: null,
      moderation$N81G: null,
      constructor: UserListBase$,
      super$N81G: function() {
        Ext.grid.Panel.prototype.constructor.apply(this, arguments);
      },
      initSelection: initSelection,
      afterRender: afterRender,
      setBusy: setBusy,
      beforeDestroy: beforeDestroy,
      doubleClick$N81G: doubleClick,
      removeAnonymizededUser$N81G: removeAnonymizededUser,
      getEditedUserValueExpression: getEditedUserValueExpression,
      getSearchResultValueExpression: getSearchResultValueExpression,
      statics: {
        nameRenderer: nameRenderer$static,
        imageRenderer: imageRenderer$static,
        stateRenderer: stateRenderer$static
      },
      requires: [
        "Ext.LoadMask",
        "Ext.grid.Panel",
        "Ext.selection.RowModel",
        "Ext.util.Format",
        "com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin_properties",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.util.EventUtil",
        "mx.resources.ResourceManager"
      ],
      uses: [
        "com.coremedia.elastic.social.studio.model.User",
        "com.coremedia.elastic.social.studio.model.UserAdministrationPropertyNames",
        "com.coremedia.elastic.social.studio.model.UserPropertyNames",
        "com.coremedia.elastic.social.studio.model.utils.ElasticUtils",
        "com.coremedia.elastic.social.studio.usermanagement.list.ImageGridColumnRenderer"
      ]
    };
});
