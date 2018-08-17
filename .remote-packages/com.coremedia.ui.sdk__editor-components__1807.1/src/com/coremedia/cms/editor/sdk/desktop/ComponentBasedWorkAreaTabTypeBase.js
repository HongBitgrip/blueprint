Ext.define("com.coremedia.cms.editor.sdk.desktop.ComponentBasedWorkAreaTabTypeBase", function(ComponentBasedWorkAreaTabTypeBase) {/*package com.coremedia.cms.editor.sdk.desktop {
import com.coremedia.ui.data.ValueExpression;

import ext.ComponentManager;
import ext.Ext;
import ext.panel.Panel;

/**
 * The default implementation of <code>WorkAreaTabType</code>, which creates a new tab type based on a tab
 * component template (config object).
 * /
public class ComponentBasedWorkAreaTabTypeBase implements WorkAreaTabType {

  private var tabComponentConfig:Panel;

  public*/ function ComponentBasedWorkAreaTabTypeBase$(config/*:ComponentBasedWorkAreaTabType = null*/) {if(arguments.length<=0)config=null;
    this.tabComponentConfig$ZWs0 = AS3.getBindable(config,"tabComponent");
  }/*

  public*/ function getId()/*:String*/ {
    return this.tabComponentConfig$ZWs0.xtype;
  }/*

  public*/ function createTab(state/*:Object*/, callback/*:Function*/)/*:void*/ {
    var panel/*:Panel*/ = AS3.cast(Ext.panel.Panel,Ext.ComponentManager.create(Ext.apply({}, state || {}, this.tabComponentConfig$ZWs0)));
    callback(panel, this, state);
  }/*

  public*/ function getStateValueExpression(workAreaTab/*:Panel*/)/*:ValueExpression*/ {
    return null;
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.cms.editor.sdk.desktop.WorkAreaTabType"],
      tabComponentConfig$ZWs0: null,
      constructor: ComponentBasedWorkAreaTabTypeBase$,
      getId: getId,
      createTab: createTab,
      getStateValueExpression: getStateValueExpression,
      requires: [
        "Ext",
        "Ext.ComponentManager",
        "Ext.panel.Panel",
        "com.coremedia.cms.editor.sdk.desktop.WorkAreaTabType"
      ]
    };
});
