Ext.define("com.coremedia.cms.editor.sdk.util.AnnotatedLinkListHelper", function(AnnotatedLinkListHelper) {/*package com.coremedia.cms.editor.sdk.util {
import com.coremedia.cap.struct.Struct;
import com.coremedia.ui.data.ValueExpression;

public class AnnotatedLinkListHelper {*/

  function AnnotatedLinkListHelper$() {
    //utility class
  }/*

  //noinspection OverlyComplexFunctionJS
  public static*/ function createStructContentLinkListWrapper$static(bindTo/*:ValueExpression*/,
                                                            forceReadOnlyValueExpression/*:ValueExpression*/,
                                                            linkTypeName/*:String = "CMTeasable"*/,
                                                            propertyName/*:String = "targets"*/,
                                                            structListPropertyName/*:String = "links"*/,
                                                            beanPropertyName/*:String = "target"*/)/*:StructContentLinkListWrapper*/ {switch(Math.max(arguments.length,2)){case 2:linkTypeName="CMTeasable";case 3:propertyName="targets";case 4:structListPropertyName="links";case 5:beanPropertyName="target";}
    var linkListWrapperCfg/*:StructContentLinkListWrapper*/ = AS3.cast(com.coremedia.cms.editor.sdk.util.StructContentLinkListWrapper,{});
    AS3.setBindable(linkListWrapperCfg,"bindTo" , bindTo);
    AS3.setBindable(linkListWrapperCfg,"linkTypeName" , linkTypeName);
    AS3.setBindable(linkListWrapperCfg,"propertyName" , propertyName);
    AS3.setBindable(linkListWrapperCfg,"structListPropertyName" , structListPropertyName);
    AS3.setBindable(linkListWrapperCfg,"beanPropertyName" , beanPropertyName);
    AS3.setBindable(linkListWrapperCfg,"readOnlyVE" , com.coremedia.cms.editor.sdk.util.PropertyEditorUtil.createReadOnlyValueExpression(bindTo, forceReadOnlyValueExpression));
    return new com.coremedia.cms.editor.sdk.util.StructContentLinkListWrapper(linkListWrapperCfg);
  }/*

  /**
   * Checks if all properties of the rowIndex-based annotated link list fulfill the following conditions:
   * <ul>
   *   <li><b>Boolean</b>: true</li>
   *   <li><b>Number</b>: Greater than 0</li>
   *   <li><b>String</b>: More than one (non-whitespace) character</li>
   *   <li><b>Struct</b>: <i>Check recursive</i></li>
   * </ul>
   *
   * @param annotatedLinkListProvider IAnnotatedLinkListProvider
   * @param rowIndex Number
   * @return Boolean Returns <b>true</b> if <b>all</b> properties fulfill the type based conditions
   * /
  public static*/ function rowWidgetsAnnotatedBasedOnType$static(annotatedLinkListProvider/*:IAnnotatedLinkListProvider*/, rowIndex/*:Number*/)/*:Boolean*/ {
    if (!annotatedLinkListProvider.getAnnotatedLinkListVE().isLoaded()) {
      return undefined;
    }
    // get struct for row
    var struct/*:Struct*/ =AS3.as( annotatedLinkListProvider.getAnnotatedLinkListVE().getValue()[rowIndex],  com.coremedia.cap.struct.Struct);
    if (!struct) {
      return false;
    }
    // get property names for row excluding the primary bean property name
    var filteredPropertyNames/*:Array*/ = struct.getType().getPropertyNames().filter(function (propertyName/*:String*/)/*:Boolean*/ {
      return propertyName !== annotatedLinkListProvider.getPrimaryPropertyName();
    });
    // check if all properties are in the annotated state
    return filteredPropertyNames.some(function (propertyName/*:String*/)/*:Boolean*/ {
      return isRowWidgetAnnotated$static(struct.get(propertyName));
    });
  }/*

  private static*/ function isRowWidgetAnnotated$static(value/*:**/)/*:Boolean*/ {
    var key/*:**/ = typeof value;
    switch (key.toLowerCase()) {
      case 'boolean':
        return value === true;
      case 'string':
        return value && value.trim().length > 0;
      case 'number':
        return value >= 0;
      case 'object':
        return value !== null;
      case 'struct':
        var struct/*:Struct*/ =AS3.as( value,  com.coremedia.cap.struct.Struct);
        return struct.getType().getPropertyNames().every(function (propertyName/*:String*/)/*:Boolean*/ {
          return isRowWidgetAnnotated$static(struct.get(propertyName));
        });
      default:
        return false;
    }
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: AnnotatedLinkListHelper$,
      statics: {
        createStructContentLinkListWrapper: createStructContentLinkListWrapper$static,
        rowWidgetsAnnotatedBasedOnType: rowWidgetsAnnotatedBasedOnType$static
      },
      requires: ["com.coremedia.cap.struct.Struct"],
      uses: [
        "com.coremedia.cms.editor.sdk.util.PropertyEditorUtil",
        "com.coremedia.cms.editor.sdk.util.StructContentLinkListWrapper"
      ]
    };
});
