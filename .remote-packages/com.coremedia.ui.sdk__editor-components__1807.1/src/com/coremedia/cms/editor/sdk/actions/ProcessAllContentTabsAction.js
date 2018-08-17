Ext.define("com.coremedia.cms.editor.sdk.actions.ProcessAllContentTabsAction", function(ProcessAllContentTabsAction) {/*package com.coremedia.cms.editor.sdk.actions {
import com.coremedia.cap.common.SESSION;
import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.impl.BulkCheckInMethod;
import com.coremedia.cap.content.impl.BulkRevertMethod;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.cms.editor.sdk.premular.PremularBase;
import com.coremedia.cms.editor.sdk.util.MessageBoxUtilInternal;

import ext.Ext;
import ext.panel.Panel;

import mx.resources.ResourceManager;

[ResourceBundle('com.coremedia.cms.editor.sdk.actions.Actions')]
[ResourceBundle('com.coremedia.cms.editor.Editor')]
public class ProcessAllContentTabsAction extends AbstractTabContextMenuContentAction {

  [Bindable]
  public var action:String;

  public static const PROCESS_ALL_CONTENT_TABS_CHECKIN:String = "processAllContentTabsCheckin";
  public static const PROCESS_ALL_CONTENT_TABS_REVERT:String = "processAllContentTabsRevert";

  public*/ function ProcessAllContentTabsAction$(config/*:ProcessAllContentTabsAction = null*/) {if(arguments.length<=0)config=null;
    AS3.setBindable(this,"action" , AS3.getBindable(config,"action"));
    AS3.setBindable(config,"handler" ,AS3.bind( this,"_handler$0BRG"));
    this.super$0BRG(config);
  }/*

  private*/ function _handler()/*:void*/ {
    var contents/*:Array*/ = [];

    if (AS3.getBindable(this,"action") === ProcessAllContentTabsAction.PROCESS_ALL_CONTENT_TABS_CHECKIN || AS3.getBindable(this,"action") === ProcessAllContentTabsAction.PROCESS_ALL_CONTENT_TABS_REVERT) {
      contents = this.getAllContentTabsInEditMode$0BRG();
    }

    switch (AS3.getBindable(this,"action")) {
      case ProcessAllContentTabsAction.PROCESS_ALL_CONTENT_TABS_CHECKIN: new com.coremedia.cap.content.impl.BulkCheckInMethod(com.coremedia.cap.common.SESSION.getConnection().getContentRepository(), contents, Ext.emptyFn).doExecute(); break;
      case ProcessAllContentTabsAction.PROCESS_ALL_CONTENT_TABS_REVERT: this.confirmRevertContents$0BRG(contents);
    }
  }/*

  private*/ function confirmRevertContents(contents/*:Array*/)/*:void*/ {
    com.coremedia.cms.editor.sdk.util.MessageBoxUtilInternal.show(mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.sdk.actions.Actions', 'Action_revert_all_text'),
            mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.sdk.actions.Actions', 'Action_revert_verifyMessage_allContentTabs_text'),
            null,
            {
              yes: mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'dialog_defaultSubmitButton_text'),
              no: mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'dialog_defaultCancelButton_text')
            },
            function (btn/*:String*/)/*:void*/ {
              if (btn === 'yes') {
                var panelsOfDeletedContents/*:Array*/ = contents.filter(function (c/*:Content*/)/*:Boolean*/ {
                  // new documents have no version at all
                  return c.getCheckedOutVersion() === null;
                }).map(function (c/*:Content*/)/*:Panel*/ {
                  var panel/*:PremularBase*/ =AS3.as( com.coremedia.cms.editor.sdk.editorContext.getWorkAreaTabManager().findTabForEntity(c),  com.coremedia.cms.editor.sdk.premular.PremularBase);
                  if(panel) {
                    panel.setPreventCloseMessage(true);
                  }
                  return panel;
                });
                new com.coremedia.cap.content.impl.BulkRevertMethod(com.coremedia.cap.common.SESSION.getConnection().getContentRepository(), contents, Ext.emptyFn).doExecute();
              }
            }, false
    );
  }/*

  private*/ function getAllContentTabsInEditMode()/*:Array*/ {
    var contents/*:Array*/ = [];
    this.getContextClickedContents().forEach(function (content/*:Content*/)/*:void*/ {
      if (content.isCheckedOutByCurrentSession()) {
        contents.push(content);
      }
    });
    return contents;
  }/*

  override protected*/ function checkDisabled()/*:Boolean*/ {
    var atLeastOneContentTabInEditMode/*:Boolean*/ = false;
    this.getContextClickedContents().forEach(function (content/*:Content*/)/*:void*/ {
      if (content.isCheckedOutByCurrentSession()) {
        atLeastOneContentTabInEditMode = true;
      }
    });
    return !atLeastOneContentTabInEditMode;
  }/*

  override protected*/ function checkHidden()/*:Boolean*/ {
    return !this.getContextClickedContent();
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.actions.AbstractTabContextMenuContentAction",
      constructor: ProcessAllContentTabsAction$,
      super$0BRG: function() {
        com.coremedia.cms.editor.sdk.actions.AbstractTabContextMenuContentAction.prototype.constructor.apply(this, arguments);
      },
      _handler$0BRG: _handler,
      confirmRevertContents$0BRG: confirmRevertContents,
      getAllContentTabsInEditMode$0BRG: getAllContentTabsInEditMode,
      checkDisabled: checkDisabled,
      checkHidden: checkHidden,
      config: {action: null},
      statics: {
        PROCESS_ALL_CONTENT_TABS_CHECKIN: "processAllContentTabsCheckin",
        PROCESS_ALL_CONTENT_TABS_REVERT: "processAllContentTabsRevert"
      },
      requires: [
        "Ext",
        "com.coremedia.cap.common.SESSION",
        "com.coremedia.cap.content.impl.BulkCheckInMethod",
        "com.coremedia.cap.content.impl.BulkRevertMethod",
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.cms.editor.sdk.actions.AbstractTabContextMenuContentAction",
        "com.coremedia.cms.editor.sdk.actions.Actions_properties",
        "mx.resources.ResourceManager"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.editorContext",
        "com.coremedia.cms.editor.sdk.premular.PremularBase",
        "com.coremedia.cms.editor.sdk.util.MessageBoxUtilInternal"
      ]
    };
});
