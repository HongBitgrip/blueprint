Ext.define("com.coremedia.cms.editor.controlroom.project.components.ProjectContentThumbDataViewBase", function(ProjectContentThumbDataViewBase) {/*package com.coremedia.cms.editor.controlroom.project.components {
import com.coremedia.cms.editor.sdk.collectionview.thumbnail.ThumbDataViewBase;

public class ProjectContentThumbDataViewBase extends ThumbDataViewBase {

  public*/ function ProjectContentThumbDataViewBase$(config/*:ProjectContentThumbDataView = null*/)/*:void*/ {if(arguments.length<=0)config=null;
    this.super$u21F(config);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.collectionview.thumbnail.ThumbDataViewBase",
      constructor: ProjectContentThumbDataViewBase$,
      super$u21F: function() {
        com.coremedia.cms.editor.sdk.collectionview.thumbnail.ThumbDataViewBase.prototype.constructor.apply(this, arguments);
      },
      requires: ["com.coremedia.cms.editor.sdk.collectionview.thumbnail.ThumbDataViewBase"]
    };
});
