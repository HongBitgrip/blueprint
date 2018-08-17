Ext.define("com.coremedia.cms.editor.controlroom.project.components.ProjectDueDatePanelBase", function(ProjectDueDatePanelBase) {/*package com.coremedia.cms.editor.controlroom.project.components {

import com.coremedia.cms.editor.controlroom.project.rest.Project;
import com.coremedia.cms.editor.controlroom.project.rest.impl.ProjectPropertyNames;
import com.coremedia.ui.components.StatefulDateField;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;

import ext.dom.Element;
import ext.panel.Panel;

import js.Event;

[ResourceBundle('com.coremedia.cms.editor.controlroom.ControlRoom')]
public class ProjectDueDatePanelBase extends Panel {

  [Bindable]
  public var project:Project;

  private var dueDateField:StatefulDateField;
  private var emptyTextValueExpression:ValueExpression;
  private var dueDateValueExpression:ValueExpression;

  public*/ function ProjectDueDatePanelBase$(config/*:ProjectDueDatePanel = null*/) {var this$=this;if(arguments.length<=0)config=null;
    this.super$mhb5(config);

    this.dueDateField$mhb5 =AS3.as( this.queryById(com.coremedia.cms.editor.controlroom.project.components.ProjectDueDatePanel.DUE_DATE_FIELD_ID),  com.coremedia.ui.components.StatefulDateField);

    this.mon(this.dueDateField$mhb5, "afterrender", function ()/*:void*/ {

      this$.mon(this$.dueDateField$mhb5, "select", function (dateField/*:StatefulDateField*/, date/*:Date*/)/*:void*/ {
        AS3.getBindable(this$,"project").setDueDate(date);
      });

      var dueDateFieldElement/*:Element*/ = this$.dueDateField$mhb5.getEl();
      this$.mon(dueDateFieldElement, "keydown", function (e/*:Event*/)/*:void*/ {
        if (e.keyCode === 13) {
          dueDateFieldElement.blur();
          // component also needs to blur, which is a private function
          this$.dueDateField$mhb5["triggerBlur"].apply(this$.dueDateField$mhb5);
        }
      });
    });
  }/*

  protected*/ function getDueDateValueExpression(p/*:Project*/)/*:ValueExpression*/ {
    if (!this.dueDateValueExpression$mhb5) {
      this.dueDateValueExpression$mhb5 = com.coremedia.ui.data.ValueExpressionFactory.create(com.coremedia.cms.editor.controlroom.project.rest.impl.ProjectPropertyNames.DUE_DATE, p || AS3.getBindable(this,"project"));
    }
    return this.dueDateValueExpression$mhb5;
  }/*

  protected*/ function getEmptyTextValueExpression()/*:ValueExpression*/ {
    if (!this.emptyTextValueExpression$mhb5) {
      this.emptyTextValueExpression$mhb5 = com.coremedia.ui.data.ValueExpressionFactory.createFromValue(this.resourceManager.getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'Project_dueDate_emptyText'));
    }
    return this.emptyTextValueExpression$mhb5;
  }/*

  internal*/ function resetDate()/*:void*/ {
    AS3.getBindable(this,"project").setDueDate(null);
    this.dueDateField$mhb5 && this.dueDateField$mhb5.reset();
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.panel.Panel",
      dueDateField$mhb5: null,
      emptyTextValueExpression$mhb5: null,
      dueDateValueExpression$mhb5: null,
      constructor: ProjectDueDatePanelBase$,
      super$mhb5: function() {
        Ext.panel.Panel.prototype.constructor.apply(this, arguments);
      },
      getDueDateValueExpression: getDueDateValueExpression,
      getEmptyTextValueExpression: getEmptyTextValueExpression,
      resetDate: resetDate,
      config: {project: null},
      requires: [
        "Ext.panel.Panel",
        "com.coremedia.cms.editor.controlroom.ControlRoom_properties",
        "com.coremedia.ui.components.StatefulDateField",
        "com.coremedia.ui.data.ValueExpressionFactory"
      ],
      uses: [
        "com.coremedia.cms.editor.controlroom.project.components.ProjectDueDatePanel",
        "com.coremedia.cms.editor.controlroom.project.rest.impl.ProjectPropertyNames"
      ]
    };
});
