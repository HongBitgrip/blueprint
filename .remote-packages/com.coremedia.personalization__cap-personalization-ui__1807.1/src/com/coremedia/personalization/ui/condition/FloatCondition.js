Ext.define("com.coremedia.personalization.ui.condition.FloatCondition", function(FloatCondition) {/*package com.coremedia.personalization.ui.condition{
import com.coremedia.personalization.ui.condition.*;
import net.jangaroo.ext.Exml;
import ext.layout.container.HBoxLayout;
/**
 The FloatCondition is used to define conditions using floating point values.

 <p>The default validation type used for the value field is: <code>/^\d+(\.\d+)?$/</code></p>

 <p>The names used for the available operators can be overridden by a dictionary supplied via the <b>operatorNames</b> property.</p>
 <p>The available operators and their default names are:
 <ul>
 <li>lt: 'less'</li>
 <li>le: 'less or equal'</li>
 <li>eq: 'equal'</li>
 <li>ge: 'greater or equal'</li>
 <li>gt: 'greater'</li>
 </ul></p>

 * /
public class FloatCondition extends FloatConditionBase{

    public static const xtype:String = "com.coremedia.personalization.ui.config.floatCondition";

    public*/function FloatCondition$(config/*:FloatCondition = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.personalization.ui.condition.FloatConditionBase*/ =AS3.cast(com.coremedia.personalization.ui.condition.FloatConditionBase,{});
    var defaults_$1/*:FloatCondition*/ =AS3.cast(FloatCondition,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"height" , 25);
    var layout_HBox_89_5_$1/*:ext.layout.container.HBoxLayout*/ =AS3.cast(Ext.layout.container.HBox,{});
    AS3.setBindable(config_$1,"layout" , layout_HBox_89_5_$1);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$ZvzC(config_$1);
  }/*

    /**
     name to be used for this condition instance in the condition combox
     * /
    [Bindable]
    public var conditionName:String;


    /**
     name of context property mapped to this condition instance
     * /
    [Bindable]
    public var propertyName:String;


    /**
     set to true if this condition is to be the default condition of the condition panel. The first condition in the
     list of the registered conditions with the default flag set is used as the default
     * /
    [Bindable]
    public var isDefault:Boolean;


    /**
     the text to be shown if no operator is selected. Default to operator. Optional.
     * /
    [Bindable]
    public var operatorEmptyText:String;


    /**
     user-presentable names of the operators. See below. Optional.
     * /
    [Bindable]
    public var operatorNames:Object;


    /**
     the array of operators to be made available for selection. See below.
     * /
    [Bindable]
    public var operators:Array;


    /**
     the operator to select initially. Optional.
     * /
    [Bindable]
    public var operator:String;


    /**
     the text to be shown in the value field if it is empty. Defaults to value
     * /
    [Bindable]
    public var valueEmptyText:String;


    /**
     the text to place into the value field
     * /
    [Bindable]
    public var valueText:String;


    /**
     the validation type of the value field. See below
     * /
    [Bindable]
    public var valueVType:String;


    /**
     the text to be shown after the value field. Defaults to null.
     * /
    [Bindable]
    public var suffixText:String;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.personalization.ui.condition.FloatConditionBase",
      alias: "widget.com.coremedia.personalization.ui.config.floatCondition",
      constructor: FloatCondition$,
      super$ZvzC: function() {
        com.coremedia.personalization.ui.condition.FloatConditionBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        conditionName: null,
        propertyName: null,
        isDefault: false,
        operatorEmptyText: null,
        operatorNames: null,
        operators: null,
        operator: null,
        valueEmptyText: null,
        valueText: null,
        valueVType: null,
        suffixText: null
      },
      requires: [
        "Ext.layout.container.HBox",
        "com.coremedia.personalization.ui.condition.FloatConditionBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
