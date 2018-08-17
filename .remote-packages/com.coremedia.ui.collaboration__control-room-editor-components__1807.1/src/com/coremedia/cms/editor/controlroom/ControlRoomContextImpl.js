Ext.define("com.coremedia.cms.editor.controlroom.ControlRoomContextImpl", function(ControlRoomContextImpl) {/*package com.coremedia.cms.editor.controlroom {
import com.coremedia.cms.editor.controlroom.workflow.TabbedWorkflowPanel;
import com.coremedia.cms.editor.sdk.desktop.sidepanel.sidePanelManager;
import com.coremedia.ui.data.dependencies.DependencyTracker;
import com.coremedia.ui.util.ConcurrentUtil;

import ext.panel.Panel;

import joo.getOrCreatePackage;

/**
 * Helper class with static methods to access control room panels.
 * /
public class ControlRoomContextImpl implements IControlRoomContext {

  private static*/ var _controlRoom$static/*:ControlRoom*/=null;/*
  private static*/ var _editedContentPanel$static/*:EditedContentGridPanel*/=null;/*
  private static*/ var _projectPanel$static/*:ProjectsPanel*/=null;/*
  private static*/ var _publicationWorkflowPanel$static/*:TabbedWorkflowPanel*/=null;/*
  private static*/ var _translationWorkflowPanel$static/*:TabbedWorkflowPanel*/=null;/*

  private static*/ var _callbacks$static/*:Array*/;/* =*/function _callbacks$static_(){_callbacks$static=( []);};/*

  [ArrayElementType("ext.grid.column.Column")]
  private var projectListViewColumns:Array;

  private var filterWFObjectsRequestBatchSize:int;

  public static*/ function initControlRoomContext$static()/*:void*/ {
    if (!com.coremedia.cms.editor.controlroom.controlRoomContext) {
      joo.getOrCreatePackage("com.coremedia.cms.editor.controlroom").controlRoomContext = new ControlRoomContextImpl();
      _callbacks$static = [];
    }
  }/*

  public*/ function getControlRoom(show/*:Boolean = false*/, create/*:Boolean = true*/)/*:ControlRoom*/ {switch(arguments.length){case 0:show=false;case 1:create=true;}
    if (!_controlRoom$static) {
      if (create) {
        _controlRoom$static =AS3.as( com.coremedia.cms.editor.sdk.desktop.sidepanel.sidePanelManager.getOrCreateComponent(com.coremedia.cms.editor.controlroom.ControlRoom.CONTROL_ROOM_ID),  com.coremedia.cms.editor.controlroom.ControlRoom);
      } else {
        _controlRoom$static =AS3.as( com.coremedia.cms.editor.sdk.desktop.sidepanel.sidePanelManager.getComponent(com.coremedia.cms.editor.controlroom.ControlRoom.CONTROL_ROOM_ID),  com.coremedia.cms.editor.controlroom.ControlRoom);
      }
    }

    if (_controlRoom$static && show) {
      _controlRoom$static.up().updateLayout();
      if (!_controlRoom$static.isVisible(true)) {
        _controlRoom$static.show();
      }
    }

    if (_controlRoom$static && _callbacks$static.length > 0) {
      var callbacks/*:Array*/ = _callbacks$static;
      _callbacks$static = [];
      callbacks.forEach(function(callback/*:Function*/)/*:void*/ {
        callback();
      });
    }
    return _controlRoom$static;
  }/*

  public*/ function getEditedContentPanel(show/*:Boolean = false*/, expand/*:Boolean = false*/)/*:EditedContentGridPanel*/ {switch(arguments.length){case 0:show=false;case 1:expand=false;}
    if (!_editedContentPanel$static) {
      var controlRoom/*:ControlRoom*/ = this.getControlRoom(show);
      _editedContentPanel$static = AS3.cast(com.coremedia.cms.editor.controlroom.EditedContentGridPanel,findControlRoomPanel$static(controlRoom, com.coremedia.cms.editor.controlroom.ControlRoom.EDITED_CONTENT_PANEL_ID));
    }
    this.expandControlRoomPanel$oofJ(_editedContentPanel$static, show, expand);
    return _editedContentPanel$static;
  }/*

  public*/ function getProjectPanel(show/*:Boolean = false*/, expand/*:Boolean = false*/)/*:ProjectsPanel*/ {switch(arguments.length){case 0:show=false;case 1:expand=false;}
    if (!_projectPanel$static) {
      var controlRoom/*:ControlRoom*/ = this.getControlRoom(show);
      _projectPanel$static = AS3.cast(com.coremedia.cms.editor.controlroom.ProjectsPanel,findControlRoomPanel$static(controlRoom, com.coremedia.cms.editor.controlroom.ControlRoom.PROJECTS_PANEL_ID));
    }
    this.expandControlRoomPanel$oofJ(_projectPanel$static, show, expand);
    return _projectPanel$static;
  }/*

  public*/ function getPublicationWfPanel(show/*:Boolean = false*/, expand/*:Boolean = false*/)/*:TabbedWorkflowPanel*/ {switch(arguments.length){case 0:show=false;case 1:expand=false;}
    if (!_publicationWorkflowPanel$static) {
      var controlRoom/*:ControlRoom*/ = this.getControlRoom(show);
      _publicationWorkflowPanel$static = AS3.cast(com.coremedia.cms.editor.controlroom.workflow.TabbedWorkflowPanel,findControlRoomPanel$static(controlRoom, com.coremedia.cms.editor.controlroom.ControlRoom.PUBLICATION_WORKFLOW_PANEL_ID));
    }
    this.expandControlRoomPanel$oofJ(_publicationWorkflowPanel$static, show, expand);
    return _publicationWorkflowPanel$static;
  }/*

  public*/ function getTranslationWfPanel(show/*:Boolean = false*/, expand/*:Boolean = false*/)/*:TabbedWorkflowPanel*/ {switch(arguments.length){case 0:show=false;case 1:expand=false;}
    if (!_translationWorkflowPanel$static) {
      var controlRoom/*:ControlRoom*/ = this.getControlRoom(show);
      _translationWorkflowPanel$static = AS3.cast(com.coremedia.cms.editor.controlroom.workflow.TabbedWorkflowPanel,findControlRoomPanel$static(controlRoom, com.coremedia.cms.editor.controlroom.ControlRoom.TRANSLATION_WORKFLOW_PANEL_ID));
    }
    this.expandControlRoomPanel$oofJ(_translationWorkflowPanel$static, show, expand);
    return _translationWorkflowPanel$static;
  }/*

  private*/ function expandControlRoomPanel(panel/*:Panel*/, show/*:Boolean*/, expand/*:Boolean*/)/*:void*/ {
    var controlRoom/*:ControlRoom*/ = this.getControlRoom(show);
    if (expand && AS3.getBindable(panel,"collapsed","DUMMY")) {
      com.coremedia.ui.util.ConcurrentUtil.executeWhen(function ()/*:Boolean*/ {
        com.coremedia.ui.data.dependencies.DependencyTracker.dependOnObservable(controlRoom, "afterrender");
        return controlRoom.rendered;
      }, function ()/*:void*/ {
        if (expand) {
          panel.expand(false);
        }
      });
    }
  }/*

  private static*/ function findControlRoomPanel$static(controlRoom/*:ControlRoom*/, panelItemId/*:String*/)/*:Panel*/ {
    return AS3.as( controlRoom.queryById(panelItemId),  Ext.panel.Panel);
  }/*

  public*/ function getProjectListViewColumns()/*:Array*/ {
    return this.projectListViewColumns$oofJ || [];
  }/*

  public*/ function setProjectListViewColumns(columns/*:Array*/)/*:void*/ {
    this.projectListViewColumns$oofJ = columns;
  }/*

  public*/ function addCallback(callback/*:Function*/)/*:void*/ {
    _callbacks$static.push(callback);
  }/*

  public*/ function getFilterWFObjectsRequestBatchSize()/*:int*/ {
    return this.filterWFObjectsRequestBatchSize$oofJ;
  }/*

  public*/ function setFilterWFObjectsRequestBatchSize(batchSize/*:int*/)/*:void*/ {
    this.filterWFObjectsRequestBatchSize$oofJ = batchSize;
  }/*
}*/function ControlRoomContextImpl$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.cms.editor.controlroom.IControlRoomContext"],
      projectListViewColumns$oofJ: null,
      filterWFObjectsRequestBatchSize$oofJ: 0,
      getControlRoom: getControlRoom,
      getEditedContentPanel: getEditedContentPanel,
      getProjectPanel: getProjectPanel,
      getPublicationWfPanel: getPublicationWfPanel,
      getTranslationWfPanel: getTranslationWfPanel,
      expandControlRoomPanel$oofJ: expandControlRoomPanel,
      getProjectListViewColumns: getProjectListViewColumns,
      setProjectListViewColumns: setProjectListViewColumns,
      addCallback: addCallback,
      getFilterWFObjectsRequestBatchSize: getFilterWFObjectsRequestBatchSize,
      setFilterWFObjectsRequestBatchSize: setFilterWFObjectsRequestBatchSize,
      constructor: ControlRoomContextImpl$,
      statics: {
        _callbacks: undefined,
        initControlRoomContext: initControlRoomContext$static,
        __initStatics__: function() {
          _callbacks$static_();
        }
      },
      requires: [
        "Ext.panel.Panel",
        "com.coremedia.cms.editor.controlroom.IControlRoomContext",
        "com.coremedia.cms.editor.sdk.desktop.sidepanel.sidePanelManager",
        "com.coremedia.ui.data.dependencies.DependencyTracker",
        "com.coremedia.ui.util.ConcurrentUtil"
      ],
      uses: [
        "com.coremedia.cms.editor.controlroom.ControlRoom",
        "com.coremedia.cms.editor.controlroom.EditedContentGridPanel",
        "com.coremedia.cms.editor.controlroom.ProjectsPanel",
        "com.coremedia.cms.editor.controlroom.controlRoomContext",
        "com.coremedia.cms.editor.controlroom.workflow.TabbedWorkflowPanel"
      ]
    };
});
