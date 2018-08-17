Ext.define("com.coremedia.cms.editor.controlroom.project.components.ProjectContentContainerBase", function(ProjectContentContainerBase) {/*package com.coremedia.cms.editor.controlroom.project.components {
import com.coremedia.cap.content.ContentTypeNames;
import com.coremedia.cms.editor.controlroom.project.rest.Project;
import com.coremedia.cms.editor.sdk.collectionview.SearchState;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.ui.data.BeanPropertyValueHolder;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.util.EventUtil;

import ext.Component;
import ext.container.Container;
import ext.data.Store;
import ext.dd.DropZone;
import ext.grid.GridPanel;
import ext.util.Collection;
import ext.view.DataView;

public class ProjectContentContainerBase extends Container {
  private static const*/var SORT_COLUMN_ID$static/*:String*/ = "_id";/*
  private static const*/var SORT_DIRECTION_ID$static/*:String*/ = "_direction";/*


  [Bindable]
  public var project:Project;

  [Bindable]
  public var listOrThumbsViewVE:ValueExpression;

  [Bindable]
  public var selectedItemsVE:ValueExpression;

  private var projectContentVE:ValueExpression;
  private var projectContentsDropZone:ProjectContentsDropZone;
  private var listViewStore:Store;
  private var thumbViewStore:Store;
  private var isSortDisabled:Boolean;
  private var previousSelectedItems:Array;

  public*/ function ProjectContentContainerBase$(config/*:ProjectContentContainerBase = null*/) {if(arguments.length<=0)config=null;
    this.super$PGdh(config);

    this.thumbViewStore$PGdh = this.findThumbViewStore$PGdh();
    this.thumbViewStore$PGdh.on("load",AS3.bind( this,"thumbViewLoaded$PGdh"));
    this.thumbViewStore$PGdh.on("datachanged",AS3.bind( this,"thumbViewChanged$PGdh"));

    this.listViewStore$PGdh = this.findListViewStore$PGdh();
    this.listViewStore$PGdh.on("load",AS3.bind( this,"listViewLoaded$PGdh"));
    this.listViewStore$PGdh.on("datachanged",AS3.bind( this,"listViewChanged$PGdh"));

    this.addListener("afterrender",AS3.bind( this,"setupFolderContentDropZone$PGdh"));
  }/*

  protected*/ function getProjectContentVE(config/*:ProjectContentContainerBase*/)/*:ValueExpression*/ {
    if (!this.projectContentVE$PGdh) {
      this.projectContentVE$PGdh = com.coremedia.ui.data.ValueExpressionFactory.createFromValueHolder(new com.coremedia.ui.data.BeanPropertyValueHolder(AS3.getBindable(config,"project"), "contents", true));
    }
    return this.projectContentVE$PGdh;
  }/*

  private*/ function findListViewStore()/*:Store*/ {
    return (AS3.as(this.queryById(com.coremedia.cms.editor.controlroom.project.components.ProjectContentContainer.LIST_VIEW_ITEM_ID),  Ext.grid.Panel)).getStore();
  }/*

  private*/ function findThumbViewStore()/*:Store*/ {
    return AS3.as( (AS3.as(this.queryById(com.coremedia.cms.editor.controlroom.project.components.ProjectContentThumbView.THUMB_DATA_VIEW_ITEM_ID),  Ext.view.View)).getStore(),  Ext.data.Store);
  }/*

  private*/ function thumbViewLoaded()/*:void*/ {
    this.sortStore$PGdh(this.thumbViewStore$PGdh);
  }/*

  private*/ function thumbViewChanged()/*:void*/ {
    this.sortStore$PGdh(this.listViewStore$PGdh);
  }/*

  private*/ function listViewLoaded()/*:void*/ {
    this.sortStore$PGdh(this.listViewStore$PGdh);
  }/*

  private*/ function listViewChanged()/*:void*/ {
    this.sortStore$PGdh(this.thumbViewStore$PGdh);
  }/*

  private*/ function sortStore(store/*:Store*/)/*:void*/ {var this$=this;
    if (!this.isSortDisabled$PGdh) {
      try {
        this.previousSelectedItems$PGdh = AS3.getBindable(this,"selectedItemsVE").getValue() || [];
        this.isSortDisabled$PGdh = true;
        var sorters/*:Collection*/ = this.listViewStore$PGdh.getSorters();
        if (sorters && sorters.length > 0) {
          var listViewSortState/*:Object*/ = sorters.getAt(0);
          if (listViewSortState) {
            var listViewSortField/*:String*/ = listViewSortState[SORT_COLUMN_ID$static];
            var listViewSortDir/*:String*/ = listViewSortState[SORT_DIRECTION_ID$static];

            if (listViewSortField) {
              store.sort(listViewSortField, listViewSortDir);
            }
          }
        }
      } finally {
        this.isSortDisabled$PGdh = false;
      }
    } else if (this.previousSelectedItems$PGdh) {
      com.coremedia.ui.util.EventUtil.invokeLater(function ()/*:void*/ {
        AS3.getBindable(this$,"selectedItemsVE").setValue(this$.previousSelectedItems$PGdh);
      });
    }
  }/*

  private*/ function setupFolderContentDropZone()/*:void*/ {
    var dropZoneConfig/*:DropZone*/ = AS3.cast(Ext.dd.DropZone,{
      ddGroup: "ContentLinkDD"
    });
    this.projectContentsDropZone$PGdh = new com.coremedia.cms.editor.controlroom.project.components.ProjectContentsDropZone(AS3.as(
            this.queryById(com.coremedia.cms.editor.controlroom.project.components.ProjectContentContainer.SWITCHING_CONTAINER_ITEM_ID),  Ext.Component),
            new com.coremedia.cms.editor.controlroom.project.components.ProjectContentsDragDropModel(AS3.getBindable(this,"project")),
            dropZoneConfig,AS3.bind(
            this,"customGetTargetFromEvent$PGdh"),AS3.bind(
            this,"getActiveStore"),
            AS3.getBindable(this,"selectedItemsVE"));
    this.projectContentsDropZone$PGdh.addToGroup("ContentDD");
  }/*

  override protected*/ function beforeDestroy()/*:void*/ {
    this.projectContentsDropZone$PGdh && this.projectContentsDropZone$PGdh.unreg();
    Ext.container.Container.prototype.beforeDestroy.call(this);
  }/*

  public*/ function getActiveStore()/*:Store*/ {
    var listOrThumbView/*:String*/ = AS3.getBindable(this,"listOrThumbsViewVE").getValue();
    if (listOrThumbView === com.coremedia.cms.editor.controlroom.project.components.ProjectContentContainer.THUMB_VIEW_ITEM_ID) {
      return this.thumbViewStore$PGdh;
    } else if (listOrThumbView === com.coremedia.cms.editor.controlroom.project.components.ProjectContentContainer.LIST_VIEW_ITEM_ID) {
      return this.listViewStore$PGdh;
    }
    return undefined;
  }/*

  protected static*/ function dropAreaHandler$static(searchTerm/*:String*/)/*:void*/ {
    var searchState/*:SearchState*/ = null;
    searchState = new com.coremedia.cms.editor.sdk.collectionview.SearchState();
    searchState.contentType = com.coremedia.cap.content.ContentTypeNames.DOCUMENT;
    if (searchTerm) {
      var prefixSearch/*:Boolean*/ = searchTerm.length >= 3 && searchTerm.charAt(searchTerm.length - 1) !== ' ';
      searchState.searchText = prefixSearch ? searchTerm + '*' : searchTerm;
    }
    com.coremedia.cms.editor.sdk.editorContext.getCollectionViewManager().openSearch(searchState);
  }/*

  private*/ function customGetTargetFromEvent()/*:Object*/ {
    return {
      node: {
        id: AS3.getBindable(this,"project").getId()
      }
    };
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.container.Container",
      projectContentVE$PGdh: null,
      projectContentsDropZone$PGdh: null,
      listViewStore$PGdh: null,
      thumbViewStore$PGdh: null,
      isSortDisabled$PGdh: false,
      previousSelectedItems$PGdh: null,
      constructor: ProjectContentContainerBase$,
      super$PGdh: function() {
        Ext.container.Container.prototype.constructor.apply(this, arguments);
      },
      getProjectContentVE: getProjectContentVE,
      findListViewStore$PGdh: findListViewStore,
      findThumbViewStore$PGdh: findThumbViewStore,
      thumbViewLoaded$PGdh: thumbViewLoaded,
      thumbViewChanged$PGdh: thumbViewChanged,
      listViewLoaded$PGdh: listViewLoaded,
      listViewChanged$PGdh: listViewChanged,
      sortStore$PGdh: sortStore,
      setupFolderContentDropZone$PGdh: setupFolderContentDropZone,
      beforeDestroy: beforeDestroy,
      getActiveStore: getActiveStore,
      customGetTargetFromEvent$PGdh: customGetTargetFromEvent,
      config: {
        project: null,
        listOrThumbsViewVE: null,
        selectedItemsVE: null
      },
      statics: {dropAreaHandler: dropAreaHandler$static},
      requires: [
        "Ext.Component",
        "Ext.container.Container",
        "Ext.data.Store",
        "Ext.dd.DropZone",
        "Ext.grid.Panel",
        "Ext.view.View",
        "com.coremedia.cap.content.ContentTypeNames",
        "com.coremedia.cms.editor.sdk.collectionview.SearchState",
        "com.coremedia.cms.editor.sdk.editorContext",
        "com.coremedia.ui.data.BeanPropertyValueHolder",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.util.EventUtil"
      ],
      uses: [
        "com.coremedia.cms.editor.controlroom.project.components.ProjectContentContainer",
        "com.coremedia.cms.editor.controlroom.project.components.ProjectContentThumbView",
        "com.coremedia.cms.editor.controlroom.project.components.ProjectContentsDragDropModel",
        "com.coremedia.cms.editor.controlroom.project.components.ProjectContentsDropZone"
      ]
    };
});
