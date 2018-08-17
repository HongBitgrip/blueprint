Ext.define("com.coremedia.ui.util.ComponentSelector", function(ComponentSelector) {/*package com.coremedia.ui.util {
/**
 * Convenience class to create an Ext.ComponentQuery selector for Ext JS 6.
 * Among others this class escapes dots (.) in the xtype, id or item id.
 * /
internal class ComponentSelector implements IComponentSelector {

  public static*/ function create$static()/*:ComponentSelector*/ {
    return new ComponentSelector();
  }/*

  private var xtype:String;
  private var idOrItemId:String;
  private var attributes:Object;
  private var pseudoClasses:Object;
  private var _shallow:Boolean;*/

  function ComponentSelector$() {
  }/*

  public*/ function _xtype(xtype/*:String*/, shallow/*:Boolean = false*/)/*:IComponentSelector*/ {if(arguments.length<=1)shallow=false;
    this.xtype$A6wK = xtype;
    this._shallow$A6wK = shallow;
    return this;
  }/*

  public*/ function id(id/*:String*/)/*:IComponentSelector*/ {
    this.idOrItemId$A6wK = id;
    return this;
  }/*

  public*/ function itemId(itemId/*:String*/)/*:IComponentSelector*/ {
    this.idOrItemId$A6wK = itemId;
    return this;
  }/*


  public*/ function attr(name/*:String*/, value/*:String*/)/*:IComponentSelector*/ {
    if (!this.attributes$A6wK) {
      this.attributes$A6wK = {};
    }
    this.attributes$A6wK[name] = value;
    return this;
  }/*

  public*/ function pseudoClass(name/*:String*/)/*:IComponentSelector*/ {
    if (!this.pseudoClasses$A6wK) {
      this.pseudoClasses$A6wK = [];
    }
    if (this.pseudoClasses$A6wK.indexOf(name) === -1) {
      this.pseudoClasses$A6wK.push(name);
    }
    return this;
  }/*

  public*/ function focusable()/*:IComponentSelector*/ {
    this.pseudoClass("focusable");
    return this;
  }/*

  public*/ function canfocus()/*:IComponentSelector*/ {
    this.pseudoClass("canfocus");
    return this;
  }/*

  public*/ function build()/*:String*/ {
    var selector/*:String*/ = '';

    if (this.xtype$A6wK) {
      selector = escape$static(this.xtype$A6wK);
      if (this._shallow$A6wK) {
        selector += '(true)';
      }
    }

    if (this.idOrItemId$A6wK) {
      selector += '#' + escape$static(this.idOrItemId$A6wK);
    }

    if (this.attributes$A6wK) {
      for (var attribute/*:String*/ in this.attributes$A6wK) {
        if (this.attributes$A6wK.hasOwnProperty(attribute)) {
          selector += '[' + escape$static(attribute) + '="' + escape$static(this.attributes$A6wK[attribute]) + '"]';
        }
      }
    }

    if (this.pseudoClasses$A6wK) {
      this.pseudoClasses$A6wK.forEach(function (pseudoClass/*:String*/)/*:void*/ {
        selector += ":" + pseudoClass;
      });
    }

    return selector;
  }/*

  private static*/ function escape$static(idOrItemId/*:String*/)/*:String*/ {
    return idOrItemId.replace(/\./g, "\\.");
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.ui.util.IComponentSelector"],
      xtype$A6wK: null,
      idOrItemId$A6wK: null,
      attributes$A6wK: null,
      pseudoClasses$A6wK: null,
      _shallow$A6wK: false,
      constructor: ComponentSelector$,
      _xtype: _xtype,
      id: id,
      itemId: itemId,
      attr: attr,
      pseudoClass: pseudoClass,
      focusable: focusable,
      canfocus: canfocus,
      build: build,
      statics: {create: create$static},
      requires: ["com.coremedia.ui.util.IComponentSelector"]
    };
});
