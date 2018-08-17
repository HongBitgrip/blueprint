Ext.define("com.coremedia.cms.editor.sdk.premular.fields.MasterVersionPropertyFieldBase", function(MasterVersionPropertyFieldBase) {/*package com.coremedia.cms.editor.sdk.premular.fields {

import com.coremedia.cms.editor.sdk.util.FormatUtil;
import com.coremedia.ui.components.AdvancedFieldContainer;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;

import ext.form.field.DisplayField;
import ext.form.field.NumberField;

[ResourceBundle('com.coremedia.cms.editor.Editor')]
public class MasterVersionPropertyFieldBase extends AdvancedFieldContainer {

  public static const NUMBER_FIELD_ITEM_ID:String = "numberfield";

  private var numberFieldValueVE:ValueExpression;

  public*/ function MasterVersionPropertyFieldBase$(config/*:MasterVersionPropertyField = null*/) {var this$=this;if(arguments.length<=0)config=null;
    this.super$7eHJ(config);

    var numberField/*:NumberField*/ =AS3.as( this.queryById(MasterVersionPropertyFieldBase.NUMBER_FIELD_ITEM_ID),  Ext.form.field.Number);
    numberField.addListener('change',AS3.bind( this,"numberChanged$7eHJ"));
    this.numberChanged$7eHJ(numberField, numberField.getValue(), undefined);

    this.on('beforedestroy', function ()/*:void*/ {
      numberField.removeListener('change',AS3.bind( this$,"numberChanged$7eHJ"));
    });
  }/*

  protected*/ function getNumberFieldValueVE()/*:ValueExpression*/ {
    if (!this.numberFieldValueVE$7eHJ) {
      this.numberFieldValueVE$7eHJ = com.coremedia.ui.data.ValueExpressionFactory.createFromValue();
    }
    return this.numberFieldValueVE$7eHJ;
  }/*

  private*/ function numberChanged(component, newValue, oldValue)/*:void*/ {
    this.numberFieldValueVE$7eHJ.setValue(newValue);
  }/*

  protected*/ function labelBoundValueChanged(df/*:DisplayField*/, ve/*:ValueExpression*/)/*:void*/ {
    var value/*:int*/ = ve.getValue();
    var pattern/*:String*/ = value > 0 ?
            this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'MasterVersionPropertyField_translated_text') :
            this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'MasterVersionPropertyField_notTranslated_text');
    df.setValue(com.coremedia.cms.editor.sdk.util.FormatUtil.format(pattern, Math.abs(value)));
  }/*

  protected*/ function numberFieldReverseTransformer(value/*:**/)/*:**/ {
    return (value || (value === 0)) ? value : null;
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.components.AdvancedFieldContainer",
      numberFieldValueVE$7eHJ: null,
      constructor: MasterVersionPropertyFieldBase$,
      super$7eHJ: function() {
        com.coremedia.ui.components.AdvancedFieldContainer.prototype.constructor.apply(this, arguments);
      },
      getNumberFieldValueVE: getNumberFieldValueVE,
      numberChanged$7eHJ: numberChanged,
      labelBoundValueChanged: labelBoundValueChanged,
      numberFieldReverseTransformer: numberFieldReverseTransformer,
      statics: {NUMBER_FIELD_ITEM_ID: "numberfield"},
      requires: [
        "Ext.form.field.Number",
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.ui.components.AdvancedFieldContainer",
        "com.coremedia.ui.data.ValueExpressionFactory"
      ],
      uses: ["com.coremedia.cms.editor.sdk.util.FormatUtil"]
    };
});
