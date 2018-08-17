Ext.define("com.coremedia.cms.editor.controlroom.ProjectsPanelBase", function(ProjectsPanelBase) {/*package com.coremedia.cms.editor.controlroom {

import com.coremedia.cms.editor.controlroom.dd.ProjectsPanelDropZone;
import com.coremedia.cms.editor.controlroom.project.ProjectHelper;
import com.coremedia.cms.editor.controlroom.project.rest.Project;
import com.coremedia.cms.editor.controlroom.project.rest.impl.ProjectRepositoryImpl;
import com.coremedia.cms.editor.sdk.columns.grid.NameColumn;
import com.coremedia.ui.components.CustomEditorGrid;
import com.coremedia.ui.data.RemoteBeanUtil;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.data.dependencies.DependencyTracker;
import com.coremedia.ui.store.BeanRecord;
import com.coremedia.ui.util.ConcurrentUtil;
import com.coremedia.ui.util.DraggableItemsUtils;
import com.coremedia.ui.util.EventUtil;

import ext.Ext;
import ext.StringUtil;
import ext.data.Model;
import ext.data.Store;
import ext.dd.DragZone;
import ext.dd.DropZone;
import ext.dom.Element;
import ext.event.Event;
import ext.grid.column.Column;
import ext.grid.plugin.GridViewDragDropPlugin;
import ext.selection.RowSelectionModel;

import js.HTMLElement;

import mx.resources.ResourceManager;

[ResourceBundle('com.coremedia.cms.editor.controlroom.ControlRoom')]
public class ProjectsPanelBase extends CustomEditorGrid {

  public static const DRAG_DROP_PLUGIN_ID:String = "dragdrop";

  private var projectsVE:ValueExpression;
  private var selectedProjectsVE:ValueExpression;
  private var selectedContentsVE:ValueExpression;
  private var workflowNameVE:ValueExpression;

  private var projectsPanelHeaderDropZone:ProjectsPanelDropZone;
  private var projectsPanelDropZone:ProjectsPanelDropZone;

  private var ddPlugin:GridViewDragDropPlugin;

  public*/ function ProjectsPanelBase$(config/*:ProjectsPanel = null*/) {if(arguments.length<=0)config=null;
    this.super$kXa$(config);
  }/*

  override protected*/ function initComponent()/*:void*/ {var this$=this;
    com.coremedia.ui.components.CustomEditorGrid.prototype.initComponent.call(this);
    this.on("rowdblclick",AS3.bind( this,"handleDblClick$kXa$"));
    this.on("afterrender", function ()/*:void*/ {
      this$.initDragAndDrop$kXa$();
    });
  }/*

  override protected*/ function beforeDestroy()/*:void*/ {
    this.removeDragAndDrop$kXa$();
    com.coremedia.ui.components.CustomEditorGrid.prototype.beforeDestroy.call(this);
  }/*

  public*/ function setSelectedProjects(projects/*:Array*/)/*:void*/ {
    this.getSelectedProjectsVE().setValue(projects);
  }/*

  public*/ function startRenameProject(project/*:Project*/, onSuccess/*:Function*/)/*:void*/ {var this$=this;
    var storeIndex/*:int*/ = -1;
    com.coremedia.ui.util.ConcurrentUtil.executeWhen(function ()/*:Boolean*/ {
      var store/*:Store*/ = this$.getStore();
      com.coremedia.ui.data.dependencies.DependencyTracker.dependOnObservable(store, "update");
      com.coremedia.ui.data.dependencies.DependencyTracker.dependOnObservable(store, "add");

      var projectsOfSessionUser/*:Array*/ = com.coremedia.cms.editor.controlroom.project.rest.impl.ProjectRepositoryImpl.getInstance().getProjectsOfSessionUser();
      storeIndex = store.findBy(function (record/*:Model*/)/*:Boolean*/ {
        var beanRecord/*:BeanRecord*/ =AS3.as( record,  com.coremedia.ui.store.BeanRecord);
        if (beanRecord) {
          // bean has to match and data must be filled
          return beanRecord.getBean() === project && beanRecord.get("name") === project.getName();
        }
        return false;
      });

      return projectsOfSessionUser && projectsOfSessionUser.indexOf(project) > -1 && com.coremedia.ui.data.RemoteBeanUtil.isAccessible(project) && storeIndex > -1;
    }, function ()/*:void*/ {
      var rowSelectionModel/*:RowSelectionModel*/ = (AS3.as(this$.getSelectionModel(),  Ext.selection.RowModel));
      if (storeIndex > -1 && rowSelectionModel) {
        rowSelectionModel.select(storeIndex);
        var row/*:HTMLElement*/ = this$.getView().getRow(storeIndex);
        var column/*:Column*/ = this$.getColumns().filter(function (col/*:Column*/)/*:Boolean*/ {return AS3.is( col,  com.coremedia.cms.editor.sdk.columns.grid.NameColumn);})[0];
        row && column && this$.forceStartEditing(row, column);
        onSuccess();
      }
    });
  }/*

  protected*/ function getProjectsVE()/*:ValueExpression*/ {
    if (!this.projectsVE$kXa$) {
      this.projectsVE$kXa$ = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:Array*/ {
        var projectsOfSessionUser/*:Array*/ = com.coremedia.cms.editor.controlroom.project.rest.impl.ProjectRepositoryImpl.getInstance().getProjectsOfSessionUser();
        // make sure projects and their content list (separate remote bean) are loaded before adding the project to
        // the grid. otherwise with bad timing the drag operation relying on content could be started without knowing
        // which contents are to drag
        if (projectsOfSessionUser && projectsOfSessionUser.every(function (project/*:Project*/)/*:Boolean*/ {
          return com.coremedia.ui.data.RemoteBeanUtil.isAccessible(project);
        })) {
          return projectsOfSessionUser;
        }
        return undefined;
      });
    }
    return this.projectsVE$kXa$;
  }/*

  protected*/ function getSelectedProjectsVE()/*:ValueExpression*/ {
    if (!this.selectedProjectsVE$kXa$) {
      this.selectedProjectsVE$kXa$ = com.coremedia.ui.data.ValueExpressionFactory.createFromValue([]);
    }
    return this.selectedProjectsVE$kXa$;
  }/*

  protected*/ function getSelectedContentsVE()/*:ValueExpression*/ {var this$=this;
    if (!this.selectedContentsVE$kXa$) {
      this.selectedContentsVE$kXa$ = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:Array*/ {
        var allContents/*:Array*/ = [];
        var projects/*:Array*/ =this$.getSelectedProjectsVE().getValue();
        if (!projects || !projects.every(function (project/*:Project*/)/*:Boolean*/ {
                  if (!com.coremedia.ui.data.RemoteBeanUtil.isAccessible(project)) {
                    return false;
                  }
                  var contents/*:Array*/ = project.getContents();
                  if (!contents) {
                    return false;
                  }
                  allContents = allContents.concat(contents);
                  return true;
                })) {
          return undefined;
        }
        return allContents;
      });
    }
    return this.selectedContentsVE$kXa$;
  }/*

  protected*/ function getWorkflowNameVE()/*:ValueExpression*/ {var this$=this;
    if (!this.workflowNameVE$kXa$) {
      this.workflowNameVE$kXa$ = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:String*/ {
        var value/*:Array*/ = this$.getSelectedProjectsVE().getValue();
        return value && value.length === 1 ? value[0].getName() : undefined;
      });
    }
    return this.workflowNameVE$kXa$;
  }/*

  /**
   * Needed for e.g. drag operations a the initDrag function is called immediately after the click. The ValueExpression
   * containing the current selection is changed asynchronously.
   *
   * @return the selected projects based on the selection model of the editor grid
   * /
  private*/ function getSelectedProjectsFromSelectionModel()/*:Array*/ {
    var selectedProjects/*:Array*/ = [];
    var rowSelectionModel/*:RowSelectionModel*/ = (AS3.as(this.getSelectionModel(),  Ext.selection.RowModel));
    rowSelectionModel.getSelection().forEach(function (record/*:Model*/)/*:void*/ {
      var beanRecord/*:BeanRecord*/ =AS3.as( record,  com.coremedia.ui.store.BeanRecord);
      var project/*:Project*/ =AS3.as( beanRecord.getBean(),  com.coremedia.cms.editor.controlroom.project.rest.Project);
      if (project) {
        selectedProjects.push(project);
      }
    });
    return selectedProjects;
  }/*


  private*/ function initDragAndDrop()/*:void*/ {var this$=this;

    // drag zone
    this.ddPlugin$kXa$ =AS3.as( this.getView().getPlugin(ProjectsPanelBase.DRAG_DROP_PLUGIN_ID),  Ext.grid.plugin.DragDrop);
    var dragZone/*:DragZone*/ = this.ddPlugin$kXa$.dragZone;
    //TODO: EXT6_API
    dragZone['getDragText'] =AS3.bind( this,"getDragText$kXa$");
    dragZone.addToGroup("ContentDD");

    var originalGetDragData/*:Function*/ = dragZone['getDragData'];
    dragZone.getDragData = function (e/*:Event*/)/*:Object*/ {
      var dragData/*:Object*/ = originalGetDragData.call(dragZone, e); //NOSONAR
      dragData.repairXY = Ext.get(e.getTarget(".x-grid-item-container")).getXY();

      var selectedProjects/*:Array*/ = this$.getSelectedProjectsFromSelectionModel$kXa$();

      // Determine contents temporarily and put them in drag data.
      // If contents need to be determined asynchronously, drag data will be updated later on.
      var contents/*:Array*/ = com.coremedia.cms.editor.controlroom.project.ProjectHelper.loadContents(selectedProjects,AS3.bind( this$,"updateDDAfterContentsLoaded$kXa$"));

      dragData.contents = contents;
      dragData.projects = selectedProjects;

      return dragData;
    };

    dragZone.getRepairXY = function (e/*:Event*/)/*:Array*/ {
      return dragZone.dragData.repairXY;
    };

    // drop zone
    var dropZoneConfig/*:DropZone*/ = AS3.cast(Ext.dd.DropZone,{
       ddGroup: AS3.getBindable(this,"ddGroup","DUMMY")
    });

    // drop zone over Content Set Panel header
    this.projectsPanelHeaderDropZone$kXa$ = new com.coremedia.cms.editor.controlroom.dd.ProjectsPanelDropZone(this.header.getEl(), this, dropZoneConfig);
    this.projectsPanelHeaderDropZone$kXa$.addToGroup("ContentDD");
    this.projectsPanelHeaderDropZone$kXa$.addToGroup("ContentLinkDD");

    // drop zone over Content Set Panel
    this.projectsPanelDropZone$kXa$ = new com.coremedia.cms.editor.controlroom.dd.ProjectsPanelDropZone(this.el, this, dropZoneConfig);
    this.projectsPanelDropZone$kXa$.addToGroup("ContentDD");
    this.projectsPanelDropZone$kXa$.addToGroup("ContentLinkDD");
  }/*

  private*/ function updateDDAfterContentsLoaded()/*:void*/ {
    // (1) Remove load mask
    var ddel/*:Element*/ = Ext.get(this.ddPlugin$kXa$.dragZone.getDragEl());
    if (ddel && ddel.isVisible()) {
      var ddelIconEl/*:Element*/ = ddel.down(".project-icon-wrapper");


        ddelIconEl && ddelIconEl.unmask();

    }

    var selectedProjects/*:Array*/ = this.getSelectedProjectsFromSelectionModel$kXa$();
    var contents/*:Array*/ = com.coremedia.cms.editor.controlroom.project.ProjectHelper.getContents(selectedProjects);

    var dragZone/*:DragZone*/ = this.ddPlugin$kXa$.dragZone;

    // (2) update contents in drag date
    dragZone.dragData.contents = contents;

    // (3) update drag text
    var dragEl/*:HTMLElement*/ = dragZone["ddel"];
    dragEl.innerHTML = getHtmlFeedbackForProjectsAndContents$static(selectedProjects, contents);
    dragZone.getProxy().update(dragEl);
  }/*

  private*/ function removeDragAndDrop()/*:void*/ {
    this.projectsPanelDropZone$kXa$ && this.projectsPanelDropZone$kXa$.unreg();
    this.projectsPanelHeaderDropZone$kXa$ && this.projectsPanelHeaderDropZone$kXa$.unreg();
  }/*

  private*/ function getDragText()/*:String*/ {
    var projects/*:Array*/ = this.getSelectedProjectsFromSelectionModel$kXa$();

    // Determine contents temporarily and compute drag text on this basis.
    // If contents need to be determined asynchronously, drag text will be updated later on.
    var contents/*:Array*/ = com.coremedia.cms.editor.controlroom.project.ProjectHelper.loadContents(projects,AS3.bind( this,"updateDDAfterContentsLoaded$kXa$"));

    // mask the ddel, remove mask in updateDDAfterContentsLoaded()
    !contents && this.maskDDEl$kXa$();

    return getHtmlFeedbackForProjectsAndContents$static(projects, contents);
  }/*

  private*/ function maskDDEl()/*:void*/ {
    var ddel/*:Element*/ = Ext.get(this.ddPlugin$kXa$.dragZone.getDragEl());

    if (ddel && ddel.isVisible()) {
      var ddelIconEl/*:Element*/ = ddel.down(".project-icon-wrapper");

      if (ddelIconEl) {
        ddelIconEl.mask("", 'icon-button-mask');
      } else {
        com.coremedia.ui.util.EventUtil.invokeLater(AS3.bind(this,"getDragText$kXa$"));
      }
    }
  }/*

  private*/ function handleDblClick()/*:void*/ {
    this.handleProjectSelection$kXa$(function (selected/*:BeanRecord*/, project/*:Project*/)/*:void*/ {
      com.coremedia.cms.editor.controlroom.project.ProjectHelper.openProjectInTab(project);
    });
  }/*

  private*/ function handleProjectSelection(handler/*:Function*/)/*:void*/ {
    var selectionModel/*:RowSelectionModel*/ =AS3.as( this.getSelectionModel(),  Ext.selection.RowModel);
    if (selectionModel) {
      var selection/*:Array*/ = selectionModel.getSelection();
      if (selection && selection.length > 0) {
        var record/*:BeanRecord*/ =AS3.as( selection[0],  com.coremedia.ui.store.BeanRecord);
        var project/*:Project*/ =AS3.as( record.getBean(),  com.coremedia.cms.editor.controlroom.project.rest.Project);
        if (project) {
          handler(record, project);
        }
      }
    }
  }/*

  private static*/ function getHtmlFeedbackForProjectsAndContents$static(projects/*:Array*/, contents/*:Array*/)/*:String*/ {
    var text/*:String*/;
    if (projects.length === 1) {
      var project/*:Project*/ =AS3.as( projects[0],  com.coremedia.cms.editor.controlroom.project.rest.Project);
      if (contents === undefined) {
        text = mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'ProjectsPanel_drag_computing_drag_data');
      } else if (contents.length === 1) {
        text = Ext.String.format(mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'ProjectsPanel_drag_singleselect_text_single_content'), project.getName());
      } else {
        text = Ext.String.format(mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'ProjectsPanel_drag_singleselect_text_multiple_contents'), project.getName(), contents.length);
      }
    } else {
      if (contents === undefined) {
        text = mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'ProjectsPanel_drag_computing_drag_data');
      } else if (contents.length === 1) {
        text = Ext.String.format(mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'ProjectsPanel_drag_multiselect_text_single_content'), projects.length);
      } else {
        text = Ext.String.format(mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'ProjectsPanel_drag_multiselect_text_multiple_contents'), projects.length, contents.length);
      }
    }
    return com.coremedia.ui.util.DraggableItemsUtils.DRAG_GHOST_TEMPLATE.apply({
      title: text,
      icon : mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'Projects_icon')
    });
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.components.CustomEditorGrid",
      projectsVE$kXa$: null,
      selectedProjectsVE$kXa$: null,
      selectedContentsVE$kXa$: null,
      workflowNameVE$kXa$: null,
      projectsPanelHeaderDropZone$kXa$: null,
      projectsPanelDropZone$kXa$: null,
      ddPlugin$kXa$: null,
      constructor: ProjectsPanelBase$,
      super$kXa$: function() {
        com.coremedia.ui.components.CustomEditorGrid.prototype.constructor.apply(this, arguments);
      },
      initComponent: initComponent,
      beforeDestroy: beforeDestroy,
      setSelectedProjects: setSelectedProjects,
      startRenameProject: startRenameProject,
      getProjectsVE: getProjectsVE,
      getSelectedProjectsVE: getSelectedProjectsVE,
      getSelectedContentsVE: getSelectedContentsVE,
      getWorkflowNameVE: getWorkflowNameVE,
      getSelectedProjectsFromSelectionModel$kXa$: getSelectedProjectsFromSelectionModel,
      initDragAndDrop$kXa$: initDragAndDrop,
      updateDDAfterContentsLoaded$kXa$: updateDDAfterContentsLoaded,
      removeDragAndDrop$kXa$: removeDragAndDrop,
      getDragText$kXa$: getDragText,
      maskDDEl$kXa$: maskDDEl,
      handleDblClick$kXa$: handleDblClick,
      handleProjectSelection$kXa$: handleProjectSelection,
      statics: {DRAG_DROP_PLUGIN_ID: "dragdrop"},
      requires: [
        "Ext",
        "Ext.String",
        "Ext.dd.DropZone",
        "Ext.grid.plugin.DragDrop",
        "Ext.selection.RowModel",
        "com.coremedia.cms.editor.controlroom.ControlRoom_properties",
        "com.coremedia.cms.editor.sdk.columns.grid.NameColumn",
        "com.coremedia.ui.components.CustomEditorGrid",
        "com.coremedia.ui.data.RemoteBeanUtil",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.data.dependencies.DependencyTracker",
        "com.coremedia.ui.store.BeanRecord",
        "com.coremedia.ui.util.ConcurrentUtil",
        "com.coremedia.ui.util.DraggableItemsUtils",
        "com.coremedia.ui.util.EventUtil",
        "mx.resources.ResourceManager"
      ],
      uses: [
        "com.coremedia.cms.editor.controlroom.dd.ProjectsPanelDropZone",
        "com.coremedia.cms.editor.controlroom.project.ProjectHelper",
        "com.coremedia.cms.editor.controlroom.project.rest.Project",
        "com.coremedia.cms.editor.controlroom.project.rest.impl.ProjectRepositoryImpl"
      ]
    };
});
