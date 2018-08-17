Ext.define("com.coremedia.cms.editor.controlroom.project.actions.PasteFromClipboardToProjectActionBase", function(PasteFromClipboardToProjectActionBase) {/*package com.coremedia.cms.editor.controlroom.project.actions {
import com.coremedia.cap.content.Content;
import com.coremedia.cms.editor.controlroom.actions.ControlRoomConfigUtil;
import com.coremedia.cms.editor.controlroom.project.rest.Project;
import com.coremedia.cms.editor.sdk.clipboard.Clipboard;
import com.coremedia.ui.data.ValueExpression;

public class PasteFromClipboardToProjectActionBase extends AbstractProjectAction {

  private var contentValueExpression:ValueExpression;

  public*/ function PasteFromClipboardToProjectActionBase$(config/*:PasteFromClipboardToProjectAction = null*/) {if(arguments.length<=0)config=null;
    this.contentValueExpression$iqnA = AS3.getBindable(config,"contentValueExpression");
    this.super$iqnA(AS3.cast(com.coremedia.cms.editor.controlroom.project.actions.PasteFromClipboardToProjectAction,com.coremedia.cms.editor.controlroom.actions.ControlRoomConfigUtil.extendConfig(config, 'pasteFromClipboardToProjects', {handler:AS3.bind( this,"pasteFromClipboardToProject$iqnA")})));
  }/*

  private*/ function pasteFromClipboardToProject()/*:void*/ {
    var clipboard/*:Clipboard*/ = com.coremedia.cms.editor.sdk.clipboard.Clipboard.getInstance();
    var contentsToPaste/*:Array*/ = clipboard.getContents();
    if (!contentsToPaste || contentsToPaste.length === 0) {
      return;
    }

    this.getProjects().forEach(function (project/*:Project*/)/*:void*/ {
      project.addContents(contentsToPaste);
    });
    this.contentValueExpression$iqnA && this.contentValueExpression$iqnA.setValue(contentsToPaste);
  }/*

  override public*/ function checkDisabled()/*:Boolean*/ {
    if (!this.getProjects() || this.getProjects().length === 0) {
      return true;
    }

    var clipboard/*:Clipboard*/ = com.coremedia.cms.editor.sdk.clipboard.Clipboard.getInstance();
    //noinspection JSMismatchedCollectionQueryUpdate
    var contentsToPaste/*:Array*/ = clipboard.getContents();

    return !contentsToPaste || contentsToPaste.length === 0 || contentsToPaste.some(isFolder$static);
  }/*

  private static*/ function isFolder$static(content/*:Content*/)/*:Boolean*/ {
    return content.isFolder();
  }/*

  override public*/ function checkHidden()/*:Boolean*/ {
    return false;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.controlroom.project.actions.AbstractProjectAction",
      contentValueExpression$iqnA: null,
      constructor: PasteFromClipboardToProjectActionBase$,
      super$iqnA: function() {
        com.coremedia.cms.editor.controlroom.project.actions.AbstractProjectAction.prototype.constructor.apply(this, arguments);
      },
      pasteFromClipboardToProject$iqnA: pasteFromClipboardToProject,
      checkDisabled: checkDisabled,
      checkHidden: checkHidden,
      requires: [
        "com.coremedia.cms.editor.controlroom.project.actions.AbstractProjectAction",
        "com.coremedia.cms.editor.sdk.clipboard.Clipboard"
      ],
      uses: [
        "com.coremedia.cms.editor.controlroom.actions.ControlRoomConfigUtil",
        "com.coremedia.cms.editor.controlroom.project.actions.PasteFromClipboardToProjectAction"
      ]
    };
});
