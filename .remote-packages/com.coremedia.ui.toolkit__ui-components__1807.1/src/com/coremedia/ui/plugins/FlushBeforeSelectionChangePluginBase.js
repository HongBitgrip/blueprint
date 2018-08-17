Ext.define("com.coremedia.ui.plugins.FlushBeforeSelectionChangePluginBase", function(FlushBeforeSelectionChangePluginBase) {/*package com.coremedia.ui.plugins {
import com.coremedia.ui.data.Bean;
import com.coremedia.ui.data.RemoteBean;
import com.coremedia.ui.logging.Logger;
import com.coremedia.ui.store.BeanRecord;

import ext.Component;
import ext.Plugin;
import ext.data.Model;
import ext.grid.GridPanel;
import ext.selection.RowSelectionModel;
import ext.selection.SelectionModel;

public class FlushBeforeSelectionChangePluginBase implements Plugin {

  /**
   * A plugin to flush the change before changing the selection.
   * It currently applies only to a grid panel
   *
   * @param config the config object
   * /
  public*/ function FlushBeforeSelectionChangePluginBase$(config/*:FlushBeforeSelectionChangePlugin = null*/) {if(arguments.length<=0)config=null;
  }/*

  public*/ function init(component/*:Component*/)/*:void*/ {
    if (AS3.is(component,  Ext.grid.Panel)) {
      var selectionModel/*:SelectionModel*/ = (AS3.as(component,  Ext.grid.Panel)).getSelectionModel();
      if (AS3.is(selectionModel,  Ext.selection.RowModel)){
        (AS3.as(selectionModel,  Ext.selection.RowModel)).addListener('beforerowselect',AS3.bind( this,"beforeUpdateSelectionFromGrid$ZiGF"));
      }
    }

  }/*

  private*/ function beforeUpdateSelectionFromGrid(selectionModel/*:RowSelectionModel*/, rowIndex/*:Number*/, keepExisting/*:Boolean*/, newRecord/*:Model*/)/*:void*/ {
    var oldRecord/*:Model*/ = selectionModel.getSelection()[0];
    if (oldRecord &&AS3.is( oldRecord,  com.coremedia.ui.store.BeanRecord)) {
      var bean/*:Bean*/ = (AS3.as(oldRecord,  com.coremedia.ui.store.BeanRecord)).getBean();
      if (bean &&AS3.is( bean,  com.coremedia.ui.data.RemoteBean)) {
        var oldBean/*:RemoteBean*/ =AS3.as( bean,  com.coremedia.ui.data.RemoteBean);
        //todo: remove this workaround (it should avoid the double flushing. This function is invoked twice before changing the selection!!. Ext bug?)
        if (newRecord &&AS3.is( newRecord,  com.coremedia.ui.store.BeanRecord)){
          var newBean/*:Bean*/ = (AS3.as(newRecord,  com.coremedia.ui.store.BeanRecord)).getBean();
          if (oldBean && oldBean !== newBean) {
            oldBean.flush(function()/*:void*/ {
              com.coremedia.ui.logging.Logger.debug(com.coremedia.ui.plugins.BindSelectionPlugin + ": Flushed: " + oldBean);
            });
          }
        }
      }
    }

  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["ext.Plugin"],
      constructor: FlushBeforeSelectionChangePluginBase$,
      init: init,
      beforeUpdateSelectionFromGrid$ZiGF: beforeUpdateSelectionFromGrid,
      requires: [
        "Ext.grid.Panel",
        "Ext.selection.RowModel",
        "com.coremedia.ui.data.RemoteBean",
        "com.coremedia.ui.logging.Logger",
        "ext.Plugin"
      ],
      uses: [
        "com.coremedia.ui.plugins.BindSelectionPlugin",
        "com.coremedia.ui.store.BeanRecord"
      ]
    };
});
