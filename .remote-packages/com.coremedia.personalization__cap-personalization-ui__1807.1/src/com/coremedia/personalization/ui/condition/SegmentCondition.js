Ext.define("com.coremedia.personalization.ui.condition.SegmentCondition", function(SegmentCondition) {/*package com.coremedia.personalization.ui.condition{
import com.coremedia.personalization.ui.condition.*;
import net.jangaroo.ext.Exml;
import ext.layout.container.HBoxLayout;
/**
 The SegmentCondition is used to select among the currently defined segments. Segments are defined in documents
 within the CMS.
 * /
public class SegmentCondition extends SegmentConditionBase{

    public static const xtype:String = "com.coremedia.personalization.ui.config.segmentCondition";

    public*/function SegmentCondition$(config/*:SegmentCondition = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.personalization.ui.condition.SegmentConditionBase*/ =AS3.cast(com.coremedia.personalization.ui.condition.SegmentConditionBase,{});
    var defaults_$1/*:SegmentCondition*/ =AS3.cast(SegmentCondition,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"height" , 25);
    var layout_HBox_73_5_$1/*:ext.layout.container.HBoxLayout*/ =AS3.cast(Ext.layout.container.HBox,{});
    AS3.setBindable(config_$1,"layout" , layout_HBox_73_5_$1);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$bWqL(config_$1);
  }/*

    /**
     name to be used for this condition instance in the condition combox
     * /
    [Bindable]
    public var conditionName:String;


    /**
     prefix of context properties mapped to this condition instance. The characters following the prefix in a property
     name are assumed to represent the segment. This is similar to how keywords are handled in the KeywordCondition.
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
     the text to be shown in the property field if it is empty. Defaults to segment. Optional.
     * /
    [Bindable]
    public var segmentEmptyText:String;


    /**
     the text to be shown after the value field. Defaults to null. Optional.
     * /
    [Bindable]
    public var suffixText:String;


    /**
     repository paths containing segment definitions. Default is "System/personalization/segments".
     * /
    [Bindable]
    public var paths:Array;


    /**
     type of documents containing segment definitions. Default is "CMSegment". The names used for the available operators can be overridden by a dictionary supplied via the &lt;b>operatorNames&lt;/b> property. The available operators and their default names are: &lt;ul>&lt;li>eq: 'is'&lt;/li>&lt;li>ne: 'is not'&lt;/li>&lt;/ul>
     * /
    [Bindable]
    public var docType:String;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.personalization.ui.condition.SegmentConditionBase",
      alias: "widget.com.coremedia.personalization.ui.config.segmentCondition",
      constructor: SegmentCondition$,
      super$bWqL: function() {
        com.coremedia.personalization.ui.condition.SegmentConditionBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        conditionName: null,
        propertyPrefix: null,
        isDefault: false,
        operatorEmptyText: null,
        operatorNames: null,
        operator: null,
        segmentEmptyText: null,
        suffixText: null,
        paths: null,
        docType: null
      },
      requires: [
        "Ext.layout.container.HBox",
        "com.coremedia.personalization.ui.condition.SegmentConditionBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
