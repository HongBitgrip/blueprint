Ext.define("com.coremedia.cms.editor.sdk.actions.OpenPremularAction", function(OpenPremularAction) {/*package com.coremedia.cms.editor.sdk.actions{
import com.coremedia.cms.editor.sdk.actions.*;
import net.jangaroo.ext.Exml;
[PublicApi]
/**
 Opens premular tabs for the provided premular configurations.
 * /
public class OpenPremularAction extends OpenPremularActionBase{

    import com.coremedia.ui.data.ValueExpression;

    public*/function OpenPremularAction$(config/*:OpenPremularAction = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.actions.OpenPremularActionBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.OpenPremularActionBase,{});
    var defaults_$1/*:OpenPremularAction*/ =AS3.cast(OpenPremularAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$wgET(config_$1);
  }/*

    /**
     * A value expression evaluating to the Array of com.coremedia.cms.editor.sdk.premular.PremularConfigurations that
     * should be opened.
     * /
    [Bindable]
    public var premularConfigurationsValueExpression:ValueExpression;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.actions.OpenPremularActionBase",
      metadata: {"": ["PublicApi"]},
      constructor: OpenPremularAction$,
      super$wgET: function() {
        com.coremedia.cms.editor.sdk.actions.OpenPremularActionBase.prototype.constructor.apply(this, arguments);
      },
      config: {premularConfigurationsValueExpression: null},
      requires: [
        "com.coremedia.cms.editor.sdk.actions.OpenPremularActionBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
