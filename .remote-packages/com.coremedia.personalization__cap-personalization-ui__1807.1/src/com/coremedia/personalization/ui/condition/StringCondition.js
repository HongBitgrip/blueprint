Ext.define("com.coremedia.personalization.ui.condition.StringCondition", function(StringCondition) {/*package com.coremedia.personalization.ui.condition{
import com.coremedia.personalization.ui.condition.*;
import net.jangaroo.ext.Exml;
import ext.layout.container.HBoxLayout;
/**
 The StringCondition is used to define conditions using string values.
 * /
public class StringCondition extends StringConditionBase{

    public static const xtype:String = "com.coremedia.personalization.ui.config.stringCondition";

    public*/function StringCondition$(config/*:StringCondition = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.personalization.ui.condition.StringConditionBase*/ =AS3.cast(com.coremedia.personalization.ui.condition.StringConditionBase,{});
    var defaults_$1/*:StringCondition*/ =AS3.cast(StringCondition,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"height" , 25);
    var layout_HBox_71_5_$1/*:ext.layout.container.HBoxLayout*/ =AS3.cast(Ext.layout.container.HBox,{});
    AS3.setBindable(config_$1,"layout" , layout_HBox_71_5_$1);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$WmXz(config_$1);
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
     the array of operators to be made available for selection. See below
     * /
    [Bindable]
    public var operators:Array;


    /**
     user-presentable names of the operators. See below
     * /
    [Bindable]
    public var operatorNames:Object;


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
     the text to be shown after the value field. Defaults to &lt;i>null&lt;/i> The default &lt;b>operators&lt;/b> offered by this component are: &lt;ul>&lt;li>'eq'&lt;/li>&lt;li style="list-style: none">equal to&lt;/li>&lt;li>'ne'&lt;/li>&lt;li style="list-style: none">not equal&lt;/li>&lt;li>'ct'&lt;/li>&lt;li style="list-style: none">contains&lt;/li>&lt;/ul>The names used for the available operators can be overridden by a dictionary supplied via the &lt;b>operatorNames&lt;/b> property. The available operators and their default names are: &lt;ul>&lt;li>eq: 'equal to'&lt;/li>&lt;li>ne: 'not equal to'&lt;/li>&lt;li>ct: 'contains'&lt;/li>&lt;/ul>
     * /
    [Bindable]
    public var suffixText:String;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.personalization.ui.condition.StringConditionBase",
      alias: "widget.com.coremedia.personalization.ui.config.stringCondition",
      constructor: StringCondition$,
      super$WmXz: function() {
        com.coremedia.personalization.ui.condition.StringConditionBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        conditionName: null,
        propertyName: null,
        isDefault: false,
        operatorEmptyText: null,
        operators: null,
        operatorNames: null,
        operator: null,
        valueEmptyText: null,
        valueText: null,
        suffixText: null
      },
      requires: [
        "Ext.layout.container.HBox",
        "com.coremedia.personalization.ui.condition.StringConditionBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
