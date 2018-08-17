Ext.define("com.coremedia.cms.editor.sdk.premular.PropertyFieldAnnotatedLinkListWidgetBase", function(PropertyFieldAnnotatedLinkListWidgetBase) {/*package com.coremedia.cms.editor.sdk.premular {

import com.coremedia.ui.components.AnnotatedLinkListWidget;
import com.coremedia.ui.data.ValueExpression;

public class PropertyFieldAnnotatedLinkListWidgetBase extends AnnotatedLinkListWidget {

  [Bindable]
  public var bindTo:ValueExpression;

  [Bindable]
  public var propertyNameWithoutIndex:String;

  [Bindable]
  public var forceReadOnlyValueExpression:ValueExpression;

  public*/ function PropertyFieldAnnotatedLinkListWidgetBase$(config/*:PropertyFieldAnnotatedLinkListWidgetBase = null*/) {if(arguments.length<=0)config=null;
    this.super$qI22(config);
  }/*

  internal*/ function calculateDefaults()/*:Object*/ {
    if (AS3.getBindable(this,"recordIndex","DUMMY") === undefined) {
      throw new AS3.Error("Could not determine the record index of the widget!");
    }

    var propertyFieldDefault/*:PropertyField*/ = AS3.cast(com.coremedia.cms.editor.sdk.premular.PropertyField,{});
    AS3.setBindable(propertyFieldDefault,"bindTo" , AS3.getBindable(this,"bindTo"));
    propertyFieldDefault["propertyName"] = AS3.getBindable(this,"propertyNameWithoutIndex") + "." + AS3.getBindable(this,"recordIndex","DUMMY");
    AS3.setBindable(propertyFieldDefault,"forceReadOnlyValueExpression" , AS3.getBindable(this,"forceReadOnlyValueExpression"));
    return propertyFieldDefault;
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.components.AnnotatedLinkListWidget",
      constructor: PropertyFieldAnnotatedLinkListWidgetBase$,
      super$qI22: function() {
        com.coremedia.ui.components.AnnotatedLinkListWidget.prototype.constructor.apply(this, arguments);
      },
      calculateDefaults: calculateDefaults,
      config: {
        bindTo: null,
        propertyNameWithoutIndex: null,
        forceReadOnlyValueExpression: null
      },
      requires: [
        "AS3.Error",
        "com.coremedia.ui.components.AnnotatedLinkListWidget"
      ],
      uses: ["com.coremedia.cms.editor.sdk.premular.PropertyField"]
    };
});
