Ext.define("com.coremedia.cms.editor.sdk.components.breadcrumb.BreadcrumbElementMenuItemBase", function(BreadcrumbElementMenuItemBase) {/*package com.coremedia.cms.editor.sdk.components.breadcrumb {

import com.coremedia.ui.models.bem.BEMElement;

import ext.menu.Item;

public class BreadcrumbElementMenuItemBase extends Item {

  /**
   * The model for this breadcrumb element menu item.
   * /
  [Bindable]
  public var model:Object;

  public static const ELEMENT_ACTIVE:BEMElement =*/function ELEMENT_ACTIVE$static_(){BreadcrumbElementMenuItemBase.ELEMENT_ACTIVE=( com.coremedia.cms.editor.sdk.components.breadcrumb.BreadcrumbElementMenu.BREADCRUMB_ELEMENT_MENU_BLOCK.createElement("active"));}/*;

  /**
   * @param config the config object
   * /
  public*/ function BreadcrumbElementMenuItemBase$(config/*:BreadcrumbElementMenuItem = null*/) {if(arguments.length<=0)config=null;
    this.super$u_Xl(config);
    AS3.setBindable(this,"model" , AS3.getBindable(config,"model"));
    if (AS3.getBindable(this,"model").active) {
      this.addCls(BreadcrumbElementMenuItemBase.ELEMENT_ACTIVE.getCSSClass());
    }
  }/*

  public*/ function getText()/*:String*/ {
    return AS3.getBindable(this,"model").text;
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.menu.Item",
      constructor: BreadcrumbElementMenuItemBase$,
      super$u_Xl: function() {
        Ext.menu.Item.prototype.constructor.apply(this, arguments);
      },
      getText: getText,
      config: {model: null},
      statics: {
        ELEMENT_ACTIVE: undefined,
        __initStatics__: function() {
          ELEMENT_ACTIVE$static_();
        }
      },
      requires: ["Ext.menu.Item"],
      uses: ["com.coremedia.cms.editor.sdk.components.breadcrumb.BreadcrumbElementMenu"]
    };
});
