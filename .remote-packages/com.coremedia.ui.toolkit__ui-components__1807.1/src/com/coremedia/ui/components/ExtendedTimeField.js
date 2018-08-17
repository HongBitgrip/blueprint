Ext.define("com.coremedia.ui.components.ExtendedTimeField", function(ExtendedTimeField) {/*package com.coremedia.ui.components {
[ResourceBundle('com.coremedia.ui.UI')]
public class ExtendedTimeField extends StatefulTimeField {


  private static const*/var AVERAGE_LETTER_WIDTH$static/*:Number*/ = 11;/*

  public*/ function ExtendedTimeField$(config/*:ExtendedTimeField = null*/) {if(arguments.length<=0)config=null;
    this.super$u8gW(config);
    this.mon(AS3.getBindable(this,"store","DUMMY"),"update",AS3.bind(this,"updatePickerMinWidth$u8gW"));
  }/*

  override protected*/ function afterRender()/*:void*/ {
    com.coremedia.ui.components.StatefulTimeField.prototype.afterRender.call(this);
    this.updatePickerMinWidth$u8gW();
  }/*

  private*/ function updatePickerMinWidth() {
    var storeData/*:Array*/ = AS3.getBindable(this,"store","DUMMY").getData().items;
    var maxStringLength/*:Number*/ = 0;
    for (var i/*:int*/ =0; i < storeData.length; i++) {
      maxStringLength = Math.max(maxStringLength, storeData[i].data.disp.length);
    }
    this.getPicker().setMinWidth(maxStringLength * AVERAGE_LETTER_WIDTH$static);
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.components.StatefulTimeField",
      constructor: ExtendedTimeField$,
      super$u8gW: function() {
        com.coremedia.ui.components.StatefulTimeField.prototype.constructor.apply(this, arguments);
      },
      afterRender: afterRender,
      updatePickerMinWidth$u8gW: updatePickerMinWidth,
      requires: [
        "com.coremedia.ui.UI_properties",
        "com.coremedia.ui.components.StatefulTimeField"
      ]
    };
});
