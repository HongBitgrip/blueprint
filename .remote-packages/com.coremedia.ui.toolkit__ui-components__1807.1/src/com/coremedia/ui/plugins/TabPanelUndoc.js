Ext.define("com.coremedia.ui.plugins.TabPanelUndoc", function(TabPanelUndoc) {/*package com.coremedia.ui.plugins {
import ext.dom.Element;
import ext.tab.TabPanel;

public class TabPanelUndoc extends TabPanel {

  public*/ function TabPanelUndoc$(config/*:TabPanel = null*/) {if(arguments.length<=0)config=null;
    this.super$pcM_(config);
  }/*

  public native function get scrollRightWidth():int;
  public native function set scrollRightWidth(px:int):void;

  public native function get scrollerWidth():int;
  public native function set scrollerWidth(px:int):void;

  public native function get scrollRight():Element;
  public native function get scrollLeft():Element;

  public native function get edge():Element;

  public native function get addTab():Element;
  public native function set addTab(elem:Element):void;

  public native function get addTabWrap():Element;
  public native function set addTabWrap(elem:Element):void;

  public native function get addTabUl():Element;
  public native function set addTabUl(elem:Element):void;

  public native function get stripWrap():Element;
  public native function set stripWrap(elem:Element):void;

  public native function get strip():Element;
  public native function set strip(elem:Element):void;

}

}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.tab.Panel",
      constructor: TabPanelUndoc$,
      super$pcM_: function() {
        Ext.tab.Panel.prototype.constructor.apply(this, arguments);
      },
      requires: ["Ext.tab.Panel"]
    };
});
