Ext.define("com.coremedia.blueprint.base.queryeditor.conditions.ModificationDateConditionEditorBase", function(ModificationDateConditionEditorBase) {/*package com.coremedia.blueprint.base.queryeditor.conditions {

import com.coremedia.cap.content.Content;
import com.coremedia.cap.struct.Struct;
import com.coremedia.ui.data.PropertyChangeEvent;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.beanFactory;

public class ModificationDateConditionEditorBase extends ConditionEditor {

  private const EXPRESSION_PREFIX:String = "freshness:";
  protected const TIME_SLOTS:String = "timeSlots";
  protected const SELECTED_TIME_SLOT:String = "selectedTimeSlot";

  public var timeSlots:Array;
  private var timeSlotsByName:Object;

  public*/ function ModificationDateConditionEditorBase$(config/*:ModificationDateConditionEditor = null*/) {if(arguments.length<=0)config=null;
    this.timeSlots = config.timeSlots;
    this.timeSlotsByName$I9h_ = mapNameToTitle$static(this.timeSlots);
    this.super$I9h_(config);
  }/*

  override protected*/ function afterRender()/*:void*/ {
    com.coremedia.blueprint.base.queryeditor.conditions.ConditionEditor.prototype.afterRender.call(this);
    this.renderTimeSlots$I9h_();
    this.listenToModelChanges$I9h_();
    this.applyModificationDateBaseStruct(AS3.getBindable(this,"bindTo"), this.contentType, this.propertyName);
  }/*

  /**
   * Initializes the struct the condition is working on.
   * @param bindTo
   * @param contentType
   * @param structPropertyName
   * /
  protected*/ function applyModificationDateBaseStruct(bindTo/*:ValueExpression*/, contentType/*:String*/, structPropertyName/*:String*/)/*:void*/ {
    var c/*:Content*/ = bindTo.getValue();
    var struct/*:Struct*/ = c.getProperties().get('localSettings');
    struct.getType().addStructProperty('fq');
    var fq/*:Struct*/ = struct.get('fq');

    fq.getType().addStringProperty(this.EXPRESSION_PREFIX$I9h_, this.timeSlots[0].name);
  }/*

  /**
   * Populate the dropdown menu with time slots.
   * /
  private*/ function renderTimeSlots()/*:void*/ {
    var slots/*:Array*/ = [];

    this.timeSlots.forEach(function(timeSlot/*:**/)/*:void*/ {
      slots.push(com.coremedia.ui.data.beanFactory.createLocalBean({'name': timeSlot.name}));
    });
    this.getLocalModel().set(this.TIME_SLOTS, slots);
  }/*

  private*/ function listenToModelChanges()/*:void*/ {

    //listen to local changes
    this.getLocalModel().addPropertyChangeListener(this.SELECTED_TIME_SLOT,AS3.bind( this,"updateRemoteFromLocal$I9h_"));

    //listen to changes from remote
    this.getRemoteValueExpression().addChangeListener(AS3.bind(this,"updateLocalFromRemote$I9h_"));
    this.getRemoteValueExpression().loadValue(AS3.bind(this,"updateLocal$I9h_"));
  }/*

  private*/ function updateLocalFromRemote(remoteValueExpression/*:ValueExpression*/)/*:void*/ {
    if (remoteValueExpression.isLoaded()) {
      this.updateLocal$I9h_(remoteValueExpression.getValue());
    }
  }/*

  private*/ function updateLocal(serializedValue/*:String*/)/*:void*/ {
    var newExpression/*:String*/ = deserialize$static(serializedValue);
    if (!newExpression && this.shouldSetToDefault()) {
      newExpression = this.timeSlots[0].expression;
    }
    var oldExpression/*:String*/ = this.getExpression(this.getLocalModel().get(this.SELECTED_TIME_SLOT));
    if(newExpression && newExpression != oldExpression){
      var name/* :String*/ = this.getName$I9h_(newExpression);
      this.getLocalModel().set(this.SELECTED_TIME_SLOT, name);
    }
  }/*

  private*/ function updateRemoteFromLocal(e/*:PropertyChangeEvent*/)/*:void*/ {
    var timeSlotName/*:**/ = e.newValue,
        newExpression/*:String*/ = this.getExpression(timeSlotName),
        oldExpression/*:String*/ = deserialize$static(this.getRemoteValueExpression().getValue());
    if(newExpression && oldExpression != newExpression){
      this.getRemoteValueExpression().setValue(this.serialize$I9h_(newExpression));
    }
  }/*

  /**
   * Transforms the partial expression to the full condition expression.
   *
   * @param expression partial expression (as given in the condition editor configuration)
   * @return full condition expression
   * /
  private*/ function serialize(expression/*:String*/)/*:String*/ {
    if(expression){
      return this.EXPRESSION_PREFIX$I9h_ + '[' + expression + ']';
    } else {
      return undefined;
    }
  }/*

  /**
   * Transforms full condition expression to partial expression.
   *
   * @param fullExpression full condition expression
   * @return partial expression (as given in the condition editor configuration)
   * /
  private static*/ function deserialize$static(fullExpression/*:String*/)/*:String*/ {
    if (AS3.as(fullExpression,  Array)) {
      return '';
    }

    var startIndex/*:Number*/,
        endIndex/*:Number*/,
        expression/*:String*/;
    if (fullExpression){
      startIndex = fullExpression.indexOf('[') + 1;
      endIndex = fullExpression.indexOf(']');
      expression = fullExpression.substring(startIndex, endIndex);
    }
    return expression;
  }/*

  /**
   * Returns the name for the time slot expression.
   *
   * @param expression time slot expression.
   * @return time slot name
   * /
  private*/ function getName(expression/*:String*/)/*:String*/ {
    var timeSlot/*:Object*/;
    for(var i/*:int*/ =0; this.timeSlots.length; i++) {
      timeSlot = this.timeSlots[i];
      if (timeSlot.expression == expression){
        return timeSlot.name;
      }
    }
    return undefined;
  }/*


  /**
   * Returns the text displayed in the time slot dropdown menu.
   *
   * @param name time slot name
   * @return time slot text
   * /
  protected*/ function getText(name/*:String*/)/*:String*/ {
    return this.timeSlotsByName$I9h_[name].text;
  }/*

  /**
   * Returns the time slot expression used in the condition.
   *
   * @param name time slot name
   * @return time slot value
   * /
  protected*/ function getExpression(name/*:String*/)/*:String*/ {
    return name && this.timeSlotsByName$I9h_[name] && this.timeSlotsByName$I9h_[name].expression;
  }/*

  /**
   * Optimizes access to time slot properties.
   *
   * @param timeSlots array of time slots configuration
   * @return map of time slots by their name
   * /
  private static*/ function mapNameToTitle$static(timeSlots/*:Array*/)/*:Object*/ {
    var map/*:Object*/ = {},
        timeSlot/*:Object*/;
    for(var i/*:int*/ =0; i<timeSlots.length; i++){
      timeSlot = timeSlots[i];
      map[timeSlot.name] = timeSlot;
    }
    return map;
  }/*


  override protected*/ function onDestroy()/*:void*/ {
    com.coremedia.blueprint.base.queryeditor.conditions.ConditionEditor.prototype.onDestroy.call(this);
    this.getLocalModel().removePropertyChangeListener(this.SELECTED_TIME_SLOT,AS3.bind( this,"updateRemoteFromLocal$I9h_"));
    this.getRemoteValueExpression().removeChangeListener(AS3.bind(this,"updateLocal$I9h_"));
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.blueprint.base.queryeditor.conditions.ConditionEditor",
      EXPRESSION_PREFIX$I9h_: "freshness:",
      TIME_SLOTS: "timeSlots",
      SELECTED_TIME_SLOT: "selectedTimeSlot",
      timeSlots: null,
      timeSlotsByName$I9h_: null,
      constructor: ModificationDateConditionEditorBase$,
      super$I9h_: function() {
        com.coremedia.blueprint.base.queryeditor.conditions.ConditionEditor.prototype.constructor.apply(this, arguments);
      },
      afterRender: afterRender,
      applyModificationDateBaseStruct: applyModificationDateBaseStruct,
      renderTimeSlots$I9h_: renderTimeSlots,
      listenToModelChanges$I9h_: listenToModelChanges,
      updateLocalFromRemote$I9h_: updateLocalFromRemote,
      updateLocal$I9h_: updateLocal,
      updateRemoteFromLocal$I9h_: updateRemoteFromLocal,
      serialize$I9h_: serialize,
      getName$I9h_: getName,
      getText: getText,
      getExpression: getExpression,
      onDestroy: onDestroy,
      requires: [
        "com.coremedia.blueprint.base.queryeditor.conditions.ConditionEditor",
        "com.coremedia.ui.data.beanFactory"
      ]
    };
});
