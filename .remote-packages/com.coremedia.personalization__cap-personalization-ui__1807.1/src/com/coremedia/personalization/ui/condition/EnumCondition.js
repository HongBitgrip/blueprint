Ext.define("com.coremedia.personalization.ui.condition.EnumCondition", function(EnumCondition) {/*package com.coremedia.personalization.ui.condition{
import com.coremedia.personalization.ui.condition.*;
import net.jangaroo.ext.Exml;
import ext.layout.container.HBoxLayout;
/**
 The EnumCondition is used to select values from a given enumeration.
 * /
public class EnumCondition extends EnumConditionBase{

    public static const xtype:String = "com.coremedia.personalization.ui.config.enumCondition";

    public*/function EnumCondition$(config/*:EnumCondition = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.personalization.ui.condition.EnumConditionBase*/ =AS3.cast(com.coremedia.personalization.ui.condition.EnumConditionBase,{});
    var defaults_$1/*:EnumCondition*/ =AS3.cast(EnumCondition,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"height" , 25);
    var layout_HBox_76_5_$1/*:ext.layout.container.HBoxLayout*/ =AS3.cast(Ext.layout.container.HBox,{});
    AS3.setBindable(config_$1,"layout" , layout_HBox_76_5_$1);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$Jk9D(config_$1);
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
     set to true if this condition is to be the default condition of the condition panel. The first condition in the list of the registered conditions with the default flag set is used as the default
     * /
    [Bindable]
    public var isDefault:Boolean;


    /**
     the text to be shown if no operator is selected. Default to operator
     * /
    [Bindable]
    public var operatorEmptyText:String;


    /**
     operatorNames user-presentable names of the operators. See below.
     * /
    [Bindable]
    public var operatorNames:Object;


    /**
     the array of operators to be made available for selection. See below.
     * /
    [Bindable]
    public var operators:Array;


    /**
     the operator to select initially
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
     the enumeration of possible values and their display names. See below
     * /
    [Bindable]
    public var value:Object;


    /**
     the text to be shown after the value field. Defaults to &lt;i>null&lt;/i> The value among which the user can select are defined using array of array, where each contained array contains two elements: the actual value that is returned if the option was selected, and the display name shown to the user. E.g.: &lt;code>[[1, 'Sunday'], [2, 'Monday'], ..., [7, Saturday]]&lt;/code>. The default &lt;b>operators&lt;/b> offered by this component are: &lt;ul>&lt;li>'lt'&lt;/li>&lt;li style="list-style: none">less than&lt;/li>&lt;li>'le'&lt;/li>&lt;li style="list-style: none">less than or equals&lt;/li>&lt;li>'eq'&lt;/li>&lt;li style="list-style: none">equals&lt;/li>&lt;li>'ne'&lt;/li>&lt;li style="list-style: none">not equal&lt;/li>&lt;li>'ge'&lt;/li>&lt;li style="list-style: none">greater than or equals&lt;/li>&lt;li>'gt'&lt;/li>&lt;li style="list-style: none">greater than&lt;/li>&lt;/ul>The names used for the available operators can be overridden by a dictionary supplied via the &lt;b>operatorNames&lt;/b> property. The available operators and their default names are: &lt;ul>&lt;li>lt: 'less'&lt;/li>&lt;li>le: 'less or equal'&lt;/li>&lt;li>eq: 'equal'&lt;/li>&lt;li>ne: 'not equal'&lt;/li>&lt;li>ge: 'greater or equal'&lt;/li>&lt;li>gt: 'greater'&lt;/li>&lt;/ul>
     * /
    [Bindable]
    public var suffixText:String;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.personalization.ui.condition.EnumConditionBase",
      alias: "widget.com.coremedia.personalization.ui.config.enumCondition",
      constructor: EnumCondition$,
      super$Jk9D: function() {
        com.coremedia.personalization.ui.condition.EnumConditionBase.prototype.constructor.apply(this, arguments);
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
        value: null,
        suffixText: null
      },
      requires: [
        "Ext.layout.container.HBox",
        "com.coremedia.personalization.ui.condition.EnumConditionBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
