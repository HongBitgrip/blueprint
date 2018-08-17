Ext.define("com.coremedia.cms.editor.sdk.foldercombo.AddDefaultFolderComboEntryBase", function(AddDefaultFolderComboEntryBase) {/*package com.coremedia.cms.editor.sdk.foldercombo {

import ext.Component;
import ext.plugin.AbstractPlugin;

public class AddDefaultFolderComboEntryBase extends AbstractPlugin {

  private var lookup:Function;

  public*/ function AddDefaultFolderComboEntryBase$(config/*:AddDefaultFolderComboEntry = null*/) {if(arguments.length<=0)config=null;
    this.lookup$qWVh = AS3.getBindable(config,"lookup");
    this.super$qWVh(config);
  }/*

  override public*/ function init(cmp/*:Component*/)/*:void*/ {
    com.coremedia.cms.editor.sdk.foldercombo.FolderComboBase.addLookupMethod(this.lookup$qWVh);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.plugin.Abstract",
      lookup$qWVh: null,
      constructor: AddDefaultFolderComboEntryBase$,
      super$qWVh: function() {
        Ext.plugin.Abstract.prototype.constructor.apply(this, arguments);
      },
      init: init,
      requires: ["Ext.plugin.Abstract"],
      uses: ["com.coremedia.cms.editor.sdk.foldercombo.FolderComboBase"]
    };
});
