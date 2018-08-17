Ext.define("com.coremedia.elastic.social.studio.actions.ContributionAction", function(ContributionAction) {/*package com.coremedia.elastic.social.studio.actions{
import com.coremedia.elastic.social.studio.actions.*;
import net.jangaroo.ext.Exml;
public class ContributionAction extends ContributionActionBase{

    import com.coremedia.ui.data.ValueExpression;

    public*/function ContributionAction$(config/*:ContributionAction = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.elastic.social.studio.actions.ContributionActionBase*/ =AS3.cast(com.coremedia.elastic.social.studio.actions.ContributionActionBase,{});
    var defaults_$1/*:ContributionAction*/ =AS3.cast(ContributionAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$4TAT(config_$1);
  }/*

    [Bindable]
    public var contributionValueExpression:ValueExpression;

    [Bindable]
    public var contributions:Array;


    [Bindable]
    public var hideOnDisable:Boolean;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.elastic.social.studio.actions.ContributionActionBase",
      constructor: ContributionAction$,
      super$4TAT: function() {
        com.coremedia.elastic.social.studio.actions.ContributionActionBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        contributionValueExpression: null,
        contributions: null,
        hideOnDisable: false
      },
      requires: [
        "com.coremedia.elastic.social.studio.actions.ContributionActionBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
