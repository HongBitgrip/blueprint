Ext.define("com.coremedia.cms.editor.sdk.actions.ContentAction", function(ContentAction) {/*package com.coremedia.cms.editor.sdk.actions{
import com.coremedia.cms.editor.sdk.actions.*;
import net.jangaroo.ext.Exml;
[PublicApi]
/**
 Config class for an abstract ext.Action that performs a read-only operation on the configured contents.

 <p>The contents can be configured using one of the following three config parameters:</p>
 <ul>
 <li><code>contentVariableName</code>: Inject the content as context parameter.</li>
 <li><code>contents</code>: Configure the contents directly.</li>
 <li><code>contentValueExpression</code>: Configure the contents using a value expression.
 This is now deprecated. You should use one of the previous config parameters instead.</li>
 </ul>

 <p>See <code>ContentUpdateAction</code> for a content action with write access</p>

 * /
public class ContentAction extends ContentActionBase{

    import com.coremedia.ui.data.ValueExpression;

    public*/function ContentAction$(config/*:ContentAction = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.actions.ContentActionBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.ContentActionBase,{});
    var defaults_$1/*:ContentAction*/ =AS3.cast(ContentAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$qf64(config_$1);
  }/*

    /**
     * A value expression evaluating to a content to be processed
     * or to an array of contents to be processed.
     * /
    [Bindable]
    public var contentValueExpression:ValueExpression;

    /**
     The name of the context variable to be injected to the content property.
     The context value should be a content or an array of contents.
     * /
    [Bindable]
    public var contentVariableName:String;


    /**
     the contents on which the action will perform
     * /
    [Bindable]
    public var contents:Array;


    /**
     Determines whether the action's components (if any) should be hidden when the action is disabled.
     * /
    [Bindable]
    public var hideOnDisable:Boolean;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.actions.ContentActionBase",
      metadata: {"": ["PublicApi"]},
      constructor: ContentAction$,
      super$qf64: function() {
        com.coremedia.cms.editor.sdk.actions.ContentActionBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        contentValueExpression: null,
        contentVariableName: null,
        contents: null,
        hideOnDisable: false
      },
      requires: [
        "com.coremedia.cms.editor.sdk.actions.ContentActionBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
