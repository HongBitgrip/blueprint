Ext.define("com.coremedia.personalization.ui.condition.BooleanCondition", function(BooleanCondition) {/*package com.coremedia.personalization.ui.condition{
import com.coremedia.personalization.ui.condition.*;
import net.jangaroo.ext.Exml;
import ext.layout.container.HBoxLayout;
/**
 The BooleanCondition is used to test the boolean value of a property. It provides a checkbox for the user to select
 whether the property should be 'true' or 'false'.
 * /
public class BooleanCondition extends BooleanConditionBase{

    public static const xtype:String = "com.coremedia.personalization.ui.config.booleanCondition";

    public*/function BooleanCondition$(config/*:BooleanCondition = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.personalization.ui.condition.BooleanConditionBase*/ =AS3.cast(com.coremedia.personalization.ui.condition.BooleanConditionBase,{});
    var defaults_$1/*:BooleanCondition*/ =AS3.cast(BooleanCondition,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"height" , 25);
    var layout_HBox_41_5_$1/*:ext.layout.container.HBoxLayout*/ =AS3.cast(Ext.layout.container.HBox,{});
    AS3.setBindable(config_$1,"layout" , layout_HBox_41_5_$1);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$ZWF0(config_$1);
  }/*

    /**
     name to be used for this condition instance in the condition combo box
     * /
    [Bindable]
    public var conditionName:String;


    /**
     name of context property mapped to this condition instance
     * /
    [Bindable]
    public var propertyName:String;


    /**
     true iff a newly created BooleanCondition should have a checked checkbox
     * /
    [Bindable]
    public var checkedByDefault:String;


    /**
     an optional text rendered in front of the checkbox
     * /
    [Bindable]
    public var text:String;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.personalization.ui.condition.BooleanConditionBase",
      alias: "widget.com.coremedia.personalization.ui.config.booleanCondition",
      constructor: BooleanCondition$,
      super$ZWF0: function() {
        com.coremedia.personalization.ui.condition.BooleanConditionBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        conditionName: null,
        propertyName: null,
        checkedByDefault: null,
        text: null
      },
      requires: [
        "Ext.layout.container.HBox",
        "com.coremedia.personalization.ui.condition.BooleanConditionBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
