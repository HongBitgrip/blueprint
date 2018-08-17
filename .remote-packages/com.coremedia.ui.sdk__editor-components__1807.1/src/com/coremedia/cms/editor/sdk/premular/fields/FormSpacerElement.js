Ext.define("com.coremedia.cms.editor.sdk.premular.fields.FormSpacerElement", function(FormSpacerElement) {/*package com.coremedia.cms.editor.sdk.premular.fields{
import ext.Component;
import net.jangaroo.ext.Exml;
[PublicApi]
/** A spacer element inside a document form. * /
public class FormSpacerElement extends Component{

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.formSpacerElement";

    public*/function FormSpacerElement$(config/*:FormSpacerElement = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:ext.Component*/ =AS3.cast(Ext.Component,{});
    var defaults_$1/*:FormSpacerElement*/ =AS3.cast(FormSpacerElement,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.autoEl = {tag: 'div',
                 html: (AS3.getBindable(config,"htmlValue")) ? AS3.getBindable(config,"htmlValue") : ' ' ,
                  cls: (AS3.getBindable(config,"spacerClass")) ? AS3.getBindable(config,"spacerClass") : 'default-spacer-class'};
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$eOgv(config_$1);
  }/*

    /** string containing the title to be displayed * /
    [Bindable]
    public var htmlValue:String;


    /** string containing the class for the spacer element * /
    [Bindable]
    public var spacerClass:String;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.Component",
      metadata: {"": ["PublicApi"]},
      alias: "widget.com.coremedia.cms.editor.sdk.config.formSpacerElement",
      constructor: FormSpacerElement$,
      super$eOgv: function() {
        Ext.Component.prototype.constructor.apply(this, arguments);
      },
      config: {
        htmlValue: null,
        spacerClass: null
      },
      requires: [
        "Ext.Component",
        "net.jangaroo.ext.Exml"
      ]
    };
});
