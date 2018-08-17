Ext.define("com.coremedia.personalization.ui.condition.KeywordCondition", function(KeywordCondition) {/*package com.coremedia.personalization.ui.condition{
import com.coremedia.personalization.ui.condition.*;
import net.jangaroo.ext.Exml;
import ext.layout.container.HBoxLayout;
/**
 A Condition specialized for editing <i>keyword conditions</i>. A keyword condition consists of a String <i>A</i>, a comparison operator <i>op</i>, and a second String <i>B</i> and is interpreted as <i>'valueOf(A) &lt;op&gt; B'</i>.
 * /
public class KeywordCondition extends KeywordConditionBase{

    public static const xtype:String = "com.coremedia.personalization.ui.config.keywordCondition";

    public*/function KeywordCondition$(config/*:KeywordCondition = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.personalization.ui.condition.KeywordConditionBase*/ =AS3.cast(com.coremedia.personalization.ui.condition.KeywordConditionBase,{});
    var defaults_$1/*:KeywordCondition*/ =AS3.cast(KeywordCondition,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"width" , 400);
    AS3.setBindable(config_$1,"height" , 25);
    var layout_HBox_88_5_$1/*:ext.layout.container.HBoxLayout*/ =AS3.cast(Ext.layout.container.HBox,{});
    AS3.setBindable(config_$1,"layout" , layout_HBox_88_5_$1);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$gRiV(config_$1);
  }/*

    /**
     name to be used for this condition instance in the condition combox
     * /
    [Bindable]
    public var conditionName:String;


    /**
     prefix of context properties mapped to this condition instance. The characters following the prefix in a property
     name are assumed to represent the keyword
     * /
    [Bindable]
    public var propertyPrefix:String;


    /**
     set to true if this condition is to be the default condition of the condition panel. The first condition in the
     list of the registered conditions with the default flag set is used as the default
     * /
    [Bindable]
    public var isDefault:Boolean;


    /**
     the text to be shown in the keyword field if it is empty. Defaults to keyword
     * /
    [Bindable]
    public var keywordEmptyText:String;


    /**
     the text to place into the keyword field. Defaults to null
     * /
    [Bindable]
    public var keywordText:String;


    /**
     the validation type of the keyword field. See below
     * /
    [Bindable]
    public var keywordVType:String;


    /**
     the text to be shown if no operator is selected. Default to operator
     * /
    [Bindable]
    public var operatorEmptyText:String;


    /**
     user-presentable names of the operators. See below
     * /
    [Bindable]
    public var operatorNames:Object;


    /**
     the operator to select initially. See below
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
     the text to be shown after the value field. Defaults to &lt;i>null&lt;/i> The property prefix is used to transform keyword properties to and from a user-presentable form. In a typical scenario, keyword properties in a profile will use a common prefix to identify them as keywords, e.g. 'keyword'. This prefix shouldn't be shown to users of the UI. If the propertyPrefix property is set to the internally used prefix, this condition component will remove the prefix (including the '.' separator) from the keyword property before it is displayed, and add it to the value in the keyword field when it is read via getPropertyName. The default validation types are: &lt;ul>&lt;li>For the keyword field: &lt;code>/^[a-zA-Z_][a-zA-Z_0-9\.]*$/&lt;/code>.&lt;/li>&lt;li>For the value field: &lt;code>/^\d+(\.\d+)?$/&lt;/code>.&lt;/li>&lt;/ul>The &lt;b>operators&lt;/b> offered by this component are: &lt;ul>&lt;li>'lt'&lt;/li>&lt;li style="list-style: none">less than&lt;/li>&lt;li>'le'&lt;/li>&lt;li style="list-style: none">less than or equals&lt;/li>&lt;li>'eq'&lt;/li>&lt;li style="list-style: none">equals&lt;/li>&lt;li>'ge'&lt;/li>&lt;li style="list-style: none">greater than or equals&lt;/li>&lt;li>'gt'&lt;/li>&lt;li style="list-style: none">greater than&lt;/li>&lt;/ul>The names used for the available operators can be overridden by a dictionary supplied via the &lt;b>operatorNames&lt;/b> property. The available operators and their default names are: &lt;ul>&lt;li>'lt': 'less'&lt;/li>&lt;li>'le': 'less or equal'&lt;/li>&lt;li>'eq': 'equal'&lt;/li>&lt;li>'ge': 'greater or equal'&lt;/li>&lt;li>'gt': 'greater'&lt;/li>&lt;/ul>You may override an arbitrary subset of these values.
     * /
    [Bindable]
    public var suffixText:String;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.personalization.ui.condition.KeywordConditionBase",
      alias: "widget.com.coremedia.personalization.ui.config.keywordCondition",
      constructor: KeywordCondition$,
      super$gRiV: function() {
        com.coremedia.personalization.ui.condition.KeywordConditionBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        conditionName: null,
        propertyPrefix: null,
        isDefault: false,
        keywordEmptyText: null,
        keywordText: null,
        keywordVType: null,
        operatorEmptyText: null,
        operatorNames: null,
        operator: null,
        valueEmptyText: null,
        valueText: null,
        valueVType: null,
        suffixText: null
      },
      requires: [
        "Ext.layout.container.HBox",
        "com.coremedia.personalization.ui.condition.KeywordConditionBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
