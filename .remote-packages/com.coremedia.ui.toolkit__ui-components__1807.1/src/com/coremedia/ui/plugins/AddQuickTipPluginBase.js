Ext.define("com.coremedia.ui.plugins.AddQuickTipPluginBase", function(AddQuickTipPluginBase) {/*package com.coremedia.ui.plugins {

import com.coremedia.ui.components.IconDisplayField;
import com.coremedia.ui.components.StatefulQuickTip;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.util.QtipUtil;

import ext.Component;
import ext.dom.Element;
import ext.panel.Panel;
import ext.plugin.AbstractPlugin;

import mx.resources.ResourceManager;

[PublicApi]
public class AddQuickTipPluginBase extends AbstractPlugin {
  private var component:Component;
  private var text:String;
  private var bindTo:ValueExpression;
  private var elementMapping:Function;

  public*/ function AddQuickTipPluginBase$(config/*:AddQuickTipPlugin = null*/) {if(arguments.length<=0)config=null;
    this.text$qpSX = AS3.getBindable(config,"text");
    this.bindTo$qpSX = AS3.getBindable(config,"bindTo");
    this.elementMapping$qpSX = AS3.getBindable(config,"elementMapping");
    this.super$qpSX(config);
  }/*

  override public*/ function init(component/*:Component*/)/*:void*/ {var this$=this;
    this.component$qpSX = component;
    if (this.bindTo$qpSX) {
      this.bindTo$qpSX.addChangeListener(changeListener);
      component.mon(component, "beforedestroy", function ()/*:void*/ {
        this$.bindTo$qpSX.removeChangeListener(changeListener);
      });
      changeListener();
    } else if (this.text$qpSX) {
      this.addQuickTip$qpSX(component, this.text$qpSX);
    }

    function changeListener()/*:void*/ {
      this$.addQuickTip$qpSX(component, this$.bindTo$qpSX.getValue());
    }
  }/*

  private*/ function addQuickTip(component/*:Component*/, text/*:String*/)/*:void*/ {var this$=this;
    if (component.rendered) {
      doAddQuickTip();
    } else {
      component.mon(component, "afterrender", doAddQuickTip);
    }

    function doAddQuickTip()/*:void*/ {
      if (AS3.is(component,  Ext.panel.Panel)) {
        var tp/*:StatefulQuickTip*/ = AS3.cast(com.coremedia.ui.components.StatefulQuickTip,{});
        tp.text = text;
        AS3.setBindable(tp,"width" , 200);
        var helpIcon/*:IconDisplayField*/ = AS3.cast(com.coremedia.ui.components.IconDisplayField,{});
        AS3.setBindable(helpIcon,"iconCls" , mx.resources.ResourceManager.getInstance().getString('com.coremedia.icons.CoreIcons', 'help'));
        AS3.setBindable(helpIcon,"tooltip" , tp);
        AS3.cast(Ext.panel.Panel,component).addTool(helpIcon);
      } else {
        var element/*:Element*/ = this$.elementMapping$qpSX ? this$.elementMapping$qpSX(component) : component.el;
        element.dom.setAttribute("data-qtip", com.coremedia.ui.util.QtipUtil.formatStripCodeQtip(text));
      }
    }
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.plugin.Abstract",
      metadata: {"": ["PublicApi"]},
      component$qpSX: null,
      text$qpSX: null,
      bindTo$qpSX: null,
      elementMapping$qpSX: null,
      constructor: AddQuickTipPluginBase$,
      super$qpSX: function() {
        Ext.plugin.Abstract.prototype.constructor.apply(this, arguments);
      },
      init: init,
      addQuickTip$qpSX: addQuickTip,
      requires: [
        "Ext.panel.Panel",
        "Ext.plugin.Abstract",
        "com.coremedia.ui.util.QtipUtil",
        "mx.resources.ResourceManager"
      ],
      uses: [
        "com.coremedia.ui.components.IconDisplayField",
        "com.coremedia.ui.components.StatefulQuickTip"
      ]
    };
});
