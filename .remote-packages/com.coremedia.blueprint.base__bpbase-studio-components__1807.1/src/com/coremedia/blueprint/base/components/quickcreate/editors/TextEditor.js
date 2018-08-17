Ext.define("com.coremedia.blueprint.base.components.quickcreate.editors.TextEditor", function(TextEditor) {/*package com.coremedia.blueprint.base.components.quickcreate.editors{
import com.coremedia.ui.components.StatefulTextField;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.plugins.BindPropertyPlugin;
import com.coremedia.ui.exml.ValueExpression;
import com.coremedia.ui.plugins.BlockEnterPlugin;
public class TextEditor extends StatefulTextField{

    import com.coremedia.ui.data.Bean;

    public static const xtype:String = "com.coremedia.blueprint.base.components.config.textEditor";

    public*/function TextEditor$(config/*:TextEditor = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:com.coremedia.ui.components.StatefulTextField*/ =AS3.cast(com.coremedia.ui.components.StatefulTextField,{});
    var defaults_$1/*:TextEditor*/ =AS3.cast(TextEditor,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.name =net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"propertyName"));
    AS3.setBindable(config_$1,"fieldLabel" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"label")));
    var ui_BindPropertyPlugin_27_5_$1/*:com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_27_5_$1.bidirectional = true;
    ui_BindPropertyPlugin_27_5_$1.skipIfUndefined = true;
    var ui_ValueExpression_29_9_$1/*:com.coremedia.ui.exml.ValueExpression*/ =AS3.cast(com.coremedia.ui.exml.ValueExpression,{});
    AS3.setBindable(ui_ValueExpression_29_9_$1,"context" , AS3.getBindable(config,"model"));
    AS3.setBindable(ui_ValueExpression_29_9_$1,"expression" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"propertyName")));
    ui_BindPropertyPlugin_27_5_$1.bindTo = new com.coremedia.ui.exml.ValueExpression(ui_ValueExpression_29_9_$1);
    var ui_BlockEnterPlugin_33_5_$1/*:com.coremedia.ui.plugins.BlockEnterPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BlockEnterPlugin,{});
    config_$1.plugins = [ui_BindPropertyPlugin_27_5_$1, ui_BlockEnterPlugin_33_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$Secp(config_$1);
  }/*

    [Bindable]
    public var model:Bean;

    [Bindable]
    public var propertyName:String;


    [Bindable]
    public var label:String;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.components.StatefulTextField",
      alias: "widget.com.coremedia.blueprint.base.components.config.textEditor",
      constructor: TextEditor$,
      super$Secp: function() {
        com.coremedia.ui.components.StatefulTextField.prototype.constructor.apply(this, arguments);
      },
      config: {
        model: null,
        propertyName: null,
        label: null
      },
      requires: [
        "com.coremedia.ui.components.StatefulTextField",
        "com.coremedia.ui.exml.ValueExpression",
        "com.coremedia.ui.plugins.BindPropertyPlugin",
        "com.coremedia.ui.plugins.BlockEnterPlugin",
        "net.jangaroo.ext.Exml"
      ]
    };
});
