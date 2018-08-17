Ext.define("com.coremedia.personalization.ui.condition.IntegerCondition", function(IntegerCondition) {/*package com.coremedia.personalization.ui.condition{
import com.coremedia.personalization.ui.condition.*;
import net.jangaroo.ext.Exml;
/**
 This IntegerCondition panel is used to define conditions using integer values.

 <p>The default validation type used for the value field is: <code>/^\d+$/</code></p>

 <p>The names used for the available operators can be overridden by a dictionary supplied via the <b>operatorNames</b> property.</p>
 <p>The available operators and their default names are:
 <ul>
 <li>lt: 'less'</li>
 <li>le: 'less or equal'</li>
 <li>eq: 'equal'</li>
 <li>ge: 'greater or equal'</li>
 <li>gt: 'greater'</li>
 </ul></p>

 * /
public class IntegerCondition extends IntegerConditionBase{

    public static const xtype:String = "com.coremedia.personalization.ui.config.integerCondition";

    public*/function IntegerCondition$(config/*:IntegerCondition = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.personalization.ui.condition.IntegerConditionBase*/ =AS3.cast(com.coremedia.personalization.ui.condition.IntegerConditionBase,{});
    var defaults_$1/*:IntegerCondition*/ =AS3.cast(IntegerCondition,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$YqTg(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.personalization.ui.condition.IntegerConditionBase",
      alias: "widget.com.coremedia.personalization.ui.config.integerCondition",
      constructor: IntegerCondition$,
      super$YqTg: function() {
        com.coremedia.personalization.ui.condition.IntegerConditionBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.personalization.ui.condition.IntegerConditionBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
