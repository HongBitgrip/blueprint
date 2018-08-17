Ext.define("com.coremedia.ui.context.expression.ContextExpressionMap", function(ContextExpressionMap) {/*package com.coremedia.ui.context.expression {
import com.coremedia.ui.data.ValueExpression;

public class ContextExpressionMap {
  private var objectContextExpressions:Array =*/function objectContextExpressions_(){this.objectContextExpressions$jAw8=( []);}/*;
  public*/ function get(object/*:Object*/, context/*:String*/)/*:ValueExpression*/ {
    var filtered/*:Array*/ = this.objectContextExpressions$jAw8.filter(function(objectContextExpression/*:ObjectContextExpression*/)/*:Boolean*/ {
      return object === objectContextExpression.object && context === objectContextExpression.context;
    });
    return filtered.length > 0 ? filtered[0].expression : null;
  }/*

  public*/ function add(object/*:Object*/, context/*:String*/, expresson/*:ValueExpression*/)/*:void*/ {
    var objectContextExpression/*:ObjectContextExpression*/ = new com.coremedia.ui.context.expression.ObjectContextExpression();
    objectContextExpression.object = object;
    objectContextExpression.context = context;
    objectContextExpression.expression = expresson;
    this.objectContextExpressions$jAw8.push(objectContextExpression);
  }/*

  public*/ function remove(object/*:Object*/)/*:void*/ {
    this.objectContextExpressions$jAw8 = this.objectContextExpressions$jAw8.filter(function(objectContextExpression/*:ObjectContextExpression*/)/*:Boolean*/ {
      return object !== objectContextExpression.object;
    });
  }/*
}*/function ContextExpressionMap$() {objectContextExpressions_.call(this);}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      get: get,
      add: add,
      remove: remove,
      constructor: ContextExpressionMap$,
      uses: ["com.coremedia.ui.context.expression.ObjectContextExpression"]
    };
});
