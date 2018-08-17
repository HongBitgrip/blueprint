Ext.define("com.coremedia.personalization.ui.plugin.Addconditionitems", function(Addconditionitems) {/*package com.coremedia.personalization.ui.plugin{
import com.coremedia.personalization.ui.plugin.*;
import net.jangaroo.ext.Exml;
/**
 A plugin that adds conditions to a SelectionRulesField or a ConditionsField.
 * /
public class Addconditionitems extends AddConditionItemsPlugin{

    public*/function Addconditionitems$(config/*:Addconditionitems = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.personalization.ui.plugin.AddConditionItemsPlugin*/ =AS3.cast(com.coremedia.personalization.ui.plugin.AddConditionItemsPlugin,{});
    var defaults_$1/*:Addconditionitems*/ =AS3.cast(Addconditionitems,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$EjWb(config_$1);
  }/*

    /**
     The condition-items to be added
     * /
    [Bindable]
    public var items:Array;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.personalization.ui.plugin.AddConditionItemsPlugin",
      constructor: Addconditionitems$,
      super$EjWb: function() {
        com.coremedia.personalization.ui.plugin.AddConditionItemsPlugin.prototype.constructor.apply(this, arguments);
      },
      config: {items: null},
      requires: [
        "com.coremedia.personalization.ui.plugin.AddConditionItemsPlugin",
        "net.jangaroo.ext.Exml"
      ]
    };
});
