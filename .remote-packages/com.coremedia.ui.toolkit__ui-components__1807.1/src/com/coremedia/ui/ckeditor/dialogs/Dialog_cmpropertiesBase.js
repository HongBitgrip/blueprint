Ext.define("com.coremedia.ui.ckeditor.dialogs.Dialog_cmpropertiesBase", function(Dialog_cmpropertiesBase) {/*package com.coremedia.ui.ckeditor.dialogs {
import com.coremedia.ui.ckeditor.CKDialog;

public class Dialog_cmpropertiesBase extends CKDialog {

  private var imageStyleGroup:Array =*/function imageStyleGroup_(){this.imageStyleGroup$TJLD=( [
    'float--none',
    'float--left',
    'float--right'
  ]);}/*;

  public*/ function Dialog_cmpropertiesBase$(config/*:Dialog_cmproperties = null*/) {if(arguments.length<=0)config=null;
    this.super$TJLD(config);imageStyleGroup_.call(this);;

    //store the style attribute to the dialog data
    this.setData(this.parseImage$TJLD(AS3.getBindable(this,"editor"), this.getElement$TJLD()));
  }/*

  /**
   * Get the CKEDITOR.dom.element object of the image.
   * /
  private*/ function getElement()/*:**/{
    var selection = AS3.getBindable(this,"editor").getSelection();
    if(selection) {
      var element = selection.getSelectedElement();

      // Check if the selected element is an <img>
      if (element && element.getAscendant('img', true))
        return element;
    }
    return null;
  }/*

  //extract the image float attribute and store the selected element
  private*/ function parseImage(editor, element) {

    // Record down the selected element in the dialog.
    editor.getSelection().selectElement(element);

    var style = "";

    if (!element){
      style = null;
    }

    for (var i = 0; i < this.imageStyleGroup$TJLD.length; i++){
      if (element.hasClass(this.imageStyleGroup$TJLD[i])){
        style = this.imageStyleGroup$TJLD[i];
        break;
      }
    }

    return {style: {style: style}};
  }/*

  [Bindable]
  public var editor:Object;

  override protected*/ function okHandler()/*:void*/ {
    com.coremedia.ui.ckeditor.CKDialog.prototype.okHandler.call(this);

    var style;
    var data = this.getData();

    //get the style attribute out of data and store it in style
    if (data.style){
      style = data.style.style;
    }

    AS3.getBindable(this,"editor").fire('saveSnapshot');

    var element = AS3.getBindable(this,"editor").getSelection().getSelectedElement();

    //write the style back to the image
    if (element) {
      //remove all image float attributes
      for (var i = 0; i < this.imageStyleGroup$TJLD.length; i++){
        if (element.hasClass(this.imageStyleGroup$TJLD[i])){
          element.removeClass(this.imageStyleGroup$TJLD[i]);
        }
      }

      if (style !== ""){
        element.addClass(style);
      }

      //delete this._.selectedElement;
    }

    AS3.getBindable(this,"editor").fire('saveSnapshot');
    AS3.getBindable(this,"editor").fire('save');
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.ckeditor.CKDialog",
      constructor: Dialog_cmpropertiesBase$,
      super$TJLD: function() {
        com.coremedia.ui.ckeditor.CKDialog.prototype.constructor.apply(this, arguments);
      },
      getElement$TJLD: getElement,
      parseImage$TJLD: parseImage,
      okHandler: okHandler,
      config: {editor: null},
      requires: ["com.coremedia.ui.ckeditor.CKDialog"]
    };
});
