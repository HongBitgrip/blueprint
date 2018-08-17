Ext.define("com.coremedia.cms.editor.controlroom.project.actions.AbstractProjectContentsActionBase", function(AbstractProjectContentsActionBase) {/*package com.coremedia.cms.editor.controlroom.project.actions {
import com.coremedia.cap.content.Content;
import com.coremedia.cms.editor.controlroom.project.model.ProjectContents;
import com.coremedia.cms.editor.controlroom.project.rest.Project;
import com.coremedia.ui.actions.DependencyTrackedAction;
import com.coremedia.ui.data.RemoteBean;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;

import net.jangaroo.ext.Exml;

[PublicApi]
public class AbstractProjectContentsActionBase extends DependencyTrackedAction {

  private var projectContentsListVE:ValueExpression;

  public*/ function AbstractProjectContentsActionBase$(config/*:AbstractProjectContentsAction = null*/) {if(arguments.length<=0)config=null;
    this.projectContentsListVE$Hpus = AS3.getBindable(config,"projectContentsListVE");
    AS3.getBindable(config,"projectContentsList") && this.setProjectContentsList$Hpus(AS3.getBindable(config,"projectContentsList"));
    this.super$Hpus(AS3.cast(com.coremedia.cms.editor.controlroom.project.actions.AbstractProjectContentsAction,net.jangaroo.ext.Exml.apply({}, config)));
  }/*

  private*/ function getProjectContentsList()/*:Array*/ {
    return this.getProjectContentsListVE$Hpus().getValue();
  }/*

  private*/ function setProjectContentsList(projectContentsList/*:Array*/)/*:void*/ {
    this.getProjectContentsListVE$Hpus().setValue(projectContentsList);
  }/*

  override protected*/ function calculateHidden()/*:Boolean*/ {
    this.loadProjectContentsList$Hpus();
    return this.checkHidden$Hpus();
  }/*

  //noinspection JSMethodCanBeStatic
  private*/ function checkHidden()/*:Boolean*/ {
    return false;
  }/*

  override protected*/ function calculateDisabled()/*:Boolean*/ {
    this.loadProjectContentsList$Hpus();
    return this.checkDisabled$Hpus();
  }/*

  private*/ function checkDisabled()/*:Boolean*/ {
    return !this.isValid();
  }/*

  internal*/ function iterateOverProjectContents(fun/*:Function*/)/*:void*/ {
    var projectContentsList/*:Array*/ =AS3.as( this.getProjectContentsList$Hpus(),  Array);
    projectContentsList && projectContentsList.forEach(function (projectContents/*:ProjectContents*/)/*:void*/ {
      var project/*:Project*/ =AS3.as( projectContents.getProject(),  com.coremedia.cms.editor.controlroom.project.rest.Project);
      var contents/*:Array*/ =AS3.as( projectContents.getContents(),  Array);
      if (project && contents) {
        fun(project, contents);
      }
    });
  }/*

  private*/ function getProjectContentsListVE()/*:ValueExpression*/ {
    if (!this.projectContentsListVE$Hpus) {
      this.projectContentsListVE$Hpus = com.coremedia.ui.data.ValueExpressionFactory.createFromValue([]);
    }
    return this.projectContentsListVE$Hpus;
  }/*

  internal*/ function isValid()/*:Boolean*/ {
    var isValid/*:Boolean*/ = true;
    var numberOfContents/*:int*/ = 0;
    this.iterateOverProjectContents(function (project/*:Project*/, contents/*:Array*/)/*:void*/ {
      numberOfContents += contents.length;
      isValid = isValid && contents.every(function (content/*:Content*/)/*:Boolean*/ {
        return AS3.is( content,  com.coremedia.cap.content.Content);
      });
    });

    return isValid && numberOfContents > 0;
  }/*

  private*/ function loadProjectContentsList()/*:void*/ {
    this.getProjectContentsListVE$Hpus().getValue();
    this.iterateOverProjectContents(function (project/*:Project*/, contents/*:Array*/)/*:void*/ {
      if (project && contents) {
        project.load();
        contents.forEach(function (content/*:Content*/)/*:void*/ {
          if (AS3.is(content,  com.coremedia.ui.data.RemoteBean)) {
            content.load();
          }
        });
      }
    });
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.actions.DependencyTrackedAction",
      metadata: {"": ["PublicApi"]},
      projectContentsListVE$Hpus: null,
      constructor: AbstractProjectContentsActionBase$,
      super$Hpus: function() {
        com.coremedia.ui.actions.DependencyTrackedAction.prototype.constructor.apply(this, arguments);
      },
      getProjectContentsList$Hpus: getProjectContentsList,
      setProjectContentsList$Hpus: setProjectContentsList,
      calculateHidden: calculateHidden,
      checkHidden$Hpus: checkHidden,
      calculateDisabled: calculateDisabled,
      checkDisabled$Hpus: checkDisabled,
      iterateOverProjectContents: iterateOverProjectContents,
      getProjectContentsListVE$Hpus: getProjectContentsListVE,
      isValid: isValid,
      loadProjectContentsList$Hpus: loadProjectContentsList,
      requires: [
        "com.coremedia.cap.content.Content",
        "com.coremedia.ui.actions.DependencyTrackedAction",
        "com.coremedia.ui.data.RemoteBean",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.controlroom.project.actions.AbstractProjectContentsAction",
        "com.coremedia.cms.editor.controlroom.project.rest.Project"
      ]
    };
});
