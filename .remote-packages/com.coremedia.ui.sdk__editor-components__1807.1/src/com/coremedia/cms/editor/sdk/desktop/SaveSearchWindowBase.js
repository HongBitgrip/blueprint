Ext.define("com.coremedia.cms.editor.sdk.desktop.SaveSearchWindowBase", function(SaveSearchWindowBase) {/*package com.coremedia.cms.editor.sdk.desktop {

import com.coremedia.cms.editor.sdk.collectionview.CollectionViewManagerInternal;
import com.coremedia.cms.editor.sdk.collectionview.CollectionViewUtil;
import com.coremedia.cms.editor.sdk.components.StudioDialog;
import com.coremedia.cms.editor.sdk.dashboard.Dashboard;
import com.coremedia.cms.editor.sdk.dashboard.DashboardBase;
import com.coremedia.cms.editor.sdk.dashboard.WidgetState;
import com.coremedia.cms.editor.sdk.dashboard.widgets.search.SavedSearchWidgetState;
import com.coremedia.cms.editor.sdk.dashboard.widgets.search.SavedSearchWidgetType;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.ui.components.StatefulCheckbox;
import com.coremedia.ui.components.StatefulTextField;
import com.coremedia.ui.mixins.ValidationState;
import com.coremedia.ui.util.createComponentSelector;

import ext.ComponentManager;
import ext.Ext;
import ext.button.Button;
import ext.container.Container;
import ext.event.Event;

import mx.resources.ResourceManager;

/**
 * Base class of the save search window.
 * /
[ResourceBundle('com.coremedia.cms.editor.sdk.actions.Actions')]
[ResourceBundle('com.coremedia.cms.editor.Editor')]
[ResourceBundle('com.coremedia.cms.editor.EditorErrors')]
public class SaveSearchWindowBase extends StudioDialog {

  /**
   * The itemID of the new search name text field.
   * /
  public static const NEW_SEARCH_NAME_ITEM_ID:String = "newSearchName";

  /**
   * The itemId of the save-as-search checkbox
   * /
  public static const SAVE_AS_WIDGET_ITEM_ID:String = "saveAsWidget";

  /**
   * The itemId of the save-as-folder checkbox
   * /
  public static const SAVE_AS_FOLDER_ITEM_ID:String = "saveAsFolder";

  /**
   * The itemId of the okay button.
   * /
  public static const OK_BUTTON_ITEM_ID:String = "okBtn";

  /**
   * The itemId of the cancel button.
   * /
  public static const CANCEL_BUTTON_ITEM_ID:String = "cancelBtn";

  private var newSearchName:StatefulTextField;
  private var saveAsWidget:StatefulCheckbox;
  private var saveAsFolder:StatefulCheckbox;
  private var okButton:Button;

  public*/ function SaveSearchWindowBase$(config/*:SaveSearchWindow = null*/) {if(arguments.length<=0)config=null;
    this.super$JRro(config);

    this.newSearchName$JRro =AS3.as( this.queryById(SaveSearchWindowBase.NEW_SEARCH_NAME_ITEM_ID),  com.coremedia.ui.components.StatefulTextField);
    this.saveAsWidget$JRro =AS3.as( this.queryById(SaveSearchWindowBase.SAVE_AS_WIDGET_ITEM_ID),  com.coremedia.ui.components.StatefulCheckbox);
    this.saveAsFolder$JRro =AS3.as( this.queryById(SaveSearchWindowBase.SAVE_AS_FOLDER_ITEM_ID),  com.coremedia.ui.components.StatefulCheckbox);
    this.okButton$JRro =AS3.as( this.queryById(SaveSearchWindowBase.OK_BUTTON_ITEM_ID),  Ext.button.Button);
  }/*

  override protected*/ function afterRender()/*:void*/ {
    com.coremedia.cms.editor.sdk.components.StudioDialog.prototype.afterRender.call(this);

    // Keep track of changes continually.
    this.saveAsFolder$JRro.addListener("change",AS3.bind( this,"updateValidationAndEnabledDisableOkButton$JRro"));
    this.saveAsWidget$JRro.addListener("change",AS3.bind( this,"updateValidationAndEnabledDisableOkButton$JRro"));
    this.newSearchName$JRro.addListener("change",AS3.bind( this,"updateValidationAndEnabledDisableOkButton$JRro"));
    this.updateValidationAndEnabledDisableOkButton$JRro();
  }/*

  private*/ function updateValidationAndEnabledDisableOkButton()/*:void*/ {
    var theNewSearchName/*:String*/ = this.newSearchName$JRro.getValue() || "";

    var noSearchNameEntered/*:Boolean*/ = !theNewSearchName;
    var noOptionSelected/*:Boolean*/ = !this.saveAsFolder$JRro.getValue() && !this.saveAsWidget$JRro.getValue();
    var searchNameConflict/*:Boolean*/ = false;
    var widgetNameConflict/*:Boolean*/ = false;

    var message/*:String*/;
    if (noSearchNameEntered || noOptionSelected) {
      if (theNewSearchName) {
        message = mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.EditorErrors', 'saveSearch_noSaveOptionSelected_tooltiptext');
      } else if (noOptionSelected) {
        message = mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.EditorErrors', 'saveSearch_noSearchNameandOptionEntered_tooltiptext');
      } else {
        message = mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.EditorErrors', 'saveSearch_noSearchNameEntered_tooltiptext');
      }
    } else {
      // A search name has been entered and at least one option is checked.
      searchNameConflict = ! !this.saveAsFolder$JRro.getValue() && existsSearchWithName$static(theNewSearchName);
      widgetNameConflict = ! !this.saveAsWidget$JRro.getValue() && existsWidgetWithName$static(theNewSearchName);

      if (searchNameConflict) {
        if (widgetNameConflict) {
          message = mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.EditorErrors', 'saveSearch_searchFolderAndWidgetExist');
        } else {
          message = mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.EditorErrors', 'saveSearch_searchFolderExists');
        }
      } else if (widgetNameConflict) {
        message = mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.EditorErrors', 'saveSearch_widgetExists');
      }
    }

    if (noOptionSelected || widgetNameConflict) {
      AS3.setBindable(this.saveAsWidget$JRro,"validationState" , com.coremedia.ui.mixins.ValidationState.ERROR);
      AS3.setBindable(this.saveAsWidget$JRro,"validationMessage" , message);
    } else {
      AS3.setBindable(this.saveAsWidget$JRro,"validationMessage" , null);
      AS3.setBindable(this.saveAsWidget$JRro,"validationState" , null);
    }

    if (noOptionSelected || searchNameConflict) {
      AS3.setBindable(this.saveAsFolder$JRro,"validationState" , com.coremedia.ui.mixins.ValidationState.ERROR);
      AS3.setBindable(this.saveAsFolder$JRro,"validationMessage" , message);
    } else {
      AS3.setBindable(this.saveAsFolder$JRro,"validationMessage" , null);
      AS3.setBindable(this.saveAsFolder$JRro,"validationState" , null);
    }

    if (noSearchNameEntered || widgetNameConflict || searchNameConflict) {
      AS3.setBindable(this.newSearchName$JRro,"validationState" , com.coremedia.ui.mixins.ValidationState.ERROR);
      AS3.setBindable(this.newSearchName$JRro,"validationMessage" , message);
    } else {
      AS3.setBindable(this.newSearchName$JRro,"validationMessage" , null);
      AS3.setBindable(this.newSearchName$JRro,"validationState" , null);
    }

    if (noOptionSelected || noSearchNameEntered || widgetNameConflict || searchNameConflict) {
      this.okButton$JRro.setDisabled(true);
      this.okButton$JRro.setTooltip(message);
    } else {
      this.okButton$JRro.setTooltip(null);
      this.okButton$JRro.setDisabled(false);
    }
  }/*

  override protected*/ function onDestroy()/*:void*/ {
    this.saveAsFolder$JRro.removeListener("change",AS3.bind( this,"updateValidationAndEnabledDisableOkButton$JRro"));
    this.saveAsWidget$JRro.removeListener("change",AS3.bind( this,"updateValidationAndEnabledDisableOkButton$JRro"));
    this.newSearchName$JRro.removeListener("change",AS3.bind( this,"updateValidationAndEnabledDisableOkButton$JRro"));
    com.coremedia.cms.editor.sdk.components.StudioDialog.prototype.onDestroy.call(this);
  }/*
  /**
   * The search may be saved as folder and widget at once. One of the options has to be selected or an error will be displayed.
   * The name of the search has to be entered as well.
   * /
  protected*/ function saveSearchOrWidget()/*:void*/ {
    if (this.saveAsFolder$JRro.getValue()) {
      this.saveSearch$JRro();
    }
    if (this.saveAsWidget$JRro.getValue()) {
      this.saveWidget$JRro();
    }
  }/*

  private static*/ function existsSearchWithName$static(name/*:String*/)/*:Boolean*/  {
    var searches/*:Array*/ = com.coremedia.cms.editor.sdk.collectionview.CollectionViewUtil.getSavedSearches() || [];
    for/* each*/ (var $1=0;$1</* in*/ searches.length;++$1) {var savedSearch/*:Object*/ =searches[$1];
      if (savedSearch["_name"] === name) {
        return true;
      }
    }
    return false;
  }/*

  private static*/ function existsWidgetWithName$static(encodedName/*:String*/)/*:Boolean*/  {
    for/* each*/(var $1=0,$2=/* in*/ com.coremedia.cms.editor.sdk.dashboard.DashboardBase.getCustomizedWidgetStates();$1<$2.length;++$1) {var existingWidgetState/*:WidgetState*/ =$2[$1];
      if (existingWidgetState.widgetTypeId === com.coremedia.cms.editor.sdk.dashboard.widgets.search.SavedSearchWidgetType.WIDGET_TYPE_ID) {
        var existingSavedSearchWidgetState/*:SavedSearchWidgetState*/ = AS3.cast(com.coremedia.cms.editor.sdk.dashboard.widgets.search.SavedSearchWidgetState,existingWidgetState);
        if (AS3.getBindable(existingSavedSearchWidgetState,"title") === encodedName) {
          return true;
        }
      }
    }

    return false;
  }/*

  private*/ function saveWidget()/*:void*/ {
    var encodedNewSearchName/*:String*/ = this.newSearchName$JRro.getValue() || "";
    if (existsWidgetWithName$static(encodedNewSearchName)) {
      return;
    }

    var workArea/*:WorkArea*/ =AS3.as( com.coremedia.cms.editor.sdk.editorContext.getWorkArea(),  com.coremedia.cms.editor.sdk.desktop.WorkArea);
    workArea.showSingletonTab(com.coremedia.cms.editor.sdk.dashboard.Dashboard.xtype);
    var theDashboard/*:Dashboard*/ =AS3.as( workArea.getActiveTab(),  com.coremedia.cms.editor.sdk.dashboard.Dashboard);
    var widgetStateCfg/*:SavedSearchWidgetState*/ = AS3.cast(com.coremedia.cms.editor.sdk.dashboard.widgets.search.SavedSearchWidgetState,{});
    AS3.setBindable(widgetStateCfg,"search" , getCurrentSearchState$static());
    AS3.setBindable(widgetStateCfg,"title" , encodedNewSearchName);
    widgetStateCfg.widgetTypeId = com.coremedia.cms.editor.sdk.dashboard.widgets.search.SavedSearchWidgetType.WIDGET_TYPE_ID;
    theDashboard.addWidget(widgetStateCfg, false);
    // close save search dialog
    this.close();
  }/*

  private*/ function saveSearch()/*:void*/ {
    var newSavedSearchName/*:String*/ = this.newSearchName$JRro.getValue() || "";
    if (existsSearchWithName$static(newSavedSearchName)) {
      return;
    }

    var currentState/*:Object*/ = getCurrentSearchState$static();
    currentState['_name'] = newSavedSearchName;

    var searches/*:Array*/ = com.coremedia.cms.editor.sdk.collectionview.CollectionViewUtil.getSavedSearches();
    if (searches) {
      // Do not modify an array stored in the bean layer.
      searches = searches.concat();

      // If name already exists for an existing saved search, display Error and return
      if (existsSearchWithName$static(newSavedSearchName)) {
        return;
      }

      searches = searches.concat([currentState]);

    } else {
      // create new collection struct and initialize it with the single new saved search entry
      searches = [currentState];
    }
    // set new saved searches in collection struct
    com.coremedia.cms.editor.sdk.collectionview.CollectionViewUtil.updateSavedSearches(searches);
    // close save search dialog and trigger notification for favorites toolbar
    this.close();
    this.notifySavedSearchToFavoritesToolbar$JRro(newSavedSearchName);
  }/*

  private static*/ function getCurrentSearchState$static()/*:Object*/ {
    return AS3.cast(com.coremedia.cms.editor.sdk.collectionview.CollectionViewManagerInternal,com.coremedia.cms.editor.sdk.editorContext.getCollectionViewManager()).
            getCollectionView().getCollectionViewModel().getCurrentState();
  }/*

  private*/ function notifySavedSearchToFavoritesToolbar(searchEntryName/*:String*/)/*:void*/ {
    if (getToolbar$static().query(com.coremedia.ui.util.createComponentSelector().attr("itemName", searchEntryName).build()).length > 0) {
      showNotification$static(searchEntryName);
    } else {
      getToolbar$static().addListener("afterlayout", function()/*:void*/ {
        showNotification$static(searchEntryName);
      }, null, {single: true});
    }
  }/*

  private static*/ function getToolbar$static()/*:Container*/ {
    var mainView/*:Container*/ = AS3.cast(Ext.container.Container,Ext.getCmp(com.coremedia.cms.editor.sdk.desktop.EditorMainView.ID));
    return AS3.as( mainView.down(com.coremedia.ui.util.createComponentSelector()._xtype(com.coremedia.cms.editor.sdk.desktop.FavoritesToolbarUserItemsArea.xtype).build()),  Ext.container.Container);
  }/*

  private static*/ function showNotification$static(searchEntryName/*:String*/)/*:void*/ {
    var toolbarButton/*:Button*/ =AS3.as( getToolbar$static().down(com.coremedia.ui.util.createComponentSelector().attr("itemName", searchEntryName).build()),  Ext.button.Button);
    if (!toolbarButton) {
      return;
    }
    toolbarButton.getEl().dom.scrollIntoView(false);
    showNotificationAtButton$static(toolbarButton, 0);
  }/*

  private static*/ function showNotificationAtButton$static(button/*:Button*/, yOffset/*:Number*/)/*:void*/ {
    var notificationConfig/*:SaveSearchNotification*/ = AS3.cast(com.coremedia.cms.editor.sdk.desktop.SaveSearchNotification,{});
    notificationConfig.anchor = "left";
    AS3.setBindable(notificationConfig,"yOffset" , yOffset);
    AS3.setBindable(notificationConfig,"target" , button.getEl().first()["id"]);
    AS3.setBindable(notificationConfig,"text" , mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.sdk.actions.Actions', 'Action_saveSearch_notification_added'));
    Ext.ComponentManager.create(notificationConfig).show();
  }/*

  protected*/ function cancel()/*:void*/ {
    this.close();
  }/*

  //noinspection JSUnusedLocalSymbols
  internal*/ function handleSpecialKey(textfield/*:**/, e/*:Event*/)/*:void*/ {
    if (e.getKey() === Ext.event.Event.ENTER) {
      e.stopEvent();
      this.saveSearchOrWidget();
    }
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.components.StudioDialog",
      newSearchName$JRro: null,
      saveAsWidget$JRro: null,
      saveAsFolder$JRro: null,
      okButton$JRro: null,
      constructor: SaveSearchWindowBase$,
      super$JRro: function() {
        com.coremedia.cms.editor.sdk.components.StudioDialog.prototype.constructor.apply(this, arguments);
      },
      afterRender: afterRender,
      updateValidationAndEnabledDisableOkButton$JRro: updateValidationAndEnabledDisableOkButton,
      onDestroy: onDestroy,
      saveSearchOrWidget: saveSearchOrWidget,
      saveWidget$JRro: saveWidget,
      saveSearch$JRro: saveSearch,
      notifySavedSearchToFavoritesToolbar$JRro: notifySavedSearchToFavoritesToolbar,
      cancel: cancel,
      handleSpecialKey: handleSpecialKey,
      statics: {
        NEW_SEARCH_NAME_ITEM_ID: "newSearchName",
        SAVE_AS_WIDGET_ITEM_ID: "saveAsWidget",
        SAVE_AS_FOLDER_ITEM_ID: "saveAsFolder",
        OK_BUTTON_ITEM_ID: "okBtn",
        CANCEL_BUTTON_ITEM_ID: "cancelBtn"
      },
      requires: [
        "Ext",
        "Ext.ComponentManager",
        "Ext.button.Button",
        "Ext.container.Container",
        "Ext.event.Event",
        "com.coremedia.cms.editor.EditorErrors_properties",
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.cms.editor.sdk.actions.Actions_properties",
        "com.coremedia.cms.editor.sdk.components.StudioDialog",
        "com.coremedia.ui.components.StatefulCheckbox",
        "com.coremedia.ui.components.StatefulTextField",
        "com.coremedia.ui.mixins.ValidationState",
        "com.coremedia.ui.util.createComponentSelector",
        "mx.resources.ResourceManager"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.collectionview.CollectionViewManagerInternal",
        "com.coremedia.cms.editor.sdk.collectionview.CollectionViewUtil",
        "com.coremedia.cms.editor.sdk.dashboard.Dashboard",
        "com.coremedia.cms.editor.sdk.dashboard.DashboardBase",
        "com.coremedia.cms.editor.sdk.dashboard.widgets.search.SavedSearchWidgetState",
        "com.coremedia.cms.editor.sdk.dashboard.widgets.search.SavedSearchWidgetType",
        "com.coremedia.cms.editor.sdk.desktop.EditorMainView",
        "com.coremedia.cms.editor.sdk.desktop.FavoritesToolbarUserItemsArea",
        "com.coremedia.cms.editor.sdk.desktop.SaveSearchNotification",
        "com.coremedia.cms.editor.sdk.desktop.WorkArea",
        "com.coremedia.cms.editor.sdk.editorContext"
      ]
    };
});
