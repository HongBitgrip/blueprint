Ext.define("com.coremedia.blueprint.base.pagegrid.PlacementFieldBase", function(PlacementFieldBase) {/*package com.coremedia.blueprint.base.pagegrid {
import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.ContentPropertyNames;
import com.coremedia.cms.editor.sdk.premular.PropertyFieldGroup;
import com.coremedia.cms.editor.sdk.util.PropertyEditorUtil;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.util.EncodingUtil;
import com.coremedia.ui.util.ObjectUtils;

public class PlacementFieldBase extends PropertyFieldGroup {
  private var storingContentValueExpression:ValueExpression;

  public*/ function PlacementFieldBase$(config/*:PlacementField = null*/) {if(arguments.length<=0)config=null;
    this.super$33Hp(config);

    this.on("expand",AS3.bind( this,"updateLayout"));
  }/*

  internal*/ function getStoringContentValueExpression(config/*:PlacementField*/)/*:ValueExpression*/ {
    if (!this.storingContentValueExpression$33Hp) {
      this.storingContentValueExpression$33Hp = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(com.coremedia.blueprint.base.pagegrid.PageGridUtil.computePageStoringPlacement,
              AS3.getBindable(config,"bindTo","DUMMY"), AS3.getBindable(config,"pageTreeRelation"), AS3.getBindable(config,"structPropertyName"), AS3.getBindable(config,"section"));
    }
    return this.storingContentValueExpression$33Hp;
  }/*

  internal*/ function getReadOnlyValueExpression()/*:ValueExpression*/ {
    return com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(AS3.bind(this,"isReadOnly$33Hp"));
  }/*

  internal*/ function createInheritStateValueExpression(config/*:PlacementField*/)/*:ValueExpression*/ {
    return com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(AS3.bind(this,"computeInheritState$33Hp"), config);
  }/*

  private*/ function computeInheritState(config/*:PlacementField*/)/*:String*/ {
    var content/*:Content*/ = AS3.getBindable(config,"bindTo","DUMMY").getValue();
    var storingContent/*:Content*/ = this.getStoringContentValueExpression(config).getValue();
    if (content === undefined || storingContent === undefined) {
      return undefined;
    }
    if (content === storingContent && !AS3.getBindable(config,"showLocal")) {
      return "hidden";
    }
    if (!storingContent) {
      return "missing";
    }
    var isLocked/*:Boolean*/ = com.coremedia.ui.util.ObjectUtils.getPropertyAt(storingContent, [com.coremedia.cap.content.ContentPropertyNames.PROPERTIES, AS3.getBindable(config,"propertyName"), com.coremedia.blueprint.base.pagegrid.PageGridConstants.LOCKED_PROPERTY_NAME].join("."));
    if (isLocked) {
      return "locked";
    }
    return "inherited";
  }/*

  private*/ function isReadOnly()/*:Boolean*/ {
    var config/*:PlacementField*/ = AS3.cast(com.coremedia.blueprint.base.pagegrid.PlacementField,this.initialConfig);
    var externalForceReadOnlyValue/*:Boolean*/ = AS3.getBindable(config,"forceReadOnlyValueExpression","DUMMY").getValue();
    if (externalForceReadOnlyValue === false) {
      var content/*:Content*/ = AS3.getBindable(config,"bindTo","DUMMY").getValue();
      var isReadOnly/*:Boolean*/ = com.coremedia.cms.editor.sdk.util.PropertyEditorUtil.isReadOnly(content);
      if (isReadOnly === false) {
        var storingContent/*:Content*/ = this.getStoringContentValueExpression(config).getValue();
        if (storingContent === undefined) {
          return undefined;
        }
        return content !== storingContent;
      }
      return isReadOnly;
    }
    return externalForceReadOnlyValue;
  }/*

  internal static*/ function createLocalizedSectionValueExpression$static(config/*:PlacementField*/)/*:ValueExpression*/ {
    return com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(localizeSection$static, config);
  }/*

  private static*/ function localizeSection$static(config/*:PlacementField*/)/*:String*/ {
    var contentTypeName/*:String*/ = AS3.getBindable(config,"bindTo","DUMMY").extendBy("type.name").getValue();
    if (!contentTypeName) {
      return undefined;
    }
    var value/*:String*/ = com.coremedia.cms.editor.sdk.util.PropertyEditorUtil.getLocalizedLabel(contentTypeName, AS3.getBindable(config,"propertyFieldName"));
    return com.coremedia.ui.util.EncodingUtil.encodeForHTML(value);
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.premular.PropertyFieldGroup",
      storingContentValueExpression$33Hp: null,
      constructor: PlacementFieldBase$,
      super$33Hp: function() {
        com.coremedia.cms.editor.sdk.premular.PropertyFieldGroup.prototype.constructor.apply(this, arguments);
      },
      getStoringContentValueExpression: getStoringContentValueExpression,
      getReadOnlyValueExpression: getReadOnlyValueExpression,
      createInheritStateValueExpression: createInheritStateValueExpression,
      computeInheritState$33Hp: computeInheritState,
      isReadOnly$33Hp: isReadOnly,
      statics: {createLocalizedSectionValueExpression: createLocalizedSectionValueExpression$static},
      requires: [
        "com.coremedia.cap.content.ContentPropertyNames",
        "com.coremedia.cms.editor.sdk.premular.PropertyFieldGroup",
        "com.coremedia.cms.editor.sdk.util.PropertyEditorUtil",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.util.EncodingUtil",
        "com.coremedia.ui.util.ObjectUtils"
      ],
      uses: [
        "com.coremedia.blueprint.base.pagegrid.PageGridConstants",
        "com.coremedia.blueprint.base.pagegrid.PageGridUtil",
        "com.coremedia.blueprint.base.pagegrid.PlacementField"
      ]
    };
});
