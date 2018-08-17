Ext.define("com.coremedia.personalization.ui.condition.PercentageKeywordCondition", function(PercentageKeywordCondition) {/*package com.coremedia.personalization.ui.condition{
import com.coremedia.personalization.ui.condition.*;
import net.jangaroo.ext.Exml;
/**
 A PercentageKeywordCondition used to edit integer percentage values within the range of 0-100. The actual property
 value accessible via getValue is a corresponding floating point value in [0, 1].
 * /
public class PercentageKeywordCondition extends PercentageKeywordConditionBase{

    public static const xtype:String = "com.coremedia.personalization.ui.config.percentageKeywordCondition";

    public*/function PercentageKeywordCondition$(config/*:PercentageKeywordCondition = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.personalization.ui.condition.PercentageKeywordConditionBase*/ =AS3.cast(com.coremedia.personalization.ui.condition.PercentageKeywordConditionBase,{});
    var defaults_$1/*:PercentageKeywordCondition*/ =AS3.cast(PercentageKeywordCondition,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$8hcP(config_$1);
  }/*

    /**
     the array of operators to be made available for selection. See below
     * /
    [Bindable]
    public var operators:Array;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.personalization.ui.condition.PercentageKeywordConditionBase",
      alias: "widget.com.coremedia.personalization.ui.config.percentageKeywordCondition",
      constructor: PercentageKeywordCondition$,
      super$8hcP: function() {
        com.coremedia.personalization.ui.condition.PercentageKeywordConditionBase.prototype.constructor.apply(this, arguments);
      },
      config: {operators: null},
      requires: [
        "com.coremedia.personalization.ui.condition.PercentageKeywordConditionBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
