Ext.define("com.coremedia.personalization.ui.condition.TimeCondition", function(TimeCondition) {/*package com.coremedia.personalization.ui.condition{
import com.coremedia.personalization.ui.condition.*;
import net.jangaroo.ext.Exml;
import ext.layout.container.HBoxLayout;
/**
 A TimeCondition panel is used to edit time-of-day conditions.
 * /
public class TimeCondition extends TimeConditionBase{

    public static const xtype:String = "com.coremedia.personalization.ui.config.timeCondition";

    public*/function TimeCondition$(config/*:TimeCondition = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.personalization.ui.condition.TimeConditionBase*/ =AS3.cast(com.coremedia.personalization.ui.condition.TimeConditionBase,{});
    var defaults_$1/*:TimeCondition*/ =AS3.cast(TimeCondition,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"height" , 25);
    var layout_HBox_71_5_$1/*:ext.layout.container.HBoxLayout*/ =AS3.cast(Ext.layout.container.HBox,{});
    AS3.setBindable(config_$1,"layout" , layout_HBox_71_5_$1);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$4ke1(config_$1);
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
     the text to place into the time field. Must be of format 'H:i:s'
     * /
    [Bindable]
    public var valueText:String;


    /**
     the text to be shown in the time field if it is empty. Defaults to time
     * /
    [Bindable]
    public var timeEmptyText:String;


    /**
     the validation type of the value field The names used for the available operators can be overridden by a dictionary supplied via the &lt;b>operatorNames&lt;/b> property. The available operators and their default names are: &lt;ul>&lt;li>lt: 'before'&lt;/li>&lt;li>gt: 'after'&lt;/li>&lt;/ul>
     * /
    [Bindable]
    public var timeVType:String;


    /**
     the text to be shown after the value field. Defaults to null.
     * /
    [Bindable]
    public var suffixText:String;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.personalization.ui.condition.TimeConditionBase",
      alias: "widget.com.coremedia.personalization.ui.config.timeCondition",
      constructor: TimeCondition$,
      super$4ke1: function() {
        com.coremedia.personalization.ui.condition.TimeConditionBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        conditionName: null,
        propertyName: null,
        isDefault: false,
        operatorEmptyText: null,
        operatorNames: null,
        operator: null,
        valueText: null,
        timeEmptyText: null,
        timeVType: null,
        suffixText: null
      },
      requires: [
        "Ext.layout.container.HBox",
        "com.coremedia.personalization.ui.condition.TimeConditionBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
