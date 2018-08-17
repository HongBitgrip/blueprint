Ext.define("com.coremedia.ui.components.fileupload.FileUploadFieldBase", function(FileUploadFieldBase) {/* /*!
 * Ext JS Library 3.2.0
 * Copyright(c) 2006-2010 Ext JS, Inc.
 * licensing@extjs.com
 * http://www.extjs.com/license
 *
 * Translated from http://www.extjs.com/deploy/dev/examples/ux/fileuploadfield/FileUploadField.js
 * to Jangaroo Ext AS by CoreMedia AG, Copyright (c) 2010
 * /
package com.coremedia.ui.components.fileupload {
import ext.Ext;
import ext.Template;
import ext.button.Button;
import ext.dom.Element;
import ext.form.field.TextField;

/**
 * Fires when the underlying file input field's value has changed from the user
 * selecting a new file from the system file selection dialog.
 * Parameters:
 * <ul>
 *   <li>
 *     <code>component:FileUploadFieldBase</code> this component
 *   </li>
 *   <li>
 *     <code>value:*</code> the file value returned by the underlying file input field
 *   </li>
 * </ul>
 * /
[Event(name = "fileselected")] // NOSONAR - no type

/**
 * Creates a file upload field.
 * /
public class FileUploadFieldBase extends TextField {

  private var buttonText:String = "Browse...";
  private var buttonOnly:Boolean = false;
  private var buttonOffset:int = 3;
  private var buttonCfg:Object;
  private var button:Button;
  private var wrap:Element;
  private var resizeEl:Element;
  private var positionEl:Element;
  private var fileInput:Element;

  public*/ function FileUploadFieldBase$(config/*:FileUploadField = null*/) {if(arguments.length<=0)config=null;
    config = AS3.cast(com.coremedia.ui.components.fileupload.FileUploadField,Ext.apply({}, config));
    this.buttonText$IQbn = AS3.getBindable(config,"buttonText");
    this.buttonOnly$IQbn = AS3.getBindable(config,"buttonOnly");
    this.buttonOffset$IQbn = AS3.getBindable(config,"buttonOffset");
    this.buttonCfg$IQbn = AS3.getBindable(config,"button");
    AS3.setBindable(config,"readOnly" , true);
    this.super$IQbn(config);
  }/*

  override public*/ function autoSize()/*:void*/ {
    // do nothing!
  }/*

  override protected*/ function onRender(parentNode/*:Element*/, containerIdx/*:Number*/)/*:void*/ {
    Ext.form.field.Text.prototype.onRender.call(this,parentNode, containerIdx);

    this.wrap$IQbn = this.el.wrap({cls:'x-form-field-wrap x-form-file-wrap'});
    this.el.addCls('x-form-file-text');
    this.el.dom.removeAttribute('name');
    this.createFileInput$IQbn();

    var btnCfg/*:Object*/ = Ext.apply({
      text: this.buttonText$IQbn
    }, this.buttonCfg$IQbn);
    this.button$IQbn = new Ext.button.Button(AS3.cast(Ext.button.Button,Ext.apply(btnCfg, {
      renderTo: this.wrap$IQbn,
      hideMode: this['hideMode'],
      cls: 'x-simple' + (btnCfg.iconCls ? ' x-btn-icon' : '') + (btnCfg.cls ? ' ' + btnCfg.cls : ''),
      template: new Ext.Template('<div><button></button></div>')
    })));

    if (this.buttonOnly$IQbn) {
      this.el.hide();
      this.wrap$IQbn.setWidth(this.button$IQbn.getEl().getWidth());
    }

    this.bindListeners$IQbn();
    this.resizeEl$IQbn = this.positionEl$IQbn = this.wrap$IQbn;
  }/*

  private*/ function bindListeners()/*:void*/ {var this$=this;
    this.fileInput$IQbn.addListener('mouseenter', function()/*:void*/ {
      this$.button$IQbn.el.addCls(['x-btn-over','x-btn-focus']);
    });
    this.fileInput$IQbn.addListener('mouseleave', function()/*:void*/ {
      this$.button$IQbn.el.removeCls(['x-btn-over','x-btn-focus','x-btn-click']);
    });
    this.fileInput$IQbn.addListener('mousedown', function()/*:void*/ {
      this$.button$IQbn.el.addCls('x-btn-click');
    });
    this.fileInput$IQbn.addListener('mouseup', function()/*:void*/ {
      this$.button$IQbn.el.removeCls(['x-btn-over','x-btn-focus','x-btn-click']);
    });
    var self/*:FileUploadFieldBase*/ = this;
    this.fileInput$IQbn.addListener('change', function()/*:void*/ {
      var v/*:**/ = this$.fileInput$IQbn.dom.value;
      this$.setValue(v);
      this$.fireEvent('fileselected', self, v);
    });
  }/*

  private*/ function createFileInput()/*:void*/ {
    this.fileInput$IQbn = this.wrap$IQbn.createChild({
      id: this.getFileInputId$IQbn(),
      name: this.getName() || this.getId(),
      cls: 'x-form-file',
      tag: 'input',
      type: 'file',
      size: 1
    });
  }/*



  override public*/ function reset()/*:void*/ {
    this.fileInput$IQbn.remove();
    this.createFileInput$IQbn();
    this.bindListeners$IQbn();
    Ext.form.field.Text.prototype.reset.call(this);
  }/*

  private*/ function getFileInputId()/*:String*/ {
    return this.getId() + '-file';
  }/*

  //noinspection JSUntypedDeclaration
  override protected*/ function onResize(w/*:Number*/, h/*:Number*/, rawWidth/*:Number*/, rawHeight/*:Number*/)/*:void*/ {
    Ext.form.field.Text.prototype.onResize.call(this,w, h, rawWidth, rawHeight);

    this.wrap$IQbn.setWidth(w);

    if (!this.buttonOnly$IQbn) {
      var bw/*:int*/ = this.wrap$IQbn.getWidth() - this.button$IQbn.getEl().getWidth() - this.buttonOffset$IQbn;
      this.el.setWidth(bw);
    }
  }/*


  override protected*/ function onDestroy()/*:void*/ {
    Ext.form.field.Text.prototype.onDestroy.call(this);
    Ext.destroy(this.fileInput$IQbn, this.button$IQbn, this.wrap$IQbn);
  }/*

  override protected*/ function onDisable()/*:void*/ {
    Ext.form.field.Text.prototype.onDisable.call(this);
    this.doDisable$IQbn(true);
  }/*

  override protected*/ function onEnable()/*:void*/ {
    Ext.form.field.Text.prototype.onEnable.call(this);
    this.doDisable$IQbn(false);
  }/*

  override protected*/ function onHide(animateTarget/*:* = undefined*/, callback/*:Function = null*/, scope/*:Object = null*/)/*:void*/ {switch(Math.max(arguments.length,1)){case 1:callback=null;case 2:scope=null;}
    this.fileInput$IQbn.hide(false);
    this.button$IQbn.hide();
    Ext.form.field.Text.prototype.onHide.call(this,animateTarget, callback, scope);
  }/*

  override protected*/ function onShow(animateTarget/*:* = undefined*/, callback/*:Function = null*/, scope/*:Object = null*/)/*:void*/ {switch(Math.max(arguments.length,1)){case 1:callback=null;case 2:scope=null;}
    this.fileInput$IQbn.show(false);
    this.button$IQbn.show();
    Ext.form.field.Text.prototype.onShow.call(this,animateTarget, callback, scope);
  }/*

  private*/ function doDisable(disabled/*:Boolean*/)/*:void*/ {
    this.fileInput$IQbn.dom['disabled'] = disabled;
    this.button$IQbn.setDisabled(disabled);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.form.field.Text",
      metadata: {"": [
        "Event",
        [
          "name",
          "fileselected"
        ]
      ]},
      buttonText$IQbn: "Browse...",
      buttonOnly$IQbn: false,
      buttonOffset$IQbn: 3,
      buttonCfg$IQbn: null,
      button$IQbn: null,
      wrap$IQbn: null,
      resizeEl$IQbn: null,
      positionEl$IQbn: null,
      fileInput$IQbn: null,
      constructor: FileUploadFieldBase$,
      super$IQbn: function() {
        Ext.form.field.Text.prototype.constructor.apply(this, arguments);
      },
      autoSize: autoSize,
      onRender: onRender,
      bindListeners$IQbn: bindListeners,
      createFileInput$IQbn: createFileInput,
      reset: reset,
      getFileInputId$IQbn: getFileInputId,
      onResize: onResize,
      onDestroy: onDestroy,
      onDisable: onDisable,
      onEnable: onEnable,
      onHide: onHide,
      onShow: onShow,
      doDisable$IQbn: doDisable,
      requires: [
        "Ext",
        "Ext.Template",
        "Ext.button.Button",
        "Ext.form.field.Text"
      ],
      uses: ["com.coremedia.ui.components.fileupload.FileUploadField"]
    };
});
