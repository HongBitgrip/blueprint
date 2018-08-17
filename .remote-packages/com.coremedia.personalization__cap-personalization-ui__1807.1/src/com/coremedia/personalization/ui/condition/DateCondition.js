Ext.define("com.coremedia.personalization.ui.condition.DateCondition", function(DateCondition) {/*package com.coremedia.personalization.ui.condition{
import com.coremedia.personalization.ui.condition.*;
import net.jangaroo.ext.Exml;
import ext.layout.container.HBoxLayout;
/**
 The DateCondition is used to define conditions on dates. It provides a date chooser to define the value against
 which the configured property is tested.
 * /
public class DateCondition extends DateConditionBase{

    public static const xtype:String = "com.coremedia.personalization.ui.config.dateCondition";

    public*/function DateCondition$(config/*:DateCondition = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.personalization.ui.condition.DateConditionBase*/ =AS3.cast(com.coremedia.personalization.ui.condition.DateConditionBase,{});
    var defaults_$1/*:DateCondition*/ =AS3.cast(DateCondition,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"height" , 25);
    var layout_HBox_67_5_$1/*:ext.layout.container.HBoxLayout*/ =AS3.cast(Ext.layout.container.HBox,{});
    AS3.setBindable(config_$1,"layout" , layout_HBox_67_5_$1);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$bZf0(config_$1);
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
     the operator to select initially. Optional.
     * /
    [Bindable]
    public var operator:String;


    /**
     the text to place into the date field. Must be an ISO-8601 formatted date
     * /
    [Bindable]
    public var valueText:String;


    /**
     the text to be shown in the value field if it is empty. Defaults to value
     * /
    [Bindable]
    public var dateEmptyText:String;


    /**
     the validation type of the value field The &lt;b>operators&lt;/b> offered by this component are: &lt;ul>&lt;li>'lt'&lt;/li>&lt;li style="list-style: none">less than&lt;/li>&lt;li>'gt'&lt;/li>&lt;li style="list-style: none">greater than&lt;/li>&lt;li>'eq'&lt;/li>&lt;li style="list-style: none">equals&lt;/li>&lt;/ul>The names used for the available operators can be overridden by a dictionary supplied via the &lt;b>operatorNames&lt;/b> property. The available operators and their default names are: &lt;ul>&lt;li>lt: 'before'&lt;/li>&lt;li>gt: 'after'&lt;/li>&lt;li>eq: 'on'&lt;/li>&lt;/ul>
     * /
    [Bindable]
    public var dateVType:String;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.personalization.ui.condition.DateConditionBase",
      alias: "widget.com.coremedia.personalization.ui.config.dateCondition",
      constructor: DateCondition$,
      super$bZf0: function() {
        com.coremedia.personalization.ui.condition.DateConditionBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        conditionName: null,
        propertyName: null,
        isDefault: false,
        operatorEmptyText: null,
        operatorNames: null,
        operator: null,
        valueText: null,
        dateEmptyText: null,
        dateVType: null
      },
      requires: [
        "Ext.layout.container.HBox",
        "com.coremedia.personalization.ui.condition.DateConditionBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
