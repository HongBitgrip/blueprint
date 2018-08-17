Ext.define("com.coremedia.cms.editor.sdk.premular.fields.StringListPropertyFieldBase", function(StringListPropertyFieldBase) {/*package com.coremedia.cms.editor.sdk.premular.fields {
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.bem.LinkListBEMEntities;

import ext.container.Container;
import ext.data.Model;
import ext.event.Event;
import ext.form.field.Field;
import ext.form.field.TextField;
import ext.grid.GridPanel;

[PublicApi]
public class StringListPropertyFieldBase extends Container {

  public static const GRID_ITEM_ID:String = "grid";
  public static const TEXT_FIELD_ITEM_ID:String = "textField";

  private var stringListVE:ValueExpression;
  private var selectedValuesVE:ValueExpression;
  private var modifierVE:ValueExpression;

  private var grid:GridPanel;
  private var textField:TextField;

  /**
   * A value expression returning the Content to be edited by this property field.
   * /
  [Bindable]
  public var bindTo:ValueExpression;

  /**
   * The property name of the Bean to bind to this field.
   * This property field assumes that this bean has a property 'properties' that contains all properties.
   * In other words, the propertyPath is calculated by 'properties.' + propertyName.
   * /
  [Bindable]
  public var propertyName:String;

  public*/ function StringListPropertyFieldBase$(config/*:StringListPropertyField = null*/) {if(arguments.length<=0)config=null;
    this.super$nukq(config);
  }/*

  override protected*/ function initComponent()/*:void*/ {
    Ext.container.Container.prototype.initComponent.call(this);

    this.grid$nukq =AS3.as( this.queryById(StringListPropertyFieldBase.GRID_ITEM_ID),  Ext.grid.Panel);
    this.grid$nukq.addListener("validateedit",AS3.bind( this,"deleteEmptyRow$nukq"));

    this.textField$nukq =AS3.as( this.queryById(StringListPropertyFieldBase.TEXT_FIELD_ITEM_ID),  Ext.form.field.Text);
    this.textField$nukq.addListener("specialkey",AS3.bind( this,"addToListOnEnter$nukq"));
    this.textField$nukq.addListener("blur",AS3.bind( this,"addToListOnBlur$nukq"));
    this.textField$nukq.addListener("focus",AS3.bind( this,"removeSelection$nukq"));
  }/*

  protected*/ function getSelectedValuesVE()/*:ValueExpression*/ {
    if (!this.selectedValuesVE$nukq){
      this.selectedValuesVE$nukq = com.coremedia.ui.data.ValueExpressionFactory.createFromValue([]);
    }
    return this.selectedValuesVE$nukq;
  }/*

  protected*/ function getStringListVE(config/*:StringListPropertyFieldBase*/)/*:ValueExpression*/ {
    if (!this.stringListVE$nukq) {
      this.stringListVE$nukq = AS3.getBindable(config,"bindTo").extendBy('properties', AS3.getBindable(config,"propertyName"));
    }
    return this.stringListVE$nukq;
  }/*

  protected*/ function getModifierVE(config/*:StringListPropertyFieldBase*/)/*:ValueExpression*/ {var this$=this;
    if (!this.modifierVE$nukq) {
      this.modifierVE$nukq = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:Array*/ {
        //noinspection JSMismatchedCollectionQueryUpdate
        var entries/*:Array*/ = this$.getStringListVE(config).getValue();
        if (entries === undefined || entries.length === 0) {
          return [com.coremedia.ui.bem.LinkListBEMEntities.MODIFIER_EMPTY];
        }
        return [];
      });
    }
    return this.modifierVE$nukq;
  }/*

  protected*/ function stringListToObjectTransformer(values/*:Array*/)/*:Object*/ {
    var result/* : Array*/ = [];

    for (var i/*:int*/ = 0; i < values.length; i++) {
      result.push(new com.coremedia.cms.editor.sdk.premular.fields.StringListPropertyFieldEntry(values[i], i, this.getStringListVE(this)));
    }

    return result;
  }/*

  protected static*/ function entriesEquals$static(entry1/*:StringListPropertyFieldEntry*/, entry2/*:StringListPropertyFieldEntry*/)/*:Boolean*/{
    return entry1.getIndex() === entry2.getIndex();
  }/*

  private*/ function addToListOnEnter(field/*:Field*/, e/*:Event*/)/*:void*/ {
    if (e.getKey() === Ext.event.Event.ENTER) {
      e.stopEvent();
      this.doAddToList$nukq(field);
    }
  }/*

  private*/ function addToListOnBlur(field/*:Field*/)/*:void*/ {
    this.doAddToList$nukq(field);
  }/*

  private*/ function doAddToList(field/*:Field*/)/*:void*/ {
    if (field.getValue()) {
      var list/*:Array*/ = this.getStringListVE(this).getValue();
      if (!list){
        list = [];
      }
      this.getStringListVE(this).setValue(list.concat(field.getValue()));
      field.setValue("");
    }
  }/*

  private*/ function removeSelection()/*:void*/ {
    this.getSelectedValuesVE().setValue([]);
  }/*

  private*/ function deleteEmptyRow(event/*:Object*/)/*:Boolean*/ {
    var value/*:String*/ = event.value;

    if (!value) {
      var record/*:Model*/ = event.record;
      var index/*:Number*/ = record.store.indexOf(record);

      var list/*:Array*/ = this.getStringListVE(this).getValue();
      if (list){
        list = list.concat();
        list.splice(index, 1);
        this.getStringListVE(this).setValue(list);
      }

      return false;
    }

    return true;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.container.Container",
      metadata: {"": ["PublicApi"]},
      stringListVE$nukq: null,
      selectedValuesVE$nukq: null,
      modifierVE$nukq: null,
      grid$nukq: null,
      textField$nukq: null,
      constructor: StringListPropertyFieldBase$,
      super$nukq: function() {
        Ext.container.Container.prototype.constructor.apply(this, arguments);
      },
      initComponent: initComponent,
      getSelectedValuesVE: getSelectedValuesVE,
      getStringListVE: getStringListVE,
      getModifierVE: getModifierVE,
      stringListToObjectTransformer: stringListToObjectTransformer,
      addToListOnEnter$nukq: addToListOnEnter,
      addToListOnBlur$nukq: addToListOnBlur,
      doAddToList$nukq: doAddToList,
      removeSelection$nukq: removeSelection,
      deleteEmptyRow$nukq: deleteEmptyRow,
      config: {
        bindTo: null,
        propertyName: null
      },
      statics: {
        GRID_ITEM_ID: "grid",
        TEXT_FIELD_ITEM_ID: "textField",
        entriesEquals: entriesEquals$static
      },
      requires: [
        "Ext.container.Container",
        "Ext.event.Event",
        "Ext.form.field.Text",
        "Ext.grid.Panel",
        "com.coremedia.ui.bem.LinkListBEMEntities",
        "com.coremedia.ui.data.ValueExpressionFactory"
      ],
      uses: ["com.coremedia.cms.editor.sdk.premular.fields.StringListPropertyFieldEntry"]
    };
});
