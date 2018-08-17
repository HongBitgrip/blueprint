Ext.define("com.coremedia.cms.editor.sdk.collectionview.tree.OpenInTreeAction", function(OpenInTreeAction) {/*package com.coremedia.cms.editor.sdk.collectionview.tree{
import com.coremedia.cms.editor.sdk.collectionview.tree.*;
import net.jangaroo.ext.Exml;
public class OpenInTreeAction extends OpenInTreeActionBase{

    import com.coremedia.ui.data.ValueExpression;

    public*/function OpenInTreeAction$(config/*:OpenInTreeAction = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.collectionview.tree.OpenInTreeActionBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.collectionview.tree.OpenInTreeActionBase,{});
    var defaults_$1/*:OpenInTreeAction*/ =AS3.cast(OpenInTreeAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$9XjY(config_$1);
  }/*

    /**
     * value expression that holds the selected items
     * /
    [Bindable]
    public var selectedItemsValueExpression:ValueExpression;

    /**
     * value expression that can be set to a folder to open the folder
     * /
    [Bindable]
    public var selectedFolderValueExpression:ValueExpression;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.collectionview.tree.OpenInTreeActionBase",
      constructor: OpenInTreeAction$,
      super$9XjY: function() {
        com.coremedia.cms.editor.sdk.collectionview.tree.OpenInTreeActionBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        selectedItemsValueExpression: null,
        selectedFolderValueExpression: null
      },
      requires: [
        "com.coremedia.cms.editor.sdk.collectionview.tree.OpenInTreeActionBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
