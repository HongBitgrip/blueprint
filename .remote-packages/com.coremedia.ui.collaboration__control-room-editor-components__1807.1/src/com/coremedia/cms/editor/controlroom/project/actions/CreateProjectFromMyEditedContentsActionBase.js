Ext.define("com.coremedia.cms.editor.controlroom.project.actions.CreateProjectFromMyEditedContentsActionBase", function(CreateProjectFromMyEditedContentsActionBase) {/*package com.coremedia.cms.editor.controlroom.project.actions {

import com.coremedia.cap.content.Content;
import com.coremedia.cms.editor.controlroom.project.ProjectHelper;
import com.coremedia.cms.editor.controlroom.project.rest.Project;
import com.coremedia.collaboration.controlroom.rest.CapList;
import com.coremedia.collaboration.controlroom.rest.CapListRepositoryImpl;
import com.coremedia.ui.components.IconButton;

import ext.Component;
import ext.Ext;

import mx.resources.ResourceManager;

[ResourceBundle('com.coremedia.cms.editor.controlroom.ControlRoom')]
public class CreateProjectFromMyEditedContentsActionBase extends CreateProjectAction {

  private static const*/var NON_SELECTED_CONTENT_TOOLTIP$static/*:String*/;/* =*/function NON_SELECTED_CONTENT_TOOLTIP$static_(){NON_SELECTED_CONTENT_TOOLTIP$static=( mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'Action_createProject_selected_non_tooltip'));};/*
  private static const*/var SELECTED_CONTENT_TOOLTIP$static/*:String*/;/* =*/function SELECTED_CONTENT_TOOLTIP$static_(){SELECTED_CONTENT_TOOLTIP$static=( mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'Action_createProject_selected_tooltip'));};/*

  public*/ function CreateProjectFromMyEditedContentsActionBase$(config/*:CreateProjectFromMyEditedContentsAction = null*/) {if(arguments.length<=0)config=null;
    var conf/*:Object*/ = Ext.apply(config, { afterCreateHandler:AS3.bind( this,"afterCreateHandler$aLgx"), tooltip: NON_SELECTED_CONTENT_TOOLTIP$static});
    this.super$aLgx(AS3.cast(com.coremedia.cms.editor.controlroom.project.actions.CreateProjectFromMyEditedContentsAction,conf));
  }/*

  private*/ function afterCreateHandler(project/*:Project*/)/*:void*/ {
    com.coremedia.cms.editor.controlroom.project.ProjectHelper.renameProjectInMyProjects(project);

    project.getContents(function (projectContents/*:Array*/)/*:void*/ {
      var editedContents/*:CapList*/ = com.coremedia.collaboration.controlroom.rest.CapListRepositoryImpl.getInstance().getEditedContents();
      var editedContentsList/*:Array*/ = editedContents.getItems();

      var contentsToRemoveFromEditedContents/*:Array*/ = editedContentsList.filter(function (item/*:Object*/)/*:Boolean*/ {
        var content/*:Content*/ =AS3.as( item,  com.coremedia.cap.content.Content);
        if (content) {
          return (projectContents.indexOf(content) > -1);
        }
        return false;
      });
      editedContents.removeItems(contentsToRemoveFromEditedContents);
    });
  }/*

  /**
   * Sets the currently selected items in the EditedContentsGridPanel.
   *
   * @param selectedItems the currently selected items
   * /
  [InjectFromExtParent]
  public*/ function setSelectedItems(selectedItems/*:Array*/)/*:void*/ {
    var ttip/*:String*/ = getTooltipForSelection$static(selectedItems);
    this.each(function(cmp/*:Component*/)/*:void*/ {
      var btn/*:IconButton*/ =AS3.as( cmp,  com.coremedia.ui.components.IconButton);
      if (btn) {
        btn.setTooltip(ttip);
        btn.setText(ttip);
      }
    });
  }/*

  /**
   * Return the tooltip for the create button depending on the given selected items.
   *
   * @param selectedItems the currently selected items
   * @return the tooltip for the create button
   * /
  private static*/ function getTooltipForSelection$static(selectedItems/*:Array*/)/*:String*/ {
    if (selectedItems && selectedItems.length === 0) {
      return NON_SELECTED_CONTENT_TOOLTIP$static;
    } else {
      return SELECTED_CONTENT_TOOLTIP$static;
    }
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.controlroom.project.actions.CreateProjectAction",
      metadata: {setSelectedItems: ["InjectFromExtParent"]},
      constructor: CreateProjectFromMyEditedContentsActionBase$,
      super$aLgx: function() {
        com.coremedia.cms.editor.controlroom.project.actions.CreateProjectAction.prototype.constructor.apply(this, arguments);
      },
      afterCreateHandler$aLgx: afterCreateHandler,
      setSelectedItems: setSelectedItems,
      statics: {
        NON_SELECTED_CONTENT_TOOLTIP: undefined,
        SELECTED_CONTENT_TOOLTIP: undefined,
        __initStatics__: function() {
          NON_SELECTED_CONTENT_TOOLTIP$static_();
          SELECTED_CONTENT_TOOLTIP$static_();
        }
      },
      requires: [
        "Ext",
        "com.coremedia.cap.content.Content",
        "com.coremedia.cms.editor.controlroom.ControlRoom_properties",
        "com.coremedia.cms.editor.controlroom.project.actions.CreateProjectAction",
        "com.coremedia.collaboration.controlroom.rest.CapListRepositoryImpl",
        "com.coremedia.ui.components.IconButton",
        "mx.resources.ResourceManager"
      ],
      uses: [
        "com.coremedia.cms.editor.controlroom.project.ProjectHelper",
        "com.coremedia.cms.editor.controlroom.project.actions.CreateProjectFromMyEditedContentsAction"
      ]
    };
});
