Ext.define("com.coremedia.ui.components.CustomizableDatePicker", function(CustomizableDatePicker) {/*package com.coremedia.ui.components{
import com.coremedia.ui.components.*;
import net.jangaroo.ext.Exml;
/**

 The date picker is customizable by adding style modifiers for dates configured by the modifiersForDate function.
 The signature for the modifiersForDate function is: function (date:Date):Array&lt;String>.
 You can define style classes with the prefix "calendar-day&#45;&#45;" and the given modifiers.

 * /
public class CustomizableDatePicker extends CustomizableDatePickerBase{

    public static const xtype:String = "com.coremedia.ui.config.customizableDatePicker";

    public*/function CustomizableDatePicker$(config/*:CustomizableDatePicker = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.ui.components.CustomizableDatePickerBase*/ =AS3.cast(com.coremedia.ui.components.CustomizableDatePickerBase,{});
    var defaults_$1/*:CustomizableDatePicker*/ =AS3.cast(CustomizableDatePicker,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$7rcC(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.components.CustomizableDatePickerBase",
      alias: "widget.com.coremedia.ui.config.customizableDatePicker",
      constructor: CustomizableDatePicker$,
      super$7rcC: function() {
        com.coremedia.ui.components.CustomizableDatePickerBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.ui.components.CustomizableDatePickerBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
