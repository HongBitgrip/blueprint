Ext.define("com.coremedia.cms.editor.controlroom.project.components.AddProjectMemberDialogBase", function(AddProjectMemberDialogBase) {/*package com.coremedia.cms.editor.controlroom.project.components {
import com.coremedia.cap.common.SESSION;
import com.coremedia.cms.editor.controlroom.project.rest.Project;
import com.coremedia.cms.editor.sdk.components.StudioDialog;
import com.coremedia.cms.editor.sdk.member.MembersContainer;
import com.coremedia.cms.editor.sdk.member.SelectMembersContainer;
import com.coremedia.ui.data.RemoteBeanUtil;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.util.EncodingUtil;

import ext.Component;
import ext.StringUtil;
import ext.container.Container;
import ext.util.Format;

import mx.resources.ResourceManager;

[ResourceBundle('com.coremedia.cms.editor.controlroom.ControlRoom')]
public class AddProjectMemberDialogBase extends StudioDialog {

  [Bindable]
  public var project:Project;

  [Bindable]
  public var selectedMembersValueExpression:ValueExpression;

  [ArrayElementType("com.coremedia.cap.user.Member")]
  private var oldSelectedMembers:Array;
  private var selectedMembersContainer:MembersContainer;
  private var selectedMembersContainerBody:Container;
  private var titleVE:ValueExpression;

  private var projectMembersVE:ValueExpression;

  public*/ function AddProjectMemberDialogBase$(config/*:AddProjectMemberDialog = null*/) {if(arguments.length<=0)config=null;
    this.super$2IHo(config);

    AS3.setBindable(this,"selectedMembersValueExpression" , AS3.getBindable(this,"selectedMembersValueExpression") || AS3.getBindable(config,"selectedMembersValueExpression"));
    this.oldSelectedMembers$2IHo = [];
    this.selectedMembersContainer$2IHo =AS3.as( this.queryById(com.coremedia.cms.editor.sdk.member.SelectMembersContainer.SELECTED_MEMBERS_CT_ITEM_ID),  com.coremedia.cms.editor.sdk.member.MembersContainer);
    this.selectedMembersContainerBody$2IHo =AS3.as( this.selectedMembersContainer$2IHo.queryById(com.coremedia.cms.editor.sdk.member.MembersContainer.MEMBERS_CT_BODY_ITEM_ID),  Ext.container.Container);
  }/*

  override protected*/ function initComponent()/*:void*/ {
    com.coremedia.cms.editor.sdk.components.StudioDialog.prototype.initComponent.call(this);
    this.addListeners$2IHo();
  }/*

  override protected*/ function onDestroy()/*:void*/ {
    this.removeListeners$2IHo();
    com.coremedia.cms.editor.sdk.components.StudioDialog.prototype.onDestroy.call(this);
  }/*

  private*/ function addListeners()/*:void*/ {
    this.getProjectMembersVE$2IHo().addChangeListener(AS3.bind(this,"closeOnRemoveFromProject$2IHo"));
  }/*

  private*/ function removeListeners()/*:void*/ {
    this.getProjectMembersVE$2IHo().removeChangeListener(AS3.bind(this,"closeOnRemoveFromProject$2IHo"));
  }/*

  protected*/ function afterUpdateCallback()/*:void*/ {var this$=this;
    if (this.selectedMembersContainerBody$2IHo && this.selectedMembersContainerBody$2IHo.isVisible(true)) {
      var newSelectedMembers/*:Array*/ = this.getTheSelectedMembersValueExpression().getValue();
      if (this.oldSelectedMembers$2IHo.length === 0 ||
              (newSelectedMembers.length >= this.oldSelectedMembers$2IHo.length
                      && this.oldSelectedMembers$2IHo[this.oldSelectedMembers$2IHo.length - 1] !== newSelectedMembers[newSelectedMembers.length - 1])) {
        if (this.selectedMembersContainer$2IHo.getHeight() > this.selectedMembersContainerBody$2IHo.getHeight()) {
          // scroll down after we changed the height to the allowed max height
          this.mon(this.selectedMembersContainer$2IHo, "afterlayout", function ()/*:void*/ {
            this$.scrollLastMemberIntoView$2IHo();
          }, null, {single: true});
        } else {
          // scroll down
          this.scrollLastMemberIntoView$2IHo();
        }
      }
    }

    this.oldSelectedMembers$2IHo && (this.oldSelectedMembers$2IHo = newSelectedMembers.concat([]));
  }/*

  private*/ function scrollLastMemberIntoView()/*:void*/ {
    var lastMemberElement/*:Component*/ = this.selectedMembersContainerBody$2IHo.getComponent(this.selectedMembersContainerBody$2IHo.itemCollection.getCount() - 1);
    lastMemberElement && lastMemberElement.getEl() && lastMemberElement.getEl().dom.scrollIntoView(false);
  }/*

  protected*/ function getTitleVE()/*:ValueExpression*/ {var this$=this;
    if (!this.titleVE$2IHo) {
      this.titleVE$2IHo = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:String*/ {
        if (com.coremedia.ui.data.RemoteBeanUtil.isAccessible(AS3.getBindable(this$,"project"))) {
          var projectName/*:String*/ = AS3.getBindable(this$,"project").getName();
          var projectNameEllipsed/*:String*/ = Ext.util.Format.ellipsis(com.coremedia.ui.util.EncodingUtil.encodeForHTML(projectName), 50, true);
          var titleText/*:String*/ = mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'AddProjectMemberDialog_title_text');
          return Ext.String.format(titleText, projectNameEllipsed);
        }
        return "";
      });
    }
    return this.titleVE$2IHo;
  }/*

  protected*/ function getTheSelectedMembersValueExpression()/*:ValueExpression*/ {
    if (!AS3.getBindable(this,"selectedMembersValueExpression")) {
      AS3.setBindable(this,"selectedMembersValueExpression" , com.coremedia.ui.data.ValueExpressionFactory.createFromValue([]));
    }
    return AS3.getBindable(this,"selectedMembersValueExpression");
  }/*

  protected*/ function share()/*:void*/ {
    var selectedMembers/*:Array*/ = this.getTheSelectedMembersValueExpression().getValue();

    if (com.coremedia.ui.data.RemoteBeanUtil.isAccessible(AS3.getBindable(this,"project"))) {
      AS3.getBindable(this,"project").addMembers(selectedMembers);
    }
    this.close();
  }/*

  internal*/ function getShareButtonDisabledValueExpression()/*:ValueExpression*/ {var this$=this;
    return com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function()/*:Boolean*/ {
      //noinspection JSMismatchedCollectionQueryUpdate
      var selectedMembers/*:Array*/ = this$.getTheSelectedMembersValueExpression().getValue();
      return selectedMembers.length === 0;
    });
  }/*

  private*/ function getProjectMembersVE()/*:ValueExpression*/ {var this$=this;
    if (!this.projectMembersVE$2IHo) {
      this.projectMembersVE$2IHo = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:Array*/ {
        if (!com.coremedia.ui.data.RemoteBeanUtil.isAccessible(AS3.getBindable(this$,"project"))) {
          return undefined;
        }
        return AS3.getBindable(this$,"project").getMembers();
      });
    }

    return this.projectMembersVE$2IHo;
  }/*

  private*/ function closeOnRemoveFromProject()/*:void*/ {var this$=this;
    AS3.getBindable(this,"project").load(function (project/*:Project*/)/*:void*/ {
      if (!com.coremedia.ui.data.RemoteBeanUtil.isAccessible(project)) {
        this$.close();
      } else {
        project.getMembers(function (members/*:Array*/)/*:void*/ {
          if (members.indexOf(com.coremedia.cap.common.SESSION.getUser()) < 0) {
            this$.close();
          }
        });
      }
    });
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.components.StudioDialog",
      oldSelectedMembers$2IHo: null,
      selectedMembersContainer$2IHo: null,
      selectedMembersContainerBody$2IHo: null,
      titleVE$2IHo: null,
      projectMembersVE$2IHo: null,
      constructor: AddProjectMemberDialogBase$,
      super$2IHo: function() {
        com.coremedia.cms.editor.sdk.components.StudioDialog.prototype.constructor.apply(this, arguments);
      },
      initComponent: initComponent,
      onDestroy: onDestroy,
      addListeners$2IHo: addListeners,
      removeListeners$2IHo: removeListeners,
      afterUpdateCallback: afterUpdateCallback,
      scrollLastMemberIntoView$2IHo: scrollLastMemberIntoView,
      getTitleVE: getTitleVE,
      getTheSelectedMembersValueExpression: getTheSelectedMembersValueExpression,
      share: share,
      getShareButtonDisabledValueExpression: getShareButtonDisabledValueExpression,
      getProjectMembersVE$2IHo: getProjectMembersVE,
      closeOnRemoveFromProject$2IHo: closeOnRemoveFromProject,
      config: {
        project: null,
        selectedMembersValueExpression: null
      },
      requires: [
        "Ext.String",
        "Ext.container.Container",
        "Ext.util.Format",
        "com.coremedia.cap.common.SESSION",
        "com.coremedia.cms.editor.controlroom.ControlRoom_properties",
        "com.coremedia.cms.editor.sdk.components.StudioDialog",
        "com.coremedia.cms.editor.sdk.member.MembersContainer",
        "com.coremedia.cms.editor.sdk.member.SelectMembersContainer",
        "com.coremedia.ui.data.RemoteBeanUtil",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.util.EncodingUtil",
        "mx.resources.ResourceManager"
      ]
    };
});
