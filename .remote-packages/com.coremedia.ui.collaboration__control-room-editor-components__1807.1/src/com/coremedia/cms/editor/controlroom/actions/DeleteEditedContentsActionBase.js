Ext.define("com.coremedia.cms.editor.controlroom.actions.DeleteEditedContentsActionBase", function(DeleteEditedContentsActionBase) {/*package com.coremedia.cms.editor.controlroom.actions {
import com.coremedia.cms.editor.sdk.actions.ContentAction;
import com.coremedia.cms.editor.sdk.util.MessageBoxUtil;
import com.coremedia.collaboration.controlroom.rest.CapListRepositoryImpl;

import ext.Ext;

import mx.resources.ResourceManager;

[ResourceBundle('com.coremedia.cms.editor.controlroom.ControlRoom')]
public class DeleteEditedContentsActionBase extends ContentAction {

  private var mode:String;

  public*/ function DeleteEditedContentsActionBase$(config/*:DeleteEditedContentsAction = null*/) {if(arguments.length<=0)config=null;
    this.mode$3eMY = AS3.getBindable(config,"mode") || "all";
    this.super$3eMY(AS3.cast(com.coremedia.cms.editor.controlroom.actions.DeleteEditedContentsAction,com.coremedia.cms.editor.controlroom.actions.ControlRoomConfigUtil.extendConfig(config, 'deleteEditedContents_' + this.mode$3eMY, {handler:AS3.bind( this,"confirmDeleteEditedContents$3eMY")})));
  }/*

  private*/ function confirmDeleteEditedContents()/*:void*/ {var this$=this;
    if ("all" === this.mode$3eMY) {
      com.coremedia.cms.editor.sdk.util.MessageBoxUtil.showConfirmation(mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'Action_deleteEditedContents_confirm_title'),
              mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'Action_deleteEditedContents_confirm_message'),
              mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'Action_deleteEditedContents_confirm_buttonText'),
              function (btn/*:String*/)/*:void*/ {
                if ("ok" === btn) {
                  this$.deleteEditedContents$3eMY();
                }
              }, false
      );
    } else {
      this.deleteEditedContents$3eMY();
    }
  }/*

  private*/ function deleteEditedContents()/*:void*/ {
    if (this.mode$3eMY === "all") {
      com.coremedia.collaboration.controlroom.rest.CapListRepositoryImpl.getInstance().getEditedContents().setItems([], Ext.emptyFn);
    } else {
      var contents/*:Array*/ = this.getContents();
      if (!contents || !contents.length) {
        return;
      }
      com.coremedia.collaboration.controlroom.rest.CapListRepositoryImpl.getInstance().getEditedContents().removeItems(contents);
    }
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.actions.ContentAction",
      mode$3eMY: null,
      constructor: DeleteEditedContentsActionBase$,
      super$3eMY: function() {
        com.coremedia.cms.editor.sdk.actions.ContentAction.prototype.constructor.apply(this, arguments);
      },
      confirmDeleteEditedContents$3eMY: confirmDeleteEditedContents,
      deleteEditedContents$3eMY: deleteEditedContents,
      requires: [
        "Ext",
        "com.coremedia.cms.editor.controlroom.ControlRoom_properties",
        "com.coremedia.cms.editor.sdk.actions.ContentAction",
        "com.coremedia.cms.editor.sdk.util.MessageBoxUtil",
        "com.coremedia.collaboration.controlroom.rest.CapListRepositoryImpl",
        "mx.resources.ResourceManager"
      ],
      uses: [
        "com.coremedia.cms.editor.controlroom.actions.ControlRoomConfigUtil",
        "com.coremedia.cms.editor.controlroom.actions.DeleteEditedContentsAction"
      ]
    };
});
