Ext.define("com.coremedia.personalization.ui.DateFieldBase", function(DateFieldBase) {/*package com.coremedia.personalization.ui{
import com.coremedia.personalization.ui.*;
import net.jangaroo.ext.Exml;
public class DateFieldBase extends DateFieldBaseBase{

    public static const xtype:String = "com.coremedia.personalization.ui.config.dateFieldBase";

    public*/function DateFieldBase$(config/*:DateFieldBase = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.personalization.ui.DateFieldBaseBase*/ =AS3.cast(com.coremedia.personalization.ui.DateFieldBaseBase,{});
    var defaults_$1/*:DateFieldBase*/ =AS3.cast(DateFieldBase,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$8eSZ(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.personalization.ui.DateFieldBaseBase",
      alias: "widget.com.coremedia.personalization.ui.config.dateFieldBase",
      constructor: DateFieldBase$,
      super$8eSZ: function() {
        com.coremedia.personalization.ui.DateFieldBaseBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.personalization.ui.DateFieldBaseBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
