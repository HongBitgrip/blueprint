Ext.define("com.coremedia.cms.editor.sdk.upload.dialog.FileContainersObservable", function(FileContainersObservable) {/*package com.coremedia.cms.editor.sdk.upload.dialog {

import com.coremedia.cms.editor.sdk.upload.FileWrapper;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.data.beanFactory;

/**
 * Container list observable to handle the status update
 * when the upload file list is changed.
 * /
public class FileContainersObservable {
  private var containers:Array =*/function containers_(){this.containers$kAIa=( []);}/*;

  private var invalidityExpression:ValueExpression;

  public*/ function FileContainersObservable$() {containers_.call(this);
    this.invalidityExpression$kAIa = com.coremedia.ui.data.ValueExpressionFactory.create('invalid', com.coremedia.ui.data.beanFactory.createLocalBean());
    this.invalidityExpression$kAIa.setValue(false);
  }/*

  public*/ function getFiles()/*:Array*/ {
    var files/*:Array*/ = [];
    for (var i/*:int*/ = 0; i < this.size(); i++) {
      var wrapper/*:FileWrapper*/ = this.getAt(i).getFileWrapper();
      files.push(wrapper);
    }
    return files;
  }/*

  public*/ function getInvalidityExpression()/*:ValueExpression*/ {
    return this.invalidityExpression$kAIa;
  }/*

  public*/ function add(fc/*:FileContainer*/)/*:void*/ {
    this.containers$kAIa.push(fc);
    com.coremedia.ui.data.ValueExpressionFactory.create(com.coremedia.cms.editor.sdk.upload.FileWrapper.NAME_PROPERTY, fc.getFileWrapper()).addChangeListener(AS3.bind(this,"validate$kAIa"));
    this.validate$kAIa();
  }/*

  public*/ function remove(fc/*:FileContainer*/)/*:void*/ {
    fc.destroy();
    for (var i/*:int*/ = 0; i < this.containers$kAIa.length; i++) {
      if (this.containers$kAIa[i].getId() === fc.getId()) {
        this.containers$kAIa = this.containers$kAIa.slice(0, i).concat(this.containers$kAIa.slice(i + 1));
        break;
      }
    }
    this.validate$kAIa();
  }/*

  public*/ function getAt(index/*:Number*/)/*:FileContainer*/ {
    return this.containers$kAIa[index];
  }/*

  /**
   * Returns the amount of containers.
   * @return
   * /
  public*/ function size()/*:Number*/ {
    return this.containers$kAIa.length;
  }/*

  /**
   * Returns true if the container list is empty.
   * @return
   * /
  public*/ function isEmpty()/*:Boolean*/ {
    return this.containers$kAIa.length === 0;
  }/*

  private*/ function validate()/*:void*/ {
    if(this.isEmpty()) {
      this.invalidityExpression$kAIa.setValue(true);
      return;
    }
    for (var i/*:int*/ = 0; i < this.containers$kAIa.length; i++) {
      var fc/*:FileContainer*/ = this.containers$kAIa[i];
      if (isEmptyString$static(fc.getFileWrapper().getName())) {
        this.invalidityExpression$kAIa.setValue(true);
        return;
      }
    }
    this.invalidityExpression$kAIa.setValue(false);
  }/*

  private static*/ function isEmptyString$static(value/*:String*/)/*:Boolean*/ {
    return !value || value.length === 0;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      invalidityExpression$kAIa: null,
      constructor: FileContainersObservable$,
      getFiles: getFiles,
      getInvalidityExpression: getInvalidityExpression,
      add: add,
      remove: remove,
      getAt: getAt,
      size: size,
      isEmpty: isEmpty,
      validate$kAIa: validate,
      requires: [
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.data.beanFactory"
      ],
      uses: ["com.coremedia.cms.editor.sdk.upload.FileWrapper"]
    };
});
