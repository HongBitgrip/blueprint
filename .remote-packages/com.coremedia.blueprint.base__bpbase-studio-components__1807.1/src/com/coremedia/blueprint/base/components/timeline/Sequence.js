Ext.define("com.coremedia.blueprint.base.components.timeline.Sequence", function(Sequence) {/*package com.coremedia.blueprint.base.components.timeline {
import com.coremedia.cap.content.ContentPropertyNames;
import com.coremedia.cap.struct.Struct;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;

/**
 * Model for a time sequence, contains the time information and the linked content.
 * /
public class Sequence {
  public static const DEFAULT_TARGET_PROPERTY_NAME:String = "defaultTarget";
  public static const SEQUENCES_PROPERTY_NAME:String = "sequences";
  public static const LINK_PROPERTY_NAME:String = "link";
  public static const START_TIME_PROPERTY:String = "startTimeMillis";
  public static const POSITION_PROPERTY:String = "position";

  private var linkedContentExpression:ValueExpression;
  private var startTimeExpression:ValueExpression;
  private var positionExpression:ValueExpression;
  private var idExpression:ValueExpression;

  private var id:Number;
  private var propertyName:String;
  private var bindTo:ValueExpression;

  public*/ function Sequence$(id/*:Number*/, bindTo/*:ValueExpression*/, propertyName/*:String*/) {
    this.id$YLO2 = id;
    this.bindTo$YLO2 = bindTo;
    this.propertyName$YLO2 = propertyName;
  }/*

  public*/ function getSettingsStruct()/*:Struct*/ {
    return AS3.as( this.bindTo$YLO2.extendBy(com.coremedia.cap.content.ContentPropertyNames.PROPERTIES).extendBy(this.propertyName$YLO2).getValue(),  com.coremedia.cap.struct.Struct);
  }/*

  /**
   * Contains the content of the linklist.
   * /
  public*/ function getLinkedContentExpression()/*:ValueExpression*/ {
    if(!this.linkedContentExpression$YLO2) {
      this.linkedContentExpression$YLO2 = this.bindTo$YLO2;
    }
    return this.linkedContentExpression$YLO2;
  }/*

  public*/ function getPositionExpression()/*:ValueExpression*/ {
    if(!this.positionExpression$YLO2) {
      var structLinkPropertyName/*:String*/ = this.propertyName$YLO2 + '.' + Sequence.SEQUENCES_PROPERTY_NAME + '.' + this.id$YLO2;
      this.positionExpression$YLO2 = this.bindTo$YLO2.extendBy(com.coremedia.cap.content.ContentPropertyNames.PROPERTIES).extendBy(structLinkPropertyName + "." + Sequence.POSITION_PROPERTY);
    }
    return this.positionExpression$YLO2;
  }/*

  /**
   * Returns the full property name to the struct of this sequence.
   * /
  public*/ function getLinkContentPropertyName()/*:String*/ {
    var structLinkPropertyName/*:String*/ = this.propertyName$YLO2 + '.' + Sequence.SEQUENCES_PROPERTY_NAME + '.' + this.id$YLO2;
    return structLinkPropertyName  + '.' + Sequence.LINK_PROPERTY_NAME;
  }/*

  /**
   * Contains the start time in milliseconds.
   * /
  public*/ function getStartTimeExpression()/*:ValueExpression*/ {
    if(!this.startTimeExpression$YLO2) {
      var structLinkPropertyName/*:String*/ = this.propertyName$YLO2 + '.' + Sequence.SEQUENCES_PROPERTY_NAME + '.' + this.id$YLO2;
      this.startTimeExpression$YLO2 = this.bindTo$YLO2.extendBy(com.coremedia.cap.content.ContentPropertyNames.PROPERTIES).extendBy(structLinkPropertyName + "." + Sequence.START_TIME_PROPERTY);
    }
    return this.startTimeExpression$YLO2;
  }/*

  /**
   * The id is used as template key for the bindComponents plugin.
   * @return
   * /
  public*/ function getIdExpression()/*:ValueExpression*/ {
    if(!this.idExpression$YLO2) {
      this.idExpression$YLO2 = com.coremedia.ui.data.ValueExpressionFactory.createFromValue(this.id$YLO2);
    }
    return this.idExpression$YLO2;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      linkedContentExpression$YLO2: null,
      startTimeExpression$YLO2: null,
      positionExpression$YLO2: null,
      idExpression$YLO2: null,
      id$YLO2: NaN,
      propertyName$YLO2: null,
      bindTo$YLO2: null,
      constructor: Sequence$,
      getSettingsStruct: getSettingsStruct,
      getLinkedContentExpression: getLinkedContentExpression,
      getPositionExpression: getPositionExpression,
      getLinkContentPropertyName: getLinkContentPropertyName,
      getStartTimeExpression: getStartTimeExpression,
      getIdExpression: getIdExpression,
      statics: {
        DEFAULT_TARGET_PROPERTY_NAME: "defaultTarget",
        SEQUENCES_PROPERTY_NAME: "sequences",
        LINK_PROPERTY_NAME: "link",
        START_TIME_PROPERTY: "startTimeMillis",
        POSITION_PROPERTY: "position"
      },
      requires: [
        "com.coremedia.cap.content.ContentPropertyNames",
        "com.coremedia.cap.struct.Struct",
        "com.coremedia.ui.data.ValueExpressionFactory"
      ]
    };
});
