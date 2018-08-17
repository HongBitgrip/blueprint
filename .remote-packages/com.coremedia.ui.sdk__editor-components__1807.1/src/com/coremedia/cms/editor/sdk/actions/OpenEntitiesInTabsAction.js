Ext.define("com.coremedia.cms.editor.sdk.actions.OpenEntitiesInTabsAction", function(OpenEntitiesInTabsAction) {/*package com.coremedia.cms.editor.sdk.actions{
import com.coremedia.cms.editor.sdk.actions.*;
import net.jangaroo.ext.Exml;
[PublicApi]
/**

 This action opens entities resulting from the configured value expression in work area tabs.
 The tab corresponding to the last entity will be activated, unless <code>background</code> is set to
 <code>false</code>.

 * /
public class OpenEntitiesInTabsAction extends OpenEntitiesInTabsActionBase{

    import com.coremedia.ui.data.ValueExpression;

    public static const ACTION_ID:String = "openEntitiesInTabsActionBase";

    public*/function OpenEntitiesInTabsAction$(config/*:OpenEntitiesInTabsAction = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.actions.OpenEntitiesInTabsActionBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.OpenEntitiesInTabsActionBase,{});
    var defaults_$1/*:OpenEntitiesInTabsAction*/ =AS3.cast(OpenEntitiesInTabsAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$9rsF(config_$1);
  }/*

    /**
     * A value expression evaluating to an entity or an array of entities for which to open work area tabs.
     * Any elements for which no &lt;code>EntityWorkAreaTabType&lt;/code> is registered are ignored.
     *
     * @see com.coremedia.cms.editor.sdk.desktop.EntityWorkAreaTabType
     * /
    [Bindable]
    public var entitiesValueExpression:ValueExpression;

    /**
     The name of the context variable to be injected to the entities property.
     The context value must be an entity or an array of entities.
     * /
    [Bindable]
    public var entitiesVariableName:String;


    /**
     if set to true the opened tab will not be the active tab but next to the active tab. Default false
     * /
    [Bindable]
    public var background:Boolean;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.actions.OpenEntitiesInTabsActionBase",
      metadata: {"": ["PublicApi"]},
      constructor: OpenEntitiesInTabsAction$,
      super$9rsF: function() {
        com.coremedia.cms.editor.sdk.actions.OpenEntitiesInTabsActionBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        entitiesValueExpression: null,
        entitiesVariableName: null,
        background: false
      },
      statics: {ACTION_ID: "openEntitiesInTabsActionBase"},
      requires: [
        "com.coremedia.cms.editor.sdk.actions.OpenEntitiesInTabsActionBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
