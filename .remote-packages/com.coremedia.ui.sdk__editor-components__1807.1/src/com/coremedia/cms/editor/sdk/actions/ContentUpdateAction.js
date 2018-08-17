Ext.define("com.coremedia.cms.editor.sdk.actions.ContentUpdateAction", function(ContentUpdateAction) {/*package com.coremedia.cms.editor.sdk.actions{
import com.coremedia.cms.editor.sdk.actions.*;
import net.jangaroo.ext.Exml;
[PublicApi]
/**

 An abstract <code>contentAction</code> that performs a write operation on the configured contents.
 Extend this class for an content action which requires a write access on the content.
 The action is disabled when at least one of the following conditions is true:
 <ul>
 <li>there is no configured content.</li>
 <li>the user has no write right for the contents.</li>
 <li>the action is configured to be read-only</li>
 </ul>
 Configure the read-only status using one of the following three config parameters:
 <ul>
 <li><code>forceReadOnly</code>: Configure the forceReadOnly directly.</li>
 <li><code>forceReadOnlyVariableName</code>: Inject the forceReadOnly as context parameter.</li>
 <li><code>forceReadOnlyValueExpression</code>: Configure the forceReadOnly using a value expression.
 This is now deprecated. You should use one of the previous config parameters instead.</li>
 </ul>
 Override the method <code>isDisabledFor</code> to provide a more specific disable behaviour.
 See <code>ContentAction</code> for a read-only version.

 @see com.coremedia.cms.editor.sdk.config.contentAction

 * /
public class ContentUpdateAction extends ContentUpdateActionBase{

    import com.coremedia.ui.data.ValueExpression;

    public*/function ContentUpdateAction$(config/*:ContentUpdateAction = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.actions.ContentUpdateActionBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.ContentUpdateActionBase,{});
    var defaults_$1/*:ContentUpdateAction*/ =AS3.cast(ContentUpdateAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$FWaj(config_$1);
  }/*

    /**
     * DEPRECATED. Use the forceReadOnly config parameter instead.
     * An optional ValueExpression that indicates whether the action should be disabled.
     * /
    [Bindable]
    public var forceReadOnlyValueExpression:ValueExpression;

    /**
     A boolean parameter that indicates whether the action should be disabled.
     * /
    [Bindable]
    public var forceReadOnly:Boolean;


    /**
     The name of the context variable to be injected to the forceReadOnly property
     The context value should be boolean.
     * /
    [Bindable]
    public var forceReadOnlyVariableName:String;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.actions.ContentUpdateActionBase",
      metadata: {"": ["PublicApi"]},
      constructor: ContentUpdateAction$,
      super$FWaj: function() {
        com.coremedia.cms.editor.sdk.actions.ContentUpdateActionBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        forceReadOnlyValueExpression: null,
        forceReadOnly: false,
        forceReadOnlyVariableName: null
      },
      requires: [
        "com.coremedia.cms.editor.sdk.actions.ContentUpdateActionBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
