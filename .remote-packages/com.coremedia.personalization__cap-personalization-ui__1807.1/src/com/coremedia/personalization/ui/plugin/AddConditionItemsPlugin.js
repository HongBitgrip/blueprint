Ext.define("com.coremedia.personalization.ui.plugin.AddConditionItemsPlugin", function(AddConditionItemsPlugin) {/*package com.coremedia.personalization.ui.plugin {
import com.coremedia.personalization.ui.ConditionsField;
import com.coremedia.personalization.ui.SelectionRulesField;
import com.coremedia.ui.util.ArrayUtils;

import ext.Component;
import ext.Plugin;

/**
 * A plugin that adds conditions to a {@link SelectionRulesField} or a {@link ConditionsField}.
 * /
public class AddConditionItemsPlugin implements Plugin {
  /**
   * @ptype addconditionitems
   * /

  private var items:Array;

  /**
   * @cfg {Array} items The condition-items to be added.
   *
   * @param config
   * /
  public*/ function AddConditionItemsPlugin$(config/*:Addconditionitems = null*/) {if(arguments.length<=0)config=null;
    this.items$sf_u = com.coremedia.ui.util.ArrayUtils.asArray(AS3.getBindable(config,"items"));
  }/*

  public*/ function init(component/*:Component*/)/*:void*/ {
    if (AS3.is(component,  com.coremedia.personalization.ui.SelectionRulesField) ||AS3.is( component,  com.coremedia.personalization.ui.ConditionsField)) {
      component['addConditionItems'](this.items$sf_u);
    } else {
      throw new AS3.Error("plugin is application only to components of type SelectionRulesField or ConditionsField");
    }
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["ext.Plugin"],
      items$sf_u: null,
      constructor: AddConditionItemsPlugin$,
      init: init,
      requires: [
        "AS3.Error",
        "com.coremedia.ui.util.ArrayUtils",
        "ext.Plugin"
      ],
      uses: [
        "com.coremedia.personalization.ui.ConditionsField",
        "com.coremedia.personalization.ui.SelectionRulesField"
      ]
    };
});
