Ext.define("com.coremedia.cms.editor.sdk.actions.RenameContentItemActionBase", function(RenameContentItemActionBase) {/*package com.coremedia.cms.editor.sdk.actions {

import com.coremedia.cap.content.Content;

import ext.Component;

public class RenameContentItemActionBase extends ContentAction {
  private var menuItem:Component;

  public*/ function RenameContentItemActionBase$(config/*:RenameContentItemAction = null*/) {if(arguments.length<=0)config=null;
    this.super$wswA(AS3.cast(com.coremedia.cms.editor.sdk.actions.RenameContentItemAction,com.coremedia.cms.editor.sdk.actions.ActionConfigUtil.extendConfig(config, "rename", {handler:AS3.bind( this,"renameContextItem$wswA")})));
  }/*

  override public*/ function addComponent(comp/*:Component*/)/*:void*/ {
    com.coremedia.cms.editor.sdk.actions.ContentAction.prototype.addComponent.call(this,comp);
    this.menuItem$wswA = comp;
  }/*

  private*/ function renameContextItem()/*:void*/ {
    var contents/*:Array*/ = this.getContents();
    if (!contents || contents.length !== 1) {
      return;
    }
    var content/*:Content*/ =AS3.as( contents[0],  com.coremedia.cap.content.Content);
    if (!content) {
      return;
    }

    var current/*:Component*/ = this.menuItem$wswA;
    while (current && !(AS3.is(current,  com.coremedia.cms.editor.sdk.actions.CanEditContentName))) {
      current = current['cmOwnerCt'] || current.up();
    }

    if (AS3.is(current,  com.coremedia.cms.editor.sdk.actions.CanEditContentName)) {
      var canEditContentName/*:CanEditContentName*/ = AS3.cast(com.coremedia.cms.editor.sdk.actions.CanEditContentName,current);
      canEditContentName.editContentName(content);
    }
  }/*

  override protected*/ function isDisabledFor(contents/*:Array*/)/*:Boolean*/ {
    if (!contents || contents.length != 1) {
      return true;
    }
    var content/*:Content*/ =AS3.as( AS3.cast(com.coremedia.cap.content.Content,contents[0]),  com.coremedia.cap.content.Content);
    return content && !content.getRepository().getAccessControl().mayRename(content);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.actions.ContentAction",
      menuItem$wswA: null,
      constructor: RenameContentItemActionBase$,
      super$wswA: function() {
        com.coremedia.cms.editor.sdk.actions.ContentAction.prototype.constructor.apply(this, arguments);
      },
      addComponent: addComponent,
      renameContextItem$wswA: renameContextItem,
      isDisabledFor: isDisabledFor,
      requires: [
        "com.coremedia.cap.content.Content",
        "com.coremedia.cms.editor.sdk.actions.ContentAction"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.actions.ActionConfigUtil",
        "com.coremedia.cms.editor.sdk.actions.CanEditContentName",
        "com.coremedia.cms.editor.sdk.actions.RenameContentItemAction"
      ]
    };
});
