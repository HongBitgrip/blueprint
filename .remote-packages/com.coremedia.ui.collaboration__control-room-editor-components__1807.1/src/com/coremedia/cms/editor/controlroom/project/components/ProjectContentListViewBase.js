Ext.define("com.coremedia.cms.editor.controlroom.project.components.ProjectContentListViewBase", function(ProjectContentListViewBase) {/*package com.coremedia.cms.editor.controlroom.project.components {

import com.coremedia.cms.editor.controlroom.controlRoomContext;
import com.coremedia.cms.editor.sdk.collectionview.list.AbstractListView;
import com.coremedia.cms.editor.sdk.util.MemoryLinkListWrapper;

import ext.Ext;

public class ProjectContentListViewBase extends AbstractListView {

  private var _linkListWrapper:MemoryLinkListWrapper;

  public*/ function ProjectContentListViewBase$(config/*:ProjectContentListView = null*/) {if(arguments.length<=0)config=null;
    var copiedConfig/*:ProjectContentListView*/ = AS3.cast(com.coremedia.cms.editor.controlroom.project.components.ProjectContentListView,Ext.apply({}, config));
    copiedConfig.columns = com.coremedia.cms.editor.sdk.collectionview.list.AbstractListViewBase.createColumnModel(com.coremedia.cms.editor.controlroom.controlRoomContext.getProjectListViewColumns(), config);
    this.super$uaEx(copiedConfig);
  }/*

  protected*/ function handleDropAreaDrop(contents/*:Array*/)/*:void*/ {
    if (this._linkListWrapper$uaEx.acceptsLinks(contents)) {
      this._linkListWrapper$uaEx.addLinks(contents);
      this.selectedItemsValueExpression.setValue(contents);
    }
  }/*

  protected*/ function getLinkListWrapper(config/*:ProjectContentListView*/)/*:MemoryLinkListWrapper*/ {
    if (!this._linkListWrapper$uaEx) {
      var linkListWrapperCfg/*:MemoryLinkListWrapper*/ = AS3.cast(com.coremedia.cms.editor.sdk.util.MemoryLinkListWrapper,{});
      AS3.setBindable(linkListWrapperCfg,"linksVE" , AS3.getBindable(config,"contentsValueExpression"));
      this._linkListWrapper$uaEx = new com.coremedia.cms.editor.sdk.util.MemoryLinkListWrapper(linkListWrapperCfg);
    }
    return this._linkListWrapper$uaEx;
  }/*


}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.collectionview.list.AbstractListView",
      _linkListWrapper$uaEx: null,
      constructor: ProjectContentListViewBase$,
      super$uaEx: function() {
        com.coremedia.cms.editor.sdk.collectionview.list.AbstractListView.prototype.constructor.apply(this, arguments);
      },
      handleDropAreaDrop: handleDropAreaDrop,
      getLinkListWrapper: getLinkListWrapper,
      requires: [
        "Ext",
        "com.coremedia.cms.editor.sdk.collectionview.list.AbstractListView",
        "com.coremedia.cms.editor.sdk.collectionview.list.AbstractListViewBase",
        "com.coremedia.cms.editor.sdk.util.MemoryLinkListWrapper"
      ],
      uses: [
        "com.coremedia.cms.editor.controlroom.controlRoomContext",
        "com.coremedia.cms.editor.controlroom.project.components.ProjectContentListView"
      ]
    };
});
