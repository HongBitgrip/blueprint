Ext.define("com.coremedia.cms.editor.sdk.foldercombo.AddDefaultFolderComboEntry", function(AddDefaultFolderComboEntry) {/*package com.coremedia.cms.editor.sdk.foldercombo{
import com.coremedia.cms.editor.sdk.foldercombo.*;
import net.jangaroo.ext.Exml;
/**
 Registers a function to calculate the default entry of the folder combo box, depending
 on the active content and the configured content type.
 * /
public class AddDefaultFolderComboEntry extends AddDefaultFolderComboEntryBase{

    public*/function AddDefaultFolderComboEntry$(config/*:AddDefaultFolderComboEntry = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.foldercombo.AddDefaultFolderComboEntryBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.foldercombo.AddDefaultFolderComboEntryBase,{});
    var defaults_$1/*:AddDefaultFolderComboEntry*/ =AS3.cast(AddDefaultFolderComboEntry,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$f1dw(config_$1);
  }/*

    /**
     The function that is called when a a folder combo box is created to compute the default entry.
     The function receives the content bound to the current workarea tab as first parameter and the
     corresponding contenttype as second parameter. Note that both parameters can be null.

     The path is calculated using a FunctionValueExpression, therefore undefined can be returned
     until the calculation is complete.

     If the default value of the function should not apply, return null instead.
     * /
    [Bindable]
    public var lookup:Function;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.foldercombo.AddDefaultFolderComboEntryBase",
      constructor: AddDefaultFolderComboEntry$,
      super$f1dw: function() {
        com.coremedia.cms.editor.sdk.foldercombo.AddDefaultFolderComboEntryBase.prototype.constructor.apply(this, arguments);
      },
      config: {lookup: null},
      requires: [
        "com.coremedia.cms.editor.sdk.foldercombo.AddDefaultFolderComboEntryBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
