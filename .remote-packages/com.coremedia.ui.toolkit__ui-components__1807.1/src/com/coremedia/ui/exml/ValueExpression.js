Ext.define("com.coremedia.ui.exml.ValueExpression", function(ValueExpression) {/*package com.coremedia.ui.exml{
import com.coremedia.ui.exml.*;
import net.jangaroo.ext.Exml;
[PublicApi]
/**

 Create a value expression from the given expression and context.

 @example How to use ui:valueExpression in combination with the ui:bindPropertyPlugin
 <listing version="3.0">
 &lt;ui:bindPropertyPlugin bidirectional=&quot;true&quot;&gt;
 &lt;ui:valueExpression&gt;
 &lt;ui:valueExpression expression=&quot;user.name&quot; context=&quot;{session}&quot;/&gt;
 &lt;/ui:valueExpression&gt;
 &lt;/ui:bindPropertyPlugin&gt;
 </listing>

 @see com.coremedia.ui.data.ValueExpressionFactory#create()
 @see com.coremedia.ui.data.ValueExpression

 * /
public class ValueExpression extends ValueExpressionBase{

    public*/function ValueExpression$(config/*:ValueExpression = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.ui.exml.ValueExpressionBase*/ =AS3.cast(com.coremedia.ui.exml.ValueExpressionBase,{});
    var defaults_$1/*:ValueExpression*/ =AS3.cast(ValueExpression,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$GrqH(config_$1);
  }/*

    /**
     A String in value expression syntax.
     @see com.coremedia.ui.data.ValueExpression
     * /
    [Bindable]
    public var expression:String;


    /**

     A Bean used as the context for the expression, e.g. a property path would start at this Bean
     (defaults to &lt;code>applicationContext&lt;/code> if &lt;code>context&lt;/code> is &lt;code>null&lt;/code>).

     @see com.coremedia.ui.data.#applicationContext

     * /
    [Bindable]
    public var context:Object;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.exml.ValueExpressionBase",
      metadata: {"": ["PublicApi"]},
      constructor: ValueExpression$,
      super$GrqH: function() {
        com.coremedia.ui.exml.ValueExpressionBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        expression: null,
        context: null
      },
      requires: [
        "com.coremedia.ui.exml.ValueExpressionBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
