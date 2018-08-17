Ext.define("com.coremedia.ui.components.CustomEditorGridBase", function(CustomEditorGridBase) {/*package com.coremedia.ui.components {
import com.coremedia.ui.data.Bean;
import com.coremedia.ui.store.BeanRecord;
import com.coremedia.ui.store.DataField;
import com.coremedia.ui.util.EncodingUtil;

import ext.Editor;

import ext.data.Model;

import ext.grid.CellContext;
import ext.grid.GridPanel;
import ext.grid.column.Column;
import ext.grid.plugin.CellEditingPlugin;
import ext.util.DelayedTask;

import js.HTMLElement;
import js.KeyEvent;

public class CustomEditorGridBase extends GridPanel {

  public static const DRAG_DROP_PLUGIN_ID:String = "dragdrop";

  private static const*/var DOUBLE_CLICK_PERIOD$static/*:Number*/ = 500;/*
  private static const*/var MIN_WAIT_AFTER_SELECTION_CHANGE$static/*:Number*/;/* =*/function MIN_WAIT_AFTER_SELECTION_CHANGE$static_(){MIN_WAIT_AFTER_SELECTION_CHANGE$static=( DOUBLE_CLICK_PERIOD$static);};/*

  // If set to true, most beforeEdit checks are skipped.
  private var skipBeforeEdit:Boolean = false;
  private var delayedEdit:DelayedTask =*/function delayedEdit_(){this.delayedEdit$arXf=( new Ext.util.DelayedTask(AS3.bind(this,"forceStartEditing")));}/*;

  protected var lastSelectionChange:Number;
  private var lastClickOnEditField:Number =*/function lastClickOnEditField_(){this.lastClickOnEditField$arXf=( new Date().getTime());}/*;

  public*/ function CustomEditorGridBase$(config/*:CustomEditorGrid = null*/) {if(arguments.length<=0)config=null;
    this.super$arXf(config);delayedEdit_.call(this);lastClickOnEditField_.call(this);;
    this.on("rowdblclick",AS3.bind( this,"cancelDelayedEdit$arXf"));
    this.on("beforeedit",AS3.bind( this,"mayEdit$arXf"));
    this.mon(this.selModel, "selectionchange",AS3.bind( this,"setLastSelectionChange$arXf"));
  }/*

  /**
   * ============================= Cell Editing ========================================
   * /

  protected*/ function forceStartEditing(row/*:HTMLElement*/, col/*:Column*/)/*:void*/ {
    this.skipBeforeEdit$arXf = true;

    var cellEditingPlugin/*:CellEditingPlugin*/ = AS3.cast(Ext.grid.plugin.CellEditing,this['editingPlugin']);
    var record/*:Model*/ = this.getView().getRecord(row);

    var editor/*:Editor*/ = AS3.cast(Ext.Editor,cellEditingPlugin['getEditor'](record, col));

    var cellContext/*:CellContext*/ = new Ext.grid.CellContext(this.getView());
    cellContext.setPosition(record, col);
    cellEditingPlugin.startEditByPosition(cellContext);

    // handle escaping in the editor
    // sadly we did not implement escaping for data views the way it is intended (in the renderer), we already escape
    // in the datafield. As changing this would have too much impact, we need to take care when editing a grid cell.
    // The editor always edits the unescaped value, so escaping we did in a BeanRecord needs to be reverted.
    // compare with BeanRecord#set and BeanRecord#copyBeanPropertyToData
    var beanRecord/*:BeanRecord*/ =AS3.as( record,  com.coremedia.ui.store.BeanRecord);
    if (beanRecord) {
      var dataField/*:DataField*/ =AS3.as( beanRecord.getFieldsMap()[col.dataIndex],  com.coremedia.ui.store.DataField);
      if (dataField && dataField.encode !== false) {
        // we do not know for sure if there is only a single editor for a record/col combination or multiple, so the
        // listener can only be attached here
        // using single: true is too risky as we are not sure if beforecomplete is always triggered
        // as the listener will only be attached once (even if called multiple times) just attach it with each edit
        editor.addListener("beforecomplete", beforeComplete$static);
        afterStartEdit$static(editor);
      }
    }

    this.skipBeforeEdit$arXf = false;
  }/*

  protected*/ function isEditClickTriggered(currentTime/*:Number*/)/*:Boolean*/ {
    return currentTime - this.lastSelectionChange > MIN_WAIT_AFTER_SELECTION_CHANGE$static &&
            currentTime - this.lastClickOnEditField$arXf > DOUBLE_CLICK_PERIOD$static;
  }/*

  private*/ function setLastSelectionChange()/*:void*/ {
    this.lastSelectionChange = (new Date()).getTime();
  }/*

  protected*/ function allowEdit(bean/*:Bean*/)/*:Boolean*/ {
    return true;
  }/*

  //noinspection JSUnusedLocalSymbols
  private*/ function mayEdit(plugin/*:CellEditingPlugin*/, event/*:Object*/)/*:Boolean*/ {
    if (this.skipBeforeEdit$arXf) {
      return true;
    }

    // In any case, cancel the current edit.
    plugin.cancelEdit();

    var record/*:BeanRecord*/ =AS3.as( event.record,  com.coremedia.ui.store.BeanRecord);
    if (record) {
      var bean/*:Bean*/ = record.getBean();
      if (bean) {
        var currentTime/*:Number*/ = new Date().getTime();
        var isEditClick/*:Boolean*/ = this.isEditClickTriggered(currentTime);
        this.lastClickOnEditField$arXf = currentTime;

        if (isEditClick && this.allowEdit(bean)) {
          // We have a click on a formerly selected record that is not the second click of a double click.
          // Wait if it is the first click of a double click, then start editing.
          this.delayedEdit$arXf.delay(DOUBLE_CLICK_PERIOD$static, null, null, [event.row, event.column]);
        } else {
          // First click on a row to select it or second click of a double click.
          // Do not schedule new edit operation and cancel existing one.
          this.delayedEdit$arXf.cancel();
        }
      }
    }

    return false;
  }/*

  private static*/ function afterStartEdit$static(editor/*:Editor*/)/*:Boolean*/ {
    editor.setValue(com.coremedia.ui.util.EncodingUtil.decodeFromHTML(editor.getValue()));
    return true;
  }/*

  private static*/ function beforeComplete$static(editor/*:Editor*/)/*:Boolean*/ {
    editor.setValue(com.coremedia.ui.util.EncodingUtil.encodeForHTML(editor.getValue()));
    return true;
  }/*

  private*/ function cancelDelayedEdit()/*:void*/ {
    this.delayedEdit$arXf.cancel();
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.grid.Panel",
      skipBeforeEdit$arXf: false,
      lastSelectionChange: NaN,
      constructor: CustomEditorGridBase$,
      super$arXf: function() {
        Ext.grid.Panel.prototype.constructor.apply(this, arguments);
      },
      forceStartEditing: forceStartEditing,
      isEditClickTriggered: isEditClickTriggered,
      setLastSelectionChange$arXf: setLastSelectionChange,
      allowEdit: allowEdit,
      mayEdit$arXf: mayEdit,
      cancelDelayedEdit$arXf: cancelDelayedEdit,
      statics: {
        DRAG_DROP_PLUGIN_ID: "dragdrop",
        MIN_WAIT_AFTER_SELECTION_CHANGE: undefined,
        __initStatics__: function() {
          MIN_WAIT_AFTER_SELECTION_CHANGE$static_();
        }
      },
      requires: [
        "Ext.Editor",
        "Ext.grid.CellContext",
        "Ext.grid.Panel",
        "Ext.grid.plugin.CellEditing",
        "Ext.util.DelayedTask",
        "com.coremedia.ui.util.EncodingUtil"
      ],
      uses: [
        "com.coremedia.ui.store.BeanRecord",
        "com.coremedia.ui.store.DataField"
      ]
    };
});
