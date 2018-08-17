Ext.define("com.coremedia.personalization.ui.DateFieldBaseBase", function(DateFieldBaseBase) {/*package com.coremedia.personalization.ui {
import com.coremedia.ui.components.StatefulDateField;

public class DateFieldBaseBase extends StatefulDateField {


  public*/ function DateFieldBaseBase$(config/*:DateFieldBase = null*/) {var this$=this;if(arguments.length<=0)config=null;
    this.super$axYK(config);

    // need to fire a change event when selecting a date via datepicker
    this.addListener('select', function()/*:void*/ {
      this$.fireEvent('change');
    });

    // need to fire a change event when typing a valid date
    this.addListener('valid', function()/*:void*/ {
      this$.fireEvent('change');
    });
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.components.StatefulDateField",
      constructor: DateFieldBaseBase$,
      super$axYK: function() {
        com.coremedia.ui.components.StatefulDateField.prototype.constructor.apply(this, arguments);
      },
      requires: ["com.coremedia.ui.components.StatefulDateField"]
    };
});
