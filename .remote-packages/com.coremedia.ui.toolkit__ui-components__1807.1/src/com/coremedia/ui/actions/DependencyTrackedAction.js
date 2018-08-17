Ext.define("com.coremedia.ui.actions.DependencyTrackedAction", function(DependencyTrackedAction) {/*package com.coremedia.ui.actions{
import com.coremedia.ui.actions.*;
import net.jangaroo.ext.Exml;
[PublicApi]
public class DependencyTrackedAction extends DependencyTrackedActionBase{

    import com.coremedia.ui.data.ValueExpression;

    public*/function DependencyTrackedAction$(config/*:DependencyTrackedAction = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.ui.actions.DependencyTrackedActionBase*/ =AS3.cast(com.coremedia.ui.actions.DependencyTrackedActionBase,{});
    var defaults_$1/*:DependencyTrackedAction*/ =AS3.cast(DependencyTrackedAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$ojL0(config_$1);
  }/*

    [Bindable]
    public var statusExpression:ValueExpression;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.actions.DependencyTrackedActionBase",
      metadata: {"": ["PublicApi"]},
      constructor: DependencyTrackedAction$,
      super$ojL0: function() {
        com.coremedia.ui.actions.DependencyTrackedActionBase.prototype.constructor.apply(this, arguments);
      },
      config: {statusExpression: null},
      requires: [
        "com.coremedia.ui.actions.DependencyTrackedActionBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
