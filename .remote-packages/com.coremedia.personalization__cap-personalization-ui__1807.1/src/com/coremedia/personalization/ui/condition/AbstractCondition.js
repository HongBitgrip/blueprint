Ext.define("com.coremedia.personalization.ui.condition.AbstractCondition", function(AbstractCondition) {/*package com.coremedia.personalization.ui.condition{
import com.coremedia.personalization.ui.condition.*;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.plugins.HorizontalSpacingPlugin;
public class AbstractCondition extends AbstractConditionBase{

    public static const xtype:String = "com.coremedia.personalization.ui.config.abstractCondition";

    public*/function AbstractCondition$(config/*:AbstractCondition = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.personalization.ui.condition.AbstractConditionBase*/ =AS3.cast(com.coremedia.personalization.ui.condition.AbstractConditionBase,{});
    var defaults_$1/*:AbstractCondition*/ =AS3.cast(AbstractCondition,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    var ui_HorizontalSpacingPlugin_15_5_$1/*:com.coremedia.ui.plugins.HorizontalSpacingPlugin*/ =AS3.cast(com.coremedia.ui.plugins.HorizontalSpacingPlugin,{});
    config_$1.plugins = [ui_HorizontalSpacingPlugin_15_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$NAhC(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.personalization.ui.condition.AbstractConditionBase",
      alias: "widget.com.coremedia.personalization.ui.config.abstractCondition",
      constructor: AbstractCondition$,
      super$NAhC: function() {
        com.coremedia.personalization.ui.condition.AbstractConditionBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.personalization.ui.condition.AbstractConditionBase",
        "com.coremedia.ui.plugins.HorizontalSpacingPlugin",
        "net.jangaroo.ext.Exml"
      ]
    };
});
