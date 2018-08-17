Ext.define("com.coremedia.cms.editor.sdk.components.folderprompt.FolderPromptBase", function(FolderPromptBase) {/*package com.coremedia.cms.editor.sdk.components.folderprompt {

import com.coremedia.cap.common.SESSION;
import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.ContentCreateResult;
import com.coremedia.cap.content.ContentPropertyNames;
import com.coremedia.cms.editor.sdk.components.StudioDialog;
import com.coremedia.ui.data.ValueExpressionFactory;

import ext.container.Container;
import ext.menu.Separator;

/**
 * Base class of the folder prompt dialog, contains the current
 * folders marked for creation.
 * /
public class FolderPromptBase extends StudioDialog {
  private var folders:Array;
  private var baseFolder:Content;
  private var callback:Function;

  public*/ function FolderPromptBase$(config/*:FolderPrompt = null*/) {if(arguments.length<=0)config=null;
    this.super$fhL1(config);
    this.folders$fhL1 = AS3.getBindable(config,"folders");
    this.callback$fhL1 = AS3.getBindable(config,"callback");
    this.baseFolder$fhL1 = AS3.getBindable(config,"baseFolder");
    this.addListener('afterlayout',AS3.bind( this,"addPanels$fhL1"));
  }/*

  /**
   * Add the file panels after render
   * /
  private*/ function addPanels()/*:void*/ {
    this.removeListener('afterlayout',AS3.bind( this,"addPanels$fhL1"));
    this.addFolderItems$fhL1();
  }/*

  /**
   * Creates the folder panels and adds
   * them to the dialog.
   * /
  private*/ function addFolderItems()/*:void*/ {var this$=this;
    com.coremedia.ui.data.ValueExpressionFactory.create(com.coremedia.cap.content.ContentPropertyNames.PATH, this.baseFolder$fhL1).loadValue(function(path/*:String*/)/*:void*/ {
      var uploadPanel/*:Container*/ =AS3.as( this$.queryById('folder-list'),  Ext.container.Container);
      var revFolders/*:Array*/ = this$.folders$fhL1.reverse();
      var fullPath/*:String*/ = path;
      for (var i/*:int*/ = 0; i < this$.folders$fhL1.length; i++) {
        if (fullPath !== "/") {
          fullPath +=  "/";
        }
        fullPath +=  revFolders[i];
        var panelCfg/*:FolderPanel*/ = AS3.cast(com.coremedia.cms.editor.sdk.components.folderprompt.FolderPanel,{});
        AS3.setBindable(panelCfg,"name" , this$.folders$fhL1[i]);
        AS3.setBindable(panelCfg,"path" , fullPath);
        var panel/*:FolderPanel*/ = new com.coremedia.cms.editor.sdk.components.folderprompt.FolderPanel(panelCfg);
        uploadPanel.add(panel);
        var menuSeparatorCfg/*:Separator*/ = AS3.cast(Ext.menu.Separator,{});
        uploadPanel.add(menuSeparatorCfg);
      }
    });
  }/*

  protected*/ function okPressed()/*:void*/ {
    this.close();
    doCreateFolder$static(this.baseFolder$fhL1, this.folders$fhL1.reverse(), this.callback$fhL1, []);
  }/*

  private static*/ function doCreateFolder$static(folder/*:Content*/, toCreate/*:Array*/, callback/*:Function*/, created/*:Array*/)/*:void*/ {
    var name/*:String*/ = toCreate.pop();
    if (name) {
      com.coremedia.cap.common.SESSION.getConnection().getContentRepository().getFolderContentType().create(folder, name, function (result/*:ContentCreateResult*/)/*:void*/ {
        if (result.error) {
          callback(new com.coremedia.cms.editor.sdk.components.folderprompt.FolderCreationResultImpl(false, created, null, result.error));
        }
        else {
          result.createdContent.load(function ()/*:void*/ {
            created.push(result.createdContent);
            doCreateFolder$static(result.createdContent, toCreate, callback, created);
          });
        }
      });
    }
    else {
      callback(new com.coremedia.cms.editor.sdk.components.folderprompt.FolderCreationResultImpl(true, created, folder));
    }
  }/*

  protected*/ function cancelPressed()/*:void*/ {
    this.close();
    this.callback$fhL1(new com.coremedia.cms.editor.sdk.components.folderprompt.FolderCreationResultImpl(false, null, null));
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.components.StudioDialog",
      folders$fhL1: null,
      baseFolder$fhL1: null,
      callback$fhL1: null,
      constructor: FolderPromptBase$,
      super$fhL1: function() {
        com.coremedia.cms.editor.sdk.components.StudioDialog.prototype.constructor.apply(this, arguments);
      },
      addPanels$fhL1: addPanels,
      addFolderItems$fhL1: addFolderItems,
      okPressed: okPressed,
      cancelPressed: cancelPressed,
      requires: [
        "Ext.container.Container",
        "Ext.menu.Separator",
        "com.coremedia.cap.common.SESSION",
        "com.coremedia.cap.content.ContentPropertyNames",
        "com.coremedia.cms.editor.sdk.components.StudioDialog",
        "com.coremedia.ui.data.ValueExpressionFactory"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.components.folderprompt.FolderCreationResultImpl",
        "com.coremedia.cms.editor.sdk.components.folderprompt.FolderPanel"
      ]
    };
});
