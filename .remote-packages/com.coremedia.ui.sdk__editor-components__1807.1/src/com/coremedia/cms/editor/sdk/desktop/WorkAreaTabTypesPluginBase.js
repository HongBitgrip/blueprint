Ext.define("com.coremedia.cms.editor.sdk.desktop.WorkAreaTabTypesPluginBase", function(WorkAreaTabTypesPluginBase) {/*package com.coremedia.cms.editor.sdk.desktop {
import ext.Component;
import ext.Plugin;

/**
 * A  plugin that adds new tab types to the <code>WorkArea</code>.
 *
 * @see WorkArea
 * /
public class WorkAreaTabTypesPluginBase implements Plugin {

  private var initialConfig:WorkAreaTabTypesPlugin;

  /**
   * A  plugin that adds new tab types to the <code>WorkArea</code>.
   *
   * @param config the config object
   *
   * @see WorkArea
   * /
  public*/ function WorkAreaTabTypesPluginBase$(config/*:WorkAreaTabTypesPlugin = null*/) {if(arguments.length<=0)config=null;
    this.initialConfig$hTko = config;
  }/*

  public*/ function init(component/*:Component*/)/*:void*/ {
    var workArea/*:WorkArea*/ =AS3.as( component,  com.coremedia.cms.editor.sdk.desktop.WorkArea);
    if (workArea) {
      for (var i/*:int*/ = 0; i < AS3.getBindable(this.initialConfig$hTko,"tabTypes").length; i++) {
        var tabType/*:WorkAreaTabType*/ = AS3.getBindable(this.initialConfig$hTko,"tabTypes")[i];
        workArea.registerTabType(tabType);
      }
      if (AS3.getBindable(this.initialConfig$hTko,"defaultTabTypeId")) {
        workArea.setDefaultTabTypeId(AS3.getBindable(this.initialConfig$hTko,"defaultTabTypeId"));
      }
    } else {
      throw new AS3.Error(component.constructor.$class + " workAreaTabTypesPlugin only works with workArea");
    }
  }/*


}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["ext.Plugin"],
      initialConfig$hTko: null,
      constructor: WorkAreaTabTypesPluginBase$,
      init: init,
      requires: [
        "AS3.Error",
        "ext.Plugin"
      ],
      uses: ["com.coremedia.cms.editor.sdk.desktop.WorkArea"]
    };
});
