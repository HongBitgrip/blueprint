Ext.define("com.coremedia.cms.editor.sdk.premular.fields.richtext.PasteContentActionBase", function(PasteContentActionBase) {/*package com.coremedia.cms.editor.sdk.premular.fields.richtext {
import com.coremedia.cms.editor.sdk.clipboard.Clipboard;
import com.coremedia.cms.editor.sdk.components.CoreMediaRichTextArea;
import com.coremedia.cms.editor.sdk.dragdrop.RichTextAreaDropTarget;
import com.coremedia.cms.editor.sdk.premular.fields.RichTextPropertyField;
import com.coremedia.ui.actions.DependencyTrackedAction;
import com.coremedia.ui.ckeditor.RichTextArea;
import com.coremedia.ui.util.createComponentSelector;

import ext.Component;

[PublicApi]
public class PasteContentActionBase extends DependencyTrackedAction {

  private var ckEditor:*;
  private var richtextPropertyField:RichTextPropertyField;

  public*/ function PasteContentActionBase$(config/*:PasteContentAction = null*/) {if(arguments.length<=0)config=null;
    this.super$qW8V(config);
  }/*

  /** @private * /
  [InjectFromExtParent]
  public*/ function setCKEditor(editor/*:**/)/*:void*/ {
    this.ckEditor$qW8V = editor;

    //try to deselect when no selection was made
    if (this.ckEditor$qW8V) {
      this.ckEditor$qW8V.on("selectionChange",AS3.bind( this,"selectionChange$qW8V"));
    }
  }/*

  /**
   * We need the richtext component here since we want to re-use
   * the same implementation used for dnd.
   * /
  override public*/ function addComponent(comp/*:Component*/)/*:void*/ {
    com.coremedia.ui.actions.DependencyTrackedAction.prototype.addComponent.call(this,comp);
    this.richtextPropertyField$qW8V =AS3.as( comp.up(com.coremedia.ui.util.createComponentSelector()._xtype(com.coremedia.cms.editor.sdk.premular.fields.RichTextPropertyField.xtype).build()),  com.coremedia.cms.editor.sdk.premular.fields.RichTextPropertyField);
  }/*

  override protected*/ function calculateDisabled()/*:Boolean*/ {
    var clipboard/*:Clipboard*/ = com.coremedia.cms.editor.sdk.clipboard.Clipboard.getInstance();
    var contentsToPaste/*:Array*/ = clipboard.getContents();
    if (!contentsToPaste || contentsToPaste.length === 0) {
      return true;
    }

    if(!this.ckEditor$qW8V) {
      return true;
    }

    // The action should not be enabled when there is no selection set,
    // however during a revert this isn't calculated so the action itself still has to handle an empty range
    // inside the execution.
    var ranges/*:**/ = this.ckEditor$qW8V.getSelection().getRanges();
    if(ranges[0] === undefined) {
      return true;
    }

    return !com.coremedia.cms.editor.sdk.dragdrop.RichTextAreaDropTarget.isValidRichTextContent(contentsToPaste);
  }/*

  /**
   * Force disable calculation on focus change
   * /
  private*/ function selectionChange()/*:void*/ {
    this.setDisabled(this.calculateDisabled());
  }/*

  internal*/ function exec()/*:void*/ {
    var clipboard/*:Clipboard*/ = com.coremedia.cms.editor.sdk.clipboard.Clipboard.getInstance();
    var contentsToPaste/*:Array*/ = clipboard.getContents();

    var richtext/*:CoreMediaRichTextArea*/ =AS3.as( this.richtextPropertyField$qW8V.down(com.coremedia.ui.util.createComponentSelector()._xtype(com.coremedia.ui.ckeditor.RichTextArea.xtype).build()),  com.coremedia.cms.editor.sdk.components.CoreMediaRichTextArea);
    com.coremedia.cms.editor.sdk.dragdrop.RichTextAreaDropTarget.createLinks(richtext, contentsToPaste);
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.actions.DependencyTrackedAction",
      metadata: {
        "": ["PublicApi"],
        setCKEditor: ["InjectFromExtParent"]
      },
      ckEditor$qW8V: undefined,
      richtextPropertyField$qW8V: null,
      constructor: PasteContentActionBase$,
      super$qW8V: function() {
        com.coremedia.ui.actions.DependencyTrackedAction.prototype.constructor.apply(this, arguments);
      },
      setCKEditor: setCKEditor,
      addComponent: addComponent,
      calculateDisabled: calculateDisabled,
      selectionChange$qW8V: selectionChange,
      exec: exec,
      requires: [
        "com.coremedia.ui.actions.DependencyTrackedAction",
        "com.coremedia.ui.ckeditor.RichTextArea",
        "com.coremedia.ui.util.createComponentSelector"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.clipboard.Clipboard",
        "com.coremedia.cms.editor.sdk.components.CoreMediaRichTextArea",
        "com.coremedia.cms.editor.sdk.dragdrop.RichTextAreaDropTarget",
        "com.coremedia.cms.editor.sdk.premular.fields.RichTextPropertyField"
      ]
    };
});
