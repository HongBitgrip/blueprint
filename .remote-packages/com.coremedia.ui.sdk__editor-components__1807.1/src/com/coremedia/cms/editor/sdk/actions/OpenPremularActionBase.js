Ext.define("com.coremedia.cms.editor.sdk.actions.OpenPremularActionBase", function(OpenPremularActionBase) {/*package com.coremedia.cms.editor.sdk.actions {

import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.ui.actions.DependencyTrackedAction;
import com.coremedia.ui.data.ValueExpression;

[PublicApi]
public class OpenPremularActionBase extends DependencyTrackedAction {
  private var premularConfigurationsValueExpression:ValueExpression;

  /**
   * If set to true the last opened tab will not be the active tab but next to the active tab. Default false.
   * /
  [Bindable]
  public var background:Boolean = false;

  public*/ function OpenPremularActionBase$(config/*:OpenPremularAction = null*/) {if(arguments.length<=0)config=null;
    this.premularConfigurationsValueExpression$fGWE = AS3.getBindable(config,"premularConfigurationsValueExpression");
    AS3.setBindable(this,"background" , ! !AS3.getBindable(config,"background"));

    var actionName/*:String*/ = AS3.getBindable(this,"background") ? 'openInBackgroundTab' : 'openInTab';
    this.super$fGWE(AS3.cast(com.coremedia.cms.editor.sdk.actions.OpenPremularAction,com.coremedia.cms.editor.sdk.actions.ActionConfigUtil.extendConfig(config, actionName, {handler:AS3.bind( this,"openPremulars$fGWE")})));
  }/*

  override protected*/ function calculateDisabled()/*:Boolean*/ {
    var premularConfigurations/*:Array*/ = this.premularConfigurationsValueExpression$fGWE.getValue();
    return !(premularConfigurations && premularConfigurations.length > 0);
  }/*

  private*/ function openPremulars()/*:void*/ {
    var premularConfigurations/*:Array*/ = this.premularConfigurationsValueExpression$fGWE.getValue();
    com.coremedia.cms.editor.sdk.editorContext.getContentTabManager().openPremulars(premularConfigurations, AS3.getBindable(this,"background"));
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.actions.DependencyTrackedAction",
      metadata: {"": ["PublicApi"]},
      premularConfigurationsValueExpression$fGWE: null,
      constructor: OpenPremularActionBase$,
      super$fGWE: function() {
        com.coremedia.ui.actions.DependencyTrackedAction.prototype.constructor.apply(this, arguments);
      },
      calculateDisabled: calculateDisabled,
      openPremulars$fGWE: openPremulars,
      config: {background: false},
      requires: ["com.coremedia.ui.actions.DependencyTrackedAction"],
      uses: [
        "com.coremedia.cms.editor.sdk.actions.ActionConfigUtil",
        "com.coremedia.cms.editor.sdk.actions.OpenPremularAction",
        "com.coremedia.cms.editor.sdk.editorContext"
      ]
    };
});
