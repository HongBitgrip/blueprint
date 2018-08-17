Ext.define("com.coremedia.personalization.ui.persona.selector.PersonaSelectorMenuBase", function(PersonaSelectorMenuBase) {/*package com.coremedia.personalization.ui.persona.selector {
import com.coremedia.cap.common.IdHelper;
import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.search.SearchResult;
import com.coremedia.personalization.ui.persona.helper.PersonaActivator;
import com.coremedia.personalization.ui.persona.popup.PersonaPopupManager;
import com.coremedia.ui.data.RemoteBean;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.util.ExecuteEventually;
import com.coremedia.ui.util.IdUtil;
import com.coremedia.ui.util.createComponentSelector;

import ext.container.Container;
import ext.event.Event;
import ext.form.field.Radio;
import ext.menu.Menu;

public class PersonaSelectorMenuBase extends Menu {

  private var itemsContainer:Container;
  private var radioBtn:Radio;
  private var contentType:String;
  private var defaultGroupHeaderLabel:String;
  private var initialSystemPaths:Array;
  private var additionalPaths:Object =*/function additionalPaths_(){this.additionalPaths$pr98=( {});}/*;
  private var personaPopupManagerInstance:PersonaPopupManager;

  protected static const ITEMS_CONTAINER_ITEM_ID:String = "menuItems";
  protected static const GROUP_CONTAINER_ITEM_ID_PREFIX:String = "groupContainer-";
  protected static const NO_PERSONA_RADIO_BUTTON_ITEM_ID:String = "noPersonaRadioButton";

  private static const*/var PERSONA_MENU_ITEM_PREFIX$static/*:String*/ = "menuItem-";/*
  private var personaActivatorFn:Function;

  private var contentValueExpression:ValueExpression;

  public*/ function PersonaSelectorMenuBase$(config/*:PersonaSelectorMenu = null*/) {var this$=this;if(arguments.length<=0)config=null;
    this.super$pr98(config);additionalPaths_.call(this);;
    this.contentValueExpression$pr98 = AS3.getBindable(config,"contentValueExpression");
    this.personaActivatorFn$pr98 = AS3.getBindable(config,"personaActivatorFn");
    this.defaultGroupHeaderLabel$pr98 = AS3.getBindable(config,"defaultGroupHeaderLabel") || "System";

    this.contentType$pr98 = AS3.getBindable(config,"docType");
    this.initialSystemPaths$pr98 = AS3.getBindable(config,"paths");

    //listen to the event that is called when the menu becomes visible
    this.on(com.coremedia.personalization.ui.persona.selector.PersonaSelectorBase.MENU_ACTIVATED_EVENT,AS3.bind( this,"menuActivated$pr98"));
    this.mon(this.getNoPersonaRadioBtn$pr98(), "change", function(radio/*:Radio*/, newValue/*:Boolean*/)/*:void*/ {
      if (newValue) {
        this$.personaActivatorFn$pr98().setNoPersonaActive();
      }
    });
  }/*

  protected static*/ function transformToNumericId$static(value/*:**/)/*:**/ {
    var myId/*:String*/ = getMyId$static(value);
    return myId ? myId + com.coremedia.personalization.ui.persona.selector.PersonaSelectorMenuItemBase.RADIO_BUTTON_NAME_SUFFIX : "";
  }/*

  //noinspection JSUnusedGlobalSymbols
  internal*/ function collapseMenu()/*:void*/ {
    this.hide();
  }/*

  //don't hide the menu when losing the focus by clicking on a not focusable components like the persona images.
  override protected*/ function onFocusLeave(e/*:Event*/)/*:void*/ {
    //do nothing
  }/*

  /**
   * Every time the menu becomes visible: all items are removed and added again.
   * /
  private*/ function menuActivated()/*:void*/ {
    this.getNoPersonaRadioBtn$pr98().hide();
    this.getItemsContainer$pr98().hide();

    this.removeAllMenuItems$pr98();

    var exeEvt/*:ExecuteEventually*/ = new com.coremedia.ui.util.ExecuteEventually(AS3.bind(this,"fillMenu$pr98"));

    this.addInitialSystemPathPersonas$pr98(exeEvt);
    this.addPluggedInSiteSpecificPersonas$pr98(exeEvt);

    exeEvt.proceed();
  }/*

  private*/ function fillMenu()/*:void*/ {
    this.on("afterlayout",AS3.bind( this,"onAfterLayout$pr98"));

    this.getNoPersonaRadioBtn$pr98().show();
    this.getItemsContainer$pr98().show();
  }/*

  private*/ function onAfterLayout()/*:void*/ {
    // Initialize 'no persona' button
    var personaActivator/*:PersonaActivator*/ = this.personaActivatorFn$pr98.call();
    if (!personaActivator.isAnyPersonaActive()) {
      this.getNoPersonaRadioBtn$pr98().setValue(true);
      if (!this.getNoPersonaRadioBtn$pr98().isHidden()) {
        this.getNoPersonaRadioBtn$pr98().focus();
      }
    }
  }/*

  private*/ function addInitialSystemPathPersonas(exeEvt/*:ExecuteEventually*/)/*:void*/ {var this$=this;
    this.initialSystemPaths$pr98.forEach(function (path/*:String*/)/*:void*/ {
      exeEvt.delay();
      new com.coremedia.personalization.ui.persona.selector.PersonaFolderObserver(path, this$.contentType$pr98).find(function (searchResult/*:SearchResult*/, folder/*:Content*/)/*:void*/ {
        if (searchResult && folder) {
          this$.addAllItemsFromSearchResult$pr98(searchResult, folder, this$.defaultGroupHeaderLabel$pr98, 0, exeEvt);
        }
        exeEvt.proceed();
      });
    });
  }/*

  private*/ function addPluggedInSiteSpecificPersonas(exeEvt/*:ExecuteEventually*/)/*:void*/ {var this$=this;
    for (var path/*:String*/ in this.additionalPaths$pr98) {
      if (this.additionalPaths$pr98.hasOwnProperty(path)) {
        var groupLabel/*:String*/ = this.additionalPaths$pr98[path];
        exeEvt.delay();
        new com.coremedia.personalization.ui.persona.selector.PersonaFolderObserver(path, this.contentType$pr98).find(function (searchResult/*:SearchResult*/, folder/*:Content*/)/*:void*/ {
          if (searchResult && folder) {
            //noinspection JSReferencingMutableVariableFromClosure
            this$.addAllItemsFromSearchResult$pr98(searchResult, folder, groupLabel, undefined, exeEvt);
          }
          exeEvt.proceed();
        });

      }
    }
  }/*

  private*/ function addAllItemsFromSearchResult(result/*:SearchResult*/, folder/*:Content*/, groupHeaderLabel/*:String*/, positionInMenu/*:Number*/, exeEvt/*:ExecuteEventually*/)/*:void*/ {var this$=this;
    var groupContainer/*:PersonaSelectorGroupContainer*/ = this.addGroupContainer$pr98(folder, groupHeaderLabel, positionInMenu);
    var maxItemsInFolder/*:int*/ = result.getHits().length;

    if (maxItemsInFolder > 0) {
      // iterate through each content
      result.getHits().forEach(function (personaContent/*:Content*/)/*:void*/ {
        exeEvt.delay();
        personaContent.load(function (bean/*:RemoteBean*/)/*:void*/ {
          this$.addProfileMenuItem$pr98(personaContent, groupContainer, maxItemsInFolder, exeEvt);
          exeEvt.proceed();
        });
      });
    }
    else {
      // tell the groupContainer that no items are inside this folder
      groupContainer.addNoPersonaItems();
    }
  }/*

  private*/ function addProfileMenuItem(personaContent/*:Content*/, groupContainer/*:PersonaSelectorGroupContainer*/, maxItemsInFolder/*:int*/, exeEvt/*:ExecuteEventually*/)/*:void*/ {
    var createItemWithItemId/*:String*/ = PERSONA_MENU_ITEM_PREFIX$static + com.coremedia.ui.util.IdUtil.parseContentId(personaContent.getId());

    // only add if there is no other component with that itemId
    if (!this.queryById(createItemWithItemId)) {

      var menuItemConfig/*:PersonaSelectorMenuItem*/ = AS3.cast(com.coremedia.personalization.ui.persona.selector.PersonaSelectorMenuItem,{});
      menuItemConfig.itemId = createItemWithItemId;
      AS3.setBindable(menuItemConfig,"entityExpression" , this.contentValueExpression$pr98);
      AS3.setBindable(menuItemConfig,"personaContent" , personaContent);
      AS3.setBindable(menuItemConfig,"previewDocumentId" , this.getNumericPreviewDocumentId$pr98());
      AS3.setBindable(menuItemConfig,"personaPopupManager" , this.getPersonaPopupManager());
      AS3.setBindable(menuItemConfig,"personaActivator" , this.personaActivatorFn$pr98());
      var menuItem/*:PersonaSelectorMenuItem*/ = new com.coremedia.personalization.ui.persona.selector.PersonaSelectorMenuItem(menuItemConfig);
      // only add menu item if the personaMenuItem is loaded
      exeEvt.delay();
      menuItem.getPersonaModel().load(function ()/*:void*/ {
        groupContainer.addPersonaMenuItemByOrder(menuItem, maxItemsInFolder);
        exeEvt.proceed();
      });
    }
  }/*

  protected*/ function getPersonaPopupManager()/*:PersonaPopupManager*/ {
    if (!this.personaPopupManagerInstance$pr98) {
      this.personaPopupManagerInstance$pr98 = new com.coremedia.personalization.ui.persona.popup.PersonaPopupManager();
    }
    return this.personaPopupManagerInstance$pr98;
  }/*

  /**
   * Add a container which groups the personas of the provided folder. The numeric folder contentId is used to identify
   * this container by itemId (prefixed by <code>GROUP_CONTAINER_ITEM_ID_PREFIX</code>)
   * @param folder
   * @param groupHeaderLabel
   * @param positionInMenu
   * /
  private*/ function addGroupContainer(folder/*:Content*/, groupHeaderLabel/*:String*/, positionInMenu/*:Number*/)/*:PersonaSelectorGroupContainer*/ {
    var menuGroupContainerConfig/*:PersonaSelectorGroupContainer*/ = AS3.cast(com.coremedia.personalization.ui.persona.selector.PersonaSelectorGroupContainer,{});
    menuGroupContainerConfig.itemId = PersonaSelectorMenuBase.GROUP_CONTAINER_ITEM_ID_PREFIX + folder["getNumericId"]();
    AS3.setBindable(menuGroupContainerConfig,"groupLabel" , groupHeaderLabel);
    AS3.setBindable(menuGroupContainerConfig,"folder" , folder);

    var menuGroupContainer/*:PersonaSelectorGroupContainer*/;
    var itemsContainer/*:Container*/ = this.getItemsContainer$pr98();

    // if a position is provided: insert the group container into this position. Otherwise just add it to the end
    menuGroupContainer = AS3.cast(com.coremedia.personalization.ui.persona.selector.PersonaSelectorGroupContainer,positionInMenu != undefined
            ? itemsContainer.insert(positionInMenu, menuGroupContainerConfig)
            : itemsContainer.add(menuGroupContainerConfig));

    return menuGroupContainer;
  }/*


  private*/ function getNumericPreviewDocumentId()/*:String*/ {
    return getMyId$static(this.contentValueExpression$pr98.getValue());
  }/*

  private static*/ function getMyId$static(value/*:**/)/*:String*/ {
    if (AS3.is(value,  com.coremedia.cap.content.Content)) {
      return '' + com.coremedia.cap.common.IdHelper.parseContentId(value);
    } else if (AS3.is(value,  com.coremedia.ui.data.RemoteBean)) {
      return AS3.cast(com.coremedia.ui.data.RemoteBean,value).getUriPath();
    }
  }/*

  /**
   * removes all personaSelectorGroupContainer from the menu
   * /
  private*/ function removeAllMenuItems()/*:void*/ {var this$=this;
    this.query(com.coremedia.ui.util.createComponentSelector()._xtype(com.coremedia.personalization.ui.persona.selector.PersonaSelectorGroupContainer.xtype).build()).forEach(function (item/*:PersonaSelectorGroupContainer*/)/*:void*/ {
      this$.getItemsContainer$pr98().remove(item, true);
    });
  }/*

  /**
   * Adds a new test-context path to the selector which is available only for specific sites.
   *
   * @param path the path to lookup for personas (if there are personas, they are added to this personaMenu)
   * @param groupHeaderLabel the label that is displayed as groupHeader inside this personaMenu
   * /
  public*/ function addAdditionalPath(path/*:String*/, groupHeaderLabel/*:String = ''*/)/*:void*/ {if(arguments.length<=1)groupHeaderLabel='';
    this.additionalPaths$pr98[path] = groupHeaderLabel || "site";
  }/*

  public*/ function clearPaths()/*:void*/ {
    this.additionalPaths$pr98 = {};
    this.initialSystemPaths$pr98 = [];
  }/*

  private*/ function getItemsContainer()/*:Container*/ {
    if (!this.itemsContainer$pr98) {
      this.itemsContainer$pr98 =AS3.as( this.queryById(PersonaSelectorMenuBase.ITEMS_CONTAINER_ITEM_ID),  Ext.container.Container);
    }
    return this.itemsContainer$pr98;
  }/*

  private*/ function getNoPersonaRadioBtn()/*:Radio*/ {
    if (!this.radioBtn$pr98) {
      this.radioBtn$pr98 =AS3.as( this.queryById(PersonaSelectorMenuBase.NO_PERSONA_RADIO_BUTTON_ITEM_ID),  Ext.form.field.Radio);
    }
    return this.radioBtn$pr98;
  }/*

  override public*/ function destroy(/*...params*/)/*:void*/ {var params=Array.prototype.slice.call(arguments);
    Ext.menu.Menu.prototype.destroy.call(this,params);
    this.personaPopupManagerInstance$pr98 && this.personaPopupManagerInstance$pr98.destroy();
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.menu.Menu",
      itemsContainer$pr98: null,
      radioBtn$pr98: null,
      contentType$pr98: null,
      defaultGroupHeaderLabel$pr98: null,
      initialSystemPaths$pr98: null,
      personaPopupManagerInstance$pr98: null,
      personaActivatorFn$pr98: null,
      contentValueExpression$pr98: null,
      constructor: PersonaSelectorMenuBase$,
      super$pr98: function() {
        Ext.menu.Menu.prototype.constructor.apply(this, arguments);
      },
      collapseMenu: collapseMenu,
      onFocusLeave: onFocusLeave,
      menuActivated$pr98: menuActivated,
      fillMenu$pr98: fillMenu,
      onAfterLayout$pr98: onAfterLayout,
      addInitialSystemPathPersonas$pr98: addInitialSystemPathPersonas,
      addPluggedInSiteSpecificPersonas$pr98: addPluggedInSiteSpecificPersonas,
      addAllItemsFromSearchResult$pr98: addAllItemsFromSearchResult,
      addProfileMenuItem$pr98: addProfileMenuItem,
      getPersonaPopupManager: getPersonaPopupManager,
      addGroupContainer$pr98: addGroupContainer,
      getNumericPreviewDocumentId$pr98: getNumericPreviewDocumentId,
      removeAllMenuItems$pr98: removeAllMenuItems,
      addAdditionalPath: addAdditionalPath,
      clearPaths: clearPaths,
      getItemsContainer$pr98: getItemsContainer,
      getNoPersonaRadioBtn$pr98: getNoPersonaRadioBtn,
      destroy: destroy,
      statics: {
        ITEMS_CONTAINER_ITEM_ID: "menuItems",
        GROUP_CONTAINER_ITEM_ID_PREFIX: "groupContainer-",
        NO_PERSONA_RADIO_BUTTON_ITEM_ID: "noPersonaRadioButton",
        transformToNumericId: transformToNumericId$static
      },
      requires: [
        "Ext.container.Container",
        "Ext.form.field.Radio",
        "Ext.menu.Menu",
        "com.coremedia.cap.common.IdHelper",
        "com.coremedia.cap.content.Content",
        "com.coremedia.ui.data.RemoteBean",
        "com.coremedia.ui.util.ExecuteEventually",
        "com.coremedia.ui.util.IdUtil",
        "com.coremedia.ui.util.createComponentSelector"
      ],
      uses: [
        "com.coremedia.personalization.ui.persona.popup.PersonaPopupManager",
        "com.coremedia.personalization.ui.persona.selector.PersonaFolderObserver",
        "com.coremedia.personalization.ui.persona.selector.PersonaSelectorBase",
        "com.coremedia.personalization.ui.persona.selector.PersonaSelectorGroupContainer",
        "com.coremedia.personalization.ui.persona.selector.PersonaSelectorMenuItem",
        "com.coremedia.personalization.ui.persona.selector.PersonaSelectorMenuItemBase"
      ]
    };
});
