Ext.define("com.coremedia.cms.editor.sdk.actions.NewContentAction", function(NewContentAction) {/*package com.coremedia.cms.editor.sdk.actions{
import com.coremedia.cms.editor.sdk.actions.*;
import net.jangaroo.ext.Exml;
/**
 An ext.Action that creates a new Content.
 * /
public class NewContentAction extends NewContentActionBase{

    import com.coremedia.ui.data.ValueExpression;

    public*/function NewContentAction$(config/*:NewContentAction = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.actions.NewContentActionBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.NewContentActionBase,{});
    var defaults_$1/*:NewContentAction*/ =AS3.cast(NewContentAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$r6Yw(config_$1);
  }/*

    /**
     * Expression evaluating to the folder where to create the new document.
     * /
    [Bindable]
    public var folderValueExpression:ValueExpression;

    /**
     * A model for informing a view of a newly created content object.
     * /
    [Bindable]
    public var createdContentValueExpression:ValueExpression;

    /**
     * An expression determining whether this action should be disabled.
     * Even if this expression determines that it should be enabled,
     * the action may still be disabled due to rights problems.
     * /
    [Bindable]
    public var primaryDisabledExpression:ValueExpression;

    /**
     When set true the action will be hidden when disabled. Default: false
     * /
    [Bindable]
    public var hideWhenDisabled:Boolean;


    /**
     A com.coremedia.cap.content.ContentType or the name of the contentType as String.
     * /
    [Bindable]
    public var contentType:Object;


    /**
     The name of the content to create.
     * /
    [Bindable]
    public var name:String;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.actions.NewContentActionBase",
      constructor: NewContentAction$,
      super$r6Yw: function() {
        com.coremedia.cms.editor.sdk.actions.NewContentActionBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        folderValueExpression: null,
        createdContentValueExpression: null,
        primaryDisabledExpression: null,
        hideWhenDisabled: false,
        contentType: null,
        name: null
      },
      requires: [
        "com.coremedia.cms.editor.sdk.actions.NewContentActionBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
