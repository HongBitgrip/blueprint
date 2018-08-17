Ext.define("com.coremedia.cms.editor.sdk.actions.DeleteImageLinkAction", function(DeleteImageLinkAction) {/*package com.coremedia.cms.editor.sdk.actions{
import com.coremedia.cms.editor.sdk.actions.*;
import net.jangaroo.ext.Exml;
/**
 An ext.Action that cleans the given LinkList property, i.e. sets it to the empty Array [].
 * /
public class DeleteImageLinkAction extends DeleteImageLinkActionBase{

    import com.coremedia.ui.data.ValueExpression;

    public*/function DeleteImageLinkAction$(config/*:DeleteImageLinkAction = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.actions.DeleteImageLinkActionBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.DeleteImageLinkActionBase,{});
    var defaults_$1/*:DeleteImageLinkAction*/ =AS3.cast(DeleteImageLinkAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$2FdL(config_$1);
  }/*

    /**
     * Value expression pointing to the Content containing the LinkList property to clean.
     * /
    [Bindable]
    public var bindTo:ValueExpression;

    /**
     Name of the LinkList property to clean.
     * /
    [Bindable]
    public var propertyName:String;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.actions.DeleteImageLinkActionBase",
      constructor: DeleteImageLinkAction$,
      super$2FdL: function() {
        com.coremedia.cms.editor.sdk.actions.DeleteImageLinkActionBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        bindTo: null,
        propertyName: null
      },
      requires: [
        "com.coremedia.cms.editor.sdk.actions.DeleteImageLinkActionBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
