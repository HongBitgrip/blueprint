Ext.define("com.coremedia.ui.ckeditor.dialogs.Dialog_cmtableBase", function(Dialog_cmtableBase) {/*package com.coremedia.ui.ckeditor.dialogs {
import com.coremedia.ui.ckeditor.CKDialog;

public class Dialog_cmtableBase extends CKDialog {
  public*/ function Dialog_cmtableBase$(config/*: Dialog_cmtable = null*/) {if(arguments.length<=0)config=null;
    this.super$ZDjs(config);

    var data = {
      txtRows: 3,
      txtCols: 2,
      summary: 'summary'
    };

    this.setData(data);
  }/*

  [Bindable]
  public var editor:Object;*/

  function makeElement(name/*:String*/)/*:**/ {
    return new CKEDITOR['dom'].element(name, AS3.getBindable(this,"editor").document);
  }/*

  override protected*/ function okHandler()/*:void*/ {
    com.coremedia.ui.ckeditor.CKDialog.prototype.okHandler.call(this);

    var table = this.makeElement('table'),
            me = this,
            data = this.getData();
    table.addClass('cke_show_border');

    var tbody = table.append(this.makeElement('tbody')),
            rows = data.txtRows || 0,
            cols = data.txtCols || 0;

    for (var i = 0; i < rows; i++)
    {
      var row = tbody.append(this.makeElement('tr'));
      for (var j = 0; j < cols; j++)
      {
        var cell = row.append(this.makeElement('td'));
        if (!CKEDITOR['env'].ie)
          cell.append(this.makeElement('br'));
      }
    }

    AS3.getBindable(this,"editor").insertElement(table);

    AS3.getBindable(this,"editor").fire('save');
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.ckeditor.CKDialog",
      constructor: Dialog_cmtableBase$,
      super$ZDjs: function() {
        com.coremedia.ui.ckeditor.CKDialog.prototype.constructor.apply(this, arguments);
      },
      makeElement: makeElement,
      okHandler: okHandler,
      config: {editor: null},
      requires: ["com.coremedia.ui.ckeditor.CKDialog"]
    };
});
