Ext.define("com.coremedia.cms.editor.sdk.actions.AbstractTabContextMenuContentActionBase", function(AbstractTabContextMenuContentActionBase) {/*package com.coremedia.cms.editor.sdk.actions {
import com.coremedia.cap.content.Content;
import com.coremedia.cms.editor.sdk.desktop.reusability.WorkAreaTabProxy;
import com.coremedia.ui.actions.AbstractTabContextMenuAction;

import ext.panel.Panel;
import ext.tab.TabPanel;

/**
 * An abstract action for items of a <code>TabContextMenu</code>.
 * Compared to its superclass <code>com.coremedia.ui.actions.AbstractTabContextMenuAction</code>
 * it offers methods for accessing the content of a context-clicked
 * tab (given that the tab is a content tab, i.e. a Premular) and the contents of all the opened tabs
 * of the associated tab panel.

 * @see com.coremedia.cap.content.Content
 * @see com.coremedia.ui.actions.AbstractTabContextMenuAction
 * @see com.coremedia.cms.editor.sdk.premular.Premular
 * @see com.coremedia.ui.components.TabContextMenu
 * /
[PublicApi]
public class AbstractTabContextMenuContentActionBase extends AbstractTabContextMenuAction {
  public*/ function AbstractTabContextMenuContentActionBase$(config/*:AbstractTabContextMenuContentAction = null*/) {if(arguments.length<=0)config=null;
    this.super$uonQ(config);
  }/*

  /**
   * Returns the content of the context-clicked tab.
   *
   * @return the content of the context-clicked tab, undefined the tab is not a content tab
   * /
  protected*/ function getContextClickedContent()/*:Content*/ {
    return getTabContent$static(this.getContextClickedTab());
  }/*

  /**
   * Returns the contents of all opened tabs of the context-clicked tab panel.
   *
   * @return the contents of all opened tabs of the context-clicked tab panel
   * /
  protected*/ function getContextClickedContents()/*:Array*/ {
    var contents/*:Array*/ = [];
    var tp/*:TabPanel*/ = this.getContextClickedTabPanel();
    tp.itemCollection.each(function (pnl/*:Panel*/)/*:void*/ {
      var tabContent/*:Content*/ = getTabContent$static(pnl);
      if (tabContent) {
        contents.push(tabContent);
      }
    });
    return contents;
  }/*

  override protected*/ function checkDisabled()/*:Boolean*/ {
    return !this.getContextClickedContent();
  }/*

  private static*/ function getTabContent$static(tab/*:Panel*/)/*:Content*/ {
    if (AS3.is(tab,  com.coremedia.cms.editor.sdk.desktop.reusability.WorkAreaTabProxy)) {
      return AS3.as( AS3.getBindable((AS3.as(tab,  com.coremedia.cms.editor.sdk.desktop.reusability.WorkAreaTabProxy)),"proxyState").entity,  com.coremedia.cap.content.Content);
    }

    return null;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.actions.AbstractTabContextMenuAction",
      metadata: {"": ["PublicApi"]},
      constructor: AbstractTabContextMenuContentActionBase$,
      super$uonQ: function() {
        com.coremedia.ui.actions.AbstractTabContextMenuAction.prototype.constructor.apply(this, arguments);
      },
      getContextClickedContent: getContextClickedContent,
      getContextClickedContents: getContextClickedContents,
      checkDisabled: checkDisabled,
      requires: [
        "com.coremedia.cap.content.Content",
        "com.coremedia.ui.actions.AbstractTabContextMenuAction"
      ],
      uses: ["com.coremedia.cms.editor.sdk.desktop.reusability.WorkAreaTabProxy"]
    };
});
