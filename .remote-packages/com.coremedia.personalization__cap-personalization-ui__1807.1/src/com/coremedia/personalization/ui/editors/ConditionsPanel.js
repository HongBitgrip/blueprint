Ext.define("com.coremedia.personalization.ui.editors.ConditionsPanel", function(ConditionsPanel) {/*package com.coremedia.personalization.ui.editors{
import com.coremedia.personalization.ui.editors.*;
import net.jangaroo.ext.Exml;
/**
 Base class of the segment conditions editor. It's a thin wrapper around a ConditionsPanel that provides a bean for storing the string-representation of segment conditions. The bean is the model for the contained ConditionsPanel.
 * /
public class ConditionsPanel extends ConditionsPanelBase{

    public static const xtype:String = "com.coremedia.personalization.ui.config.conditionsPanel";

    public*/function ConditionsPanel$(config/*:ConditionsPanel = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.personalization.ui.editors.ConditionsPanelBase*/ =AS3.cast(com.coremedia.personalization.ui.editors.ConditionsPanelBase,{});
    var defaults_$1/*:ConditionsPanel*/ =AS3.cast(ConditionsPanel,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$gdcg(config_$1);
  }/*

    /**
     the property path leading to the bean containing the conditions to be displayed
     * /
    [Bindable]
    public var bindTo:Object;


    /**
     name of the property containing the conditions to be displayed
     * /
    [Bindable]
    public var propertyName:String;


    /**
     name of the property to be used to determine whether the panel should be rendered in read-write or read-only mode. Default is 'readOnly'.
     * /
    [Bindable]
    public var readOnlyPropertyName:String;


    /**
     the condition items to be made available via this editor
     * /
    [Bindable]
    public var conditionItems:Array;


    /**
     the handler to be called when the 'Delete Rule' button is pressed. If this property is null, the button will not be shown
     * /
    [Bindable]
    public var deleteHandler:Object;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.personalization.ui.editors.ConditionsPanelBase",
      alias: "widget.com.coremedia.personalization.ui.config.conditionsPanel",
      constructor: ConditionsPanel$,
      super$gdcg: function() {
        com.coremedia.personalization.ui.editors.ConditionsPanelBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        bindTo: null,
        propertyName: null,
        readOnlyPropertyName: null,
        conditionItems: null,
        deleteHandler: null
      },
      requires: [
        "com.coremedia.personalization.ui.editors.ConditionsPanelBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
