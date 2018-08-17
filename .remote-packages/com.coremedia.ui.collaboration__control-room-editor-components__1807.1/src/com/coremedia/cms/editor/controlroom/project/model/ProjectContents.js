Ext.define("com.coremedia.cms.editor.controlroom.project.model.ProjectContents", function(ProjectContents) {/*package com.coremedia.cms.editor.controlroom.project.model {
import com.coremedia.cap.content.Content;
import com.coremedia.cms.editor.controlroom.project.rest.Project;

/**
 * Provides an array of {@link Content} assoziated to a {@link Project}
 * /
public class ProjectContents {

  private var project:Project;

  [ArrayElementType("com.coremedia.cap.content.Content")]
  private var contents:Array;

  public*/ function ProjectContents$(project/*:Project*/, contents/*:Array = null*/) {if(arguments.length<=1)contents=null;
    this.project$bmiT = project;
    this.contents$bmiT = [];
    this.addContents(contents || []);
  }/*

  public*/ function getProject()/*:Project*/ {
    return this.project$bmiT;
  }/*

  public*/ function getContents()/*:Array*/ {
    return this.contents$bmiT.concat([]);
  }/*

  public*/ function addContent(contentToAdd/*:Content*/)/*:void*/ {
    if (this.contents$bmiT.indexOf(contentToAdd) === -1) {
      this.contents$bmiT.push(contentToAdd);
    }
  }/*

  public*/ function addContents(contentsToAdd/*:Array*/)/*:void*/ {var this$=this;
    contentsToAdd.filter(isContent$static).forEach(function (content/*:Content*/)/*:void*/ {
      this$.addContent(content);
    });
  }/*

  private static*/ function isContent$static(o/*:Object*/)/*:Boolean*/ {
    return AS3.is( o,  com.coremedia.cap.content.Content);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      project$bmiT: null,
      contents$bmiT: null,
      constructor: ProjectContents$,
      getProject: getProject,
      getContents: getContents,
      addContent: addContent,
      addContents: addContents,
      requires: ["com.coremedia.cap.content.Content"]
    };
});
