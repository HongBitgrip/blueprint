Ext.define("com.coremedia.ui.ckeditor.CKDialogBase", function(CKDialogBase) {/*package com.coremedia.ui.ckeditor {
import ext.form.BasicForm;
import ext.form.FormPanel;
import ext.form.RadioGroup;
import ext.form.field.Checkbox;
import ext.form.field.Field;
import ext.form.field.Radio;
import ext.toolbar.Toolbar;
import ext.window.Window;

public class CKDialogBase extends Window {

  private var _data:*;
  private var okayFlag:Boolean;
  private var initData:Object;

  /**
   * @param config configuration object for this component
   * /
  public*/ function CKDialogBase$(config/*:CKDialog = null*/) {if(arguments.length<=0)config=null;
    this.super$kQuM(config);
    this.initData$kQuM = config['initData'] || {};
    this.down('form').addListener('clientvalidation',AS3.bind( this,"handleClientvalidation"));
  }/*

  protected*/ function handleClientvalidation(formPanel/*:FormPanel*/, valid/*:Boolean*/)/*:void*/ {
    valid ? (AS3.as(this['fbar'],  Ext.toolbar.Toolbar)).getComponent('okBtn').enable() : (AS3.as(this['fbar'],  Ext.toolbar.Toolbar)).getComponent('okBtn').disable(true);
  }/*

  override public*/ function show(animateTarget/*:* = null*/, callback/*:Function = null*/, scope/*:Object = null*/)/*:void*/ {switch(arguments.length){case 0:animateTarget=null;case 1:callback=null;case 2:scope=null;}
    this.okayFlag$kQuM = false;
    Ext.window.Window.prototype.show.call(this,animateTarget, callback, scope);
  }/*

  public*/ function getForm()/*:BasicForm*/ {
    var form/*:FormPanel*/ = AS3.cast(Ext.form.Panel,this.down('form'));
    return form.getForm();
  }/*

  private*/ function dataAndProperty(field/*:Field*/)/*:Object*/ {
    var data/*:**/ = this._data$kQuM;
    var props/*:Array*/ = field.getName().split(".");
    for (var i/*:int*/ = 0; i < props.length - 1; ++i) {
      data = data[props[i]] || (data[props[i]] = {});
    }
    return { data: data, property: props[props.length - 1] };
  }/*

  override public*/ function getData()/*:Object*/ {
    return this.okayFlag$kQuM ? this._data$kQuM || {} : null;
  }/*

  override public*/ function setData(data/*:Object*/)/*:void*/ {
    this._data$kQuM = data;
    var form/*:BasicForm*/ = this.getForm();
    form.reset();
    form.getFields().each(AS3.bind(this,"updateField$kQuM"));
  }/*

  private*/ function updateField(field/*:Field*/)/*:void*/ {
    if (this.isGroupedRadio$kQuM(field)) {
      // Skip radio buttons in groups. The group is handled instead.
      return;
    }

    // Before checking the right radioButton we have to uncheck any checked buttons
    if (AS3.is(field,  Ext.form.RadioGroup)) {
      var checkedFields/*:Array*/ = AS3.cast(Ext.form.RadioGroup,field).getChecked();
      for (var i/*:int*/ = 0; i < checkedFields.length; ++i) {
        AS3.cast(Ext.form.field.Checkbox,checkedFields[i]).setValue(false);
      }
    }

    var dataAndProperty/*:Object*/ = this.dataAndProperty$kQuM(field);
    var value/*:**/ = dataAndProperty['data'][dataAndProperty['property']] || this.initData$kQuM[field.getName()];
    if (value) {
      field.setValue(value);
    }
  }/*

  protected*/ function okHandler()/*:void*/ {
    this.okayFlag$kQuM = true;
    // update this.data:
    this.getForm().getFields().each(AS3.bind(this,"updateData$kQuM"), this);
    this.hide();
  }/*

  private*/ function updateData(field/*:Field*/)/*:void*/ {
    if (this.isGroupedRadio$kQuM(field)) {
      // Skip radio buttons in groups. The group is handled instead.
      return;
    }

    var dataAndProperty/*:Object*/ = this.dataAndProperty$kQuM(field);
    dataAndProperty.data[dataAndProperty.property] = field.getValue();
  }/*

  private*/ function isGroupedRadio(field/*:Field*/)/*:Boolean*/ {
    return AS3.is( field,  Ext.form.field.Radio) &&AS3.is( AS3.cast(Ext.form.field.Radio,field).ownerCt,  Ext.form.RadioGroup);
  }/*

  protected*/ function cancelHandler()/*:void*/ {
    this._data$kQuM = null;
    this.hide();
  }/*

}

}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.window.Window",
      _data$kQuM: undefined,
      okayFlag$kQuM: false,
      initData$kQuM: null,
      constructor: CKDialogBase$,
      super$kQuM: function() {
        Ext.window.Window.prototype.constructor.apply(this, arguments);
      },
      handleClientvalidation: handleClientvalidation,
      show: show,
      getForm: getForm,
      dataAndProperty$kQuM: dataAndProperty,
      getData: getData,
      setData: setData,
      updateField$kQuM: updateField,
      okHandler: okHandler,
      updateData$kQuM: updateData,
      isGroupedRadio$kQuM: isGroupedRadio,
      cancelHandler: cancelHandler,
      requires: [
        "Ext.form.Panel",
        "Ext.form.RadioGroup",
        "Ext.form.field.Checkbox",
        "Ext.form.field.Radio",
        "Ext.toolbar.Toolbar",
        "Ext.window.Window"
      ]
    };
});
