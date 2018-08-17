Ext.define("com.coremedia.cms.editor.controlroom.project.actions.AbstractTabContextMenuProjectActionBase", function(AbstractTabContextMenuProjectActionBase) {/*package com.coremedia.cms.editor.controlroom.project.actions {

import com.coremedia.cms.editor.controlroom.project.rest.Project;
import com.coremedia.cms.editor.sdk.desktop.reusability.WorkAreaTabProxy;
import com.coremedia.ui.actions.AbstractTabContextMenuAction;
import com.coremedia.ui.data.RemoteBeanUtil;

import ext.panel.Panel;

/**
 * An abstract action for items of a <code>TabContextMenu</code> for a target of type {@link ProjectTab}.
 * For other target types this action is hidden and disabled.
 * /
public class AbstractTabContextMenuProjectActionBase extends AbstractTabContextMenuAction {

  public*/ function AbstractTabContextMenuProjectActionBase$(config/*:AbstractTabContextMenuProjectAction = null*/) {if(arguments.length<=0)config=null;
    this.super$i4UZ(config);
  }/*

  override protected*/ function checkDisabled()/*:Boolean*/ {
    return !getTabProject$static(this.getContextClickedTab());
  }/*

  /**
   * Get the target project of the tab.
   *
   * @return the target project of the tab or undefined if the project was deleted.
   * /
  protected*/ function getProject()/*:Project*/ {
    var tabProject/*:Project*/ = getTabProject$static(this.getContextClickedTab());
    if (tabProject) {
      if (com.coremedia.ui.data.RemoteBeanUtil.isAccessible(tabProject)) {
        return tabProject;
      }
    }
    return undefined;
  }/*

  override protected*/ function checkHidden()/*:Boolean*/ {
    return this.checkDisabled();
  }/*

  private static*/ function getTabProject$static(tab/*:Panel*/)/*:Project*/ {
    if (AS3.is(tab,  com.coremedia.cms.editor.sdk.desktop.reusability.WorkAreaTabProxy)) {
      return AS3.as( AS3.getBindable((AS3.as(tab,  com.coremedia.cms.editor.sdk.desktop.reusability.WorkAreaTabProxy)),"proxyState","DUMMY").entity,  com.coremedia.cms.editor.controlroom.project.rest.Project);
    }

    return null;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.actions.AbstractTabContextMenuAction",
      constructor: AbstractTabContextMenuProjectActionBase$,
      super$i4UZ: function() {
        com.coremedia.ui.actions.AbstractTabContextMenuAction.prototype.constructor.apply(this, arguments);
      },
      checkDisabled: checkDisabled,
      getProject: getProject,
      checkHidden: checkHidden,
      requires: [
        "com.coremedia.cms.editor.sdk.desktop.reusability.WorkAreaTabProxy",
        "com.coremedia.ui.actions.AbstractTabContextMenuAction",
        "com.coremedia.ui.data.RemoteBeanUtil"
      ],
      uses: ["com.coremedia.cms.editor.controlroom.project.rest.Project"]
    };
});
