Ext.define("com.coremedia.personalization.ui.plugin.DateTimeContainerBase", function(DateTimeContainerBase) {/*package com.coremedia.personalization.ui.plugin {
import com.coremedia.ui.components.StatefulDateField;
import com.coremedia.ui.components.StatefulTimeField;
import com.coremedia.ui.data.ValueExpression;

import ext.DateUtil;
import ext.form.FieldContainer;

import mx.resources.ResourceManager;

[ResourceBundle('com.coremedia.personalization.ui.Personalization')]
public class DateTimeContainerBase extends FieldContainer {

  private var timeField:StatefulTimeField;
  private var dateField:StatefulDateField;
  private var date:Date;
  private var ppe:ValueExpression;

  protected static const dateFieldItemId:String = "dateTimeContainerDatefield";
  protected static const timeFieldItemId:String = "dateTimeContainerTimefield";


  /**
   * @cfg {String} propertyContext the Context of the property
   * @cfg {String} propertyName the Name of the property
   * /
  public*/ function DateTimeContainerBase$(config/*:DateTimeContainer = null*/) {var this$=this;if(arguments.length<=0)config=null;
    this.super$tpLM(config);

    this.dateField$tpLM = this.getDateField$tpLM();
    this.timeField$tpLM = this.getTimeField$tpLM();

    var path/*:String*/ = AS3.getBindable(config,"propertyContext") + "!" + AS3.getBindable(config,"propertyName");
    this.ppe$tpLM = AS3.getBindable(config,"bindTo").extendBy(path);
    this.ppe$tpLM.loadValue(function()/*:**/ {

      this$.date$tpLM = Ext.Date.parse(this$.ppe$tpLM.getValue(), 'Y-m-d\\TH:i:sP');

      if (this$.date$tpLM == null) {
      // if timezone offset contains no colon between hours and minutes
        this$.date$tpLM = Ext.Date.parse(this$.ppe$tpLM.getValue(), 'Y-m-d\\TH:i:sO');
      }
      if (this$.date$tpLM != null) {

        this$.dateField$tpLM.setValue(this$.date$tpLM);
        this$.timeField$tpLM.setValue(this$.date$tpLM);
      }
      else {
        this$.setDisabled(true);
      }


    });
  }/*

  internal*/ function validateDate(value/*:String*/)/*:**/ {
    if (!value && AS3.getBindable(this.getTimeField$tpLM(),"value","DUMMY")) {
      return mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.sdk.validation.Validators', 'Validator_NotEmptyValidator_text');
    }
    return true;
  }/*

  internal*/ function validateTime(value/*:String*/)/*:**/ {
    if (!value && AS3.getBindable(this.getDateField$tpLM(),"value","DUMMY")) {
      return mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.sdk.validation.Validators', 'Validator_NotEmptyValidator_text');
    }
    return true;
  }/*

  override protected*/ function afterRender()/*:void*/ {var this$=this;
    Ext.form.FieldContainer.prototype.afterRender.call(this);

    this.dateField$tpLM.addListener('select', function()/*:void*/ {
      this$.modified$tpLM();
    });
    this.dateField$tpLM.addListener('change', function()/*:void*/ {
      this$.modified$tpLM();
    });
    this.timeField$tpLM.addListener('keyup', function()/*:void*/ {
      this$.timeField$tpLM.fireEvent('change');
      this$.modified$tpLM();

    });
    this.timeField$tpLM.addListener('change', function()/*:void*/ {
      this$.modified$tpLM();
    });

    this.timeField$tpLM.addListener('select', function()/*:void*/ {
      this$.modified$tpLM();
    });
  }/*

  private*/ function getDateField()/*:StatefulDateField*/ {
    return AS3.as( this.queryById(DateTimeContainerBase.dateFieldItemId),  com.coremedia.ui.components.StatefulDateField);
  }/*

  private*/ function getTimeField()/*:StatefulTimeField*/ {
    return AS3.as( this.queryById(DateTimeContainerBase.timeFieldItemId),  com.coremedia.ui.components.StatefulTimeField);
  }/*

  /**
   * Gets the common date as string.
   * @return String that contains the common date.
   * /
  private*/ function getPropertyValue()/*:String*/ {
    var d/*:Date*/;
    var t/*:Date*/;

    if (!this.timeField$tpLM.validate() || !this.dateField$tpLM.validate()) {
      return null;
    }

    d = this.dateField$tpLM.getValue();
    t = this.timeField$tpLM.getValue();
    d = Ext.Date.add(Ext.Date.add(d, Ext.Date.HOUR, t.getHours()), Ext.Date.MINUTE, t.getMinutes());
    return Ext.Date.format(d, "Y-m-d\\TH:i:sP");
  }/*

  private*/ function modified()/*:void*/ {
    var propertyValue/*:String*/ = this.getPropertyValue$tpLM();
    if (propertyValue != null) {
      this.ppe$tpLM.setValue(propertyValue);
    }
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.form.FieldContainer",
      timeField$tpLM: null,
      dateField$tpLM: null,
      date$tpLM: null,
      ppe$tpLM: null,
      constructor: DateTimeContainerBase$,
      super$tpLM: function() {
        Ext.form.FieldContainer.prototype.constructor.apply(this, arguments);
      },
      validateDate: validateDate,
      validateTime: validateTime,
      afterRender: afterRender,
      getDateField$tpLM: getDateField,
      getTimeField$tpLM: getTimeField,
      getPropertyValue$tpLM: getPropertyValue,
      modified$tpLM: modified,
      statics: {
        dateFieldItemId: "dateTimeContainerDatefield",
        timeFieldItemId: "dateTimeContainerTimefield"
      },
      requires: [
        "Ext.Date",
        "Ext.form.FieldContainer",
        "com.coremedia.personalization.ui.Personalization_properties",
        "com.coremedia.ui.components.StatefulDateField",
        "com.coremedia.ui.components.StatefulTimeField",
        "mx.resources.ResourceManager"
      ]
    };
});
