Ext.define("com.coremedia.cms.editor.controlroom.project.components.ProjectTabBase", function(ProjectTabBase) {/*package com.coremedia.cms.editor.controlroom.project.components {

import com.coremedia.cap.common.SESSION;
import com.coremedia.cms.editor.controlroom.project.rest.Project;
import com.coremedia.cms.editor.sdk.desktop.WorkAreaTab;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.ui.data.RemoteBeanUtil;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;

import ext.container.Container;
import ext.tab.TabPanel;

[ResourceBundle('com.coremedia.icons.CoreIcons')]
public class ProjectTabBase extends WorkAreaTab {

  [Bindable]
  public var project:Project;

  private var projectMembersVE:ValueExpression;
  private var selectedDateVE:ValueExpression;

  public*/ function ProjectTabBase$(config/*:ProjectTab = null*/) {if(arguments.length<=0)config=null;
    AS3.setBindable(this,"project" ,AS3.as( (AS3.getBindable(config,"project") || AS3.getBindable(config,"entity","DUMMY")),  com.coremedia.cms.editor.controlroom.project.rest.Project));
    AS3.setBindable(config,"entity" , AS3.getBindable(this,"project"));

    this.super$bUFK(config);
  }/*

  override protected*/ function initComponent()/*:void*/ {var this$=this;
    com.coremedia.cms.editor.sdk.desktop.WorkAreaTab.prototype.initComponent.call(this);
    this.getProjectMembersVE$bUFK().loadValue(function ()/*:void*/ {
      this$.closeIfSessionUserIsNotMember$bUFK(this$.getProjectMembersVE$bUFK());
    });
    this.addListeners$bUFK();
  }/*

  override protected*/ function onDestroy()/*:void*/ {
    this.removeListeners$bUFK();
    com.coremedia.cms.editor.sdk.desktop.WorkAreaTab.prototype.onDestroy.call(this);
  }/*

  private*/ function addListeners()/*:void*/ {
    this.getProjectMembersVE$bUFK().addChangeListener(AS3.bind(this,"closeIfSessionUserIsNotMember$bUFK"));
  }/*

  private*/ function removeListeners()/*:void*/ {
    this.getProjectMembersVE$bUFK().removeChangeListener(AS3.bind(this,"closeIfSessionUserIsNotMember$bUFK"));
  }/*

  private*/ function closeIfSessionUserIsNotMember(membersVE/*:ValueExpression*/)/*:void*/ {
    var members/*:Array*/ = membersVE.getValue();
    if (members && members.indexOf(com.coremedia.cap.common.SESSION.getUser()) < 0) {
      this.removeFromTabPanel$bUFK();
    }
  }/*

  private*/ function removeFromTabPanel()/*:void*/ {var this$=this;
    if (!this.doRemoveFromTabPanel$bUFK(this.up())) {
      this.mon(com.coremedia.cms.editor.sdk.editorContext.getWorkArea(), "add", function (ownerCt/*:Container*/)/*:Boolean*/ {
        this$.doRemoveFromTabPanel$bUFK(AS3.as(ownerCt,  Ext.tab.Panel));
      });
    }
  }/*

  private*/ function doRemoveFromTabPanel(container/*:Container*/)/*:Boolean*/ {
    var tabPanel/*:TabPanel*/ =AS3.as( container,  Ext.tab.Panel);
    if (tabPanel) {
      // autodestroy will also remove listeners
      tabPanel.remove(this, true);
      return true;
    }
    return false;
  }/*

  internal*/ function getSelectedDateVE()/*:ValueExpression*/ {
    if (!this.selectedDateVE$bUFK) {
      this.selectedDateVE$bUFK = com.coremedia.ui.data.ValueExpressionFactory.createFromValue(undefined);
    }
    return this.selectedDateVE$bUFK;
  }/*

  override public*/ function calculateTitle()/*:String*/ {
    if (com.coremedia.ui.data.RemoteBeanUtil.isAccessible(AS3.getBindable(this,"project"))) {
      return AS3.getBindable(this,"project").getName();
    }
    return null;
  }/*

  override public*/ function calculateIcon()/*:String*/ {
    return this.resourceManager.getString('com.coremedia.icons.CoreIcons', 'project');
  }/*

  private*/ function getProjectMembersVE()/*:ValueExpression*/ {var this$=this;
    if (!this.projectMembersVE$bUFK) {
      this.projectMembersVE$bUFK = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:Array*/ {
        switch(com.coremedia.ui.data.RemoteBeanUtil.isAccessible(AS3.getBindable(this$,"project"))) {
          case false: return [];
          case true: return AS3.getBindable(this$,"project").getMembers();
          default: return undefined;
        }
      });
    }

    return this.projectMembersVE$bUFK;
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.desktop.WorkAreaTab",
      projectMembersVE$bUFK: null,
      selectedDateVE$bUFK: null,
      constructor: ProjectTabBase$,
      super$bUFK: function() {
        com.coremedia.cms.editor.sdk.desktop.WorkAreaTab.prototype.constructor.apply(this, arguments);
      },
      initComponent: initComponent,
      onDestroy: onDestroy,
      addListeners$bUFK: addListeners,
      removeListeners$bUFK: removeListeners,
      closeIfSessionUserIsNotMember$bUFK: closeIfSessionUserIsNotMember,
      removeFromTabPanel$bUFK: removeFromTabPanel,
      doRemoveFromTabPanel$bUFK: doRemoveFromTabPanel,
      getSelectedDateVE: getSelectedDateVE,
      calculateTitle: calculateTitle,
      calculateIcon: calculateIcon,
      getProjectMembersVE$bUFK: getProjectMembersVE,
      config: {project: null},
      requires: [
        "Ext.tab.Panel",
        "com.coremedia.cap.common.SESSION",
        "com.coremedia.cms.editor.sdk.desktop.WorkAreaTab",
        "com.coremedia.cms.editor.sdk.editorContext",
        "com.coremedia.icons.CoreIcons_properties",
        "com.coremedia.ui.data.RemoteBeanUtil",
        "com.coremedia.ui.data.ValueExpressionFactory"
      ],
      uses: ["com.coremedia.cms.editor.controlroom.project.rest.Project"]
    };
});
