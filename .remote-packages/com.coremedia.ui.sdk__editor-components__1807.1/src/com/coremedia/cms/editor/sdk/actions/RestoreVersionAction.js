Ext.define("com.coremedia.cms.editor.sdk.actions.RestoreVersionAction", function(RestoreVersionAction) {/*package com.coremedia.cms.editor.sdk.actions{
import com.coremedia.cms.editor.sdk.actions.*;
import net.jangaroo.ext.Exml;
public class RestoreVersionAction extends RestoreVersionActionBase{

    import com.coremedia.ui.data.ValueExpression;

    public*/function RestoreVersionAction$(config/*:RestoreVersionAction = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.actions.RestoreVersionActionBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.RestoreVersionActionBase,{});
    var defaults_$1/*:RestoreVersionAction*/ =AS3.cast(RestoreVersionAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$Gceh(config_$1);
  }/*

    /**
     * A value expression evaluating to a content version. The current version of the
     * Content will be updated to match the content of this version.
     * /
    [Bindable]
    public var versionValueExpression:ValueExpression;

    /**
     * An optional ValueExpression that indicates whether the action should be disabled.
     * /
    [Bindable]
    public var forceReadOnlyValueExpression:ValueExpression;

    /**
     The name of the context variable to be injected to the forceReadOnly property.
     The context value should boolean.
     * /
    [Bindable]
    public var forceReadOnlyVariableName:String;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.actions.RestoreVersionActionBase",
      constructor: RestoreVersionAction$,
      super$Gceh: function() {
        com.coremedia.cms.editor.sdk.actions.RestoreVersionActionBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        versionValueExpression: null,
        forceReadOnlyValueExpression: null,
        forceReadOnlyVariableName: null
      },
      requires: [
        "com.coremedia.cms.editor.sdk.actions.RestoreVersionActionBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
