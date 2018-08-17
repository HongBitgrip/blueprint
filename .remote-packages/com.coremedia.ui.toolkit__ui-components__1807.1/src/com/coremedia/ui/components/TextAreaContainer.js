Ext.define("com.coremedia.ui.components.TextAreaContainer", function(TextAreaContainer) {/*package com.coremedia.ui.components{
import com.coremedia.ui.components.TextFieldContainer;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.components.StatefulTextArea;
public class TextAreaContainer extends TextFieldContainer{

    public static const xtype:String = "com.coremedia.ui.config.textAreaContainer";

    public*/function TextAreaContainer$(config/*:TextAreaContainer = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:com.coremedia.ui.components.TextFieldContainer*/ =AS3.cast(com.coremedia.ui.components.TextFieldContainer,{});
    var defaults_$1/*:TextAreaContainer*/ =AS3.cast(TextAreaContainer,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    var ui_StatefulTextArea_19_5_$1/*:com.coremedia.ui.components.StatefulTextArea*/ =AS3.cast(com.coremedia.ui.components.StatefulTextArea,{});
    ui_StatefulTextArea_19_5_$1.itemId = "textAreaPropertyField";
    AS3.setBindable(ui_StatefulTextArea_19_5_$1,"readOnly" , AS3.getBindable(config,"readOnly"));
    AS3.setBindable(ui_StatefulTextArea_19_5_$1,"height" , AS3.getBindable(config,"initialHeight") || 100);
    config_$1.items = [ui_StatefulTextArea_19_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$zrVp(config_$1);
  }/*

    /** The initial height of the text area editor textfield in pixels (default: 100). * /
    [Bindable]
    public var initialHeight:Number;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.components.TextFieldContainer",
      alias: "widget.com.coremedia.ui.config.textAreaContainer",
      constructor: TextAreaContainer$,
      super$zrVp: function() {
        com.coremedia.ui.components.TextFieldContainer.prototype.constructor.apply(this, arguments);
      },
      config: {initialHeight: NaN},
      requires: [
        "com.coremedia.ui.components.TextFieldContainer",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.ui.components.StatefulTextArea"]
    };
});
